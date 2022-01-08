//! Module defining functions for evaluating an expression.

use super::{EvalContext, EvalState, ExprOpCodeEngine, GlobalRuntimeState, Target};
use crate::ast::{Expr, FnCallExpr};
use crate::engine::KEYWORD_THIS;
use crate::module::Namespace;
use crate::types::dynamic::AccessMode;
use crate::{Dynamic, Engine, Module, Position, RhaiResult, RhaiResultOf, Scope, Shared, ERR};
use std::num::NonZeroUsize;
#[cfg(feature = "no_std")]
use std::prelude::v1::*;

impl Engine {
    /// Search for a module within an imports stack.
    #[inline]
    #[must_use]
    pub(crate) fn search_imports(
        &self,
        global: &GlobalRuntimeState,
        state: &mut EvalState,
        namespace: &Namespace,
    ) -> Option<Shared<Module>> {
        let root = &namespace[0].name;

        // Qualified - check if the root module is directly indexed
        let index = if state.always_search_scope {
            None
        } else {
            namespace.index()
        };

        if let Some(index) = index {
            let offset = global.num_imported_modules() - index.get();
            Some(global.get_shared_module(offset).unwrap())
        } else {
            global
                .find_module(root)
                .map(|n| global.get_shared_module(n).unwrap())
                .or_else(|| self.global_sub_modules.get(root).cloned())
        }
    }

    /// Search for a variable within the scope or within imports,
    /// depending on whether the variable name is namespace-qualified.
    pub(crate) fn search_namespace<'s>(
        &self,
        scope: &'s mut Scope,
        global: &mut GlobalRuntimeState,
        state: &mut EvalState,
        lib: &[&Module],
        this_ptr: &'s mut Option<&mut Dynamic>,
        expr: &Expr,
    ) -> RhaiResultOf<(Target<'s>, Position)> {
        match expr {
            Expr::Variable(Some(_), _, _) => {
                self.search_scope_only(scope, global, state, lib, this_ptr, expr)
            }
            Expr::Variable(None, _var_pos, v) => match v.as_ref() {
                // Normal variable access
                (_, None, _) => self.search_scope_only(scope, global, state, lib, this_ptr, expr),

                // Qualified variable access
                #[cfg(not(feature = "no_module"))]
                (_, Some((namespace, hash_var)), var_name) => {
                    if let Some(module) = self.search_imports(global, state, namespace) {
                        // foo:bar::baz::VARIABLE
                        return match module.get_qualified_var(*hash_var) {
                            Ok(target) => {
                                let mut target = target.clone();
                                // Module variables are constant
                                target.set_access_mode(AccessMode::ReadOnly);
                                Ok((target.into(), *_var_pos))
                            }
                            Err(err) => Err(match *err {
                                ERR::ErrorVariableNotFound(_, _) => ERR::ErrorVariableNotFound(
                                    format!(
                                        "{}{}{}",
                                        namespace,
                                        crate::tokenizer::Token::DoubleColon.literal_syntax(),
                                        var_name
                                    ),
                                    namespace[0].pos,
                                )
                                .into(),
                                _ => err.fill_position(*_var_pos),
                            }),
                        };
                    }

                    #[cfg(not(feature = "no_function"))]
                    if namespace.len() == 1 && namespace[0].name == crate::engine::KEYWORD_GLOBAL {
                        // global::VARIABLE
                        let global_constants = global.constants_mut();

                        if let Some(mut guard) = global_constants {
                            if let Some(value) = guard.get_mut(var_name) {
                                let mut target: Target = value.clone().into();
                                // Module variables are constant
                                target.set_access_mode(AccessMode::ReadOnly);
                                return Ok((target.into(), *_var_pos));
                            }
                        }

                        return Err(ERR::ErrorVariableNotFound(
                            format!(
                                "{}{}{}",
                                namespace,
                                crate::tokenizer::Token::DoubleColon.literal_syntax(),
                                var_name
                            ),
                            namespace[0].pos,
                        )
                        .into());
                    }

                    Err(ERR::ErrorModuleNotFound(namespace.to_string(), namespace[0].pos).into())
                }

                #[cfg(feature = "no_module")]
                (_, Some((_, _)), _) => unreachable!("qualified access under no_module"),
            },
            _ => unreachable!("Expr::Variable expected but gets {:?}", expr),
        }
    }

    /// Search for a variable within the scope
    ///
    /// # Panics
    ///
    /// Panics if `expr` is not [`Expr::Variable`].
    pub(crate) fn search_scope_only<'s>(
        &self,
        scope: &'s mut Scope,
        global: &mut GlobalRuntimeState,
        state: &mut EvalState,
        lib: &[&Module],
        this_ptr: &'s mut Option<&mut Dynamic>,
        expr: &Expr,
    ) -> RhaiResultOf<(Target<'s>, Position)> {
        // Make sure that the pointer indirection is taken only when absolutely necessary.

        let (index, var_pos) = match expr {
            // Check if the variable is `this`
            Expr::Variable(None, pos, v) if v.0.is_none() && v.2 == KEYWORD_THIS => {
                return if let Some(val) = this_ptr {
                    Ok(((*val).into(), *pos))
                } else {
                    Err(ERR::ErrorUnboundThis(*pos).into())
                }
            }
            _ if state.always_search_scope => (0, expr.position()),
            Expr::Variable(Some(i), pos, _) => (i.get() as usize, *pos),
            Expr::Variable(None, pos, v) => (v.0.map(NonZeroUsize::get).unwrap_or(0), *pos),
            _ => unreachable!("Expr::Variable expected but gets {:?}", expr),
        };

        // Check the variable resolver, if any
        if let Some(ref resolve_var) = self.resolve_var {
            let context = EvalContext {
                engine: self,
                scope,
                global,
                state,
                lib,
                this_ptr,
                level: 0,
            };
            match resolve_var(
                expr.get_variable_name(true).expect("`Expr::Variable`"),
                index,
                &context,
            ) {
                Ok(Some(mut result)) => {
                    result.set_access_mode(AccessMode::ReadOnly);
                    return Ok((result.into(), var_pos));
                }
                Ok(None) => (),
                Err(err) => return Err(err.fill_position(var_pos)),
            }
        }

        let index = if index > 0 {
            scope.len() - index
        } else {
            // Find the variable in the scope
            let var_name = expr.get_variable_name(true).expect("`Expr::Variable`");
            scope
                .get_index(var_name)
                .ok_or_else(|| ERR::ErrorVariableNotFound(var_name.to_string(), var_pos))?
                .0
        };

        let val = scope.get_mut_by_index(index);

        Ok((val.into(), var_pos))
    }

    /// Evaluate a function call expression.
    pub(crate) fn eval_fn_call_expr(
        &self,
        scope: &mut Scope,
        global: &mut GlobalRuntimeState,
        state: &mut EvalState,
        lib: &[&Module],
        this_ptr: &mut Option<&mut Dynamic>,
        expr: &FnCallExpr,
        pos: Position,
        level: usize,
    ) -> RhaiResult {
        let FnCallExpr {
            name,
            namespace,
            capture_parent_scope: capture,
            hashes,
            args,
            constants,
            ..
        } = expr;

        if let Some(namespace) = namespace.as_ref() {
            // Qualified function call
            let hash = hashes.native;

            self.make_qualified_function_call(
                scope, global, state, lib, this_ptr, namespace, name, args, constants, hash, pos,
                level,
            )
        } else {
            // Normal function call
            let (first_arg, rest_args) = args.split_first().map_or_else(
                || (None, args.as_ref()),
                |(first, rest)| (Some(first), rest),
            );

            self.make_function_call(
                scope, global, state, lib, this_ptr, name, first_arg, rest_args, constants,
                *hashes, pos, *capture, level,
            )
        }
    }

    /// Evaluate an expression.
    pub(crate) fn eval_expr(
        &self,
        scope: &mut Scope,
        global: &mut GlobalRuntimeState,
        state: &mut EvalState,
        lib: &[&Module],
        this_ptr: &mut Option<&mut Dynamic>,
        expr: &Expr,
        level: usize,
    ) -> RhaiResult {
        // Coded this way for better branch prediction.
        // Popular branches are lifted out of the `match` statement into their own branches.

        // Function calls should account for a relatively larger portion of expressions because
        // binary operators are also function calls.
        if let Expr::FnCall(x, pos) = expr {
            #[cfg(not(feature = "unchecked"))]
            self.inc_operations(&mut global.num_operations, expr.position())?;

            let nested = !x.is_qualified()
                && x.args.iter().any(|e| match e {
                    Expr::FnCall(_, _) | Expr::And(_, _) | Expr::Or(_, _) => true,
                    _ => false,
                });

            return if nested {
                ExprOpCodeEngine::new(expr).run(self, scope, global, state, lib, this_ptr, level)
            } else {
                self.eval_fn_call_expr(scope, global, state, lib, this_ptr, x, *pos, level)
            };
        }

        // Then variable access.
        // We shouldn't do this for too many variants because, soon or later, the added comparisons
        // will cost more than the mis-predicted `match` branch.
        if let Expr::Variable(index, var_pos, x) = expr {
            #[cfg(not(feature = "unchecked"))]
            self.inc_operations(&mut global.num_operations, expr.position())?;

            return if index.is_none() && x.0.is_none() && x.2 == KEYWORD_THIS {
                this_ptr
                    .as_deref()
                    .cloned()
                    .ok_or_else(|| ERR::ErrorUnboundThis(*var_pos).into())
            } else {
                self.search_namespace(scope, global, state, lib, this_ptr, expr)
                    .map(|(val, _)| val.take_or_clone())
            };
        }

        #[cfg(not(feature = "unchecked"))]
        self.inc_operations(&mut global.num_operations, expr.position())?;

        match expr {
            // Constants
            Expr::DynamicConstant(x, _) => Ok(x.as_ref().clone()),
            Expr::IntegerConstant(x, _) => Ok((*x).into()),
            #[cfg(not(feature = "no_float"))]
            Expr::FloatConstant(x, _) => Ok((*x).into()),
            Expr::StringConstant(x, _) => Ok(x.clone().into()),
            Expr::CharConstant(x, _) => Ok((*x).into()),
            Expr::BoolConstant(x, _) => Ok((*x).into()),
            Expr::Unit(_) => Ok(Dynamic::UNIT),

            Expr::Stmt(x) if x.is_empty() => Ok(Dynamic::UNIT),
            Expr::Stmt(x) => {
                self.eval_stmt_block(scope, global, state, lib, this_ptr, x, true, level)
            }

            #[cfg(not(feature = "no_index"))]
            Expr::Index(_, _, _) => {
                self.eval_dot_index_chain(scope, global, state, lib, this_ptr, expr, level, None)
            }

            #[cfg(not(feature = "no_object"))]
            Expr::Dot(_, _, _) => {
                self.eval_dot_index_chain(scope, global, state, lib, this_ptr, expr, level, None)
            }

            _ => ExprOpCodeEngine::new(expr).run(self, scope, global, state, lib, this_ptr, level),
        }
    }
}

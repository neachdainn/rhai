//! Module containing unit tests.
#![cfg(test)]

/// This test is to make sure no code changes increase the sizes of critical data structures.
#[test]
fn check_struct_sizes() {
    use crate::*;
    use std::mem::size_of;

    const PACKED: bool = cfg!(all(
        target_pointer_width = "32",
        feature = "only_i32",
        any(feature = "no_float", feature = "f32_float")
    ));

    assert_eq!(size_of::<Dynamic>(), if PACKED { 8 } else { 16 });
    assert_eq!(size_of::<Option<Dynamic>>(), if PACKED { 8 } else { 16 });
    assert_eq!(
        size_of::<Position>(),
        if cfg!(feature = "no_position") { 0 } else { 4 }
    );
    assert_eq!(size_of::<ast::Expr>(), if PACKED { 12 } else { 16 });
    assert_eq!(size_of::<Option<ast::Expr>>(), if PACKED { 12 } else { 16 });
    assert_eq!(size_of::<ast::Stmt>(), if PACKED { 24 } else { 32 });
    assert_eq!(size_of::<Option<ast::Stmt>>(), if PACKED { 24 } else { 32 });
    assert_eq!(size_of::<eval::OpCode>(), 16);
    assert_eq!(size_of::<FnPtr>(), if PACKED { 40 } else { 80 });
    assert_eq!(size_of::<Scope>(), if PACKED { 232 } else { 464 });

    #[cfg(target_pointer_width = "64")]
    {
        assert_eq!(size_of::<LexError>(), 56);
        assert_eq!(
            size_of::<ParseError>(),
            if cfg!(feature = "no_position") { 8 } else { 16 }
        );
        assert_eq!(size_of::<EvalAltResult>(), 72);
        assert_eq!(
            size_of::<NativeCallContext>(),
            if cfg!(feature = "no_position") {
                64
            } else {
                72
            }
        );
    }
}

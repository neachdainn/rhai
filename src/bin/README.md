Rhai Tools
==========

Tools for running Rhai scripts.

| Tool                                                                             | Required feature(s) | Description                                         |
| -------------------------------------------------------------------------------- | :-----------------: | --------------------------------------------------- |
| [`rhai-run`](https://github.com/rhaiscript/rhai/blob/main/src/bin/rhai-run.rs)   |                     | runs each filename passed to it as a Rhai script    |
| [`rhai-repl`](https://github.com/rhaiscript/rhai/blob/main/src/bin/rhai-repl.rs) |     `rustyline`     | simple REPL that interactively evaluates statements |
| [`rhai-dbg`](https://github.com/rhaiscript/rhai/blob/main/src/bin/rhai-dbg.rs)   |     `debugging`     | the _Rhai Debugger_                                 |

There is a feature called `bin-features` which automatically includes all the necessary features
required for building these tools.


How to Run
----------

```sh
cargo run --features bin-features --bin sample_app_to_run
```


How to Install
--------------

To install these all tools (with full features), use the following command:

```sh
cargo install --path . --bins  --features bin-features
```

or specifically:

```sh
cargo install --path . --bin rhai-run  --features bin-features
```

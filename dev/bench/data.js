window.BENCHMARK_DATA = {
  "lastUpdate": 1612689477997,
  "repoUrl": "https://github.com/schungx/rhai",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "038e3c2554619ba77754f77449551e4ef73fcbf2",
          "message": "Add FnNamespace for module functions.",
          "timestamp": "2020-11-17T12:23:53+08:00",
          "tree_id": "55c3144fca2adbdabdedfe5ab5b5f423d1dd4ae5",
          "url": "https://github.com/schungx/rhai/commit/038e3c2554619ba77754f77449551e4ef73fcbf2"
        },
        "date": 1605587352343,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 117820,
            "range": "± 9243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 266,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 261,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 435,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1459,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1487,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7282499,
            "range": "± 209720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 642,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 673,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21383,
            "range": "± 642",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20111,
            "range": "± 929",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 428,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 715,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 141,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 139,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 140,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2078228,
            "range": "± 62736",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2023983,
            "range": "± 60182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1996922,
            "range": "± 51590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17450,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8344,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2025,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2061,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 558,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 584,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1174,
            "range": "± 23",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "df72d324ba7264af8bb866fbe42be1c2e864af83",
          "message": "Fix tests.",
          "timestamp": "2020-11-17T12:40:12+08:00",
          "tree_id": "79024d280024850c6a534244c82ba016b58bda12",
          "url": "https://github.com/schungx/rhai/commit/df72d324ba7264af8bb866fbe42be1c2e864af83"
        },
        "date": 1605588387078,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 117824,
            "range": "± 4200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 269,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 273,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 431,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1450,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1481,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7365145,
            "range": "± 69326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 644,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 678,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21946,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20117,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 436,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 718,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 145,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 145,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 151,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2185258,
            "range": "± 17454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2138018,
            "range": "± 9331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2089108,
            "range": "± 22007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17660,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8506,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2001,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2039,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 552,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 579,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1193,
            "range": "± 14",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "bd094d95b4ab142b31030329de14008415ab3f5b",
          "message": "Fix codegen doc error.",
          "timestamp": "2020-11-17T13:11:31+08:00",
          "tree_id": "c14bc8e6b33c76742a06113a62512b774b2529a3",
          "url": "https://github.com/schungx/rhai/commit/bd094d95b4ab142b31030329de14008415ab3f5b"
        },
        "date": 1605590375863,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 119963,
            "range": "± 19739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 244,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 241,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 392,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1381,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1475,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7153814,
            "range": "± 1325091",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 615,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 633,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21740,
            "range": "± 4559",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19354,
            "range": "± 4205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 415,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 668,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 128,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 130,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 120,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1833346,
            "range": "± 430126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1820607,
            "range": "± 310778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1941453,
            "range": "± 372394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17058,
            "range": "± 4027",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7622,
            "range": "± 1689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1759,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1787,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 506,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 533,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1169,
            "range": "± 196",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "21c641d21f790137f8253f5a04bb18fe8ac73434",
          "message": "Set namespace in Module::set_fn_XXX_mut calls.",
          "timestamp": "2020-11-17T15:11:58+08:00",
          "tree_id": "5573d3a990fbd26e9493a7e8c5a17b60d8dcf7eb",
          "url": "https://github.com/schungx/rhai/commit/21c641d21f790137f8253f5a04bb18fe8ac73434"
        },
        "date": 1605626018619,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103665,
            "range": "± 31736",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 270,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 247,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 365,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1192,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1308,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6143011,
            "range": "± 949475",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 520,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 555,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18889,
            "range": "± 3320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18322,
            "range": "± 2908",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 367,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 606,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 115,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 118,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 116,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1696477,
            "range": "± 309872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1787263,
            "range": "± 347162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1688088,
            "range": "± 291844",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 14404,
            "range": "± 2491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6836,
            "range": "± 1025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1706,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1721,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 457,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 504,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 997,
            "range": "± 183",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "1de85d749dd46fe039e5ae9e07b3c34ecbe97cb5",
          "message": "Optimize AST.",
          "timestamp": "2020-11-19T10:41:08+08:00",
          "tree_id": "22b231a4d73fd5134b314d53ed9d1ee0a808676e",
          "url": "https://github.com/schungx/rhai/commit/1de85d749dd46fe039e5ae9e07b3c34ecbe97cb5"
        },
        "date": 1605754151871,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 126658,
            "range": "± 1101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 280,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 279,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 445,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1531,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1559,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7927811,
            "range": "± 653781",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 667,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 694,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23271,
            "range": "± 3018",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21211,
            "range": "± 1499",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 455,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 760,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 133,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 133,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 132,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2194459,
            "range": "± 209177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2145999,
            "range": "± 207506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2101209,
            "range": "± 276962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18639,
            "range": "± 2921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8892,
            "range": "± 1263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2086,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2113,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 570,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 601,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1233,
            "range": "± 123",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "5e4ede6f07be7855cff0a288f0d44a7bc6a474e0",
          "message": "global_module -> global_namespace.",
          "timestamp": "2020-11-19T13:56:03+08:00",
          "tree_id": "46af44980b7e4a6b39947b8d1e765bfc6d3659c8",
          "url": "https://github.com/schungx/rhai/commit/5e4ede6f07be7855cff0a288f0d44a7bc6a474e0"
        },
        "date": 1605766067549,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 124103,
            "range": "± 6613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 270,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 261,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 426,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1399,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1425,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7175877,
            "range": "± 330891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 620,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 658,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21900,
            "range": "± 2774",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20267,
            "range": "± 1177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 426,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 709,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 127,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 127,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 127,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2080386,
            "range": "± 183051",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1986008,
            "range": "± 105171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1952351,
            "range": "± 97400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17069,
            "range": "± 987",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8176,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1944,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1980,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 518,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 563,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1186,
            "range": "± 78",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "b87fa87a75ae3125c77363a31b6e77c3530a733c",
          "message": "Fix internals.",
          "timestamp": "2020-11-19T14:08:58+08:00",
          "tree_id": "53a6bbe1540570bdab00bf0a30a5077ae27a80e7",
          "url": "https://github.com/schungx/rhai/commit/b87fa87a75ae3125c77363a31b6e77c3530a733c"
        },
        "date": 1605793302317,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 126076,
            "range": "± 24498",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 237,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 207,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 396,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1083,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1110,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6627712,
            "range": "± 1103230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 542,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 604,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19155,
            "range": "± 4715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17324,
            "range": "± 3030",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 408,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 630,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 109,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 110,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 107,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2017945,
            "range": "± 807012",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1815932,
            "range": "± 473972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1647159,
            "range": "± 318468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 16903,
            "range": "± 4891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7846,
            "range": "± 1663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1767,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1732,
            "range": "± 422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 481,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 485,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1132,
            "range": "± 213",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "2afcecc6ba0cb4686c3c7848b97d7a0f99d6b053",
          "message": "Fix benchmark.",
          "timestamp": "2020-11-20T10:35:25+08:00",
          "tree_id": "63e0a0bc9ba631af14a5d807fbdfcf0d6eed3a4f",
          "url": "https://github.com/schungx/rhai/commit/2afcecc6ba0cb4686c3c7848b97d7a0f99d6b053"
        },
        "date": 1605840305980,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 127070,
            "range": "± 20295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 267,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 270,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 439,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1401,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1439,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7328242,
            "range": "± 759427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 638,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 685,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20714,
            "range": "± 5343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19339,
            "range": "± 6354",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 427,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 700,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 115,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 117,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 115,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2027073,
            "range": "± 341782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2047701,
            "range": "± 221922",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1994310,
            "range": "± 418112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18283,
            "range": "± 3374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8512,
            "range": "± 1804",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1883,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1953,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 518,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 548,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1241,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1200,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 764,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1077,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 446,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 409,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 254,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 338,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 783,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 402,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 528463,
            "range": "± 102652",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 32259644,
            "range": "± 3389379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3605,
            "range": "± 724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17589,
            "range": "± 3530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5280,
            "range": "± 609",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21734,
            "range": "± 4024",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22347,
            "range": "± 3860",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 50058,
            "range": "± 8468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3829,
            "range": "± 678",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 770,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2046649,
            "range": "± 252588",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "783803ec469a7987a8a5f7e4b51f37f8faf96986",
          "message": "Update comments with links.",
          "timestamp": "2020-11-20T16:52:28+08:00",
          "tree_id": "95b2f4371e89d47701a12793d6526816f320e119",
          "url": "https://github.com/schungx/rhai/commit/783803ec469a7987a8a5f7e4b51f37f8faf96986"
        },
        "date": 1605877710434,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 123847,
            "range": "± 2148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 268,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 248,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 419,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1408,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1436,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7151130,
            "range": "± 413183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 613,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 647,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22287,
            "range": "± 1800",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20035,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 420,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 728,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 122,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 122,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 127,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2092699,
            "range": "± 68807",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2046488,
            "range": "± 63673",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1954662,
            "range": "± 95964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17617,
            "range": "± 765",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8429,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1949,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1973,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 511,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 562,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1163,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1165,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 709,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 974,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 391,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 378,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 248,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 332,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 768,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 397,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 505391,
            "range": "± 45971",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28516230,
            "range": "± 1124270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3600,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18233,
            "range": "± 1334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5518,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21683,
            "range": "± 1485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21693,
            "range": "± 1288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 53127,
            "range": "± 1435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3890,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 780,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2021875,
            "range": "± 37842",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "6069a4cf55105526994777de66af3c69de63bc12",
          "message": "do loop.",
          "timestamp": "2020-11-20T22:23:37+08:00",
          "tree_id": "81d80851cfeb8e3d84033e65a00fe54c19874ef2",
          "url": "https://github.com/schungx/rhai/commit/6069a4cf55105526994777de66af3c69de63bc12"
        },
        "date": 1605882531528,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 118708,
            "range": "± 5575",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 257,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 256,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 416,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1396,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1413,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6995102,
            "range": "± 327969",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 600,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 631,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21938,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19075,
            "range": "± 1925",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 395,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 658,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 123,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 119,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 120,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2033532,
            "range": "± 186967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1871273,
            "range": "± 293086",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1882587,
            "range": "± 227513",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 16507,
            "range": "± 5332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7617,
            "range": "± 1117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1792,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1900,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 491,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 506,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1090,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1085,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 647,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 849,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 346,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 341,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 224,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 281,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 681,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 340,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 451669,
            "range": "± 89301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25003285,
            "range": "± 3488152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3164,
            "range": "± 510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16047,
            "range": "± 2445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4579,
            "range": "± 784",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18821,
            "range": "± 2289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18809,
            "range": "± 2022",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46350,
            "range": "± 4295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3424,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 675,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1728400,
            "range": "± 206753",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "b1ad0695b4c3ca155f55f1547b5be177795ff4e9",
          "message": "Make shadowing variables in custom syntax work.",
          "timestamp": "2020-11-21T12:28:04+08:00",
          "tree_id": "d6862557929059c03c6d55f13f7a974decf8448e",
          "url": "https://github.com/schungx/rhai/commit/b1ad0695b4c3ca155f55f1547b5be177795ff4e9"
        },
        "date": 1605933313776,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 126411,
            "range": "± 13834",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 271,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 265,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 424,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1421,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1481,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7315824,
            "range": "± 8461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 631,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 655,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22094,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20666,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 422,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 709,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2142155,
            "range": "± 2016",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2123485,
            "range": "± 1690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2062821,
            "range": "± 8467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17746,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8607,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1959,
            "range": "± 727",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1988,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 528,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 567,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1163,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1176,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 736,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 983,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 391,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 386,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 255,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 328,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 790,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 393,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 508435,
            "range": "± 2973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28458563,
            "range": "± 84406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3609,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19128,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5491,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21528,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21974,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 53920,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3930,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 769,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2029067,
            "range": "± 25516",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "611f6151d5ab355f1e40bfc58e7d942378198a48",
          "message": "Merge branch 'master' of https://github.com/schungx/rhai",
          "timestamp": "2020-11-21T15:10:44+08:00",
          "tree_id": "5b1bd77f911f901877dd3c606262ac5847045ca3",
          "url": "https://github.com/schungx/rhai/commit/611f6151d5ab355f1e40bfc58e7d942378198a48"
        },
        "date": 1605942950770,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103727,
            "range": "± 1157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 226,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 221,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 361,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1186,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1203,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6161195,
            "range": "± 7749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 525,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 541,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18252,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17148,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 349,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 589,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1758751,
            "range": "± 1792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1727981,
            "range": "± 3480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1682331,
            "range": "± 4075",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 14820,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7064,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1634,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1650,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 441,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 464,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1013,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1002,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 623,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 827,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 325,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 320,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 205,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 275,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 647,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 328,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 429785,
            "range": "± 1061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25345927,
            "range": "± 131934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3196,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15979,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4610,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18260,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18470,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45820,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3330,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 647,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1714341,
            "range": "± 3623",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "eb4636f219a05bc590f9eed844363f47a252d37f",
          "message": "Fix LexError::ImproperSymbol.",
          "timestamp": "2020-11-21T15:15:14+08:00",
          "tree_id": "37771496e6c5975e979dcefe56899dd21d887feb",
          "url": "https://github.com/schungx/rhai/commit/eb4636f219a05bc590f9eed844363f47a252d37f"
        },
        "date": 1605943237949,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 104302,
            "range": "± 904",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 227,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 218,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 365,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1204,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1210,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6282420,
            "range": "± 14563",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 529,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 554,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18202,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16838,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 352,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 594,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 109,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 108,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1759503,
            "range": "± 1608",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1727602,
            "range": "± 4044",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1682032,
            "range": "± 3973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 14722,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7064,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1628,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1653,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 444,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 469,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1011,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1002,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 614,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 827,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 334,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 326,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 215,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 282,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 655,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 336,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 449848,
            "range": "± 9437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25311388,
            "range": "± 85105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3170,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15928,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4628,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18594,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18572,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45662,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3304,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 646,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1691120,
            "range": "± 4016",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "97368da76244ac0efb94cd3641d14016035669e3",
          "message": "Reserve begin/end.",
          "timestamp": "2020-11-21T15:44:17+08:00",
          "tree_id": "b7e9ce2a40e44539cd279754ae78454fa1998dd5",
          "url": "https://github.com/schungx/rhai/commit/97368da76244ac0efb94cd3641d14016035669e3"
        },
        "date": 1605950452372,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 105136,
            "range": "± 22336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 229,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 229,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 380,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1235,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1226,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6404330,
            "range": "± 916798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 534,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 559,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18518,
            "range": "± 2865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17791,
            "range": "± 3045",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 372,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 603,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 106,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 107,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 109,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1843168,
            "range": "± 197608",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1793775,
            "range": "± 223277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1757352,
            "range": "± 252750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 15088,
            "range": "± 2539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7207,
            "range": "± 973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1735,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1723,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 449,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 489,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1017,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1019,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 623,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 857,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 327,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 317,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 204,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 280,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 647,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 344,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 455897,
            "range": "± 64358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24648884,
            "range": "± 1979427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3288,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16090,
            "range": "± 2423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4764,
            "range": "± 623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18768,
            "range": "± 2755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18414,
            "range": "± 2225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46124,
            "range": "± 6672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3410,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 663,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1756905,
            "range": "± 239803",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "254fd16e62bfdb50d4a0ff11aa6f83fa49c5853c",
          "message": "Fix type sizes test.",
          "timestamp": "2020-11-21T17:39:43+08:00",
          "tree_id": "b8639a5a5795f7950d2c7494e55a62225cdb69b1",
          "url": "https://github.com/schungx/rhai/commit/254fd16e62bfdb50d4a0ff11aa6f83fa49c5853c"
        },
        "date": 1605951917298,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103365,
            "range": "± 974",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 229,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 221,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 364,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1196,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1206,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6147161,
            "range": "± 8095",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 526,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 546,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18612,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16993,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 348,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 589,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1767857,
            "range": "± 7186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1730757,
            "range": "± 20224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1685486,
            "range": "± 3072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 14767,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7093,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1637,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1653,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 441,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 468,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1078,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1061,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 619,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 827,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 326,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 320,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 205,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 275,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 664,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 329,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 433931,
            "range": "± 718",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25180517,
            "range": "± 89954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3139,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15686,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4694,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18218,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18253,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44790,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3287,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 650,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1697001,
            "range": "± 5576",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "07fe132e1a0dfafa4d8940be2d6f10597f4d6c4f",
          "message": "Add gen_fn_siguatures API.",
          "timestamp": "2020-11-22T17:21:34+08:00",
          "tree_id": "e95c285385cefe29e29b4140d7380a72dcee62a1",
          "url": "https://github.com/schungx/rhai/commit/07fe132e1a0dfafa4d8940be2d6f10597f4d6c4f"
        },
        "date": 1606037482189,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 308798,
            "range": "± 43376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 229,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 228,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 408,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1199,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1306,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6768402,
            "range": "± 885930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 558,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 600,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21282,
            "range": "± 2451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18531,
            "range": "± 1472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 391,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 622,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 104,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 102,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 108,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1978382,
            "range": "± 328799",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1932738,
            "range": "± 279177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1828031,
            "range": "± 203962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 16658,
            "range": "± 2002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7441,
            "range": "± 1422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1725,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1745,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 449,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 522,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1145,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1140,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 663,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 913,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 366,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 352,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 235,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 309,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 742,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 387,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 492252,
            "range": "± 86565",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29227425,
            "range": "± 3639090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3487,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17640,
            "range": "± 4483",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5067,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20656,
            "range": "± 3252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22047,
            "range": "± 6504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 51056,
            "range": "± 25237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3819,
            "range": "± 975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 638,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1913240,
            "range": "± 363876",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "9edd494000ba6580e7a363404217570a079d1a38",
          "message": "Fix builds.",
          "timestamp": "2020-11-22T17:32:10+08:00",
          "tree_id": "070387984b4041e605198fd28b68ad10a8ba114d",
          "url": "https://github.com/schungx/rhai/commit/9edd494000ba6580e7a363404217570a079d1a38"
        },
        "date": 1606037803030,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 252593,
            "range": "± 46893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 203,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 213,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 406,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1118,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1184,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5804137,
            "range": "± 767392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 491,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 490,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17341,
            "range": "± 2739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16952,
            "range": "± 4657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 349,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 585,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 101,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 101,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 95,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1698829,
            "range": "± 346199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1698344,
            "range": "± 313955",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1615710,
            "range": "± 240655",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 14099,
            "range": "± 2902",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6883,
            "range": "± 1356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1544,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1604,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 436,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 456,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 947,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 879,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 637,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 815,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 334,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 302,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 196,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 276,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 692,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 343,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 419796,
            "range": "± 92530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23105660,
            "range": "± 3572039",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2993,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15383,
            "range": "± 3657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4371,
            "range": "± 669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17382,
            "range": "± 4220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17803,
            "range": "± 3643",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42511,
            "range": "± 8211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3208,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 661,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1666549,
            "range": "± 286803",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "d3f38941268bc1d36e542328d6e22dadf464cc18",
          "message": "Fix typo.",
          "timestamp": "2020-11-22T17:35:33+08:00",
          "tree_id": "e38df43043d41e9d297635629c3a4c9deb469410",
          "url": "https://github.com/schungx/rhai/commit/d3f38941268bc1d36e542328d6e22dadf464cc18"
        },
        "date": 1606038369395,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 331808,
            "range": "± 2780",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 273,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 275,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 471,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1483,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1511,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7635982,
            "range": "± 7379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 657,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 680,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23321,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 22215,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 434,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 735,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2195103,
            "range": "± 2302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2158522,
            "range": "± 4097",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2091649,
            "range": "± 15244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18466,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8812,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2033,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2071,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 551,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 584,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1248,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1226,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 759,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1014,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 405,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 400,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 260,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 345,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 827,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 421,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 536132,
            "range": "± 2679",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 30523213,
            "range": "± 125977",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3985,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19886,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5801,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23412,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23907,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 55649,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4265,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 679,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2140105,
            "range": "± 4626",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "6222f14fcb7db40034524da11d6a3f0851f268d5",
          "message": "Fix no-std build.",
          "timestamp": "2020-11-22T17:49:00+08:00",
          "tree_id": "44de2f8ac2c6144e497fa6c0b0a8a6926addff28",
          "url": "https://github.com/schungx/rhai/commit/6222f14fcb7db40034524da11d6a3f0851f268d5"
        },
        "date": 1606038867065,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 304044,
            "range": "± 60576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 239,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 264,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 453,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1420,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1452,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7405227,
            "range": "± 429440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 632,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 655,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22601,
            "range": "± 2454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21488,
            "range": "± 4743",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 423,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 711,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 128,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 127,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 127,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2123862,
            "range": "± 241739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2098641,
            "range": "± 234087",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2045839,
            "range": "± 193170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17724,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8446,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1959,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2014,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 530,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 569,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1179,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1174,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 735,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 980,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 386,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 386,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 252,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 335,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 796,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 403,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 531952,
            "range": "± 26825",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29796409,
            "range": "± 1726698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3727,
            "range": "± 866",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19097,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5474,
            "range": "± 1896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22173,
            "range": "± 1275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22242,
            "range": "± 2628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 54405,
            "range": "± 7445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3920,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 683,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2066765,
            "range": "± 246192",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "b43223a94fcebbf7300ca1ecfd116c39a8fc04d0",
          "message": "Add get_fn_metadata_list.",
          "timestamp": "2020-11-23T19:11:32+08:00",
          "tree_id": "58fde7ea95c0cf20a6ed0e4f159bac20b5410622",
          "url": "https://github.com/schungx/rhai/commit/b43223a94fcebbf7300ca1ecfd116c39a8fc04d0"
        },
        "date": 1606130265451,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 378092,
            "range": "± 5587",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 268,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 263,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 431,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1485,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1513,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7457983,
            "range": "± 93232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 683,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 710,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22652,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20388,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 426,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 719,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 129,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 127,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2123924,
            "range": "± 57629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2114434,
            "range": "± 32130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2045713,
            "range": "± 59220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17761,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8424,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1961,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2000,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 528,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 565,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1176,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1167,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 729,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 991,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 394,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 387,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 248,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 330,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 782,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 396,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 527503,
            "range": "± 4730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29349523,
            "range": "± 305153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3701,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19321,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5536,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22155,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22416,
            "range": "± 675",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 54417,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3996,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 650,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2014502,
            "range": "± 21008",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "2d734687232973126a1200eeeaea81295d684324",
          "message": "Add doc on Engine::gen_fn_signatures.",
          "timestamp": "2020-11-23T20:27:20+08:00",
          "tree_id": "9a12a3a98d3d24a87ee6f8d4c3e74cc8b91522de",
          "url": "https://github.com/schungx/rhai/commit/2d734687232973126a1200eeeaea81295d684324"
        },
        "date": 1606134640165,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 376692,
            "range": "± 26866",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 268,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 262,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 429,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1431,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1448,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7284506,
            "range": "± 153941",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 628,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 654,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22648,
            "range": "± 713",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20783,
            "range": "± 847",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 421,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 713,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 126,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 127,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2100502,
            "range": "± 61138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2077872,
            "range": "± 63779",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2021902,
            "range": "± 128579",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17706,
            "range": "± 1126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8405,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1948,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1990,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 529,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 564,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1166,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1158,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 730,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 990,
            "range": "± 541",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 388,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 388,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 247,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 330,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 784,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 397,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 519353,
            "range": "± 47301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 30347532,
            "range": "± 3354003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3771,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19138,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5582,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22322,
            "range": "± 850",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22376,
            "range": "± 894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 54019,
            "range": "± 1316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4036,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 652,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2039240,
            "range": "± 484102",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "36aa827e15062889e1f3be80deb280bd1b49dbdd",
          "message": "Simply interned strings dict.",
          "timestamp": "2020-11-23T21:12:57+08:00",
          "tree_id": "c89ccbe6569e4edcc351bd14728b5b794a4c298d",
          "url": "https://github.com/schungx/rhai/commit/36aa827e15062889e1f3be80deb280bd1b49dbdd"
        },
        "date": 1606139683416,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 394883,
            "range": "± 4692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 289,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 275,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 448,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1496,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1512,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7783706,
            "range": "± 17863",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 655,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 713,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23074,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21406,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 438,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 742,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 133,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 133,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 133,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2206541,
            "range": "± 10304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2193060,
            "range": "± 6638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2140268,
            "range": "± 5060",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18408,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8720,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2032,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2069,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 551,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 588,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1216,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1235,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 765,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1039,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 401,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 400,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 260,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 347,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 829,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 416,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 534966,
            "range": "± 2157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 30323302,
            "range": "± 118734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4072,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19848,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5870,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22846,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23160,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 55442,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4111,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 647,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2100284,
            "range": "± 190867",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "86009c70c8f182d0138e89cd3f52e59604a3ee5b",
          "message": "Allow floating point numbers ending in a period.",
          "timestamp": "2020-11-23T22:51:21+08:00",
          "tree_id": "955edcf90ccb2617d4f2c69b466bedf3679a4920",
          "url": "https://github.com/schungx/rhai/commit/86009c70c8f182d0138e89cd3f52e59604a3ee5b"
        },
        "date": 1606143736247,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 419865,
            "range": "± 62351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 274,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 282,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 480,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1498,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1511,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8179371,
            "range": "± 1289172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 653,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 691,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23388,
            "range": "± 2687",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21655,
            "range": "± 4153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 472,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 788,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 135,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 135,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 136,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2419915,
            "range": "± 416996",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2429275,
            "range": "± 513252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2255117,
            "range": "± 513354",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19604,
            "range": "± 3352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9257,
            "range": "± 1475",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2074,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2158,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 556,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 615,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1350,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1307,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 785,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1100,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 428,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 424,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 274,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 372,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 857,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 435,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 591284,
            "range": "± 114565",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 35089450,
            "range": "± 2435811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4031,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19242,
            "range": "± 1767",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5844,
            "range": "± 803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23155,
            "range": "± 2069",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23635,
            "range": "± 2970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 56547,
            "range": "± 10228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4111,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 696,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2265311,
            "range": "± 294707",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "Stephen.Chung@intexact.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "a0979d0c356c9aabd656d6db3af8a7b7cc31e908",
          "message": "Code cleanup",
          "timestamp": "2020-11-25T09:36:06+08:00",
          "tree_id": "bb5135683bf394669429d0adebe735167356736e",
          "url": "https://github.com/schungx/rhai/commit/a0979d0c356c9aabd656d6db3af8a7b7cc31e908"
        },
        "date": 1606271209940,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 363252,
            "range": "± 19427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 259,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 252,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 445,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1422,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1422,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7030880,
            "range": "± 384855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 599,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 625,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21422,
            "range": "± 1094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20230,
            "range": "± 948",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 406,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 696,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 124,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 122,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 124,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2038318,
            "range": "± 91683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1985917,
            "range": "± 121470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1921740,
            "range": "± 112723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 16695,
            "range": "± 1087",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7877,
            "range": "± 648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1852,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1842,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 517,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 534,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1113,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1348,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 729,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 943,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 377,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 366,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 246,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 331,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 788,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 393,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 515637,
            "range": "± 22970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28206805,
            "range": "± 1435056",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3663,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18187,
            "range": "± 875",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5486,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21177,
            "range": "± 2221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21676,
            "range": "± 1436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 51378,
            "range": "± 1789",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3833,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 638,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1949472,
            "range": "± 118800",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "36546c73257701ab1e2643a02f3fc57a39f64f63",
          "message": "Fix builds",
          "timestamp": "2020-11-27T23:37:59+08:00",
          "tree_id": "ed995b94f5fdc4af3fd604a6cf0c0bc5ff1161b3",
          "url": "https://github.com/schungx/rhai/commit/36546c73257701ab1e2643a02f3fc57a39f64f63"
        },
        "date": 1606491679340,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 371294,
            "range": "± 4180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 265,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 260,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 430,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1443,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1485,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7328697,
            "range": "± 25489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 620,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 648,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21732,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20873,
            "range": "± 2072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 421,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 709,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 127,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 128,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 128,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2114661,
            "range": "± 29741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2096115,
            "range": "± 23171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2035217,
            "range": "± 64139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17633,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8428,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1929,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1960,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 535,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 565,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1172,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1402,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 753,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 983,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 389,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 383,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 253,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 331,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 839,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 399,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 514566,
            "range": "± 7614",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29099317,
            "range": "± 221419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3922,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19185,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5808,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22459,
            "range": "± 867",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22606,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 54840,
            "range": "± 1062",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4119,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 655,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2022789,
            "range": "± 23075",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "b0981602621cd1c5b023ccf1b38bb6fa10328b2d",
          "message": "New CI test.",
          "timestamp": "2020-11-28T16:58:02+08:00",
          "tree_id": "a62360e95df753eeda5be481eff11c9fcb6430c8",
          "url": "https://github.com/schungx/rhai/commit/b0981602621cd1c5b023ccf1b38bb6fa10328b2d"
        },
        "date": 1606554293643,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 380452,
            "range": "± 75969",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 257,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 272,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 417,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1412,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1442,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7380694,
            "range": "± 1170114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 628,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 635,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21628,
            "range": "± 3452",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21031,
            "range": "± 1732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 427,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 707,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 125,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 127,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 127,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2022550,
            "range": "± 727821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1901135,
            "range": "± 536729",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1992290,
            "range": "± 253488",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17501,
            "range": "± 3716",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8422,
            "range": "± 1273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1900,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1939,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 538,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 562,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1187,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1362,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 708,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 958,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 389,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 385,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 250,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 332,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 785,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 397,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 516478,
            "range": "± 46539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29547793,
            "range": "± 1701882",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3905,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19767,
            "range": "± 6175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5819,
            "range": "± 1025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22504,
            "range": "± 1468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22948,
            "range": "± 3135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 55323,
            "range": "± 12523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4215,
            "range": "± 1490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 685,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2044768,
            "range": "± 329141",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "2e33f35f483e65d3f1ce2e6417c1db48e0d9e375",
          "message": "Fix CI test.",
          "timestamp": "2020-11-28T17:11:27+08:00",
          "tree_id": "6ac1225402f3af6812ce866fd43424beb1aa2393",
          "url": "https://github.com/schungx/rhai/commit/2e33f35f483e65d3f1ce2e6417c1db48e0d9e375"
        },
        "date": 1606555043941,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 308261,
            "range": "± 1718",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 215,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 226,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 359,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1198,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1223,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6121742,
            "range": "± 6681",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 518,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 541,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18907,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17440,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 350,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 590,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 106,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 106,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1758398,
            "range": "± 2212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1711398,
            "range": "± 8555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1674718,
            "range": "± 2218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 14605,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6982,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1653,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1643,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 474,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 469,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1018,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1182,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 602,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 834,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 324,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 320,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 206,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 275,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 648,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 331,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 429972,
            "range": "± 2767",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25555382,
            "range": "± 99486",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3224,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16205,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4805,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18679,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19056,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45942,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3379,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 568,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1752217,
            "range": "± 4043",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "1004bca5b5f670a3d7fec88f221208b261313baa",
          "message": "Print arrays and maps with to_debug.",
          "timestamp": "2020-11-30T11:20:51+08:00",
          "tree_id": "512380a2211132d28ffa9292209383317064fd1c",
          "url": "https://github.com/schungx/rhai/commit/1004bca5b5f670a3d7fec88f221208b261313baa"
        },
        "date": 1606707124547,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 308692,
            "range": "± 36478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 215,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 220,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 338,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1184,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1211,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6034450,
            "range": "± 916618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 513,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 555,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18884,
            "range": "± 3848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18506,
            "range": "± 2746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 340,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 577,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 108,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 115,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1893277,
            "range": "± 351102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1794130,
            "range": "± 330122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1758881,
            "range": "± 314786",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 14650,
            "range": "± 2376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7098,
            "range": "± 1327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1603,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1635,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 469,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 494,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1046,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1177,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 611,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 834,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 315,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 317,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 203,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 285,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 719,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 370,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 430925,
            "range": "± 71909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24571008,
            "range": "± 4026109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3231,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15915,
            "range": "± 2948",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4786,
            "range": "± 805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18460,
            "range": "± 2872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18325,
            "range": "± 2928",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43930,
            "range": "± 5487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3255,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 549,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1678274,
            "range": "± 256100",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "4c4a209609141ac1705201896ce1316214400234",
          "message": "Fix tests.",
          "timestamp": "2020-11-30T21:16:59+08:00",
          "tree_id": "da278eab679b879d173b1e002556302b03de4ad4",
          "url": "https://github.com/schungx/rhai/commit/4c4a209609141ac1705201896ce1316214400234"
        },
        "date": 1606742777177,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 344900,
            "range": "± 110482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 231,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 225,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 459,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1224,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1244,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6361266,
            "range": "± 1016585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 534,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 541,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18782,
            "range": "± 3077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17999,
            "range": "± 4996",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 378,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 603,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 107,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 108,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1902423,
            "range": "± 208240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1832326,
            "range": "± 286548",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1764835,
            "range": "± 252186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 15832,
            "range": "± 2936",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7775,
            "range": "± 838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1777,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1739,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 477,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 499,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1045,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1280,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 676,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 911,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 359,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 336,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 224,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 309,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 724,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 369,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 458815,
            "range": "± 106395",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27031304,
            "range": "± 4951089",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3572,
            "range": "± 1011",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18389,
            "range": "± 3630",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5387,
            "range": "± 847",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19494,
            "range": "± 3438",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19562,
            "range": "± 2943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 49595,
            "range": "± 10241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3752,
            "range": "± 654",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 614,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1872652,
            "range": "± 222860",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "bd523338020b8d7feba3d66ceadca91f1b5a171a",
          "message": "Add namespace test.",
          "timestamp": "2020-12-07T21:54:52+08:00",
          "tree_id": "1b0e2f33fa64c248dbaf87d125b98636bb15e7e7",
          "url": "https://github.com/schungx/rhai/commit/bd523338020b8d7feba3d66ceadca91f1b5a171a"
        },
        "date": 1607349845837,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 353586,
            "range": "± 34472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 238,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 242,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 393,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1314,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1272,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6697011,
            "range": "± 748191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 559,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 577,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21567,
            "range": "± 2144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19438,
            "range": "± 2610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 423,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 693,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 124,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 125,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 126,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2177318,
            "range": "± 84708",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2141094,
            "range": "± 94473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2090207,
            "range": "± 137311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17559,
            "range": "± 1264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8693,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1891,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1952,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 529,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 555,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1093,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1302,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 710,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 911,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 371,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 354,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 229,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 317,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 719,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 368,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 486933,
            "range": "± 100099",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26738247,
            "range": "± 2546179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3432,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17174,
            "range": "± 1577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5046,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19717,
            "range": "± 2327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20538,
            "range": "± 1839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 49786,
            "range": "± 4729",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3843,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 677,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2036198,
            "range": "± 93920",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "f22a04fc744b7d7ddd25a90948ade5c89503d422",
          "message": "Move constancy into Dynamic.",
          "timestamp": "2020-12-08T22:47:38+08:00",
          "tree_id": "58a044dd0b1c6890e2ea2aae96cce4bb930a4ce7",
          "url": "https://github.com/schungx/rhai/commit/f22a04fc744b7d7ddd25a90948ade5c89503d422"
        },
        "date": 1607439247514,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 349636,
            "range": "± 98655",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 221,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 267,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 385,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1089,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1030,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7218541,
            "range": "± 2099226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 505,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 581,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19211,
            "range": "± 5542",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16950,
            "range": "± 3827",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 366,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 692,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 92,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1824986,
            "range": "± 471920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1787661,
            "range": "± 337758",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1767720,
            "range": "± 295337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 15277,
            "range": "± 3629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7186,
            "range": "± 1478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1532,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1576,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 429,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 459,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 932,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1140,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 633,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 828,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 344,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 327,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 286,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 641,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 353,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 451329,
            "range": "± 123088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25584838,
            "range": "± 5694821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3125,
            "range": "± 763",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16115,
            "range": "± 3546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4527,
            "range": "± 962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18461,
            "range": "± 3816",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17945,
            "range": "± 3353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42380,
            "range": "± 8097",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3223,
            "range": "± 596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 504,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1713738,
            "range": "± 288539",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "7598ec136f97bdfb7f724c1a0b7ec03959aa8722",
          "message": "Fix feature builds.",
          "timestamp": "2020-12-08T23:09:12+08:00",
          "tree_id": "09b36cfe3f6d8a3abcee83af6207f3991470cd09",
          "url": "https://github.com/schungx/rhai/commit/7598ec136f97bdfb7f724c1a0b7ec03959aa8722"
        },
        "date": 1607440325531,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 329002,
            "range": "± 3624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 224,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 228,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 371,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1076,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1097,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6099638,
            "range": "± 9579",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 481,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 499,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18656,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17153,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 337,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 576,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1854147,
            "range": "± 12028",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1851856,
            "range": "± 2578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1821365,
            "range": "± 4012",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 14710,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7229,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1550,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1573,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 422,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 447,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 966,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1115,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 612,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 821,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 325,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 320,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 213,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 680,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 339,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 420114,
            "range": "± 1156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24507766,
            "range": "± 113297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3084,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16194,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4579,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18724,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18802,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45682,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3229,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 528,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1694600,
            "range": "± 8908",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "bed29da71a0f74803dbf8672123b3adc07c84b2d",
          "message": "Use ImmutableString.",
          "timestamp": "2020-12-11T12:57:07+08:00",
          "tree_id": "2d8a284c436ba3c80577311a6054bbd6b6611218",
          "url": "https://github.com/schungx/rhai/commit/bed29da71a0f74803dbf8672123b3adc07c84b2d"
        },
        "date": 1607663231906,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 355937,
            "range": "± 32795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 239,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 240,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 394,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1169,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1276,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6537841,
            "range": "± 722578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 540,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 560,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21613,
            "range": "± 2300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18673,
            "range": "± 2191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 386,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 632,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 95,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 98,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 101,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2068387,
            "range": "± 230887",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2036426,
            "range": "± 225177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1989892,
            "range": "± 219428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24615,
            "range": "± 2610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7959,
            "range": "± 1074",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1719,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1812,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 459,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 491,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1042,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1152,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 663,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 874,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 347,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 339,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 226,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 305,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 696,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 368,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 465347,
            "range": "± 65703",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25862762,
            "range": "± 1582812",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3345,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17002,
            "range": "± 1927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5336,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20513,
            "range": "± 2095",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21415,
            "range": "± 1248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 51228,
            "range": "± 4844",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3680,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 584,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1883227,
            "range": "± 179274",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "40b6a014ae1de0e11744a72d0fe8a30ca0f216fa",
          "message": "Provide Position to debug.",
          "timestamp": "2020-12-12T11:47:18+08:00",
          "tree_id": "9576a3f48920c278d55c7fc70fad957a72e51feb",
          "url": "https://github.com/schungx/rhai/commit/40b6a014ae1de0e11744a72d0fe8a30ca0f216fa"
        },
        "date": 1607749587821,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 323922,
            "range": "± 2950",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 220,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 224,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 370,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1102,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1138,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6353711,
            "range": "± 28512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 493,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 517,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18918,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17654,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 338,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 584,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 91,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1871074,
            "range": "± 2223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1862124,
            "range": "± 2230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1829314,
            "range": "± 2084",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22663,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7289,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1568,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1598,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 424,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 452,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 968,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1126,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 606,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 821,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 328,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 325,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 211,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 282,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 673,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 340,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 427713,
            "range": "± 778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24867500,
            "range": "± 60400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3153,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16167,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4634,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18725,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18851,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46266,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3294,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 539,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1704171,
            "range": "± 11355",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "87174de051225dac2c00e3161c6640d173c9d2d1",
          "message": "Add doc-comment to function metadata.",
          "timestamp": "2020-12-12T20:09:29+08:00",
          "tree_id": "d93c655d9eebfd205e54e37123fbf2c46af760e0",
          "url": "https://github.com/schungx/rhai/commit/87174de051225dac2c00e3161c6640d173c9d2d1"
        },
        "date": 1607775558903,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 417921,
            "range": "± 42478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 281,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 274,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 474,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1372,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1382,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7754430,
            "range": "± 828092",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 642,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 626,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22635,
            "range": "± 1759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21314,
            "range": "± 3296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 438,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 755,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 108,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 106,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 108,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2293282,
            "range": "± 231821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2296341,
            "range": "± 208491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2222051,
            "range": "± 202817",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 29628,
            "range": "± 3371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9300,
            "range": "± 1724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1963,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1969,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 545,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 562,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1199,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1450,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 777,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1043,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 432,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 430,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 274,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 363,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 836,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 447,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 549422,
            "range": "± 67232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 32906206,
            "range": "± 2458193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3948,
            "range": "± 660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19575,
            "range": "± 1943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5614,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22933,
            "range": "± 3087",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23220,
            "range": "± 1826",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 56396,
            "range": "± 5525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4112,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 685,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2253758,
            "range": "± 276208",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "17310ef576e8e66c776c304f07d6af39208ee507",
          "message": "Encapsulate structures.",
          "timestamp": "2020-12-14T23:05:13+08:00",
          "tree_id": "4477691bdaf9a110e132c2629151fa5d063f57bd",
          "url": "https://github.com/schungx/rhai/commit/17310ef576e8e66c776c304f07d6af39208ee507"
        },
        "date": 1607959022396,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 374773,
            "range": "± 24076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 266,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 269,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 441,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1280,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1312,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7226170,
            "range": "± 257504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 569,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 602,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21927,
            "range": "± 1899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20809,
            "range": "± 995",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 399,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 684,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 110,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 109,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 109,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2255199,
            "range": "± 67935",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2228084,
            "range": "± 75364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2201792,
            "range": "± 80681",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26559,
            "range": "± 2345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8711,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1905,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1930,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 507,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 542,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1107,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1280,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 718,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 951,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 385,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 380,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 239,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 330,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 743,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 393,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 519312,
            "range": "± 43404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27450184,
            "range": "± 1163900",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3748,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19178,
            "range": "± 856",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5532,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21891,
            "range": "± 1198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22125,
            "range": "± 945",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 55204,
            "range": "± 2011",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3811,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 597,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2003721,
            "range": "± 114443",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "f8c14ba1c4794d456c50eb6854c963f6b007c5cd",
          "message": "Add look-ahead to custom syntax parser.",
          "timestamp": "2020-12-15T19:23:30+08:00",
          "tree_id": "ed28f5e1aecbc6f67a6dbd96640681b3ce177d25",
          "url": "https://github.com/schungx/rhai/commit/f8c14ba1c4794d456c50eb6854c963f6b007c5cd"
        },
        "date": 1608031742315,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 358511,
            "range": "± 36783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 241,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 246,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 408,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1259,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1261,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6863084,
            "range": "± 431940",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 564,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 564,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21862,
            "range": "± 2150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19441,
            "range": "± 1563",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 384,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 649,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 104,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 106,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 109,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2174061,
            "range": "± 168462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2050246,
            "range": "± 186776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2013621,
            "range": "± 191617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25641,
            "range": "± 5923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8639,
            "range": "± 1263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1779,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1789,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 497,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 519,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1057,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1241,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 713,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 945,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 377,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 377,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 252,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 330,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 781,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 407,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 514837,
            "range": "± 60074",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27576317,
            "range": "± 1431893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3545,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18365,
            "range": "± 1472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5411,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21628,
            "range": "± 1168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20989,
            "range": "± 2172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 51322,
            "range": "± 5551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3579,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 607,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1881437,
            "range": "± 185925",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "fc54fdc907047c155e459784a8d2a761d757b632",
          "message": "Emphasize custom syntax are expressions.",
          "timestamp": "2020-12-17T10:42:20+08:00",
          "tree_id": "16f6e89cd90627ac8d07b51befa726d28db8955e",
          "url": "https://github.com/schungx/rhai/commit/fc54fdc907047c155e459784a8d2a761d757b632"
        },
        "date": 1608216223110,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 434091,
            "range": "± 38330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 284,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 282,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 460,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1364,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1405,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7780344,
            "range": "± 781331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 625,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 678,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23765,
            "range": "± 3171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21768,
            "range": "± 1474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 445,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 757,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 109,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 109,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 109,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2274687,
            "range": "± 85373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2291810,
            "range": "± 162940",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2246993,
            "range": "± 335597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 30254,
            "range": "± 2495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9376,
            "range": "± 1261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1873,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2027,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 543,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 577,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1226,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1446,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 772,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1075,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 430,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 417,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 260,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 352,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 810,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 427,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 559728,
            "range": "± 26444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 32872880,
            "range": "± 1487580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3815,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19138,
            "range": "± 1338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5731,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23002,
            "range": "± 4665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22741,
            "range": "± 1906",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 55059,
            "range": "± 6986",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3989,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 652,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2221408,
            "range": "± 196884",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "5454ff0cd5ed51e2574a2d386a15eb9dd9734132",
          "message": "Revise Rhai logo.",
          "timestamp": "2020-12-18T19:12:30+08:00",
          "tree_id": "154258855427150ccd0b09b8a785b77432b9ff1d",
          "url": "https://github.com/schungx/rhai/commit/5454ff0cd5ed51e2574a2d386a15eb9dd9734132"
        },
        "date": 1608290481958,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 369550,
            "range": "± 37424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 262,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 263,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 441,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1330,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1336,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7384997,
            "range": "± 885735",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 582,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 596,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21970,
            "range": "± 4246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20459,
            "range": "± 2009",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 390,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 674,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 109,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 106,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 107,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2210149,
            "range": "± 328953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2195372,
            "range": "± 380394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2165837,
            "range": "± 319565",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27222,
            "range": "± 3909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8669,
            "range": "± 1355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1833,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1882,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 498,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 523,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1142,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1322,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 735,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 957,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 365,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 375,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 248,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 350,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 772,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 413,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 497465,
            "range": "± 53312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28116368,
            "range": "± 2895052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3700,
            "range": "± 775",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18477,
            "range": "± 2213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5351,
            "range": "± 956",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21489,
            "range": "± 2728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22234,
            "range": "± 3843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 53560,
            "range": "± 8129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3790,
            "range": "± 510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 632,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2061159,
            "range": "± 776087",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "db7b9cb0f92bc81edd5ee331ea44c01ea953bdee",
          "message": "Native only if function call is not a valid identifier.",
          "timestamp": "2020-12-18T23:03:56+08:00",
          "tree_id": "5be8b440087f02c02570a50af23aa5012db441a9",
          "url": "https://github.com/schungx/rhai/commit/db7b9cb0f92bc81edd5ee331ea44c01ea953bdee"
        },
        "date": 1608304404933,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 317814,
            "range": "± 9608",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 227,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 221,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 371,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1090,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1120,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6079197,
            "range": "± 6868",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 491,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 512,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18893,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17736,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 332,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 565,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 91,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 91,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1847676,
            "range": "± 3213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1849456,
            "range": "± 3336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1807515,
            "range": "± 17850",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22332,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7197,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1540,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1578,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 429,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 464,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 962,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1100,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 549,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 710,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 282,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 279,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 182,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 248,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 571,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 302,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 429416,
            "range": "± 6093",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24789236,
            "range": "± 300956",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3231,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16155,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4798,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18589,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19115,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46155,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3317,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 534,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1669782,
            "range": "± 4682",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "d73f3a1d605b7be051fd3752314c630c03446a81",
          "message": "Add functions lookup cache.",
          "timestamp": "2020-12-18T23:47:17+08:00",
          "tree_id": "b59906e200b4f6ba237f79e1c2160957f0cdf3ba",
          "url": "https://github.com/schungx/rhai/commit/d73f3a1d605b7be051fd3752314c630c03446a81"
        },
        "date": 1608306987071,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 341831,
            "range": "± 38637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 252,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 244,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 394,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1194,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1231,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6580984,
            "range": "± 553911",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 553,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 559,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20342,
            "range": "± 2347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19392,
            "range": "± 2184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 407,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 669,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 100,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 100,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 97,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2035033,
            "range": "± 192620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2031750,
            "range": "± 152050",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1982822,
            "range": "± 181519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24402,
            "range": "± 1842",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7680,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1714,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1721,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 491,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 519,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1086,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1266,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 725,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 972,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 403,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 390,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 278,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 363,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 812,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 427,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 472638,
            "range": "± 67638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25232570,
            "range": "± 2305923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3488,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17253,
            "range": "± 1828",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5023,
            "range": "± 759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20302,
            "range": "± 2294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20277,
            "range": "± 2527",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 50051,
            "range": "± 4531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3457,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 597,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1809158,
            "range": "± 190990",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "c6a3ce2cd5856c793e28b9fe7d687912470c34c9",
          "message": "Add metadata export to JSON.",
          "timestamp": "2020-12-19T19:42:18+08:00",
          "tree_id": "36cac947721a2a00fc43874994c999715403192d",
          "url": "https://github.com/schungx/rhai/commit/c6a3ce2cd5856c793e28b9fe7d687912470c34c9"
        },
        "date": 1608378806792,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 389418,
            "range": "± 79308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 258,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 255,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 429,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1172,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1269,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6842564,
            "range": "± 959577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 527,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 551,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20152,
            "range": "± 3883",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19412,
            "range": "± 3763",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 453,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 736,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 102,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 100,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 99,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2043713,
            "range": "± 348504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2125585,
            "range": "± 247075",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1974817,
            "range": "± 496909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25129,
            "range": "± 7340",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7612,
            "range": "± 1397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1623,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1715,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 497,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 514,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1147,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1312,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 761,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 969,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 420,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 423,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 300,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 378,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 860,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 477,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 482825,
            "range": "± 86966",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 30121352,
            "range": "± 6678744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3679,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16605,
            "range": "± 3136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5361,
            "range": "± 1383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21870,
            "range": "± 6321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21422,
            "range": "± 3356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 48091,
            "range": "± 8317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3492,
            "range": "± 756",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 580,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1841270,
            "range": "± 460706",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "22039b24b3f9f78dd122195d8475185ead1ed100",
          "message": "Add export to JSON.",
          "timestamp": "2020-12-20T12:27:47+08:00",
          "tree_id": "524a540a35eda0f1b74cb8d85cf684089d94cd69",
          "url": "https://github.com/schungx/rhai/commit/22039b24b3f9f78dd122195d8475185ead1ed100"
        },
        "date": 1608438911689,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 384654,
            "range": "± 8898",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 268,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 265,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 442,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1329,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1355,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7362586,
            "range": "± 189721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 603,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 633,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22406,
            "range": "± 809",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21257,
            "range": "± 905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 452,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 745,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 111,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 111,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 111,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2231584,
            "range": "± 89792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2253164,
            "range": "± 27748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2217673,
            "range": "± 39412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26390,
            "range": "± 2236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8645,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2024,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2000,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 566,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 594,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1145,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1341,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 815,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1060,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 438,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 440,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 304,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 399,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 875,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 471,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 506714,
            "range": "± 9060",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27863496,
            "range": "± 613871",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3782,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19477,
            "range": "± 3247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5490,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23166,
            "range": "± 1704",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23413,
            "range": "± 1962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 54249,
            "range": "± 3181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3910,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 634,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1981776,
            "range": "± 117433",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "cec27846eaea08535f4c3f067ce0a981f5079284",
          "message": "Simplify code.",
          "timestamp": "2020-12-20T23:25:11+08:00",
          "tree_id": "1467c30f1d23cc9948b8e2b7b418bca4243cf9f1",
          "url": "https://github.com/schungx/rhai/commit/cec27846eaea08535f4c3f067ce0a981f5079284"
        },
        "date": 1608478458330,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 430587,
            "range": "± 73650",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 271,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 274,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 467,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1351,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1364,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7595593,
            "range": "± 1500306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 578,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 606,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23102,
            "range": "± 6575",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21843,
            "range": "± 4732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 509,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 807,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 108,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 105,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 104,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2287309,
            "range": "± 495644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2100176,
            "range": "± 586741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2143121,
            "range": "± 576812",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 28855,
            "range": "± 11160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9139,
            "range": "± 3151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1983,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1960,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 559,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 555,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1318,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1546,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 854,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1142,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 482,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 475,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 356,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 443,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 960,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 511,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 541200,
            "range": "± 65727",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 33056383,
            "range": "± 5217042",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3968,
            "range": "± 684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20817,
            "range": "± 5929",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5874,
            "range": "± 1207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24471,
            "range": "± 10352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 24208,
            "range": "± 4782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 57307,
            "range": "± 7839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4231,
            "range": "± 1361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 692,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2081210,
            "range": "± 143250",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "730a7320d686f7460c5a5e5b37ccc0440c2ec9a3",
          "message": "Run eval with new State.",
          "timestamp": "2020-12-20T23:46:46+08:00",
          "tree_id": "d5ca0d62b0b7cf071efaeaecd796cfee168c4bee",
          "url": "https://github.com/schungx/rhai/commit/730a7320d686f7460c5a5e5b37ccc0440c2ec9a3"
        },
        "date": 1608479605215,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 384982,
            "range": "± 5165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 269,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 268,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 444,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1480,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1495,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7145486,
            "range": "± 16635",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 622,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 612,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22806,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21252,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 450,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 765,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 98,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2015101,
            "range": "± 12927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1994167,
            "range": "± 11250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1922759,
            "range": "± 6087",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25572,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8241,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1859,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1884,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 520,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 529,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1177,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1373,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 792,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1043,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 441,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 435,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 322,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 418,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 904,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 482,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 502979,
            "range": "± 1896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27324370,
            "range": "± 89269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3750,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19149,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5652,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22896,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22813,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 54522,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3930,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 638,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1947055,
            "range": "± 4005",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "2955a4ab6413005e2bb2e1552665e30b1586dd21",
          "message": "Fix unary operators binding.",
          "timestamp": "2020-12-21T17:39:37+08:00",
          "tree_id": "fb16ad1b15a1e6149f2d4fc61fae93b3f9cc7ea8",
          "url": "https://github.com/schungx/rhai/commit/2955a4ab6413005e2bb2e1552665e30b1586dd21"
        },
        "date": 1608544085850,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 382525,
            "range": "± 17743",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 256,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 263,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 432,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1295,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1324,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7010631,
            "range": "± 264040",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 550,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 557,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22284,
            "range": "± 706",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21655,
            "range": "± 1424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 443,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 734,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 98,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 98,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 96,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2058627,
            "range": "± 108998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1984444,
            "range": "± 85165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1916601,
            "range": "± 118115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25286,
            "range": "± 2757",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8303,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1879,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1842,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 506,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 534,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1172,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1355,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 790,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1049,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 437,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 445,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 315,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 409,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 894,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 479,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 507171,
            "range": "± 18968",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27139819,
            "range": "± 1396672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3748,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19386,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5681,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22752,
            "range": "± 4612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22498,
            "range": "± 1039",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 52550,
            "range": "± 6052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3881,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 649,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1940727,
            "range": "± 53086",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "5ac83f0f4640d85f4119b50602dfb7efd39d7278",
          "message": "Add context source to on_debug.",
          "timestamp": "2020-12-21T22:04:46+08:00",
          "tree_id": "059bbc5aa1840d5c072a4a26a3e605d9d8621076",
          "url": "https://github.com/schungx/rhai/commit/5ac83f0f4640d85f4119b50602dfb7efd39d7278"
        },
        "date": 1608560084292,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 404465,
            "range": "± 58064",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 253,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 257,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 383,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1320,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1249,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7038143,
            "range": "± 843740",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 537,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 563,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22208,
            "range": "± 2570",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20825,
            "range": "± 3130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 447,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 739,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 94,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 94,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 91,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1988027,
            "range": "± 181145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1974632,
            "range": "± 271875",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1909305,
            "range": "± 294156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25324,
            "range": "± 2196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7978,
            "range": "± 1031",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1797,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1800,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 510,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 509,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1232,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1361,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 776,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1051,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 459,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 449,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 326,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 415,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 874,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 488,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 493048,
            "range": "± 72177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29696787,
            "range": "± 2724386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3636,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18671,
            "range": "± 4932",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5272,
            "range": "± 807",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22009,
            "range": "± 4360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21746,
            "range": "± 4004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 50849,
            "range": "± 5134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3787,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 610,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1887793,
            "range": "± 225930",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "10da4d89763cb13feb0c1ca592f7991c50349d9a",
          "message": "LexError directly to ParseError.",
          "timestamp": "2020-12-22T11:55:51+08:00",
          "tree_id": "d4bd9b06e032487a419c9e2770f701ee1b2623ea",
          "url": "https://github.com/schungx/rhai/commit/10da4d89763cb13feb0c1ca592f7991c50349d9a"
        },
        "date": 1608621367936,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 326372,
            "range": "± 2243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 226,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 222,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 316,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1124,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1141,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5976258,
            "range": "± 5783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 483,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 493,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19426,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17753,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 372,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 620,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 104,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 81,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1696510,
            "range": "± 5045",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1659944,
            "range": "± 2252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1619619,
            "range": "± 2474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21523,
            "range": "± 1211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7127,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1576,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1572,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 434,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 447,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1042,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1208,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 681,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 881,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 373,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 367,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 271,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 347,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 748,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 427,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 433672,
            "range": "± 15748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24188981,
            "range": "± 50965",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3270,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16425,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4741,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19132,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19335,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46356,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3338,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 517,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1672903,
            "range": "± 45548",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "206400b187f0d02d228b6e0e0724f88dc91f001f",
          "message": "Fix serde feature.",
          "timestamp": "2020-12-22T15:27:27+08:00",
          "tree_id": "d85aa6c74ad687ef51993ee3110fb707fd2a1eef",
          "url": "https://github.com/schungx/rhai/commit/206400b187f0d02d228b6e0e0724f88dc91f001f"
        },
        "date": 1608622437876,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 390307,
            "range": "± 10520",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 269,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 265,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 380,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1314,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1336,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7108398,
            "range": "± 7583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 575,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 574,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23187,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21318,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 447,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 737,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 97,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 109,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 97,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2064977,
            "range": "± 1541",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1997176,
            "range": "± 4889",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1957549,
            "range": "± 20916",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25704,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8373,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1946,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1973,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 613,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 536,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1209,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1399,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 811,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1057,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 446,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 441,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 325,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 417,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 901,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 513,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 500578,
            "range": "± 2648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27363564,
            "range": "± 150673",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3909,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19636,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5849,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23019,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22802,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 55427,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4042,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 722,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1936162,
            "range": "± 6893",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "15fb03218cdade8d62b90da8d73c20a079c7c62f",
          "message": "Rename packages to global modules.",
          "timestamp": "2020-12-22T23:45:14+08:00",
          "tree_id": "768550fde67594dafad8425a3152e0684a4d220a",
          "url": "https://github.com/schungx/rhai/commit/15fb03218cdade8d62b90da8d73c20a079c7c62f"
        },
        "date": 1608652303740,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 308139,
            "range": "± 33263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 205,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 203,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 338,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 972,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1009,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5474770,
            "range": "± 670062",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 421,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 428,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16703,
            "range": "± 3956",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15434,
            "range": "± 2749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 348,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 569,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1566617,
            "range": "± 276660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1517687,
            "range": "± 146025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1484677,
            "range": "± 363172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18950,
            "range": "± 1910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6099,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1368,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1369,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 394,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 395,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 919,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1059,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 608,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 795,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 348,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 341,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 258,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 326,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 670,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 375,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 374821,
            "range": "± 72585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22401177,
            "range": "± 2616891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2756,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13723,
            "range": "± 2747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4914,
            "range": "± 1418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16697,
            "range": "± 2260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16220,
            "range": "± 7470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38299,
            "range": "± 6558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2786,
            "range": "± 1266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 446,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1466368,
            "range": "± 306384",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "cebbc2b607dcdbd1de6f83be5d93ddc06c4d68ac",
          "message": "Fix duplicate Ident export.",
          "timestamp": "2020-12-23T12:11:53+08:00",
          "tree_id": "84a2d45a5a9a99279563414f09341ddd4999ce1e",
          "url": "https://github.com/schungx/rhai/commit/cebbc2b607dcdbd1de6f83be5d93ddc06c4d68ac"
        },
        "date": 1608699847095,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 420153,
            "range": "± 46843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 294,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 288,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 475,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1345,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1345,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7835990,
            "range": "± 567264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 584,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 606,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23283,
            "range": "± 3985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21734,
            "range": "± 9869",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 493,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 805,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 123,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 123,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 122,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2242851,
            "range": "± 332223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2076880,
            "range": "± 234008",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2075745,
            "range": "± 417094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27351,
            "range": "± 3216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8793,
            "range": "± 1029",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1977,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1948,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 562,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 561,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1299,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1480,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 875,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1168,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 484,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 507,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 365,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 461,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 985,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 535,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 519980,
            "range": "± 55463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 31184635,
            "range": "± 3557672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3835,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20409,
            "range": "± 3801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6810,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23518,
            "range": "± 1815",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23279,
            "range": "± 1899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 56285,
            "range": "± 7019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4035,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 660,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2061591,
            "range": "± 176681",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "7d58324ad42d1aea47d2cb6dd57a4894d13715cf",
          "message": "Revise package terminology.",
          "timestamp": "2020-12-23T19:11:41+08:00",
          "tree_id": "235c164fc3a9119f9ff5b04abfe7b9799579fb73",
          "url": "https://github.com/schungx/rhai/commit/7d58324ad42d1aea47d2cb6dd57a4894d13715cf"
        },
        "date": 1608722559439,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 388010,
            "range": "± 39387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 280,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 278,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 453,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1341,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1345,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7198985,
            "range": "± 165843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 566,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 555,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21772,
            "range": "± 1832",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20593,
            "range": "± 1613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 448,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 723,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 107,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 111,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2076488,
            "range": "± 6288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1985156,
            "range": "± 82769",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1868060,
            "range": "± 144301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24445,
            "range": "± 3046",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7862,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1746,
            "range": "± 475",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1821,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 566,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 548,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1194,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1353,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 808,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1059,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 457,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 455,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 344,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 429,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 919,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 502,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 495277,
            "range": "± 2986",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26992920,
            "range": "± 689476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3875,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19856,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6685,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23267,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22880,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 53888,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3934,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 637,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1932084,
            "range": "± 6321",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "850664007386b3703c295478c0886b91f2e78602",
          "message": "Use NonZeroU64 for function hashes.",
          "timestamp": "2020-12-24T16:32:43+08:00",
          "tree_id": "5cc39c3e8b0cb19ab32b891b6d76334058f8e3aa",
          "url": "https://github.com/schungx/rhai/commit/850664007386b3703c295478c0886b91f2e78602"
        },
        "date": 1608799392622,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 394613,
            "range": "± 33681",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 268,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 273,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 455,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1291,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1339,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6984747,
            "range": "± 421391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 543,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 585,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21945,
            "range": "± 1045",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20289,
            "range": "± 1036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 435,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 739,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 107,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 104,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 109,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1981658,
            "range": "± 103554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1967922,
            "range": "± 540470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1903515,
            "range": "± 90939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24654,
            "range": "± 1288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8265,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1880,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1861,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 520,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 519,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1166,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1346,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 783,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1040,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 445,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 452,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 327,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 413,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 926,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 489,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 487359,
            "range": "± 5006",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26327433,
            "range": "± 1127793",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3905,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19171,
            "range": "± 1529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6378,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21955,
            "range": "± 929",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21851,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 53417,
            "range": "± 2520",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3850,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 631,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1950648,
            "range": "± 120114",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "8f969b1ab555693e3d094387cc6687c3214cd7be",
          "message": "Reduce indirections.",
          "timestamp": "2020-12-24T23:22:50+08:00",
          "tree_id": "1080b5fa55741e91c364326e791e761a18ab19f9",
          "url": "https://github.com/schungx/rhai/commit/8f969b1ab555693e3d094387cc6687c3214cd7be"
        },
        "date": 1608823937436,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 353233,
            "range": "± 84251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 243,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 248,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 430,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1166,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1201,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6148637,
            "range": "± 1191393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 516,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 515,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19490,
            "range": "± 5626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19069,
            "range": "± 4119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 444,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 696,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 108,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 106,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 104,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1853368,
            "range": "± 383628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1813156,
            "range": "± 453526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1821693,
            "range": "± 381833",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23183,
            "range": "± 5364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7358,
            "range": "± 1619",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1614,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1787,
            "range": "± 454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 476,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 533,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1113,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1325,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 798,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 974,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 436,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 439,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 320,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 448,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 852,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 441,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 415417,
            "range": "± 85190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25998954,
            "range": "± 3638666",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3351,
            "range": "± 806",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15817,
            "range": "± 3899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6033,
            "range": "± 1319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20177,
            "range": "± 3333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19591,
            "range": "± 3579",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 48403,
            "range": "± 11172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3539,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 540,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1849326,
            "range": "± 329123",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "dc4e52e7954db4f52da0cbb917806961003c9eb6",
          "message": "Code enhancements.",
          "timestamp": "2020-12-26T13:05:57+08:00",
          "tree_id": "50456e698450deb8f39e4f8f93bad9e7c531f102",
          "url": "https://github.com/schungx/rhai/commit/dc4e52e7954db4f52da0cbb917806961003c9eb6"
        },
        "date": 1608959707458,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 353456,
            "range": "± 53989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 285,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 270,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 421,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1234,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1262,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6513317,
            "range": "± 862090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 536,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 559,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20403,
            "range": "± 3549",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18893,
            "range": "± 2796",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 448,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 742,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 109,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 108,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 108,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1764868,
            "range": "± 238650",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1719789,
            "range": "± 212193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1694009,
            "range": "± 242350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22090,
            "range": "± 3124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7186,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1714,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1655,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 479,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 502,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1057,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1262,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 772,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1011,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 412,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 413,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 320,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 394,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 848,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 448,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 476060,
            "range": "± 30459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26200075,
            "range": "± 1578155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3772,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17943,
            "range": "± 1183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6475,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19741,
            "range": "± 2665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19386,
            "range": "± 2455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45669,
            "range": "± 5496",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3291,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 543,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1683392,
            "range": "± 205701",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "88f63fa24b9776e84a1fb03595c48c4b93e09c2c",
          "message": "Refine docs.",
          "timestamp": "2020-12-26T23:21:16+08:00",
          "tree_id": "9ca26f11527322b5652494be6204b049b77285d1",
          "url": "https://github.com/schungx/rhai/commit/88f63fa24b9776e84a1fb03595c48c4b93e09c2c"
        },
        "date": 1608996378979,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 368008,
            "range": "± 36854",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 274,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 280,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 444,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1364,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1356,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7030477,
            "range": "± 296506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 596,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 579,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 35665,
            "range": "± 1972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 32699,
            "range": "± 5569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 565,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 850,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 165,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 165,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 157,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2320822,
            "range": "± 280847",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2726064,
            "range": "± 141608",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2557665,
            "range": "± 49766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 28837,
            "range": "± 1745",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10096,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2764,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2687,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 906,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 779,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1521,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1948,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1180,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1220,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 578,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 586,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 492,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 545,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1383,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 674,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 566781,
            "range": "± 25863",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 31907799,
            "range": "± 1378159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 7100,
            "range": "± 699",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 29781,
            "range": "± 2206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 11782,
            "range": "± 758",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 34829,
            "range": "± 2036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 32707,
            "range": "± 2383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 73356,
            "range": "± 5475",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 6232,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 1225,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2340444,
            "range": "± 232656",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "48af8719e7987d76398c2b82236473c25dc8eb66",
          "message": "Fix closure property access.",
          "timestamp": "2020-12-27T11:50:24+08:00",
          "tree_id": "3b32e51ee299ce39ce113ecfea115ab576a3701a",
          "url": "https://github.com/schungx/rhai/commit/48af8719e7987d76398c2b82236473c25dc8eb66"
        },
        "date": 1609041402839,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 391611,
            "range": "± 203972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 283,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 280,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 469,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1349,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1350,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7041113,
            "range": "± 106069",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 576,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 598,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 25160,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23677,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 470,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 765,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 121,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 119,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 119,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1986235,
            "range": "± 5053",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1958294,
            "range": "± 4551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1917623,
            "range": "± 6146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25226,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8201,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1883,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1885,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 553,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 544,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1201,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1435,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 815,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1057,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 457,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 455,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 346,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 436,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 928,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 500,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 493123,
            "range": "± 2057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27459451,
            "range": "± 477145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5448,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 21633,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8712,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25402,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 25296,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 59292,
            "range": "± 1130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4634,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 872,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1931829,
            "range": "± 4819",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "6b8d78d64c6f64fd33d68f69133f6387b3a0115e",
          "message": "Streamline parsing.",
          "timestamp": "2020-12-27T16:50:48+08:00",
          "tree_id": "2b330f5c61e40e3073fe9dd342c87d2e18427a35",
          "url": "https://github.com/schungx/rhai/commit/6b8d78d64c6f64fd33d68f69133f6387b3a0115e"
        },
        "date": 1609059450590,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 403390,
            "range": "± 4084",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 292,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 285,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 470,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1411,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1424,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7340628,
            "range": "± 6178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 596,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 613,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 26526,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 24353,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 486,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 788,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 125,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 125,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 127,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2051870,
            "range": "± 1484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2042640,
            "range": "± 3404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2011749,
            "range": "± 4233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26260,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8639,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1953,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1999,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 558,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 567,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1245,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1542,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 852,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1106,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 475,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 475,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 356,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 452,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 946,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 521,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 513072,
            "range": "± 1993",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28441032,
            "range": "± 386334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5568,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22673,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 9079,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26130,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 25809,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 60386,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4883,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 925,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2027319,
            "range": "± 4200",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "e481a8019dde3e74f297be48c49d735d4022d3b7",
          "message": "Simplify code and better error messages.",
          "timestamp": "2020-12-28T14:21:13+08:00",
          "tree_id": "cc1a56b7392dca442f2ec780f0476dcc167e6e30",
          "url": "https://github.com/schungx/rhai/commit/e481a8019dde3e74f297be48c49d735d4022d3b7"
        },
        "date": 1609137033703,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 436787,
            "range": "± 43670",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 292,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 283,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 491,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1441,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1417,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7854830,
            "range": "± 492733",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 607,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 623,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 26535,
            "range": "± 1828",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 25039,
            "range": "± 2900",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 515,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 851,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 136,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 133,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 133,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2293723,
            "range": "± 211264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2236300,
            "range": "± 310394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2167242,
            "range": "± 184178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 28082,
            "range": "± 2511",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9074,
            "range": "± 1104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2032,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2023,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 597,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 606,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1367,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1576,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 900,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1194,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 513,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 515,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 388,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 488,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 993,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 545,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 536587,
            "range": "± 46680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 32262341,
            "range": "± 2077945",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5524,
            "range": "± 457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 23067,
            "range": "± 2029",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8974,
            "range": "± 1047",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26073,
            "range": "± 1852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 26239,
            "range": "± 2934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 62165,
            "range": "± 5602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4797,
            "range": "± 508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 954,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2167366,
            "range": "± 256351",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "eca8212f389d788cadd6c287135cfd14fafabb8a",
          "message": "More code refinements.",
          "timestamp": "2020-12-29T10:41:20+08:00",
          "tree_id": "e29ede19afea686116d3bbb45b30269deb2bf9bd",
          "url": "https://github.com/schungx/rhai/commit/eca8212f389d788cadd6c287135cfd14fafabb8a"
        },
        "date": 1609210532302,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 338977,
            "range": "± 75645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 266,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 264,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 440,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1188,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1159,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6535650,
            "range": "± 1561735",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 515,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 524,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22984,
            "range": "± 5280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20371,
            "range": "± 5184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 427,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 643,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 92,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 99,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 94,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1873780,
            "range": "± 376664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1817594,
            "range": "± 343922",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1734388,
            "range": "± 318393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25049,
            "range": "± 5001",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7501,
            "range": "± 2114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1723,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1598,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 466,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 476,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1123,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1271,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 674,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1017,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 417,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 425,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 321,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 393,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 804,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 459,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 449581,
            "range": "± 108686",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26516184,
            "range": "± 3926894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5192,
            "range": "± 1250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20364,
            "range": "± 4259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7550,
            "range": "± 1772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24531,
            "range": "± 5309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21982,
            "range": "± 3529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 54387,
            "range": "± 12820",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4217,
            "range": "± 852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 739,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1648932,
            "range": "± 291706",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "41c6f985f5376b29224237141f451058eb5ebe6a",
          "message": "Fix bug with tokenizing identifiers.",
          "timestamp": "2020-12-29T11:37:15+08:00",
          "tree_id": "af981b4fdcdb7966a785b5e2752d310202ca1242",
          "url": "https://github.com/schungx/rhai/commit/41c6f985f5376b29224237141f451058eb5ebe6a"
        },
        "date": 1609214704768,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 316959,
            "range": "± 47117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 242,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 223,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 383,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1106,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1116,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5886393,
            "range": "± 689374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 467,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 487,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20886,
            "range": "± 2655",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19399,
            "range": "± 3277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 388,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 621,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 97,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 115,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 94,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1847068,
            "range": "± 340949",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1665361,
            "range": "± 226284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1567520,
            "range": "± 359584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24331,
            "range": "± 2373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8032,
            "range": "± 1375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1724,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1638,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 466,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 454,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 961,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1117,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 748,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1028,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 376,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 373,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 272,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 350,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 771,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 484,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 419824,
            "range": "± 81646",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22702921,
            "range": "± 3128161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4315,
            "range": "± 548",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20654,
            "range": "± 2965",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7856,
            "range": "± 1749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20789,
            "range": "± 2960",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20448,
            "range": "± 3277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 48649,
            "range": "± 6564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3883,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 707,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1581530,
            "range": "± 292893",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "13f5cec29169dcd7a57ff6e433ec1bc1c307619c",
          "message": "Fix call stack limits.",
          "timestamp": "2020-12-29T12:29:45+08:00",
          "tree_id": "2306f3325cf922e53cd67364f8b1794c2c7b592d",
          "url": "https://github.com/schungx/rhai/commit/13f5cec29169dcd7a57ff6e433ec1bc1c307619c"
        },
        "date": 1609216604596,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 388147,
            "range": "± 2400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 290,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 281,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 450,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1358,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1370,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7064802,
            "range": "± 12394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 576,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 591,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 25556,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23765,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 464,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 758,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 117,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 118,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 116,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2087848,
            "range": "± 239323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2056563,
            "range": "± 316508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2003952,
            "range": "± 440886",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25700,
            "range": "± 3311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8454,
            "range": "± 807",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1928,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1953,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 531,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 538,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1187,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1428,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 811,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1055,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 459,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 456,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 339,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 432,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 922,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 517,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 494581,
            "range": "± 2481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27234673,
            "range": "± 205603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5316,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 21904,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8648,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25054,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 24922,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 59229,
            "range": "± 808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4460,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 867,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1932989,
            "range": "± 5210",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "fba2dd7a8495f31256948615d8e8a81ffdc30ba4",
          "message": "Bump version.",
          "timestamp": "2020-12-30T15:17:16+08:00",
          "tree_id": "15e74792dc46ac1bea6f6cedf928af3761513527",
          "url": "https://github.com/schungx/rhai/commit/fba2dd7a8495f31256948615d8e8a81ffdc30ba4"
        },
        "date": 1609313164856,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 410989,
            "range": "± 44356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 266,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 292,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 507,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1393,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1345,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7367253,
            "range": "± 976837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 576,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 652,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24387,
            "range": "± 3869",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 24702,
            "range": "± 2901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 476,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 790,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 119,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 109,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 115,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2182969,
            "range": "± 307126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2135778,
            "range": "± 286338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2139076,
            "range": "± 354696",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26862,
            "range": "± 4768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8329,
            "range": "± 1342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1974,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1887,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 563,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 568,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1265,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1490,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 846,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1153,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 472,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 472,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 372,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 452,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 936,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 510,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 527113,
            "range": "± 76709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 32201006,
            "range": "± 2910846",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5474,
            "range": "± 622",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 21701,
            "range": "± 2420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8551,
            "range": "± 1109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25534,
            "range": "± 4069",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 25551,
            "range": "± 4220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 59051,
            "range": "± 9693",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4779,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 935,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2110379,
            "range": "± 293418",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "386e34aacd6af78d8c9796f36193c94ee16bfc23",
          "message": "Fix no_module feature.",
          "timestamp": "2020-12-30T15:37:39+08:00",
          "tree_id": "0dfb3843c17d9bb9949484cdcaa3a2a44e369575",
          "url": "https://github.com/schungx/rhai/commit/386e34aacd6af78d8c9796f36193c94ee16bfc23"
        },
        "date": 1609314309277,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 384283,
            "range": "± 59844",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 278,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 271,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 452,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1348,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1361,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7045375,
            "range": "± 694848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 595,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 605,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24929,
            "range": "± 4383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23351,
            "range": "± 1257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 460,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 751,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 114,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 115,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 116,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2027357,
            "range": "± 182071",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2034438,
            "range": "± 273210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1972485,
            "range": "± 171655",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25572,
            "range": "± 1124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8426,
            "range": "± 2131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1875,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1892,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 534,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 542,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1341,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1529,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 835,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1057,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 456,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 452,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 342,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 430,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 934,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 498,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 499813,
            "range": "± 52430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27685750,
            "range": "± 1379077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5340,
            "range": "± 830",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22519,
            "range": "± 816",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8710,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26187,
            "range": "± 3134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 25482,
            "range": "± 2136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 59624,
            "range": "± 8169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4633,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 859,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1970513,
            "range": "± 82877",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "0a69caaf6d25984e16ad72823857e4c94220eed7",
          "message": "Refine API for contexts.",
          "timestamp": "2021-01-01T17:05:06+08:00",
          "tree_id": "8ed263cc55f56bc438f4b4c766914d9f3980a83c",
          "url": "https://github.com/schungx/rhai/commit/0a69caaf6d25984e16ad72823857e4c94220eed7"
        },
        "date": 1609493685291,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 349566,
            "range": "± 105218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 274,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 273,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 424,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1302,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1312,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6389482,
            "range": "± 857091",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 554,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 582,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24136,
            "range": "± 2971",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21088,
            "range": "± 2183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 443,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 726,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 107,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 112,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 115,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1944888,
            "range": "± 193686",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1885390,
            "range": "± 313529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1875825,
            "range": "± 244843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25282,
            "range": "± 1936",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8096,
            "range": "± 770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1765,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1713,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 491,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 469,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1094,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1227,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 764,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 938,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 400,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 402,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 309,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 393,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 815,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 435,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 432514,
            "range": "± 70638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23597240,
            "range": "± 2586243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4880,
            "range": "± 881",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20253,
            "range": "± 3183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7373,
            "range": "± 1062",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23873,
            "range": "± 5043",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22724,
            "range": "± 3218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 50255,
            "range": "± 6986",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4134,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 762,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1752565,
            "range": "± 232653",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "ef48f47b747e990a943f90f3f4d75271a3dfe50d",
          "message": "Refine docs and comments etc.",
          "timestamp": "2021-01-02T23:30:10+08:00",
          "tree_id": "bcf95bd0d4533e35741b36ed98fbf18f554f2626",
          "url": "https://github.com/schungx/rhai/commit/ef48f47b747e990a943f90f3f4d75271a3dfe50d"
        },
        "date": 1609602036732,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 406685,
            "range": "± 50386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 279,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 279,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 464,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1323,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1316,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7156097,
            "range": "± 704838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 568,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 574,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24688,
            "range": "± 3331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23592,
            "range": "± 3001",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 486,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 776,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 113,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2035510,
            "range": "± 173809",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1996147,
            "range": "± 236070",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1970540,
            "range": "± 125359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25925,
            "range": "± 2721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8272,
            "range": "± 1030",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1865,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1861,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 506,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 530,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1246,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1388,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 830,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1075,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 466,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 466,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 345,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 441,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 958,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 501,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 480223,
            "range": "± 54938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28720696,
            "range": "± 2362140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5116,
            "range": "± 591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20968,
            "range": "± 2525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8520,
            "range": "± 869",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24845,
            "range": "± 3041",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23910,
            "range": "± 2714",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 57289,
            "range": "± 6524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4453,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 841,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1886137,
            "range": "± 200223",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c98d0fff409f5e523bd7b161a070cc4520c5fa10",
          "message": "Merge pull request #61 from Eliah-Lakhin/native-call-context-improvements\n\nMinor improvements for NativeCallContext introspection",
          "timestamp": "2021-01-03T11:14:56+08:00",
          "tree_id": "c0b53ad0b02ff35771c865c27ead5ee64d9a3177",
          "url": "https://github.com/schungx/rhai/commit/c98d0fff409f5e523bd7b161a070cc4520c5fa10"
        },
        "date": 1609644307633,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 427661,
            "range": "± 101416",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 291,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 288,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 473,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1380,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1415,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7563928,
            "range": "± 1249435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 589,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 627,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 25149,
            "range": "± 2679",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 24242,
            "range": "± 1745",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 501,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 794,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 115,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 118,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 116,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2080636,
            "range": "± 342409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2127251,
            "range": "± 173952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2026041,
            "range": "± 299872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27351,
            "range": "± 9576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8549,
            "range": "± 876",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1913,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1973,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 553,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 579,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1308,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1499,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 846,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1143,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 487,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 486,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 386,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 479,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 975,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 541,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 512605,
            "range": "± 48920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 31149055,
            "range": "± 2603554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5490,
            "range": "± 975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22271,
            "range": "± 3763",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 9061,
            "range": "± 1697",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26013,
            "range": "± 3242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 25730,
            "range": "± 1939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 59862,
            "range": "± 10648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4679,
            "range": "± 802",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 902,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1999726,
            "range": "± 403348",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "70a0d6ce5891b8d41fa1c8f46b38b4be372c376a",
          "message": "Make id_raw return Option<&ImmutableString>",
          "timestamp": "2021-01-03T11:25:25+08:00",
          "tree_id": "174590a1efe108658ad43f09932d52c7083f6a6e",
          "url": "https://github.com/schungx/rhai/commit/70a0d6ce5891b8d41fa1c8f46b38b4be372c376a"
        },
        "date": 1609644951727,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 370907,
            "range": "± 69674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 257,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 270,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 451,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1258,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1304,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7032688,
            "range": "± 870821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 517,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 561,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23237,
            "range": "± 3500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21147,
            "range": "± 4302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 412,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 678,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 103,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 106,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 108,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1913904,
            "range": "± 348976",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1958166,
            "range": "± 283949",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1860547,
            "range": "± 273413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24629,
            "range": "± 3825",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7620,
            "range": "± 1297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1787,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1841,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 503,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 516,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1107,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1437,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 772,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 993,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 421,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 416,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 357,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 408,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 850,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 480,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 454345,
            "range": "± 88539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28513093,
            "range": "± 4984779",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4980,
            "range": "± 955",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19944,
            "range": "± 4621",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8434,
            "range": "± 1183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24424,
            "range": "± 4987",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23799,
            "range": "± 3945",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 53785,
            "range": "± 8895",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4658,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 833,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1797185,
            "range": "± 315545",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "33f7c8557ceff895e5f095803259afa59a8ae414",
          "message": "Put source into AST.",
          "timestamp": "2021-01-03T13:30:01+08:00",
          "tree_id": "67d6581dbc04c30ce9f351bd2961500482135285",
          "url": "https://github.com/schungx/rhai/commit/33f7c8557ceff895e5f095803259afa59a8ae414"
        },
        "date": 1609652563060,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 417306,
            "range": "± 80240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 277,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 278,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 456,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1328,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1291,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7396511,
            "range": "± 1078587",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 545,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 566,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 25015,
            "range": "± 4416",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23216,
            "range": "± 2850",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 488,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 781,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 115,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 114,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2025825,
            "range": "± 290189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2048679,
            "range": "± 262768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1965176,
            "range": "± 229532",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25623,
            "range": "± 3537",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8053,
            "range": "± 1085",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1849,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1908,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 513,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 534,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1200,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1384,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 773,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1047,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 455,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 444,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 342,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 434,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 901,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 493,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 473587,
            "range": "± 84525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29862155,
            "range": "± 3115003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5275,
            "range": "± 944",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 21998,
            "range": "± 4480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8570,
            "range": "± 1141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24621,
            "range": "± 3713",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23754,
            "range": "± 3925",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 58633,
            "range": "± 10067",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4502,
            "range": "± 786",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 905,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1842498,
            "range": "± 244217",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "103af43f686a740265c58e76d45561f2f18e6d64",
          "message": "Fix typo in sync.",
          "timestamp": "2021-01-03T13:46:08+08:00",
          "tree_id": "87186a413953b85e112a2399e86b95663bdc9000",
          "url": "https://github.com/schungx/rhai/commit/103af43f686a740265c58e76d45561f2f18e6d64"
        },
        "date": 1609653449661,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 391148,
            "range": "± 40200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 282,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 284,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 430,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1269,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1229,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6643840,
            "range": "± 703633",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 533,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 559,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23914,
            "range": "± 3866",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 22452,
            "range": "± 3471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 446,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 711,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 107,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 105,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 104,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1863093,
            "range": "± 257671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1889875,
            "range": "± 227363",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1832425,
            "range": "± 245544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24576,
            "range": "± 2992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7757,
            "range": "± 831",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1821,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1770,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 503,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 501,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1153,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1327,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 746,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 975,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 433,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 430,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 327,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 427,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 843,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 476,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 451067,
            "range": "± 40350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28680048,
            "range": "± 3384189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5233,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20793,
            "range": "± 3013",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8218,
            "range": "± 1216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24018,
            "range": "± 3291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23056,
            "range": "± 3835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 54855,
            "range": "± 6416",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4277,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 846,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1816661,
            "range": "± 271603",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "cf9d35166d68a5a696fc80159aceb4eaf3c6b227",
          "message": "Remove hashing of the entire script by making Expr and Stmt Hash.",
          "timestamp": "2021-01-04T11:58:24+08:00",
          "tree_id": "6aeb4d93c26a7b624ab8e599fa00ae486a61c1b7",
          "url": "https://github.com/schungx/rhai/commit/cf9d35166d68a5a696fc80159aceb4eaf3c6b227"
        },
        "date": 1609733172199,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 409709,
            "range": "± 3581",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 293,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 289,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 455,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1381,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1414,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7165209,
            "range": "± 9505",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 587,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 677,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 26166,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 24270,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 467,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 761,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 117,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 115,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 116,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2063507,
            "range": "± 2235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2051708,
            "range": "± 10545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2010738,
            "range": "± 3015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26247,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8502,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2006,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1976,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 543,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 560,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1215,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1415,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 812,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1058,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 451,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 452,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 342,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 438,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 947,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 506,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 506994,
            "range": "± 5096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28056480,
            "range": "± 59644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5592,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 23141,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 9217,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26435,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 26364,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 61497,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4750,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 871,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1973638,
            "range": "± 5340",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "a5d63921074e530d584262508820fa707479376a",
          "message": "Use NonZero for limits.",
          "timestamp": "2021-01-06T13:46:53+08:00",
          "tree_id": "bd52df4013fb1bd33940ffee254fee34f04eaf9c",
          "url": "https://github.com/schungx/rhai/commit/a5d63921074e530d584262508820fa707479376a"
        },
        "date": 1609912357517,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 310991,
            "range": "± 99426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 198,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 197,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 314,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1037,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1027,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5276857,
            "range": "± 680895",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 438,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 439,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19189,
            "range": "± 7573",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17779,
            "range": "± 3101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 328,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 557,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 89,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 80,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 81,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1501634,
            "range": "± 295030",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1484072,
            "range": "± 245222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1420743,
            "range": "± 213447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19080,
            "range": "± 4456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6167,
            "range": "± 1018",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1397,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1355,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 378,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 379,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 905,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 982,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 553,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 712,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 303,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 323,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 284,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 318,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 631,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 335,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 358331,
            "range": "± 84904",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20307604,
            "range": "± 2312392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3886,
            "range": "± 723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16821,
            "range": "± 4635",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6366,
            "range": "± 2455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19201,
            "range": "± 3423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19187,
            "range": "± 3457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42932,
            "range": "± 5119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3427,
            "range": "± 680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 582,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1408444,
            "range": "± 174782",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "e059ca009ccb58031dc993e0daccf99bb1433d8c",
          "message": "Fix feature builds.",
          "timestamp": "2021-01-06T18:22:45+08:00",
          "tree_id": "3e57af001d94281ada5c44905b241f57d300fbb6",
          "url": "https://github.com/schungx/rhai/commit/e059ca009ccb58031dc993e0daccf99bb1433d8c"
        },
        "date": 1609929212966,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 403339,
            "range": "± 86081",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 286,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 284,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 430,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1296,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1281,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7071370,
            "range": "± 873269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 581,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 596,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23707,
            "range": "± 4186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23349,
            "range": "± 4942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 466,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 763,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 110,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 107,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 112,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2069444,
            "range": "± 392173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1953153,
            "range": "± 436527",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1866352,
            "range": "± 348950",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25081,
            "range": "± 4741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7897,
            "range": "± 1157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1844,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1983,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 514,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 530,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1225,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1314,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 761,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1027,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 454,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 438,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 336,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 432,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 859,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 483,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 487338,
            "range": "± 79424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28596499,
            "range": "± 4577782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5288,
            "range": "± 978",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20816,
            "range": "± 3983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8336,
            "range": "± 1580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24321,
            "range": "± 6128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 24817,
            "range": "± 3408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 56069,
            "range": "± 11091",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4505,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 826,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1891924,
            "range": "± 307595",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "67a85a19ae581939e0fc7c69c37567910a98b3b7",
          "message": "Fix codegen test.",
          "timestamp": "2021-01-06T19:30:58+08:00",
          "tree_id": "85a9d61bdf5577b0ee992d70ea107b55cfbcbc5c",
          "url": "https://github.com/schungx/rhai/commit/67a85a19ae581939e0fc7c69c37567910a98b3b7"
        },
        "date": 1609933103763,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 393249,
            "range": "± 4160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 291,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 286,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 431,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1339,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1342,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6898132,
            "range": "± 6586",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 575,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 582,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24736,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23549,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 455,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 737,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 111,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 112,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2007902,
            "range": "± 3537",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1963101,
            "range": "± 3792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1914090,
            "range": "± 3143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25268,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8219,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1986,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1978,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 532,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 537,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1199,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1397,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 796,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1014,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 438,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 436,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 327,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 419,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 880,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 482,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 487809,
            "range": "± 1913",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26777832,
            "range": "± 60881",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5314,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 21693,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8857,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25452,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 25115,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 58124,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4573,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 835,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2003110,
            "range": "± 215077",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "9a037afbb9460c8d788ab02a8b260910d9cb6f01",
          "message": "Remove book.",
          "timestamp": "2021-01-07T18:57:40+08:00",
          "tree_id": "59d212aca790b6e21206a4134d18ce009e209241",
          "url": "https://github.com/schungx/rhai/commit/9a037afbb9460c8d788ab02a8b260910d9cb6f01"
        },
        "date": 1610017389434,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 395251,
            "range": "± 81216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 281,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 272,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 437,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1286,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1309,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7196365,
            "range": "± 662076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 556,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 569,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24418,
            "range": "± 3914",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23045,
            "range": "± 4812",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 465,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 758,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 109,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 109,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 109,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2068555,
            "range": "± 202554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2031664,
            "range": "± 251364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1979516,
            "range": "± 144219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25435,
            "range": "± 6201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8055,
            "range": "± 1298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1905,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1939,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 529,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 528,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1232,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1438,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 793,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1054,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 450,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 443,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 338,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 446,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 879,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 509,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 487961,
            "range": "± 209585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29578212,
            "range": "± 1895619",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5324,
            "range": "± 1593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 21103,
            "range": "± 3566",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8537,
            "range": "± 1900",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25177,
            "range": "± 1924",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 25056,
            "range": "± 1739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 58146,
            "range": "± 6403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4511,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 849,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1925444,
            "range": "± 181828",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "b96c8321415318b7b081ba38d3bf7aa464836f9e",
          "message": "Add EvalAltResult::clear_position().",
          "timestamp": "2021-01-08T14:29:57+08:00",
          "tree_id": "6ba6c5a3320ee75bda4193adf072e0807194ed42",
          "url": "https://github.com/schungx/rhai/commit/b96c8321415318b7b081ba38d3bf7aa464836f9e"
        },
        "date": 1610104246772,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 392689,
            "range": "± 39646",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 269,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 258,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 420,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1264,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1249,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6723608,
            "range": "± 703002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 525,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 550,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23453,
            "range": "± 3334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 22149,
            "range": "± 2773",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 440,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 699,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 106,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 104,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 106,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1931913,
            "range": "± 250604",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1893311,
            "range": "± 184193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1833750,
            "range": "± 180322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24082,
            "range": "± 2618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7819,
            "range": "± 1616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1791,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1798,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 504,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 512,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1173,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1344,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 757,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1004,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 421,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 426,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 331,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 413,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 827,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 485,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 462872,
            "range": "± 43740",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28428880,
            "range": "± 2248541",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5026,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20666,
            "range": "± 1903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8038,
            "range": "± 975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23218,
            "range": "± 2737",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23550,
            "range": "± 3284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 52978,
            "range": "± 5773",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4246,
            "range": "± 508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 819,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1841076,
            "range": "± 366385",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "9f71e5b155c9f4edac49ac653fcb122bcb18cab7",
          "message": "Revert \"Delete benchmark.yml\"\n\nThis reverts commit 277eef4be6ccd179e4ef08b825681ee17ef68bc9.",
          "timestamp": "2021-01-09T00:26:49+08:00",
          "tree_id": "adc314d9729a91d3933419973271bba30b25fb19",
          "url": "https://github.com/schungx/rhai/commit/9f71e5b155c9f4edac49ac653fcb122bcb18cab7"
        },
        "date": 1610123756004,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 395918,
            "range": "± 84404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 299,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 263,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 411,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1229,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1261,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6740030,
            "range": "± 1015386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 523,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 534,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22805,
            "range": "± 4023",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21922,
            "range": "± 4896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 442,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 703,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 111,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 109,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1860676,
            "range": "± 267246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1927463,
            "range": "± 372618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1815365,
            "range": "± 265397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23835,
            "range": "± 3733",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7611,
            "range": "± 1402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1735,
            "range": "± 458",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1796,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 496,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 496,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1145,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1262,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 718,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 960,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 447,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 448,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 312,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 408,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 815,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 443,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 432725,
            "range": "± 82852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26776173,
            "range": "± 3723789",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4938,
            "range": "± 1651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19896,
            "range": "± 5734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7820,
            "range": "± 1582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23687,
            "range": "± 5145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22928,
            "range": "± 2967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 52978,
            "range": "± 11188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4371,
            "range": "± 1072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 952,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1681641,
            "range": "± 339506",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "bfe9ac2188300d362184b767966927ef2d33c22f",
          "message": "Fix feature builds.",
          "timestamp": "2021-01-09T00:40:44+08:00",
          "tree_id": "1715244757159841b3a2a1c7d81873d44202f107",
          "url": "https://github.com/schungx/rhai/commit/bfe9ac2188300d362184b767966927ef2d33c22f"
        },
        "date": 1610124529938,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 390487,
            "range": "± 62061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 287,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 281,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 456,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1303,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1296,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7223477,
            "range": "± 573754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 581,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 584,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24472,
            "range": "± 4306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 22977,
            "range": "± 8126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 466,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 757,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 120,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 117,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 119,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2094885,
            "range": "± 301975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2042824,
            "range": "± 203612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1944552,
            "range": "± 169322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25593,
            "range": "± 5363",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8201,
            "range": "± 1563",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1898,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1907,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 532,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 549,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1223,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1400,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 798,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1063,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 474,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 479,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 340,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 452,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 886,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 508,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 482517,
            "range": "± 106909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29305900,
            "range": "± 1730243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5497,
            "range": "± 840",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 21116,
            "range": "± 4652",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8866,
            "range": "± 2042",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25260,
            "range": "± 4696",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 24560,
            "range": "± 4082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 59935,
            "range": "± 6756",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4782,
            "range": "± 1549",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 919,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1888435,
            "range": "± 237396",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "1513e6ab6a48c2c90f46bdbd8320af375503bb2b",
          "message": "Fix internals build.",
          "timestamp": "2021-01-09T00:49:50+08:00",
          "tree_id": "47a815e9c658290dbea0fb572f08de043dff6703",
          "url": "https://github.com/schungx/rhai/commit/1513e6ab6a48c2c90f46bdbd8320af375503bb2b"
        },
        "date": 1610125058506,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 394452,
            "range": "± 5691",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 283,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 271,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 443,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1346,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1347,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6954974,
            "range": "± 9914",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 570,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 585,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24808,
            "range": "± 7778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23441,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 462,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 743,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 122,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 121,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2013616,
            "range": "± 4599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1977665,
            "range": "± 3865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1923483,
            "range": "± 3593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25416,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8325,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1924,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1930,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 538,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 541,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1207,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1434,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 788,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1022,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 445,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 444,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 335,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 424,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 875,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 488,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 488522,
            "range": "± 2179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27131890,
            "range": "± 75753",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5377,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 21939,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8737,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25358,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 25162,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 58901,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4538,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 839,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1894233,
            "range": "± 7936",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "ad250fc9738f081d3ecbdeb1128957cd42b86e12",
          "message": "Recursive self-contained AST.",
          "timestamp": "2021-01-09T16:52:22+08:00",
          "tree_id": "61b5c80dbf8066d7ddcca0d7ed2613eb8a6aea1f",
          "url": "https://github.com/schungx/rhai/commit/ad250fc9738f081d3ecbdeb1128957cd42b86e12"
        },
        "date": 1610182824391,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 393166,
            "range": "± 62094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 257,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 249,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 393,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1160,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1188,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6362075,
            "range": "± 1193895",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 504,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 513,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22263,
            "range": "± 4598",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19772,
            "range": "± 5575",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 418,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 638,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 100,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 93,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 91,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1692112,
            "range": "± 314371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1733787,
            "range": "± 356667",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1607462,
            "range": "± 315985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21971,
            "range": "± 13248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6678,
            "range": "± 1177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1497,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1600,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 438,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 436,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1058,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1288,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 679,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 847,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 414,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 399,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 286,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 374,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 798,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 415,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 405939,
            "range": "± 77937",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24845114,
            "range": "± 4379019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4299,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17363,
            "range": "± 4264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7491,
            "range": "± 1759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21730,
            "range": "± 6426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21985,
            "range": "± 4967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 52231,
            "range": "± 8839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3712,
            "range": "± 874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 725,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1633942,
            "range": "± 388282",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "f8b36a470a89a830430c7f5f0d71ea73c8dfb393",
          "message": "Fix test.",
          "timestamp": "2021-01-09T16:57:21+08:00",
          "tree_id": "403c8560773e2f8bdb884cdf468d79ef3ef1fc97",
          "url": "https://github.com/schungx/rhai/commit/f8b36a470a89a830430c7f5f0d71ea73c8dfb393"
        },
        "date": 1610183075388,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 391460,
            "range": "± 9948",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 270,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 272,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 445,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1356,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1373,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6924482,
            "range": "± 5742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 573,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 586,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24981,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23586,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 483,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 760,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 120,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 120,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 120,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1970011,
            "range": "± 3490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1961100,
            "range": "± 3440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1920075,
            "range": "± 3144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25007,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8154,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1980,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1940,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 537,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 546,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1200,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1444,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 795,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1032,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 450,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 464,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 331,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 424,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 881,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 489,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 488765,
            "range": "± 11953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27425027,
            "range": "± 529893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5252,
            "range": "± 616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22266,
            "range": "± 6077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8567,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25051,
            "range": "± 693",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 24848,
            "range": "± 1037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 57974,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4510,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 859,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1888150,
            "range": "± 54567",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "e5b345bca47addfd466db75a666e1941f5be55f0",
          "message": "Fix feature builds.",
          "timestamp": "2021-01-09T17:06:01+08:00",
          "tree_id": "97cc4b2c1fda0b03c2cdf2947baf2a84087912d5",
          "url": "https://github.com/schungx/rhai/commit/e5b345bca47addfd466db75a666e1941f5be55f0"
        },
        "date": 1610183562290,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 315384,
            "range": "± 113656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 244,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 192,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 327,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 962,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 941,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5022324,
            "range": "± 590578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 412,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 410,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17408,
            "range": "± 4381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17217,
            "range": "± 4072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 366,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 520,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 91,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 88,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1467608,
            "range": "± 291336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1455197,
            "range": "± 429319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1403134,
            "range": "± 193647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17230,
            "range": "± 4833",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5572,
            "range": "± 1034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1321,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1394,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 376,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 408,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1080,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1001,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 549,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 714,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 310,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 309,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 230,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 296,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 634,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 341,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 357081,
            "range": "± 56971",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19902153,
            "range": "± 1607940",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4009,
            "range": "± 1118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15345,
            "range": "± 3207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6086,
            "range": "± 1206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17845,
            "range": "± 2767",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18056,
            "range": "± 1636",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42996,
            "range": "± 7813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3341,
            "range": "± 1257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 585,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1393069,
            "range": "± 176764",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "0b6657d1b17c77906ef8627bb4aae2a9d38d2902",
          "message": "Fix clippy.",
          "timestamp": "2021-01-09T17:13:34+08:00",
          "tree_id": "5377a1dbfe733044adf48de4b167715f679b67cd",
          "url": "https://github.com/schungx/rhai/commit/0b6657d1b17c77906ef8627bb4aae2a9d38d2902"
        },
        "date": 1610184203336,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 332198,
            "range": "± 68579",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 234,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 226,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 362,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1062,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1129,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5666552,
            "range": "± 1060951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 475,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 473,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19871,
            "range": "± 3057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19042,
            "range": "± 4012",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 386,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 606,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 98,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 101,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 102,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1672587,
            "range": "± 330059",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1560150,
            "range": "± 256106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1575115,
            "range": "± 266106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19799,
            "range": "± 2543",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6524,
            "range": "± 1025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1638,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1521,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 450,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 448,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 954,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1140,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 707,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 901,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 359,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 357,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 255,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 358,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 732,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 423,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 407586,
            "range": "± 71795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22039838,
            "range": "± 4210930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4166,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17826,
            "range": "± 2564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7004,
            "range": "± 1509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20969,
            "range": "± 4599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20130,
            "range": "± 3909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47545,
            "range": "± 9700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3639,
            "range": "± 894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 691,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1702126,
            "range": "± 354929",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "8c47d6145690c297c92d78eb6030d6be72135183",
          "message": "Refine documentation and comments.",
          "timestamp": "2021-01-11T23:09:33+08:00",
          "tree_id": "785fdf17b46041ec5fffcd8316b840077c5638cc",
          "url": "https://github.com/schungx/rhai/commit/8c47d6145690c297c92d78eb6030d6be72135183"
        },
        "date": 1610378299829,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 387558,
            "range": "± 55367",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 272,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 281,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 431,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1381,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1340,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6817128,
            "range": "± 332969",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 571,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 580,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 25155,
            "range": "± 1662",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23309,
            "range": "± 1262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 451,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 713,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 122,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 121,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 121,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1943887,
            "range": "± 88989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1956099,
            "range": "± 70063",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1899745,
            "range": "± 85606",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24970,
            "range": "± 488",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7916,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1920,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1925,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 525,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 546,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1203,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1388,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 783,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1016,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 435,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 440,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 331,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 424,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 873,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 494,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 488748,
            "range": "± 24549",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26174059,
            "range": "± 1271797",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5216,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 21817,
            "range": "± 1235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8555,
            "range": "± 765",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25326,
            "range": "± 2197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 24208,
            "range": "± 1324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 58046,
            "range": "± 3448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4476,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 858,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1885241,
            "range": "± 52969",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "fe65bf6137df5eea6ec8e0e2085fd3737664f247",
          "message": "Fix bug in optimizer.",
          "timestamp": "2021-01-12T23:52:50+08:00",
          "tree_id": "2def491041876f934d8656eb326e8f5071b9bc3c",
          "url": "https://github.com/schungx/rhai/commit/fe65bf6137df5eea6ec8e0e2085fd3737664f247"
        },
        "date": 1610467219933,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 290595,
            "range": "± 1927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 229,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 231,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 352,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 990,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 997,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5128248,
            "range": "± 6367",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 437,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 431,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18482,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17532,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 336,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 543,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 90,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 90,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 89,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1464034,
            "range": "± 3656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1456044,
            "range": "± 3801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1417123,
            "range": "± 3806",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19239,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5979,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1425,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1418,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 392,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 397,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 931,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1102,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 605,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 762,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 326,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 325,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 244,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 317,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 650,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 360,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 355520,
            "range": "± 1502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20977638,
            "range": "± 51916",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3870,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16396,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6304,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18769,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18687,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43961,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3344,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 633,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1399209,
            "range": "± 10717",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "3f44e2893c34245c78b495ba0235b2a3cfba49eb",
          "message": "Wrap up 0.19.10.",
          "timestamp": "2021-01-14T19:07:03+08:00",
          "tree_id": "8eecafef3521baef5a7117e9e6a7282e8f020bd6",
          "url": "https://github.com/schungx/rhai/commit/3f44e2893c34245c78b495ba0235b2a3cfba49eb"
        },
        "date": 1610622887716,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 392209,
            "range": "± 17040",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 292,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 283,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 444,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1352,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1398,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6958574,
            "range": "± 152370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 576,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 590,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 25726,
            "range": "± 672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23821,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 460,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 739,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 122,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 122,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 122,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1987116,
            "range": "± 32188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1966784,
            "range": "± 69051",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1922248,
            "range": "± 6816",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25069,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8159,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1924,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1940,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 532,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 538,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1177,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1432,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 791,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1024,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 441,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 440,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 336,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 425,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 883,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 488,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 487742,
            "range": "± 7275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26491126,
            "range": "± 536253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5199,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 21864,
            "range": "± 610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8515,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24791,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 24706,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 58609,
            "range": "± 1745",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4482,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 835,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1890156,
            "range": "± 59422",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "1c7884f0d8a1b311d9554b251f94b1269bd1a79b",
          "message": "Switch to fxhash for fast hashing.",
          "timestamp": "2021-01-15T23:30:45+08:00",
          "tree_id": "8e7ee687ddce63119c77e8d2d7546c0393c4148b",
          "url": "https://github.com/schungx/rhai/commit/1c7884f0d8a1b311d9554b251f94b1269bd1a79b"
        },
        "date": 1610724851842,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 275236,
            "range": "± 1680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 240,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 245,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 327,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1113,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1133,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5114555,
            "range": "± 19441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 481,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 493,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20500,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19718,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 347,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 565,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 101,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 101,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 101,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1416736,
            "range": "± 5785",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1410616,
            "range": "± 4447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1355626,
            "range": "± 3866",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18925,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6016,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1616,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1616,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 459,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 456,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 941,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1135,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 632,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 766,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 335,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 336,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 249,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 329,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 652,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 378,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 341321,
            "range": "± 1306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21420177,
            "range": "± 37374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4476,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18663,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7394,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21121,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20739,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 49019,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3804,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 696,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1472446,
            "range": "± 4593",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "c4b6c31bf0b42c740b68b5d623ce76218b024f0d",
          "message": "Use ahash as default hasher.",
          "timestamp": "2021-01-15T23:52:56+08:00",
          "tree_id": "ed8aecb9257190ff7b02d2a32fae1602e7bb468a",
          "url": "https://github.com/schungx/rhai/commit/c4b6c31bf0b42c740b68b5d623ce76218b024f0d"
        },
        "date": 1610726494285,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 330219,
            "range": "± 96038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 300,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 283,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 416,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1286,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1302,
            "range": "± 396",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6373421,
            "range": "± 715521",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 561,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 588,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23923,
            "range": "± 6813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 22743,
            "range": "± 6157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 431,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 680,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 122,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 122,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 122,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1642026,
            "range": "± 202639",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1677018,
            "range": "± 230385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1647826,
            "range": "± 148461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22165,
            "range": "± 4107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6990,
            "range": "± 1402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1868,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1886,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 528,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 540,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1099,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1380,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 712,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 916,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 429,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 434,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 304,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 401,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 787,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 454,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 403190,
            "range": "± 70674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26105256,
            "range": "± 2076628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5197,
            "range": "± 1589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 21785,
            "range": "± 1279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8540,
            "range": "± 2680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25139,
            "range": "± 2299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 24170,
            "range": "± 4373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 55996,
            "range": "± 15112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4369,
            "range": "± 968",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 828,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1744998,
            "range": "± 149534",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "234f543db38d8fadd1506322834625bcc4555a4f",
          "message": "Merge pull request #62 from Eliah-Lakhin/ast-shared-module\n\nExposing AST functions shared module under internals feature",
          "timestamp": "2021-01-16T11:30:39+08:00",
          "tree_id": "71cf919d35ac1884f499ce16396c1035d39ddfed",
          "url": "https://github.com/schungx/rhai/commit/234f543db38d8fadd1506322834625bcc4555a4f"
        },
        "date": 1610768119172,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 344166,
            "range": "± 58917",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 296,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 293,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 425,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1382,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1321,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6678709,
            "range": "± 607230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 569,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 585,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 27347,
            "range": "± 7603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23031,
            "range": "± 8571",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 429,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 678,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 116,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 119,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 115,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1706413,
            "range": "± 385729",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1711873,
            "range": "± 617174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1641663,
            "range": "± 148150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22040,
            "range": "± 6664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7248,
            "range": "± 1427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1913,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1884,
            "range": "± 290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 533,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 592,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1160,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1441,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 745,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 946,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 418,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 417,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 313,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 399,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 829,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 468,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 420160,
            "range": "± 106925",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26507837,
            "range": "± 2138637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5443,
            "range": "± 1344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22237,
            "range": "± 3064",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 9102,
            "range": "± 1826",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25040,
            "range": "± 12982",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 25229,
            "range": "± 3576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 61980,
            "range": "± 8247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4590,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 866,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1759042,
            "range": "± 209595",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "e6c6ed759f94fb8a3890c8cafed946008f454b76",
          "message": "Merge branch 'master' of https://github.com/schungx/rhai",
          "timestamp": "2021-01-16T11:31:04+08:00",
          "tree_id": "e178b1f05bbcbcac92e2c889318294a2c5614f67",
          "url": "https://github.com/schungx/rhai/commit/e6c6ed759f94fb8a3890c8cafed946008f454b76"
        },
        "date": 1610768742088,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 308648,
            "range": "± 52620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 245,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 256,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 352,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1172,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1201,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5669047,
            "range": "± 777547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 508,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 521,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22748,
            "range": "± 7811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20874,
            "range": "± 4473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 387,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 592,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 99,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 106,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 103,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1645125,
            "range": "± 480150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1464233,
            "range": "± 306596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1420286,
            "range": "± 348106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19421,
            "range": "± 3794",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6173,
            "range": "± 1029",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1579,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1595,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 479,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 462,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1010,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1142,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 626,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 814,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 381,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 361,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 292,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 372,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 693,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 413,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 350315,
            "range": "± 53247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23258151,
            "range": "± 3725135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4661,
            "range": "± 905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18607,
            "range": "± 3636",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7556,
            "range": "± 1306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22211,
            "range": "± 6169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20529,
            "range": "± 5872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 50090,
            "range": "± 10068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3835,
            "range": "± 746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 739,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1469581,
            "range": "± 236625",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "ec272cf9b970504b6eafc8b60a1fbff5ec1fd104",
          "message": "Add Serialize/Deserialize for Dynamic and ImmutableString.",
          "timestamp": "2021-01-18T10:30:58+08:00",
          "tree_id": "8f6c0d1199f10f701bddf11f9ee67b3f79c28cb0",
          "url": "https://github.com/schungx/rhai/commit/ec272cf9b970504b6eafc8b60a1fbff5ec1fd104"
        },
        "date": 1610937491838,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 379461,
            "range": "± 69518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 320,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 304,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 434,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1407,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1437,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6968831,
            "range": "± 1082772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 607,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 629,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 26315,
            "range": "± 1871",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 24935,
            "range": "± 2838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 470,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 752,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 134,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 131,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 134,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1938285,
            "range": "± 151917",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1912294,
            "range": "± 243415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1908996,
            "range": "± 224753",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24800,
            "range": "± 2821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7957,
            "range": "± 1685",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2069,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2065,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 580,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 587,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1228,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1445,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 787,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1051,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 459,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 470,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 344,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 444,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 859,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 527,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 450222,
            "range": "± 56964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28882297,
            "range": "± 2178409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5809,
            "range": "± 615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22989,
            "range": "± 2104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 9368,
            "range": "± 702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26685,
            "range": "± 4036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 26066,
            "range": "± 3471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 63305,
            "range": "± 7580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 5045,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 915,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1903602,
            "range": "± 323705",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "4a8debb5edee87c9d7a00f35294dd5a3e100b37d",
          "message": "Fix builds.",
          "timestamp": "2021-01-18T10:56:42+08:00",
          "tree_id": "98fc63a9664d93ef13437758cee5f8324c979d51",
          "url": "https://github.com/schungx/rhai/commit/4a8debb5edee87c9d7a00f35294dd5a3e100b37d"
        },
        "date": 1610938840838,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 336845,
            "range": "± 4427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 284,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 294,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 407,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1316,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1342,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6422163,
            "range": "± 10485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 570,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 586,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24900,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23858,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 439,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 695,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 124,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 123,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 123,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1783636,
            "range": "± 2406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1813139,
            "range": "± 3637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1741118,
            "range": "± 3786",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23484,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7625,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1944,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1956,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 534,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 546,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1152,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1348,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 737,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 943,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 419,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 419,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 308,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 404,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 815,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 465,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 441302,
            "range": "± 115782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24836139,
            "range": "± 84285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5334,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22034,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8860,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25659,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 25415,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 60794,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4693,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 841,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1798550,
            "range": "± 6612",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "aef18b5473d5ae9fcfd0006d21d2fbf851716036",
          "message": "Add wasm-bindgen and stdweb features.",
          "timestamp": "2021-01-18T11:35:55+08:00",
          "tree_id": "2e41626f05226fa330e0cb3808dec5c546ac5212",
          "url": "https://github.com/schungx/rhai/commit/aef18b5473d5ae9fcfd0006d21d2fbf851716036"
        },
        "date": 1610941151363,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 285015,
            "range": "± 2171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 246,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 238,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 335,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1095,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1120,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5334224,
            "range": "± 21398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 472,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 489,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21705,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20350,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 359,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 575,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 102,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 103,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 102,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1487790,
            "range": "± 4208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1477890,
            "range": "± 2737",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1425398,
            "range": "± 3377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19545,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6298,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1640,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1675,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 454,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 462,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 966,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1124,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 613,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 802,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 355,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 356,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 259,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 339,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 675,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 389,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 357036,
            "range": "± 1502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21998612,
            "range": "± 24724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4489,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18757,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7377,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21732,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21043,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 50991,
            "range": "± 424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3788,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 703,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1516868,
            "range": "± 62037",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "9acf7b4774185905e2d10f4e57350bb48a23be52",
          "message": "Bump ahash to 0.6.",
          "timestamp": "2021-01-19T14:23:05+08:00",
          "tree_id": "1154fdfc9f506841c3d1ce1a588ebf4d6be97cae",
          "url": "https://github.com/schungx/rhai/commit/9acf7b4774185905e2d10f4e57350bb48a23be52"
        },
        "date": 1611156443626,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 324348,
            "range": "± 69954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 262,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 256,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 378,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1209,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1246,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6046517,
            "range": "± 766403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 534,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 544,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23447,
            "range": "± 3645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 22413,
            "range": "± 2805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 416,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 662,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 116,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 116,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 115,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1629323,
            "range": "± 199756",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1615820,
            "range": "± 147782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1577760,
            "range": "± 199340",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22578,
            "range": "± 3516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7101,
            "range": "± 670",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1783,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1790,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 512,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 516,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1175,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1267,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 689,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 954,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 442,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 415,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 283,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 397,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 765,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 445,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 396957,
            "range": "± 49919",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24681185,
            "range": "± 2199244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5005,
            "range": "± 787",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20066,
            "range": "± 4278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8026,
            "range": "± 923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23276,
            "range": "± 2810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 22957,
            "range": "± 2278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 54003,
            "range": "± 4884",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4183,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 776,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1684454,
            "range": "± 235393",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "f6553c1426d134ebfea313725441f5621c0e5e04",
          "message": "Fix feature builds.",
          "timestamp": "2021-01-21T10:32:05+08:00",
          "tree_id": "a1a95b8d6ff4b48de087b60469b30aa7b2e2529d",
          "url": "https://github.com/schungx/rhai/commit/f6553c1426d134ebfea313725441f5621c0e5e04"
        },
        "date": 1611196954808,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 343723,
            "range": "± 99063",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 285,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 301,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 359,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1380,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1376,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6935289,
            "range": "± 825662",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 551,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 599,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 25390,
            "range": "± 5729",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 24357,
            "range": "± 3668",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 437,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 738,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 126,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 133,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 129,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1747395,
            "range": "± 332133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1669533,
            "range": "± 420206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1527384,
            "range": "± 409189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23007,
            "range": "± 4455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7884,
            "range": "± 2050",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1854,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1704,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 523,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 542,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1193,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1356,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 653,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1022,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 426,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 419,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 329,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 395,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 850,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 454,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 403141,
            "range": "± 129291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25025098,
            "range": "± 5646659",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5246,
            "range": "± 1087",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 21886,
            "range": "± 3778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8466,
            "range": "± 1446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26173,
            "range": "± 5285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 24379,
            "range": "± 6555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 57039,
            "range": "± 17328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4342,
            "range": "± 1142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 833,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1553278,
            "range": "± 463336",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "3b42cc5bb2306c2d24f78c522a63bc7501c92be7",
          "message": "Fix bug where plugin module parameters are consumed.",
          "timestamp": "2021-01-23T09:37:27+08:00",
          "tree_id": "cfa3abd01e413d0f8dcaef562b14c53ba51d5e6a",
          "url": "https://github.com/schungx/rhai/commit/3b42cc5bb2306c2d24f78c522a63bc7501c92be7"
        },
        "date": 1611366302264,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 343765,
            "range": "± 14788",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 278,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 267,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 399,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1342,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1351,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6547082,
            "range": "± 111486",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 569,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 579,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24988,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 24212,
            "range": "± 1318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 435,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 691,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 126,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 126,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 126,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1837163,
            "range": "± 26535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1763803,
            "range": "± 65461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1705759,
            "range": "± 83365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23717,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7538,
            "range": "± 611",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1955,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1970,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 513,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 505,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1154,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1388,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 740,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 940,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 419,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 421,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 341,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 407,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 804,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 463,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 431765,
            "range": "± 33442",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24820294,
            "range": "± 688322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5384,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22600,
            "range": "± 1457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 9043,
            "range": "± 686",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26252,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 25399,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 60537,
            "range": "± 2106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4786,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 897,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1781774,
            "range": "± 52594",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "049f472ac91b5fd21d32c62c1339a1f3c3436106",
          "message": "Fix bug in internals.",
          "timestamp": "2021-01-23T10:34:38+08:00",
          "tree_id": "a53e583abe1dbc4aed5a8772af4b016be5b2e9de",
          "url": "https://github.com/schungx/rhai/commit/049f472ac91b5fd21d32c62c1339a1f3c3436106"
        },
        "date": 1611369811285,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 353886,
            "range": "± 23485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 296,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 294,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 465,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1360,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1370,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6864373,
            "range": "± 217006",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 602,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 610,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 25204,
            "range": "± 2570",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23689,
            "range": "± 1739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 451,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 722,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 131,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 132,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 130,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1836979,
            "range": "± 94889",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1820468,
            "range": "± 41128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1773977,
            "range": "± 151805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24948,
            "range": "± 2199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7531,
            "range": "± 754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2008,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2052,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 563,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 565,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1199,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1479,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 766,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 994,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 435,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 437,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 326,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 429,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 834,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 485,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 444521,
            "range": "± 11407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27774032,
            "range": "± 1146509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5422,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22131,
            "range": "± 5379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8711,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25567,
            "range": "± 3311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 24803,
            "range": "± 1916",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 60759,
            "range": "± 5497",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4583,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 863,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1793602,
            "range": "± 285005",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "e902c740736df6e0784bbe6546ea549b91039a0e",
          "message": "Add threading example.",
          "timestamp": "2021-01-25T11:31:54+08:00",
          "tree_id": "380bd2069c1bdd375d1dd5c763ce30dd837d921b",
          "url": "https://github.com/schungx/rhai/commit/e902c740736df6e0784bbe6546ea549b91039a0e"
        },
        "date": 1611545989321,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 341536,
            "range": "± 38553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 285,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 288,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 399,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1338,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1353,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6483862,
            "range": "± 466320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 570,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 588,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 25235,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 24034,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 448,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 702,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 125,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 125,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 124,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1824008,
            "range": "± 6978",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1757308,
            "range": "± 6140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1708350,
            "range": "± 7552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23526,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7535,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1968,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1991,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 542,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 549,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1126,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1360,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 746,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 942,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 416,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 420,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 309,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 405,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 808,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 465,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 432402,
            "range": "± 3647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24870132,
            "range": "± 145313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5277,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22678,
            "range": "± 1117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8747,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25269,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 25190,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 58737,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4653,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 868,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1783591,
            "range": "± 21266",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "2a209b82e9d668ed6824798fb5d739ae76ab9c69",
          "message": "Fix threading example for sync.",
          "timestamp": "2021-01-25T12:55:10+08:00",
          "tree_id": "ff86c269848486eae7c405261b12bb55c5d2d8c4",
          "url": "https://github.com/schungx/rhai/commit/2a209b82e9d668ed6824798fb5d739ae76ab9c69"
        },
        "date": 1611550963929,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 357241,
            "range": "± 5311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 289,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 285,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 415,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1393,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1411,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6782903,
            "range": "± 27507",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 594,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 654,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 26320,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 25179,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 463,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 724,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 130,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 130,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 130,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1896064,
            "range": "± 2819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1824826,
            "range": "± 4297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1763831,
            "range": "± 3173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24420,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7827,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2053,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2051,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 565,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 577,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1173,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1425,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 794,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 980,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 442,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 443,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 322,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 420,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 845,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 482,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 449614,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25821384,
            "range": "± 9214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5742,
            "range": "± 750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 23306,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 9284,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26292,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 26098,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 62286,
            "range": "± 1022",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4973,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 958,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1856979,
            "range": "± 3634",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "f76daadcba3b15fd491463621899c658f7479ac3",
          "message": "Refine FuncArgs trait.",
          "timestamp": "2021-01-28T15:29:55+08:00",
          "tree_id": "ab923ec220703ee4b7d650690c7889c7815ff0b6",
          "url": "https://github.com/schungx/rhai/commit/f76daadcba3b15fd491463621899c658f7479ac3"
        },
        "date": 1611820002107,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 285961,
            "range": "± 2099",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 235,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 233,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 336,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1157,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1147,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5315246,
            "range": "± 20698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 500,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 486,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21403,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20742,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 365,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 580,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 104,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1509827,
            "range": "± 5382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1519607,
            "range": "± 2475",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1488757,
            "range": "± 8748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19660,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6276,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1657,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1657,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 474,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 450,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 974,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1160,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 611,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 807,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 348,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 349,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 261,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 340,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 680,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 388,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 359951,
            "range": "± 3297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21967137,
            "range": "± 68412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4520,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18773,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7438,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21647,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21332,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 51139,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3837,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 700,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1485496,
            "range": "± 7710",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "903b6d6795a846464bc37fd8e1a213177a8b102b",
          "message": "Rename set_doc_comments to enable_doc_comments.",
          "timestamp": "2021-01-28T16:59:19+08:00",
          "tree_id": "cdfea593af707f7051290a00eb179bbe5e7217a6",
          "url": "https://github.com/schungx/rhai/commit/903b6d6795a846464bc37fd8e1a213177a8b102b"
        },
        "date": 1611825682900,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 304129,
            "range": "± 38606",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 257,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 247,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 355,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1190,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1221,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5673560,
            "range": "± 807476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 506,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 524,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22851,
            "range": "± 2724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21285,
            "range": "± 3403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 377,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 594,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 110,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 111,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 114,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1553269,
            "range": "± 168221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1546031,
            "range": "± 223791",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1597684,
            "range": "± 221683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21092,
            "range": "± 2700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6808,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1687,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1674,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 470,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 480,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1021,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1160,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 659,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 836,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 367,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 372,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 276,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 371,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 725,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 425,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 388732,
            "range": "± 56904",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22029311,
            "range": "± 2086949",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4824,
            "range": "± 583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19292,
            "range": "± 3377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7536,
            "range": "± 1261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22199,
            "range": "± 2415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23096,
            "range": "± 2743",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 53194,
            "range": "± 7520",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3908,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 767,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1647244,
            "range": "± 220900",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "bb925a697c9b81fa9ada9b2b123e24a648a8b7a0",
          "message": "Fix bug in Array::insert.",
          "timestamp": "2021-01-29T22:29:36+08:00",
          "tree_id": "2b2d2ad9d0232dbe71eef97b7635c260f82c60b7",
          "url": "https://github.com/schungx/rhai/commit/bb925a697c9b81fa9ada9b2b123e24a648a8b7a0"
        },
        "date": 1611931234498,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 338544,
            "range": "± 20574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 285,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 281,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 429,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1338,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1350,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6459017,
            "range": "± 214411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 552,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 582,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24939,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23662,
            "range": "± 1327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 407,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 679,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 121,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 122,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 121,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1789270,
            "range": "± 38573",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1760437,
            "range": "± 56392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1694938,
            "range": "± 99870",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23184,
            "range": "± 2425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7350,
            "range": "± 570",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1973,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1971,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 535,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 539,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1122,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1367,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 722,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 942,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 420,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 424,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 309,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 407,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 810,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 467,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 431670,
            "range": "± 19983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24145579,
            "range": "± 1758044",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5164,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22129,
            "range": "± 396",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8792,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25505,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23770,
            "range": "± 1866",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 59071,
            "range": "± 4858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4664,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 861,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1786461,
            "range": "± 41152",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "7fc38d4cd2bb309bf4dc2d909a54149c50e90d60",
          "message": "Change rhaiscript.github.io to rhai.rs",
          "timestamp": "2021-01-30T07:19:54+08:00",
          "tree_id": "66ee54b73a100c6ef5c2cc7659cfb86532ac7047",
          "url": "https://github.com/schungx/rhai/commit/7fc38d4cd2bb309bf4dc2d909a54149c50e90d60"
        },
        "date": 1611962806935,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 349891,
            "range": "± 72391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 278,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 276,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 398,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1255,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1316,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6422199,
            "range": "± 1052905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 575,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 560,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23636,
            "range": "± 4297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21838,
            "range": "± 4625",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 427,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 681,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 117,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 121,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 120,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1655756,
            "range": "± 326942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1688976,
            "range": "± 172359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1644980,
            "range": "± 267550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22677,
            "range": "± 4172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7368,
            "range": "± 1233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1891,
            "range": "± 570",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1903,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 562,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 575,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1158,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1372,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 728,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 981,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 417,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 421,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 319,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 408,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 859,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 464,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 419669,
            "range": "± 61072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26386249,
            "range": "± 3290338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5623,
            "range": "± 1407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22757,
            "range": "± 4813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 9191,
            "range": "± 1061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 26292,
            "range": "± 3625",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 25335,
            "range": "± 4837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 60931,
            "range": "± 17960",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4919,
            "range": "± 1802",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 989,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1767107,
            "range": "± 291978",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "42058836ba5edcf3b4e2825bf442a1dcbe9b1f2e",
          "message": "Fix panic in property access parsing error.",
          "timestamp": "2021-01-31T18:44:50+08:00",
          "tree_id": "e5f86db01597e828fa4ac91ce4943bdcbefb04f2",
          "url": "https://github.com/schungx/rhai/commit/42058836ba5edcf3b4e2825bf442a1dcbe9b1f2e"
        },
        "date": 1612090371597,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 346267,
            "range": "± 12164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 274,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 274,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 393,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1326,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1332,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6401725,
            "range": "± 183918",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 568,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 578,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 25272,
            "range": "± 1995",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 24358,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 433,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 688,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 123,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 123,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 123,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1852265,
            "range": "± 42296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1783992,
            "range": "± 26581",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1725763,
            "range": "± 24593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23574,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7657,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1932,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1981,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 537,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 539,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1142,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1355,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 753,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 950,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 427,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 427,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 312,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 407,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 845,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 466,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 442382,
            "range": "± 10583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25027827,
            "range": "± 226923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5333,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22265,
            "range": "± 688",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8833,
            "range": "± 708",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 25373,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 24863,
            "range": "± 1065",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 59869,
            "range": "± 3720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4642,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 864,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1781623,
            "range": "± 26538",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "c5e2620d0f54a48b3aae5f637237345fcb23e778",
          "message": "Minor code refactors.",
          "timestamp": "2021-02-03T19:14:26+08:00",
          "tree_id": "347bdeb318badb9b48b6464eb5ee87a960da5533",
          "url": "https://github.com/schungx/rhai/commit/c5e2620d0f54a48b3aae5f637237345fcb23e778"
        },
        "date": 1612351305323,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 284481,
            "range": "± 2542",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 237,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 235,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 348,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1110,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1125,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5333062,
            "range": "± 5905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 482,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 487,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21295,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20350,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 363,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 575,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 103,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 103,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 103,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1523623,
            "range": "± 6003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1470502,
            "range": "± 6821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1415661,
            "range": "± 14660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19793,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6344,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1693,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1653,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 479,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 456,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 966,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1202,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 611,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 801,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 352,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 351,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 256,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 336,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 670,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 388,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 372032,
            "range": "± 1762",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22167967,
            "range": "± 75449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4574,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 18942,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7565,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21850,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21221,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 50423,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3948,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 718,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1507267,
            "range": "± 8943",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "a54b88a8b0edc50dd7afddfcba66cbee6eee34a6",
          "message": "Dynamic::into_shared not available under no_closure.",
          "timestamp": "2021-02-06T22:16:44+08:00",
          "tree_id": "08ebed7f1a0d5d3c63d92a21a79fae249a6f240f",
          "url": "https://github.com/schungx/rhai/commit/a54b88a8b0edc50dd7afddfcba66cbee6eee34a6"
        },
        "date": 1612640479740,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 334015,
            "range": "± 22835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 276,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 272,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 389,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1264,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1266,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6113895,
            "range": "± 702862",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 554,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 581,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 24763,
            "range": "± 1276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 23840,
            "range": "± 5088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 409,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 646,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 119,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 122,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 118,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1651024,
            "range": "± 187257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1614915,
            "range": "± 206502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1596551,
            "range": "± 126461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21806,
            "range": "± 2305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6931,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1838,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1903,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 513,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 513,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1060,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1282,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 693,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 912,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 395,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 446,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 292,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 379,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 785,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 439,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 411979,
            "range": "± 38369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23362847,
            "range": "± 1933034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5104,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 21187,
            "range": "± 2554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8665,
            "range": "± 1509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24483,
            "range": "± 3302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23894,
            "range": "± 2620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 57522,
            "range": "± 5858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4484,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 813,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1680668,
            "range": "± 212914",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "7b87f8185076f61db22144d266e247d303d3d572",
          "message": "Add has_override and script calls to function resolution cache.",
          "timestamp": "2021-02-07T15:09:27+08:00",
          "tree_id": "3aef462019fed50501c69c1325b8471fc01646e3",
          "url": "https://github.com/schungx/rhai/commit/7b87f8185076f61db22144d266e247d303d3d572"
        },
        "date": 1612682199066,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 283426,
            "range": "± 2100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 234,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 238,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 339,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1125,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1141,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5211061,
            "range": "± 5849",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 467,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 484,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21945,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20947,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 363,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 569,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1438628,
            "range": "± 7805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1431178,
            "range": "± 3729",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1384098,
            "range": "± 7372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18857,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6064,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1651,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1666,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 445,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 456,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1024,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1169,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 608,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 798,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 352,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 350,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 262,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 360,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 683,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 408,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 352557,
            "range": "± 886",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21996090,
            "range": "± 298923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4503,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19033,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7368,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21517,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21168,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 51932,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3901,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 701,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1472737,
            "range": "± 4125",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "aafff4fb9302b7abc3dbb8b78ff25a2c0919e25e",
          "message": "Use stacked functions resolution caches to further improve performance.",
          "timestamp": "2021-02-07T15:41:40+08:00",
          "tree_id": "c73f3c41515191812d1e5b4cb8191208c41b4a88",
          "url": "https://github.com/schungx/rhai/commit/aafff4fb9302b7abc3dbb8b78ff25a2c0919e25e"
        },
        "date": 1612683987525,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 313186,
            "range": "± 32824",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 254,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 241,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 366,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1251,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1267,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5900543,
            "range": "± 362134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 529,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 537,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 22930,
            "range": "± 3854",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21748,
            "range": "± 2689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 389,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 615,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 114,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 114,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1677583,
            "range": "± 149489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1653469,
            "range": "± 129129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1596531,
            "range": "± 133377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21513,
            "range": "± 2558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6137,
            "range": "± 903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1760,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1777,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 448,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 514,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1170,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1314,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 643,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 819,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 381,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 403,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 306,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 389,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 759,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 469,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 394885,
            "range": "± 28803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23740325,
            "range": "± 2515900",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5005,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20592,
            "range": "± 3403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8028,
            "range": "± 1026",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23770,
            "range": "± 1927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 23000,
            "range": "± 2547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 55621,
            "range": "± 4931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4291,
            "range": "± 649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 796,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1659025,
            "range": "± 163119",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "f388d22c0fcfce63ad17278a5ec140af0ad11cc2",
          "message": "Fix no_module build.,",
          "timestamp": "2021-02-07T15:52:06+08:00",
          "tree_id": "173a58e46bd0e5cdb4680397a10d3fb1a612792c",
          "url": "https://github.com/schungx/rhai/commit/f388d22c0fcfce63ad17278a5ec140af0ad11cc2"
        },
        "date": 1612684721341,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 342718,
            "range": "± 49208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 273,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 274,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 402,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1195,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1247,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6494052,
            "range": "± 1268928",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 531,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 559,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23523,
            "range": "± 6102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 21304,
            "range": "± 3301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 420,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 674,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 115,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 114,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 114,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1593872,
            "range": "± 284488",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1619212,
            "range": "± 291298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1516767,
            "range": "± 266487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21369,
            "range": "± 3036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6954,
            "range": "± 1584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1770,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1797,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 500,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 500,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1218,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1462,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 720,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 965,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 433,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 439,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 331,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 444,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 779,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 506,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 430509,
            "range": "± 91808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26030404,
            "range": "± 4202683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5106,
            "range": "± 975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 22078,
            "range": "± 4336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 8446,
            "range": "± 1747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24787,
            "range": "± 5535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 24095,
            "range": "± 4759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 57878,
            "range": "± 12957",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4520,
            "range": "± 819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 858,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1633603,
            "range": "± 259152",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "committer": {
            "email": "schungx@live.com",
            "name": "Stephen Chung",
            "username": "schungx"
          },
          "distinct": true,
          "id": "a76bed2f46f9e9f4e0d04e947645cc03fc5a14cb",
          "message": "Use eval_statements_block when at global.",
          "timestamp": "2021-02-07T17:06:33+08:00",
          "tree_id": "ca44f5024dad314f42aeea87b640d75ff3d94276",
          "url": "https://github.com/schungx/rhai/commit/a76bed2f46f9e9f4e0d04e947645cc03fc5a14cb"
        },
        "date": 1612689473664,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 359888,
            "range": "± 71852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 298,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 280,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 399,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1297,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1294,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6276400,
            "range": "± 478940",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 553,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 569,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 23312,
            "range": "± 3853",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 22598,
            "range": "± 3491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 459,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 708,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 131,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 130,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 130,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1754570,
            "range": "± 159907",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1786403,
            "range": "± 209591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1653615,
            "range": "± 404010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22440,
            "range": "± 2574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7089,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1847,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1887,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 540,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 546,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1294,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1424,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 762,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 969,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 455,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 453,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 343,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 468,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 845,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 512,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 416706,
            "range": "± 65413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26235558,
            "range": "± 2023107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 5157,
            "range": "± 798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 20928,
            "range": "± 2125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 9064,
            "range": "± 887",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24492,
            "range": "± 4870",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 24344,
            "range": "± 5041",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 62854,
            "range": "± 6455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4914,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 890,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1717714,
            "range": "± 167172",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
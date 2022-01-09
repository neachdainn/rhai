window.BENCHMARK_DATA = {
  "lastUpdate": 1641704303797,
  "repoUrl": "https://github.com/schungx/rhai",
  "entries": {
    "Rust Benchmark": [
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
          "id": "87d48948f9a40e0354f8c5e47fdeacdca8fd8748",
          "message": "Merge branch 'bug-fixes'",
          "timestamp": "2021-09-28T16:55:33+08:00",
          "tree_id": "bbbbc2fb02a2c11694705c5ea5dc95325fed1b21",
          "url": "https://github.com/schungx/rhai/commit/87d48948f9a40e0354f8c5e47fdeacdca8fd8748"
        },
        "date": 1632819698027,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 268716,
            "range": "± 22712",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 167,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 157,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 330,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1496,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1563,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6192623,
            "range": "± 335358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 599,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 647,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17475,
            "range": "± 1514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16280,
            "range": "± 1157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 590,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1078,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 107,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 105,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 107,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2224836,
            "range": "± 92997",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4265599,
            "range": "± 159950",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3606606,
            "range": "± 123311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23129,
            "range": "± 707",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8978,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2556,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2598,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 577,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 636,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1349,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1247,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1192,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1632,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 634,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 663,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 389,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 487,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 640,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 539,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 421147,
            "range": "± 21626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20466464,
            "range": "± 738669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4107,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14209,
            "range": "± 677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5601,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18868,
            "range": "± 813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16524,
            "range": "± 669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41932,
            "range": "± 1810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3235,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 577,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1855117,
            "range": "± 64019",
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
          "id": "4908b58473f1537b1f7b87410fbfa33594d59e65",
          "message": "Lazy calculate indexer call hashes.",
          "timestamp": "2021-09-29T12:16:59+08:00",
          "tree_id": "bf7c153e1c423ddb21f8e1225eded072d5819e0f",
          "url": "https://github.com/schungx/rhai/commit/4908b58473f1537b1f7b87410fbfa33594d59e65"
        },
        "date": 1632926096460,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 267031,
            "range": "± 52679",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 152,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 143,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 323,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1580,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1682,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6636166,
            "range": "± 740330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 672,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 667,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17804,
            "range": "± 3624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16188,
            "range": "± 2920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 616,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1100,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 111,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 108,
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
            "value": 2323107,
            "range": "± 341430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4366763,
            "range": "± 449521",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3719279,
            "range": "± 314710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24119,
            "range": "± 2956",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9359,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2577,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2691,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 581,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 675,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1466,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1428,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1368,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1735,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 760,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 744,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 438,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 551,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 716,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 605,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 439279,
            "range": "± 37004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23093819,
            "range": "± 2806860",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4334,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15013,
            "range": "± 1521",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5736,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19899,
            "range": "± 2164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17241,
            "range": "± 1405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43199,
            "range": "± 4997",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3318,
            "range": "± 468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 630,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2029968,
            "range": "± 171797",
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
          "id": "90b6b15f1557343fa39a1b1230687e0527b80299",
          "message": "Use into().",
          "timestamp": "2021-10-11T15:49:51+08:00",
          "tree_id": "18b9a5cc17d7c7c72e25952479e2975ed8288dee",
          "url": "https://github.com/schungx/rhai/commit/90b6b15f1557343fa39a1b1230687e0527b80299"
        },
        "date": 1633939029076,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 284718,
            "range": "± 13333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 143,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 141,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 324,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1593,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1632,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6553554,
            "range": "± 12383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 630,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 672,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18679,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16816,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 622,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1111,
            "range": "± 5",
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
            "value": 112,
            "range": "± 0",
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
            "value": 2233978,
            "range": "± 68399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4365236,
            "range": "± 8705",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3685223,
            "range": "± 51725",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24054,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9413,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2678,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2690,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 606,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 654,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1342,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1317,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1260,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1714,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 696,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 684,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 402,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 514,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 664,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 591,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 433756,
            "range": "± 11536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19603101,
            "range": "± 2252306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4069,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14481,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5691,
            "range": "± 731",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19012,
            "range": "± 1891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17482,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43889,
            "range": "± 2071",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3430,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 591,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1926587,
            "range": "± 101722",
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
          "id": "782f6a3e12c95139bf51cfff7213244d8696b211",
          "message": "Revert change.",
          "timestamp": "2021-10-11T16:46:34+08:00",
          "tree_id": "66f064f32452ed1063cccbdba45b863a4940535a",
          "url": "https://github.com/schungx/rhai/commit/782f6a3e12c95139bf51cfff7213244d8696b211"
        },
        "date": 1633942366599,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 222217,
            "range": "± 33448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 122,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 120,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 262,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1380,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1306,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5604387,
            "range": "± 913700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 554,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 572,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14600,
            "range": "± 2778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13849,
            "range": "± 2046",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 516,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 926,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 92,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 89,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 93,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1956259,
            "range": "± 314242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3859199,
            "range": "± 632772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3076016,
            "range": "± 552814",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20491,
            "range": "± 3453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8503,
            "range": "± 1810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2207,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2162,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 508,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 533,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1151,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1184,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1023,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1384,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 609,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 607,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 327,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 420,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 588,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 484,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 349177,
            "range": "± 53539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19202050,
            "range": "± 4439284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3656,
            "range": "± 685",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11926,
            "range": "± 2521",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4815,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16682,
            "range": "± 3759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14034,
            "range": "± 1868",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36762,
            "range": "± 7793",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2834,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 532,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1710831,
            "range": "± 209380",
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
          "id": "716e6191c0f4de16ffaf50e99eb16a816e8b7348",
          "message": "Update error templates.",
          "timestamp": "2021-10-12T20:57:47+08:00",
          "tree_id": "da94577da9da6afcc0e6277bcfd0cdcd70a3a68f",
          "url": "https://github.com/schungx/rhai/commit/716e6191c0f4de16ffaf50e99eb16a816e8b7348"
        },
        "date": 1634043909244,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 235608,
            "range": "± 2177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 127,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 120,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 265,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1360,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1381,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5468079,
            "range": "± 12782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 524,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 560,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15806,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14291,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 533,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 986,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 93,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 93,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 93,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1877328,
            "range": "± 5903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3641040,
            "range": "± 90088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3046726,
            "range": "± 128583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20755,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7925,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2189,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2277,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 499,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 567,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1188,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1154,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1062,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1452,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 580,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 567,
            "range": "± 4",
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
            "value": 439,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 586,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 480,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 362815,
            "range": "± 1280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18797465,
            "range": "± 87485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3526,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12709,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4996,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17076,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14855,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36489,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2845,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 501,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1622987,
            "range": "± 2835",
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
          "id": "b091fea17b04f5c44ea83eb33a074a652d109b18",
          "message": "Add event handler test.",
          "timestamp": "2021-10-16T13:59:12+08:00",
          "tree_id": "38ace63f1f671a136f6400bf80a9b65c7f421ed0",
          "url": "https://github.com/schungx/rhai/commit/b091fea17b04f5c44ea83eb33a074a652d109b18"
        },
        "date": 1634364519330,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 272236,
            "range": "± 82733",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 175,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 169,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 291,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1614,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1674,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7084791,
            "range": "± 895453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 615,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 688,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16645,
            "range": "± 3021",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15235,
            "range": "± 2286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 679,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1178,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 119,
            "range": "± 17",
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
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2439030,
            "range": "± 254735",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4461783,
            "range": "± 1103838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3737783,
            "range": "± 765936",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25558,
            "range": "± 5921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9458,
            "range": "± 1073",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2714,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2787,
            "range": "± 505",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 681,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 760,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1413,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1320,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1217,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1620,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 639,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 671,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 419,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 532,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 663,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 567,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 448865,
            "range": "± 130319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23434008,
            "range": "± 2943238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4026,
            "range": "± 1151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13295,
            "range": "± 2991",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5406,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19245,
            "range": "± 2600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15973,
            "range": "± 2088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39662,
            "range": "± 6465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3155,
            "range": "± 530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 596,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2020581,
            "range": "± 418627",
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
          "id": "2334cd8f5637020c1e4698e4c31b05e32d0f7e3c",
          "message": "Avoid cloning in array methods as much as possible.",
          "timestamp": "2021-10-19T19:57:15+08:00",
          "tree_id": "857712d79c513cf461c13b315ff7ead222a68408",
          "url": "https://github.com/schungx/rhai/commit/2334cd8f5637020c1e4698e4c31b05e32d0f7e3c"
        },
        "date": 1634645651318,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 240484,
            "range": "± 33970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 149,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 143,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 259,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1576,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1507,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6190237,
            "range": "± 668633",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 608,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 612,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14720,
            "range": "± 2731",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13256,
            "range": "± 1982",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 603,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1006,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 102,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 101,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 102,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1994692,
            "range": "± 271046",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4017471,
            "range": "± 625482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3349713,
            "range": "± 562311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22526,
            "range": "± 3632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8346,
            "range": "± 1051",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2230,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2424,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 525,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 553,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1280,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1254,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1258,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1544,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 622,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 625,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 373,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 474,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 616,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 515,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 406280,
            "range": "± 67349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22102120,
            "range": "± 4190922",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3649,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12205,
            "range": "± 1407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5003,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16941,
            "range": "± 2331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14272,
            "range": "± 2499",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36571,
            "range": "± 4456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2924,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 556,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1816081,
            "range": "± 277506",
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
          "id": "ae493918a217f87e3f8cfafb097c53e1e28b12c4",
          "message": "Update test outputs.",
          "timestamp": "2021-10-20T15:34:21+08:00",
          "tree_id": "888218ce24bafa3211715966c3850254f93d2e21",
          "url": "https://github.com/schungx/rhai/commit/ae493918a217f87e3f8cfafb097c53e1e28b12c4"
        },
        "date": 1634716076619,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 237027,
            "range": "± 63858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 151,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 158,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 226,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1361,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1373,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5890747,
            "range": "± 839278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 564,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 602,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14735,
            "range": "± 2192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13259,
            "range": "± 2752",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 557,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 885,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 106,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 104,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 108,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2144046,
            "range": "± 373497",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3920211,
            "range": "± 701526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3336171,
            "range": "± 694589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22993,
            "range": "± 3910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8716,
            "range": "± 1521",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2212,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2356,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 530,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 586,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1295,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1203,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1029,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1355,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 554,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 598,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 367,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 508,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 537,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 512,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 430427,
            "range": "± 71303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22063076,
            "range": "± 3568262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3779,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12207,
            "range": "± 2682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4838,
            "range": "± 955",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16690,
            "range": "± 2950",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14155,
            "range": "± 4200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36202,
            "range": "± 7094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2853,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 562,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1918473,
            "range": "± 421958",
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
          "id": "65ef4024400df06177ac9fc1e86a68e291bc1bff",
          "message": "Eliminate optimize module with no_optimize.",
          "timestamp": "2021-10-21T19:17:34+08:00",
          "tree_id": "93d596e3dee5fa3c94e7570c6d9e14572ddbe55a",
          "url": "https://github.com/schungx/rhai/commit/65ef4024400df06177ac9fc1e86a68e291bc1bff"
        },
        "date": 1634815363157,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 249708,
            "range": "± 2609",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 137,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 231,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1374,
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
            "value": 5599455,
            "range": "± 9113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 534,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 573,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13565,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12434,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 507,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 903,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1948196,
            "range": "± 3471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3517567,
            "range": "± 9473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3062621,
            "range": "± 4608",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20975,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7952,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2121,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2152,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 492,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 528,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1178,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1143,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1179,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1522,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 618,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 615,
            "range": "± 0",
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
            "value": 417,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 547,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 469,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 374525,
            "range": "± 859",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19363567,
            "range": "± 99368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3406,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11300,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4620,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15481,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13289,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34801,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2634,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 484,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1688102,
            "range": "± 5306",
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
          "id": "83f83307ca869a76375513ffcc8e3a4253ffaa5b",
          "message": "Fix builds.",
          "timestamp": "2021-10-21T19:30:58+08:00",
          "tree_id": "924e1adbbbf2dfcf4ba309aa708097eafe2d6338",
          "url": "https://github.com/schungx/rhai/commit/83f83307ca869a76375513ffcc8e3a4253ffaa5b"
        },
        "date": 1634816456919,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 271075,
            "range": "± 60239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 158,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 165,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 259,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1503,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1591,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6343308,
            "range": "± 839952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 599,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 642,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15409,
            "range": "± 2683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14019,
            "range": "± 1763",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 613,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1138,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 107,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 108,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 106,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2197749,
            "range": "± 272988",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3923663,
            "range": "± 477036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3473563,
            "range": "± 459136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24972,
            "range": "± 3906",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8927,
            "range": "± 1135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2397,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2421,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 565,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 595,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1391,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1322,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1142,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1536,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 639,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 636,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 403,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 493,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 654,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 570,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 423109,
            "range": "± 45232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22644424,
            "range": "± 2532863",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3768,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12636,
            "range": "± 2129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5089,
            "range": "± 1169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17476,
            "range": "± 3151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14559,
            "range": "± 2071",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37074,
            "range": "± 4931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2909,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 556,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1910469,
            "range": "± 270956",
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
          "id": "8a7912a901a845e1444f38c49a67eeeeeb6ff3b0",
          "message": "Fix build.",
          "timestamp": "2021-10-21T19:51:35+08:00",
          "tree_id": "f202cf57f45b4fe45badf04be02f08c4cf4890d2",
          "url": "https://github.com/schungx/rhai/commit/8a7912a901a845e1444f38c49a67eeeeeb6ff3b0"
        },
        "date": 1634817702523,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 294969,
            "range": "± 14931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 168,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 166,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 274,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1691,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1711,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6653583,
            "range": "± 101595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 640,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 687,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15934,
            "range": "± 910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14978,
            "range": "± 640",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 612,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1090,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 117,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 119,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 119,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2281553,
            "range": "± 88093",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4185983,
            "range": "± 123095",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3653256,
            "range": "± 87453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24613,
            "range": "± 874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9332,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2555,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2581,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 587,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 631,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1340,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1349,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1207,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1656,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 657,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 662,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 424,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 513,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 685,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 594,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 452350,
            "range": "± 9338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21935767,
            "range": "± 422327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4029,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13062,
            "range": "± 1153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5360,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18041,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15918,
            "range": "± 734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40810,
            "range": "± 687",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3137,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 582,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2025195,
            "range": "± 81064",
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
          "id": "07181feacfe6b134530d2e10c5b64b5e32d0de33",
          "message": "Revise test output.",
          "timestamp": "2021-10-23T12:12:23+08:00",
          "tree_id": "7bcacdf39fead3f94e82e58d000a077b34ee0cda",
          "url": "https://github.com/schungx/rhai/commit/07181feacfe6b134530d2e10c5b64b5e32d0de33"
        },
        "date": 1634963218794,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 295494,
            "range": "± 40334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 182,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 151,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 257,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1491,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1816,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6777915,
            "range": "± 1505309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 609,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 620,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14582,
            "range": "± 2893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15951,
            "range": "± 2755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 663,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1208,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 101,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 105,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 101,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1986796,
            "range": "± 227793",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4516072,
            "range": "± 507079",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4034263,
            "range": "± 522111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22731,
            "range": "± 5652",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8524,
            "range": "± 1797",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2347,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2418,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 612,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 657,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1278,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1353,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1143,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1489,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 728,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 698,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 409,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 463,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 597,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 512,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 396398,
            "range": "± 74328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24905068,
            "range": "± 5251389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4377,
            "range": "± 813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12005,
            "range": "± 2817",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5072,
            "range": "± 1050",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16485,
            "range": "± 3467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15071,
            "range": "± 3576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43215,
            "range": "± 4947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3348,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 652,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2060674,
            "range": "± 236448",
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
          "id": "a51482e9c8c6bc7d6cab15c753096b1715774175",
          "message": "Fix formatting.",
          "timestamp": "2021-10-23T12:28:42+08:00",
          "tree_id": "2941315a800e63b84a65b137acd7619801368b16",
          "url": "https://github.com/schungx/rhai/commit/a51482e9c8c6bc7d6cab15c753096b1715774175"
        },
        "date": 1634964863296,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 302548,
            "range": "± 73252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 171,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 162,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 278,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1640,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1689,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7010008,
            "range": "± 787603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 656,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 694,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16182,
            "range": "± 1680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15371,
            "range": "± 1746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 675,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1171,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 119,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 118,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2353140,
            "range": "± 155983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4436938,
            "range": "± 510300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3840245,
            "range": "± 679299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26369,
            "range": "± 2689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9650,
            "range": "± 1419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2583,
            "range": "± 603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2638,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 610,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 662,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1488,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1463,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1255,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1791,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 667,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 680,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 427,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 528,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 706,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 565,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 449718,
            "range": "± 68677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23405552,
            "range": "± 2376512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4033,
            "range": "± 664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12844,
            "range": "± 2146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5645,
            "range": "± 888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17686,
            "range": "± 3214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15249,
            "range": "± 2331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40492,
            "range": "± 6855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3116,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 618,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1971686,
            "range": "± 289369",
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
          "id": "1cc50bc54328b793e89761bfb6f7b76a634203ac",
          "message": "Enhance CI.",
          "timestamp": "2021-10-23T18:02:15+08:00",
          "tree_id": "88cc46e11ab8a48a3689532168d8a32c825dc64e",
          "url": "https://github.com/schungx/rhai/commit/1cc50bc54328b793e89761bfb6f7b76a634203ac"
        },
        "date": 1634984057063,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 274275,
            "range": "± 35267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 146,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 143,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 257,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1492,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1565,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6565165,
            "range": "± 374119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 625,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 680,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15884,
            "range": "± 1264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14369,
            "range": "± 1734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 593,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1057,
            "range": "± 91",
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
            "value": 110,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 114,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2113332,
            "range": "± 243729",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3871136,
            "range": "± 499228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3417549,
            "range": "± 539322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24237,
            "range": "± 1694",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9401,
            "range": "± 779",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2554,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2548,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 560,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 593,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1276,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1321,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1126,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1645,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 646,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 636,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 392,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 493,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 665,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 566,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 437131,
            "range": "± 79216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21390283,
            "range": "± 1498024",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4083,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13058,
            "range": "± 1135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5104,
            "range": "± 638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16930,
            "range": "± 1769",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14892,
            "range": "± 1424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38449,
            "range": "± 5854",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2945,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 581,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2058391,
            "range": "± 73405",
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
          "id": "79dd3f8186696281638776bae464dc2becfad52d",
          "message": "Add $$ marker to custom syntax.",
          "timestamp": "2021-10-25T22:41:42+08:00",
          "tree_id": "562420abb70466bdf4f99b944fd16d24ae1b8de5",
          "url": "https://github.com/schungx/rhai/commit/79dd3f8186696281638776bae464dc2becfad52d"
        },
        "date": 1635173469709,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 293629,
            "range": "± 34059",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 180,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 164,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 299,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1674,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1735,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7033840,
            "range": "± 569866",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 663,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 714,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17100,
            "range": "± 2049",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16171,
            "range": "± 1696",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 683,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1246,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 120,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 120,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 121,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2447083,
            "range": "± 502057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4483940,
            "range": "± 427973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3904747,
            "range": "± 503713",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25332,
            "range": "± 10553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9702,
            "range": "± 2314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2564,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2634,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 583,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 644,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1462,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1335,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1254,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1722,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 700,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 751,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 410,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 556,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 666,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 656,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 492152,
            "range": "± 110967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25287897,
            "range": "± 4070952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4351,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13831,
            "range": "± 3344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5593,
            "range": "± 1138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19173,
            "range": "± 3106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16305,
            "range": "± 1519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41680,
            "range": "± 6256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3176,
            "range": "± 730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 615,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1961468,
            "range": "± 266428",
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
          "id": "a5ae002cb771869a6c6512c6c5412fb709c1a668",
          "message": "Refine namespace display.",
          "timestamp": "2021-10-27T23:30:25+08:00",
          "tree_id": "bddcc02d9ce5e227fa84d8254339d1beb4c46b2a",
          "url": "https://github.com/schungx/rhai/commit/a5ae002cb771869a6c6512c6c5412fb709c1a668"
        },
        "date": 1635483559910,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 284948,
            "range": "± 46048",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 171,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 161,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 279,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1709,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1762,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6990905,
            "range": "± 247963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 668,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 713,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16331,
            "range": "± 1201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15244,
            "range": "± 791",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 684,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1236,
            "range": "± 58",
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
            "value": 141,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 141,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2368017,
            "range": "± 157485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4497385,
            "range": "± 124612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3879968,
            "range": "± 229832",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26284,
            "range": "± 2032",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9803,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2608,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2659,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 611,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 666,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1506,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1412,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1323,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1718,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 708,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 699,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 430,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 521,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 694,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 613,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 467722,
            "range": "± 25941",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26651893,
            "range": "± 1188152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4266,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13671,
            "range": "± 1039",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5562,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18830,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16150,
            "range": "± 1089",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41822,
            "range": "± 2309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3244,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 599,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2122653,
            "range": "± 44586",
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
          "id": "dc2e824ce2dbda5129de536e81c70cd62898340c",
          "message": "Fix no_module builds.",
          "timestamp": "2021-10-29T17:01:29+08:00",
          "tree_id": "577e2388f6d023195ab49307566cd01438ce7240",
          "url": "https://github.com/schungx/rhai/commit/dc2e824ce2dbda5129de536e81c70cd62898340c"
        },
        "date": 1635498806115,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 262615,
            "range": "± 34478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 146,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 143,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 280,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1536,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1614,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6173951,
            "range": "± 646395",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 625,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 657,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14930,
            "range": "± 1049",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14940,
            "range": "± 2896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 552,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1091,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 114,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 114,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 123,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2086654,
            "range": "± 208546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3979988,
            "range": "± 364711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3456094,
            "range": "± 490029",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23747,
            "range": "± 4209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8574,
            "range": "± 874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2162,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2178,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 515,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 584,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1287,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1208,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1118,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1516,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 611,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 617,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 390,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 479,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 619,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 514,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 406657,
            "range": "± 68949",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21344636,
            "range": "± 2339907",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3715,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12193,
            "range": "± 1093",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5180,
            "range": "± 920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16958,
            "range": "± 2595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14521,
            "range": "± 2085",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35598,
            "range": "± 8094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2899,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 495,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1839135,
            "range": "± 188857",
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
          "id": "11f180bd4e7a68b34dda033634c18513d51070c5",
          "message": "Fix error template.",
          "timestamp": "2021-10-29T17:59:38+08:00",
          "tree_id": "67eef7c36bcda65f6a9a09aa2ebf038909a2a171",
          "url": "https://github.com/schungx/rhai/commit/11f180bd4e7a68b34dda033634c18513d51070c5"
        },
        "date": 1635502380605,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 256651,
            "range": "± 38867",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 146,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 139,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 261,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1580,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1607,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6146546,
            "range": "± 706649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 588,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 629,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14378,
            "range": "± 1982",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13658,
            "range": "± 2198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 587,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1084,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 116,
            "range": "± 14",
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
            "value": 116,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2111028,
            "range": "± 270677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4014505,
            "range": "± 627841",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3433401,
            "range": "± 440701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23795,
            "range": "± 4218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8637,
            "range": "± 1766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2307,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2374,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 540,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 587,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1309,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1260,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1104,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1498,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 608,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 596,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 390,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 475,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 627,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 522,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 428441,
            "range": "± 109907",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22506501,
            "range": "± 3807007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3751,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12631,
            "range": "± 2102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5060,
            "range": "± 826",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16944,
            "range": "± 2973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15223,
            "range": "± 2567",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37513,
            "range": "± 4813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2973,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 529,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1868879,
            "range": "± 474017",
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
          "id": "5e275d4593aa1aa44d3e12752b49194151a521af",
          "message": "Fix no_function build.",
          "timestamp": "2021-10-29T18:14:07+08:00",
          "tree_id": "4069bd6eb964f0dc786eb92d52080dbf92e37a28",
          "url": "https://github.com/schungx/rhai/commit/5e275d4593aa1aa44d3e12752b49194151a521af"
        },
        "date": 1635503092217,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 288661,
            "range": "± 14786",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 159,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 151,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 275,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1664,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1714,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6606658,
            "range": "± 150451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 651,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 698,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16266,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15160,
            "range": "± 971",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 614,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1119,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 129,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 129,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 129,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2331263,
            "range": "± 70106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4192217,
            "range": "± 107620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3676528,
            "range": "± 62213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24616,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9418,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2556,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2584,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 608,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 650,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1377,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1354,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1252,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1677,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 679,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 682,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 409,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 500,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 677,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 580,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 454465,
            "range": "± 4921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22005664,
            "range": "± 449728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4050,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13759,
            "range": "± 914",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5499,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18554,
            "range": "± 1561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16035,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41598,
            "range": "± 2459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3251,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 597,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2004554,
            "range": "± 77009",
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
          "id": "ff9ac41da2fffc3771ceb83c9b33f65d80f924b6",
          "message": "Merge branch 'v1.1-fixes'",
          "timestamp": "2021-11-01T10:08:27+08:00",
          "tree_id": "68e726d318cb7bb236f3f917ffea9f5f157a9b7a",
          "url": "https://github.com/schungx/rhai/commit/ff9ac41da2fffc3771ceb83c9b33f65d80f924b6"
        },
        "date": 1635751879335,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 252211,
            "range": "± 39594",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 145,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 140,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 236,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1536,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1391,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5943190,
            "range": "± 985607",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 568,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 587,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13554,
            "range": "± 2990",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12881,
            "range": "± 1808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 555,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 973,
            "range": "± 280",
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
            "value": 109,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 100,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1952412,
            "range": "± 298352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 7440675,
            "range": "± 1978427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 6183070,
            "range": "± 1200776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21823,
            "range": "± 4765",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8221,
            "range": "± 1731",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2063,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2142,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 503,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 524,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1204,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1148,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1101,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1553,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 620,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 610,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 347,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 427,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 565,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 482,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 384116,
            "range": "± 80449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19750057,
            "range": "± 2211482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3405,
            "range": "± 571",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11273,
            "range": "± 2181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4396,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15216,
            "range": "± 1877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13703,
            "range": "± 2338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35501,
            "range": "± 8798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2571,
            "range": "± 674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 492,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1674387,
            "range": "± 266029",
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
          "id": "affbb81d8ad129256541b90343a659adaee46261",
          "message": "Add NativeCallContext::position.",
          "timestamp": "2021-11-05T19:35:33+08:00",
          "tree_id": "21fba4b69759737c5e6f0e3cae74ed4604b08473",
          "url": "https://github.com/schungx/rhai/commit/affbb81d8ad129256541b90343a659adaee46261"
        },
        "date": 1636112951559,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 242880,
            "range": "± 35769",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 153,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 147,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 250,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1563,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1603,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6385958,
            "range": "± 887375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 636,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 629,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14389,
            "range": "± 2058",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14008,
            "range": "± 1726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 590,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1073,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 111,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 122,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 119,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2213459,
            "range": "± 241647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 8676200,
            "range": "± 1133864",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 6852202,
            "range": "± 1060784",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22808,
            "range": "± 3405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9267,
            "range": "± 1225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2408,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2331,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 539,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 583,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1463,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1327,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1195,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1792,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 660,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 636,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 434,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 531,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 698,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 578,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 402054,
            "range": "± 38248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21207518,
            "range": "± 2046329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3726,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11968,
            "range": "± 1741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5198,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17573,
            "range": "± 2951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14590,
            "range": "± 1884",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35387,
            "range": "± 5749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2824,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 532,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1905038,
            "range": "± 366101",
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
          "id": "b2eb207ce49609dead69d5f201aebe560aef862c",
          "message": "Fix no_position builds.",
          "timestamp": "2021-11-05T19:53:52+08:00",
          "tree_id": "b2f6d0773c47a1dd1423656976f793bd64704d08",
          "url": "https://github.com/schungx/rhai/commit/b2eb207ce49609dead69d5f201aebe560aef862c"
        },
        "date": 1636113932821,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 276012,
            "range": "± 15617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 167,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 158,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 270,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1607,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1698,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6414088,
            "range": "± 568617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 640,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 690,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15771,
            "range": "± 723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14899,
            "range": "± 881",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 593,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1141,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 126,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 127,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 124,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2182733,
            "range": "± 160720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 8326244,
            "range": "± 315771",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 7058327,
            "range": "± 228762",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23964,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9340,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2537,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2626,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 598,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 632,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1352,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1328,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1251,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1680,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 659,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 681,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 402,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 501,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 717,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 563,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 453611,
            "range": "± 26148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21340773,
            "range": "± 750046",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3920,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13060,
            "range": "± 673",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5296,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17582,
            "range": "± 1343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15401,
            "range": "± 599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39356,
            "range": "± 1448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3092,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 561,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1958899,
            "range": "± 79727",
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
          "id": "61cc3d0bf2bfb24d4b2c49f878e63084675853c6",
          "message": "Merge branch 'v1.1-fixes'",
          "timestamp": "2021-11-05T23:26:00+08:00",
          "tree_id": "521c4f350402ecc27614f60435151f719aa2e74d",
          "url": "https://github.com/schungx/rhai/commit/61cc3d0bf2bfb24d4b2c49f878e63084675853c6"
        },
        "date": 1636126448313,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 271716,
            "range": "± 26520",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 162,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 163,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 269,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1688,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1694,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6787810,
            "range": "± 732001",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 650,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 669,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16698,
            "range": "± 1890",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15237,
            "range": "± 2980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 654,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1169,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 125,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 126,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 130,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2338108,
            "range": "± 222188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4280267,
            "range": "± 718299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3821862,
            "range": "± 548961",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26493,
            "range": "± 3730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9491,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2465,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2381,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 602,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 643,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1443,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1408,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1278,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1760,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 669,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 683,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 402,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 483,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 645,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 556,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 463691,
            "range": "± 39614",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24388176,
            "range": "± 1720397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4169,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13827,
            "range": "± 1385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5384,
            "range": "± 2801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19329,
            "range": "± 2816",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16092,
            "range": "± 1423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41368,
            "range": "± 4365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3075,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 571,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2060580,
            "range": "± 211249",
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
          "id": "68c0ee08c0e01ee661441b3bf19f6d8d1c5afbe0",
          "message": "Reduce usage of Default::default() to make it easier to refactor.",
          "timestamp": "2021-11-07T18:12:37+08:00",
          "tree_id": "03a74ed41bf61f6ed49d59b77d2f208479e10843",
          "url": "https://github.com/schungx/rhai/commit/68c0ee08c0e01ee661441b3bf19f6d8d1c5afbe0"
        },
        "date": 1636280762738,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 247227,
            "range": "± 30613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 147,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 145,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 244,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1688,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1529,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6111437,
            "range": "± 599048",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 587,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 671,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14481,
            "range": "± 1611",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13478,
            "range": "± 1469",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 635,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1002,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 114,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 114,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 111,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2091670,
            "range": "± 206140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3789993,
            "range": "± 432643",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3295400,
            "range": "± 404698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23297,
            "range": "± 4644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8549,
            "range": "± 991",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2271,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2393,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 553,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 604,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1407,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1262,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1148,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1549,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 632,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 626,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 358,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 529,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 570,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 489,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 419087,
            "range": "± 77184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24204676,
            "range": "± 4136049",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3626,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12398,
            "range": "± 2649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4874,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16175,
            "range": "± 1165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14191,
            "range": "± 2671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36118,
            "range": "± 7307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2938,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 534,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1855814,
            "range": "± 331590",
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
          "id": "71ad158b6a32ad4798707c87a19f3deefcc660ab",
          "message": "Fix builds.",
          "timestamp": "2021-11-07T18:25:32+08:00",
          "tree_id": "5bf34bb293e4190b2477ea164b9c64cab4cf650c",
          "url": "https://github.com/schungx/rhai/commit/71ad158b6a32ad4798707c87a19f3deefcc660ab"
        },
        "date": 1636282391738,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 259779,
            "range": "± 33578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 156,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 156,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 274,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1565,
            "range": "± 290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1573,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6629446,
            "range": "± 1073517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 632,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 674,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15282,
            "range": "± 1878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14554,
            "range": "± 2468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 593,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1066,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 122,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 121,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 123,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2319503,
            "range": "± 515456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4253663,
            "range": "± 734888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3815625,
            "range": "± 542091",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25101,
            "range": "± 3527",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9086,
            "range": "± 992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2452,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2547,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 634,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 639,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1452,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1412,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1302,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1766,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 689,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 726,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 398,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 488,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 623,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 570,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 453559,
            "range": "± 48425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23774696,
            "range": "± 2232462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4085,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13417,
            "range": "± 1701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5712,
            "range": "± 1016",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18328,
            "range": "± 2072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15396,
            "range": "± 1903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39666,
            "range": "± 4731",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3143,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 639,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1987739,
            "range": "± 209643",
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
          "id": "09e6b2172907c2bed68ee8d170ab973e240c0725",
          "message": "Move mutable runtime global state to Imports.",
          "timestamp": "2021-11-08T09:27:08+08:00",
          "tree_id": "24b8f0cef3174896fff47e6f1f2762a184fe8f54",
          "url": "https://github.com/schungx/rhai/commit/09e6b2172907c2bed68ee8d170ab973e240c0725"
        },
        "date": 1636335619338,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 268336,
            "range": "± 25836",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 160,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 152,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 275,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1601,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1601,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6911726,
            "range": "± 633820",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 630,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 707,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16415,
            "range": "± 1995",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15370,
            "range": "± 1388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 621,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1121,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 122,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 116,
            "range": "± 14",
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
            "value": 2383531,
            "range": "± 175255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4204554,
            "range": "± 350041",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3499491,
            "range": "± 350911",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24246,
            "range": "± 2350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9366,
            "range": "± 1083",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2591,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2587,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 593,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 646,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1381,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1401,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1315,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1753,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 706,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 673,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 368,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 459,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 609,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 542,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 436055,
            "range": "± 34525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22146982,
            "range": "± 2481372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4011,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13535,
            "range": "± 2625",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5478,
            "range": "± 620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19435,
            "range": "± 2134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16287,
            "range": "± 1520",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41927,
            "range": "± 9301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3409,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 614,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2065168,
            "range": "± 169227",
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
          "id": "cc6a0571e700bd4543c80f09a2f120a7e6f22852",
          "message": "Fix builds.",
          "timestamp": "2021-11-08T11:35:46+08:00",
          "tree_id": "df9079c59cff55a2b7afc524eff83f6c28b2d60d",
          "url": "https://github.com/schungx/rhai/commit/cc6a0571e700bd4543c80f09a2f120a7e6f22852"
        },
        "date": 1636343300030,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 305301,
            "range": "± 32419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 184,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 172,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 307,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1749,
            "range": "± 422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1834,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7552334,
            "range": "± 863375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 704,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 745,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17647,
            "range": "± 2422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16911,
            "range": "± 3576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 677,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1230,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 129,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 126,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 129,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2562283,
            "range": "± 396698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4628653,
            "range": "± 701574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3899773,
            "range": "± 517109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27565,
            "range": "± 4737",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10419,
            "range": "± 1573",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2752,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2802,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 639,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 697,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1511,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1477,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1392,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1810,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 755,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 722,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 413,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 518,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 656,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 605,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 486470,
            "range": "± 89237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24569425,
            "range": "± 2847926",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4475,
            "range": "± 723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14832,
            "range": "± 3697",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5930,
            "range": "± 983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20188,
            "range": "± 4184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17187,
            "range": "± 2224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44394,
            "range": "± 8411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3461,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 677,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2199258,
            "range": "± 336898",
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
          "id": "31ef7e6c69174bede1d27da320d0a8e5a4d5e385",
          "message": "Fix builds.",
          "timestamp": "2021-11-08T12:07:49+08:00",
          "tree_id": "31b6f99b634aaed75677d809b24c5b19c432386d",
          "url": "https://github.com/schungx/rhai/commit/31ef7e6c69174bede1d27da320d0a8e5a4d5e385"
        },
        "date": 1636345174301,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 282914,
            "range": "± 24113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 153,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 155,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 272,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1624,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1626,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6622876,
            "range": "± 209949",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 616,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 668,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15615,
            "range": "± 685",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14787,
            "range": "± 544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 599,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1084,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 116,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 117,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2330254,
            "range": "± 46068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4246546,
            "range": "± 137104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3549309,
            "range": "± 125305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24061,
            "range": "± 904",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9293,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2510,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2544,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 606,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 639,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1285,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1255,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1131,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1655,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 640,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 668,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 378,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 474,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 630,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 531,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 446055,
            "range": "± 23431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20519649,
            "range": "± 624749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3986,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13155,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5463,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18159,
            "range": "± 1568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15327,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40702,
            "range": "± 1767",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3274,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 591,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1978492,
            "range": "± 58956",
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
          "id": "5083df30960fb27fdb2e283e254b9767a51e27cb",
          "message": "Propagate constants to functions for Engine::XXX_with_scope calls.",
          "timestamp": "2021-11-08T22:16:28+08:00",
          "tree_id": "a32f3971fe22973922912ce8018c9a2b76128235",
          "url": "https://github.com/schungx/rhai/commit/5083df30960fb27fdb2e283e254b9767a51e27cb"
        },
        "date": 1636384938946,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 249137,
            "range": "± 1955",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 134,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 126,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 226,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1374,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1398,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5607763,
            "range": "± 7595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 543,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 576,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13958,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13112,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 511,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 907,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 98,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1966994,
            "range": "± 6634",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3517713,
            "range": "± 6002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3074237,
            "range": "± 5391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20808,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7958,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2196,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2214,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 507,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 547,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1162,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1111,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1003,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1368,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 552,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 552,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 316,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 398,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 516,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 447,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 376729,
            "range": "± 1391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18549734,
            "range": "± 112545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3429,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11640,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4646,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15751,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13573,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35105,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2647,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 490,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1688912,
            "range": "± 1988",
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
          "id": "c8b59bd9cac673f11ae77a8a62f82fbfb5207982",
          "message": "Fix test.",
          "timestamp": "2021-11-08T23:24:03+08:00",
          "tree_id": "10150cb7415319098584fcd2f25bdf225eca7712",
          "url": "https://github.com/schungx/rhai/commit/c8b59bd9cac673f11ae77a8a62f82fbfb5207982"
        },
        "date": 1636385896533,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 296622,
            "range": "± 47841",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 176,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 171,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 304,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1748,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1785,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7315424,
            "range": "± 604779",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 711,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 723,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17514,
            "range": "± 1418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16282,
            "range": "± 1608",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 632,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1110,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 116,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 117,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 116,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2488197,
            "range": "± 421778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4508391,
            "range": "± 794274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3929031,
            "range": "± 563418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25944,
            "range": "± 2931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10221,
            "range": "± 1596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2779,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2847,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 604,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 706,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1493,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1450,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1361,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1796,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 748,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 734,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 397,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 519,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 662,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 563,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 482583,
            "range": "± 21964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24543323,
            "range": "± 2521480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4366,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14431,
            "range": "± 3163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5605,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18665,
            "range": "± 2489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17976,
            "range": "± 3020",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43032,
            "range": "± 7296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3388,
            "range": "± 511",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 653,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2158664,
            "range": "± 201135",
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
          "id": "f6dc4406016e5aa1368df243388fe9828d66ad88",
          "message": "Add AST::iter_literal_variables.",
          "timestamp": "2021-11-09T13:22:45+08:00",
          "tree_id": "e84c2afc0598efab7aae15600c2dfe1dc6a545d5",
          "url": "https://github.com/schungx/rhai/commit/f6dc4406016e5aa1368df243388fe9828d66ad88"
        },
        "date": 1636436896247,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 266113,
            "range": "± 36278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 155,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 146,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 258,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1492,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1537,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6725844,
            "range": "± 738810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 590,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 637,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15519,
            "range": "± 1135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14779,
            "range": "± 1539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 634,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1120,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 108,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 109,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 114,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2239222,
            "range": "± 215518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4400961,
            "range": "± 379580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3662464,
            "range": "± 313679",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24363,
            "range": "± 2682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9124,
            "range": "± 899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2431,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2462,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 569,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 607,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1322,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1337,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1237,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1626,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 675,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 669,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 363,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 484,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 591,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 526,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 431184,
            "range": "± 55343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21618207,
            "range": "± 1889670",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3875,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12924,
            "range": "± 1769",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5077,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17758,
            "range": "± 2607",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14844,
            "range": "± 2321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37664,
            "range": "± 4312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2987,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 571,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2007362,
            "range": "± 306113",
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
          "id": "0fbc437916981959688095e5b9ebf720b592734e",
          "message": "Use Box<str> internally.",
          "timestamp": "2021-11-11T13:55:52+08:00",
          "tree_id": "b027e56302948c695607db4ffbe2a335b2ca7617",
          "url": "https://github.com/schungx/rhai/commit/0fbc437916981959688095e5b9ebf720b592734e"
        },
        "date": 1636610683090,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 247953,
            "range": "± 43245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 144,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 138,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 249,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1516,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1397,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6010288,
            "range": "± 1222524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 566,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 622,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14758,
            "range": "± 3603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14928,
            "range": "± 3247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 580,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 931,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 129,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 130,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 130,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2597727,
            "range": "± 445313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 5021775,
            "range": "± 828763",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4118036,
            "range": "± 825328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 29008,
            "range": "± 7949",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10968,
            "range": "± 2777",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2961,
            "range": "± 605",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3101,
            "range": "± 977",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 707,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 739,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1300,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1216,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1108,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1489,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 730,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 745,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 375,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 443,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 610,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 539,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 490336,
            "range": "± 137412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25028279,
            "range": "± 7531267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4283,
            "range": "± 1418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13259,
            "range": "± 3793",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6297,
            "range": "± 1750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20131,
            "range": "± 5463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16488,
            "range": "± 3195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42582,
            "range": "± 9271",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3159,
            "range": "± 858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 659,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1932684,
            "range": "± 378697",
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
          "id": "7f34e4ad99482ab35c3f6fcb16a0d2e140aac179",
          "message": "Merge branch 'v1.1-fixes'",
          "timestamp": "2021-11-11T21:47:45+08:00",
          "tree_id": "2a9f11ed49d6a5731a1019abf61f54752b92a2a0",
          "url": "https://github.com/schungx/rhai/commit/7f34e4ad99482ab35c3f6fcb16a0d2e140aac179"
        },
        "date": 1636639270483,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 280368,
            "range": "± 51012",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 171,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 173,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 296,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1517,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1621,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6730263,
            "range": "± 1027173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 616,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 691,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16210,
            "range": "± 1848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15364,
            "range": "± 4712",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 604,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1219,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 111,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 111,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 111,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2302355,
            "range": "± 492081",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4287584,
            "range": "± 706752",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3709206,
            "range": "± 803608",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24924,
            "range": "± 4518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9345,
            "range": "± 549",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2422,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2473,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 576,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 626,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1388,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1393,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1233,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1660,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 675,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 691,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 373,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 487,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 606,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 528,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 455404,
            "range": "± 54332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24305973,
            "range": "± 2835125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4058,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13649,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5833,
            "range": "± 737",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17278,
            "range": "± 3647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16197,
            "range": "± 1616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42511,
            "range": "± 17207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3305,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 635,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1986621,
            "range": "± 284914",
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
          "id": "a9aa8e84fdc427cd6fe5962b3cb189e1a43d2ff4",
          "message": "Use Box<[]>.",
          "timestamp": "2021-11-12T13:25:57+08:00",
          "tree_id": "e681505c3189a0fb586320cc4097b318f31a8d4d",
          "url": "https://github.com/schungx/rhai/commit/a9aa8e84fdc427cd6fe5962b3cb189e1a43d2ff4"
        },
        "date": 1636699047682,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 270642,
            "range": "± 68346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 174,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 159,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 277,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1555,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1654,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6895483,
            "range": "± 438406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 625,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 668,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16719,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15120,
            "range": "± 2721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 630,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1136,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 112,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 112,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 111,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2312211,
            "range": "± 105736",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4634399,
            "range": "± 372579",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4032462,
            "range": "± 213107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24940,
            "range": "± 4220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9657,
            "range": "± 810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2522,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2567,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 590,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 635,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1348,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1358,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1271,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1718,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 688,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 696,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 377,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 497,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 620,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 562,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 442275,
            "range": "± 64247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22810776,
            "range": "± 2101881",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4113,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13468,
            "range": "± 1804",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5694,
            "range": "± 983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18500,
            "range": "± 2182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15761,
            "range": "± 2835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41170,
            "range": "± 11128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3227,
            "range": "± 859",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 578,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1985591,
            "range": "± 177272",
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
          "id": "38884ede46451e4fb40b899c34abcacb7a6e0262",
          "message": "Reduce panic messages.",
          "timestamp": "2021-11-13T12:23:35+08:00",
          "tree_id": "54672001e96676b525cf75000c21ceeb8f962b83",
          "url": "https://github.com/schungx/rhai/commit/38884ede46451e4fb40b899c34abcacb7a6e0262"
        },
        "date": 1636795245589,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 300383,
            "range": "± 67753",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 165,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 163,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 283,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1620,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1647,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6668443,
            "range": "± 82544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 649,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 680,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16595,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15483,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 617,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1120,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 117,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 116,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 117,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2338259,
            "range": "± 65464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4216579,
            "range": "± 45431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3634884,
            "range": "± 111486",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24631,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9536,
            "range": "± 508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2599,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2692,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 621,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 690,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1337,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1318,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1244,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1655,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 671,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 664,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 374,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 478,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 624,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 542,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 445020,
            "range": "± 21278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21118115,
            "range": "± 287376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4129,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13723,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5771,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18752,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16165,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42522,
            "range": "± 2951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3246,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 588,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2053944,
            "range": "± 54046",
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
          "id": "64b889fb95361cb35611da860d7c7f2db07799f9",
          "message": "Restructure code base.",
          "timestamp": "2021-11-13T22:36:23+08:00",
          "tree_id": "112992fd57b199502c332f51a45b37b64b4a6817",
          "url": "https://github.com/schungx/rhai/commit/64b889fb95361cb35611da860d7c7f2db07799f9"
        },
        "date": 1636814915790,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 309185,
            "range": "± 33526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 189,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 169,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 305,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1714,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1768,
            "range": "± 1257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6948482,
            "range": "± 6876",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 677,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 731,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18248,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17060,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 650,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1163,
            "range": "± 5",
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
            "value": 122,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2451796,
            "range": "± 4999",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4435479,
            "range": "± 10565",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3861100,
            "range": "± 5772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25607,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10031,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2687,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2711,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 628,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 680,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1381,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1360,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1281,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1724,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 679,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 704,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 395,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 504,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 650,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 579,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 466793,
            "range": "± 2066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21991626,
            "range": "± 109844",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4258,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14237,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6002,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19413,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16664,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44504,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3487,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 602,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2123774,
            "range": "± 7021",
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
          "id": "615c3acad6e8d8bace5a42f3597ad41a0a369ddc",
          "message": "Use actual outer scope for function-bang calls.",
          "timestamp": "2021-11-14T22:48:57+08:00",
          "tree_id": "fa5bf4830105aae9bcdf2c6f3a8945eef8bfe6d5",
          "url": "https://github.com/schungx/rhai/commit/615c3acad6e8d8bace5a42f3597ad41a0a369ddc"
        },
        "date": 1636902041387,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 281398,
            "range": "± 166564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 167,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 161,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 286,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1677,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1701,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7216820,
            "range": "± 798583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 654,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 698,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17316,
            "range": "± 7683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16021,
            "range": "± 1788",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 632,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1132,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 120,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 120,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 121,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2475926,
            "range": "± 348144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4264315,
            "range": "± 562526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3655793,
            "range": "± 581964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25302,
            "range": "± 3342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9808,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2723,
            "range": "± 648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2773,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 610,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 664,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1394,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1390,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1247,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1679,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 699,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 676,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 404,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 519,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 653,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 588,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 443747,
            "range": "± 59570",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22141278,
            "range": "± 1711544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4496,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14629,
            "range": "± 1237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6295,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20389,
            "range": "± 1930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17012,
            "range": "± 1317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44529,
            "range": "± 5034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3471,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 648,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2047451,
            "range": "± 232191",
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
          "id": "de906053ed468aa97f754207cceebac5ec43dc88",
          "message": "Deprecate call_fn_dynamic into call_fn_raw.",
          "timestamp": "2021-11-15T11:13:00+08:00",
          "tree_id": "4382f026e8486d0ce093fe77a8290f4ea3aa45bf",
          "url": "https://github.com/schungx/rhai/commit/de906053ed468aa97f754207cceebac5ec43dc88"
        },
        "date": 1636946676185,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 246562,
            "range": "± 67773",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 162,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 143,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 257,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1512,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1340,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6030734,
            "range": "± 1337253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 677,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 731,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13690,
            "range": "± 3031",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16005,
            "range": "± 3847",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 632,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1124,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 121,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 119,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 122,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2426071,
            "range": "± 243623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3810561,
            "range": "± 992160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3709050,
            "range": "± 321430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22945,
            "range": "± 6511",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8366,
            "range": "± 1906",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2557,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2620,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 613,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 648,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1379,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1441,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1253,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1365,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 675,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 573,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 392,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 390,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 497,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 454,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 388887,
            "range": "± 137017",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18067056,
            "range": "± 5840814",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4421,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14051,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5471,
            "range": "± 1604",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16692,
            "range": "± 4755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16432,
            "range": "± 3052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43282,
            "range": "± 3574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3389,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 517,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1761650,
            "range": "± 532985",
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
          "id": "98707912e0249a17553427a758d96a598f339e32",
          "message": "Convert for loop to iterator.",
          "timestamp": "2021-11-15T14:30:00+08:00",
          "tree_id": "f470f000c569a73eac9c808064572d1e2b4445d2",
          "url": "https://github.com/schungx/rhai/commit/98707912e0249a17553427a758d96a598f339e32"
        },
        "date": 1636959745358,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 275496,
            "range": "± 45590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 146,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 138,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 245,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1470,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1516,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6202141,
            "range": "± 948911",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 613,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 608,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14530,
            "range": "± 1657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13055,
            "range": "± 1726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 507,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 933,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 102,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 105,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 105,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2068425,
            "range": "± 278891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3609688,
            "range": "± 522152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3078661,
            "range": "± 403822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20906,
            "range": "± 2657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7912,
            "range": "± 866",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2204,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2221,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 509,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 548,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1096,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1129,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1041,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1424,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 569,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 570,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 336,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 415,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 526,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 470,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 404398,
            "range": "± 59187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17090081,
            "range": "± 1924416",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3593,
            "range": "± 450",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11913,
            "range": "± 1542",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5372,
            "range": "± 419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17378,
            "range": "± 2737",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13748,
            "range": "± 1576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37800,
            "range": "± 4826",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2824,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 518,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1768337,
            "range": "± 227322",
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
          "id": "c2c30f77114addad817e4d9c0ed923bd2ad63c0d",
          "message": "Use fold.",
          "timestamp": "2021-11-16T13:15:43+08:00",
          "tree_id": "62bb41aeecf89fb2ff347417d00284c7634775ef",
          "url": "https://github.com/schungx/rhai/commit/c2c30f77114addad817e4d9c0ed923bd2ad63c0d"
        },
        "date": 1637040828004,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 280738,
            "range": "± 12792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 161,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 155,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 272,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1688,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1711,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6585583,
            "range": "± 278756",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 648,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 698,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15726,
            "range": "± 892",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15420,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 569,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1068,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 116,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 112,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 112,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2565834,
            "range": "± 293446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3863326,
            "range": "± 244617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3352577,
            "range": "± 234280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23156,
            "range": "± 1315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9462,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2637,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2626,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 579,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 612,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1226,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1234,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1176,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1572,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 662,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 661,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 380,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 478,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 622,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 543,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 430172,
            "range": "± 24156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18726771,
            "range": "± 876233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3800,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12892,
            "range": "± 867",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5459,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17625,
            "range": "± 1476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14987,
            "range": "± 764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40756,
            "range": "± 3852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3198,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 548,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1958281,
            "range": "± 118082",
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
          "id": "e961ae23fdd312adbccd3f1d76bc56e5e2861d0a",
          "message": "Eliminate script hashes under no_function.",
          "timestamp": "2021-11-16T13:42:46+08:00",
          "tree_id": "67ebc5f62520cbcc939099e816924b6f73ea50b5",
          "url": "https://github.com/schungx/rhai/commit/e961ae23fdd312adbccd3f1d76bc56e5e2861d0a"
        },
        "date": 1637042317571,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 286024,
            "range": "± 101356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 146,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 137,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 257,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1499,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1772,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7141874,
            "range": "± 662173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 657,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 707,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18022,
            "range": "± 3509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16939,
            "range": "± 4252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 687,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1191,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 133,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 123,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 121,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2489988,
            "range": "± 303544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4511824,
            "range": "± 762282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3812567,
            "range": "± 524320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24533,
            "range": "± 6491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8688,
            "range": "± 1997",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2439,
            "range": "± 531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2290,
            "range": "± 584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 467,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 544,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1083,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1134,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1232,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1608,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 639,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 640,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 377,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 476,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 612,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 542,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 428697,
            "range": "± 102585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20307871,
            "range": "± 2756735",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3521,
            "range": "± 1083",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12220,
            "range": "± 3147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5173,
            "range": "± 1082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17774,
            "range": "± 3274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14339,
            "range": "± 4067",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43914,
            "range": "± 12088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2766,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 527,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1697831,
            "range": "± 270993",
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
          "id": "35ab5481b5fcf27a42ab4ba7b109aafb62a2a866",
          "message": "Update codegen dependency.",
          "timestamp": "2021-11-19T14:17:38+08:00",
          "tree_id": "f6810a907e75c2c535aa0321a80f66946538ec47",
          "url": "https://github.com/schungx/rhai/commit/35ab5481b5fcf27a42ab4ba7b109aafb62a2a866"
        },
        "date": 1637303275118,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 291851,
            "range": "± 32394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 181,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 169,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 282,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1799,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1846,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7233918,
            "range": "± 553394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 683,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 729,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16818,
            "range": "± 1878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15725,
            "range": "± 1878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 626,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1162,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 125,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 121,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 123,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2458510,
            "range": "± 321641",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4338937,
            "range": "± 576921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3693835,
            "range": "± 485291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25963,
            "range": "± 3742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9797,
            "range": "± 1268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2631,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2822,
            "range": "± 433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 665,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 688,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1406,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1424,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1307,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1670,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 707,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 689,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 409,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 530,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 669,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 588,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 474275,
            "range": "± 101566",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22586201,
            "range": "± 3013517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4292,
            "range": "± 638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14265,
            "range": "± 1194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6300,
            "range": "± 741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19547,
            "range": "± 5738",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16448,
            "range": "± 2819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45333,
            "range": "± 7636",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3401,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 600,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2113426,
            "range": "± 244375",
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
          "id": "061cb17874e26ae42506ad42d09bc049b8d6e076",
          "message": "Bump version.",
          "timestamp": "2021-11-19T15:07:56+08:00",
          "tree_id": "75c36ca64ebabb84a55972c34542774b548a5972",
          "url": "https://github.com/schungx/rhai/commit/061cb17874e26ae42506ad42d09bc049b8d6e076"
        },
        "date": 1637306250301,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 274420,
            "range": "± 24755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 164,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 152,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 285,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1717,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1688,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6900603,
            "range": "± 778000",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 647,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 679,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15682,
            "range": "± 2057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14622,
            "range": "± 1758",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 610,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1045,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 109,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 111,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 114,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2365608,
            "range": "± 522162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4077796,
            "range": "± 657253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3367732,
            "range": "± 559097",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22648,
            "range": "± 4479",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9072,
            "range": "± 1304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2371,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2576,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 583,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 640,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1322,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1320,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1115,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1533,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 664,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 662,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 366,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 451,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 584,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 536,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 419912,
            "range": "± 60081",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20198255,
            "range": "± 4097090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4080,
            "range": "± 812",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13826,
            "range": "± 3446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5987,
            "range": "± 1625",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18845,
            "range": "± 3582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16260,
            "range": "± 2946",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42788,
            "range": "± 4636",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3298,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 619,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2028756,
            "range": "± 275782",
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
          "id": "05bd82a8f2de8f10fd1b281f580f38ea52b2fc0a",
          "message": "Update CI.",
          "timestamp": "2021-11-19T15:09:39+08:00",
          "tree_id": "f0f5505af03db5fdedaa4599b62a0a56597dbc3c",
          "url": "https://github.com/schungx/rhai/commit/05bd82a8f2de8f10fd1b281f580f38ea52b2fc0a"
        },
        "date": 1637306532422,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 287989,
            "range": "± 39437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 149,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 150,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 275,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1694,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1691,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6946673,
            "range": "± 1192799",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 623,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 708,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15789,
            "range": "± 2682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15002,
            "range": "± 2632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 626,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1131,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 119,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 117,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 102,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2344871,
            "range": "± 504560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4226017,
            "range": "± 578853",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3576652,
            "range": "± 612024",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23636,
            "range": "± 4304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9394,
            "range": "± 1586",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2528,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2527,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 593,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 649,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1361,
            "range": "± 306",
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
            "value": 1293,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1653,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 699,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 654,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 366,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 512,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 640,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 581,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 453800,
            "range": "± 71383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22468970,
            "range": "± 3618569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4273,
            "range": "± 657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14558,
            "range": "± 2536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6268,
            "range": "± 1205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19530,
            "range": "± 2959",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16427,
            "range": "± 3145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43992,
            "range": "± 6536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3352,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 593,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2070429,
            "range": "± 417057",
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
          "id": "344b48ad366859373270f1ed736651af9e099568",
          "message": "Split APIs into files.",
          "timestamp": "2021-11-20T14:57:21+08:00",
          "tree_id": "99b4dfa711377b9a1dbf4878bd578f0bd2ab5714",
          "url": "https://github.com/schungx/rhai/commit/344b48ad366859373270f1ed736651af9e099568"
        },
        "date": 1637393291695,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 268175,
            "range": "± 42278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 144,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 136,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 244,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1649,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1645,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6445116,
            "range": "± 927645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 659,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 711,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15283,
            "range": "± 3894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14094,
            "range": "± 4129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 595,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1029,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 110,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 117,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2279732,
            "range": "± 406350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3830850,
            "range": "± 660577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3398903,
            "range": "± 485300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24226,
            "range": "± 5768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8619,
            "range": "± 2065",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2189,
            "range": "± 658",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2629,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 569,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 660,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1272,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1166,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1189,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1447,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 637,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 618,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 328,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 442,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 567,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 518,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 405723,
            "range": "± 67419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19412020,
            "range": "± 3005285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3773,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11839,
            "range": "± 2977",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5437,
            "range": "± 970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17350,
            "range": "± 1967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15491,
            "range": "± 2655",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39375,
            "range": "± 5014",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2864,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 517,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1840409,
            "range": "± 261079",
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
          "id": "fa41f4faf0f2d2718f14a692f17dab38d9d4e08e",
          "message": "Move function back to correct file.",
          "timestamp": "2021-11-20T15:43:55+08:00",
          "tree_id": "c7a85bf752142e81fd45ac2c690375a14d8287bd",
          "url": "https://github.com/schungx/rhai/commit/fa41f4faf0f2d2718f14a692f17dab38d9d4e08e"
        },
        "date": 1637394774743,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 273391,
            "range": "± 32063",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 147,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 144,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 264,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1652,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1693,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6622066,
            "range": "± 971333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 623,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 669,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15793,
            "range": "± 2513",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14752,
            "range": "± 2703",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 610,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1066,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 111,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 111,
            "range": "± 15",
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
            "value": 2249025,
            "range": "± 236900",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3915127,
            "range": "± 509090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3424499,
            "range": "± 534101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23615,
            "range": "± 4677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9098,
            "range": "± 1352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2468,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2530,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 587,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 639,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1380,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1288,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1155,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1592,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 644,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 637,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 373,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 478,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 610,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 553,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 418847,
            "range": "± 63753",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20476120,
            "range": "± 2864667",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3956,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13026,
            "range": "± 2360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5767,
            "range": "± 937",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18184,
            "range": "± 3724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15342,
            "range": "± 3404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41459,
            "range": "± 8735",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3083,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 571,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1880981,
            "range": "± 251476",
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
          "id": "a757dfe89d93c8be1e82520066b456a7bbd3e3d0",
          "message": "Add blobs.",
          "timestamp": "2021-11-23T14:58:54+08:00",
          "tree_id": "fff9346a8151694e392a023a7f1cfb918cb5fb95",
          "url": "https://github.com/schungx/rhai/commit/a757dfe89d93c8be1e82520066b456a7bbd3e3d0"
        },
        "date": 1637656659635,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 258793,
            "range": "± 3406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 133,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 127,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 231,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1411,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1464,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5683897,
            "range": "± 6433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 544,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 580,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13995,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13332,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 503,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 898,
            "range": "± 22",
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
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1938484,
            "range": "± 5925",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3416443,
            "range": "± 13317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2922557,
            "range": "± 6596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20266,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7842,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2157,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2185,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 512,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 535,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1137,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1115,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 990,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1338,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 567,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 566,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 318,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 415,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 519,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 465,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 365529,
            "range": "± 1188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17767627,
            "range": "± 65938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3415,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11739,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4789,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15493,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13646,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35626,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2749,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 483,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1648771,
            "range": "± 9020",
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
          "id": "0c89a9c4c572f65f2fe6ba171d161e6832b1242b",
          "message": "Change parameter name.",
          "timestamp": "2021-11-23T18:10:01+08:00",
          "tree_id": "893868111f0713870b7924f423175ef777077a58",
          "url": "https://github.com/schungx/rhai/commit/0c89a9c4c572f65f2fe6ba171d161e6832b1242b"
        },
        "date": 1637662987600,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 288560,
            "range": "± 34235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 154,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 145,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 253,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1552,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1565,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6189220,
            "range": "± 802177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 617,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 646,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15256,
            "range": "± 2364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14431,
            "range": "± 1592",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 582,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 980,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 11",
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
            "value": 110,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2231039,
            "range": "± 77998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3890528,
            "range": "± 212677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3325419,
            "range": "± 251679",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21601,
            "range": "± 3128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8769,
            "range": "± 1100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2375,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2486,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 573,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 613,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1202,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1194,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1140,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1558,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 634,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 642,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 342,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 475,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 577,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 523,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 411578,
            "range": "± 36951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 484272,
            "range": "± 66172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 497926,
            "range": "± 46443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18314521,
            "range": "± 2157697",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3836,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13006,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5196,
            "range": "± 567",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17317,
            "range": "± 1404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15183,
            "range": "± 1206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38058,
            "range": "± 5900",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2903,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 512,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1853906,
            "range": "± 194778",
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
          "id": "dc7444596bb666c37fdd98482e2070347aa3a88b",
          "message": "Add test for capturing closures in array method.",
          "timestamp": "2021-11-23T22:56:31+08:00",
          "tree_id": "7020e492ba28e5cdd49fd7a4228b07a463396513",
          "url": "https://github.com/schungx/rhai/commit/dc7444596bb666c37fdd98482e2070347aa3a88b"
        },
        "date": 1637680335647,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 307463,
            "range": "± 51572",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 151,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 147,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 262,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1584,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1630,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6311959,
            "range": "± 612576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 643,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 646,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15820,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14574,
            "range": "± 1038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 553,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1040,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 111,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 111,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 112,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2242382,
            "range": "± 187353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3821192,
            "range": "± 289940",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3339797,
            "range": "± 205936",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22112,
            "range": "± 2679",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8696,
            "range": "± 1384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2262,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2623,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 587,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 640,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1232,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1239,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1124,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1532,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 658,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 667,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 373,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 491,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 622,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 540,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 438475,
            "range": "± 991",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 539586,
            "range": "± 2331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 536776,
            "range": "± 40744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19110996,
            "range": "± 2027290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3848,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12728,
            "range": "± 1624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5476,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17002,
            "range": "± 2061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15405,
            "range": "± 2388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37265,
            "range": "± 5444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3189,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 512,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1726234,
            "range": "± 174658",
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
          "id": "280b5b405edb6d719049a8a87b3de6c427fe2a1b",
          "message": "Make some new functions const.",
          "timestamp": "2021-11-25T17:09:00+08:00",
          "tree_id": "962f03c4267af098717b6c1333b25cca4f8cbbf6",
          "url": "https://github.com/schungx/rhai/commit/280b5b405edb6d719049a8a87b3de6c427fe2a1b"
        },
        "date": 1637832248422,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 239932,
            "range": "± 29251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 131,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 132,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 238,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1348,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1348,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6126196,
            "range": "± 770841",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 549,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 572,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14050,
            "range": "± 2217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13473,
            "range": "± 1278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 512,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1022,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 100,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 100,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 100,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2125353,
            "range": "± 479656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3599553,
            "range": "± 318160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3089726,
            "range": "± 819009",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23375,
            "range": "± 6358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7489,
            "range": "± 1792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2007,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2154,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 512,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 510,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1134,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1070,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 993,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1374,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 562,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 539,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 315,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 416,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 488,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 459,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 382740,
            "range": "± 48813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 464613,
            "range": "± 111657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 471343,
            "range": "± 51631",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17871907,
            "range": "± 1529888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3514,
            "range": "± 1043",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11866,
            "range": "± 1528",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4678,
            "range": "± 1151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15917,
            "range": "± 3947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13918,
            "range": "± 1601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36668,
            "range": "± 5071",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2773,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 502,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1734955,
            "range": "± 235843",
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
          "id": "e918e61e95b6c43e2bd59b8b76ee275388a67005",
          "message": "Use AsRef<str> for more flexible API.",
          "timestamp": "2021-11-27T23:04:45+08:00",
          "tree_id": "b398e9d3cb28ff42786e40b077221eb61151380c",
          "url": "https://github.com/schungx/rhai/commit/e918e61e95b6c43e2bd59b8b76ee275388a67005"
        },
        "date": 1638026048023,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 292312,
            "range": "± 31692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 166,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 161,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 258,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1516,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1608,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6810235,
            "range": "± 1151530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 617,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 630,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15611,
            "range": "± 3108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14485,
            "range": "± 1973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 552,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1003,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 104,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 107,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 106,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2135447,
            "range": "± 275093",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3735407,
            "range": "± 724617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3341120,
            "range": "± 498076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22177,
            "range": "± 4033",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8959,
            "range": "± 1685",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2454,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2550,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 573,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 636,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1289,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1269,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1124,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1573,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 648,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 637,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 331,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 446,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 550,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 510,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 437809,
            "range": "± 64575",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 510518,
            "range": "± 90365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 501670,
            "range": "± 81025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19735049,
            "range": "± 2676468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3694,
            "range": "± 637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12858,
            "range": "± 2392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5151,
            "range": "± 796",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18328,
            "range": "± 2822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15003,
            "range": "± 3419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39363,
            "range": "± 9928",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3052,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 568,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1831491,
            "range": "± 326734",
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
          "id": "4fc088a0f10e5991b0d7bfb0dfe1a228828f8972",
          "message": "Fix feature builds.",
          "timestamp": "2021-11-27T23:20:05+08:00",
          "tree_id": "9ba63e38ae689700137211e8dceabc4c8b780a76",
          "url": "https://github.com/schungx/rhai/commit/4fc088a0f10e5991b0d7bfb0dfe1a228828f8972"
        },
        "date": 1638027062819,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 307553,
            "range": "± 9016",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 164,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 148,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 267,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1692,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1700,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6706708,
            "range": "± 284808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 651,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 693,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17848,
            "range": "± 754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17122,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 587,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1076,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 119,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 120,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 123,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2309710,
            "range": "± 127287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4012498,
            "range": "± 156582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3463163,
            "range": "± 134095",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23393,
            "range": "± 1663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9268,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2630,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2612,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 604,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 638,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1239,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1227,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1142,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1608,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 639,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 665,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 353,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 457,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 601,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 529,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 436470,
            "range": "± 31970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 536674,
            "range": "± 27611",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 532998,
            "range": "± 32106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19965106,
            "range": "± 564465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4045,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14164,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5773,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18895,
            "range": "± 1493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16520,
            "range": "± 864",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41692,
            "range": "± 3532",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3242,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 568,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1997714,
            "range": "± 43487",
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
          "id": "9c4ed44ab8fa2a55856c45c4a5e0343fe2b62c42",
          "message": "Fix builds.",
          "timestamp": "2021-11-27T23:29:32+08:00",
          "tree_id": "c3720a4354f39ab81a556bb81d65b98cdbd08776",
          "url": "https://github.com/schungx/rhai/commit/9c4ed44ab8fa2a55856c45c4a5e0343fe2b62c42"
        },
        "date": 1638027509691,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 254498,
            "range": "± 26082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 137,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 140,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 246,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1537,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1643,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6259199,
            "range": "± 606877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 615,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 639,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14346,
            "range": "± 1255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13694,
            "range": "± 1911",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 514,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 961,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 107,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 104,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 104,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1952230,
            "range": "± 209422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3492447,
            "range": "± 453312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2971170,
            "range": "± 526568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21540,
            "range": "± 5819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7955,
            "range": "± 917",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2154,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2223,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 509,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 535,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1157,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1143,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1025,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1379,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 545,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 589,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 335,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 424,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 580,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 502,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 376644,
            "range": "± 50788",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 459954,
            "range": "± 54218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 468259,
            "range": "± 73488",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18347929,
            "range": "± 2259689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3345,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11603,
            "range": "± 1177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4700,
            "range": "± 643",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16172,
            "range": "± 2437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13677,
            "range": "± 2162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35481,
            "range": "± 5101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2719,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 498,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1725303,
            "range": "± 405814",
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
          "id": "f49ff28b825623e5d65366c8feedda251889c50d",
          "message": "Fix test.",
          "timestamp": "2021-11-28T10:49:48+08:00",
          "tree_id": "5bb61042b2cf3bdb41fe46d83ab456a689e93844",
          "url": "https://github.com/schungx/rhai/commit/f49ff28b825623e5d65366c8feedda251889c50d"
        },
        "date": 1638068491255,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 258831,
            "range": "± 2134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 135,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 131,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 234,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1405,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1425,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5619017,
            "range": "± 6911",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 545,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 578,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14337,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13483,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 497,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 878,
            "range": "± 3",
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
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1952822,
            "range": "± 7584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3423462,
            "range": "± 8709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2963509,
            "range": "± 5778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20218,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7855,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2194,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2224,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 503,
            "range": "± 3",
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
            "value": 1117,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1105,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1054,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1468,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 579,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 570,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 304,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 388,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 507,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 452,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 364892,
            "range": "± 899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 448192,
            "range": "± 3280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 450573,
            "range": "± 2226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17907208,
            "range": "± 99004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3433,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11713,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4898,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15575,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13474,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35902,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2757,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 486,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1656540,
            "range": "± 7700",
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
          "id": "9fa4d60336ffe80ac72b40f999008a571455f2ff",
          "message": "Minor code and docs refactor.",
          "timestamp": "2021-11-28T22:57:28+08:00",
          "tree_id": "b45ccf37033ab935faf239b74dad9f90817b268b",
          "url": "https://github.com/schungx/rhai/commit/9fa4d60336ffe80ac72b40f999008a571455f2ff"
        },
        "date": 1638111967525,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 229708,
            "range": "± 32767",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 129,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 126,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 233,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1248,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1334,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5604851,
            "range": "± 909588",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 527,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 539,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13229,
            "range": "± 1923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12615,
            "range": "± 2979",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 464,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 900,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 91,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 89,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 91,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1794841,
            "range": "± 392943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3293791,
            "range": "± 546615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2879784,
            "range": "± 755129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19391,
            "range": "± 7011",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7510,
            "range": "± 1301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2019,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2097,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 446,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 484,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1017,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1030,
            "range": "± 576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 909,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1289,
            "range": "± 724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 519,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 525,
            "range": "± 469",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 287,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 354,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 468,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 453,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 349896,
            "range": "± 70794",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 428859,
            "range": "± 73469",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 439362,
            "range": "± 164683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17345074,
            "range": "± 2331470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3270,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11241,
            "range": "± 2115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4593,
            "range": "± 1109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15603,
            "range": "± 2378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13721,
            "range": "± 3036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33160,
            "range": "± 5341",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2400,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 452,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1503870,
            "range": "± 127887",
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
          "id": "a3e79c0bd0a5540870ae2e17894906752c755a5d",
          "message": "Fix builds.",
          "timestamp": "2021-11-28T23:06:33+08:00",
          "tree_id": "8f914bdea5c0f262f57213086cdb2de1d7fd2d49",
          "url": "https://github.com/schungx/rhai/commit/a3e79c0bd0a5540870ae2e17894906752c755a5d"
        },
        "date": 1638112515070,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 250211,
            "range": "± 38082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 128,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 126,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 224,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1284,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1367,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5500465,
            "range": "± 855932",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 573,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 603,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15200,
            "range": "± 2629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13576,
            "range": "± 2171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 496,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 841,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 97,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 95,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 105,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1978958,
            "range": "± 308756",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3362222,
            "range": "± 947282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3088043,
            "range": "± 398451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20971,
            "range": "± 3335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7972,
            "range": "± 1269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2263,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2310,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 540,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 556,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1103,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1079,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 959,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1322,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 561,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 575,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 316,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 390,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 546,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 487,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 381541,
            "range": "± 48649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 478167,
            "range": "± 55927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 489857,
            "range": "± 60714",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18660533,
            "range": "± 2191939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3579,
            "range": "± 419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12103,
            "range": "± 1998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5382,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17492,
            "range": "± 1747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14061,
            "range": "± 2105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37121,
            "range": "± 6444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2843,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 500,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1661233,
            "range": "± 259508",
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
          "id": "95dc2ad5020591071a5c705ef7ca749b29278afb",
          "message": "Remove fields and parameters under no_function.",
          "timestamp": "2021-11-29T09:43:35+08:00",
          "tree_id": "36743db25c9d3f2fcdaf65fdc66a961a932c828b",
          "url": "https://github.com/schungx/rhai/commit/95dc2ad5020591071a5c705ef7ca749b29278afb"
        },
        "date": 1638151108786,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 246444,
            "range": "± 43262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 125,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 123,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 220,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1271,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1362,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5237563,
            "range": "± 776194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 505,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 539,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13235,
            "range": "± 2037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12024,
            "range": "± 1995",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 465,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 885,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 95,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 96,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 94,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1846693,
            "range": "± 202114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3270028,
            "range": "± 400552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2788464,
            "range": "± 310637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20325,
            "range": "± 2936",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8472,
            "range": "± 1054",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2433,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2451,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 502,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 509,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 967,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1001,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 949,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1275,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 488,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 513,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 283,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 372,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 448,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 421,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 333819,
            "range": "± 43010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 408401,
            "range": "± 52286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 408117,
            "range": "± 133761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 15953596,
            "range": "± 2392856",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3173,
            "range": "± 467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10859,
            "range": "± 1338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4554,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14078,
            "range": "± 3491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12765,
            "range": "± 1683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32525,
            "range": "± 4302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2703,
            "range": "± 900",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 454,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1636341,
            "range": "± 322610",
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
          "id": "c5f2b0a2530b559ac6dc5dd60ea9fb2f46a6b677",
          "message": "Fix builds.",
          "timestamp": "2021-11-29T10:17:04+08:00",
          "tree_id": "227191be691ca10c43a977b190e741c1fcd7d500",
          "url": "https://github.com/schungx/rhai/commit/c5f2b0a2530b559ac6dc5dd60ea9fb2f46a6b677"
        },
        "date": 1638152994307,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 299840,
            "range": "± 14919",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 155,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 156,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 268,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1587,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1619,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6253064,
            "range": "± 417794",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 628,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 694,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15853,
            "range": "± 1326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15021,
            "range": "± 1299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 573,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1009,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 110,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 112,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 114,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2272672,
            "range": "± 169218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3828764,
            "range": "± 436200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3401564,
            "range": "± 311517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22639,
            "range": "± 1614",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9074,
            "range": "± 1766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2495,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2633,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 599,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 629,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1275,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1272,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1194,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1546,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 651,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 642,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 350,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 448,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 591,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 532,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 422220,
            "range": "± 26500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 518770,
            "range": "± 23829",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 533990,
            "range": "± 41756",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19399935,
            "range": "± 1341273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3939,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13888,
            "range": "± 1011",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5568,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18045,
            "range": "± 1258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15397,
            "range": "± 965",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41135,
            "range": "± 2524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3187,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 563,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1905355,
            "range": "± 101274",
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
          "id": "ec95e5ca979660100742512ec902dd28115562cf",
          "message": "Merge branch 'v1.2-fixes'",
          "timestamp": "2021-12-02T14:30:25+08:00",
          "tree_id": "81e166ccfad9e5e7d59ab2784928373dd4d332de",
          "url": "https://github.com/schungx/rhai/commit/ec95e5ca979660100742512ec902dd28115562cf"
        },
        "date": 1638427057427,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 256668,
            "range": "± 1457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 132,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 127,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 230,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1395,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1427,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5669325,
            "range": "± 15468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 550,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 587,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14191,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13351,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 495,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 873,
            "range": "± 7",
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
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1967337,
            "range": "± 7862",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3383898,
            "range": "± 4836",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2908541,
            "range": "± 5346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20272,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7881,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2200,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2201,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 509,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 543,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1142,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1117,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 964,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1297,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 552,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 535,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 302,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 379,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 505,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 451,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 362365,
            "range": "± 902",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 449701,
            "range": "± 3244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 451711,
            "range": "± 2985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17695573,
            "range": "± 20064",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3423,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11744,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4852,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15567,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13653,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35753,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2719,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 476,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1649713,
            "range": "± 6631",
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
          "id": "27c0181035273648ed164f510c68d0b0a5bbed7d",
          "message": "Fix build.",
          "timestamp": "2021-12-02T16:01:37+08:00",
          "tree_id": "8822e6ee8291502bf31380f9678fed05d740a862",
          "url": "https://github.com/schungx/rhai/commit/27c0181035273648ed164f510c68d0b0a5bbed7d"
        },
        "date": 1638436843831,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 299512,
            "range": "± 19134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 158,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 153,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 272,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1622,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1652,
            "range": "± 476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7064933,
            "range": "± 514133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 645,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 689,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16538,
            "range": "± 4186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15505,
            "range": "± 2989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 619,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1120,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 111,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 112,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 111,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2327838,
            "range": "± 203953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4190126,
            "range": "± 580825",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3581201,
            "range": "± 890759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24069,
            "range": "± 6009",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9297,
            "range": "± 2663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2509,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2539,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 584,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 657,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1422,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1380,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1325,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1711,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 710,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 668,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 377,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 469,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 574,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 539,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 434253,
            "range": "± 51249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 525772,
            "range": "± 57954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 536651,
            "range": "± 77033",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21698274,
            "range": "± 2636402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3986,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13626,
            "range": "± 1061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5907,
            "range": "± 1042",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19032,
            "range": "± 4704",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15805,
            "range": "± 4637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42211,
            "range": "± 8038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3271,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 569,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2026399,
            "range": "± 297034",
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
          "id": "9a5bd9396abb25ad7383e2e438d6f75f0265882b",
          "message": "Fix builds.",
          "timestamp": "2021-12-02T17:46:39+08:00",
          "tree_id": "e00b237ca36a6ccc52ca9901613335739f7557a6",
          "url": "https://github.com/schungx/rhai/commit/9a5bd9396abb25ad7383e2e438d6f75f0265882b"
        },
        "date": 1638438900292,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 243387,
            "range": "± 42970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 139,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 131,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 213,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1352,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1485,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5978263,
            "range": "± 911561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 524,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 577,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14051,
            "range": "± 2955",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13060,
            "range": "± 2990",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 506,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 911,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 97,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 94,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 92,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1978391,
            "range": "± 351401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3543706,
            "range": "± 695478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3099306,
            "range": "± 680939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21693,
            "range": "± 6544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8799,
            "range": "± 2037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2310,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2520,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 521,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 599,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1264,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1282,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 980,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1313,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 506,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 546,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 316,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 387,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 518,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 448,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 376467,
            "range": "± 77700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 451465,
            "range": "± 86768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 440987,
            "range": "± 103680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17792901,
            "range": "± 2829947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3578,
            "range": "± 1036",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11559,
            "range": "± 2068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4831,
            "range": "± 916",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15659,
            "range": "± 3074",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14351,
            "range": "± 2856",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34503,
            "range": "± 8041",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2674,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 485,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1669955,
            "range": "± 340579",
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
          "id": "7cd76c6d1853a168e70d43f718540761caf5fe58",
          "message": "Add language options.",
          "timestamp": "2021-12-03T11:16:35+08:00",
          "tree_id": "393575693a92fdc1a12b2320077b7ce3d5b51d8e",
          "url": "https://github.com/schungx/rhai/commit/7cd76c6d1853a168e70d43f718540761caf5fe58"
        },
        "date": 1638501940951,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 252428,
            "range": "± 66600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 146,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 141,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 246,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1410,
            "range": "± 396",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1444,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6198573,
            "range": "± 989422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 571,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 600,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14684,
            "range": "± 2165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13482,
            "range": "± 1879",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 515,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 965,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 98,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 92,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 93,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1924609,
            "range": "± 324311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3390815,
            "range": "± 270109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3054642,
            "range": "± 714898",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21221,
            "range": "± 5228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8697,
            "range": "± 1885",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2476,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2330,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 547,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 617,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1215,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1255,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1139,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1551,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 552,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 594,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 326,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 414,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 497,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 491,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 403080,
            "range": "± 54722",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 456345,
            "range": "± 91971",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 455597,
            "range": "± 71714",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18088421,
            "range": "± 2252130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3470,
            "range": "± 684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11637,
            "range": "± 1657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5133,
            "range": "± 1098",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15616,
            "range": "± 2858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13753,
            "range": "± 1744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35313,
            "range": "± 6173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2761,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 560,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1665216,
            "range": "± 362418",
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
          "id": "fd26654125b4703e90811f77a67e9fb65df90c5c",
          "message": "Add allow_looping.",
          "timestamp": "2021-12-03T11:24:38+08:00",
          "tree_id": "d3a38d6620b46043cb13bb67d488d7aa4a995007",
          "url": "https://github.com/schungx/rhai/commit/fd26654125b4703e90811f77a67e9fb65df90c5c"
        },
        "date": 1638502831275,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 218863,
            "range": "± 28464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 128,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 115,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 209,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1219,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1238,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5350742,
            "range": "± 587132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 485,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 511,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12689,
            "range": "± 2256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12160,
            "range": "± 973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 461,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 835,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 91,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 88,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1829101,
            "range": "± 432490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3284784,
            "range": "± 852018",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2793074,
            "range": "± 1090506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19479,
            "range": "± 3293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7711,
            "range": "± 1590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2035,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2105,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 462,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 469,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1009,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1004,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 986,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1223,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 536,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 502,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 269,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 374,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 452,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 416,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 327799,
            "range": "± 43329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 416942,
            "range": "± 101824",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 409193,
            "range": "± 75394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16946323,
            "range": "± 1837672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3281,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11173,
            "range": "± 1610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4672,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15602,
            "range": "± 1485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13239,
            "range": "± 1702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33314,
            "range": "± 3184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2583,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 451,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1644574,
            "range": "± 315109",
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
          "id": "ff4827064b7b66aa871c1a05ad31e08527892d0c",
          "message": "Fix build.",
          "timestamp": "2021-12-03T11:52:34+08:00",
          "tree_id": "8b3cc5e088261e5ee1280a4213b86170b17e893b",
          "url": "https://github.com/schungx/rhai/commit/ff4827064b7b66aa871c1a05ad31e08527892d0c"
        },
        "date": 1638504071319,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 242218,
            "range": "± 41924",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 134,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 138,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 245,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1349,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1495,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6044891,
            "range": "± 1583088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 544,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 571,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15598,
            "range": "± 5479",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14626,
            "range": "± 2750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 539,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 856,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 101,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 102,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 101,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2063138,
            "range": "± 471166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3504008,
            "range": "± 579139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3131076,
            "range": "± 457588",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21054,
            "range": "± 4971",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8893,
            "range": "± 2478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2496,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2592,
            "range": "± 667",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 555,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 609,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1189,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1268,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1031,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1418,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 587,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 581,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 343,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 451,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 575,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 488,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 376824,
            "range": "± 63021",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 476450,
            "range": "± 95750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 472794,
            "range": "± 69050",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18892032,
            "range": "± 3783440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3689,
            "range": "± 787",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11732,
            "range": "± 2138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4943,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15783,
            "range": "± 3490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16297,
            "range": "± 3661",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37564,
            "range": "± 9963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2859,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 527,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1807166,
            "range": "± 351669",
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
          "id": "b8c4054c20d2b2d635d70f64d3ea0ededd41b990",
          "message": "Add strict variables mode.",
          "timestamp": "2021-12-04T17:57:28+08:00",
          "tree_id": "2ade2a264328488bf5d6a0f2a244db1bb0bc4511",
          "url": "https://github.com/schungx/rhai/commit/b8c4054c20d2b2d635d70f64d3ea0ededd41b990"
        },
        "date": 1638612361806,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 311869,
            "range": "± 36163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 174,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 160,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 281,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1729,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1843,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7620303,
            "range": "± 671019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 696,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 764,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17844,
            "range": "± 3302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15711,
            "range": "± 4106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 613,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1153,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 118,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 118,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 116,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2443339,
            "range": "± 337720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4386328,
            "range": "± 394398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3706944,
            "range": "± 382693",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24412,
            "range": "± 1893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9827,
            "range": "± 1079",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2685,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2683,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 632,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 671,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1404,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1393,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1269,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1755,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 688,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 680,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 376,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 476,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 605,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 539,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 449699,
            "range": "± 73536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 562326,
            "range": "± 53863",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 587134,
            "range": "± 61629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23132618,
            "range": "± 1585414",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4718,
            "range": "± 910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16114,
            "range": "± 1442",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6550,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21692,
            "range": "± 3040",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18844,
            "range": "± 1220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47824,
            "range": "± 4407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3634,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 670,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2151519,
            "range": "± 223687",
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
          "id": "6f6380ca3ae0d2f1c9eb498b295f2b63d684a533",
          "message": "Fix builds.",
          "timestamp": "2021-12-04T18:07:27+08:00",
          "tree_id": "df2f7b43d99ca5df91012093e6385d4ac5b1fdf3",
          "url": "https://github.com/schungx/rhai/commit/6f6380ca3ae0d2f1c9eb498b295f2b63d684a533"
        },
        "date": 1638612871952,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 296704,
            "range": "± 22441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 150,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 148,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 258,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1660,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1720,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6598071,
            "range": "± 298365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 663,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 705,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16887,
            "range": "± 1735",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15968,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 591,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1065,
            "range": "± 36",
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
            "value": 117,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 116,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2335404,
            "range": "± 182332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3975250,
            "range": "± 148692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3462696,
            "range": "± 68886",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23420,
            "range": "± 1009",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9236,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2567,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2654,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 601,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 646,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1305,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1275,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1188,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1587,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 644,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 649,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 369,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 464,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 589,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 535,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 422564,
            "range": "± 19212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 521473,
            "range": "± 30804",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 530834,
            "range": "± 33999",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19718807,
            "range": "± 957307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4028,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14414,
            "range": "± 687",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5771,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18714,
            "range": "± 1893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16395,
            "range": "± 993",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43079,
            "range": "± 5263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3320,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 573,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1922286,
            "range": "± 91937",
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
          "id": "54f78c5cd98bd74fb06345eef5caae6c61d1fe7f",
          "message": "Use zero for no hash.",
          "timestamp": "2021-12-05T17:05:19+08:00",
          "tree_id": "351b7343281c6fc0af183aeb8a2c249c4dab80bd",
          "url": "https://github.com/schungx/rhai/commit/54f78c5cd98bd74fb06345eef5caae6c61d1fe7f"
        },
        "date": 1638695573243,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 237074,
            "range": "± 47547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 131,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 128,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 223,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1323,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1345,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5566694,
            "range": "± 648962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 576,
            "range": "± 382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 570,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13442,
            "range": "± 2536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12405,
            "range": "± 2244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 469,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 896,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 89,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 93,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 89,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2052212,
            "range": "± 538206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3699857,
            "range": "± 998648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3022171,
            "range": "± 501702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20172,
            "range": "± 2760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7849,
            "range": "± 1580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1994,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2019,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 445,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 499,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 997,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1000,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1069,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1290,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 514,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 540,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 274,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 371,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 475,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 413,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 377159,
            "range": "± 104467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 439644,
            "range": "± 100094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 464100,
            "range": "± 93132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17537574,
            "range": "± 2476368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3267,
            "range": "± 730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10768,
            "range": "± 1497",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4719,
            "range": "± 1074",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14658,
            "range": "± 1950",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12797,
            "range": "± 1888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33653,
            "range": "± 2848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2591,
            "range": "± 878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 474,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1837345,
            "range": "± 503912",
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
          "id": "cc98e82ea17b9df5aefa3fe22a14414a9a1cd9cd",
          "message": "Include hashes in JSON output.",
          "timestamp": "2021-12-06T11:12:54+08:00",
          "tree_id": "6dffb762e20934ae6e3ef23e785261b11477b434",
          "url": "https://github.com/schungx/rhai/commit/cc98e82ea17b9df5aefa3fe22a14414a9a1cd9cd"
        },
        "date": 1638766417020,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 259083,
            "range": "± 55224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 136,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 127,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 234,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1355,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1360,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5602961,
            "range": "± 734939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 540,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 563,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13648,
            "range": "± 1431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12615,
            "range": "± 2482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 495,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 860,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 95,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 99,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 98,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2036077,
            "range": "± 675433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3398531,
            "range": "± 320918",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2886976,
            "range": "± 344659",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20046,
            "range": "± 3533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7880,
            "range": "± 1462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2090,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2089,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 475,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 510,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1125,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1080,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1069,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1401,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 558,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 658,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 298,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 373,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 487,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 431,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 360417,
            "range": "± 81609",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 437204,
            "range": "± 52910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 453732,
            "range": "± 67053",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18058138,
            "range": "± 2567010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3480,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11441,
            "range": "± 1217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5019,
            "range": "± 1713",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15550,
            "range": "± 2510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13537,
            "range": "± 4957",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35341,
            "range": "± 5766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2819,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 477,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1666248,
            "range": "± 233963",
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
          "id": "2a7a6484295ca14ae7484bbe2cdef6b2acc50632",
          "message": "Reduce feature gates.",
          "timestamp": "2021-12-06T20:52:47+08:00",
          "tree_id": "a19b89eeabd57099ca10fcb19c60df8be2e6f0ba",
          "url": "https://github.com/schungx/rhai/commit/2a7a6484295ca14ae7484bbe2cdef6b2acc50632"
        },
        "date": 1638795764817,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 285633,
            "range": "± 40327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 160,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 152,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 271,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1716,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1698,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6904247,
            "range": "± 1093034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 670,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 726,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15491,
            "range": "± 2615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15340,
            "range": "± 3028",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 588,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1045,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 116,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2329399,
            "range": "± 381661",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4054340,
            "range": "± 599787",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3515081,
            "range": "± 586115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23927,
            "range": "± 3760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9255,
            "range": "± 1652",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2537,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2631,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 558,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 615,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1333,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1264,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1214,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1606,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 655,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 660,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 344,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 428,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 529,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 468,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 378086,
            "range": "± 80671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 467256,
            "range": "± 87194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 519732,
            "range": "± 79622",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20295583,
            "range": "± 4263938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4053,
            "range": "± 759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14875,
            "range": "± 3921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5791,
            "range": "± 2194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18804,
            "range": "± 4125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16688,
            "range": "± 5392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41013,
            "range": "± 10962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3301,
            "range": "± 503",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 580,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1951931,
            "range": "± 329447",
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
          "id": "675ddb89f9d1ffa2f50d0dee04461300f013461e",
          "message": "Add \"\" and `` in string literals.",
          "timestamp": "2021-12-09T13:34:51+08:00",
          "tree_id": "9f6eb0b45e94780c317afc85496e0f41bc4e7d0d",
          "url": "https://github.com/schungx/rhai/commit/675ddb89f9d1ffa2f50d0dee04461300f013461e"
        },
        "date": 1639029402471,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 288525,
            "range": "± 35922",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 159,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 154,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 275,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1621,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1655,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6486946,
            "range": "± 885590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 577,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 614,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15492,
            "range": "± 1985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14648,
            "range": "± 3527",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 567,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1027,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 107,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 98,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 101,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2155863,
            "range": "± 276762",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4081845,
            "range": "± 559339",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3303690,
            "range": "± 338333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24008,
            "range": "± 3148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8755,
            "range": "± 1241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2361,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2304,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 539,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 544,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1256,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1190,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1118,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1556,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 624,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 652,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 355,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 471,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 610,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 493,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 429748,
            "range": "± 91451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 494315,
            "range": "± 62772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 488828,
            "range": "± 152784",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19465842,
            "range": "± 2388744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3692,
            "range": "± 992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11887,
            "range": "± 1855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5323,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17712,
            "range": "± 1721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15087,
            "range": "± 1893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38313,
            "range": "± 8920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2884,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 539,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1835107,
            "range": "± 296092",
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
          "id": "6af406bafc4eb194d665f9f4dd120ee458ad7875",
          "message": "Add parse/write to blobs.",
          "timestamp": "2021-12-12T16:29:54+08:00",
          "tree_id": "384f917c7368be16675ca46e2465b2672ade2d8b",
          "url": "https://github.com/schungx/rhai/commit/6af406bafc4eb194d665f9f4dd120ee458ad7875"
        },
        "date": 1639298393785,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 328176,
            "range": "± 67731",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 181,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 173,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 303,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1790,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1872,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7568735,
            "range": "± 895962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 722,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 728,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18256,
            "range": "± 4525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15663,
            "range": "± 3447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 669,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1166,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 118,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 123,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 121,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2448494,
            "range": "± 426610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4426984,
            "range": "± 1165647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3810347,
            "range": "± 660791",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27071,
            "range": "± 5768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9692,
            "range": "± 1893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2774,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2696,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 639,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 687,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1417,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1337,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1176,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1672,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 661,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 669,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 373,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 482,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 603,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 524,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 474639,
            "range": "± 84461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 579556,
            "range": "± 81482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 588870,
            "range": "± 88904",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24142396,
            "range": "± 3511084",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4785,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15215,
            "range": "± 2711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6372,
            "range": "± 2138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20725,
            "range": "± 6794",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17378,
            "range": "± 4607",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45843,
            "range": "± 10539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3540,
            "range": "± 1027",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 662,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2153320,
            "range": "± 423387",
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
          "id": "5eaf85254f9e2a56459ee523ed3f1cbde0c640a6",
          "message": "Fix builds.",
          "timestamp": "2021-12-12T17:26:15+08:00",
          "tree_id": "3a2e3c5a7852baf5a8ae92248e086127ab3d0dbc",
          "url": "https://github.com/schungx/rhai/commit/5eaf85254f9e2a56459ee523ed3f1cbde0c640a6"
        },
        "date": 1639302017358,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 302761,
            "range": "± 30623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 158,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 165,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 268,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1614,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1638,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6655453,
            "range": "± 739989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 622,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 720,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16302,
            "range": "± 2364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16495,
            "range": "± 3602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 619,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1074,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 112,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 117,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 115,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2274074,
            "range": "± 446041",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4213617,
            "range": "± 771927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3617361,
            "range": "± 729297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24088,
            "range": "± 2769",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8904,
            "range": "± 1219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2363,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2347,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 565,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 605,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1250,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1350,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1281,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1740,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 674,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 692,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 356,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 483,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 611,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 530,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 461918,
            "range": "± 51596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 564625,
            "range": "± 70941",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 556395,
            "range": "± 77562",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22260927,
            "range": "± 2941224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4035,
            "range": "± 703",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13718,
            "range": "± 2470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5816,
            "range": "± 656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18674,
            "range": "± 2923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16500,
            "range": "± 2896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42687,
            "range": "± 6396",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3251,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 578,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1959222,
            "range": "± 318366",
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
          "id": "ef14079c619e243bc35a00cb1b2847e5af236576",
          "message": "Add ranges.",
          "timestamp": "2021-12-15T12:06:17+08:00",
          "tree_id": "812d388591c8d5bce23a13d20ab62456ed14d1ac",
          "url": "https://github.com/schungx/rhai/commit/ef14079c619e243bc35a00cb1b2847e5af236576"
        },
        "date": 1639542255882,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 303777,
            "range": "± 43688",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 144,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 136,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 245,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1394,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1411,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6217939,
            "range": "± 901429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 594,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 592,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14369,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13331,
            "range": "± 2265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 528,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 949,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 100,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 98,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 98,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2012868,
            "range": "± 480490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3652164,
            "range": "± 545141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3117607,
            "range": "± 482346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20836,
            "range": "± 3333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8363,
            "range": "± 1806",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2124,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2406,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 488,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 553,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1134,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1114,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1043,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1460,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 636,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 585,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 319,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 406,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 510,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 467,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 406977,
            "range": "± 64764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 498003,
            "range": "± 76739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 487673,
            "range": "± 50111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19101331,
            "range": "± 3236884",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3535,
            "range": "± 765",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11627,
            "range": "± 2059",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5029,
            "range": "± 804",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16615,
            "range": "± 3425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13581,
            "range": "± 1928",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35293,
            "range": "± 7022",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2848,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 514,
            "range": "± 107",
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
          "id": "7afec287d8fb4b2f1547b0b854bdcd4e5cd55487",
          "message": "Fix doc test.",
          "timestamp": "2021-12-15T12:26:05+08:00",
          "tree_id": "e61f5c7a062321d9fcf8f130c0d449106f291067",
          "url": "https://github.com/schungx/rhai/commit/7afec287d8fb4b2f1547b0b854bdcd4e5cd55487"
        },
        "date": 1639543567154,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 319952,
            "range": "± 51183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 159,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 151,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 268,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1464,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1562,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6945605,
            "range": "± 1107436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 613,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 645,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15850,
            "range": "± 2246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14126,
            "range": "± 2603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 558,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1044,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 105,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 102,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 109,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2083254,
            "range": "± 254868",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3958067,
            "range": "± 621962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3212210,
            "range": "± 664622",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23547,
            "range": "± 2934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8778,
            "range": "± 1446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2368,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2310,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 566,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 614,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1200,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1261,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1063,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1506,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 625,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 598,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 338,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 444,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 562,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 497,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 424926,
            "range": "± 46649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 509441,
            "range": "± 100765",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 523350,
            "range": "± 89445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19666543,
            "range": "± 2868616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3704,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12481,
            "range": "± 2254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5071,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16839,
            "range": "± 3825",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13878,
            "range": "± 2569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36706,
            "range": "± 8043",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2952,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 529,
            "range": "± 155",
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
          "id": "eda80488d5973ec02dce76495d8ed61d0f128082",
          "message": "Fix builds.",
          "timestamp": "2021-12-15T12:46:25+08:00",
          "tree_id": "18d0ef4de6250521c61b73317a77279b237d125f",
          "url": "https://github.com/schungx/rhai/commit/eda80488d5973ec02dce76495d8ed61d0f128082"
        },
        "date": 1639543984215,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 376458,
            "range": "± 5187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 158,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 156,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 273,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1681,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1699,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6993313,
            "range": "± 8495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 673,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 694,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17308,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16033,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 621,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1078,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 115,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 116,
            "range": "± 0",
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
            "value": 2322394,
            "range": "± 8072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4279980,
            "range": "± 9366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3707096,
            "range": "± 11948",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24087,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9524,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2582,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2621,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 596,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 639,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1282,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1264,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1191,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1687,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 669,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 672,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 367,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 467,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 603,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 530,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 437580,
            "range": "± 2069",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 548772,
            "range": "± 3936",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 555743,
            "range": "± 4320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20357397,
            "range": "± 44645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4114,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14209,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5900,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18871,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16403,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42745,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3297,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 579,
            "range": "± 4",
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
          "id": "fbc2b1f13d4fb66cb19e8997d4d4b7b799b5e60f",
          "message": "Allow non-custom reserved symbols in custom syntax.",
          "timestamp": "2021-12-16T18:01:49+08:00",
          "tree_id": "c4177d38752467417a82bcb6a429a3caf3f83d1b",
          "url": "https://github.com/schungx/rhai/commit/fbc2b1f13d4fb66cb19e8997d4d4b7b799b5e60f"
        },
        "date": 1639649576002,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 267366,
            "range": "± 28286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 119,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 115,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 199,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1225,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1245,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5398486,
            "range": "± 617340",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 485,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 537,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15938,
            "range": "± 7769",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11712,
            "range": "± 2246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 451,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 850,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 87,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1751390,
            "range": "± 508552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3173437,
            "range": "± 336546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2695577,
            "range": "± 219038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18043,
            "range": "± 3533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6958,
            "range": "± 1384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1994,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1886,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 432,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 464,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1034,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1011,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1046,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1294,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 521,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 506,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 278,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 366,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 474,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 398,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 357451,
            "range": "± 76037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 421510,
            "range": "± 51306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 416242,
            "range": "± 32028",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16516127,
            "range": "± 577536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3200,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10102,
            "range": "± 1201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4386,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13964,
            "range": "± 2012",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12020,
            "range": "± 2325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31311,
            "range": "± 1782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2504,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 461,
            "range": "± 76",
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
          "id": "c7ec27acc76cac01baedf16561043084952bbe2c",
          "message": "Split AST into separate files.",
          "timestamp": "2021-12-17T16:07:13+08:00",
          "tree_id": "cd2cec6185df3ea8e45cccb01d7b8556d9d3e2a3",
          "url": "https://github.com/schungx/rhai/commit/c7ec27acc76cac01baedf16561043084952bbe2c"
        },
        "date": 1639729046426,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 309779,
            "range": "± 2343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 132,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 127,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 228,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1396,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1418,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5832301,
            "range": "± 11160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 544,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 569,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14521,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13585,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 503,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 945,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 96,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 96,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1915736,
            "range": "± 4531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3424277,
            "range": "± 13888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2940441,
            "range": "± 6457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20287,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7913,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2143,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2159,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 510,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 530,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1139,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1106,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1042,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1393,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 568,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 550,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 309,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 389,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 509,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 451,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 371095,
            "range": "± 2281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 463001,
            "range": "± 2635",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 470406,
            "range": "± 2702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18057012,
            "range": "± 71784",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3497,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11991,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4969,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15934,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13975,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35840,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2912,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 481,
            "range": "± 2",
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
          "id": "29a9b3878dd08f289741352c954e1a525faf2c22",
          "message": "Fix builds.",
          "timestamp": "2021-12-17T16:32:34+08:00",
          "tree_id": "827fd8675d336651e614a68ed8884699383c8992",
          "url": "https://github.com/schungx/rhai/commit/29a9b3878dd08f289741352c954e1a525faf2c22"
        },
        "date": 1639730861532,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 386061,
            "range": "± 48606",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 178,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 183,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 311,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1787,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1797,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7469921,
            "range": "± 672474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 730,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 736,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18620,
            "range": "± 3435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17356,
            "range": "± 2310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 669,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1210,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 123,
            "range": "± 26",
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
            "value": 119,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2481089,
            "range": "± 289545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4441330,
            "range": "± 668989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3823895,
            "range": "± 558544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25975,
            "range": "± 3074",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10276,
            "range": "± 1523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2658,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2719,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 632,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 682,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1458,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1529,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1371,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1895,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 747,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 764,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 393,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 532,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 659,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 582,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 471979,
            "range": "± 79627",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 625940,
            "range": "± 86974",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 608884,
            "range": "± 72678",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23404168,
            "range": "± 3209719",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4426,
            "range": "± 660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15057,
            "range": "± 2796",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6311,
            "range": "± 902",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20448,
            "range": "± 3359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17409,
            "range": "± 2805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46051,
            "range": "± 10118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3653,
            "range": "± 564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 652,
            "range": "± 151",
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
          "id": "dc6896fbe2e26134b0558bba8c7c2dcb58a408a4",
          "message": "Add OpAssignment::new_from_token.",
          "timestamp": "2021-12-17T16:55:24+08:00",
          "tree_id": "be0238a2223ec9e2fc45a5ddb5754099dbb3ac07",
          "url": "https://github.com/schungx/rhai/commit/dc6896fbe2e26134b0558bba8c7c2dcb58a408a4"
        },
        "date": 1639732752451,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 281758,
            "range": "± 1750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 117,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 112,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 200,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1227,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1247,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5154911,
            "range": "± 10037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 484,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 504,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12897,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11885,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 443,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 813,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1692600,
            "range": "± 3770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3135357,
            "range": "± 29184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2584260,
            "range": "± 10024",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18244,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7005,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1918,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1953,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 442,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 470,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1020,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1008,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 889,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1196,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 500,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 489,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 270,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 354,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 441,
            "range": "± 3",
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
            "value": 323958,
            "range": "± 1553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 406294,
            "range": "± 3252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 411074,
            "range": "± 1631",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16051394,
            "range": "± 37482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3116,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10367,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4278,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13953,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12101,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31352,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2503,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 432,
            "range": "± 3",
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
          "id": "541ef319bb762fcb2bfea81b29e9ecc3201f66aa",
          "message": "Merge branch 'v1.3-fixes'",
          "timestamp": "2021-12-18T18:22:20+08:00",
          "tree_id": "2b6fa274e54f8cd5040c9630d3cbcdcd0b188b13",
          "url": "https://github.com/schungx/rhai/commit/541ef319bb762fcb2bfea81b29e9ecc3201f66aa"
        },
        "date": 1639823868075,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 357877,
            "range": "± 44937",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 162,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 155,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 279,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1666,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1686,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7048297,
            "range": "± 658136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 663,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 694,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16765,
            "range": "± 1979",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16134,
            "range": "± 2757",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 635,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1162,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 116,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 121,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 118,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2435633,
            "range": "± 332389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4232826,
            "range": "± 406347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3602233,
            "range": "± 333370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25727,
            "range": "± 3807",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9982,
            "range": "± 1205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2649,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2570,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 604,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 640,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1353,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1400,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1287,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1730,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 724,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 715,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 385,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 488,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 647,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 547,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 456353,
            "range": "± 51914",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 568538,
            "range": "± 68981",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 570246,
            "range": "± 71170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22084127,
            "range": "± 4073929",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4136,
            "range": "± 670",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14382,
            "range": "± 2556",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5882,
            "range": "± 1070",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19310,
            "range": "± 2474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15843,
            "range": "± 3065",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41046,
            "range": "± 5783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3216,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 570,
            "range": "± 55",
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
          "id": "e507dcfcb4e13b883c6266bbd03b30ecbbb0cb07",
          "message": "Fix no_index build.",
          "timestamp": "2021-12-18T18:44:08+08:00",
          "tree_id": "2fc493b6ca7ea94a66eeb787abc8163ba80ca2ca",
          "url": "https://github.com/schungx/rhai/commit/e507dcfcb4e13b883c6266bbd03b30ecbbb0cb07"
        },
        "date": 1639824654071,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 373636,
            "range": "± 23754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 159,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 156,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 272,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1674,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1704,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7041363,
            "range": "± 119915",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 665,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 693,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17153,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16014,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 610,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1083,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 114,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 115,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 115,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2402207,
            "range": "± 72894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4148918,
            "range": "± 54002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3641603,
            "range": "± 83360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24235,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9678,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2648,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2715,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 604,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 646,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1277,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1286,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1185,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1685,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 663,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 666,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 366,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 470,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 611,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 540,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 436434,
            "range": "± 26294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 549366,
            "range": "± 4872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 554607,
            "range": "± 15606",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20190974,
            "range": "± 475149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4043,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13987,
            "range": "± 979",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5843,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18776,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16315,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42178,
            "range": "± 1651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3266,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 580,
            "range": "± 57",
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
          "id": "bca9fe53b0d6194181f23316fe21f40c7aae45f3",
          "message": "New syntax for def_package.",
          "timestamp": "2021-12-20T11:42:39+08:00",
          "tree_id": "a916b885776ecb6ea141a51df68ebb946672ea06",
          "url": "https://github.com/schungx/rhai/commit/bca9fe53b0d6194181f23316fe21f40c7aae45f3"
        },
        "date": 1639972225203,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 378783,
            "range": "± 5400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 156,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 147,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 260,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1714,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1729,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6666932,
            "range": "± 205997",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 635,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 661,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16545,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15387,
            "range": "± 1289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 608,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1126,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 110,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 110,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 110,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2196687,
            "range": "± 98683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3881570,
            "range": "± 139463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3388026,
            "range": "± 138034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23561,
            "range": "± 900",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9526,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2564,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2600,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 598,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 637,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1286,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1295,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1232,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1648,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 683,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 674,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 361,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 470,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 587,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 527,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 438458,
            "range": "± 13290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 543812,
            "range": "± 21032",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 554618,
            "range": "± 27366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19972450,
            "range": "± 709726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4154,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14139,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5926,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18661,
            "range": "± 1163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16575,
            "range": "± 1275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43141,
            "range": "± 1487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3382,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 589,
            "range": "± 3",
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
          "id": "b85a9b3c1cefe88dad3a808ef0f7b43f97aa1f2c",
          "message": "Extract doc-comment on plugin functions.",
          "timestamp": "2021-12-21T16:14:07+08:00",
          "tree_id": "9a9d7c458a23c1a8ac1d38835a43e4e16b15b1cf",
          "url": "https://github.com/schungx/rhai/commit/b85a9b3c1cefe88dad3a808ef0f7b43f97aa1f2c"
        },
        "date": 1640075216303,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 319423,
            "range": "± 3265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 136,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 226,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1462,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1409,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5825307,
            "range": "± 14628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 547,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 573,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14500,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13648,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 502,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 902,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 96,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 95,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1927222,
            "range": "± 3908",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3487670,
            "range": "± 10093",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3006334,
            "range": "± 8403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20465,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7870,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2167,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2185,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 501,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 536,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1113,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1095,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1035,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1401,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 571,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 581,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 306,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 393,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 502,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 459,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 361399,
            "range": "± 1855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 465145,
            "range": "± 2049",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 469145,
            "range": "± 2115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18006530,
            "range": "± 57243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3489,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11758,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4969,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16571,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14397,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35727,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2763,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 488,
            "range": "± 1",
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
          "id": "f9f36158781bf55175252b8d119f2264f358b2b6",
          "message": "Fix builds.",
          "timestamp": "2021-12-21T16:36:53+08:00",
          "tree_id": "69d46123c881f018072f6e2c0ad139db1b228bc4",
          "url": "https://github.com/schungx/rhai/commit/f9f36158781bf55175252b8d119f2264f358b2b6"
        },
        "date": 1640076777531,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 360562,
            "range": "± 30879",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 164,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 160,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 277,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1682,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1711,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7467995,
            "range": "± 586270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 684,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 720,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17831,
            "range": "± 1078",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15838,
            "range": "± 1656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 610,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1136,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 118,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 118,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 118,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2386654,
            "range": "± 120206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4375879,
            "range": "± 212327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3756511,
            "range": "± 314262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25284,
            "range": "± 1754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9865,
            "range": "± 1007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2661,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2651,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 613,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 648,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1390,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1376,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1232,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1731,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 714,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 725,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 372,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 471,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 595,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 560,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 452427,
            "range": "± 16292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 564563,
            "range": "± 36408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 569963,
            "range": "± 34707",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22618204,
            "range": "± 936832",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4343,
            "range": "± 510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14609,
            "range": "± 1033",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6250,
            "range": "± 1398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20158,
            "range": "± 1301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17148,
            "range": "± 3025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43870,
            "range": "± 9101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3533,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 628,
            "range": "± 28",
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
          "id": "3751b6d018abf8d14bb7d0aefd54d6c1f004c6b9",
          "message": "Build in array/blob concat functions.",
          "timestamp": "2021-12-22T19:59:48+08:00",
          "tree_id": "59788c18e2e84cafde7da065cbadd36ffed3c564",
          "url": "https://github.com/schungx/rhai/commit/3751b6d018abf8d14bb7d0aefd54d6c1f004c6b9"
        },
        "date": 1640174784159,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 374229,
            "range": "± 11598",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 154,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 146,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 261,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1674,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1701,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6981125,
            "range": "± 107489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 663,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 693,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16942,
            "range": "± 1204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15924,
            "range": "± 772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 616,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1061,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 116,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 115,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 116,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2279868,
            "range": "± 55783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4054143,
            "range": "± 51337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3526944,
            "range": "± 48176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23962,
            "range": "± 914",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9372,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2617,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2645,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 606,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 660,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1286,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1257,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1234,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1629,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 660,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 667,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 364,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 475,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 598,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 524,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 436647,
            "range": "± 16816",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 551635,
            "range": "± 29746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 557890,
            "range": "± 25059",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20415672,
            "range": "± 117103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4161,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14201,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6066,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18812,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16476,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43078,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3368,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 586,
            "range": "± 7",
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
          "id": "5c31ec7f782e41360fa13ade87b73c4fd0a959fb",
          "message": "Fix array bug.",
          "timestamp": "2021-12-22T22:22:20+08:00",
          "tree_id": "b39e768659a06654cf55d282b2a64dce4ab71975",
          "url": "https://github.com/schungx/rhai/commit/5c31ec7f782e41360fa13ade87b73c4fd0a959fb"
        },
        "date": 1640183339403,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 312016,
            "range": "± 4261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 129,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 121,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 217,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1394,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1441,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5835438,
            "range": "± 14314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 555,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 578,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14264,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13187,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 497,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 875,
            "range": "± 5",
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
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1924569,
            "range": "± 5447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3404586,
            "range": "± 7091",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2946164,
            "range": "± 7702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20470,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7921,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2181,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2209,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 505,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 535,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1135,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1097,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1000,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1398,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 545,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 556,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 306,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 390,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 496,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 456,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 360511,
            "range": "± 1462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 454942,
            "range": "± 1248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 460997,
            "range": "± 2109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18064458,
            "range": "± 70415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3487,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12284,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5080,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16167,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14186,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37005,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2876,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 482,
            "range": "± 2",
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
          "id": "01c35808cb46d2c11b4611220c85ca2cfd8ec8d2",
          "message": "Use type alias",
          "timestamp": "2021-12-25T23:49:14+08:00",
          "tree_id": "c55953e8b7cb98341e8be31cfb9acb6d967e1bbc",
          "url": "https://github.com/schungx/rhai/commit/01c35808cb46d2c11b4611220c85ca2cfd8ec8d2"
        },
        "date": 1640447964103,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 310440,
            "range": "± 62191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 139,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 132,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 233,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1418,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1430,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5992783,
            "range": "± 817041",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 568,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 637,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14434,
            "range": "± 2732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14529,
            "range": "± 2504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 531,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1081,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 106,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 109,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 107,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2178846,
            "range": "± 336307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3746212,
            "range": "± 709091",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3285434,
            "range": "± 689537",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23484,
            "range": "± 3204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8793,
            "range": "± 1985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2259,
            "range": "± 724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2481,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 523,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 590,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1152,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1185,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1029,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1379,
            "range": "± 615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 594,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 626,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 317,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 389,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 523,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 466,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 379034,
            "range": "± 73826",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 470563,
            "range": "± 86872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 482139,
            "range": "± 85090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18626178,
            "range": "± 4176342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3449,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11534,
            "range": "± 2174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5258,
            "range": "± 1343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15761,
            "range": "± 1847",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13761,
            "range": "± 1749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34982,
            "range": "± 7023",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2883,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 511,
            "range": "± 103",
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
          "id": "a07faf7dd9051e861e35f64da4fc07e94a045c43",
          "message": "Fix doc test.",
          "timestamp": "2021-12-26T12:16:48+08:00",
          "tree_id": "c8c51ddf1f2b663e907cde65a1a6ab25fae1c968",
          "url": "https://github.com/schungx/rhai/commit/a07faf7dd9051e861e35f64da4fc07e94a045c43"
        },
        "date": 1640492819682,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 306956,
            "range": "± 1676",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 140,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 142,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 232,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1397,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1437,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5860198,
            "range": "± 10769",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 549,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 585,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14513,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13579,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 504,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 925,
            "range": "± 8",
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
            "value": 97,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1958685,
            "range": "± 3000",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3429449,
            "range": "± 9451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2953428,
            "range": "± 5863",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20931,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8056,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2147,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2186,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 499,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 532,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1141,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1108,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 988,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1370,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 562,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 560,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 305,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 386,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 505,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 455,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 369086,
            "range": "± 1175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 462695,
            "range": "± 4605",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 469520,
            "range": "± 2806",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18130381,
            "range": "± 15615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3449,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11919,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4985,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16341,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14129,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36446,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2832,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 480,
            "range": "± 4",
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
          "id": "dfb3378b28add4828582c9e53987c446c708c1db",
          "message": "Expand function call arguments inline storage.",
          "timestamp": "2021-12-27T12:27:44+08:00",
          "tree_id": "19ae26d8a3e3fa04433c14bafee7a21145307b30",
          "url": "https://github.com/schungx/rhai/commit/dfb3378b28add4828582c9e53987c446c708c1db"
        },
        "date": 1640579924093,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 379488,
            "range": "± 6978",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 154,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 157,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 269,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1717,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1733,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7387523,
            "range": "± 146975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 653,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 685,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16985,
            "range": "± 1015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15827,
            "range": "± 1415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 608,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1056,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 112,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 112,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 112,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2263057,
            "range": "± 82223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4066724,
            "range": "± 73811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3475722,
            "range": "± 29907",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23740,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9280,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2583,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2627,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 615,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 643,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1263,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1245,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1182,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1634,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 658,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 670,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 373,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 484,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 625,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 568,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 426944,
            "range": "± 12964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 567742,
            "range": "± 35779",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 575382,
            "range": "± 21458",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19933199,
            "range": "± 370390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4082,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14498,
            "range": "± 850",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5861,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19299,
            "range": "± 1154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16736,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43314,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3387,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 584,
            "range": "± 5",
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
          "id": "9c7ced2b8082bc53b7ffc65d5cd7aa48ba8ce62d",
          "message": "Move custom syntax to api.",
          "timestamp": "2021-12-27T22:02:34+08:00",
          "tree_id": "410f120854a56d54d2325ebfe2c4d2eb3734e3cf",
          "url": "https://github.com/schungx/rhai/commit/9c7ced2b8082bc53b7ffc65d5cd7aa48ba8ce62d"
        },
        "date": 1640614582461,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 327349,
            "range": "± 29576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 161,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 160,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 273,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1354,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1367,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6567297,
            "range": "± 364399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 547,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 569,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16140,
            "range": "± 1393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15290,
            "range": "± 1119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 537,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 999,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 95,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 95,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 95,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2011956,
            "range": "± 198928",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3645902,
            "range": "± 569698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3140243,
            "range": "± 342291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21161,
            "range": "± 2376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7982,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2117,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2212,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 496,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 551,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1133,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1149,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1043,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1462,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 614,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 612,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 306,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 408,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 504,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 504,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 381969,
            "range": "± 33973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 471439,
            "range": "± 27727",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 473959,
            "range": "± 43121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18817191,
            "range": "± 1527742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3757,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13382,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5415,
            "range": "± 658",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17685,
            "range": "± 1425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15246,
            "range": "± 1111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38328,
            "range": "± 2503",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3214,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 590,
            "range": "± 55",
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
          "id": "9deddc679c20a54c3058e1903f75a81f0fd3fe63",
          "message": "Use Box<str>.",
          "timestamp": "2021-12-27T23:15:25+08:00",
          "tree_id": "29c49051a8fc6e23e7b1598ef6d639273b6a775f",
          "url": "https://github.com/schungx/rhai/commit/9deddc679c20a54c3058e1903f75a81f0fd3fe63"
        },
        "date": 1640619362039,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 397428,
            "range": "± 56852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 209,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 195,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 332,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1661,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1711,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7880019,
            "range": "± 587931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 666,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 685,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18756,
            "range": "± 2425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17155,
            "range": "± 3549",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 643,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1088,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 113,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 115,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2289582,
            "range": "± 153198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4202045,
            "range": "± 469569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3615161,
            "range": "± 314374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24752,
            "range": "± 2458",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9622,
            "range": "± 1059",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2519,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2581,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 588,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 639,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1371,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1318,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1238,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1693,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 701,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 713,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 360,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 452,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 582,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 605,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 448708,
            "range": "± 50840",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 546625,
            "range": "± 37116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 550466,
            "range": "± 43708",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22702831,
            "range": "± 1870822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4317,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15613,
            "range": "± 1296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6535,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20942,
            "range": "± 1777",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18200,
            "range": "± 1338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44960,
            "range": "± 4324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3596,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 707,
            "range": "± 76",
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
          "id": "807240e2496764ab53d88effe942bae28da555ca",
          "message": "Rename Imports to GlobalRuntimeState.",
          "timestamp": "2021-12-28T11:42:52+08:00",
          "tree_id": "5a3599bfd8dca4e7ce3fceb3f7363e0c96d69352",
          "url": "https://github.com/schungx/rhai/commit/807240e2496764ab53d88effe942bae28da555ca"
        },
        "date": 1640663741315,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 384016,
            "range": "± 40254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 190,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 202,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 315,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1627,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1668,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8046819,
            "range": "± 723422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 657,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 699,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18889,
            "range": "± 1938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17702,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 612,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1119,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 120,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 123,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 121,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2442411,
            "range": "± 431825",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4309244,
            "range": "± 447365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3653564,
            "range": "± 353124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26316,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9886,
            "range": "± 2259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2527,
            "range": "± 1514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2720,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 614,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 674,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1355,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1362,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1251,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1681,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 675,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 677,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 372,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 485,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 603,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 603,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 471358,
            "range": "± 64149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 557103,
            "range": "± 81742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 569482,
            "range": "± 50023",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23036712,
            "range": "± 2190420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4549,
            "range": "± 719",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15287,
            "range": "± 2321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6368,
            "range": "± 1033",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20835,
            "range": "± 2169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17852,
            "range": "± 3484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46616,
            "range": "± 7574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3829,
            "range": "± 603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 714,
            "range": "± 66",
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
          "id": "80ccd52319e1696d5c24747a035db21ea5da6852",
          "message": "Add tests.",
          "timestamp": "2021-12-30T12:23:35+08:00",
          "tree_id": "05e55a23eac262d405789b341910b939edea1294",
          "url": "https://github.com/schungx/rhai/commit/80ccd52319e1696d5c24747a035db21ea5da6852"
        },
        "date": 1640849095310,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 285792,
            "range": "± 3760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 138,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 234,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1200,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1217,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5459020,
            "range": "± 43240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 462,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 486,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13430,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12610,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 433,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 799,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 84,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1717312,
            "range": "± 34135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2954931,
            "range": "± 21419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2555168,
            "range": "± 13977",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18089,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6990,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1870,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1927,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 434,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 465,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 958,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 953,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 868,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1165,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 489,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 478,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 261,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 343,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 428,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 427,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 319897,
            "range": "± 928",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 394982,
            "range": "± 3744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 399252,
            "range": "± 3283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 15654129,
            "range": "± 103707",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3121,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11436,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4589,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14960,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13191,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33703,
            "range": "± 806",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2622,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 475,
            "range": "± 3",
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
          "id": "f3a83649364b3d39e2e71510c67168b8719ac797",
          "message": "Split blob write into write_utf8 and write_ascii.",
          "timestamp": "2021-12-31T17:49:38+08:00",
          "tree_id": "46ab59a24f9f05644722e7b677d37496fddb5757",
          "url": "https://github.com/schungx/rhai/commit/f3a83649364b3d39e2e71510c67168b8719ac797"
        },
        "date": 1640947038739,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 391745,
            "range": "± 33194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 187,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 177,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 319,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1566,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1633,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7290582,
            "range": "± 561458",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 637,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 651,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18822,
            "range": "± 1522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17033,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 583,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1038,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 112,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 112,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 111,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2164727,
            "range": "± 263909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4207438,
            "range": "± 639526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3308007,
            "range": "± 750158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22678,
            "range": "± 2237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9009,
            "range": "± 835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2515,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2603,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 592,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 646,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1244,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1227,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1205,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1652,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 655,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 648,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 355,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 478,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 584,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 558,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 416040,
            "range": "± 46328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 518079,
            "range": "± 57199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 531387,
            "range": "± 43256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19522692,
            "range": "± 1027096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4030,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14610,
            "range": "± 1386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6081,
            "range": "± 620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18861,
            "range": "± 2569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17474,
            "range": "± 1207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43110,
            "range": "± 5936",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3418,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 647,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1884804,
            "range": "± 213282",
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
          "id": "c4c4696964ffc01067230f993e181efe5e4d3d33",
          "message": "Fix builds.",
          "timestamp": "2021-12-31T18:55:48+08:00",
          "tree_id": "0d6a37c807dd5e3923367bd424bf48ec0bf873d5",
          "url": "https://github.com/schungx/rhai/commit/c4c4696964ffc01067230f993e181efe5e4d3d33"
        },
        "date": 1640948963028,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 332153,
            "range": "± 56851",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 172,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 150,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 277,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1401,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1419,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6627421,
            "range": "± 1090490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 544,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 582,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15788,
            "range": "± 2770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14432,
            "range": "± 1744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 537,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 921,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 102,
            "range": "± 20",
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
            "value": 115,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2205241,
            "range": "± 245789",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4021897,
            "range": "± 294921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3397167,
            "range": "± 420771",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21351,
            "range": "± 4207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8496,
            "range": "± 1228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2095,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2147,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 543,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 539,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1208,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1093,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1156,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1451,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 578,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 552,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 324,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 453,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 528,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 513,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 383394,
            "range": "± 93434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 470822,
            "range": "± 56677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 471828,
            "range": "± 77212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18503884,
            "range": "± 2517142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3778,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13741,
            "range": "± 2938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5419,
            "range": "± 807",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17191,
            "range": "± 2184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15317,
            "range": "± 2278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38794,
            "range": "± 10837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3026,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 581,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1846140,
            "range": "± 339897",
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
          "id": "7ed91eadc0472b5425d6d5c48f524e3cc5a62b43",
          "message": "Fix blob test.",
          "timestamp": "2021-12-31T19:34:43+08:00",
          "tree_id": "d0a7bc80410ad5978a2e5e8bcab81ba20eae055d",
          "url": "https://github.com/schungx/rhai/commit/7ed91eadc0472b5425d6d5c48f524e3cc5a62b43"
        },
        "date": 1640951358013,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 388799,
            "range": "± 27120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 185,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 182,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 332,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1656,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1645,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7358819,
            "range": "± 154695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 637,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 678,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18212,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16906,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 584,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1039,
            "range": "± 47",
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
            "value": 114,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 114,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2352495,
            "range": "± 53368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4040731,
            "range": "± 120803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3431316,
            "range": "± 112946",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23719,
            "range": "± 1025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9286,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2651,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2711,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 603,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 667,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1238,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1235,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1168,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1611,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 654,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 656,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 354,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 476,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 584,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 592,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 430027,
            "range": "± 14464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 536500,
            "range": "± 29879",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 540360,
            "range": "± 37022",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19962019,
            "range": "± 388712",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4179,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15141,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6213,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20024,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17704,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44236,
            "range": "± 1937",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3492,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 654,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2037651,
            "range": "± 45929",
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
          "id": "135b1f54c29eed1a66a0089011640a34dd789fd2",
          "message": "Remove Option from source and use empty string as no source.",
          "timestamp": "2022-01-01T17:20:00+08:00",
          "tree_id": "c5f4b35962b8015ef3f44efc88edc700674a195d",
          "url": "https://github.com/schungx/rhai/commit/135b1f54c29eed1a66a0089011640a34dd789fd2"
        },
        "date": 1641029334621,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 386640,
            "range": "± 18496",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 184,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 183,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 310,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1539,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1579,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7563333,
            "range": "± 213951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 638,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 678,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18368,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16864,
            "range": "± 3801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 646,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1109,
            "range": "± 304",
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
            "value": 113,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 113,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2283076,
            "range": "± 167386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4217573,
            "range": "± 551954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3587743,
            "range": "± 136282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24280,
            "range": "± 5152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9319,
            "range": "± 1167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2551,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2520,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 578,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 620,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1321,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1327,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1226,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1694,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 692,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 673,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 352,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 452,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 573,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 578,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 448949,
            "range": "± 65873",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 540159,
            "range": "± 112528",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 546370,
            "range": "± 113217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21598218,
            "range": "± 887701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4211,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14503,
            "range": "± 2859",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6080,
            "range": "± 2113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19698,
            "range": "± 3054",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16976,
            "range": "± 2220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42889,
            "range": "± 11782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3424,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 642,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2042716,
            "range": "± 123596",
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
          "id": "a6ddb64596834bb2a61fa67d63b3cefb7fc3baea",
          "message": "Fix builds.",
          "timestamp": "2022-01-01T17:38:32+08:00",
          "tree_id": "a78e8d62e673d2077382c4a7d8f07de8bd09fc9c",
          "url": "https://github.com/schungx/rhai/commit/a6ddb64596834bb2a61fa67d63b3cefb7fc3baea"
        },
        "date": 1641030697733,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 363793,
            "range": "± 34106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 175,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 166,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 284,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1485,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1559,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6897723,
            "range": "± 678937",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 595,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 633,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16188,
            "range": "± 1772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15377,
            "range": "± 1625",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 566,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 949,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 106,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 107,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 106,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2111969,
            "range": "± 237103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3825222,
            "range": "± 360878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3297177,
            "range": "± 190455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21511,
            "range": "± 1752",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8390,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2340,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2324,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 538,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 576,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1152,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1193,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1086,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1519,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 618,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 598,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 321,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 434,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 572,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 558,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 420279,
            "range": "± 39203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 527884,
            "range": "± 51330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 495700,
            "range": "± 37868",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18797636,
            "range": "± 1408385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3929,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14211,
            "range": "± 1640",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5789,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18424,
            "range": "± 1919",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16174,
            "range": "± 1428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40859,
            "range": "± 3899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3243,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 601,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2039377,
            "range": "± 20698",
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
          "id": "d60ed5a5028efd92f473f2e60d5d49f253448bf0",
          "message": "Reduce size of Variant trait.",
          "timestamp": "2022-01-01T19:54:46+08:00",
          "tree_id": "e0fc1a2fce08c87154810dfc858de0fcec91158d",
          "url": "https://github.com/schungx/rhai/commit/d60ed5a5028efd92f473f2e60d5d49f253448bf0"
        },
        "date": 1641038805186,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 376430,
            "range": "± 19833",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 187,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 180,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 306,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1540,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1641,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7488785,
            "range": "± 220843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 627,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 644,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17997,
            "range": "± 920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16957,
            "range": "± 1849",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 600,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1074,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 113,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 112,
            "range": "± 6",
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
            "value": 2227289,
            "range": "± 87203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3985925,
            "range": "± 132293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3364036,
            "range": "± 194405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23136,
            "range": "± 1060",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9056,
            "range": "± 516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2454,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2575,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 581,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 628,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1246,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1266,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1194,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1687,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 642,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 685,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 346,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 464,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 575,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 576,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 419267,
            "range": "± 21745",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 528398,
            "range": "± 36748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 522406,
            "range": "± 21256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19654207,
            "range": "± 991685",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4172,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14653,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6065,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20215,
            "range": "± 529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17613,
            "range": "± 1225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45177,
            "range": "± 1824",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3635,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 662,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2039504,
            "range": "± 99186",
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
          "id": "29f1328087604463843bf6966146672ac83e11c6",
          "message": "Simplify Dynamic::from for better inlining.",
          "timestamp": "2022-01-02T20:47:03+08:00",
          "tree_id": "0c033e20f676069e440ecffa6921a78934e83a3d",
          "url": "https://github.com/schungx/rhai/commit/29f1328087604463843bf6966146672ac83e11c6"
        },
        "date": 1641131400438,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 290866,
            "range": "± 1750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 139,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 131,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 219,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1204,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1212,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5498510,
            "range": "± 14005",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 472,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 492,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13340,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12642,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 444,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 815,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1678040,
            "range": "± 13613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3000499,
            "range": "± 15946",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2580226,
            "range": "± 13690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17993,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6954,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1891,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1917,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 455,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 468,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 964,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 979,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 874,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1198,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 494,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 496,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 261,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 354,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 439,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 436,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 317415,
            "range": "± 3135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 399102,
            "range": "± 4235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 402537,
            "range": "± 6052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 15771594,
            "range": "± 56056",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3160,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11581,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4626,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15100,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13294,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33809,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2702,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 482,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1492269,
            "range": "± 6739",
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
          "id": "1d1e473ac45f5fb1418ddbbf3188ac6a534f4151",
          "message": "Minor refactor.",
          "timestamp": "2022-01-03T23:16:47+08:00",
          "tree_id": "15693ef961a4ff8867b993672bbacbb10cc0176b",
          "url": "https://github.com/schungx/rhai/commit/1d1e473ac45f5fb1418ddbbf3188ac6a534f4151"
        },
        "date": 1641223847961,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 377026,
            "range": "± 40726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 194,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 190,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 310,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1673,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1761,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8071885,
            "range": "± 1094794",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 656,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 690,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18568,
            "range": "± 2550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16760,
            "range": "± 1703",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 628,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1104,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 119,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 120,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 125,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2459798,
            "range": "± 500544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4465694,
            "range": "± 791516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3755473,
            "range": "± 488238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26693,
            "range": "± 2790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 10715,
            "range": "± 3222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2660,
            "range": "± 951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2700,
            "range": "± 576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 615,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 651,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1362,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1391,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1290,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1718,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 737,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 716,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 362,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 460,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 581,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 610,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 449574,
            "range": "± 107261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 559912,
            "range": "± 23114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 585032,
            "range": "± 127994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22922830,
            "range": "± 1796719",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4454,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15518,
            "range": "± 1580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6385,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20439,
            "range": "± 2813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17478,
            "range": "± 2168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44087,
            "range": "± 7052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3628,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 671,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2085138,
            "range": "± 218465",
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
          "id": "d99953c101dfd39bfe0586ff7173399305d5c8d7",
          "message": "Fixup AsRef<str> vs &str.",
          "timestamp": "2022-01-04T15:22:48+08:00",
          "tree_id": "67e514772fe97abe83ea62ad32ed8dff98810b1b",
          "url": "https://github.com/schungx/rhai/commit/d99953c101dfd39bfe0586ff7173399305d5c8d7"
        },
        "date": 1641281832338,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 493317,
            "range": "± 94947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 182,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 187,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 368,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1587,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1645,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7535206,
            "range": "± 990052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 670,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 656,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20176,
            "range": "± 4348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19844,
            "range": "± 7199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 588,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1111,
            "range": "± 290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 108,
            "range": "± 18",
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
            "value": 107,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2208924,
            "range": "± 353817",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4342652,
            "range": "± 816926",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3629042,
            "range": "± 385828",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24430,
            "range": "± 3720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9247,
            "range": "± 1302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2523,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2538,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 570,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 625,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1363,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1242,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1119,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1582,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 661,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 616,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 385,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 476,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 599,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 623,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 420885,
            "range": "± 84720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 530787,
            "range": "± 115377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 544490,
            "range": "± 98086",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22946112,
            "range": "± 3793910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4420,
            "range": "± 859",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16506,
            "range": "± 3878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6674,
            "range": "± 1357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22066,
            "range": "± 6380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18966,
            "range": "± 3426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45504,
            "range": "± 8370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4251,
            "range": "± 835",
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
            "value": 2117640,
            "range": "± 335485",
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
          "id": "a0531129df26f90071d3a52e6aa5f6385a3650b7",
          "message": "Restructure expression dispatch.",
          "timestamp": "2022-01-05T13:14:18+08:00",
          "tree_id": "234321c1da837463ea35077ecea350e14ae21628",
          "url": "https://github.com/schungx/rhai/commit/a0531129df26f90071d3a52e6aa5f6385a3650b7"
        },
        "date": 1641360137756,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 490779,
            "range": "± 69138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 201,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 201,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 342,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1470,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1472,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7281500,
            "range": "± 829897",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 517,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 548,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18954,
            "range": "± 2889",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18248,
            "range": "± 2891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 529,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 995,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 81,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 83,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1917184,
            "range": "± 301334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3510281,
            "range": "± 416758",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3133451,
            "range": "± 513422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22535,
            "range": "± 2962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8593,
            "range": "± 1025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1746,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1783,
            "range": "± 592",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 479,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 487,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1202,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1263,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1149,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1650,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 681,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 652,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 376,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 473,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 609,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 582,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 380014,
            "range": "± 59821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 514656,
            "range": "± 37992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 507320,
            "range": "± 90598",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18211033,
            "range": "± 1930305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3904,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16390,
            "range": "± 2390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6182,
            "range": "± 913",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21987,
            "range": "± 3266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20266,
            "range": "± 1006",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43314,
            "range": "± 6910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3519,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 615,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1894107,
            "range": "± 254052",
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
          "id": "bc6bf6c6baf3614c2be1e8585fb79562290d8e1f",
          "message": "Change expect(\"exists\") to unwrap().",
          "timestamp": "2022-01-06T11:07:52+08:00",
          "tree_id": "8ed8c2e74193ad4d7e6ff187a4a81fb638db70a0",
          "url": "https://github.com/schungx/rhai/commit/bc6bf6c6baf3614c2be1e8585fb79562290d8e1f"
        },
        "date": 1641439294529,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 328745,
            "range": "± 53109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 152,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 147,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 241,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1366,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1425,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7043162,
            "range": "± 675474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 516,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 564,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19883,
            "range": "± 2734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20112,
            "range": "± 1963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 582,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1059,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2019435,
            "range": "± 254980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3994240,
            "range": "± 374591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3259831,
            "range": "± 415027",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22225,
            "range": "± 3730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8678,
            "range": "± 1039",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1817,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1783,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 450,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 504,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1235,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1269,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1179,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1561,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 625,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 651,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 359,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 463,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 558,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 612,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 431155,
            "range": "± 82195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 493843,
            "range": "± 63233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 517528,
            "range": "± 60526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19565258,
            "range": "± 1438253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4096,
            "range": "± 532",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16287,
            "range": "± 1987",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6609,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22156,
            "range": "± 3113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18865,
            "range": "± 2682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45950,
            "range": "± 6019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3650,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 631,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1801685,
            "range": "± 246495",
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
          "id": "ed89817d0c05939e86ee8e310eefed25ee74ff21",
          "message": "Reverse tail call optimization.",
          "timestamp": "2022-01-06T12:31:46+08:00",
          "tree_id": "105edc1bfa19f612f56ff85f1f68f2452031db21",
          "url": "https://github.com/schungx/rhai/commit/ed89817d0c05939e86ee8e310eefed25ee74ff21"
        },
        "date": 1641444249546,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 286221,
            "range": "± 40627",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 128,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 122,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 204,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1085,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1119,
            "range": "± 364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6323307,
            "range": "± 1030907",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 455,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 464,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17302,
            "range": "± 3396",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15530,
            "range": "± 1970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 499,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 856,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 71,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1731595,
            "range": "± 218998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3194164,
            "range": "± 361851",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2683709,
            "range": "± 213996",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19134,
            "range": "± 2121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7064,
            "range": "± 1480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1430,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1377,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 392,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 391,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1063,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1045,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 867,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1284,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 536,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 566,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 302,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 374,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 500,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 462,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 342813,
            "range": "± 128952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 430945,
            "range": "± 85048",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 509534,
            "range": "± 89839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17351294,
            "range": "± 3817700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3568,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14586,
            "range": "± 2860",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5782,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17998,
            "range": "± 1469",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16511,
            "range": "± 3204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37654,
            "range": "± 5684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3408,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 596,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1518357,
            "range": "± 216231",
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
          "id": "c75d51ae880267f567cc09adb4d041094d0bdaf1",
          "message": "Reduce unnecessary data size checking.",
          "timestamp": "2022-01-06T22:10:16+08:00",
          "tree_id": "01d41c210e36016160c5db4df74f4637cc59e90a",
          "url": "https://github.com/schungx/rhai/commit/c75d51ae880267f567cc09adb4d041094d0bdaf1"
        },
        "date": 1641479066185,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 305076,
            "range": "± 2120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 135,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 133,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 217,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1255,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1251,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5722029,
            "range": "± 9061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 479,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 462,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17623,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16742,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 456,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 896,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 67,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1679810,
            "range": "± 2166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3301450,
            "range": "± 230585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2631866,
            "range": "± 216903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18582,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6880,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1606,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1628,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 370,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 402,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1130,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1134,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 933,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1401,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 543,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 551,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 292,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 384,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 497,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 493,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 329778,
            "range": "± 1634",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 416010,
            "range": "± 1187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 418810,
            "range": "± 1613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16247164,
            "range": "± 132878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3570,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15112,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5850,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19543,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17408,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41110,
            "range": "± 1732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3386,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 536,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1486907,
            "range": "± 2357",
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
          "id": "33bfff372251c5fc648d00dd51a2fa2707278645",
          "message": "Fix build.",
          "timestamp": "2022-01-06T23:29:11+08:00",
          "tree_id": "83c17d44c4a39cfaf82181560dc8367dcdb7f495",
          "url": "https://github.com/schungx/rhai/commit/33bfff372251c5fc648d00dd51a2fa2707278645"
        },
        "date": 1641521889330,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 303304,
            "range": "± 69634",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 133,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 127,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 214,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1228,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1243,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5856680,
            "range": "± 12969",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 443,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 463,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17396,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16464,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 499,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 885,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1679106,
            "range": "± 3330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3239192,
            "range": "± 6685",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2628510,
            "range": "± 8726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18723,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7011,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1621,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1659,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 375,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 408,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1038,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1033,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 924,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1324,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 529,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 547,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 296,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 373,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 495,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 481,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 332956,
            "range": "± 3729",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 415701,
            "range": "± 3069",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 414131,
            "range": "± 1946",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16251771,
            "range": "± 52869",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3635,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14997,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5974,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19235,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17142,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41071,
            "range": "± 829",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3343,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 527,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1480651,
            "range": "± 4757",
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
          "id": "a267ac5e543969473769dab03e084f81f62d6ed0",
          "message": "Split Engine into eval folder.",
          "timestamp": "2022-01-07T11:43:47+08:00",
          "tree_id": "48693bdaa305620a43d3867587ceb5ee49dbfcd6",
          "url": "https://github.com/schungx/rhai/commit/a267ac5e543969473769dab03e084f81f62d6ed0"
        },
        "date": 1641527778935,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 296053,
            "range": "± 38931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 136,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 146,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 239,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1410,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1369,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5787898,
            "range": "± 1221620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 500,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 529,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19015,
            "range": "± 2476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17533,
            "range": "± 1702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 471,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 830,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 60,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 64,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 60,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1612949,
            "range": "± 399302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3029324,
            "range": "± 485943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2515955,
            "range": "± 333949",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18161,
            "range": "± 3749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6648,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1728,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1736,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 402,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 463,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1079,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1147,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1031,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1453,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 621,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 601,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 319,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 419,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 507,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 495,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 374620,
            "range": "± 53682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 473547,
            "range": "± 96691",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 444705,
            "range": "± 51942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17034598,
            "range": "± 2083434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4018,
            "range": "± 568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16634,
            "range": "± 1577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6003,
            "range": "± 790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19878,
            "range": "± 1964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17874,
            "range": "± 1824",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42788,
            "range": "± 6435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3511,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 573,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1584143,
            "range": "± 140456",
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
          "id": "047e65223d01f7c66e42cea78ea79f36be77c3bb",
          "message": "Fix builds.",
          "timestamp": "2022-01-07T12:19:01+08:00",
          "tree_id": "fde8ce157c8a37d151aedda17109d5b5c0c208b7",
          "url": "https://github.com/schungx/rhai/commit/047e65223d01f7c66e42cea78ea79f36be77c3bb"
        },
        "date": 1641529640075,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 287429,
            "range": "± 58689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 138,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 130,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 221,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1367,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1300,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6199553,
            "range": "± 530772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 444,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 476,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16500,
            "range": "± 2841",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16839,
            "range": "± 6910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 455,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 859,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 64,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 72,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 63,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1603106,
            "range": "± 216106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3064205,
            "range": "± 556954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2570098,
            "range": "± 326409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17840,
            "range": "± 2068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7018,
            "range": "± 1508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1495,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1528,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 350,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 441,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1207,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1065,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 933,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1773,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 581,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 598,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 300,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 378,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 463,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 425,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 311597,
            "range": "± 57901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 409298,
            "range": "± 113744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 395996,
            "range": "± 66737",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 15638122,
            "range": "± 1710597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3516,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14974,
            "range": "± 3000",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5638,
            "range": "± 1690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18714,
            "range": "± 1574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16284,
            "range": "± 5222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38309,
            "range": "± 6922",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3094,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 529,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1421985,
            "range": "± 175561",
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
          "id": "afb651d0aa27198e752c3b295d9e95473d44bf7a",
          "message": "Support converting literal FnPtr.",
          "timestamp": "2022-01-08T14:00:41+08:00",
          "tree_id": "dcdb15fa9dce93e68f780d77f96b25f4d1ef1b52",
          "url": "https://github.com/schungx/rhai/commit/afb651d0aa27198e752c3b295d9e95473d44bf7a"
        },
        "date": 1641624419275,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 346424,
            "range": "± 44797",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 165,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 162,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 259,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1405,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1439,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7011589,
            "range": "± 1068556",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 505,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 527,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20766,
            "range": "± 2454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19747,
            "range": "± 3743",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 574,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1052,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 76,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 75,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 79,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2047222,
            "range": "± 258136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3801543,
            "range": "± 380126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3162113,
            "range": "± 168850",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22631,
            "range": "± 3301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8313,
            "range": "± 863",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1874,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1857,
            "range": "± 562",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 458,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 482,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1212,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1203,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1222,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1637,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 713,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 682,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 335,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 437,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 561,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 528,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 399368,
            "range": "± 47322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 503007,
            "range": "± 58015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 506698,
            "range": "± 62499",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19433981,
            "range": "± 1686535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4300,
            "range": "± 583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17711,
            "range": "± 4148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6956,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 23148,
            "range": "± 2785",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 20155,
            "range": "± 2039",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45658,
            "range": "± 3013",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3831,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 672,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1832574,
            "range": "± 323263",
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
          "id": "2afbfd366290bbcb2bb7860fb338c8249ad15cff",
          "message": "Add opcodes engine to Expr evaluation.",
          "timestamp": "2022-01-08T15:06:31+08:00",
          "tree_id": "cb649488e0c7f96a784f4f8cc6b8fdc68d89ee96",
          "url": "https://github.com/schungx/rhai/commit/2afbfd366290bbcb2bb7860fb338c8249ad15cff"
        },
        "date": 1641626209865,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 357612,
            "range": "± 26348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 188,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 173,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 274,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1741,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1684,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7215332,
            "range": "± 810599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 668,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 705,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 21441,
            "range": "± 2954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 20554,
            "range": "± 2100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 645,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1163,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 78,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 80,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2137387,
            "range": "± 193462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4002301,
            "range": "± 346628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3455261,
            "range": "± 461750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24038,
            "range": "± 4306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8668,
            "range": "± 799",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2378,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2324,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 514,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 550,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1374,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1299,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1508,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1739,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 700,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 701,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 370,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 486,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 617,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 629,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 441264,
            "range": "± 65259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 532882,
            "range": "± 68680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 519531,
            "range": "± 67170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22842438,
            "range": "± 1703533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4689,
            "range": "± 1239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 19421,
            "range": "± 2518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 7416,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 24435,
            "range": "± 3164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 21479,
            "range": "± 2088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 48488,
            "range": "± 2980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 4065,
            "range": "± 458",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 757,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1894986,
            "range": "± 124447",
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
          "id": "e3ed3a22a157a8cd041a6a10502d0d70da488966",
          "message": "Improve opcode efficiency.",
          "timestamp": "2022-01-08T18:25:02+08:00",
          "tree_id": "e9b2137297a528c647823b2b3444760f7b86a8d8",
          "url": "https://github.com/schungx/rhai/commit/e3ed3a22a157a8cd041a6a10502d0d70da488966"
        },
        "date": 1641638117000,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 303688,
            "range": "± 2172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 138,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 130,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 222,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1440,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1471,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5700680,
            "range": "± 5015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 546,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 561,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17769,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16466,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 509,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1037,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 62,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 63,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1623517,
            "range": "± 1776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3269174,
            "range": "± 80609",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2794609,
            "range": "± 6476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19151,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7198,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1893,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1904,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 418,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 447,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1087,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1066,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1034,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1637,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 563,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 545,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 295,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 390,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 502,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 467,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 338623,
            "range": "± 2912",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 415249,
            "range": "± 21541",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 425869,
            "range": "± 3150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19476844,
            "range": "± 61353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3576,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14901,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5711,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19450,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17196,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40843,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3257,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 522,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1485944,
            "range": "± 4299",
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
          "id": "08e846d5b502cbe12ac5fdb4773b9574ade4ff6a",
          "message": "Do not inline eval_expr.",
          "timestamp": "2022-01-08T23:24:42+08:00",
          "tree_id": "87b80b29d103edc8420537d140cede5411f61e28",
          "url": "https://github.com/schungx/rhai/commit/08e846d5b502cbe12ac5fdb4773b9574ade4ff6a"
        },
        "date": 1641656098562,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 340504,
            "range": "± 93747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 151,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 160,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 245,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1564,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1597,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6994294,
            "range": "± 995905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 633,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 658,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18647,
            "range": "± 3153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 19880,
            "range": "± 5470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 572,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1146,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 76,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 70,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1922103,
            "range": "± 369035",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3558355,
            "range": "± 664792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3068340,
            "range": "± 552273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20222,
            "range": "± 3209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7607,
            "range": "± 1301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2067,
            "range": "± 704",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2203,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 495,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 574,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1228,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1190,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1111,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1928,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 656,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 654,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 327,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 420,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 539,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 535,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 378361,
            "range": "± 118164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 457249,
            "range": "± 72444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 475953,
            "range": "± 84186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20428913,
            "range": "± 3407434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4112,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16591,
            "range": "± 3966",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6494,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21901,
            "range": "± 4356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18777,
            "range": "± 1963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47522,
            "range": "± 10435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3556,
            "range": "± 600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 604,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1770322,
            "range": "± 366319",
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
          "id": "ee0edd3f6f0c97dd02ca1f58116c9124008676d0",
          "message": "Do not inline eval_expr.",
          "timestamp": "2022-01-09T12:44:47+08:00",
          "tree_id": "e724b1f52835699493b8853eb23c59fc9ea03e74",
          "url": "https://github.com/schungx/rhai/commit/ee0edd3f6f0c97dd02ca1f58116c9124008676d0"
        },
        "date": 1641704196802,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 360097,
            "range": "± 26002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 164,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 158,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 254,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1687,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1718,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6906708,
            "range": "± 1093103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 652,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 657,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20564,
            "range": "± 2008",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18641,
            "range": "± 1106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 548,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1167,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 78,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 76,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2019082,
            "range": "± 37479",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3663642,
            "range": "± 134430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3101111,
            "range": "± 126086",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20915,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8255,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2215,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2324,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 492,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 515,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1122,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1134,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1224,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1949,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 670,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 661,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 354,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 442,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 582,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 539,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 389113,
            "range": "± 15266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 492933,
            "range": "± 33256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 494603,
            "range": "± 41459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20107945,
            "range": "± 930057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4251,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17221,
            "range": "± 1406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6668,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21847,
            "range": "± 1282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19761,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47982,
            "range": "± 2889",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3801,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 621,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1795752,
            "range": "± 55757",
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
          "id": "e4e2bb33569679412288b62aee97df88f4f3ecd9",
          "message": "Fix builds.",
          "timestamp": "2022-01-09T12:44:24+08:00",
          "tree_id": "3495ba796f74eff80eb5751e843b64f89693f1ef",
          "url": "https://github.com/schungx/rhai/commit/e4e2bb33569679412288b62aee97df88f4f3ecd9"
        },
        "date": 1641704299597,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 319444,
            "range": "± 76411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 145,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 150,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 251,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1292,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1312,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6855662,
            "range": "± 1392531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 468,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 481,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18132,
            "range": "± 2908",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16830,
            "range": "± 2169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 537,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 995,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 69,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1852133,
            "range": "± 238146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3511881,
            "range": "± 582193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2900790,
            "range": "± 387368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19901,
            "range": "± 3056",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7502,
            "range": "± 1839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1641,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1820,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 382,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 431,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1130,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1173,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1032,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1565,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 599,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 579,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 298,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 401,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 522,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 476,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 380469,
            "range": "± 66545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_array",
            "value": 445620,
            "range": "± 78645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_blob",
            "value": 456056,
            "range": "± 76015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17667488,
            "range": "± 2325232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3882,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15589,
            "range": "± 2594",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6190,
            "range": "± 1195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20803,
            "range": "± 3776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17691,
            "range": "± 3405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41423,
            "range": "± 7945",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3490,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 562,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1581560,
            "range": "± 367057",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
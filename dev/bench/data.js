window.BENCHMARK_DATA = {
  "lastUpdate": 1602742238939,
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
          "id": "ee3781e86e0c000abf04585b6113ce71580901f1",
          "message": "Simplify error handling code.",
          "timestamp": "2020-08-31T11:46:32+08:00",
          "tree_id": "c8f2986fb3e9ec9bb21fb2220cdce08a27bf2be2",
          "url": "https://github.com/schungx/rhai/commit/ee3781e86e0c000abf04585b6113ce71580901f1"
        },
        "date": 1598846173631,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 138919,
            "range": "± 1172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 93,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 0",
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
            "value": 2556,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2398,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7853366,
            "range": "± 15613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 720,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 756,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16000,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13521,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 370,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 686,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 944,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2414999,
            "range": "± 5905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3315977,
            "range": "± 9020",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2871372,
            "range": "± 3385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2561,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2597,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 465,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 520,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 928,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 991,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 358,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 357,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 236,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 341,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 639,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 416,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 504819,
            "range": "± 2495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26512000,
            "range": "± 84736",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2759,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12219,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3850,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15100,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14625,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34685,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2720,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 383,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1942685,
            "range": "± 6637",
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
          "id": "91b4f8a6bc7dcfeeb81137d271efc20da224cbff",
          "message": "Fix no-std build.",
          "timestamp": "2020-08-31T12:09:52+08:00",
          "tree_id": "e04bc60a6867c3462ce33c9142ae01d6dde21f9e",
          "url": "https://github.com/schungx/rhai/commit/91b4f8a6bc7dcfeeb81137d271efc20da224cbff"
        },
        "date": 1598847221244,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 135554,
            "range": "± 7812",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 271,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2515,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2362,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7874004,
            "range": "± 263144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 717,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 769,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15579,
            "range": "± 858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13099,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 372,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 675,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 75,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 925,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2550999,
            "range": "± 708988",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3409732,
            "range": "± 41967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2959034,
            "range": "± 338837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2535,
            "range": "± 2067",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2632,
            "range": "± 1567",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 467,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 522,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 920,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 983,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 356,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 355,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 239,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 349,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 660,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 421,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 504587,
            "range": "± 11810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26500150,
            "range": "± 1611862",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2823,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11967,
            "range": "± 1764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3887,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15157,
            "range": "± 670",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14616,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34484,
            "range": "± 2330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2754,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 386,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1977441,
            "range": "± 356500",
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
          "id": "6dac069c156de333b505d1255497337f24b6f87f",
          "message": "Merge pull request #47 from jhwgh1968/plugin_doc_updates\n\nBook updates for Plugins",
          "timestamp": "2020-09-01T14:26:32+08:00",
          "tree_id": "d5694ffb7bb2efc431b8e1ddd6d3617386333aae",
          "url": "https://github.com/schungx/rhai/commit/6dac069c156de333b505d1255497337f24b6f87f"
        },
        "date": 1598941960210,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 141030,
            "range": "± 42481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 85,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 294,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2554,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2398,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8021772,
            "range": "± 847422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 726,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 758,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15789,
            "range": "± 4392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13375,
            "range": "± 6314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 387,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 694,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 935,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2400591,
            "range": "± 415162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3266604,
            "range": "± 652560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2886154,
            "range": "± 486007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2535,
            "range": "± 953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2578,
            "range": "± 1012",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 471,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 518,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 939,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 993,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 355,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 360,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 241,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 336,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 642,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 412,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 504287,
            "range": "± 120282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26046742,
            "range": "± 2193493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2753,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12249,
            "range": "± 1037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3821,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15046,
            "range": "± 731",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14608,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34828,
            "range": "± 2841",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2686,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 376,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1932258,
            "range": "± 67940",
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
          "id": "ce00ce77f0b92e25769b5884db3fffadd50773cb",
          "message": "Merge pull request #48 from jhwgh1968/export_visibility_attrs\n\nImplement export_* attributes for macros",
          "timestamp": "2020-09-02T16:05:34+08:00",
          "tree_id": "4e7c60fadd51f6bd83befc40228b50e834a6d067",
          "url": "https://github.com/schungx/rhai/commit/ce00ce77f0b92e25769b5884db3fffadd50773cb"
        },
        "date": 1599034047390,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 94705,
            "range": "± 19300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 58,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 56,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 189,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2044,
            "range": "± 787",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1660,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5692649,
            "range": "± 936106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 507,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 539,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 10780,
            "range": "± 3839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9124,
            "range": "± 1816",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 262,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 475,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 59,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 654,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 49,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1778185,
            "range": "± 376776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2409048,
            "range": "± 366058",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2101736,
            "range": "± 374256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1756,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1775,
            "range": "± 503",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 328,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 356,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 639,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 682,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 247,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 261,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 165,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 237,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 458,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 292,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 351251,
            "range": "± 76805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19268149,
            "range": "± 2538709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 1880,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8377,
            "range": "± 2981",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2612,
            "range": "± 918",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10305,
            "range": "± 2010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10431,
            "range": "± 8602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 25486,
            "range": "± 7741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1834,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 255,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1516344,
            "range": "± 429075",
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
          "id": "2737fe8aa3b6a491b9a1420a9540ff35eab1719c",
          "message": "Merge pull request #49 from jhwgh1968/export_prefix_fix\n\nFix for export_prefix attribute on module macros",
          "timestamp": "2020-09-03T13:15:29+08:00",
          "tree_id": "a670e8f7f9e270f559f9605244bbf7f0fdfe46df",
          "url": "https://github.com/schungx/rhai/commit/2737fe8aa3b6a491b9a1420a9540ff35eab1719c"
        },
        "date": 1599110453922,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 142067,
            "range": "± 8066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 85,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 80,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 274,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2593,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2411,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7803813,
            "range": "± 331653",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 716,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 743,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15510,
            "range": "± 1198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13451,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 373,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 678,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 932,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2393572,
            "range": "± 83117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3283013,
            "range": "± 118988",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2863587,
            "range": "± 108850",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2542,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2577,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 466,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 512,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 937,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 980,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 348,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 352,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 240,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 342,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 685,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 420,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 505775,
            "range": "± 15426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26350657,
            "range": "± 739174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2777,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12058,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3836,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15419,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14408,
            "range": "± 839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34742,
            "range": "± 1687",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2730,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 362,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1967188,
            "range": "± 89733",
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
          "id": "ae953315fe0835616459c3cf107a0fc10807973b",
          "message": "Refine plugins doc.",
          "timestamp": "2020-09-04T15:42:31+08:00",
          "tree_id": "5d545bec106a20abdb01020519828daa77605c07",
          "url": "https://github.com/schungx/rhai/commit/ae953315fe0835616459c3cf107a0fc10807973b"
        },
        "date": 1599205782799,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 143747,
            "range": "± 13153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 102,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 78,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 292,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2677,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2522,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8079540,
            "range": "± 730871",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 710,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 749,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15578,
            "range": "± 2723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13150,
            "range": "± 1407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 386,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 736,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 966,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2362449,
            "range": "± 135441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3400505,
            "range": "± 279055",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2924401,
            "range": "± 237061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2580,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2645,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 471,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 510,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 954,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1007,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 372,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 370,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 245,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 366,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 695,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 436,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 515580,
            "range": "± 40683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29355523,
            "range": "± 2578280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2776,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12194,
            "range": "± 759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3791,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14589,
            "range": "± 1435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14170,
            "range": "± 1359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34630,
            "range": "± 2355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2640,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 386,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1976469,
            "range": "± 164724",
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
          "distinct": false,
          "id": "99b822863093178c378b4ef03d86b8347c66e3a7",
          "message": "Use smallvec/union for nightly builds.",
          "timestamp": "2020-09-05T17:55:35+08:00",
          "tree_id": "54364be735c310fd6021c2a29bc6c6553f900a67",
          "url": "https://github.com/schungx/rhai/commit/99b822863093178c378b4ef03d86b8347c66e3a7"
        },
        "date": 1599389504497,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 130584,
            "range": "± 19162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 78,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 85,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 268,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2455,
            "range": "± 677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2106,
            "range": "± 592",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7523054,
            "range": "± 2035798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 761,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 672,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14752,
            "range": "± 4617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11918,
            "range": "± 3665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 323,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 616,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 62,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 1037,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 58,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2131592,
            "range": "± 605116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3733206,
            "range": "± 926433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2888278,
            "range": "± 738002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 3092,
            "range": "± 1010",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2624,
            "range": "± 742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 402,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 483,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 881,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 878,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 357,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 336,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 273,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 348,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 588,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 386,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 602751,
            "range": "± 132692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26990187,
            "range": "± 6899150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3001,
            "range": "± 1200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11451,
            "range": "± 3315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3320,
            "range": "± 950",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14839,
            "range": "± 5244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16015,
            "range": "± 6281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32285,
            "range": "± 8773",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2437,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 351,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1778367,
            "range": "± 533012",
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
          "distinct": false,
          "id": "d527ef7dbfb1cae37090978016a463f32a891864",
          "message": "Remove SC from codegen authors, add jhwgh1968 to Rhai authors.",
          "timestamp": "2020-09-09T09:12:28+08:00",
          "tree_id": "cac662ac97dfac7b26e9bb0275cf17d183adc465",
          "url": "https://github.com/schungx/rhai/commit/d527ef7dbfb1cae37090978016a463f32a891864"
        },
        "date": 1599615384637,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 146614,
            "range": "± 24421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 82,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 303,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2737,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2563,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8327656,
            "range": "± 1233678",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 731,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 768,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16223,
            "range": "± 1492",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13739,
            "range": "± 1305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 393,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 718,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 973,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2461688,
            "range": "± 142357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3532452,
            "range": "± 218354",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3004950,
            "range": "± 594831",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2624,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2650,
            "range": "± 714",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 487,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 521,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 981,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1030,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 383,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 379,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 247,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 357,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 692,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 447,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 533086,
            "range": "± 58544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29621444,
            "range": "± 2106017",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2818,
            "range": "± 433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12710,
            "range": "± 1073",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3996,
            "range": "± 600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15682,
            "range": "± 1907",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15438,
            "range": "± 1104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34465,
            "range": "± 9702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2762,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 385,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1990064,
            "range": "± 197519",
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
          "id": "36fe02558e5e8f18a6918cee7f45f59345077d1d",
          "message": "Fix tests output.",
          "timestamp": "2020-09-11T22:45:15+08:00",
          "tree_id": "eb049e3c30a879e9601d206fb86eea45b174262e",
          "url": "https://github.com/schungx/rhai/commit/36fe02558e5e8f18a6918cee7f45f59345077d1d"
        },
        "date": 1599835763822,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 140589,
            "range": "± 20462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 84,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 80,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 265,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2528,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2362,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7774401,
            "range": "± 956748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 721,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 741,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16058,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13695,
            "range": "± 1826",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 381,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 677,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 932,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2472970,
            "range": "± 259815",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3376623,
            "range": "± 360636",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2885518,
            "range": "± 120695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2573,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2645,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 476,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 503,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 947,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 995,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 340,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 359,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 242,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 350,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 658,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 427,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 509833,
            "range": "± 64597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26230326,
            "range": "± 2566861",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2819,
            "range": "± 1174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12889,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3614,
            "range": "± 611",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15451,
            "range": "± 1392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15118,
            "range": "± 990",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36252,
            "range": "± 2656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2809,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 352,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1966679,
            "range": "± 229634",
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
          "id": "b311688fee00292bb0563d72ac8c7e680aaf31ba",
          "message": "Fix test.",
          "timestamp": "2020-09-11T22:56:19+08:00",
          "tree_id": "7cde433ac9780782b39f42681bb32cd5c66e7096",
          "url": "https://github.com/schungx/rhai/commit/b311688fee00292bb0563d72ac8c7e680aaf31ba"
        },
        "date": 1599837056019,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 120408,
            "range": "± 30781",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 71,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 66,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 249,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2278,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2093,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7120643,
            "range": "± 431968",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 585,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 657,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14265,
            "range": "± 1703",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11393,
            "range": "± 2365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 321,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 576,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 63,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 796,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 57,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2103579,
            "range": "± 217478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3023623,
            "range": "± 363535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2582333,
            "range": "± 398531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2306,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2273,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 410,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 426,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 834,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 838,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 327,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 316,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 226,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 315,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 580,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 376,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 450599,
            "range": "± 59142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25107844,
            "range": "± 1650238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2360,
            "range": "± 652",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10656,
            "range": "± 1147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3330,
            "range": "± 640",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12674,
            "range": "± 2456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12381,
            "range": "± 2813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30880,
            "range": "± 3481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2352,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 329,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1738535,
            "range": "± 267810",
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
          "distinct": false,
          "id": "5879f467d8a51f07ab70c261282e179de2d8af08",
          "message": "Merge pull request #55 from jhwgh1968/getters_setters\n\nReorganize get/set/index code into FnSpecialAccess",
          "timestamp": "2020-09-13T17:37:28+08:00",
          "tree_id": "359163e06f5c5ed9542d48f040c3f1d128494416",
          "url": "https://github.com/schungx/rhai/commit/5879f467d8a51f07ab70c261282e179de2d8af08"
        },
        "date": 1599991307804,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 151567,
            "range": "± 22716",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 114,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 83,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 298,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2690,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2564,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8503342,
            "range": "± 665334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 722,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 756,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15738,
            "range": "± 2645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13337,
            "range": "± 1047",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 420,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 701,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 75,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 1057,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2493421,
            "range": "± 169590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3578915,
            "range": "± 349688",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2970484,
            "range": "± 179554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2672,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2730,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 499,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 527,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1106,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1006,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 388,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 387,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 255,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 369,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 715,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 454,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 533086,
            "range": "± 51448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 30166969,
            "range": "± 2462051",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2752,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12099,
            "range": "± 1517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3923,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15475,
            "range": "± 2365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14753,
            "range": "± 1444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36848,
            "range": "± 5256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2798,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 391,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2047903,
            "range": "± 394729",
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
          "id": "db59aed14ecb19fe9ab21fba2cdbb06ade12f09b",
          "message": "Fix bug in optimizer for if statements with empty true blocks.",
          "timestamp": "2020-09-14T22:24:55+08:00",
          "tree_id": "b77dafef6e87f9e632835c2797a6e0468d0c234e",
          "url": "https://github.com/schungx/rhai/commit/db59aed14ecb19fe9ab21fba2cdbb06ade12f09b"
        },
        "date": 1600093863660,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 147175,
            "range": "± 13346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 299,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2791,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2623,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8479272,
            "range": "± 555077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 777,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 822,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16392,
            "range": "± 1517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13598,
            "range": "± 1372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 414,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 743,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 1044,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 83,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2464218,
            "range": "± 171090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3546914,
            "range": "± 236546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3023954,
            "range": "± 260213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2666,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2730,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 496,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 538,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1012,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1060,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 394,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 390,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 256,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 376,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 710,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 460,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 548185,
            "range": "± 53420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 30334990,
            "range": "± 2198551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2906,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12653,
            "range": "± 863",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3944,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15752,
            "range": "± 1263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15676,
            "range": "± 1441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36929,
            "range": "± 1776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2976,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 414,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2071693,
            "range": "± 108783",
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
          "id": "88e788208b9f50730e55f752959c219a80a78c00",
          "message": "Merge pull request #57 from Eliah-Lakhin/set-fn-4-mut-bug\n\nFixes bug in Module::set_fn_4_mut",
          "timestamp": "2020-09-15T11:24:16+08:00",
          "tree_id": "c0106a32f3a29a2c03691ab917d138a4d7c2810b",
          "url": "https://github.com/schungx/rhai/commit/88e788208b9f50730e55f752959c219a80a78c00"
        },
        "date": 1600140743498,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 129279,
            "range": "± 22125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 77,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 68,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 268,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2496,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2234,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7175176,
            "range": "± 1109811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 621,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 636,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13449,
            "range": "± 2434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11083,
            "range": "± 2374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 344,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 654,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 62,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 883,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 61,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2126654,
            "range": "± 377632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3318850,
            "range": "± 696333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2574003,
            "range": "± 420856",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2345,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2250,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 401,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 443,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 867,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 921,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 359,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 333,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 308,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 582,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 377,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 446670,
            "range": "± 87669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25437769,
            "range": "± 4555950",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2352,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10808,
            "range": "± 2270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3344,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12504,
            "range": "± 2514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12755,
            "range": "± 2241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 29598,
            "range": "± 6716",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2395,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 343,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1694932,
            "range": "± 319710",
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
          "id": "29124a8543632c2b3e32a48e3cdfc9f349ed2568",
          "message": "Restore benchmark.yml.",
          "timestamp": "2020-09-15T12:14:57+08:00",
          "tree_id": "14b42a973f14c6b15a010c2c1f0aa915876bc824",
          "url": "https://github.com/schungx/rhai/commit/29124a8543632c2b3e32a48e3cdfc9f349ed2568"
        },
        "date": 1600143611079,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 146067,
            "range": "± 1764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 85,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 269,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2550,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2390,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7903014,
            "range": "± 12529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 719,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 776,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15965,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13687,
            "range": "± 1600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 378,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 679,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 936,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2450891,
            "range": "± 6832",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3512617,
            "range": "± 13830",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3032493,
            "range": "± 13047",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2532,
            "range": "± 2368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2584,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 466,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 512,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 966,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 995,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 362,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 363,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 243,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 349,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 659,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 436,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 516212,
            "range": "± 99197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26567963,
            "range": "± 107403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2758,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12237,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3812,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14982,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14644,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35094,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2716,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 377,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1968043,
            "range": "± 9723",
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
          "id": "b0d86d8bf2effa2ec65f438685374fb7bcab22be",
          "message": "Revert \"Delete benchmark.yml\"\n\nThis reverts commit 83a2b401075d1ad508e9f76f1b34241e4def0e42.",
          "timestamp": "2020-09-15T12:23:57+08:00",
          "tree_id": "926f6a30c103ae6e31aceb97c6c1a6ff41afb1c4",
          "url": "https://github.com/schungx/rhai/commit/b0d86d8bf2effa2ec65f438685374fb7bcab22be"
        },
        "date": 1600144229898,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 135006,
            "range": "± 17654",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 76,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 74,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 274,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2457,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2311,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7646544,
            "range": "± 886131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 661,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 689,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13954,
            "range": "± 2677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12210,
            "range": "± 1680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 363,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 632,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 65,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 886,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 62,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2212657,
            "range": "± 389618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3157864,
            "range": "± 411374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2720392,
            "range": "± 380865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2328,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2340,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 438,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 479,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 908,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 947,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 358,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 354,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 243,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 336,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 650,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 419,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 525101,
            "range": "± 41302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27493944,
            "range": "± 5337664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2594,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12132,
            "range": "± 1610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3558,
            "range": "± 529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14229,
            "range": "± 4909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13326,
            "range": "± 1605",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35316,
            "range": "± 6567",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2716,
            "range": "± 454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 331,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1720016,
            "range": "± 274968",
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
          "id": "aed70db303e7db9dea5298404691334287757adc",
          "message": "Revert \"Delete benchmark.yml\"\n\nThis reverts commit d547562c14df13f32ae4876f5b3b30cec4276ac3.",
          "timestamp": "2020-09-15T12:30:40+08:00",
          "tree_id": "926f6a30c103ae6e31aceb97c6c1a6ff41afb1c4",
          "url": "https://github.com/schungx/rhai/commit/aed70db303e7db9dea5298404691334287757adc"
        },
        "date": 1600144638469,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 136755,
            "range": "± 18853",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 79,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 72,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 248,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2314,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2163,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7174499,
            "range": "± 823992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 641,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 690,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14310,
            "range": "± 1771",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11978,
            "range": "± 1045",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 346,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 611,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 854,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2243840,
            "range": "± 200382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2985737,
            "range": "± 383772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2477589,
            "range": "± 243790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2287,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2310,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 432,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 464,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 903,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 921,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 334,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 345,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 226,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 327,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 607,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 396,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 473522,
            "range": "± 58491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25402505,
            "range": "± 2425102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2493,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11214,
            "range": "± 1392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3460,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13798,
            "range": "± 1649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13422,
            "range": "± 1832",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31762,
            "range": "± 3607",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2430,
            "range": "± 238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 337,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1842359,
            "range": "± 231657",
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
          "id": "b795ce9f45f1344f37f3bdcb46210e8c51cb95b4",
          "message": "Refine docs.",
          "timestamp": "2020-09-18T11:52:23+08:00",
          "tree_id": "3aeb9b5c4d0e6bdbb69fedb1aad344019c2edfb2",
          "url": "https://github.com/schungx/rhai/commit/b795ce9f45f1344f37f3bdcb46210e8c51cb95b4"
        },
        "date": 1600401390153,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 110677,
            "range": "± 33523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 93,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 78,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 279,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2500,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2339,
            "range": "± 812",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7825452,
            "range": "± 878835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 713,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 739,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15071,
            "range": "± 718",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13154,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 371,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 674,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 911,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2370916,
            "range": "± 80199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3266859,
            "range": "± 147650",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2797717,
            "range": "± 108644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2470,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2517,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 463,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 505,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 922,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 971,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 357,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 353,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 235,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 340,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 641,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 419,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 513996,
            "range": "± 31691",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26131100,
            "range": "± 1030146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2698,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12044,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3777,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14948,
            "range": "± 910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14362,
            "range": "± 584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35782,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2700,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 366,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1966624,
            "range": "± 59965",
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
          "id": "39546b70533d09f6158a4a6222e84127701cecbc",
          "message": "Enable &str and String parameters in module functions.",
          "timestamp": "2020-09-19T18:12:23+08:00",
          "tree_id": "0ad46166319ec04ae1253fe66824048237a57b08",
          "url": "https://github.com/schungx/rhai/commit/39546b70533d09f6158a4a6222e84127701cecbc"
        },
        "date": 1600511595654,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 106159,
            "range": "± 24320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 72,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 63,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 240,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2127,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2022,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6566690,
            "range": "± 1069901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 565,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 598,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12291,
            "range": "± 2232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9686,
            "range": "± 2943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 302,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 521,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 51,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 713,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 56,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2250070,
            "range": "± 301649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2854113,
            "range": "± 703464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2392364,
            "range": "± 533768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2059,
            "range": "± 837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2506,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 442,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 421,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 777,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 791,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 315,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 295,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 186,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 284,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 588,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 338,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 406716,
            "range": "± 73842",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23076606,
            "range": "± 2294710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2220,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10222,
            "range": "± 3485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3149,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11428,
            "range": "± 2824",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13031,
            "range": "± 3394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33894,
            "range": "± 7314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2776,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 393,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1961236,
            "range": "± 282674",
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
          "distinct": false,
          "id": "a49b58002a4a67517b6f2cc14431cdf510b80318",
          "message": "Fix doc tests.",
          "timestamp": "2020-09-20T15:55:11+08:00",
          "tree_id": "91c40c5a601c9e843d94baa97a15d4051ac29cdf",
          "url": "https://github.com/schungx/rhai/commit/a49b58002a4a67517b6f2cc14431cdf510b80318"
        },
        "date": 1600589590421,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 106618,
            "range": "± 9412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 89,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 68,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 236,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2192,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2059,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6842046,
            "range": "± 1111031",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 607,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 627,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13754,
            "range": "± 2473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11619,
            "range": "± 2076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 320,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 579,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 65,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 793,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 64,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2071657,
            "range": "± 236312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2844362,
            "range": "± 377774",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2417019,
            "range": "± 319603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2467,
            "range": "± 2656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2229,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 395,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 434,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 795,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 878,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 304,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 304,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 205,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 295,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 566,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 364,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 452456,
            "range": "± 72651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22623040,
            "range": "± 2748578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2327,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10115,
            "range": "± 1205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3233,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12801,
            "range": "± 1618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12244,
            "range": "± 1819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31483,
            "range": "± 8683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2260,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 324,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1779659,
            "range": "± 280474",
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
          "id": "e89cec2829273aa0453d29e244fd89ea48e80f7e",
          "message": "Revert \"Delete benchmark.yml\"\n\nThis reverts commit 44416ecb05181726e2e80de488945d583aad5b3f.",
          "timestamp": "2020-09-20T18:42:17+08:00",
          "tree_id": "91c40c5a601c9e843d94baa97a15d4051ac29cdf",
          "url": "https://github.com/schungx/rhai/commit/e89cec2829273aa0453d29e244fd89ea48e80f7e"
        },
        "date": 1600598908713,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 111127,
            "range": "± 19665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 85,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 75,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 285,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2680,
            "range": "± 623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2498,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7932308,
            "range": "± 1068546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 727,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 739,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15601,
            "range": "± 2984",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13110,
            "range": "± 2138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 387,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 693,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 71,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 939,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2296513,
            "range": "± 304803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3283860,
            "range": "± 499985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2840979,
            "range": "± 306665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2526,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2532,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 459,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 494,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 926,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1005,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 366,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 362,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 251,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 360,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 691,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 430,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 510913,
            "range": "± 91660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 31210151,
            "range": "± 2751410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2836,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12556,
            "range": "± 1345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3721,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14347,
            "range": "± 1989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13743,
            "range": "± 2138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33825,
            "range": "± 5865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2672,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 384,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1894408,
            "range": "± 218607",
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
          "id": "748d4d2f36731d816e8ba10ca4e1279cac91bdbf",
          "message": "Merge pull request #59 from jhwgh1968/rusfmt_ci\n\nNew CI Job for Formatting",
          "timestamp": "2020-09-21T09:24:03+08:00",
          "tree_id": "2a333e366eb819b405528bd25757455b87b3237f",
          "url": "https://github.com/schungx/rhai/commit/748d4d2f36731d816e8ba10ca4e1279cac91bdbf"
        },
        "date": 1600651698367,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 93425,
            "range": "± 11761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 61,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 217,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2134,
            "range": "± 1066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1877,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6472056,
            "range": "± 1196322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 562,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 633,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12646,
            "range": "± 2700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10801,
            "range": "± 2413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 324,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 558,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 56,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 786,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 55,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1945576,
            "range": "± 502176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2721947,
            "range": "± 370287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2349003,
            "range": "± 567101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2017,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2082,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 375,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 381,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 743,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 861,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 302,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 294,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 191,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 287,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 561,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 352,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 439986,
            "range": "± 78733",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23300399,
            "range": "± 3179752",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2211,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9395,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3157,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11711,
            "range": "± 2684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11497,
            "range": "± 2328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 26948,
            "range": "± 5631",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2319,
            "range": "± 780",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 326,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1530702,
            "range": "± 361777",
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
          "id": "83f9df2852f9288eb603b06fcd53b0cb715cf839",
          "message": "Fix op-assignment overrides.",
          "timestamp": "2020-09-21T16:15:52+08:00",
          "tree_id": "a77baabed9c43d61a19aaa7877cbf72c9efe8dee",
          "url": "https://github.com/schungx/rhai/commit/83f9df2852f9288eb603b06fcd53b0cb715cf839"
        },
        "date": 1600676361088,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 91092,
            "range": "± 27225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 68,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 62,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 208,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1928,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1818,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6312011,
            "range": "± 1149849",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 517,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 569,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12386,
            "range": "± 5186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9847,
            "range": "± 2313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 286,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 511,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 56,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 714,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 51,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1960219,
            "range": "± 373078",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2962140,
            "range": "± 793250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2515732,
            "range": "± 636886",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2011,
            "range": "± 686",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1979,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 375,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 412,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 767,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 685,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 266,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 273,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 189,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 294,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 491,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 340,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 405834,
            "range": "± 103345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21007004,
            "range": "± 3882531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2149,
            "range": "± 705",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11034,
            "range": "± 2874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3439,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12165,
            "range": "± 3871",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10469,
            "range": "± 2277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 25006,
            "range": "± 7540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1863,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 292,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1486968,
            "range": "± 245261",
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
          "id": "8095ebc9e4a162e3cefe99dbb9635c822b6e49a8",
          "message": "Remove unused imports.",
          "timestamp": "2020-09-21T18:00:46+08:00",
          "tree_id": "c4a5ecd894909bcc78d4ab100b514c8bf4cf2147",
          "url": "https://github.com/schungx/rhai/commit/8095ebc9e4a162e3cefe99dbb9635c822b6e49a8"
        },
        "date": 1600682909244,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 93862,
            "range": "± 20821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 66,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 59,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 236,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2073,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1810,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6428657,
            "range": "± 1576322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 587,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 617,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 11442,
            "range": "± 2742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9841,
            "range": "± 2328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 277,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 562,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 57,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 766,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2026403,
            "range": "± 475315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2917223,
            "range": "± 497162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2736979,
            "range": "± 928192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2606,
            "range": "± 710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2651,
            "range": "± 909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 475,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 519,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 978,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1037,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 389,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 324,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 260,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 380,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 712,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 486,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 547502,
            "range": "± 67596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 31449776,
            "range": "± 2372583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2897,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12364,
            "range": "± 1957",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3977,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14940,
            "range": "± 2417",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14160,
            "range": "± 1905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34850,
            "range": "± 6571",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2643,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 381,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2027909,
            "range": "± 234082",
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
          "id": "870ff812037dfc32f53ba986d896b9c6ec22d57f",
          "message": "Remove diag_test.",
          "timestamp": "2020-09-22T12:14:38+08:00",
          "tree_id": "7afdb9abe287b0c34d00daa883b6caa879b48034",
          "url": "https://github.com/schungx/rhai/commit/870ff812037dfc32f53ba986d896b9c6ec22d57f"
        },
        "date": 1600749125578,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 115522,
            "range": "± 9274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 81,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 79,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 263,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2538,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2323,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7830724,
            "range": "± 336887",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 713,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 764,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15758,
            "range": "± 3085",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13370,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 376,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 674,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 930,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2404598,
            "range": "± 89725",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3435322,
            "range": "± 129398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3064338,
            "range": "± 109654",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2491,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2553,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 465,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 503,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 930,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 984,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 351,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 356,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 234,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 347,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 654,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 426,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 501885,
            "range": "± 48623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26010206,
            "range": "± 694899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2803,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12009,
            "range": "± 953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3672,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14370,
            "range": "± 934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14292,
            "range": "± 647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34950,
            "range": "± 2067",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2732,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 363,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1942723,
            "range": "± 86667",
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
          "id": "4719a4ccee3e44c58687aa384add61cedc865b66",
          "message": "Update dependencies.",
          "timestamp": "2020-09-22T17:58:04+08:00",
          "tree_id": "050cc2bbc1bf9137068d5831012e0de23e59b682",
          "url": "https://github.com/schungx/rhai/commit/4719a4ccee3e44c58687aa384add61cedc865b66"
        },
        "date": 1600769032109,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 128191,
            "range": "± 30629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 81,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 321,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2545,
            "range": "± 729",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2400,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8202946,
            "range": "± 1314165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 755,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 810,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15085,
            "range": "± 2250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14505,
            "range": "± 5381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 407,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 742,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 68,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 918,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 65,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2353111,
            "range": "± 351871",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3577089,
            "range": "± 516008",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3116961,
            "range": "± 450457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2529,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2580,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 462,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 565,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1037,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 974,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 360,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 404,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 267,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 387,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 740,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 472,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 572962,
            "range": "± 121994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29939965,
            "range": "± 4319641",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2676,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11779,
            "range": "± 3970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3709,
            "range": "± 1013",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14181,
            "range": "± 3041",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14217,
            "range": "± 2921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33518,
            "range": "± 8828",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2922,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 365,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2151752,
            "range": "± 454439",
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
          "id": "e7566da7d2001547473c44ada76ebd65ca4bf4cc",
          "message": "Fix no_std build.",
          "timestamp": "2020-09-22T18:06:36+08:00",
          "tree_id": "4f4e79fa664a44dabc1bcde4f87025a8bfc3fd29",
          "url": "https://github.com/schungx/rhai/commit/e7566da7d2001547473c44ada76ebd65ca4bf4cc"
        },
        "date": 1600769707216,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 121815,
            "range": "± 18981",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 91,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 82,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 298,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2671,
            "range": "± 529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2534,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8421631,
            "range": "± 1138469",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 742,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 794,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15514,
            "range": "± 2306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13275,
            "range": "± 2011",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 392,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 700,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 1025,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2444070,
            "range": "± 366943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3737551,
            "range": "± 320724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3125666,
            "range": "± 387764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2626,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2587,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 498,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 549,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 968,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1018,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 378,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 370,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 243,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 374,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 698,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 439,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 525834,
            "range": "± 48663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 30021264,
            "range": "± 2821374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2808,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12273,
            "range": "± 1430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3912,
            "range": "± 419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14824,
            "range": "± 2625",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14678,
            "range": "± 2295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34777,
            "range": "± 4096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2640,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 388,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1998001,
            "range": "± 210747",
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
          "id": "5a37497a2282960576ff68e4f8471e418e9a4760",
          "message": "Flatten type groups and types in parentheses.",
          "timestamp": "2020-09-22T21:29:44+08:00",
          "tree_id": "bc8e5bdd276bd62e54fa939dcc20a003c6cf89bf",
          "url": "https://github.com/schungx/rhai/commit/5a37497a2282960576ff68e4f8471e418e9a4760"
        },
        "date": 1600781836534,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 116905,
            "range": "± 11314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 89,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 296,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2685,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2516,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8488316,
            "range": "± 734617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 719,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 772,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16746,
            "range": "± 954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14178,
            "range": "± 2735",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 394,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 699,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 971,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2504873,
            "range": "± 109118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3728730,
            "range": "± 628183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3239122,
            "range": "± 229301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2633,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2591,
            "range": "± 2611",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 482,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 526,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 989,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1030,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 382,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 381,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 250,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 374,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 695,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 464,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 547360,
            "range": "± 99904",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 30719612,
            "range": "± 2123591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2872,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12323,
            "range": "± 837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3980,
            "range": "± 1169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15277,
            "range": "± 1367",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15379,
            "range": "± 1357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36003,
            "range": "± 2711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2767,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 409,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2074504,
            "range": "± 124072",
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
          "id": "235ad66d2b3d9731d2f79e11f75cb797083f5de6",
          "message": "Flatten types in functions.",
          "timestamp": "2020-09-22T22:19:21+08:00",
          "tree_id": "703ad9b217f84e16c21f432f81933f7b2dc2b4ed",
          "url": "https://github.com/schungx/rhai/commit/235ad66d2b3d9731d2f79e11f75cb797083f5de6"
        },
        "date": 1600784833722,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 106884,
            "range": "± 4052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 80,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 265,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2519,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2352,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8076699,
            "range": "± 373024",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 712,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 755,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15346,
            "range": "± 720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13395,
            "range": "± 897",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 364,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 667,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 907,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2342697,
            "range": "± 112502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3385371,
            "range": "± 125253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3012537,
            "range": "± 120082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2519,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2526,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 455,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 500,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 907,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 970,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 358,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 360,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 237,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 345,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 634,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 421,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 499452,
            "range": "± 19568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26184140,
            "range": "± 885715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2741,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11901,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3793,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14503,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14161,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34052,
            "range": "± 1420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2710,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 358,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1914443,
            "range": "± 61347",
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
          "id": "035b9cb839d0ee9f83c0a602f891634c04eaf937",
          "message": "Avoid &mut ImmutableString.",
          "timestamp": "2020-09-22T22:45:11+08:00",
          "tree_id": "7d3f60dcdef5b08a8d7cb3761c87f8226abef6cd",
          "url": "https://github.com/schungx/rhai/commit/035b9cb839d0ee9f83c0a602f891634c04eaf937"
        },
        "date": 1600786245812,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 122151,
            "range": "± 35673",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 336,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 3030,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2810,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 9155183,
            "range": "± 1837618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 808,
            "range": "± 1266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 862,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15384,
            "range": "± 1324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13132,
            "range": "± 3240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 390,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 752,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 75,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 1060,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 75,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2568094,
            "range": "± 313723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3865332,
            "range": "± 543407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3425982,
            "range": "± 853231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2917,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2941,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 505,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 561,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1072,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1129,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 398,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 399,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 261,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 395,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 717,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 471,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 563125,
            "range": "± 80285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 32912877,
            "range": "± 4773083",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2978,
            "range": "± 508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12704,
            "range": "± 2153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4220,
            "range": "± 681",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16247,
            "range": "± 1909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15522,
            "range": "± 2386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38922,
            "range": "± 6403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2740,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 419,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2148446,
            "range": "± 480175",
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
          "distinct": false,
          "id": "4e0f8870259ce6eb21cafb454332c3a8c5a4cbdd",
          "message": "Merge branch 'master' into plugins",
          "timestamp": "2020-09-23T12:00:15+08:00",
          "tree_id": "da09ee5988e48d97b62b018c66749fd18c88e115",
          "url": "https://github.com/schungx/rhai/commit/4e0f8870259ce6eb21cafb454332c3a8c5a4cbdd"
        },
        "date": 1600834035760,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 113003,
            "range": "± 12943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 80,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 272,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2549,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2391,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7514402,
            "range": "± 459972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 714,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 765,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15251,
            "range": "± 913",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13178,
            "range": "± 1122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 379,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 691,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 949,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2362152,
            "range": "± 233236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3185525,
            "range": "± 332383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2760833,
            "range": "± 296397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2378,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2499,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 417,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 470,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 846,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 974,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 359,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 363,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 236,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 347,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 643,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 378,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 487438,
            "range": "± 59459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24575340,
            "range": "± 3090854",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2513,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11256,
            "range": "± 1292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3424,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12502,
            "range": "± 1355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11999,
            "range": "± 1752",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30570,
            "range": "± 5160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2248,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 310,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1610765,
            "range": "± 286694",
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
          "id": "39433164f22f7fd7d4291896f89f053316698a63",
          "message": "Fix no_float build.",
          "timestamp": "2020-09-23T12:06:17+08:00",
          "tree_id": "50dd92033fba8933df0f0fb2d78eb74a4fea8b49",
          "url": "https://github.com/schungx/rhai/commit/39433164f22f7fd7d4291896f89f053316698a63"
        },
        "date": 1600834185698,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 111736,
            "range": "± 8354",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 77,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 267,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2553,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2387,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7599731,
            "range": "± 286318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 718,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 771,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15520,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13331,
            "range": "± 649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 379,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 695,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 931,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 72,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2422857,
            "range": "± 80671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3366603,
            "range": "± 102488",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2942907,
            "range": "± 80086",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2539,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2572,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 465,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 510,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 950,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 996,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 365,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 364,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 239,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 347,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 652,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 425,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 527011,
            "range": "± 129752",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26990903,
            "range": "± 260052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2792,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12295,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3840,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15065,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14633,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34705,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2657,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 372,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1971514,
            "range": "± 45428",
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
          "id": "d91d983c742c922fa39f09c4679c6886267444fa",
          "message": "Enable dots on numbers to parse as method calls.",
          "timestamp": "2020-09-23T22:48:28+08:00",
          "tree_id": "664041064bbbcfd035beb81a3e3340454d527c80",
          "url": "https://github.com/schungx/rhai/commit/d91d983c742c922fa39f09c4679c6886267444fa"
        },
        "date": 1600914930100,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 108392,
            "range": "± 14172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 84,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 79,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 294,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2742,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2516,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8221445,
            "range": "± 818651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 726,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 775,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14838,
            "range": "± 2169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12746,
            "range": "± 1395",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 380,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 669,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 942,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2300099,
            "range": "± 250814",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3459374,
            "range": "± 312583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2922141,
            "range": "± 423913",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2501,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2536,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 464,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 503,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 962,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 992,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 379,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 364,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 238,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 348,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 676,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 427,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 523282,
            "range": "± 61877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28937597,
            "range": "± 2175234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2778,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11922,
            "range": "± 1981",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3732,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14365,
            "range": "± 1811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14748,
            "range": "± 1403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35075,
            "range": "± 3304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2660,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 413,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1960252,
            "range": "± 483504",
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
          "id": "c4ec93080e58eb1f48ca4042e35f018ef209e1d3",
          "message": "New FileModuleResolver.",
          "timestamp": "2020-09-24T22:50:28+08:00",
          "tree_id": "f3427f2cd23f7681dfad5eb276e9d77ac50db40f",
          "url": "https://github.com/schungx/rhai/commit/c4ec93080e58eb1f48ca4042e35f018ef209e1d3"
        },
        "date": 1600959514505,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 106010,
            "range": "± 20537",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 78,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 74,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 272,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2380,
            "range": "± 475",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2293,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7175007,
            "range": "± 643143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 633,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 684,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14819,
            "range": "± 2820",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12160,
            "range": "± 2051",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 342,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 628,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 63,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 850,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 61,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2225648,
            "range": "± 356403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3375169,
            "range": "± 537045",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2697279,
            "range": "± 351801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2408,
            "range": "± 563",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2289,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 417,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 472,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 847,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1010,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 361,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 348,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 221,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 334,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 624,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 410,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 477354,
            "range": "± 87963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26797931,
            "range": "± 2997892",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2525,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11551,
            "range": "± 1464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3697,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14592,
            "range": "± 1351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14061,
            "range": "± 1291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31721,
            "range": "± 4853",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2532,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 376,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1747328,
            "range": "± 230166",
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
          "id": "6a53c446d3c46dd254bbe920c65c9a026ae676f4",
          "message": "Fix no_function build.",
          "timestamp": "2020-09-24T23:32:54+08:00",
          "tree_id": "8720259664cf805e33d27adc978584b6f750c784",
          "url": "https://github.com/schungx/rhai/commit/6a53c446d3c46dd254bbe920c65c9a026ae676f4"
        },
        "date": 1600961933075,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 122212,
            "range": "± 14306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 93,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 92,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 322,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2777,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2562,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8159537,
            "range": "± 1015302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 705,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 771,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16335,
            "range": "± 3379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13816,
            "range": "± 1400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 388,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 713,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 976,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2390616,
            "range": "± 310258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3480492,
            "range": "± 542740",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3049045,
            "range": "± 296060",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2599,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2633,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 488,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 507,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 969,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1017,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 388,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 384,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 253,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 370,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 682,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 464,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 529037,
            "range": "± 87762",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29834149,
            "range": "± 1941790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2867,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12557,
            "range": "± 2408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4014,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14637,
            "range": "± 1941",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14801,
            "range": "± 1743",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35390,
            "range": "± 3654",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2867,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 403,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2030277,
            "range": "± 133803",
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
          "id": "93f53fa41766cc3da910ac80e501eee9ef76af67",
          "message": "Refactor module.rs into files structure.",
          "timestamp": "2020-09-25T10:59:21+08:00",
          "tree_id": "81ec2ca1f5227bc6b4e552203c95160c2ec3a8bf",
          "url": "https://github.com/schungx/rhai/commit/93f53fa41766cc3da910ac80e501eee9ef76af67"
        },
        "date": 1601002939423,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 112249,
            "range": "± 1218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 271,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2611,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2422,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7890338,
            "range": "± 674504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 715,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 767,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15801,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13561,
            "range": "± 1610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 383,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 694,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 983,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2510109,
            "range": "± 444051",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3457835,
            "range": "± 232646",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3028816,
            "range": "± 436643",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2545,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2568,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 468,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 514,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 934,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 993,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 360,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 361,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 243,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 351,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 664,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 437,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 520663,
            "range": "± 84974",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27947936,
            "range": "± 2179262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2851,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12262,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3853,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14959,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14398,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35364,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2667,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 378,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1964374,
            "range": "± 11735",
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
          "id": "599fe846cb78dafdc70233cb5d538a1d795bd393",
          "message": "Add complete_namespace to Module::eval_ast_as_new.",
          "timestamp": "2020-09-25T18:07:39+08:00",
          "tree_id": "f8970904d666de81e8099debb3c3ff35c014d200",
          "url": "https://github.com/schungx/rhai/commit/599fe846cb78dafdc70233cb5d538a1d795bd393"
        },
        "date": 1601030487444,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 114169,
            "range": "± 18083",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 87,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 265,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2481,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2287,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7450060,
            "range": "± 599761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 685,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 726,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14901,
            "range": "± 1157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12571,
            "range": "± 1256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 368,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 647,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 885,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 65,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2363974,
            "range": "± 159121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3353265,
            "range": "± 204734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2838575,
            "range": "± 203077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2459,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2426,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 445,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 513,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 888,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 961,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 339,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 351,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 230,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 324,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 640,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 399,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 503794,
            "range": "± 36976",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25091009,
            "range": "± 1442958",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2629,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11610,
            "range": "± 1119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3861,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13898,
            "range": "± 1122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13828,
            "range": "± 1221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33370,
            "range": "± 2854",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2529,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 368,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1881644,
            "range": "± 163214",
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
          "id": "f406fc0ac0c870d3b2df0c7d265a2ad858825e6d",
          "message": "Fix function calls.",
          "timestamp": "2020-09-25T19:07:24+08:00",
          "tree_id": "88b063b4bb8fb435f5c40d681671a1b9a8004932",
          "url": "https://github.com/schungx/rhai/commit/f406fc0ac0c870d3b2df0c7d265a2ad858825e6d"
        },
        "date": 1601032247809,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 119936,
            "range": "± 2062",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 292,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2714,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2527,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8134300,
            "range": "± 5146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 743,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 798,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16333,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14125,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 395,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 717,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 77,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 988,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2561493,
            "range": "± 2904",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3530514,
            "range": "± 4821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3092963,
            "range": "± 2648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2676,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2719,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 485,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 535,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 977,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1043,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 379,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 380,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 248,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 364,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 687,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 446,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 543310,
            "range": "± 1672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28802862,
            "range": "± 31427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2960,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12839,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3998,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16020,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15328,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37866,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2868,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 386,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2058437,
            "range": "± 5009",
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
          "id": "39bbff878ced1da61dd7f6b2662a257a96df41b4",
          "message": "Fix doc test.",
          "timestamp": "2020-09-25T20:00:49+08:00",
          "tree_id": "4d8d29958377e389786fea3df2ed439dd066871c",
          "url": "https://github.com/schungx/rhai/commit/39bbff878ced1da61dd7f6b2662a257a96df41b4"
        },
        "date": 1601035867477,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 97620,
            "range": "± 12920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 74,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 77,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 243,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2155,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2067,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6652363,
            "range": "± 811680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 614,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 666,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13406,
            "range": "± 2090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11737,
            "range": "± 1289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 318,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 587,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 60,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 805,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 61,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2109696,
            "range": "± 298759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2825332,
            "range": "± 518567",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2491382,
            "range": "± 308615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2098,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2198,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 398,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 451,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 802,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 868,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 312,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 305,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 201,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 290,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 567,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 381,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 444403,
            "range": "± 54836",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23705369,
            "range": "± 3438116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2439,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10612,
            "range": "± 1335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3281,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13180,
            "range": "± 1983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12395,
            "range": "± 1850",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31243,
            "range": "± 4823",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2323,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 317,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1690630,
            "range": "± 297757",
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
          "id": "da9aa602565e50f0b67327362884a0a0d857b616",
          "message": "Wrap file module functions in ErrorInModule.",
          "timestamp": "2020-09-25T20:24:03+08:00",
          "tree_id": "4c9d3bf0666e6fb5244fe14f7ff6251ac1a8adee",
          "url": "https://github.com/schungx/rhai/commit/da9aa602565e50f0b67327362884a0a0d857b616"
        },
        "date": 1601037133273,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 106626,
            "range": "± 8355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 75,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 264,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2375,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2248,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7180869,
            "range": "± 490494",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 659,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 718,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14535,
            "range": "± 1467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12540,
            "range": "± 1443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 356,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 648,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 67,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 853,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 65,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2302147,
            "range": "± 192623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3184964,
            "range": "± 261798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2730267,
            "range": "± 300405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2374,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2594,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 451,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 469,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 902,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 964,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 340,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 353,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 221,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 332,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 628,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 405,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 482695,
            "range": "± 40657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25872539,
            "range": "± 3020667",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2660,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11535,
            "range": "± 2994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3604,
            "range": "± 984",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14389,
            "range": "± 2882",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14087,
            "range": "± 3116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33618,
            "range": "± 5626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2484,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 350,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1870743,
            "range": "± 117288",
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
          "id": "6b13e266b911733d1797c750aca01c87fe724fc8",
          "message": "Allow actual function name that is the same as a #[rhai_fn(name = \"...\")] rename.",
          "timestamp": "2020-09-25T23:07:18+08:00",
          "tree_id": "e96622ac63d66254df244e70a5da5a366f0f96a0",
          "url": "https://github.com/schungx/rhai/commit/6b13e266b911733d1797c750aca01c87fe724fc8"
        },
        "date": 1601046754359,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 114427,
            "range": "± 23140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 80,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 297,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2889,
            "range": "± 396",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2671,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 8057595,
            "range": "± 1415755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 699,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 751,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17126,
            "range": "± 2851",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13263,
            "range": "± 1450",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 379,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 690,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 71,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 960,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 74,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2567125,
            "range": "± 559291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3429255,
            "range": "± 260129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2961491,
            "range": "± 638771",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2790,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2585,
            "range": "± 543",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 507,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 511,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1042,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1010,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 411,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 373,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 271,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 370,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 686,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 438,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 522902,
            "range": "± 54709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29256417,
            "range": "± 4295233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2810,
            "range": "± 334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11946,
            "range": "± 3116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4044,
            "range": "± 972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16190,
            "range": "± 3159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14112,
            "range": "± 2664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38765,
            "range": "± 6317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2931,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1976689,
            "range": "± 150278",
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
          "id": "a2551a4650b76abe9998b3a36852a938419dfc4e",
          "message": "Check rename collisions with special names.",
          "timestamp": "2020-09-26T00:30:30+08:00",
          "tree_id": "ba8175e8aa4cded4c5ef645166e903da1ba70a55",
          "url": "https://github.com/schungx/rhai/commit/a2551a4650b76abe9998b3a36852a938419dfc4e"
        },
        "date": 1601051624878,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 113003,
            "range": "± 1937",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 271,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2644,
            "range": "± 958",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2427,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7917915,
            "range": "± 98509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 720,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 766,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15811,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13709,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 381,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 690,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 949,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2454730,
            "range": "± 71067",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3437883,
            "range": "± 368963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3063191,
            "range": "± 63333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2559,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2596,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 468,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 513,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 940,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 995,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 361,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 362,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 239,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 351,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 659,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 438,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 517634,
            "range": "± 5054",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27433407,
            "range": "± 415504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2836,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12128,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3893,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15083,
            "range": "± 765",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14444,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35353,
            "range": "± 647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2690,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 373,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1981510,
            "range": "± 17427",
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
          "id": "371b7fd00bb738863e4b105abc4cd96f355c642c",
          "message": "Fix tests.",
          "timestamp": "2020-09-26T00:46:47+08:00",
          "tree_id": "c48fa36584dff8b236a2a874934553c030de9e67",
          "url": "https://github.com/schungx/rhai/commit/371b7fd00bb738863e4b105abc4cd96f355c642c"
        },
        "date": 1601052928820,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 111289,
            "range": "± 19313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 72,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 70,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 270,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2558,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2300,
            "range": "± 582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6978433,
            "range": "± 1593506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 681,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 660,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14236,
            "range": "± 2371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12489,
            "range": "± 2163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 359,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 582,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 60,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 775,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 55,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1921052,
            "range": "± 353723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2816000,
            "range": "± 433508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2448752,
            "range": "± 384203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2230,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2536,
            "range": "± 756",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 410,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 423,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 802,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 850,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 308,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 336,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 206,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 334,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 637,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 398,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 502962,
            "range": "± 145757",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26628429,
            "range": "± 5145604",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2585,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9834,
            "range": "± 2013",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3444,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12053,
            "range": "± 2177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11955,
            "range": "± 1714",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 28758,
            "range": "± 5392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2315,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 365,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1636801,
            "range": "± 269283",
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
          "id": "e62d1cd3ff0bcee504e4a1896ffd07519bc4288d",
          "message": "Better error message for setter.",
          "timestamp": "2020-09-26T12:34:06+08:00",
          "tree_id": "375927293e26af6d9e33f63628753247c63fd3af",
          "url": "https://github.com/schungx/rhai/commit/e62d1cd3ff0bcee504e4a1896ffd07519bc4288d"
        },
        "date": 1601095263862,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 95078,
            "range": "± 20851",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 78,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 70,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 238,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2181,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1841,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6046846,
            "range": "± 897524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 565,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 633,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12453,
            "range": "± 3235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10972,
            "range": "± 3004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 283,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 507,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 55,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 698,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 52,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1805207,
            "range": "± 228037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2467867,
            "range": "± 230541",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2178323,
            "range": "± 665717",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1951,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2132,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 362,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 391,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 738,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 901,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 281,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 274,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 189,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 258,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 560,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 327,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 381517,
            "range": "± 51427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20881274,
            "range": "± 2976493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2467,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9167,
            "range": "± 1838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2849,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11259,
            "range": "± 2412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11169,
            "range": "± 2695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 26075,
            "range": "± 8899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1924,
            "range": "± 567",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 304,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1839342,
            "range": "± 386288",
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
          "id": "726b0306161b4d883fcb55f6ef8f985a286687fa",
          "message": "Implement +/- operators for timestamp.",
          "timestamp": "2020-09-26T19:45:33+08:00",
          "tree_id": "3febc38b6de488d7f179d53d0ac50dcb362595d1",
          "url": "https://github.com/schungx/rhai/commit/726b0306161b4d883fcb55f6ef8f985a286687fa"
        },
        "date": 1601121310045,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 113410,
            "range": "± 11968",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 87,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 82,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 279,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2533,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2375,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7712239,
            "range": "± 229150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 714,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 764,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15674,
            "range": "± 994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13508,
            "range": "± 2444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 373,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 679,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 978,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2387728,
            "range": "± 126555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3299561,
            "range": "± 163873",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2921422,
            "range": "± 277549",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2535,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2553,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 484,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 515,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 946,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1001,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 364,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 367,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 248,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 372,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 735,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 452,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 509601,
            "range": "± 1991",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27149561,
            "range": "± 432450",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2899,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12444,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3931,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15105,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14659,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36053,
            "range": "± 3003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2728,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 391,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1974203,
            "range": "± 39134",
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
          "id": "e1ce67adc257bb1350d2cc0d5d0c5734d786761b",
          "message": "Add TimeStamp variant.",
          "timestamp": "2020-09-27T22:15:35+08:00",
          "tree_id": "85fd854b9b663315324444f4b24850ff5d15e862",
          "url": "https://github.com/schungx/rhai/commit/e1ce67adc257bb1350d2cc0d5d0c5734d786761b"
        },
        "date": 1601216485275,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 114394,
            "range": "± 1421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 270,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2569,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2408,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7917490,
            "range": "± 7446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 721,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 765,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15674,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13572,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 384,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 708,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 953,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2462184,
            "range": "± 3093",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3459573,
            "range": "± 75195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3038964,
            "range": "± 9259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2511,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2542,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 468,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 509,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 963,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1015,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 368,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 370,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 234,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 346,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 709,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 430,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 518305,
            "range": "± 2280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27571740,
            "range": "± 54496",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2859,
            "range": "± 1330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12363,
            "range": "± 1642",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3875,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15067,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14720,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35507,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2709,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 385,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2001211,
            "range": "± 8350",
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
          "id": "f92d99216582e328cd4c6a9e31196bfd3a733ac9",
          "message": "Handle timestamps in serde.",
          "timestamp": "2020-09-27T22:34:07+08:00",
          "tree_id": "5981d54d1bc8fbd5411a108b2853d3dfe3ee5662",
          "url": "https://github.com/schungx/rhai/commit/f92d99216582e328cd4c6a9e31196bfd3a733ac9"
        },
        "date": 1601217426458,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 111226,
            "range": "± 1455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 274,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2566,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2404,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7916829,
            "range": "± 900287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 716,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 755,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15722,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13685,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 385,
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
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 955,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2464473,
            "range": "± 9384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3472726,
            "range": "± 4448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3042400,
            "range": "± 7993",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2561,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2624,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 469,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 507,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 975,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1016,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 368,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 372,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 248,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 345,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 720,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 431,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 518943,
            "range": "± 4216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27347216,
            "range": "± 3344656",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2972,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12581,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4013,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15460,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14920,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35953,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2805,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 453,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2001639,
            "range": "± 1972",
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
          "id": "5e43f2e5a4b56ea8789c2090390f287474e9ac04",
          "message": "Better error handling messages.",
          "timestamp": "2020-09-28T11:19:49+08:00",
          "tree_id": "3d940f7a1feac54beded8430c7b79d1e8702fa73",
          "url": "https://github.com/schungx/rhai/commit/5e43f2e5a4b56ea8789c2090390f287474e9ac04"
        },
        "date": 1601266501720,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 113697,
            "range": "± 3182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 82,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 270,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2294,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2155,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6957901,
            "range": "± 138463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 628,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 671,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15588,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13517,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 349,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 624,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 880,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2355453,
            "range": "± 20251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3418992,
            "range": "± 13994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2899442,
            "range": "± 7810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2426,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2459,
            "range": "± 807",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 458,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 496,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 862,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 920,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 352,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 351,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 332,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 706,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 405,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 502729,
            "range": "± 77156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25519068,
            "range": "± 1839600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2796,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12254,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3915,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14986,
            "range": "± 756",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14337,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35979,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2766,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 368,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1830593,
            "range": "± 43027",
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
          "id": "2123b0a2794b52374cf8a4a1a1c36b186432de46",
          "message": "Module::eval_ast_as_new will merge global and module namespaces if private_namespace is true.",
          "timestamp": "2020-09-28T18:53:03+08:00",
          "tree_id": "aab26339c045bd8d11e6d4a7dfde15f3d2f1668d",
          "url": "https://github.com/schungx/rhai/commit/2123b0a2794b52374cf8a4a1a1c36b186432de46"
        },
        "date": 1601291331942,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 118164,
            "range": "± 38489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 89,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 83,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 312,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2408,
            "range": "± 1246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2295,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7540575,
            "range": "± 570526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 635,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 683,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15670,
            "range": "± 2001",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13897,
            "range": "± 2503",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 384,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 681,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 939,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2386435,
            "range": "± 374865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3380434,
            "range": "± 803007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2936766,
            "range": "± 356668",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2545,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2577,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 482,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 541,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 901,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 983,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 394,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 385,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 251,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 370,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 820,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 445,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 542983,
            "range": "± 76030",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28957411,
            "range": "± 1546945",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2848,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12472,
            "range": "± 2022",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4032,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15042,
            "range": "± 3021",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14887,
            "range": "± 1214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35210,
            "range": "± 7806",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2864,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 420,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1966295,
            "range": "± 260324",
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
          "id": "64c421b3d736628da3557866a1865a3b9cddbb9c",
          "message": "Revise docs.",
          "timestamp": "2020-09-28T22:14:19+08:00",
          "tree_id": "b856e65598a3ef01f525e58d372b380b61a29065",
          "url": "https://github.com/schungx/rhai/commit/64c421b3d736628da3557866a1865a3b9cddbb9c"
        },
        "date": 1601303465324,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 126002,
            "range": "± 17747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 110,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 88,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 318,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2751,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2532,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7815858,
            "range": "± 775269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 770,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 746,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16614,
            "range": "± 2826",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14197,
            "range": "± 2215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 385,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 701,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 76,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 970,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2300604,
            "range": "± 303356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3446230,
            "range": "± 463952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2860727,
            "range": "± 396341",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2434,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2480,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 460,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 508,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 913,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 954,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 379,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 374,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 245,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 364,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 877,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 442,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 564128,
            "range": "± 72609",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29743736,
            "range": "± 2770333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2955,
            "range": "± 992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12352,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4127,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15950,
            "range": "± 1735",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15509,
            "range": "± 1450",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37748,
            "range": "± 4974",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2904,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 407,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1968337,
            "range": "± 443287",
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
          "id": "69054f1b697673323326e1e5dd6b23bf2bf9fd3d",
          "message": "Change lib to &Module.",
          "timestamp": "2020-09-29T18:17:41+08:00",
          "tree_id": "ac5df409bdf56f6c34d43619ba9ff33be6ad07e6",
          "url": "https://github.com/schungx/rhai/commit/69054f1b697673323326e1e5dd6b23bf2bf9fd3d"
        },
        "date": 1601375063775,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 118196,
            "range": "± 23450",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 82,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 275,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2308,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2153,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7077023,
            "range": "± 15970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 635,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 672,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15640,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13564,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 347,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 624,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 867,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 68,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2195731,
            "range": "± 11393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3136434,
            "range": "± 22954",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2724088,
            "range": "± 12626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2399,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2452,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 459,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 505,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 863,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 917,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 355,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 355,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 217,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 344,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 699,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 415,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 499876,
            "range": "± 2366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25380268,
            "range": "± 83810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2847,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12288,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3857,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14915,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14366,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35531,
            "range": "± 633",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2702,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 372,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1844504,
            "range": "± 7136",
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
          "id": "c7dfbd48a6793cdc0f04643223a16d448bd58b20",
          "message": "Restore call_fn_dynamic.",
          "timestamp": "2020-09-29T18:37:00+08:00",
          "tree_id": "2e0d63dfd4a59d189ae3c5a56d7cd505d00db1ea",
          "url": "https://github.com/schungx/rhai/commit/c7dfbd48a6793cdc0f04643223a16d448bd58b20"
        },
        "date": 1601376036395,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 88487,
            "range": "± 14500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 63,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 61,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 224,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1842,
            "range": "± 660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1667,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5434660,
            "range": "± 625673",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 629,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 494,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 11981,
            "range": "± 2151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9684,
            "range": "± 1218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 272,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 481,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 47,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 668,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 50,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1644599,
            "range": "± 244219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2477963,
            "range": "± 378699",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2090836,
            "range": "± 354871",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1820,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1920,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 341,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 368,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 717,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 717,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 288,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 281,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 178,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 260,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 551,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 303,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 400296,
            "range": "± 58290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21997828,
            "range": "± 5801309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2161,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9220,
            "range": "± 1992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2999,
            "range": "± 1370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11922,
            "range": "± 5141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10593,
            "range": "± 1543",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 29395,
            "range": "± 7864",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2036,
            "range": "± 715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 308,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1443422,
            "range": "± 265307",
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
          "id": "cbc3d8764a2a698ce4c785064a61065284cb8276",
          "message": "Revise docs for 0.19.0.",
          "timestamp": "2020-09-30T23:02:01+08:00",
          "tree_id": "65db09acb04d915701dc453c5a3df47caa1122bc",
          "url": "https://github.com/schungx/rhai/commit/cbc3d8764a2a698ce4c785064a61065284cb8276"
        },
        "date": 1601478649892,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 125472,
            "range": "± 30562",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 97,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 79,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 285,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2291,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2215,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6920159,
            "range": "± 875305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 618,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 627,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15031,
            "range": "± 3307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13245,
            "range": "± 1909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 349,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 629,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 67,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 884,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2169709,
            "range": "± 236168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3143733,
            "range": "± 341674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2738015,
            "range": "± 317132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2339,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2401,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 435,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 479,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 881,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 961,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 358,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 354,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 220,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 348,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 711,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 406,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 505021,
            "range": "± 64866",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27548130,
            "range": "± 3519639",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2731,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11766,
            "range": "± 1534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3778,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14043,
            "range": "± 1932",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13850,
            "range": "± 1641",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34452,
            "range": "± 4380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2674,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 368,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1816663,
            "range": "± 289459",
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
          "id": "2290c72de1449716678993bdde6054bc2d401441",
          "message": "Fix tests.",
          "timestamp": "2020-09-30T23:27:41+08:00",
          "tree_id": "320aa495ef58386054bb732bd14102365f3b4aed",
          "url": "https://github.com/schungx/rhai/commit/2290c72de1449716678993bdde6054bc2d401441"
        },
        "date": 1601479858993,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102836,
            "range": "± 26726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 78,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 69,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 319,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2050,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2012,
            "range": "± 595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6418481,
            "range": "± 1940667",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 693,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 571,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14096,
            "range": "± 21540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11490,
            "range": "± 5389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 315,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 538,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 71,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 971,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 55,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2079997,
            "range": "± 840117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2846418,
            "range": "± 1131564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2460626,
            "range": "± 770467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2138,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2228,
            "range": "± 2139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 485,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 442,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 766,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 884,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 317,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 370,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 254,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 295,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 716,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 453,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 555005,
            "range": "± 211947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25380802,
            "range": "± 6836484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2520,
            "range": "± 772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10616,
            "range": "± 5046",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4222,
            "range": "± 1545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16021,
            "range": "± 7025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12191,
            "range": "± 3830",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37453,
            "range": "± 7415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2279,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 328,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1784931,
            "range": "± 661759",
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
          "id": "45a290f0eaa113bc09b21a4a88494b3b1eb6b0bc",
          "message": "Change doc test from no_run to ignore.",
          "timestamp": "2020-09-30T23:39:46+08:00",
          "tree_id": "074d75416f2fec73fa45c9eb1b5c58349487e220",
          "url": "https://github.com/schungx/rhai/commit/45a290f0eaa113bc09b21a4a88494b3b1eb6b0bc"
        },
        "date": 1601480752024,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 117057,
            "range": "± 2884",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 271,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2310,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2139,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6974187,
            "range": "± 227959",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 631,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 670,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15559,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13504,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 349,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 628,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 872,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2204022,
            "range": "± 71063",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3094483,
            "range": "± 104950",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2697752,
            "range": "± 118129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2401,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2443,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 451,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 496,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 866,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 931,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 346,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 345,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 218,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 335,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 695,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 404,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 494880,
            "range": "± 21126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25270803,
            "range": "± 539304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2811,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11988,
            "range": "± 854",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3851,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14510,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14234,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35671,
            "range": "± 1686",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2800,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 380,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1843294,
            "range": "± 69215",
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
          "id": "07fdd1bef1258e86cfdfc8cc54eb55434635fa69",
          "message": "Fix image url link.",
          "timestamp": "2020-10-01T00:11:45+08:00",
          "tree_id": "cef74a15aed7ac3408ae6ebf513822b106e65c31",
          "url": "https://github.com/schungx/rhai/commit/07fdd1bef1258e86cfdfc8cc54eb55434635fa69"
        },
        "date": 1601519540466,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 114768,
            "range": "± 23196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 82,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 77,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 251,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2111,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2095,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6765302,
            "range": "± 860724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 597,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 655,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14841,
            "range": "± 1496",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13746,
            "range": "± 803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 329,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 598,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 67,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 867,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2043500,
            "range": "± 436465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3081486,
            "range": "± 455546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2635590,
            "range": "± 523297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2177,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2291,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 458,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 464,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 878,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 924,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 342,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 357,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 203,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 316,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 641,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 346,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 471229,
            "range": "± 42955",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23436810,
            "range": "± 2996305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2744,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10926,
            "range": "± 927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3480,
            "range": "± 419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13618,
            "range": "± 1218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13313,
            "range": "± 1260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32418,
            "range": "± 2875",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2552,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 347,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1704956,
            "range": "± 176561",
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
          "id": "d2c94ba07c1b058faaa5c1554014ff7b8ca77f32",
          "message": "Add more module tests.",
          "timestamp": "2020-10-02T14:55:02+08:00",
          "tree_id": "764451c17ac0ec51bd1382588fb6d288aac7938b",
          "url": "https://github.com/schungx/rhai/commit/d2c94ba07c1b058faaa5c1554014ff7b8ca77f32"
        },
        "date": 1601622771292,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 113721,
            "range": "± 13419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 87,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 79,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 273,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2316,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2167,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7157587,
            "range": "± 881102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 627,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 674,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15711,
            "range": "± 1859",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13500,
            "range": "± 822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 344,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 625,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 873,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2202148,
            "range": "± 142333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3152531,
            "range": "± 277299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2722545,
            "range": "± 739607",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2406,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2442,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 450,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 490,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 968,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 2043,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 865,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 916,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 350,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 346,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 224,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 341,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 719,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 413,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 497069,
            "range": "± 32121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25396201,
            "range": "± 2186341",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2829,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12102,
            "range": "± 1032",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3829,
            "range": "± 1516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14922,
            "range": "± 1108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14191,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35400,
            "range": "± 4750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2688,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1806342,
            "range": "± 101395",
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
          "id": "a72f70846f3ae709369095570820ee9e05870c07",
          "message": "Make merged namespace more efficient.",
          "timestamp": "2020-10-02T23:14:33+08:00",
          "tree_id": "38bd3a728cfb38e07aecb679c5d4857307f65468",
          "url": "https://github.com/schungx/rhai/commit/a72f70846f3ae709369095570820ee9e05870c07"
        },
        "date": 1601651986023,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 107955,
            "range": "± 16336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 76,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 80,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 260,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2178,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2021,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6891153,
            "range": "± 458175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 595,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 646,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14521,
            "range": "± 2343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11474,
            "range": "± 1993",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 327,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 577,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 64,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 837,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 62,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1978541,
            "range": "± 318483",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2882374,
            "range": "± 481147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2475403,
            "range": "± 253746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2208,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2311,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 425,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 467,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 918,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1728,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 827,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 886,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 338,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 333,
            "range": "± 36",
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
            "value": 323,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 648,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 391,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 494296,
            "range": "± 37931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23833838,
            "range": "± 2799696",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2626,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11216,
            "range": "± 1242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3482,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12947,
            "range": "± 2512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13437,
            "range": "± 1273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32768,
            "range": "± 2646",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2468,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 345,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1676206,
            "range": "± 270406",
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
          "id": "23d0f52284a82076d7579486444644e1769d2c82",
          "message": "Better error messages.",
          "timestamp": "2020-10-03T23:27:30+08:00",
          "tree_id": "cc0e30497733508a34d29d19abf5c1a8cbe546fa",
          "url": "https://github.com/schungx/rhai/commit/23d0f52284a82076d7579486444644e1769d2c82"
        },
        "date": 1601739048650,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 114770,
            "range": "± 10035",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 270,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2323,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2153,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7165091,
            "range": "± 135272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 647,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 699,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15837,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13599,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 351,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 644,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 894,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2235131,
            "range": "± 56195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3351821,
            "range": "± 113819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2911556,
            "range": "± 93189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2401,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2466,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 457,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 504,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 960,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1973,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 868,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 918,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 348,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 349,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 230,
            "range": "± 6",
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
            "value": 720,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 417,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 499639,
            "range": "± 3382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25005629,
            "range": "± 474528",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2856,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12121,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3862,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14523,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14113,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35448,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2659,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1829324,
            "range": "± 55541",
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
          "id": "0d0affd5e9f01cccbb35f9d32a35d384c94126e6",
          "message": "Eagerly evaluate built-in operators for OptimizationLevel::Simple.",
          "timestamp": "2020-10-05T10:27:31+08:00",
          "tree_id": "23f70723300db741f87bb89a4d99f2327e736993",
          "url": "https://github.com/schungx/rhai/commit/0d0affd5e9f01cccbb35f9d32a35d384c94126e6"
        },
        "date": 1601865104250,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 115122,
            "range": "± 6307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 93,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 88,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 276,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2307,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2141,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7144161,
            "range": "± 378616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 638,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 683,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15224,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13430,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 351,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 631,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 69,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2213838,
            "range": "± 36378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3138997,
            "range": "± 86879",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2685817,
            "range": "± 389968",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2498,
            "range": "± 646",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2543,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 454,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 498,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 982,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1947,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 873,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 925,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 348,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 347,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 226,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 339,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 728,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 411,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 519830,
            "range": "± 17586",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25939198,
            "range": "± 679324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2853,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12404,
            "range": "± 588",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3978,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15010,
            "range": "± 7440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15190,
            "range": "± 10563",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36629,
            "range": "± 5788",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2674,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 369,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1895744,
            "range": "± 165486",
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
          "id": "4356d02828c08c9c9b999570b4ce4c50d07f55fb",
          "message": "Fix no_object builds.",
          "timestamp": "2020-10-05T12:05:46+08:00",
          "tree_id": "a44441b618c0fa95cd9688237617d14cc747941e",
          "url": "https://github.com/schungx/rhai/commit/4356d02828c08c9c9b999570b4ce4c50d07f55fb"
        },
        "date": 1601871258645,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 114067,
            "range": "± 18219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 85,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 79,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 275,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2292,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2137,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6838815,
            "range": "± 866528",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 624,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 668,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14544,
            "range": "± 2165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13578,
            "range": "± 1800",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 342,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 616,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 66,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 63,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2234159,
            "range": "± 407143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3381499,
            "range": "± 643835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2836131,
            "range": "± 519430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2449,
            "range": "± 457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2506,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 445,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 485,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1028,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1996,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 848,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 923,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 369,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 351,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 226,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 343,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 725,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 412,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 502214,
            "range": "± 74540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26623488,
            "range": "± 3383941",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2755,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11565,
            "range": "± 1740",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4199,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15208,
            "range": "± 2156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14392,
            "range": "± 2590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35060,
            "range": "± 8920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2550,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 366,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1826243,
            "range": "± 417851",
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
          "id": "b67a743306adbbe3538bd633b9472e58fd41f2ba",
          "message": "Do not eagerly evaluate is_def_fn and is_def_var.",
          "timestamp": "2020-10-05T12:14:34+08:00",
          "tree_id": "b4a03de0e297bb938096060fa24b59b8661ad5fc",
          "url": "https://github.com/schungx/rhai/commit/b67a743306adbbe3538bd633b9472e58fd41f2ba"
        },
        "date": 1601871596251,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 96337,
            "range": "± 17378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 66,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 65,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 223,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1841,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1811,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5578508,
            "range": "± 1071506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 500,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 594,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12436,
            "range": "± 2883",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10601,
            "range": "± 3154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 289,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 521,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 52,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 52,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 49,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1696248,
            "range": "± 400091",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2543337,
            "range": "± 580701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2159252,
            "range": "± 433192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1927,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1922,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 358,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 371,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 914,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1750,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 696,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 756,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 305,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 302,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 183,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 319,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 647,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 355,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 430441,
            "range": "± 100563",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22981358,
            "range": "± 3244963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2260,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9474,
            "range": "± 2200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3103,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11288,
            "range": "± 6339",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11021,
            "range": "± 2874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 27712,
            "range": "± 5429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2059,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 289,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1497500,
            "range": "± 251626",
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
          "id": "1de44c7ecd67cc3618649a36b2c58ce6d1673ac0",
          "message": "Reserve $ symbol.",
          "timestamp": "2020-10-05T23:02:50+08:00",
          "tree_id": "50e664223c1a1647bc36ad5f72ae9acee6fdf769",
          "url": "https://github.com/schungx/rhai/commit/1de44c7ecd67cc3618649a36b2c58ce6d1673ac0"
        },
        "date": 1601912155578,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 117531,
            "range": "± 14524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 298,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2707,
            "range": "± 562",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2285,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6928414,
            "range": "± 1278796",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 624,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 672,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15381,
            "range": "± 2754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13527,
            "range": "± 2742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 354,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 625,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 68,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2288847,
            "range": "± 473884",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3238294,
            "range": "± 605169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2681831,
            "range": "± 468719",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2410,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2646,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 447,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 488,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1110,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 2270,
            "range": "± 718",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 946,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1039,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 363,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 357,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 228,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 353,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 729,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 386,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 492126,
            "range": "± 145224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25681538,
            "range": "± 2391568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3062,
            "range": "± 820",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11448,
            "range": "± 1401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3724,
            "range": "± 680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14702,
            "range": "± 2870",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14099,
            "range": "± 2559",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33003,
            "range": "± 4536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2592,
            "range": "± 433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 327,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1741517,
            "range": "± 233852",
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
          "id": "762072685d33c6f28b30e48f2c0752c26c1d0733",
          "message": "Move script optimization into separate section.",
          "timestamp": "2020-10-06T22:35:27+08:00",
          "tree_id": "e1e25e96de844d77437198d821f24fcdf462cb18",
          "url": "https://github.com/schungx/rhai/commit/762072685d33c6f28b30e48f2c0752c26c1d0733"
        },
        "date": 1602038934922,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 119542,
            "range": "± 15098",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 83,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 277,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2323,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2149,
            "range": "± 424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7376385,
            "range": "± 717582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 634,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 730,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15624,
            "range": "± 2228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13539,
            "range": "± 2138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 357,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 638,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 70,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2331507,
            "range": "± 204948",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3396888,
            "range": "± 421953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2902490,
            "range": "± 396711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2379,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2437,
            "range": "± 781",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 458,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 511,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 982,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 2075,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 872,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 923,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 347,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 345,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 215,
            "range": "± 0",
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
            "value": 698,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 401,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 520498,
            "range": "± 119851",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27085864,
            "range": "± 2099819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2847,
            "range": "± 768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13113,
            "range": "± 3129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4115,
            "range": "± 709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15655,
            "range": "± 2003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15201,
            "range": "± 2647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34884,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2672,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 395,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1863105,
            "range": "± 7176",
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
          "id": "3340760b35ce1abb6c7a65c4f977e42858c805f8",
          "message": "Fix no_std build.",
          "timestamp": "2020-10-07T11:44:06+08:00",
          "tree_id": "130147a11a94c639deac88934c5c8450a45774e9",
          "url": "https://github.com/schungx/rhai/commit/3340760b35ce1abb6c7a65c4f977e42858c805f8"
        },
        "date": 1602042698100,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 116686,
            "range": "± 15701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 81,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 77,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 287,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2357,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2192,
            "range": "± 636",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6927758,
            "range": "± 924017",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 610,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 660,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15021,
            "range": "± 3664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13072,
            "range": "± 3444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 347,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 622,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 63,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 63,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 63,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2134204,
            "range": "± 70646",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3114986,
            "range": "± 609533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2646045,
            "range": "± 193225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2337,
            "range": "± 609",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2390,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 440,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 480,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 990,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 2077,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 874,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 932,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 362,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 359,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 225,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 333,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 715,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 399,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 523061,
            "range": "± 162220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27966980,
            "range": "± 1351437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2733,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11661,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3757,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14426,
            "range": "± 1389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14570,
            "range": "± 1888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33503,
            "range": "± 12168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2562,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1841398,
            "range": "± 438215",
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
          "id": "d35c216465437b0e9b08ad0f6b0cebf872374690",
          "message": "Add README's.",
          "timestamp": "2020-10-07T22:56:21+08:00",
          "tree_id": "e2937e8654ad354f30469a5a8335a37f0a1299c8",
          "url": "https://github.com/schungx/rhai/commit/d35c216465437b0e9b08ad0f6b0cebf872374690"
        },
        "date": 1602082998039,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103605,
            "range": "± 25326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 74,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 71,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 258,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2096,
            "range": "± 839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2462,
            "range": "± 623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6480625,
            "range": "± 1849017",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 683,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 596,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16656,
            "range": "± 801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14470,
            "range": "± 1171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 310,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 542,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 61,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 55,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2292542,
            "range": "± 704322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2882447,
            "range": "± 849473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2406106,
            "range": "± 704412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2041,
            "range": "± 730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2128,
            "range": "± 478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 385,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 436,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1111,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 2265,
            "range": "± 1134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 978,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 822,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 317,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 318,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 253,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 375,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 622,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 359,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 588446,
            "range": "± 253691",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25541780,
            "range": "± 7323680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2375,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13000,
            "range": "± 7808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3628,
            "range": "± 1910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12737,
            "range": "± 5991",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13575,
            "range": "± 4031",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 29851,
            "range": "± 9086",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2319,
            "range": "± 1002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 416,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1665996,
            "range": "± 278349",
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
          "id": "b2d603ec0654e8bf437ee474fbf118a6698adba2",
          "message": "Refine Add/AddAssign for AST and Module.",
          "timestamp": "2020-10-07T23:25:08+08:00",
          "tree_id": "818b693db4edfc7f098e8301119f5c0bba793af4",
          "url": "https://github.com/schungx/rhai/commit/b2d603ec0654e8bf437ee474fbf118a6698adba2"
        },
        "date": 1602084673127,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 118168,
            "range": "± 32176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 82,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 86,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 332,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2349,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2174,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7161409,
            "range": "± 871723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 607,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 657,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16388,
            "range": "± 8313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12925,
            "range": "± 2682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 347,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 712,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 64,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 64,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 64,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2139242,
            "range": "± 227697",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3277656,
            "range": "± 647841",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2824268,
            "range": "± 555128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2389,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2691,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 454,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 497,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 985,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 2055,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 896,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 930,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 359,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 398,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 252,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 337,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 715,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 398,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 518667,
            "range": "± 147140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28557165,
            "range": "± 3879164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3059,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12914,
            "range": "± 2921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3749,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14189,
            "range": "± 3324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14556,
            "range": "± 1810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33504,
            "range": "± 13149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2544,
            "range": "± 527",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 416,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1894208,
            "range": "± 678210",
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
          "id": "1272eeb81ab8553a20684692b4e8a3dc740ada96",
          "message": "Add/remove #[inline] attributes.",
          "timestamp": "2020-10-08T22:25:50+08:00",
          "tree_id": "7bfcda65d5d7f0f7bc7facc4688773c60e4d271a",
          "url": "https://github.com/schungx/rhai/commit/1272eeb81ab8553a20684692b4e8a3dc740ada96"
        },
        "date": 1602167440556,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 88066,
            "range": "± 18179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 68,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 57,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 184,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1849,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1684,
            "range": "± 567",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5463316,
            "range": "± 990946",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 482,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 561,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 11269,
            "range": "± 4371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10406,
            "range": "± 4134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 251,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 498,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 46,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 50,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 61,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2196679,
            "range": "± 156673",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2952425,
            "range": "± 250846",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2124252,
            "range": "± 468906",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2172,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1945,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 405,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 373,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 792,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1952,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 888,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 725,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 318,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 275,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 176,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 324,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 542,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 320,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 476190,
            "range": "± 132933",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20743570,
            "range": "± 2886730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2215,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11264,
            "range": "± 3195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3420,
            "range": "± 997",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12147,
            "range": "± 2133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12147,
            "range": "± 3069",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 25326,
            "range": "± 7109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1947,
            "range": "± 677",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 282,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1778539,
            "range": "± 315864",
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
          "id": "d511aac7a4c42ee824a0054fa3f83bf79922fd59",
          "message": "Reduce max call stack size for debug.",
          "timestamp": "2020-10-08T23:00:01+08:00",
          "tree_id": "a5afa4bd28114f1796153b90dcab585c4e93d457",
          "url": "https://github.com/schungx/rhai/commit/d511aac7a4c42ee824a0054fa3f83bf79922fd59"
        },
        "date": 1602169416609,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 115045,
            "range": "± 3820",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 82,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 262,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2283,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2118,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7045286,
            "range": "± 183183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 631,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 676,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15224,
            "range": "± 674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13206,
            "range": "± 708",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 338,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 628,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 62,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 62,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 63,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2220817,
            "range": "± 73450",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3071785,
            "range": "± 101556",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2619591,
            "range": "± 75984",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2422,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2490,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 448,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 499,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 969,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1936,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 886,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 927,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 349,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 352,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 216,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 333,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 698,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 394,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 500284,
            "range": "± 16037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25403522,
            "range": "± 631146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2833,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12104,
            "range": "± 508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3905,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15046,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15003,
            "range": "± 1007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35709,
            "range": "± 2436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2686,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 356,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1814744,
            "range": "± 60041",
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
          "id": "7ede299aae8a62cec90ad6d90823ea80c591a024",
          "message": "Allow expressions in constants.",
          "timestamp": "2020-10-09T11:15:25+08:00",
          "tree_id": "489a2da72893f2226999e445bc58555dd78a23db",
          "url": "https://github.com/schungx/rhai/commit/7ede299aae8a62cec90ad6d90823ea80c591a024"
        },
        "date": 1602213961531,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 113345,
            "range": "± 4669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 76,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 256,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2293,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2086,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6999729,
            "range": "± 319725",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 622,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 666,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15287,
            "range": "± 857",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13130,
            "range": "± 980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 347,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 628,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 62,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 64,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 61,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2149505,
            "range": "± 132275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2999956,
            "range": "± 134567",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2627598,
            "range": "± 151936",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2393,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2357,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 424,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 473,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 908,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1817,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 825,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 869,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 324,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 331,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 210,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 316,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 666,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 379,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 483649,
            "range": "± 45257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24392364,
            "range": "± 1681847",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2629,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11515,
            "range": "± 1039",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3717,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14240,
            "range": "± 1141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14059,
            "range": "± 1216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33934,
            "range": "± 5745",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2610,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 334,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1791923,
            "range": "± 159218",
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
          "id": "b23966e16b40f3a523640159d312b4cb81a7ee3f",
          "message": "Clarify no capturing for constants.",
          "timestamp": "2020-10-09T13:36:48+08:00",
          "tree_id": "67b8871e41e53cfa03d36dc83972e309e1639cdc",
          "url": "https://github.com/schungx/rhai/commit/b23966e16b40f3a523640159d312b4cb81a7ee3f"
        },
        "date": 1602222270839,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 115227,
            "range": "± 13675",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 77,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 263,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2272,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2152,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6993443,
            "range": "± 671642",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 621,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 682,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15398,
            "range": "± 1730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13468,
            "range": "± 1123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 343,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 624,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 62,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 62,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 62,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2210871,
            "range": "± 126957",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3069401,
            "range": "± 407443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2661054,
            "range": "± 212995",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2418,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2441,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 454,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 494,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 972,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1979,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 867,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 940,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 350,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 346,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 212,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 325,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 692,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 399,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 488483,
            "range": "± 33860",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25977130,
            "range": "± 1938293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2818,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12353,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3821,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14969,
            "range": "± 2666",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15070,
            "range": "± 1135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34487,
            "range": "± 2481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2684,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 355,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1819627,
            "range": "± 186494",
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
          "id": "95c4ac4180cfbf1212161f1270c1a2f8d50c31b2",
          "message": "Fix no_float bug in time.",
          "timestamp": "2020-10-09T13:47:35+08:00",
          "tree_id": "f108b1e47d9e4e98544ab09e45b672ae09539915",
          "url": "https://github.com/schungx/rhai/commit/95c4ac4180cfbf1212161f1270c1a2f8d50c31b2"
        },
        "date": 1602222874605,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 119025,
            "range": "± 22223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 81,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 72,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 238,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2119,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1961,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6513206,
            "range": "± 629730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 598,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 643,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14692,
            "range": "± 1240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13311,
            "range": "± 1304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 347,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 628,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 63,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 63,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 63,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2226250,
            "range": "± 27610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3093441,
            "range": "± 171923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2689796,
            "range": "± 140647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2406,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2442,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 453,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 499,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 901,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1893,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 816,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 924,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 349,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 350,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 214,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 328,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 703,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 399,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 499012,
            "range": "± 22611",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26005642,
            "range": "± 403517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2804,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12141,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3847,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14792,
            "range": "± 627",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15157,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35073,
            "range": "± 1147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2682,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 365,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1791989,
            "range": "± 115158",
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
          "id": "dd9f58f3239b80665fd0f8bfb5873be1575651a1",
          "message": "Merge ser/de modules.",
          "timestamp": "2020-10-10T13:43:14+08:00",
          "tree_id": "8ab325440071f94ea7fac60a5b07882227a3d133",
          "url": "https://github.com/schungx/rhai/commit/dd9f58f3239b80665fd0f8bfb5873be1575651a1"
        },
        "date": 1602309693441,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 116587,
            "range": "± 6759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 82,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 74,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 262,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2307,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2121,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6995892,
            "range": "± 272164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 624,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 666,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15342,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13489,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 346,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 635,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 62,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 60,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 62,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2236315,
            "range": "± 107596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3123939,
            "range": "± 118856",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2699840,
            "range": "± 97975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2374,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2422,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 442,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 479,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 953,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1945,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 869,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 933,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 347,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 349,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 216,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 327,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 671,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 395,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 496426,
            "range": "± 26801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25536767,
            "range": "± 745062",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2789,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12349,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3884,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14927,
            "range": "± 1258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15276,
            "range": "± 1217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35270,
            "range": "± 1243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2690,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1827465,
            "range": "± 57170",
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
          "id": "c463e42987cd568d5325b9ec455f954795175c54",
          "message": "Fix serde test.",
          "timestamp": "2020-10-10T14:15:23+08:00",
          "tree_id": "f1df78e96be49d91ad43b3ff100ff97d38073ae1",
          "url": "https://github.com/schungx/rhai/commit/c463e42987cd568d5325b9ec455f954795175c54"
        },
        "date": 1602310751296,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 115844,
            "range": "± 13124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 92,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 76,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 259,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2287,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2126,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6976791,
            "range": "± 268816",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 621,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 672,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15442,
            "range": "± 748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13423,
            "range": "± 684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 351,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 636,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 62,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 61,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 61,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2208911,
            "range": "± 121670",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2995065,
            "range": "± 179078",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2647094,
            "range": "± 147695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2346,
            "range": "± 673",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2384,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 444,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 481,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 960,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1958,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 866,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 939,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 349,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 353,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 215,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 328,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 693,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 401,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 496195,
            "range": "± 45710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25676468,
            "range": "± 1085952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2810,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12014,
            "range": "± 657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3869,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14893,
            "range": "± 1622",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14873,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34883,
            "range": "± 2693",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2656,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 363,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1780414,
            "range": "± 121995",
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
          "id": "836b4de9253b06b39c4b564c26dc1bd8e9743ff6",
          "message": "Fix serde example.",
          "timestamp": "2020-10-10T15:06:59+08:00",
          "tree_id": "31f06868afa4fe93e9788d6b3882035a84bcbbeb",
          "url": "https://github.com/schungx/rhai/commit/836b4de9253b06b39c4b564c26dc1bd8e9743ff6"
        },
        "date": 1602313831648,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 117354,
            "range": "± 10767",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 81,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 76,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 275,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2293,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2128,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7069542,
            "range": "± 110423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 630,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 668,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14979,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13443,
            "range": "± 1155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 345,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 632,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 63,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 63,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 64,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2237517,
            "range": "± 73153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3155236,
            "range": "± 27500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2741167,
            "range": "± 11168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2396,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2425,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 451,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 495,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 959,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1982,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 874,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 942,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 354,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 355,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 214,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 327,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 696,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 400,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 505645,
            "range": "± 8902",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25826180,
            "range": "± 898023",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2815,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12328,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3919,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15264,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15213,
            "range": "± 808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35778,
            "range": "± 2615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2706,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 361,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1818391,
            "range": "± 49672",
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
          "id": "fd5a932611e72b5b55f46df3b0993b86d527f3f7",
          "message": "Implement variable resolver.",
          "timestamp": "2020-10-11T21:58:11+08:00",
          "tree_id": "bddf42885715b8953e73d650fa44fab94b54552d",
          "url": "https://github.com/schungx/rhai/commit/fd5a932611e72b5b55f46df3b0993b86d527f3f7"
        },
        "date": 1602425151820,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 104404,
            "range": "± 12414",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 74,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 69,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 234,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2101,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2001,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7242382,
            "range": "± 857364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 590,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 631,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14458,
            "range": "± 1000",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13115,
            "range": "± 1460",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 326,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 588,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 63,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 75,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 57,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2148654,
            "range": "± 202387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2868753,
            "range": "± 194507",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2453422,
            "range": "± 199938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2164,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2276,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 431,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 494,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 952,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1825,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 809,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 881,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 349,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 336,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 205,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 323,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 645,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 405,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 531554,
            "range": "± 32712",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25968270,
            "range": "± 1468361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2528,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11175,
            "range": "± 1069",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3550,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14033,
            "range": "± 1139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13872,
            "range": "± 1594",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31537,
            "range": "± 3183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2474,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 316,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1827205,
            "range": "± 184779",
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
          "id": "e343bcfa8faae7638e33e67aa606e6bbc2df56b3",
          "message": "Change Option<usize> to usize for variable resolver index.",
          "timestamp": "2020-10-11T22:41:26+08:00",
          "tree_id": "465ec25db8a319d50e63b723f2f010c5e4b2d9c1",
          "url": "https://github.com/schungx/rhai/commit/e343bcfa8faae7638e33e67aa606e6bbc2df56b3"
        },
        "date": 1602427751576,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 122400,
            "range": "± 10123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 81,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 77,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 274,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2312,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2166,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7574597,
            "range": "± 70068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 650,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 701,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15240,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13348,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 350,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 619,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 59,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 58,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 58,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2166512,
            "range": "± 222690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2971438,
            "range": "± 298516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2520822,
            "range": "± 289513",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2156,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2268,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 423,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 478,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 904,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1994,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 855,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 914,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 361,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 362,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 215,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 331,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 695,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 413,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 510301,
            "range": "± 32512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25798637,
            "range": "± 1020654",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2647,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12329,
            "range": "± 675",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3943,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14158,
            "range": "± 870",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14406,
            "range": "± 809",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34435,
            "range": "± 3370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2610,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 335,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1922700,
            "range": "± 96246",
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
          "id": "21b989afd53c65fc74783aff2e19525b44165881",
          "message": "Refine function call parameters size.",
          "timestamp": "2020-10-12T17:00:58+08:00",
          "tree_id": "498f413e7e6efaa08931b95a2f8693e557308ead",
          "url": "https://github.com/schungx/rhai/commit/21b989afd53c65fc74783aff2e19525b44165881"
        },
        "date": 1602495067895,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 118283,
            "range": "± 23362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 75,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 274,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2385,
            "range": "± 956",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2453,
            "range": "± 1121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7655846,
            "range": "± 977796",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 634,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 689,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14883,
            "range": "± 2349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12857,
            "range": "± 2087",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 355,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 694,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 65,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 63,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 58,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2274855,
            "range": "± 182980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3238572,
            "range": "± 615962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2709023,
            "range": "± 482147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2359,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2398,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 444,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 493,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1120,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 2140,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 977,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 956,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 420,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 376,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 261,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 351,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 713,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 465,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 584576,
            "range": "± 109836",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29264778,
            "range": "± 4194651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2963,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11835,
            "range": "± 2409",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3809,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14343,
            "range": "± 1083",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14715,
            "range": "± 3368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33699,
            "range": "± 2616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2693,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 352,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2043861,
            "range": "± 267220",
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
          "id": "6d0851de4448278f04585421a808d7c12cb934ce",
          "message": "Reverse function call parameter change.",
          "timestamp": "2020-10-12T19:36:34+08:00",
          "tree_id": "9fefa38fc0978bb25b87fd0e3692968ac11fb139",
          "url": "https://github.com/schungx/rhai/commit/6d0851de4448278f04585421a808d7c12cb934ce"
        },
        "date": 1602503095633,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 116161,
            "range": "± 4543",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 79,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 75,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 270,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2257,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2103,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7388947,
            "range": "± 304217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 634,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 698,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15326,
            "range": "± 1009",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13203,
            "range": "± 1080",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 342,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 608,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 60,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 60,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 60,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2240621,
            "range": "± 162038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2994937,
            "range": "± 216442",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2538204,
            "range": "± 155194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2291,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2282,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 432,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 490,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 935,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1910,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 813,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 894,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 347,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 361,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 213,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 332,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 692,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 406,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 522914,
            "range": "± 46212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25282503,
            "range": "± 1684449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2586,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11667,
            "range": "± 1019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3569,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13848,
            "range": "± 1156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14029,
            "range": "± 1093",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32776,
            "range": "± 2907",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2558,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 332,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1878569,
            "range": "± 182548",
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
          "id": "747fda1ec7435ca0e5aa3e3cbc1ace97f502031a",
          "message": "Add filter, map, reduce to Array.",
          "timestamp": "2020-10-12T22:49:51+08:00",
          "tree_id": "2bd28689eb44de787b8ed63c71dbafa9a6cabdf1",
          "url": "https://github.com/schungx/rhai/commit/747fda1ec7435ca0e5aa3e3cbc1ace97f502031a"
        },
        "date": 1602514842113,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 95522,
            "range": "± 10968",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 72,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 65,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 224,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1959,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1974,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6471943,
            "range": "± 867138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 569,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 659,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14408,
            "range": "± 1705",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12675,
            "range": "± 967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 328,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 600,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 60,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 59,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2262479,
            "range": "± 147893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2839038,
            "range": "± 270290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2379490,
            "range": "± 327636",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1965,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1969,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 378,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 402,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 797,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1633,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 729,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 772,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 302,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 296,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 200,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 314,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 641,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 403,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 426206,
            "range": "± 83591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23883002,
            "range": "± 3704068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2489,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11206,
            "range": "± 1266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3277,
            "range": "± 564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14614,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13763,
            "range": "± 2535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32264,
            "range": "± 3750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2411,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 280,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1648242,
            "range": "± 202554",
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
          "id": "e6667a3996ab70e8b82ddd5844cd953e1184a0d5",
          "message": "Revise docs.",
          "timestamp": "2020-10-12T23:17:22+08:00",
          "tree_id": "90eeda6e3d0fdaf66b237562b568a9e5957593ee",
          "url": "https://github.com/schungx/rhai/commit/e6667a3996ab70e8b82ddd5844cd953e1184a0d5"
        },
        "date": 1602516076429,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 115478,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 77,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 263,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2315,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2163,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7508900,
            "range": "± 583517",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 650,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 699,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15304,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13420,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 351,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 633,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 62,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 62,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 62,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2347431,
            "range": "± 70212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3198106,
            "range": "± 66683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2709278,
            "range": "± 48346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2404,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2435,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 464,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 505,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1003,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1997,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 880,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 961,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 376,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 374,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 346,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 702,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 415,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 530706,
            "range": "± 30750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26105285,
            "range": "± 728506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2690,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11837,
            "range": "± 529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3826,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14264,
            "range": "± 1820",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13982,
            "range": "± 1783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34587,
            "range": "± 2319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2732,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 345,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2012806,
            "range": "± 165288",
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
          "id": "1c86c66f1a687728f793ac478356cffbc59924fc",
          "message": "Add more functions to arrays.",
          "timestamp": "2020-10-13T10:57:29+08:00",
          "tree_id": "b360c378f40e6e5a091de47df454ca3064c319b3",
          "url": "https://github.com/schungx/rhai/commit/1c86c66f1a687728f793ac478356cffbc59924fc"
        },
        "date": 1602558420252,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 121162,
            "range": "± 28906",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 73,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 306,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2341,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2187,
            "range": "± 516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7745785,
            "range": "± 1464455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 638,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 671,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14966,
            "range": "± 5484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13173,
            "range": "± 5002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 356,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 630,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 75,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 75,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2250181,
            "range": "± 480746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3258148,
            "range": "± 427054",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2725211,
            "range": "± 422504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2624,
            "range": "± 1092",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2689,
            "range": "± 840",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 494,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 548,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 994,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1647,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 977,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 950,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 379,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 374,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 252,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 388,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 713,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 414,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 588255,
            "range": "± 199906",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 30332510,
            "range": "± 3897487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3048,
            "range": "± 1494",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13340,
            "range": "± 1529",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3782,
            "range": "± 785",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14490,
            "range": "± 6297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14646,
            "range": "± 1848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33787,
            "range": "± 8370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2812,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 395,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2237480,
            "range": "± 316609",
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
          "id": "13c4d0bbb35b42db21ee07269841ca19c3c60c71",
          "message": "Adjust precedence of in.",
          "timestamp": "2020-10-13T16:01:42+08:00",
          "tree_id": "7e462c326149cec8d83b49be2a6ba20168fffeeb",
          "url": "https://github.com/schungx/rhai/commit/13c4d0bbb35b42db21ee07269841ca19c3c60c71"
        },
        "date": 1602579809489,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 118900,
            "range": "± 1256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 78,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 266,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2326,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2171,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7496444,
            "range": "± 6578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 648,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 693,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 342,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 620,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2329028,
            "range": "± 2768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3142060,
            "range": "± 3913",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2686140,
            "range": "± 4060",
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
          "id": "3df8d6c398e1b9ad84136c99cd9ba859ef5ea8ba",
          "message": "Fix typo.",
          "timestamp": "2020-10-13T17:16:19+08:00",
          "tree_id": "e9a280320a433abee0b147fcf2807cb767105f96",
          "url": "https://github.com/schungx/rhai/commit/3df8d6c398e1b9ad84136c99cd9ba859ef5ea8ba"
        },
        "date": 1602580941971,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 116615,
            "range": "± 11020",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 80,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 74,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 277,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2379,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2154,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7588053,
            "range": "± 785660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 629,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 671,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14288,
            "range": "± 1456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12727,
            "range": "± 1617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 337,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 618,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 58,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 60,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2296435,
            "range": "± 280062",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3189591,
            "range": "± 268506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2680337,
            "range": "± 215168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2348,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2403,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 437,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 492,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 995,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1707,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 900,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1046,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 424,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 390,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 231,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 348,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 720,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 417,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 547432,
            "range": "± 73670",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29961730,
            "range": "± 2050476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2796,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11777,
            "range": "± 1470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3740,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14451,
            "range": "± 1101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15067,
            "range": "± 1509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34472,
            "range": "± 4204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2671,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2092412,
            "range": "± 198138",
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
          "id": "707ece7e80dad9f67e29d15c4e77bec83f1961c6",
          "message": "Refactor iterators API.",
          "timestamp": "2020-10-14T23:22:10+08:00",
          "tree_id": "372a5b7037afef1966e71fcb120d6ae8d326efad",
          "url": "https://github.com/schungx/rhai/commit/707ece7e80dad9f67e29d15c4e77bec83f1961c6"
        },
        "date": 1602690081072,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 125885,
            "range": "± 14301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 84,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 289,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2345,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2235,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7702076,
            "range": "± 770090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 651,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 683,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14731,
            "range": "± 2144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12794,
            "range": "± 2089",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 385,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 650,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 60,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 59,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2450975,
            "range": "± 221327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3418316,
            "range": "± 460973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2748019,
            "range": "± 279083",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2347,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2503,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 464,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 500,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1051,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1716,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 925,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 961,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 394,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 380,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 240,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 369,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 762,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 434,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 551877,
            "range": "± 37108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29816979,
            "range": "± 2492406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2743,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12224,
            "range": "± 1455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3879,
            "range": "± 503",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15135,
            "range": "± 2162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15088,
            "range": "± 2838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33914,
            "range": "± 3888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2730,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 388,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2042888,
            "range": "± 291256",
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
          "id": "3c9250b0bfd90bd9059e5ddc483a6b5d60aaac13",
          "message": "Skip wrapping if function returns Dynamicc.",
          "timestamp": "2020-10-15T13:28:22+08:00",
          "tree_id": "1b1b241871976ba7d7ba9f05aaa10c25f4ad011a",
          "url": "https://github.com/schungx/rhai/commit/3c9250b0bfd90bd9059e5ddc483a6b5d60aaac13"
        },
        "date": 1602741629745,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 120433,
            "range": "± 4475",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 81,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 75,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 261,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2301,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2100,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7540312,
            "range": "± 351502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 642,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 674,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15468,
            "range": "± 737",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13434,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 334,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 611,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 63,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 63,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 62,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2266052,
            "range": "± 101983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3141720,
            "range": "± 122493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2636500,
            "range": "± 118823",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2403,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2465,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 451,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 495,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 986,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1656,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 869,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 951,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 374,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 359,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 225,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 332,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 708,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 417,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 537951,
            "range": "± 35369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26811215,
            "range": "± 867696",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2758,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12092,
            "range": "± 1005",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3801,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14766,
            "range": "± 1083",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14512,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34569,
            "range": "± 3164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2672,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 349,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1996654,
            "range": "± 145259",
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
          "id": "8abb3c52037099cce5268714709a19d3e0c89ad2",
          "message": "Fix ui tests.",
          "timestamp": "2020-10-15T14:06:54+08:00",
          "tree_id": "a9351541e68b2922c1eee2740ea4f3465ef4060d",
          "url": "https://github.com/schungx/rhai/commit/8abb3c52037099cce5268714709a19d3e0c89ad2"
        },
        "date": 1602742237097,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 119770,
            "range": "± 3903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 69,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 261,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2066,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2099,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7714124,
            "range": "± 196892",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 647,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 690,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13415,
            "range": "± 1615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12962,
            "range": "± 1578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 351,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 629,
            "range": "± 6",
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
            "value": 62,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 62,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2349607,
            "range": "± 69206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2950721,
            "range": "± 195392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2548406,
            "range": "± 236004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2409,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2451,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 460,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 507,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1049,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1649,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 775,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 898,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 368,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 370,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 221,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 345,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 721,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 419,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 540824,
            "range": "± 28799",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26959760,
            "range": "± 1206692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2691,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11737,
            "range": "± 2402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3757,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14966,
            "range": "± 1165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15095,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35451,
            "range": "± 1195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2724,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 351,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1966873,
            "range": "± 301402",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
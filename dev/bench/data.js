window.BENCHMARK_DATA = {
  "lastUpdate": 1596529967266,
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
          "id": "175c3ccaec6c7c8a0247f87beda28bda5ba06437",
          "message": "OOP support.",
          "timestamp": "2020-06-26T10:39:18+08:00",
          "tree_id": "eb3171f32c5e285a996519673da09eeb5230e707",
          "url": "https://github.com/schungx/rhai/commit/175c3ccaec6c7c8a0247f87beda28bda5ba06437"
        },
        "date": 1593139334884,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103568,
            "range": "± 10663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 92,
            "range": "± 9",
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
            "value": 289,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2434,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2230,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6167050,
            "range": "± 555183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 662,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 690,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15914,
            "range": "± 1476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12322,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 298,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 529,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 63,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 794,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 58,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1784029,
            "range": "± 271133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2684848,
            "range": "± 200835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2279394,
            "range": "± 160591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2647,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2695,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 456,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 483,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 782,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 765,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 275,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 272,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 207,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 302,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 534,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 383,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 394236,
            "range": "± 39612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21207378,
            "range": "± 2329162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2981,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12560,
            "range": "± 1643",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3878,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14413,
            "range": "± 619",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13847,
            "range": "± 1919",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34021,
            "range": "± 881",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2411,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 361,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1570331,
            "range": "± 107405",
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
          "id": "aac04a5e537941ebc1687122cb6e610f60e65581",
          "message": "Remove modules from Scope and use separate stack.",
          "timestamp": "2020-06-27T23:56:24+08:00",
          "tree_id": "465a92535d0032f3747a67a78b1f58f8b12b53a3",
          "url": "https://github.com/schungx/rhai/commit/aac04a5e537941ebc1687122cb6e610f60e65581"
        },
        "date": 1593274179676,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 85589,
            "range": "± 17095",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 75,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 73,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 243,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2299,
            "range": "± 433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2158,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5651108,
            "range": "± 771618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 632,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 705,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12073,
            "range": "± 5455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9878,
            "range": "± 2418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 247,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 485,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 54,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 673,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 51,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1492709,
            "range": "± 324295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2350916,
            "range": "± 437008",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1920129,
            "range": "± 383075",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2269,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2253,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 391,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 401,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 678,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 671,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 245,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 237,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 183,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 265,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 470,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 328,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 320120,
            "range": "± 61582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19134162,
            "range": "± 2681366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2435,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10388,
            "range": "± 2770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3224,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11985,
            "range": "± 2998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11322,
            "range": "± 3345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 27612,
            "range": "± 5489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1867,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 298,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1326754,
            "range": "± 317618",
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
          "id": "063851a6adda77e327a7d28a33fa6f0bb76cd0b2",
          "message": "Merge branch 'tokenizer'",
          "timestamp": "2020-06-28T15:51:37+08:00",
          "tree_id": "8d8ec98b54926d6f0f6a0003febb89cd7eba4e16",
          "url": "https://github.com/schungx/rhai/commit/063851a6adda77e327a7d28a33fa6f0bb76cd0b2"
        },
        "date": 1593330918376,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 101069,
            "range": "± 6923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 92,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 280,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2433,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2219,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6308140,
            "range": "± 637231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 659,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 687,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15929,
            "range": "± 4412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12324,
            "range": "± 758",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 307,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 543,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 67,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 812,
            "range": "± 80",
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
            "value": 1807634,
            "range": "± 189808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2768093,
            "range": "± 214668",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2286468,
            "range": "± 98869",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2643,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2731,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 461,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 487,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 826,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 803,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 296,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 292,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 216,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 314,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 567,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 387,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 395743,
            "range": "± 22932",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21913676,
            "range": "± 1657449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2909,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12720,
            "range": "± 848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3955,
            "range": "± 414",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14612,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14174,
            "range": "± 1664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34546,
            "range": "± 2179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2497,
            "range": "± 246",
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
            "value": 1572721,
            "range": "± 155113",
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
          "id": "d6a08be2231b8f95809f689c1ad7867b6ac8ef61",
          "message": "Refactor.",
          "timestamp": "2020-06-29T23:55:28+08:00",
          "tree_id": "7ef56ce0a3a24c8995bb64c86eb922935b0e8e01",
          "url": "https://github.com/schungx/rhai/commit/d6a08be2231b8f95809f689c1ad7867b6ac8ef61"
        },
        "date": 1593446371049,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102238,
            "range": "± 67220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 98,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 85,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 272,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2436,
            "range": "± 507",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2326,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6551828,
            "range": "± 690086",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 698,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 749,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15530,
            "range": "± 1887",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12524,
            "range": "± 1848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 329,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 551,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 842,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 77,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2075402,
            "range": "± 157644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2973456,
            "range": "± 198159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2585537,
            "range": "± 317360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2722,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2750,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 492,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 520,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 858,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 838,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 313,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 312,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 224,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 296,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 567,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 387,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 425518,
            "range": "± 28600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22340613,
            "range": "± 2359905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2866,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12192,
            "range": "± 1108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3892,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13984,
            "range": "± 1557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13548,
            "range": "± 2037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34121,
            "range": "± 3642",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2469,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 340,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1716024,
            "range": "± 166218",
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
          "id": "e614790897346c368dd3e38f25c7a196b3d7fb28",
          "message": "Enable function pointers even under no_function.",
          "timestamp": "2020-06-30T18:34:58+08:00",
          "tree_id": "427458e3e15e5d852855b8f20a00355fa1670ee3",
          "url": "https://github.com/schungx/rhai/commit/e614790897346c368dd3e38f25c7a196b3d7fb28"
        },
        "date": 1593522225147,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 108003,
            "range": "± 18351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 94,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 300,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2708,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2524,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6796964,
            "range": "± 834924",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 726,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 789,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16303,
            "range": "± 3411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12334,
            "range": "± 1219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 349,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 613,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 928,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 79,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2127069,
            "range": "± 176651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3307386,
            "range": "± 334688",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2780803,
            "range": "± 359690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2962,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2933,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 517,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 560,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 917,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 892,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 332,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 332,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 250,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 326,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 624,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 410,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 452963,
            "range": "± 37424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25267226,
            "range": "± 3884857",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3106,
            "range": "± 635",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12711,
            "range": "± 1996",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4022,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14912,
            "range": "± 2538",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14570,
            "range": "± 2473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35294,
            "range": "± 4421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2545,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 398,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1844264,
            "range": "± 238592",
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
          "id": "467b109c23d4283392f17ba6acccc21855d8d05e",
          "message": "Move benchmark.yml to correct location.",
          "timestamp": "2020-07-04T15:43:48+08:00",
          "tree_id": "647d06f4aaa49d768f1c9fe4f5ab6f709191b8bd",
          "url": "https://github.com/schungx/rhai/commit/467b109c23d4283392f17ba6acccc21855d8d05e"
        },
        "date": 1593848892663,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 99479,
            "range": "± 7618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 92,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 268,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2441,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2265,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6578212,
            "range": "± 728762",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 691,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 733,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15429,
            "range": "± 1618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12099,
            "range": "± 800",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 327,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 592,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 857,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 78,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2051134,
            "range": "± 193715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2961468,
            "range": "± 255916",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2549822,
            "range": "± 198759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2675,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2677,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 507,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 512,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 824,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 829,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 315,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 301,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 229,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 293,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 561,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 388,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 432282,
            "range": "± 36223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22740466,
            "range": "± 1867644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2987,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12376,
            "range": "± 1155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4122,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14345,
            "range": "± 2599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13505,
            "range": "± 992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34145,
            "range": "± 2005",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2443,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 379,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1720705,
            "range": "± 118304",
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
          "id": "d626bf9f5bacfd8d8fb082b03f12fe33c60055b8",
          "message": "Refine no_function feature.",
          "timestamp": "2020-07-04T16:21:15+08:00",
          "tree_id": "dbfeb1a2fd830f941f26d2adcbe871c72cbb4b1f",
          "url": "https://github.com/schungx/rhai/commit/d626bf9f5bacfd8d8fb082b03f12fe33c60055b8"
        },
        "date": 1593851020220,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103770,
            "range": "± 8512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 281,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2610,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2421,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7037805,
            "range": "± 389246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 716,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 764,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15981,
            "range": "± 2585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12742,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 335,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 585,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 882,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 81,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2119946,
            "range": "± 108557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3078569,
            "range": "± 105003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2608947,
            "range": "± 122696",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2814,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2879,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 506,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 548,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 885,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 859,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 313,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 311,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 233,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 305,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 578,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 394,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 441856,
            "range": "± 21512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23512821,
            "range": "± 871610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2946,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12751,
            "range": "± 1527",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3947,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14542,
            "range": "± 1008",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14117,
            "range": "± 2127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35687,
            "range": "± 2144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2529,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1766464,
            "range": "± 90592",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8b5a7f6b34d9fddae4b57aa38842ffaa5ae8cb6",
          "message": "Merge pull request #15 from alvinhochun/serde\n\nAdd `serde` example",
          "timestamp": "2020-07-04T22:39:15+08:00",
          "tree_id": "9b519ef74b7b212346069aab72e8c4985f32b5d4",
          "url": "https://github.com/schungx/rhai/commit/a8b5a7f6b34d9fddae4b57aa38842ffaa5ae8cb6"
        },
        "date": 1593873793959,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 97946,
            "range": "± 9006",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 89,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 269,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2462,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2272,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6243593,
            "range": "± 715989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 677,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 720,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15596,
            "range": "± 1279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12102,
            "range": "± 1163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 306,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 582,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 80,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 840,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 77,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1975057,
            "range": "± 162576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2913257,
            "range": "± 290539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2479869,
            "range": "± 157323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2632,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2656,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 513,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 504,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 827,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 811,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 301,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 296,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 223,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 286,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 554,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 380,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 410697,
            "range": "± 38858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21667558,
            "range": "± 2188552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2768,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11980,
            "range": "± 1136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3763,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13823,
            "range": "± 1525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13404,
            "range": "± 940",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32924,
            "range": "± 3836",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2392,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 349,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1680801,
            "range": "± 259850",
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
          "id": "936a3ff44aabb261f133ba780c4890159d4bba83",
          "message": "Add feature to disable symbols.",
          "timestamp": "2020-07-05T15:23:51+08:00",
          "tree_id": "63887e4cb44e18a72020fd76c9d185a931bbb148",
          "url": "https://github.com/schungx/rhai/commit/936a3ff44aabb261f133ba780c4890159d4bba83"
        },
        "date": 1593934151311,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102823,
            "range": "± 15289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 92,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 86,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 292,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2613,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2366,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6600805,
            "range": "± 773700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 686,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 727,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15872,
            "range": "± 2363",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12208,
            "range": "± 1487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 332,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 562,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 883,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 74,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1998791,
            "range": "± 497589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3141289,
            "range": "± 241618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2642722,
            "range": "± 243019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2744,
            "range": "± 622",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2772,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 486,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 517,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 907,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 874,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 332,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 317,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 300,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 579,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 387,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 430078,
            "range": "± 54112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23977342,
            "range": "± 2169603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2888,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11746,
            "range": "± 1225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3876,
            "range": "± 462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13567,
            "range": "± 1873",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13188,
            "range": "± 1804",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33395,
            "range": "± 3930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2351,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 375,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1655659,
            "range": "± 236347",
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
          "id": "e390dd73e6f759b7be9088942295aa4b370efca5",
          "message": "Add custom operators.",
          "timestamp": "2020-07-05T17:41:45+08:00",
          "tree_id": "55dc1b5a2ad747760cda35581ad5043a9569a5ff",
          "url": "https://github.com/schungx/rhai/commit/e390dd73e6f759b7be9088942295aa4b370efca5"
        },
        "date": 1593942374672,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 97985,
            "range": "± 16931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 91,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 84,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 266,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2487,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2305,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6463500,
            "range": "± 842964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 681,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 738,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15453,
            "range": "± 2054",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12836,
            "range": "± 2302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 334,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 573,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 82,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 853,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 81,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2056888,
            "range": "± 196421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3059842,
            "range": "± 420776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2486023,
            "range": "± 317533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2786,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2763,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 500,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 546,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 833,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 807,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 302,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 292,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 231,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 289,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 561,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 394,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 441285,
            "range": "± 61373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22505221,
            "range": "± 2206277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3064,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12803,
            "range": "± 1637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3917,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14061,
            "range": "± 2746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13798,
            "range": "± 1930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34362,
            "range": "± 4778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2550,
            "range": "± 463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 368,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1692386,
            "range": "± 232280",
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
          "id": "a27f89b524f9fbfb0e19ef30cfbcc6fababc0a22",
          "message": "Add new register_fn_raw API.",
          "timestamp": "2020-07-05T23:08:44+08:00",
          "tree_id": "d86296325dc7962d75751e1549ab7942d720929c",
          "url": "https://github.com/schungx/rhai/commit/a27f89b524f9fbfb0e19ef30cfbcc6fababc0a22"
        },
        "date": 1593962002150,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 92573,
            "range": "± 23907",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 79,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 79,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 285,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2487,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2333,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6495144,
            "range": "± 952425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 621,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 677,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13995,
            "range": "± 3553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11294,
            "range": "± 2555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 293,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 572,
            "range": "± 150",
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
            "value": 893,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1779459,
            "range": "± 331995",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2708929,
            "range": "± 614595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2300879,
            "range": "± 499775",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2698,
            "range": "± 781",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2683,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 439,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 478,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 823,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 743,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 287,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 274,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 195,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 277,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 531,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 347,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 390974,
            "range": "± 100019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21251826,
            "range": "± 3043057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2780,
            "range": "± 657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11355,
            "range": "± 2493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3644,
            "range": "± 916",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13265,
            "range": "± 3461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13020,
            "range": "± 2953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30495,
            "range": "± 5924",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2359,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 398,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1606333,
            "range": "± 407738",
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
          "id": "3e45d5d9a5c91c719748ed15a0054437095731aa",
          "message": "Refine docs and API.",
          "timestamp": "2020-07-06T13:01:57+08:00",
          "tree_id": "6a534f0fafa024968b3f6445f5188d0f0cb0641b",
          "url": "https://github.com/schungx/rhai/commit/3e45d5d9a5c91c719748ed15a0054437095731aa"
        },
        "date": 1594011843918,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103813,
            "range": "± 13121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 104,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 280,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2585,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2430,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6736849,
            "range": "± 1799082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 714,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 776,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17462,
            "range": "± 1664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13051,
            "range": "± 5759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 363,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 636,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 958,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 80,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2034597,
            "range": "± 665466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2956664,
            "range": "± 225220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2495800,
            "range": "± 142695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2809,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2881,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 496,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 549,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 901,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 888,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 313,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 308,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 230,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 298,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 567,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 396,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 440603,
            "range": "± 8961",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24153896,
            "range": "± 1927792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3068,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12956,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4023,
            "range": "± 662",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15215,
            "range": "± 4547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18536,
            "range": "± 5477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36357,
            "range": "± 2349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2603,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 395,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1797481,
            "range": "± 134629",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de934e62549ec597f35872f1db41b5dfd745c3ee",
          "message": "Merge pull request #16 from alvinhochun/serde\n\nHandle deserialization of all integer and impl. serde for all enum types",
          "timestamp": "2020-07-06T21:30:42+08:00",
          "tree_id": "55d5dbe2724b0a3c0984925d5359074cf53573ab",
          "url": "https://github.com/schungx/rhai/commit/de934e62549ec597f35872f1db41b5dfd745c3ee"
        },
        "date": 1594042339519,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 86762,
            "range": "± 842",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 79,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 232,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2223,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2061,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5534111,
            "range": "± 7133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 599,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 649,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14595,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10913,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 295,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 520,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 61,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 750,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1670700,
            "range": "± 2927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2438405,
            "range": "± 2388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2073395,
            "range": "± 1675",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2376,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2452,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 416,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 451,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 752,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 738,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 260,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 256,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 190,
            "range": "± 0",
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
            "value": 475,
            "range": "± 2",
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
            "value": 367080,
            "range": "± 754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20491424,
            "range": "± 51447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2580,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10931,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3423,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12565,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12573,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30537,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2173,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 325,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1478860,
            "range": "± 10780",
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
          "id": "f5ff759fcc2255837e2b9b8eda09b364c21e86fe",
          "message": "Merge branch 'master' of https://github.com/schungx/rhai",
          "timestamp": "2020-07-06T21:31:03+08:00",
          "tree_id": "f4df606540c68942bc81aae97de9c60ac2b59afa",
          "url": "https://github.com/schungx/rhai/commit/f5ff759fcc2255837e2b9b8eda09b364c21e86fe"
        },
        "date": 1594042411413,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103980,
            "range": "± 10805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 92,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 280,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2582,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2436,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6845411,
            "range": "± 399839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 713,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 827,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17548,
            "range": "± 868",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12880,
            "range": "± 3284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 353,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 629,
            "range": "± 24",
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
            "value": 920,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2028189,
            "range": "± 176595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3029008,
            "range": "± 270680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2531809,
            "range": "± 203496",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2797,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2842,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 500,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 540,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 938,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 897,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 323,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 316,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 226,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 312,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 567,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 418,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 452553,
            "range": "± 46347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24427112,
            "range": "± 2185031",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3108,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13013,
            "range": "± 2710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3994,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14995,
            "range": "± 3055",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15316,
            "range": "± 2427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36420,
            "range": "± 5770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2682,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 382,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1792299,
            "range": "± 266832",
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
          "id": "2b3f10f2c5f839cb869b3188443ff31f7690b412",
          "message": "Define functions anywhere during parsing.",
          "timestamp": "2020-07-06T22:57:50+08:00",
          "tree_id": "0135717891b4c064b8e24451436ba5573f6ec07d",
          "url": "https://github.com/schungx/rhai/commit/2b3f10f2c5f839cb869b3188443ff31f7690b412"
        },
        "date": 1594047951105,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103339,
            "range": "± 1882",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 103,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 278,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2569,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2437,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6718094,
            "range": "± 609583",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 710,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 775,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17478,
            "range": "± 728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12960,
            "range": "± 2560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 355,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 632,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 906,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2046722,
            "range": "± 370057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2959812,
            "range": "± 242710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2550787,
            "range": "± 461233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2793,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2855,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 497,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 543,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 907,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 894,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 314,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 312,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 229,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 297,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 572,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 394,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 445924,
            "range": "± 88491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24167426,
            "range": "± 2213969",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3069,
            "range": "± 725",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12842,
            "range": "± 980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4012,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14911,
            "range": "± 3168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14935,
            "range": "± 2754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35677,
            "range": "± 998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2708,
            "range": "± 4604",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 426,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1790504,
            "range": "± 59222",
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
          "id": "ff6d205c1dd198c701e8582d2ee3ab0924b9f1c7",
          "message": "Make Modules::set_raw_fn public.",
          "timestamp": "2020-07-07T22:59:23+08:00",
          "tree_id": "dd9bdf2ae5828f9766fd0dffda6b8059be20f97f",
          "url": "https://github.com/schungx/rhai/commit/ff6d205c1dd198c701e8582d2ee3ab0924b9f1c7"
        },
        "date": 1594134090791,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 86497,
            "range": "± 1269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 81,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 85,
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
            "value": 2196,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2065,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5616340,
            "range": "± 8388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 594,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 650,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14590,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10813,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 295,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 526,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 61,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 759,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 58,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1683615,
            "range": "± 3088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2446268,
            "range": "± 7471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2086686,
            "range": "± 6233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2356,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2421,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 416,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 457,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 756,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 741,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 262,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 260,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 192,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 249,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 494,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 328,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 368041,
            "range": "± 1615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20449618,
            "range": "± 72564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2568,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10640,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3372,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12440,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12366,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 29726,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2167,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 330,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1480424,
            "range": "± 3699",
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
          "id": "703cc414b871651d7674941a9fd2a171dd35d9cf",
          "message": "Allow mutating a module-qualified function's first argument if it is a variable.",
          "timestamp": "2020-07-08T13:06:00+08:00",
          "tree_id": "9433617b0a66740b78f8d2c0e6c6126ea40cf13d",
          "url": "https://github.com/schungx/rhai/commit/703cc414b871651d7674941a9fd2a171dd35d9cf"
        },
        "date": 1594184976625,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 78150,
            "range": "± 12545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 74,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 71,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 228,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1936,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1833,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5402838,
            "range": "± 1681136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 561,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 615,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13336,
            "range": "± 2569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9606,
            "range": "± 1449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 278,
            "range": "± 65",
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
            "value": 74,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 908,
            "range": "± 86",
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
            "value": 2054329,
            "range": "± 90292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2972539,
            "range": "± 220265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2013915,
            "range": "± 297948",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2236,
            "range": "± 619",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2157,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 389,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 439,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 723,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 717,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 251,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 249,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 178,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 238,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 416,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 331,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 355719,
            "range": "± 105215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18580061,
            "range": "± 2474401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2451,
            "range": "± 536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10036,
            "range": "± 1558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2998,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11412,
            "range": "± 2364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11838,
            "range": "± 2936",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 26370,
            "range": "± 3692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2176,
            "range": "± 478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 298,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1410063,
            "range": "± 223610",
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
          "id": "f36b4a69ae4ad6be03674c25d6297de3bc8058c3",
          "message": "FIXED - method calls inside dot chain.",
          "timestamp": "2020-07-09T22:21:07+08:00",
          "tree_id": "43731aa90ad54f8160648037a6cccc794770b20f",
          "url": "https://github.com/schungx/rhai/commit/f36b4a69ae4ad6be03674c25d6297de3bc8058c3"
        },
        "date": 1594304629562,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103275,
            "range": "± 6981",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 97,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 282,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2619,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2443,
            "range": "± 450",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6990800,
            "range": "± 249121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 719,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 783,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17392,
            "range": "± 2599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12685,
            "range": "± 4688",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 347,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 623,
            "range": "± 38",
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
            "value": 907,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2045066,
            "range": "± 415811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3053824,
            "range": "± 356742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2575803,
            "range": "± 205387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2801,
            "range": "± 877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2867,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 502,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 548,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 917,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 907,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 325,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 331,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 235,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 309,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 601,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 446,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 445394,
            "range": "± 26770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24148755,
            "range": "± 2076697",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3509,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14065,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4295,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15790,
            "range": "± 930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16055,
            "range": "± 1664",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39679,
            "range": "± 6219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2849,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 421,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1832930,
            "range": "± 323390",
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
          "id": "2a8d63fd5f0e6fb3ca19a0584243c9292abae38a",
          "message": "Refine custom syntax.",
          "timestamp": "2020-07-11T15:09:17+08:00",
          "tree_id": "32a5b08e31d0c5bb16cc98edd8ab524346dcf67e",
          "url": "https://github.com/schungx/rhai/commit/2a8d63fd5f0e6fb3ca19a0584243c9292abae38a"
        },
        "date": 1594451528710,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 81989,
            "range": "± 13487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 78,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 71,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 229,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2066,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1902,
            "range": "± 1077",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5416383,
            "range": "± 897022",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 557,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 577,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14608,
            "range": "± 2078",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10706,
            "range": "± 3967",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 273,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 485,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 52,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 805,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 52,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1537553,
            "range": "± 206710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2373910,
            "range": "± 374390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2005718,
            "range": "± 267361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2354,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2191,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 375,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 427,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 743,
            "range": "± 454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 670,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 237,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 237,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 191,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 233,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 433,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 303,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 332660,
            "range": "± 69317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19584740,
            "range": "± 2726956",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2337,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9152,
            "range": "± 1519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3019,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11183,
            "range": "± 2658",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11105,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 25804,
            "range": "± 4905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1881,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 294,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1396562,
            "range": "± 241547",
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
          "id": "8449f8c55e55401e6cf404b234f848c0a8ce0f3b",
          "message": "Make API chainable.",
          "timestamp": "2020-07-12T11:46:53+08:00",
          "tree_id": "fd0bb90ff6083cce08ba9b7a5edca41c0b2376db",
          "url": "https://github.com/schungx/rhai/commit/8449f8c55e55401e6cf404b234f848c0a8ce0f3b"
        },
        "date": 1594525762043,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102318,
            "range": "± 3561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 277,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2597,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2462,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6836835,
            "range": "± 295066",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 715,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 794,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17250,
            "range": "± 1709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12800,
            "range": "± 3195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 351,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 624,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 920,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2072629,
            "range": "± 236975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3024199,
            "range": "± 215637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2580953,
            "range": "± 174963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2790,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2914,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 502,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 551,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 907,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 901,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 320,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 315,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 233,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 314,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 583,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 411,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 444533,
            "range": "± 56106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24217200,
            "range": "± 1538322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3035,
            "range": "± 1324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12625,
            "range": "± 864",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4003,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14561,
            "range": "± 994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14924,
            "range": "± 1004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34741,
            "range": "± 905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2479,
            "range": "± 986",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 380,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1841180,
            "range": "± 101559",
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
          "id": "adc96e24bd4239177f2e565c460bca9ad62aec30",
          "message": "Fix all features.",
          "timestamp": "2020-07-13T19:38:50+08:00",
          "tree_id": "a0ad3a3e852f6133753e213f1016279a428dc03d",
          "url": "https://github.com/schungx/rhai/commit/adc96e24bd4239177f2e565c460bca9ad62aec30"
        },
        "date": 1594640617673,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 99768,
            "range": "± 7896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 92,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 93,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 259,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2459,
            "range": "± 470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2337,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6543780,
            "range": "± 769868",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 695,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 747,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16551,
            "range": "± 2525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12097,
            "range": "± 2070",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 329,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 600,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 873,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1974726,
            "range": "± 327128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2840202,
            "range": "± 477534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2403429,
            "range": "± 344929",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2658,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2691,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 498,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 522,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 874,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 855,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 302,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 303,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 218,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 282,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 546,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 387,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 415956,
            "range": "± 28766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23647213,
            "range": "± 2093523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2843,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11969,
            "range": "± 1202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3825,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14021,
            "range": "± 952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14226,
            "range": "± 1789",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32620,
            "range": "± 4519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2365,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 377,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1726389,
            "range": "± 157830",
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
          "id": "d119e13b7936d88349a08805e481a0908796255f",
          "message": "Allow binding of this pointer in FnPtr calls.",
          "timestamp": "2020-07-17T10:18:07+08:00",
          "tree_id": "398119f67a7deaa3721a6ee4df2c4a1d5d4bf7b7",
          "url": "https://github.com/schungx/rhai/commit/d119e13b7936d88349a08805e481a0908796255f"
        },
        "date": 1594952431964,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 101124,
            "range": "± 10290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 293,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2592,
            "range": "± 613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2422,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6657075,
            "range": "± 305592",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 676,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 735,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16386,
            "range": "± 2501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12108,
            "range": "± 728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 339,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 604,
            "range": "± 38",
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
            "value": 899,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1945713,
            "range": "± 458660",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3031420,
            "range": "± 190674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2505832,
            "range": "± 538201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2768,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2866,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 483,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 526,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 897,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 869,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 317,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 331,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 234,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 308,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 583,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 405,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 425018,
            "range": "± 16401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24189306,
            "range": "± 1348385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2933,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12679,
            "range": "± 2821",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3900,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13982,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14048,
            "range": "± 9988",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33900,
            "range": "± 10877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2391,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 399,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1733535,
            "range": "± 125171",
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
          "id": "2f33edb7620b5b0b1ff98dcbb93ca091419eeedc",
          "message": "FIx no_std.",
          "timestamp": "2020-07-19T09:10:22+08:00",
          "tree_id": "1f8a6d2aaa6fe7bc43dc223a56c1854e4dc9d59c",
          "url": "https://github.com/schungx/rhai/commit/2f33edb7620b5b0b1ff98dcbb93ca091419eeedc"
        },
        "date": 1595121173278,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102802,
            "range": "± 9601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 89,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 294,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2650,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2445,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7198211,
            "range": "± 892885",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 741,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 803,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17261,
            "range": "± 3297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12599,
            "range": "± 3033",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 349,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 617,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 910,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2063040,
            "range": "± 274219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3174256,
            "range": "± 619448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2591450,
            "range": "± 341538",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2927,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2956,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 518,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 564,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 933,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 897,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 322,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 333,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 232,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 310,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 575,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 401,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 458644,
            "range": "± 18441",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24570825,
            "range": "± 2150456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3135,
            "range": "± 3142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12811,
            "range": "± 721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4051,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14671,
            "range": "± 2504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14827,
            "range": "± 880",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35267,
            "range": "± 6372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2501,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 382,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1868623,
            "range": "± 97856",
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
          "id": "cf36dc5a57d8d060e41e59e3093ea8059356781e",
          "message": "Support for anonymous functions.",
          "timestamp": "2020-07-19T17:14:55+08:00",
          "tree_id": "f667609bda8aaa01d9e3fae69b1cb3fc857b694b",
          "url": "https://github.com/schungx/rhai/commit/cf36dc5a57d8d060e41e59e3093ea8059356781e"
        },
        "date": 1595150374191,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 89259,
            "range": "± 14835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 80,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 79,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 291,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2453,
            "range": "± 450",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2262,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6366559,
            "range": "± 933842",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 645,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 665,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14946,
            "range": "± 2931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11058,
            "range": "± 2299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 315,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 541,
            "range": "± 111",
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
            "value": 819,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1720923,
            "range": "± 294467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2676161,
            "range": "± 505120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2192045,
            "range": "± 348761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2459,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2428,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 444,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 470,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 798,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 772,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 285,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 283,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 207,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 277,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 527,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 357,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 394347,
            "range": "± 61300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22224141,
            "range": "± 4033134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2837,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10795,
            "range": "± 1828",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3552,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12213,
            "range": "± 2952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12549,
            "range": "± 2868",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30389,
            "range": "± 6780",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2207,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 355,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1591274,
            "range": "± 196306",
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
          "id": "a5fa8322e915e405d5f3120f7ac6d1caf6a96697",
          "message": "Avoid pulling in std for no-std.",
          "timestamp": "2020-07-20T20:23:35+08:00",
          "tree_id": "6d924c26b20daddb5fb7d8ee954a4630c79cb60b",
          "url": "https://github.com/schungx/rhai/commit/a5fa8322e915e405d5f3120f7ac6d1caf6a96697"
        },
        "date": 1595247959590,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 101829,
            "range": "± 8500",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 96,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 88,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 282,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2594,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2441,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6888475,
            "range": "± 326877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 712,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 772,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17602,
            "range": "± 1116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13014,
            "range": "± 5234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 345,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 617,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 903,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2030708,
            "range": "± 125029",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2988778,
            "range": "± 141152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2546858,
            "range": "± 222773",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2802,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2863,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 497,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 544,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 921,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 882,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 311,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 307,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 228,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 303,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 573,
            "range": "± 53",
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
            "value": 443999,
            "range": "± 34072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24139489,
            "range": "± 1739261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3101,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12920,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4098,
            "range": "± 726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14859,
            "range": "± 1445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15001,
            "range": "± 862",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35688,
            "range": "± 3324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2541,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 385,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1836176,
            "range": "± 167548",
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
          "id": "e6c3f8134ddabdbfc047589b3e161ed2bb7d30e5",
          "message": "Avoid copying property name for map property access.",
          "timestamp": "2020-07-21T20:59:12+08:00",
          "tree_id": "db90ac69d30d95848d48441cf6dc10ee7ef91275",
          "url": "https://github.com/schungx/rhai/commit/e6c3f8134ddabdbfc047589b3e161ed2bb7d30e5"
        },
        "date": 1595336826617,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 106187,
            "range": "± 4205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 99,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 92,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 297,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2706,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2546,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7194480,
            "range": "± 842993",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 751,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 807,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17809,
            "range": "± 4125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13386,
            "range": "± 702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 375,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 655,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 76,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 968,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 72,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2133521,
            "range": "± 417374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3124610,
            "range": "± 275331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2708551,
            "range": "± 173222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2867,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2904,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 485,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 528,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 936,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 931,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 332,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 327,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 247,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 321,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 607,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 426,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 464568,
            "range": "± 13074",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25487052,
            "range": "± 1557726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3202,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13675,
            "range": "± 607",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4225,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15485,
            "range": "± 9145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15684,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37388,
            "range": "± 1957",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2636,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 396,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1905007,
            "range": "± 548058",
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
          "id": "61a1355c59134a31523c75344b450d5fac6d0107",
          "message": "Add no-std example.",
          "timestamp": "2020-07-21T22:32:24+08:00",
          "tree_id": "62e758fc7ceda89a7290c1b99dca9f5a7d1d969a",
          "url": "https://github.com/schungx/rhai/commit/61a1355c59134a31523c75344b450d5fac6d0107"
        },
        "date": 1595342178912,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 99236,
            "range": "± 23658",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 114,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 106,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 339,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2519,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2329,
            "range": "± 651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6399330,
            "range": "± 1484727",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 671,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 714,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17737,
            "range": "± 4757",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11345,
            "range": "± 1336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 375,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 564,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 79,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 862,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 64,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2152758,
            "range": "± 560144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2898888,
            "range": "± 701743",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2370357,
            "range": "± 429562",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2987,
            "range": "± 852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 3030,
            "range": "± 1072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 428,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 543,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 961,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 966,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 301,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 348,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 262,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 282,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 580,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 441,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 488334,
            "range": "± 143184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23823486,
            "range": "± 5352558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2892,
            "range": "± 730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11824,
            "range": "± 2969",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4349,
            "range": "± 3235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15833,
            "range": "± 3507",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13809,
            "range": "± 3626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34320,
            "range": "± 8772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2568,
            "range": "± 565",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 364,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1955011,
            "range": "± 181297",
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
          "id": "839738b97eb5cb8f4a8294c7a975e0e6e6521c73",
          "message": "Change no_std sample to bare-bones.",
          "timestamp": "2020-07-22T11:43:58+08:00",
          "tree_id": "cc10d555f83da3f94d174cfa0a210cddb402f11b",
          "url": "https://github.com/schungx/rhai/commit/839738b97eb5cb8f4a8294c7a975e0e6e6521c73"
        },
        "date": 1595389722079,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 93880,
            "range": "± 12589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 82,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 263,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2417,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2222,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6275230,
            "range": "± 607805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 655,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 706,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15566,
            "range": "± 1657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12042,
            "range": "± 1511",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 319,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 579,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 66,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 842,
            "range": "± 95",
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
            "value": 1875099,
            "range": "± 174199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2777315,
            "range": "± 299135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2353964,
            "range": "± 227745",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2490,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2515,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 420,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 455,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 820,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 818,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 290,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 285,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 208,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 283,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 525,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 363,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 411572,
            "range": "± 57214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22095849,
            "range": "± 2146116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2832,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11814,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3762,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13550,
            "range": "± 1369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13670,
            "range": "± 1311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33617,
            "range": "± 4467",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2316,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 348,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1730630,
            "range": "± 347410",
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
          "id": "35374f5b3bedf76d07abb544c103acc8d3c78355",
          "message": "Simplify custom syntax.",
          "timestamp": "2020-07-22T13:08:51+08:00",
          "tree_id": "4ab35c159b277761216df4e195f2d3e92129ce7a",
          "url": "https://github.com/schungx/rhai/commit/35374f5b3bedf76d07abb544c103acc8d3c78355"
        },
        "date": 1595394807600,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 94689,
            "range": "± 9364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 84,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 274,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2496,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2338,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6591886,
            "range": "± 677953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 678,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 759,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16021,
            "range": "± 1649",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11791,
            "range": "± 1319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 334,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 600,
            "range": "± 52",
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
            "value": 887,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1933199,
            "range": "± 278598",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2891809,
            "range": "± 303131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2414667,
            "range": "± 215062",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2572,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2673,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 436,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 492,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 852,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 855,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 306,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 309,
            "range": "± 76",
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
            "value": 278,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 570,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 379,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 416300,
            "range": "± 43675",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22634322,
            "range": "± 1793038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2913,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11773,
            "range": "± 925",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3908,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13641,
            "range": "± 1377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13613,
            "range": "± 1231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33318,
            "range": "± 3715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2322,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1754233,
            "range": "± 260776",
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
          "id": "6d551f15962224ad158388f8dd9edc406c2d6de8",
          "message": "Add currying support.",
          "timestamp": "2020-07-22T23:12:09+08:00",
          "tree_id": "296566550cbaacabd91e2caa9d428896e1302086",
          "url": "https://github.com/schungx/rhai/commit/6d551f15962224ad158388f8dd9edc406c2d6de8"
        },
        "date": 1595431052163,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 96281,
            "range": "± 16840",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 84,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 270,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2418,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2329,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6822518,
            "range": "± 706457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 694,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 741,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16080,
            "range": "± 9534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11839,
            "range": "± 1819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 346,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 606,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 68,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 899,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1933200,
            "range": "± 285969",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2874158,
            "range": "± 339826",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2389335,
            "range": "± 202829",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2588,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2673,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 441,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 478,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 851,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 886,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 311,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 308,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 217,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 285,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 563,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 395,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 441631,
            "range": "± 53146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23594554,
            "range": "± 2217116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2928,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12373,
            "range": "± 2059",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3990,
            "range": "± 674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14320,
            "range": "± 2447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14602,
            "range": "± 1368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34150,
            "range": "± 4899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2480,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 387,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1796629,
            "range": "± 94720",
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b22276ea82be9a7c4806e43adf46a77471d4558",
          "message": "Merge pull request #17 from Eliah-Lakhin/master\n\nFnPtr::call_dynamic that fixes issues with curry-ed lambdas when they are called dynamically",
          "timestamp": "2020-07-23T10:01:16+08:00",
          "tree_id": "2836b030ffcf99df7fdd175127092cafe4aac280",
          "url": "https://github.com/schungx/rhai/commit/7b22276ea82be9a7c4806e43adf46a77471d4558"
        },
        "date": 1595469885995,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 78934,
            "range": "± 15118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 78,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 74,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 238,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2134,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1868,
            "range": "± 514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5460549,
            "range": "± 940942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 546,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 608,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12709,
            "range": "± 6591",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9232,
            "range": "± 1497",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 277,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 486,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 55,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 688,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 55,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1505352,
            "range": "± 305941",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2330071,
            "range": "± 289711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1948110,
            "range": "± 324101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2172,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2339,
            "range": "± 1100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 345,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 402,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 723,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 689,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 251,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 256,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 176,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 231,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 466,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 300,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 348886,
            "range": "± 39352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20086018,
            "range": "± 1917152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2334,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9211,
            "range": "± 2377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3270,
            "range": "± 1105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 10946,
            "range": "± 1721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11131,
            "range": "± 1749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 27680,
            "range": "± 10549",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 1964,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 363,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1407110,
            "range": "± 207814",
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
          "id": "dc7f847a8e374a0527b28e49f871df089b198554",
          "message": "Merge branch 'master' of https://github.com/schungx/rhai",
          "timestamp": "2020-07-23T10:13:10+08:00",
          "tree_id": "5433b61b079ae446216eb1f535552e9de8f87421",
          "url": "https://github.com/schungx/rhai/commit/dc7f847a8e374a0527b28e49f871df089b198554"
        },
        "date": 1595470728989,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 104341,
            "range": "± 14767",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 97,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 88,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 302,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2717,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2399,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7149398,
            "range": "± 546838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 723,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 778,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16089,
            "range": "± 1611",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12252,
            "range": "± 1472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 370,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 656,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 911,
            "range": "± 100",
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
            "value": 2038892,
            "range": "± 169908",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3077261,
            "range": "± 251766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2560409,
            "range": "± 257276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2773,
            "range": "± 457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2910,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 478,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 522,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 888,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 864,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 325,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 310,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 222,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 294,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 557,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 399,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 433411,
            "range": "± 48113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24746750,
            "range": "± 2426516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2856,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11556,
            "range": "± 1381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3786,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 13849,
            "range": "± 2272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13586,
            "range": "± 1980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31981,
            "range": "± 4422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2301,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 388,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1724630,
            "range": "± 241926",
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
          "id": "bff266d4e1f35deef9e24d465266005df05b7305",
          "message": "Move function calling to separate source file.",
          "timestamp": "2020-07-23T18:40:42+08:00",
          "tree_id": "ec4e70264fc99d4cecc12c9301c6f66845c9ed7d",
          "url": "https://github.com/schungx/rhai/commit/bff266d4e1f35deef9e24d465266005df05b7305"
        },
        "date": 1595501549877,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 87887,
            "range": "± 12601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 85,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 78,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 245,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2331,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2134,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6045259,
            "range": "± 1061875",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 634,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 664,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14425,
            "range": "± 1923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10935,
            "range": "± 2147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 321,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 570,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 63,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 804,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 60,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1764008,
            "range": "± 335141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2651613,
            "range": "± 375027",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2223487,
            "range": "± 356920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2379,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2476,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 394,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 428,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 814,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 841,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 296,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 286,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 197,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 267,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 484,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 359,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 400614,
            "range": "± 100927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22699213,
            "range": "± 3187389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2647,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10965,
            "range": "± 1645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3624,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12864,
            "range": "± 2378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14718,
            "range": "± 773",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35189,
            "range": "± 2082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2511,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 384,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1864062,
            "range": "± 93106",
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
          "id": "2b0aacde23780e7399fcb53a6b712074203be67a",
          "message": "Fix Module::set_indexer_set_fn.",
          "timestamp": "2020-07-24T23:16:54+08:00",
          "tree_id": "de8802d2c0b74392dc2e2720ddf3ab2514e066d4",
          "url": "https://github.com/schungx/rhai/commit/2b0aacde23780e7399fcb53a6b712074203be67a"
        },
        "date": 1595604158899,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 107193,
            "range": "± 18063",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 99,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 102,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 339,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2754,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2575,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7300237,
            "range": "± 1027003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 723,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 791,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17192,
            "range": "± 1624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12591,
            "range": "± 1980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 374,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 697,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 75,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 988,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 72,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2131283,
            "range": "± 413047",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3212667,
            "range": "± 401964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2650464,
            "range": "± 272537",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2869,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2891,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 472,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 532,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 988,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 975,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 357,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 355,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 243,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 322,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 611,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 439,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 487142,
            "range": "± 98268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28728783,
            "range": "± 2501064",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3125,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13019,
            "range": "± 1731",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4101,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14956,
            "range": "± 2557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15054,
            "range": "± 2538",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36206,
            "range": "± 6319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2571,
            "range": "± 495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 424,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1907603,
            "range": "± 266306",
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
          "id": "463d669ab50fe07c2f54ad70ec610a5c9fa073b3",
          "message": "Avoid shadowing indexer errors.",
          "timestamp": "2020-07-25T09:55:33+08:00",
          "tree_id": "1e4c8904358cebb73fa2f439bfb797fcf72f2606",
          "url": "https://github.com/schungx/rhai/commit/463d669ab50fe07c2f54ad70ec610a5c9fa073b3"
        },
        "date": 1595647346003,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 103350,
            "range": "± 69674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 96,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 89,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 287,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2616,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2477,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6844420,
            "range": "± 463216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 681,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 759,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16719,
            "range": "± 876",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12952,
            "range": "± 1780",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 367,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 648,
            "range": "± 85",
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
            "value": 936,
            "range": "± 69",
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
            "value": 1992297,
            "range": "± 188508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2976258,
            "range": "± 242098",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2529617,
            "range": "± 1025707",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2696,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2713,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 459,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 497,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 920,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 915,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 328,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 351,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 229,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 309,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 591,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 413,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 469711,
            "range": "± 35470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25598259,
            "range": "± 1633882",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2935,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12184,
            "range": "± 1588",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4118,
            "range": "± 659",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14889,
            "range": "± 1138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14965,
            "range": "± 2514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35509,
            "range": "± 2798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2566,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 388,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1839231,
            "range": "± 325988",
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
          "id": "9d900a672231d952202207d0c727af2e93b3c772",
          "message": "Remove _Private.",
          "timestamp": "2020-07-25T16:09:13+08:00",
          "tree_id": "c8f6c1d6024b58fdc1fcc07854811044867e389e",
          "url": "https://github.com/schungx/rhai/commit/9d900a672231d952202207d0c727af2e93b3c772"
        },
        "date": 1595664896999,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 104424,
            "range": "± 12365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 100,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 302,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2701,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2528,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7320660,
            "range": "± 185618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 744,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 801,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17896,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13382,
            "range": "± 866",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 380,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 679,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 77,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 977,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2144520,
            "range": "± 68648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3165039,
            "range": "± 204848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2647056,
            "range": "± 110613",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2846,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2930,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 479,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 522,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 987,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 992,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 355,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 352,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 238,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 322,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 591,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 431,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 481308,
            "range": "± 15278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27694515,
            "range": "± 1183513",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3300,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13528,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4274,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15545,
            "range": "± 747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15804,
            "range": "± 518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37511,
            "range": "± 1048",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2630,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 407,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1921975,
            "range": "± 91407",
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
          "id": "c530792d00ebbe93ca9d7cdff63895feb63c3f2e",
          "message": "Add repoTree and repoHome macros.",
          "timestamp": "2020-07-25T16:36:50+08:00",
          "tree_id": "21356b144391f3e9a731196f99253f5ad08a29bf",
          "url": "https://github.com/schungx/rhai/commit/c530792d00ebbe93ca9d7cdff63895feb63c3f2e"
        },
        "date": 1595666475840,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 97996,
            "range": "± 25585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 97,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 87,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 272,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2569,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2437,
            "range": "± 297",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6828749,
            "range": "± 652228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 707,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 747,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16365,
            "range": "± 1473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12263,
            "range": "± 1485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 353,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 614,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 72,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 904,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1985225,
            "range": "± 166934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2885095,
            "range": "± 387768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2452849,
            "range": "± 206261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2736,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2717,
            "range": "± 303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 446,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 501,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 916,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 928,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 332,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 326,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 215,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 300,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 542,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 395,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 453684,
            "range": "± 76187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25651200,
            "range": "± 2393233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2988,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12797,
            "range": "± 1582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3823,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14412,
            "range": "± 1514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14617,
            "range": "± 1585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35969,
            "range": "± 4254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2542,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 387,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1777805,
            "range": "± 226446",
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
          "id": "f601cc8c0a2d13e11fe0070dbc22f6c4b23c89ec",
          "message": "Restore benchmark.yml.",
          "timestamp": "2020-07-25T16:51:29+08:00",
          "tree_id": "d357eff8e55f84f27a89eb9cc2fe909066d39d92",
          "url": "https://github.com/schungx/rhai/commit/f601cc8c0a2d13e11fe0070dbc22f6c4b23c89ec"
        },
        "date": 1595667247211,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 98996,
            "range": "± 3312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 90,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 297,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2620,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2440,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7067427,
            "range": "± 385737",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 693,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 751,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16182,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12054,
            "range": "± 908",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 362,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 648,
            "range": "± 54",
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
            "value": 930,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1952248,
            "range": "± 135581",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2997128,
            "range": "± 250509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2481887,
            "range": "± 194896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2678,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2767,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 451,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 498,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 923,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 933,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 344,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 336,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 229,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 307,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 571,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 404,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 454488,
            "range": "± 41160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27444378,
            "range": "± 1995758",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3085,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12253,
            "range": "± 761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3969,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14285,
            "range": "± 3661",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14508,
            "range": "± 966",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34001,
            "range": "± 3157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2428,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 380,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1829347,
            "range": "± 270362",
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
          "id": "7f1859b6ed035254e190433510d9e82463d1a49a",
          "message": "Merge branch 'master' of https://github.com/jonathandturner/rhai",
          "timestamp": "2020-07-25T18:29:41+08:00",
          "tree_id": "21a9290a4be8db6b9ff8e92aef6cd8ddea70bbc7",
          "url": "https://github.com/schungx/rhai/commit/7f1859b6ed035254e190433510d9e82463d1a49a"
        },
        "date": 1595673407777,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 93646,
            "range": "± 11768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 105,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94,
            "range": "± 15",
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
            "value": 2485,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2330,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6683485,
            "range": "± 1033005",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 677,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 725,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16850,
            "range": "± 5791",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11873,
            "range": "± 1647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 357,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 616,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 76,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 921,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 72,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1956530,
            "range": "± 153161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2836458,
            "range": "± 241347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2444457,
            "range": "± 340891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2635,
            "range": "± 511",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2740,
            "range": "± 692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 455,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 472,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 906,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 908,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 317,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 319,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 220,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 289,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 555,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 406,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 443476,
            "range": "± 49934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25762899,
            "range": "± 3334397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2957,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12339,
            "range": "± 2119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3892,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14452,
            "range": "± 2348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14259,
            "range": "± 2019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34299,
            "range": "± 4433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2439,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 367,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1742209,
            "range": "± 244140",
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
          "id": "6b600704a3a40946bde12e6298eb6c2fefb8b509",
          "message": "Avoid warnings.",
          "timestamp": "2020-07-26T15:53:22+08:00",
          "tree_id": "45f9b1d4387060d9971317796de9aa8cd77c3b93",
          "url": "https://github.com/schungx/rhai/commit/6b600704a3a40946bde12e6298eb6c2fefb8b509"
        },
        "date": 1595750191408,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 101225,
            "range": "± 3391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 97,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 287,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2580,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2432,
            "range": "± 1140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7008091,
            "range": "± 315604",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 719,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 780,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17111,
            "range": "± 3473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12649,
            "range": "± 1379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 373,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 671,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 961,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 69,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2060147,
            "range": "± 57890",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3037777,
            "range": "± 172117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2548288,
            "range": "± 94526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2723,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2782,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 456,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 500,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 942,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 958,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 344,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 344,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 226,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 307,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 567,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 409,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 462331,
            "range": "± 41815",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26509576,
            "range": "± 1174959",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3136,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12984,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4096,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14957,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15212,
            "range": "± 4419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36057,
            "range": "± 9295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2548,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 394,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1854032,
            "range": "± 71664",
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
          "id": "1e8978f921caa85743c0253224c5f17239e0e03f",
          "message": "Revert \"Delete benchmark.yml\"\n\nThis reverts commit 5dc244ddc8cd37e0ebbef0d54f8161d729cc3973.",
          "timestamp": "2020-07-26T16:35:13+08:00",
          "tree_id": "45f9b1d4387060d9971317796de9aa8cd77c3b93",
          "url": "https://github.com/schungx/rhai/commit/1e8978f921caa85743c0253224c5f17239e0e03f"
        },
        "date": 1595752707980,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 101763,
            "range": "± 13798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 100,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 105,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 308,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2609,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2457,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7059778,
            "range": "± 303321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 722,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 780,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16849,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12706,
            "range": "± 584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 377,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 675,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 74,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 954,
            "range": "± 31",
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
            "value": 2054580,
            "range": "± 64434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3050630,
            "range": "± 49765",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2560355,
            "range": "± 64844",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2756,
            "range": "± 933",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2808,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 462,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 508,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 950,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 960,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 345,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 345,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 227,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 311,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 569,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 408,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 465444,
            "range": "± 54515",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26801347,
            "range": "± 2031518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3174,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13149,
            "range": "± 536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4121,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15073,
            "range": "± 1336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15310,
            "range": "± 12290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36053,
            "range": "± 1094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2586,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 383,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1843026,
            "range": "± 38122",
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
          "id": "ec5082c328b677c31f35c0ab9aecccff8e272b4e",
          "message": "Better handling of reserved keywords.",
          "timestamp": "2020-07-26T22:25:30+08:00",
          "tree_id": "0a51846a00193c93680fc66b9f2fa30d8a2374bb",
          "url": "https://github.com/schungx/rhai/commit/ec5082c328b677c31f35c0ab9aecccff8e272b4e"
        },
        "date": 1595773719968,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 81101,
            "range": "± 13620",
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
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 231,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2061,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2060,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5715491,
            "range": "± 965766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 590,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 651,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 297,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 504,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 56,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1773524,
            "range": "± 308453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2476107,
            "range": "± 441865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2154087,
            "range": "± 303133",
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
          "id": "057f6435a45aa1160faf0cd3c62956b7d6505f11",
          "message": "Add public_only parameter to module function methods.",
          "timestamp": "2020-07-27T18:10:45+08:00",
          "tree_id": "77b19b96d5b03b8edb7b6cbec17f8bc15e4f5043",
          "url": "https://github.com/schungx/rhai/commit/057f6435a45aa1160faf0cd3c62956b7d6505f11"
        },
        "date": 1595844858567,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 85736,
            "range": "± 15569",
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
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 266,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2174,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2159,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6158751,
            "range": "± 947226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 603,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 638,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 332,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 560,
            "range": "± 87",
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
            "value": 1713952,
            "range": "± 262985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2596735,
            "range": "± 312642",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2133570,
            "range": "± 280802",
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
          "id": "b63ff56e096f73eacc28d6cc7eaefda6d25af9fe",
          "message": "Make sure we keep the starting position of each statement (for future uses).",
          "timestamp": "2020-07-28T10:26:20+08:00",
          "tree_id": "a40023b01a9b10b67feba68b9bb5642ec632b6d9",
          "url": "https://github.com/schungx/rhai/commit/b63ff56e096f73eacc28d6cc7eaefda6d25af9fe"
        },
        "date": 1595904856351,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 96224,
            "range": "± 14529",
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
            "value": 85,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 264,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2402,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2205,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6360801,
            "range": "± 861588",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 683,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 715,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 356,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 647,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 67,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2034626,
            "range": "± 271323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2973554,
            "range": "± 391096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2554842,
            "range": "± 393453",
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
          "id": "411539f3be1db5f8467bd66fbd282af85bdad4df",
          "message": "Minimize usage of downcast_ref.",
          "timestamp": "2020-07-28T19:11:46+08:00",
          "tree_id": "f6b5aa1355e46b0dc826e22f2cb839c043b5c9f4",
          "url": "https://github.com/schungx/rhai/commit/411539f3be1db5f8467bd66fbd282af85bdad4df"
        },
        "date": 1595934916521,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 81146,
            "range": "± 9492",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 72,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 71,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 229,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2013,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1975,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5860525,
            "range": "± 1017476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 635,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 687,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 308,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 557,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 53,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1705601,
            "range": "± 219822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2502147,
            "range": "± 356440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2161938,
            "range": "± 359064",
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
          "id": "e2daba55d7a170980013cc370d5525a20312f8f5",
          "message": "Refine unicode-xid-ident feature writeup.",
          "timestamp": "2020-07-29T13:57:17+08:00",
          "tree_id": "8e87b0fd96f0ab7ca13f0a3c2a4f4d996eac58cb",
          "url": "https://github.com/schungx/rhai/commit/e2daba55d7a170980013cc370d5525a20312f8f5"
        },
        "date": 1596002383631,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 102680,
            "range": "± 75856",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 97,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 289,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2600,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2434,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7258415,
            "range": "± 254433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 725,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 779,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 386,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 702,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 71,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2370208,
            "range": "± 77594",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3163945,
            "range": "± 315948",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2707159,
            "range": "± 87275",
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
          "id": "afbcd0fc0b56cc6820e857017eeb86734f79aae6",
          "message": "Replace StaticVec with SmallVec.",
          "timestamp": "2020-07-29T16:10:06+08:00",
          "tree_id": "db9b94820494836901bff78659b1f098132f003c",
          "url": "https://github.com/schungx/rhai/commit/afbcd0fc0b56cc6820e857017eeb86734f79aae6"
        },
        "date": 1596010510411,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 93247,
            "range": "± 18817",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 87,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 89,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 265,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2398,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2245,
            "range": "± 472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7210447,
            "range": "± 806577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 657,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 685,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12346,
            "range": "± 2859",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 10976,
            "range": "± 2468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 328,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 615,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 69,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 844,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 64,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1971348,
            "range": "± 451307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2716088,
            "range": "± 458880",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2336745,
            "range": "± 365305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2472,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2452,
            "range": "± 403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 397,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 421,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 835,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 867,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 330,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 317,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 210,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 319,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 641,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 388,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 445479,
            "range": "± 74741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24824744,
            "range": "± 2138781",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2333,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9607,
            "range": "± 1489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3614,
            "range": "± 724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12307,
            "range": "± 1960",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11246,
            "range": "± 3258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31316,
            "range": "± 13680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2231,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 328,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1620927,
            "range": "± 332645",
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
          "id": "a5a3bbd39951d953ea684349204a727d50117df3",
          "message": "Merge pull request #19 from Eliah-Lakhin/closures\n\nAutocurry feature",
          "timestamp": "2020-07-29T21:24:43+08:00",
          "tree_id": "f8719671991f473ae789158036055744363e052e",
          "url": "https://github.com/schungx/rhai/commit/a5a3bbd39951d953ea684349204a727d50117df3"
        },
        "date": 1596029211511,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 86146,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 82,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 74,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 241,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2225,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2083,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5965884,
            "range": "± 5940",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 603,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 648,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13277,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11301,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 308,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 554,
            "range": "± 2",
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
            "value": 766,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1817753,
            "range": "± 2633",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2495633,
            "range": "± 13041",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2105225,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2265,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2318,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 383,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 430,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 765,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 800,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 289,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 286,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 191,
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
            "value": 533,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 345,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 409076,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23074469,
            "range": "± 59222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2320,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10269,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3313,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12517,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12069,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31668,
            "range": "± 301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2256,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 309,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1605272,
            "range": "± 2700",
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
          "id": "8299adf95c5cffd3d40f5de94e309b6822e76196",
          "message": "Add docs for auto-currying.",
          "timestamp": "2020-07-29T22:43:57+08:00",
          "tree_id": "846960d7c70dbc512802f475a026cf78fb431e7b",
          "url": "https://github.com/schungx/rhai/commit/8299adf95c5cffd3d40f5de94e309b6822e76196"
        },
        "date": 1596034078125,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 88694,
            "range": "± 16589",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 93,
            "range": "± 18",
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
            "value": 254,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2175,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1942,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5983124,
            "range": "± 751113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 599,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 590,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13252,
            "range": "± 1433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11166,
            "range": "± 1210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 292,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 500,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 52,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 729,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 54,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1592481,
            "range": "± 229914",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2368108,
            "range": "± 593551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1993264,
            "range": "± 306027",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2270,
            "range": "± 666",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2170,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 350,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 375,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 674,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 754,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 259,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 267,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 180,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 262,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 485,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 326,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 369730,
            "range": "± 45492",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22450753,
            "range": "± 2417133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2103,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 8933,
            "range": "± 1603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2910,
            "range": "± 1263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11258,
            "range": "± 3165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 11045,
            "range": "± 1229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 25943,
            "range": "± 4359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2097,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 290,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1469677,
            "range": "± 180979",
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
          "id": "721c578407bf197ba79c1b07d988aaaef29d61b2",
          "message": "Use HashMap for externals.",
          "timestamp": "2020-07-29T23:34:48+08:00",
          "tree_id": "4ce537f5da8976fa4eeefdd4206c24759b5000de",
          "url": "https://github.com/schungx/rhai/commit/721c578407bf197ba79c1b07d988aaaef29d61b2"
        },
        "date": 1596037335700,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 96896,
            "range": "± 15524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 108,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 84,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 293,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2765,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2378,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7103039,
            "range": "± 1211665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 672,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 704,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15383,
            "range": "± 3171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12548,
            "range": "± 1843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 342,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 635,
            "range": "± 115",
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
            "value": 904,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 76,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2164689,
            "range": "± 249632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3243857,
            "range": "± 306444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2591337,
            "range": "± 295831",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2666,
            "range": "± 407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2720,
            "range": "± 535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 445,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 519,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 888,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 932,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 356,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 345,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 235,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 318,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 673,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 433,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 455104,
            "range": "± 85943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27389809,
            "range": "± 3668076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2567,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12247,
            "range": "± 2302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3666,
            "range": "± 494",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14442,
            "range": "± 2318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13576,
            "range": "± 1723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33405,
            "range": "± 5071",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2855,
            "range": "± 673",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 370,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1920760,
            "range": "± 199022",
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
          "id": "98b294c699a163a74551eda7a3a88dfb1e16e9ae",
          "message": "Implement capturing.",
          "timestamp": "2020-07-30T18:18:28+08:00",
          "tree_id": "741112edc9a5ae5fde8332f6a909068316475251",
          "url": "https://github.com/schungx/rhai/commit/98b294c699a163a74551eda7a3a88dfb1e16e9ae"
        },
        "date": 1596104732983,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 82473,
            "range": "± 34776",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 75,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 68,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 225,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1922,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1812,
            "range": "± 548",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6058319,
            "range": "± 1462307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 576,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 555,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 11445,
            "range": "± 1627",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 9741,
            "range": "± 2014",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 277,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 521,
            "range": "± 137",
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
            "value": 748,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 52,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1701727,
            "range": "± 379767",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2552921,
            "range": "± 953947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2011927,
            "range": "± 592795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2308,
            "range": "± 429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2308,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 336,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 374,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 717,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 826,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 302,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 309,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 201,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 273,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 540,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 304,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 387579,
            "range": "± 106747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21885069,
            "range": "± 2138739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2056,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 9064,
            "range": "± 4196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 2795,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 11577,
            "range": "± 4843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 10774,
            "range": "± 2651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 26194,
            "range": "± 9418",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2042,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 284,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1459208,
            "range": "± 361844",
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
          "id": "cb005506e2f3984dc3e8f5c0f225f3d0ec25ab0b",
          "message": "Simplify function calling.",
          "timestamp": "2020-07-31T12:11:16+08:00",
          "tree_id": "5248d5b7a83f244b9304d13aaf914e65fa53f9fb",
          "url": "https://github.com/schungx/rhai/commit/cb005506e2f3984dc3e8f5c0f225f3d0ec25ab0b"
        },
        "date": 1596169002606,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 98697,
            "range": "± 18356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 90,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 283,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2505,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2363,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6919361,
            "range": "± 1119272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 696,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 725,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15527,
            "range": "± 2744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12585,
            "range": "± 1992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 356,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 629,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 66,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 873,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 63,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1955737,
            "range": "± 267336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2848580,
            "range": "± 417960",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2391221,
            "range": "± 295974",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2549,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2556,
            "range": "± 385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 430,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 494,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 861,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 910,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 338,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 337,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 212,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 331,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 632,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 386,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 470362,
            "range": "± 77109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26638651,
            "range": "± 3153097",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2649,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11805,
            "range": "± 1665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3746,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14362,
            "range": "± 2346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14144,
            "range": "± 1728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36941,
            "range": "± 6885",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2708,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 391,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1844557,
            "range": "± 222500",
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
          "id": "49392d57d7d3dfe1cbb105c0c8ac0f2b8eee71c0",
          "message": "Fix no_std feature.",
          "timestamp": "2020-07-31T12:40:16+08:00",
          "tree_id": "868c58111a09fccd6edf678822055b0d4c02247b",
          "url": "https://github.com/schungx/rhai/commit/49392d57d7d3dfe1cbb105c0c8ac0f2b8eee71c0"
        },
        "date": 1596170926668,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 95936,
            "range": "± 13115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 94,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 89,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 269,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2467,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2330,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6761293,
            "range": "± 743433",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 687,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 731,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15509,
            "range": "± 1694",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13210,
            "range": "± 1440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 350,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 650,
            "range": "± 72",
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
            "value": 862,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 66,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2054660,
            "range": "± 265901",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2850345,
            "range": "± 286328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2391993,
            "range": "± 294781",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2577,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2606,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 430,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 508,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 908,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 958,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 343,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 353,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 219,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 326,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 614,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 398,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 481679,
            "range": "± 47902",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25583964,
            "range": "± 2518294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2758,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12737,
            "range": "± 1428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3804,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15097,
            "range": "± 1187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14958,
            "range": "± 1375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36618,
            "range": "± 3534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2853,
            "range": "± 817",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 377,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1852342,
            "range": "± 166231",
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
          "id": "dd0177f588e4f940aa3b57f1771db27f926153d9",
          "message": "Allow deprecated API.",
          "timestamp": "2020-08-03T10:07:52+08:00",
          "tree_id": "eed7705f596c6489bb87600b0b47f32d5e6f7cd2",
          "url": "https://github.com/schungx/rhai/commit/dd0177f588e4f940aa3b57f1771db27f926153d9"
        },
        "date": 1596529965960,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 84698,
            "range": "± 998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 82,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 243,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 2231,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 2080,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5949992,
            "range": "± 10501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 600,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 643,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13715,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 11733,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 308,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 555,
            "range": "± 1",
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
            "value": 766,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1795278,
            "range": "± 8389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2499646,
            "range": "± 2413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2082446,
            "range": "± 1915",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2299,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2357,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 381,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 434,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 780,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 812,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 295,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 293,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 197,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 275,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 530,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 342,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 404374,
            "range": "± 1402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22220261,
            "range": "± 25385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2433,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10596,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 3250,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 12805,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12468,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 31313,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2432,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 317,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1581776,
            "range": "± 2411",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
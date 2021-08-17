window.BENCHMARK_DATA = {
  "lastUpdate": 1629214280539,
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
          "id": "d2ded7733a99c73b4a501f62695826754df0d108",
          "message": "Add support for line continuation and multi-line string literals.",
          "timestamp": "2021-03-30T00:21:09+08:00",
          "tree_id": "781e3b60b55753b565a27a96491d151d2ce5f436",
          "url": "https://github.com/schungx/rhai/commit/d2ded7733a99c73b4a501f62695826754df0d108"
        },
        "date": 1617035129550,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 181457,
            "range": "± 2027",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 77,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 227,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1296,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1329,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6099948,
            "range": "± 21686",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 527,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 559,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18907,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17911,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 638,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1135,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1738880,
            "range": "± 16415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1822391,
            "range": "± 21318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1765610,
            "range": "± 39985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24527,
            "range": "± 450",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8431,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1834,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1857,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 537,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 559,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1483,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1517,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1223,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1676,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 673,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 686,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 347,
            "range": "± 3",
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
            "value": 1010,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 569,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 414339,
            "range": "± 1251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23391990,
            "range": "± 43560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4104,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15417,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6081,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20363,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17423,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44541,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3403,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 551,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1777130,
            "range": "± 8459",
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
          "id": "ec7b906f7153331bb03738376f43e7ae4d50aa46",
          "message": "Patah smartstring for no-std.",
          "timestamp": "2021-03-30T18:06:58+08:00",
          "tree_id": "bcc7c95e0d3edfa2040622483bc737ee4975f13e",
          "url": "https://github.com/schungx/rhai/commit/ec7b906f7153331bb03738376f43e7ae4d50aa46"
        },
        "date": 1617099044468,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 154488,
            "range": "± 74882",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 57,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 53,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 160,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1091,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1102,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5115998,
            "range": "± 11016",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 438,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 462,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15743,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14851,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 526,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 957,
            "range": "± 7",
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
            "value": 1454393,
            "range": "± 3393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1602265,
            "range": "± 11492",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1463223,
            "range": "± 5399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21852,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7128,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1487,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1508,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 438,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 459,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1253,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1248,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1021,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1421,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 554,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 560,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 287,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 427,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 874,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 484,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 368714,
            "range": "± 3337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21008010,
            "range": "± 96568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3442,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12921,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5212,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17284,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14695,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38077,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2903,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 468,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1475856,
            "range": "± 6776",
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
          "id": "98afb2e7d64754e346b6b181c233cdb51a6abad3",
          "message": "Fix feature builds.",
          "timestamp": "2021-03-31T10:16:38+08:00",
          "tree_id": "166a2335315a333a1c0fabcf0b704fb911be2a92",
          "url": "https://github.com/schungx/rhai/commit/98afb2e7d64754e346b6b181c233cdb51a6abad3"
        },
        "date": 1617157663797,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 181044,
            "range": "± 20985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 77,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 69,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 209,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1290,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1289,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5838884,
            "range": "± 371260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 504,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 552,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18135,
            "range": "± 1448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16630,
            "range": "± 1357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 603,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1096,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 97,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 97,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 98,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1639177,
            "range": "± 120626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1712748,
            "range": "± 129368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1677608,
            "range": "± 93650",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24220,
            "range": "± 1017",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8313,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1738,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1766,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 503,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 536,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1455,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1363,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1185,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1592,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 648,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 628,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 331,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 464,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1007,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 544,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 411324,
            "range": "± 14424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22286789,
            "range": "± 1293471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4009,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14580,
            "range": "± 848",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5921,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19501,
            "range": "± 1169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16764,
            "range": "± 1117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42542,
            "range": "± 2468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3261,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 534,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1726228,
            "range": "± 131268",
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
          "id": "35394e170a9003d32a302d5aff2d1875f67f2c4d",
          "message": "Move flags into include.",
          "timestamp": "2021-03-31T10:30:52+08:00",
          "tree_id": "b5b3c8b13d2d3c31f5fe36e632c68247d61284bb",
          "url": "https://github.com/schungx/rhai/commit/35394e170a9003d32a302d5aff2d1875f67f2c4d"
        },
        "date": 1617158219547,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 182279,
            "range": "± 20144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 76,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 71,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 229,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1307,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1336,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6201275,
            "range": "± 114089",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 524,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 554,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18792,
            "range": "± 1278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17682,
            "range": "± 672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 646,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1146,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 102,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 102,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 102,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1693303,
            "range": "± 55194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1756589,
            "range": "± 57673",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1706063,
            "range": "± 100247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24637,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8453,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1773,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1816,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 527,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 561,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1468,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1437,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1181,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1647,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 664,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 672,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 348,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 487,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1018,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 566,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 414010,
            "range": "± 14224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23002325,
            "range": "± 766892",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4280,
            "range": "± 947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15388,
            "range": "± 1447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6210,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20535,
            "range": "± 1806",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17734,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45225,
            "range": "± 544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3403,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 553,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1810815,
            "range": "± 38220",
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
          "id": "961e5a6cd8548de29b6077761e3ff2fe76eb7a17",
          "message": "Add metadata flag to codegen tests.",
          "timestamp": "2021-03-31T10:27:53+08:00",
          "tree_id": "dc42ccfa3a0984a25ea0df7326ff658f144ef7d8",
          "url": "https://github.com/schungx/rhai/commit/961e5a6cd8548de29b6077761e3ff2fe76eb7a17"
        },
        "date": 1617158246800,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 181290,
            "range": "± 5915",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 75,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 71,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 218,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1277,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1333,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6073476,
            "range": "± 307376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 519,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 549,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18671,
            "range": "± 760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17368,
            "range": "± 1009",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 612,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1130,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 100,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 99,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 100,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1715068,
            "range": "± 54344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1796675,
            "range": "± 54562",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1739130,
            "range": "± 63778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24613,
            "range": "± 876",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8407,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1810,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1838,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 526,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 557,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1493,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1439,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1169,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1655,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 653,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 676,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 347,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 490,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 982,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 558,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 415038,
            "range": "± 10718",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22755779,
            "range": "± 452456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4233,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15602,
            "range": "± 554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6072,
            "range": "± 549",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20079,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17494,
            "range": "± 1103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43614,
            "range": "± 5121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3355,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 541,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1765522,
            "range": "± 142538",
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
          "id": "1866331e7be342d0e463e238ec5a44d8f41783fb",
          "message": "Unsafe code statement.",
          "timestamp": "2021-04-02T14:38:20+08:00",
          "tree_id": "4a948f3a6ba0d83d8007ae3ec610e10d6423ad91",
          "url": "https://github.com/schungx/rhai/commit/1866331e7be342d0e463e238ec5a44d8f41783fb"
        },
        "date": 1617357806426,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 157684,
            "range": "± 49750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 75,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 63,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 220,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1270,
            "range": "± 396",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1322,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6078401,
            "range": "± 681382",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 529,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 564,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17883,
            "range": "± 1480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17164,
            "range": "± 5405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 636,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1203,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 101,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 102,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 101,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1732331,
            "range": "± 243237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1801000,
            "range": "± 319573",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1743190,
            "range": "± 158421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25685,
            "range": "± 7074",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8765,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1784,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1823,
            "range": "± 9",
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
            "value": 558,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1157,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1057,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1020,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1206,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 557,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 674,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 344,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 492,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 997,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 550,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 412005,
            "range": "± 1245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20196785,
            "range": "± 5436594",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3695,
            "range": "± 819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13108,
            "range": "± 1946",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5298,
            "range": "± 1621",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16952,
            "range": "± 3290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13284,
            "range": "± 1789",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 30554,
            "range": "± 6193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2430,
            "range": "± 742",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 421,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1339392,
            "range": "± 183312",
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
          "id": "b089d5b8f4ba071be612f51871f9a4d2401de3ea",
          "message": "Fix bug in property setter op-assignment.",
          "timestamp": "2021-04-03T11:12:35+08:00",
          "tree_id": "a1fac125ede45cf95911c627157f4ce5a082acc0",
          "url": "https://github.com/schungx/rhai/commit/b089d5b8f4ba071be612f51871f9a4d2401de3ea"
        },
        "date": 1617420340039,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 171735,
            "range": "± 24911",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 79,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 75,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 224,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1264,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1299,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6307952,
            "range": "± 694499",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 530,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 570,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18364,
            "range": "± 3353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16808,
            "range": "± 2628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 601,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1144,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 99,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 97,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 103,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1727289,
            "range": "± 213728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1854157,
            "range": "± 222820",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1760151,
            "range": "± 187304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26305,
            "range": "± 3376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8649,
            "range": "± 1171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1765,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1924,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 539,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 572,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1430,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1403,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1190,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1653,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 637,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 647,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 342,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 496,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 949,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 541,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 397396,
            "range": "± 51644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25860687,
            "range": "± 2807254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4240,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14809,
            "range": "± 1970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5838,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19026,
            "range": "± 2040",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16734,
            "range": "± 2190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42799,
            "range": "± 5107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3207,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 546,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1778879,
            "range": "± 360456",
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
          "id": "f7ad1cec3911ab9c9c047fc2305db41df5792eb0",
          "message": "Fix builds.",
          "timestamp": "2021-04-03T11:49:16+08:00",
          "tree_id": "ea89fb33f341caff8b0b8e57548b5d5963d2b695",
          "url": "https://github.com/schungx/rhai/commit/f7ad1cec3911ab9c9c047fc2305db41df5792eb0"
        },
        "date": 1617422225218,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 179838,
            "range": "± 47025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 92,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 247,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1317,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1366,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6822374,
            "range": "± 990711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 553,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 579,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19005,
            "range": "± 2007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18112,
            "range": "± 4984",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 649,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1160,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 106,
            "range": "± 28",
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
            "value": 107,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1828084,
            "range": "± 411860",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1933433,
            "range": "± 404989",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1848031,
            "range": "± 304795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27342,
            "range": "± 6538",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8936,
            "range": "± 1682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1895,
            "range": "± 802",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1878,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 553,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 560,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1531,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1500,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1241,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1773,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 691,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 681,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 354,
            "range": "± 30",
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
            "value": 1040,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 568,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 417207,
            "range": "± 11672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26549473,
            "range": "± 2014669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4318,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15430,
            "range": "± 1032",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6237,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21353,
            "range": "± 2601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18551,
            "range": "± 4168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46030,
            "range": "± 7661",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3522,
            "range": "± 713",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 615,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1898398,
            "range": "± 245993",
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
          "id": "b1452f4c35fed0f58459b7aa5e01c75a199e45a0",
          "message": "Fix no_object build.",
          "timestamp": "2021-04-03T12:00:22+08:00",
          "tree_id": "05a59ca2b5ba56e2b10dce0f8059367f21946645",
          "url": "https://github.com/schungx/rhai/commit/b1452f4c35fed0f58459b7aa5e01c75a199e45a0"
        },
        "date": 1617423151030,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 183843,
            "range": "± 45364",
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
            "value": 79,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 230,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1333,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1400,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6645053,
            "range": "± 771386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 541,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 581,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18529,
            "range": "± 3695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18007,
            "range": "± 2403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 642,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1194,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 104,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 104,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 107,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1802224,
            "range": "± 252909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1905707,
            "range": "± 254262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1861992,
            "range": "± 286128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27103,
            "range": "± 5417",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8806,
            "range": "± 1003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1908,
            "range": "± 393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1873,
            "range": "± 422",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 539,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 586,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1525,
            "range": "± 324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1514,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1277,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1772,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 705,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 680,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 350,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 512,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1073,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 579,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 422220,
            "range": "± 82148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26127425,
            "range": "± 1610940",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4341,
            "range": "± 903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15701,
            "range": "± 1862",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6211,
            "range": "± 746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20285,
            "range": "± 2682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17615,
            "range": "± 3245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44287,
            "range": "± 7368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3365,
            "range": "± 362",
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
            "value": 1873510,
            "range": "± 522272",
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
          "id": "ab0ea87f9c5126ee2644fcf356874abfb3234d49",
          "message": "Allow sync in test.",
          "timestamp": "2021-04-03T12:10:08+08:00",
          "tree_id": "d44d0e24fcf3f107bfbbf47feca2a8e13d89d84f",
          "url": "https://github.com/schungx/rhai/commit/ab0ea87f9c5126ee2644fcf356874abfb3234d49"
        },
        "date": 1617513226357,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 182793,
            "range": "± 33961",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 77,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 222,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1310,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1347,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6199472,
            "range": "± 44249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 531,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 564,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18272,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17337,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 628,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1143,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 101,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 101,
            "range": "± 0",
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
            "value": 1754184,
            "range": "± 11061",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1798805,
            "range": "± 27313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1744284,
            "range": "± 18604",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24835,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8581,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1824,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1880,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 529,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 553,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1421,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1434,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1209,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1647,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 663,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 669,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 344,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 499,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1032,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 565,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 411563,
            "range": "± 1408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23698572,
            "range": "± 459617",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4207,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15273,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6079,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19973,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17092,
            "range": "± 213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43798,
            "range": "± 474",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3285,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 561,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1784125,
            "range": "± 6881",
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
          "id": "e6c878edf341bd92411e35c99c1e2fd8daae4b06",
          "message": "Implement string interpolation.",
          "timestamp": "2021-04-04T13:13:07+08:00",
          "tree_id": "85b4dce205e406e2075dbbb5e652b2dfc94138da",
          "url": "https://github.com/schungx/rhai/commit/e6c878edf341bd92411e35c99c1e2fd8daae4b06"
        },
        "date": 1617513870949,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 136906,
            "range": "± 20679",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 80,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 75,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 198,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1101,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1217,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6262113,
            "range": "± 1987207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 523,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 488,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15506,
            "range": "± 3330",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13729,
            "range": "± 2586",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 596,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1128,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 82,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1352231,
            "range": "± 167564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4294903,
            "range": "± 812321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4198889,
            "range": "± 434680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20421,
            "range": "± 8700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7063,
            "range": "± 710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1771,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1817,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 472,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 492,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1154,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1174,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 925,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1355,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 500,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 513,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 257,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 376,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 741,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 430,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 323331,
            "range": "± 34362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20726153,
            "range": "± 2562101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3302,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11462,
            "range": "± 1392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4704,
            "range": "± 1121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15427,
            "range": "± 2644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14202,
            "range": "± 4835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33144,
            "range": "± 3760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3092,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 573,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1727698,
            "range": "± 106200",
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
          "id": "20aaf1826a63bfa9be3817dce31d3bbf6483fa4f",
          "message": "Fix builds.",
          "timestamp": "2021-04-04T15:06:13+08:00",
          "tree_id": "2d7336d6194981662f4f0f9aa2a219e9c22f0e04",
          "url": "https://github.com/schungx/rhai/commit/20aaf1826a63bfa9be3817dce31d3bbf6483fa4f"
        },
        "date": 1617520602671,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 190762,
            "range": "± 36240",
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
            "value": 102,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 267,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1474,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1528,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6945971,
            "range": "± 610185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 583,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 640,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19366,
            "range": "± 2912",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17154,
            "range": "± 1343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 671,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1226,
            "range": "± 169",
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
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 108,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1877061,
            "range": "± 214423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1960845,
            "range": "± 439495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1878104,
            "range": "± 199803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 28163,
            "range": "± 3366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9271,
            "range": "± 1551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2347,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2496,
            "range": "± 1358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 633,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 670,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1565,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1591,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1291,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1804,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 704,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 668,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 364,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 519,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1009,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 574,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 440306,
            "range": "± 71506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28466257,
            "range": "± 2019001",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4356,
            "range": "± 797",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16236,
            "range": "± 2800",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6431,
            "range": "± 1034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20860,
            "range": "± 2323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18169,
            "range": "± 1561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43258,
            "range": "± 18576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3281,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 587,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1953677,
            "range": "± 289606",
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
          "id": "8956a77c8c4aa43b977dc2cfeb4030e74af30b22",
          "message": "Add new state in TokenizeState to switch back to text mode.",
          "timestamp": "2021-04-04T23:23:10+08:00",
          "tree_id": "9f14664926615d3ea086620e4fd53d61985a28d0",
          "url": "https://github.com/schungx/rhai/commit/8956a77c8c4aa43b977dc2cfeb4030e74af30b22"
        },
        "date": 1617550351149,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 180632,
            "range": "± 15124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 99,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 89,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 249,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1351,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1404,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6142880,
            "range": "± 340853",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 546,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 587,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17987,
            "range": "± 1051",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17542,
            "range": "± 996",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 647,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1175,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 102,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 99,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 104,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1722619,
            "range": "± 75797",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1785524,
            "range": "± 96775",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1727146,
            "range": "± 98749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25064,
            "range": "± 1217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8649,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2358,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2432,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 613,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 645,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1441,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1451,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1174,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1621,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 645,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 662,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 342,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 493,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1038,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 579,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 408875,
            "range": "± 31348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23865640,
            "range": "± 733532",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4182,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15051,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6010,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20122,
            "range": "± 706",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17222,
            "range": "± 904",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42257,
            "range": "± 3594",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3283,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 582,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1878916,
            "range": "± 62804",
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
          "id": "f5d3a0ef4faa5f76077c24e74a865844b1e69d58",
          "message": "Promote expr block.",
          "timestamp": "2021-04-05T14:57:07+08:00",
          "tree_id": "5f27a536fc0df5285bf6e506f1b33f4c2d5132ba",
          "url": "https://github.com/schungx/rhai/commit/f5d3a0ef4faa5f76077c24e74a865844b1e69d58"
        },
        "date": 1617618454699,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 173920,
            "range": "± 18480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 104,
            "range": "± 30",
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
            "value": 244,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1358,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1424,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6429654,
            "range": "± 251410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 551,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 613,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17930,
            "range": "± 1670",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17159,
            "range": "± 607",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 639,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1122,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 104,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 103,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 102,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1772815,
            "range": "± 98815",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1869966,
            "range": "± 393558",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1815820,
            "range": "± 116733",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26388,
            "range": "± 6904",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9043,
            "range": "± 755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2344,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2337,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 597,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 641,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1443,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1465,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1155,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1664,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 659,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 645,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 340,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 493,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 967,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 580,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 403389,
            "range": "± 57883",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25181789,
            "range": "± 1973493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4231,
            "range": "± 564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15019,
            "range": "± 1226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5956,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19772,
            "range": "± 2715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17461,
            "range": "± 1413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41150,
            "range": "± 4247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3234,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 545,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1778224,
            "range": "± 127902",
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
          "id": "94fc5af285cf6049f76a23c81de71001edfbd8a9",
          "message": "Store short index in variable access.",
          "timestamp": "2021-04-05T23:06:48+08:00",
          "tree_id": "59430370ccd51f2a5ce6860f4b43ac859a33ec98",
          "url": "https://github.com/schungx/rhai/commit/94fc5af285cf6049f76a23c81de71001edfbd8a9"
        },
        "date": 1617635933811,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 190160,
            "range": "± 21858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 112,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 102,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 264,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1396,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1504,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6931315,
            "range": "± 495543",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 579,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 664,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18851,
            "range": "± 2454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18179,
            "range": "± 2408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 647,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1208,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 111,
            "range": "± 11",
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
            "value": 109,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1775969,
            "range": "± 236254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1858233,
            "range": "± 206412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1849995,
            "range": "± 148212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 28731,
            "range": "± 2830",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9708,
            "range": "± 1016",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2449,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2497,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 664,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 702,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1588,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1576,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1300,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1871,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 720,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 697,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 357,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 564,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1057,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 617,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 459496,
            "range": "± 42560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27699560,
            "range": "± 1724317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4606,
            "range": "± 764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16367,
            "range": "± 1796",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6417,
            "range": "± 576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20577,
            "range": "± 1903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18842,
            "range": "± 2701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46382,
            "range": "± 5663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3510,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 599,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1889368,
            "range": "± 176632",
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
          "id": "d3cfb3c605e71d98b22cd3f81f55efe65d4a015c",
          "message": "Optimize position in variable access.",
          "timestamp": "2021-04-05T23:59:15+08:00",
          "tree_id": "c028d2b78316bff42d50542595179a8c94fa9c91",
          "url": "https://github.com/schungx/rhai/commit/d3cfb3c605e71d98b22cd3f81f55efe65d4a015c"
        },
        "date": 1617639075151,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 199789,
            "range": "± 55531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 113,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 104,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 305,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1437,
            "range": "± 2313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1529,
            "range": "± 764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7876855,
            "range": "± 1797389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 598,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 648,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19749,
            "range": "± 8934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18534,
            "range": "± 3522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 674,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1226,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 112,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 116,
            "range": "± 17",
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
            "value": 1916790,
            "range": "± 336038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1958594,
            "range": "± 362260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1921260,
            "range": "± 320530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 29143,
            "range": "± 6786",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9655,
            "range": "± 2088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2505,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2494,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 646,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 688,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1565,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1565,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1342,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1812,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 725,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 722,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 368,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 556,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1088,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 614,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 477718,
            "range": "± 141264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 29083479,
            "range": "± 4959126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4648,
            "range": "± 813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 17052,
            "range": "± 6244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6837,
            "range": "± 2192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 22014,
            "range": "± 5147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 19580,
            "range": "± 4365",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47776,
            "range": "± 10136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3800,
            "range": "± 826",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 677,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2056730,
            "range": "± 423773",
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
          "id": "f17a826f998191a85cdb1ca0c897573cbe460ab9",
          "message": "Refine debug print-out.",
          "timestamp": "2021-04-06T23:18:41+08:00",
          "tree_id": "125e960c9fd7e961022ccf8336fcd451959e67f2",
          "url": "https://github.com/schungx/rhai/commit/f17a826f998191a85cdb1ca0c897573cbe460ab9"
        },
        "date": 1617722883259,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 157060,
            "range": "± 12923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 88,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 85,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 216,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1183,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1225,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5743270,
            "range": "± 555626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 490,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 520,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16119,
            "range": "± 2487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15511,
            "range": "± 1803",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 606,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 995,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 97,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 96,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 99,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1537147,
            "range": "± 234256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1621800,
            "range": "± 210638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1559507,
            "range": "± 171520",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22860,
            "range": "± 3431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7303,
            "range": "± 1349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2063,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2081,
            "range": "± 970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 526,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 557,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1337,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1273,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1044,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1452,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 586,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 600,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 302,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 436,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 887,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 480,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 378512,
            "range": "± 90334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22990915,
            "range": "± 1489812",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3708,
            "range": "± 333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13839,
            "range": "± 2145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5171,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17822,
            "range": "± 750",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15516,
            "range": "± 2293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36193,
            "range": "± 6569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2834,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 496,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1617338,
            "range": "± 224963",
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
          "id": "0f2e7e38256cd055f6cc5bb4bac5fd725fc2b038",
          "message": "Fix builds and tests.",
          "timestamp": "2021-04-06T23:28:22+08:00",
          "tree_id": "d68dbb611b4c6c8de9eab8936245352d3d8064b5",
          "url": "https://github.com/schungx/rhai/commit/0f2e7e38256cd055f6cc5bb4bac5fd725fc2b038"
        },
        "date": 1617723248131,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 178982,
            "range": "± 15245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 101,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 89,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 246,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1330,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1387,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6280309,
            "range": "± 232210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 558,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 587,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18435,
            "range": "± 3411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16822,
            "range": "± 1079",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 616,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1102,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 102,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 100,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 101,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1732171,
            "range": "± 51139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1823829,
            "range": "± 58547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1765699,
            "range": "± 43688",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25429,
            "range": "± 1083",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8758,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2366,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2445,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 617,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 656,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1437,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1423,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1252,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1691,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 671,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 659,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 347,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 507,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1022,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 541,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 413601,
            "range": "± 32911",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23462615,
            "range": "± 1501290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4137,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14549,
            "range": "± 892",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5951,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19846,
            "range": "± 1158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17490,
            "range": "± 807",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43230,
            "range": "± 2791",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3450,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 581,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1844272,
            "range": "± 151383",
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
          "id": "29d186b361a35a884b71456c5a9303f8d5453866",
          "message": "Put doc-comments under metadata flag.",
          "timestamp": "2021-04-09T22:49:47+08:00",
          "tree_id": "bb78233893d3776af941fe52f83a0e52a1d0e67e",
          "url": "https://github.com/schungx/rhai/commit/29d186b361a35a884b71456c5a9303f8d5453866"
        },
        "date": 1617980225538,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 157534,
            "range": "± 23896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 98,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 253,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1299,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1419,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6183457,
            "range": "± 1167268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 539,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 592,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17582,
            "range": "± 2830",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16457,
            "range": "± 3327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 612,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1159,
            "range": "± 315",
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
            "value": 103,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 99,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1598768,
            "range": "± 190361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1724922,
            "range": "± 415024",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1710067,
            "range": "± 223698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25005,
            "range": "± 2792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8124,
            "range": "± 792",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2273,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2252,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 588,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 620,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1429,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1457,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1170,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1624,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 630,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 658,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 346,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 502,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 986,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 563,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 409171,
            "range": "± 51950",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24961544,
            "range": "± 3524987",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4007,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14331,
            "range": "± 1381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5764,
            "range": "± 622",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19596,
            "range": "± 2389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16630,
            "range": "± 2946",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39122,
            "range": "± 6968",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3156,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 567,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1848517,
            "range": "± 186670",
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
          "id": "42555ac732e880df9315e84604ad195ed5136dae",
          "message": "Unify string continuation parsing.",
          "timestamp": "2021-04-10T10:20:17+08:00",
          "tree_id": "66708d7dbc0f0385dbc44fa60620b524693bc7ed",
          "url": "https://github.com/schungx/rhai/commit/42555ac732e880df9315e84604ad195ed5136dae"
        },
        "date": 1618021812433,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 175496,
            "range": "± 14796",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 94,
            "range": "± 4",
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
            "value": 265,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1327,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1325,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6165579,
            "range": "± 509724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 535,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 601,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17753,
            "range": "± 1196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17132,
            "range": "± 1597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 628,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1121,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 100,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 104,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 105,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1652744,
            "range": "± 127421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1732933,
            "range": "± 135536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1700932,
            "range": "± 126509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24615,
            "range": "± 1206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8688,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2314,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2309,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 590,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 622,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1435,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1401,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1195,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1655,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 643,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 649,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 366,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 473,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1029,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 557,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 436650,
            "range": "± 22363",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23898843,
            "range": "± 801501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4170,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15309,
            "range": "± 831",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6181,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20331,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18043,
            "range": "± 627",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43410,
            "range": "± 3815",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3441,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 578,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1815364,
            "range": "± 37262",
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
          "id": "716e9cf779fca36ade7328837acc01c53d7fcf76",
          "message": "Fix string parsing state.",
          "timestamp": "2021-04-10T11:11:42+08:00",
          "tree_id": "3af0d2680aa96ed90bd003be10ba2de00834e19f",
          "url": "https://github.com/schungx/rhai/commit/716e9cf779fca36ade7328837acc01c53d7fcf76"
        },
        "date": 1618024659978,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 186262,
            "range": "± 63274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 94,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 90,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 243,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1273,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1360,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6295493,
            "range": "± 134096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 544,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 584,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18687,
            "range": "± 531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17467,
            "range": "± 1610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 623,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1094,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 104,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 104,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 103,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1636774,
            "range": "± 98904",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1795213,
            "range": "± 63694",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1730241,
            "range": "± 108493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24836,
            "range": "± 1224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8718,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2362,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2330,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 582,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 643,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1398,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1417,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1165,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1615,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 636,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 635,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 368,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 483,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1034,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 546,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 414087,
            "range": "± 28051",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23367467,
            "range": "± 1290405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4051,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15082,
            "range": "± 2139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6152,
            "range": "± 473",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19310,
            "range": "± 1119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17213,
            "range": "± 843",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42805,
            "range": "± 2222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3341,
            "range": "± 212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 566,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1825781,
            "range": "± 126644",
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
          "id": "6b4553ffc8da2ddd20c125bce5b8a65962008065",
          "message": "Fix panic with unterminated interpolated string.",
          "timestamp": "2021-04-10T17:47:44+08:00",
          "tree_id": "3d56b0e57d5e4fa2ac73c257c2a7f4e4ee570675",
          "url": "https://github.com/schungx/rhai/commit/6b4553ffc8da2ddd20c125bce5b8a65962008065"
        },
        "date": 1618048738400,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 165929,
            "range": "± 25587",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 92,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 77,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 206,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1197,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1268,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5562129,
            "range": "± 866176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 469,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 540,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15996,
            "range": "± 2728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15234,
            "range": "± 3037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 558,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 997,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 91,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 90,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 90,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1482488,
            "range": "± 279725",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1592335,
            "range": "± 284657",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1524589,
            "range": "± 249482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21927,
            "range": "± 3278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7769,
            "range": "± 1400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2110,
            "range": "± 380",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2141,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 528,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 548,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1244,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1228,
            "range": "± 271",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1009,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1402,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 564,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 565,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 302,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 422,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 906,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 532,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 366906,
            "range": "± 66922",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21186663,
            "range": "± 3449863",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3853,
            "range": "± 557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13232,
            "range": "± 1434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5334,
            "range": "± 638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17439,
            "range": "± 1864",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14745,
            "range": "± 2471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39789,
            "range": "± 9670",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2904,
            "range": "± 544",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 521,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1597075,
            "range": "± 225873",
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
          "id": "44e2e6aeb4fdccf72fd38fa7d6bc2cbfdb8f08c5",
          "message": "Fix string handling at EOF.",
          "timestamp": "2021-04-11T21:49:03+08:00",
          "tree_id": "4015fdfc6cb21cae657309f577ce1dd1c2b0c9d0",
          "url": "https://github.com/schungx/rhai/commit/44e2e6aeb4fdccf72fd38fa7d6bc2cbfdb8f08c5"
        },
        "date": 1618149546864,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 176000,
            "range": "± 38037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 100,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 92,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 246,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1390,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1336,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6422524,
            "range": "± 636576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 556,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 585,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18672,
            "range": "± 2929",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17492,
            "range": "± 1383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 644,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1177,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 103,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 124,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 101,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1729492,
            "range": "± 143595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1827810,
            "range": "± 183218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1750330,
            "range": "± 204880",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24735,
            "range": "± 6231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8437,
            "range": "± 1937",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2289,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2316,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 590,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 628,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1449,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1452,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1218,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1676,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 670,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 673,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 338,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 501,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1013,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 558,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 422225,
            "range": "± 45470",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25790561,
            "range": "± 2223300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4128,
            "range": "± 1254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15345,
            "range": "± 2468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6026,
            "range": "± 644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20383,
            "range": "± 3630",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17757,
            "range": "± 1624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42914,
            "range": "± 3608",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3376,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 566,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1830198,
            "range": "± 345904",
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
          "id": "980a13ca4264ca4b6f3c68c0895f7a1efa185910",
          "message": "Add switch case conditions.",
          "timestamp": "2021-04-16T12:04:33+08:00",
          "tree_id": "f142702c147f1ea2dd3c9d626fb47319a0169b8d",
          "url": "https://github.com/schungx/rhai/commit/980a13ca4264ca4b6f3c68c0895f7a1efa185910"
        },
        "date": 1618547463984,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 188173,
            "range": "± 50161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 109,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 100,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 264,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1443,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1482,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6705619,
            "range": "± 669669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 574,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 630,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18693,
            "range": "± 1931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17660,
            "range": "± 1914",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 666,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1189,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 109,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 110,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 110,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1834491,
            "range": "± 141131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1889056,
            "range": "± 144607",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1826288,
            "range": "± 196448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27118,
            "range": "± 2248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9140,
            "range": "± 1007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2463,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2494,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 622,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 663,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1528,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1527,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1312,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1782,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 707,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 680,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 356,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 532,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1051,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 591,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 452635,
            "range": "± 66847",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27704893,
            "range": "± 3820378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4372,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15732,
            "range": "± 1718",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6114,
            "range": "± 602",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20215,
            "range": "± 5375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18096,
            "range": "± 872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44397,
            "range": "± 4547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3455,
            "range": "± 582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 608,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1953791,
            "range": "± 874667",
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
          "id": "208e5fdbf493089dbb76b3321a80d249ce52b7e4",
          "message": "New switch errors.",
          "timestamp": "2021-04-16T13:28:36+08:00",
          "tree_id": "a8fbf61a858186c6c8e9c94a23406bf618bc568e",
          "url": "https://github.com/schungx/rhai/commit/208e5fdbf493089dbb76b3321a80d249ce52b7e4"
        },
        "date": 1618551405518,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 136293,
            "range": "± 21807",
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
            "value": 66,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 168,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1063,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 984,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4884126,
            "range": "± 768812",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 385,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 469,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 13303,
            "range": "± 1029",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12085,
            "range": "± 2651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 466,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 804,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81,
            "range": "± 26",
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
            "value": 73,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1273779,
            "range": "± 109822",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1337560,
            "range": "± 242493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1289669,
            "range": "± 136166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 17287,
            "range": "± 2168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6469,
            "range": "± 981",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1767,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1781,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 459,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 470,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1063,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1011,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 870,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1179,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 466,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 511,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 251,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 336,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 753,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 397,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 304705,
            "range": "± 50686",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17755630,
            "range": "± 1203807",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3019,
            "range": "± 645",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11161,
            "range": "± 2015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4497,
            "range": "± 707",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15730,
            "range": "± 4526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13407,
            "range": "± 3477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32893,
            "range": "± 9540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2881,
            "range": "± 884",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 419,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1369550,
            "range": "± 244812",
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
          "id": "6eaee57578305d163000da964be28c00cc7d8594",
          "message": "Bump version.",
          "timestamp": "2021-04-16T22:07:18+08:00",
          "tree_id": "18baf31bcf8c9093223467307c8bd7c7101651df",
          "url": "https://github.com/schungx/rhai/commit/6eaee57578305d163000da964be28c00cc7d8594"
        },
        "date": 1618582426866,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 179521,
            "range": "± 33169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 112,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 103,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 261,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1400,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1435,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6600912,
            "range": "± 964042",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 583,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 624,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18500,
            "range": "± 2355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17844,
            "range": "± 2498",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 651,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1159,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 107,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 106,
            "range": "± 5",
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
            "value": 1825416,
            "range": "± 429391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1928003,
            "range": "± 465720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1806936,
            "range": "± 422676",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26725,
            "range": "± 3149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9198,
            "range": "± 1508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2381,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2426,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 642,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 703,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1579,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1511,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1249,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1730,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 662,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 673,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 365,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 538,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1058,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 622,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 426040,
            "range": "± 13860",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27248669,
            "range": "± 2703715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4556,
            "range": "± 890",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16269,
            "range": "± 1739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6674,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21357,
            "range": "± 1639",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18703,
            "range": "± 5270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 47558,
            "range": "± 25551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3705,
            "range": "± 877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 618,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1952595,
            "range": "± 139252",
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
          "id": "01f0cc028b0e7d18fd1d2095572c16116032f6d5",
          "message": "Use no-std-compat to build no-std.",
          "timestamp": "2021-04-17T15:15:54+08:00",
          "tree_id": "e7dc40bb91e7a7e472feffd6d5da1c34712e10ed",
          "url": "https://github.com/schungx/rhai/commit/01f0cc028b0e7d18fd1d2095572c16116032f6d5"
        },
        "date": 1618644481476,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 180924,
            "range": "± 23125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 106,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 98,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 262,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1399,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1462,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6691172,
            "range": "± 722065",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 575,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 625,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19402,
            "range": "± 3211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17943,
            "range": "± 2436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 650,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1158,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 110,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 110,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 110,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1796567,
            "range": "± 174079",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1927760,
            "range": "± 417416",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1843731,
            "range": "± 247379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27719,
            "range": "± 4413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8978,
            "range": "± 1653",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2463,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2372,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 617,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 653,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1565,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1537,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1279,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1836,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 729,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 674,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 363,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 546,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1066,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 602,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 446515,
            "range": "± 66484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26998157,
            "range": "± 1879037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4486,
            "range": "± 739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16189,
            "range": "± 2610",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6334,
            "range": "± 1110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21178,
            "range": "± 3014",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18242,
            "range": "± 1676",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44808,
            "range": "± 5888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3464,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 608,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1954105,
            "range": "± 366869",
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
          "id": "1be7e60be2e3ae002a52f068c820ad6bd8a2dd8b",
          "message": "Automatic global module.",
          "timestamp": "2021-04-17T17:25:35+08:00",
          "tree_id": "c23c37bad653acd5060c65dcebf62b9696e1c6b4",
          "url": "https://github.com/schungx/rhai/commit/1be7e60be2e3ae002a52f068c820ad6bd8a2dd8b"
        },
        "date": 1618652219413,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 173299,
            "range": "± 11241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 100,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 90,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 224,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1304,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1327,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5808568,
            "range": "± 564536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 590,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 627,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16709,
            "range": "± 1385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15691,
            "range": "± 1427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 663,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1107,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 167,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 158,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 161,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1510957,
            "range": "± 202449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1641971,
            "range": "± 232149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1646408,
            "range": "± 157845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23443,
            "range": "± 2461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8334,
            "range": "± 971",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2342,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2388,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 638,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 650,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1458,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1527,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1298,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1556,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 662,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 708,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 384,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 504,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 997,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 560,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 392453,
            "range": "± 43538",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21982680,
            "range": "± 1519352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3864,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13679,
            "range": "± 1446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5426,
            "range": "± 454",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18533,
            "range": "± 1436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16011,
            "range": "± 1111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41261,
            "range": "± 3728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3074,
            "range": "± 343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 540,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1670811,
            "range": "± 140005",
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
          "id": "eefdc0935242a6137eb05d1bb2b72ae2e1842c66",
          "message": "Allow shadowing of global.",
          "timestamp": "2021-04-17T18:40:16+08:00",
          "tree_id": "9dbe795f92136aaf15d2990fdbaa0ea1d1a7ac44",
          "url": "https://github.com/schungx/rhai/commit/eefdc0935242a6137eb05d1bb2b72ae2e1842c66"
        },
        "date": 1618657240362,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 172410,
            "range": "± 18331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 100,
            "range": "± 12",
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
            "value": 247,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1347,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1372,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6426672,
            "range": "± 735511",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 557,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 617,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18300,
            "range": "± 3543",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16356,
            "range": "± 2353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 634,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1087,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 108,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 107,
            "range": "± 15",
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
            "value": 1727499,
            "range": "± 219189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1782374,
            "range": "± 270305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1725264,
            "range": "± 477002",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25304,
            "range": "± 3000",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8461,
            "range": "± 745",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2291,
            "range": "± 341",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2300,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 594,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 623,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1459,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1545,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1170,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1677,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 637,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 641,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 341,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 502,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 984,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 557,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 411094,
            "range": "± 57597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26047887,
            "range": "± 2386653",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4244,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14979,
            "range": "± 3236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5936,
            "range": "± 707",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19671,
            "range": "± 3108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17041,
            "range": "± 2269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42413,
            "range": "± 4858",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3369,
            "range": "± 542",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 614,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1845876,
            "range": "± 248535",
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
          "id": "90198d5440316140f06c61d2253e113da4225394",
          "message": "Fix test.",
          "timestamp": "2021-04-17T18:59:20+08:00",
          "tree_id": "e252a99dae0ec2d28e09cb66eac71a3f78a0b7fd",
          "url": "https://github.com/schungx/rhai/commit/90198d5440316140f06c61d2253e113da4225394"
        },
        "date": 1618657906263,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 180175,
            "range": "± 28277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 104,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 103,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 261,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1418,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1441,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6605593,
            "range": "± 611710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 587,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 639,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 20078,
            "range": "± 2404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 18771,
            "range": "± 2292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 657,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1177,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 112,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 109,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 108,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1771672,
            "range": "± 477556",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1869909,
            "range": "± 161112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1837028,
            "range": "± 286693",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26313,
            "range": "± 2679",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8763,
            "range": "± 1234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2415,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2440,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 629,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 648,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1519,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1499,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1251,
            "range": "± 304",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1764,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 727,
            "range": "± 56",
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
            "value": 373,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 545,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1054,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 598,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 435079,
            "range": "± 64836",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28397155,
            "range": "± 2929801",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4333,
            "range": "± 497",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15270,
            "range": "± 2100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6104,
            "range": "± 734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20171,
            "range": "± 3459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18141,
            "range": "± 3179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42702,
            "range": "± 5935",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3450,
            "range": "± 708",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 617,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1906392,
            "range": "± 333873",
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
          "id": "bd145bd080001f1d092f52c3544a9b7f41e230d1",
          "message": "Do not unnecessarily reindex module.",
          "timestamp": "2021-04-17T22:19:48+08:00",
          "tree_id": "6862a81deb3c4cdbf4c13371efb870fb70f0256b",
          "url": "https://github.com/schungx/rhai/commit/bd145bd080001f1d092f52c3544a9b7f41e230d1"
        },
        "date": 1618672686336,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 186626,
            "range": "± 20391",
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
            "value": 94,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 244,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1340,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1409,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6472481,
            "range": "± 756192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 558,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 607,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18609,
            "range": "± 1972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17772,
            "range": "± 2141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 654,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1153,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 108,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 107,
            "range": "± 23",
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
            "value": 1749876,
            "range": "± 12890",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1805970,
            "range": "± 67156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1754087,
            "range": "± 65982",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24724,
            "range": "± 1584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8733,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2318,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2346,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 606,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 641,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1434,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1389,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1192,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1723,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 701,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 701,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 348,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 493,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 994,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 573,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 420787,
            "range": "± 16980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23779062,
            "range": "± 685108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4078,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14943,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5952,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19461,
            "range": "± 706",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17466,
            "range": "± 986",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44025,
            "range": "± 1882",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3401,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 590,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1823361,
            "range": "± 75640",
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
          "id": "1ecb2b170f6ad5756bdf01edf5ea358d7f72c2ac",
          "message": "Remove redundant statement.",
          "timestamp": "2021-04-19T15:11:05+08:00",
          "tree_id": "46e06746d142d7b75d2d4db337a5815c8bfc2542",
          "url": "https://github.com/schungx/rhai/commit/1ecb2b170f6ad5756bdf01edf5ea358d7f72c2ac"
        },
        "date": 1618816579098,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 175577,
            "range": "± 32168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 98,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 92,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 246,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1336,
            "range": "± 475",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1376,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6661008,
            "range": "± 561619",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 561,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 596,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18433,
            "range": "± 2412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17737,
            "range": "± 1515",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 626,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1135,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 104,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 104,
            "range": "± 35",
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
            "value": 1742845,
            "range": "± 215730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1882020,
            "range": "± 260000",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1762506,
            "range": "± 329593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26416,
            "range": "± 13439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8572,
            "range": "± 3313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2268,
            "range": "± 817",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2305,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 591,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 627,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1437,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1446,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1234,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1697,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 666,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 657,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 347,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 483,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 996,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 561,
            "range": "± 204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 420073,
            "range": "± 93414",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26698364,
            "range": "± 1742278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4263,
            "range": "± 934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15020,
            "range": "± 4980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5916,
            "range": "± 2117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20691,
            "range": "± 2177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17229,
            "range": "± 4446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42238,
            "range": "± 12178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3467,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 562,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1831258,
            "range": "± 254382",
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
          "id": "ea866cead598929d4ccce70d1db83ceedfaec303",
          "message": "More array tests.",
          "timestamp": "2021-04-19T17:02:17+08:00",
          "tree_id": "b1c743f85fff533c79094ca5dbcf1b16df6bd5db",
          "url": "https://github.com/schungx/rhai/commit/ea866cead598929d4ccce70d1db83ceedfaec303"
        },
        "date": 1618824773540,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 180578,
            "range": "± 13609",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 105,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 92,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 242,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1344,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1328,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6308604,
            "range": "± 223431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 574,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 612,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17603,
            "range": "± 763",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17112,
            "range": "± 1698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 635,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1169,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 104,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 105,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 105,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1744862,
            "range": "± 66849",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1839323,
            "range": "± 38763",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1778616,
            "range": "± 42360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25101,
            "range": "± 737",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8728,
            "range": "± 247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2329,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2362,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 611,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 631,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1455,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1431,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1185,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1727,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 734,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 718,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 355,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 491,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1008,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 564,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 420511,
            "range": "± 4004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23896418,
            "range": "± 1496757",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4183,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15387,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6048,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20059,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17333,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44103,
            "range": "± 882",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3458,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 583,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1854870,
            "range": "± 98244",
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
          "id": "46b22ddd962099b165303286027365157eeaefb8",
          "message": "Fix tests.",
          "timestamp": "2021-04-19T18:08:29+08:00",
          "tree_id": "2ddd22caac84d294b1ea0e273f116a6314cb614b",
          "url": "https://github.com/schungx/rhai/commit/46b22ddd962099b165303286027365157eeaefb8"
        },
        "date": 1618827566556,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 174515,
            "range": "± 16462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 107,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 250,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1357,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1370,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6516874,
            "range": "± 311360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 582,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 595,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18202,
            "range": "± 2255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17387,
            "range": "± 1744",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 634,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1143,
            "range": "± 295",
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
            "value": 105,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 104,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1747435,
            "range": "± 141559",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1844627,
            "range": "± 165916",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1815591,
            "range": "± 191937",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25595,
            "range": "± 4688",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8609,
            "range": "± 1923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2264,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2280,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 592,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 627,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1435,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1480,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1232,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1672,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 662,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 647,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 357,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 499,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 986,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 532,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 420020,
            "range": "± 43094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25450523,
            "range": "± 1625324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4214,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14698,
            "range": "± 1523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5968,
            "range": "± 894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20211,
            "range": "± 2876",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17581,
            "range": "± 1849",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41951,
            "range": "± 13254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3402,
            "range": "± 2309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 560,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1813922,
            "range": "± 234373",
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
          "id": "e4ffd2d52abb0557ca1e283d291ca3a6f6b76827",
          "message": "Fix codegen test.",
          "timestamp": "2021-04-19T22:12:20+08:00",
          "tree_id": "beaecc436b5dd0278ee19e8c0d6ebc11eb1dfc30",
          "url": "https://github.com/schungx/rhai/commit/e4ffd2d52abb0557ca1e283d291ca3a6f6b76827"
        },
        "date": 1618843309758,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 183862,
            "range": "± 13281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 108,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 92,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 245,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1347,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1390,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6389615,
            "range": "± 61684",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 562,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 603,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18152,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16995,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 623,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1137,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 105,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 105,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 105,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1759856,
            "range": "± 28849",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1812890,
            "range": "± 32598",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1742485,
            "range": "± 14514",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25085,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8719,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2331,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2384,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 645,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 653,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1446,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1431,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1225,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1697,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 689,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 686,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 356,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 522,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1025,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 574,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 423687,
            "range": "± 10671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24136089,
            "range": "± 166970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4183,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15152,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6146,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19886,
            "range": "± 327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17402,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44582,
            "range": "± 1643",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3428,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 581,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1956726,
            "range": "± 39214",
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
          "id": "a186eb8d970a3aadaba32b118543b3c178b2e431",
          "message": "Fix hanging when parsing unterminated statements block.",
          "timestamp": "2021-04-20T11:22:38+08:00",
          "tree_id": "82fd8b647f9bdb0f49acc7dbf579ee59b15ada96",
          "url": "https://github.com/schungx/rhai/commit/a186eb8d970a3aadaba32b118543b3c178b2e431"
        },
        "date": 1618889622043,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 185630,
            "range": "± 29429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 102,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 257,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1375,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1409,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7182642,
            "range": "± 757888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 581,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 616,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18536,
            "range": "± 3347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17668,
            "range": "± 3358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 644,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1155,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 110,
            "range": "± 35",
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
            "value": 107,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1849400,
            "range": "± 309301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1873833,
            "range": "± 292735",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1785497,
            "range": "± 361539",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26106,
            "range": "± 6261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8966,
            "range": "± 1568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2307,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2337,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 592,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 652,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1440,
            "range": "± 270",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1479,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1229,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1722,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 684,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 690,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 360,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 504,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 991,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 567,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 422629,
            "range": "± 63164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27794516,
            "range": "± 3482764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4410,
            "range": "± 867",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 16271,
            "range": "± 3691",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6338,
            "range": "± 1344",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21513,
            "range": "± 3411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18108,
            "range": "± 2554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46568,
            "range": "± 7366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3627,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 611,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1893697,
            "range": "± 238849",
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
          "id": "815f7ba09e40b9de309cedeb5c265822c7384e0f",
          "message": "Remove Expr::FnPointer.",
          "timestamp": "2021-04-20T23:40:52+08:00",
          "tree_id": "46807f9d3b5cf043a1fff0e7ad71c5bc9f20b409",
          "url": "https://github.com/schungx/rhai/commit/815f7ba09e40b9de309cedeb5c265822c7384e0f"
        },
        "date": 1618933983101,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 170990,
            "range": "± 26814",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 97,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 93,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 254,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1409,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1443,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6758316,
            "range": "± 964236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 573,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 622,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18031,
            "range": "± 4565",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16774,
            "range": "± 3118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 633,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1142,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 103,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 100,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 105,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1694886,
            "range": "± 251447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1809656,
            "range": "± 273215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1786314,
            "range": "± 274141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26042,
            "range": "± 3331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8893,
            "range": "± 1716",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2268,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2525,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 630,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 643,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1525,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1454,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1180,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1678,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 653,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 647,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 341,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 498,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1013,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 579,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 423489,
            "range": "± 45431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26247467,
            "range": "± 2679139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4236,
            "range": "± 861",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14706,
            "range": "± 2221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5906,
            "range": "± 1096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19419,
            "range": "± 2615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17664,
            "range": "± 2556",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42159,
            "range": "± 5835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3377,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 585,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1936311,
            "range": "± 497027",
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
          "id": "fe37edd1239ee08154e8893415416af0f1090f03",
          "message": "Add Stmt::FnCall.",
          "timestamp": "2021-04-21T18:16:24+08:00",
          "tree_id": "8607615b97f80850f36fb45379fff88dc2c8d368",
          "url": "https://github.com/schungx/rhai/commit/fe37edd1239ee08154e8893415416af0f1090f03"
        },
        "date": 1619001630118,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 163961,
            "range": "± 11456",
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
            "value": 89,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 230,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1290,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1329,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6287572,
            "range": "± 579747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 572,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 572,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17589,
            "range": "± 2082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16178,
            "range": "± 1379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 624,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1114,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 98,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 94,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 95,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1767513,
            "range": "± 147384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1813643,
            "range": "± 111158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1774616,
            "range": "± 119308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23766,
            "range": "± 1700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8334,
            "range": "± 966",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2115,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2263,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 601,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 620,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1423,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1516,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1113,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1691,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 686,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 705,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 341,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 475,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1011,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 540,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 428249,
            "range": "± 20820",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24757373,
            "range": "± 1500455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4163,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14136,
            "range": "± 1728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5530,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19339,
            "range": "± 3838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17293,
            "range": "± 1721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39794,
            "range": "± 4522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3196,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 550,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1714782,
            "range": "± 80093",
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
          "id": "a54fbb32ffbc85036ade91481f07703bb4087882",
          "message": "Add no_position feature.",
          "timestamp": "2021-04-22T23:02:25+08:00",
          "tree_id": "e7aebc14c3e476f99a5d9820dad4714f741f27f6",
          "url": "https://github.com/schungx/rhai/commit/a54fbb32ffbc85036ade91481f07703bb4087882"
        },
        "date": 1619104050393,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 183560,
            "range": "± 22249",
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
            "value": 88,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 248,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1223,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1286,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5585089,
            "range": "± 365325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 488,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 544,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16610,
            "range": "± 1263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16006,
            "range": "± 2256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 615,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1049,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 97,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 95,
            "range": "± 18",
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
            "value": 1593133,
            "range": "± 134451",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1666978,
            "range": "± 128786",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1606186,
            "range": "± 81847",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23559,
            "range": "± 1410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8198,
            "range": "± 956",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2098,
            "range": "± 320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2147,
            "range": "± 307",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 561,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 603,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1349,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1379,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1158,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1645,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 626,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 619,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 317,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 458,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 972,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 513,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 376863,
            "range": "± 17817",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21560979,
            "range": "± 1112407",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3733,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14303,
            "range": "± 1313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5511,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18951,
            "range": "± 1072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16206,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39150,
            "range": "± 2478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3139,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 529,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1619845,
            "range": "± 131497",
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
          "id": "1fbbb2a40deafb0b4e9e2b02ac12bf044e3c9f7b",
          "message": "Fix doc test.",
          "timestamp": "2021-04-22T23:09:10+08:00",
          "tree_id": "02ef3f4334a43f2eb9f70c6cec3c42d724b349d7",
          "url": "https://github.com/schungx/rhai/commit/1fbbb2a40deafb0b4e9e2b02ac12bf044e3c9f7b"
        },
        "date": 1619104605040,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 152917,
            "range": "± 29337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 88,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 81,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 226,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1167,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1217,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6018240,
            "range": "± 980930",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 509,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 581,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17022,
            "range": "± 3562",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16878,
            "range": "± 2666",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 618,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1168,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 106,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 105,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 107,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1796811,
            "range": "± 242871",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1898156,
            "range": "± 349229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1760355,
            "range": "± 276977",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23762,
            "range": "± 4738",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8353,
            "range": "± 1612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2220,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2035,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 540,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 635,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1582,
            "range": "± 671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1436,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1212,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1841,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 684,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 661,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 373,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 521,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 973,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 552,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 403913,
            "range": "± 53890",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24640350,
            "range": "± 4568721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3647,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13212,
            "range": "± 2700",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5205,
            "range": "± 976",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17419,
            "range": "± 2598",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14998,
            "range": "± 2141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36898,
            "range": "± 5545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2985,
            "range": "± 723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 508,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1618628,
            "range": "± 430247",
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
          "id": "335ab64a2c2d0fc8ccc2630f8ec807c16743702b",
          "message": "Use SmartString inside ImmutableString.",
          "timestamp": "2021-04-23T19:10:10+08:00",
          "tree_id": "f9d5832909831f4adf1f8ad9409cbb050808d8f1",
          "url": "https://github.com/schungx/rhai/commit/335ab64a2c2d0fc8ccc2630f8ec807c16743702b"
        },
        "date": 1619176794392,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 172594,
            "range": "± 44024",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 105,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 259,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1308,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1359,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6649487,
            "range": "± 529221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 538,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 596,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17701,
            "range": "± 3525",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16772,
            "range": "± 3481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 636,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1154,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 100,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 100,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 101,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1831431,
            "range": "± 200739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 1999569,
            "range": "± 344024",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 1896534,
            "range": "± 515652",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25071,
            "range": "± 7450",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8692,
            "range": "± 2127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2327,
            "range": "± 594",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2333,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 611,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 673,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1469,
            "range": "± 1196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1522,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1187,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1682,
            "range": "± 416",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 672,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 675,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 345,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 514,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1008,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 552,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 425459,
            "range": "± 69526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26361629,
            "range": "± 1165614",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4138,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14696,
            "range": "± 3903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5804,
            "range": "± 1503",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20283,
            "range": "± 1442",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17015,
            "range": "± 2593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41971,
            "range": "± 11881",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3256,
            "range": "± 753",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 586,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1844192,
            "range": "± 256965",
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
          "id": "e58b57b6e7014144c90a2bf43e1eec61ee2abaff",
          "message": "Change string building benchmarks.",
          "timestamp": "2021-04-23T23:37:44+08:00",
          "tree_id": "f29ddd94335eb82e46844b09ff3ca83582875139",
          "url": "https://github.com/schungx/rhai/commit/e58b57b6e7014144c90a2bf43e1eec61ee2abaff"
        },
        "date": 1619193293501,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 186863,
            "range": "± 111587",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 117,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 98,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 267,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1398,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1421,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6515444,
            "range": "± 1173292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 552,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 607,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17712,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16816,
            "range": "± 453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 655,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1171,
            "range": "± 7",
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
            "value": 105,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 104,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1781897,
            "range": "± 4779",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4436383,
            "range": "± 37564",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3828236,
            "range": "± 15891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24875,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8770,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2340,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2380,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 626,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 663,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1471,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1484,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1217,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1791,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 659,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 693,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 353,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 507,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1004,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 559,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 423413,
            "range": "± 1778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23966117,
            "range": "± 18386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4168,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14721,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6047,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19703,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17090,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43728,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3463,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 592,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1857961,
            "range": "± 6194",
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
          "id": "ce35f7fa725906c7bf294454d5b1d86725047e56",
          "message": "Fix off by one error in optimizer.",
          "timestamp": "2021-04-24T13:42:45+08:00",
          "tree_id": "b2e0bc4df260d63246f1bbae5d7fd3f758dc77b4",
          "url": "https://github.com/schungx/rhai/commit/ce35f7fa725906c7bf294454d5b1d86725047e56"
        },
        "date": 1619243608020,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 170990,
            "range": "± 17405",
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
            "value": 92,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 234,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1265,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1362,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6202532,
            "range": "± 835146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 516,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 534,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16179,
            "range": "± 2292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15912,
            "range": "± 1693",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 583,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1044,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 92,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 98,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 93,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1726079,
            "range": "± 195839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4196020,
            "range": "± 411738",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3604114,
            "range": "± 334389",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25262,
            "range": "± 4673",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8069,
            "range": "± 927",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1956,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2087,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 553,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 604,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1364,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1399,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1123,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1565,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 612,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 603,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 315,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 465,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 916,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 506,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 393292,
            "range": "± 37170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23449352,
            "range": "± 1899891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3773,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13406,
            "range": "± 1790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5339,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18422,
            "range": "± 3556",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15838,
            "range": "± 1631",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38779,
            "range": "± 7568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3074,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 504,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1758092,
            "range": "± 276242",
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
          "id": "41d3709db1a29aa21a537dd414e93782975bf815",
          "message": "Fix decimal build.",
          "timestamp": "2021-04-24T15:53:02+08:00",
          "tree_id": "65876e16471259582736168110fe1c8aec5ef7a8",
          "url": "https://github.com/schungx/rhai/commit/41d3709db1a29aa21a537dd414e93782975bf815"
        },
        "date": 1619251408082,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 175798,
            "range": "± 12210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 98,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 91,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 234,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1326,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1357,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6121859,
            "range": "± 202289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 515,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 580,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16751,
            "range": "± 972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15815,
            "range": "± 2920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 606,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1099,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 98,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 97,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 98,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1679651,
            "range": "± 90944",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4241884,
            "range": "± 259501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3631495,
            "range": "± 327226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24092,
            "range": "± 1783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8533,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2163,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2248,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 598,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 634,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1422,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1348,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1171,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1599,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 687,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 654,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 329,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 463,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 994,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 540,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 407400,
            "range": "± 21640",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22922244,
            "range": "± 1172795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3985,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14799,
            "range": "± 1268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5692,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19389,
            "range": "± 1135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16532,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41729,
            "range": "± 2680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3320,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 554,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1740516,
            "range": "± 90784",
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
          "id": "f81e3d6ff8b5737a2b0049b06907ffa4cd331136",
          "message": "Fix unchecked builds.",
          "timestamp": "2021-04-24T18:14:48+08:00",
          "tree_id": "e0a63f252cb86a1aca5edaceabb5638bb89e203a",
          "url": "https://github.com/schungx/rhai/commit/f81e3d6ff8b5737a2b0049b06907ffa4cd331136"
        },
        "date": 1619259694896,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 155981,
            "range": "± 25720",
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
            "value": 89,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 233,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1147,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1196,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5537026,
            "range": "± 842266",
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
            "value": 510,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15626,
            "range": "± 2501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14518,
            "range": "± 2403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 546,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 949,
            "range": "± 129",
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
            "value": 93,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 88,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1534800,
            "range": "± 241825",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4001919,
            "range": "± 844923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3336418,
            "range": "± 579845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21595,
            "range": "± 3931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7545,
            "range": "± 808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2078,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2006,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 553,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 572,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1333,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1334,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1065,
            "range": "± 234",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1400,
            "range": "± 308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 581,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 582,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 302,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 430,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 867,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 477,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 367179,
            "range": "± 62777",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22714134,
            "range": "± 2496436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3824,
            "range": "± 915",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12826,
            "range": "± 2383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5142,
            "range": "± 875",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17376,
            "range": "± 2306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15290,
            "range": "± 2398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36229,
            "range": "± 6373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2875,
            "range": "± 468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 493,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1558813,
            "range": "± 246939",
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
          "id": "510c28c5579af9c28f300a75018b71ea3e13ef2a",
          "message": "Refine badges.",
          "timestamp": "2021-04-24T22:19:41+08:00",
          "tree_id": "017014512df47bd246fc3b0ab07a8ade3c23d691",
          "url": "https://github.com/schungx/rhai/commit/510c28c5579af9c28f300a75018b71ea3e13ef2a"
        },
        "date": 1619274604341,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 172809,
            "range": "± 34523",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 110,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 254,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1317,
            "range": "± 195",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1389,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6820672,
            "range": "± 1232642",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 541,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 589,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18365,
            "range": "± 2410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16884,
            "range": "± 3663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 634,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1143,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 102,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 102,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 108,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1972221,
            "range": "± 236275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4626160,
            "range": "± 832034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3893461,
            "range": "± 431768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26025,
            "range": "± 2265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8772,
            "range": "± 1678",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2255,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2402,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 617,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 677,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1469,
            "range": "± 292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1449,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1165,
            "range": "± 299",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1715,
            "range": "± 623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 661,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 627,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 340,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 497,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1046,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 578,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 434289,
            "range": "± 17759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25312817,
            "range": "± 1538769",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4167,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15095,
            "range": "± 2919",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5783,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19877,
            "range": "± 1839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16971,
            "range": "± 2432",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42249,
            "range": "± 4534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3371,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 582,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1843947,
            "range": "± 121276",
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
          "id": "a5d4a0abb98675b9dab06c44a94d80f16036babd",
          "message": "Disable on_progress with unchecked.",
          "timestamp": "2021-04-25T15:27:58+08:00",
          "tree_id": "4e839b31216fc6c88ff88076dcf131a3df964c1c",
          "url": "https://github.com/schungx/rhai/commit/a5d4a0abb98675b9dab06c44a94d80f16036babd"
        },
        "date": 1619347009810,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 170806,
            "range": "± 20600",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 101,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 247,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1303,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1341,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6424233,
            "range": "± 736775",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 537,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 586,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17747,
            "range": "± 3810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16905,
            "range": "± 2739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 645,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1206,
            "range": "± 262",
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
            "value": 101,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 103,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1787294,
            "range": "± 268622",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4465332,
            "range": "± 651798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3848762,
            "range": "± 718789",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25397,
            "range": "± 3865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8658,
            "range": "± 2184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2249,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2304,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 613,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 689,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1490,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1533,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1372,
            "range": "± 487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1694,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 648,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 671,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 369,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 547,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1002,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 604,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 414700,
            "range": "± 55880",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25710161,
            "range": "± 3102267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4123,
            "range": "± 1056",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14758,
            "range": "± 2612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5777,
            "range": "± 1198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19645,
            "range": "± 3758",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17404,
            "range": "± 6236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42654,
            "range": "± 4891",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3207,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 609,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1914188,
            "range": "± 303892",
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
          "id": "b0911133344a90c8d1c4a999c4316c1792a5b5f2",
          "message": "Eliminate unnecessary data structures.",
          "timestamp": "2021-04-27T22:28:01+08:00",
          "tree_id": "9f7bba08c30be7177c2e8c0a3205e580262238f1",
          "url": "https://github.com/schungx/rhai/commit/b0911133344a90c8d1c4a999c4316c1792a5b5f2"
        },
        "date": 1619929293508,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 159939,
            "range": "± 38393",
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
            "value": 89,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 232,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1256,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1351,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5911301,
            "range": "± 1131086",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 495,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 525,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16706,
            "range": "± 2484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15396,
            "range": "± 3000",
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
            "value": 1055,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 94,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 94,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 93,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1551541,
            "range": "± 329682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4099710,
            "range": "± 773722",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3525030,
            "range": "± 568916",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22808,
            "range": "± 4106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7671,
            "range": "± 1520",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2075,
            "range": "± 527",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2154,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 599,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 673,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1391,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1384,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1082,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1553,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 601,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 599,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 312,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 469,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 950,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 503,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 383607,
            "range": "± 59917",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22847316,
            "range": "± 3758301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3799,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13412,
            "range": "± 2784",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5432,
            "range": "± 996",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18857,
            "range": "± 3097",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15794,
            "range": "± 2419",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39635,
            "range": "± 7751",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3014,
            "range": "± 754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 526,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1647626,
            "range": "± 414538",
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
          "id": "c749bbb65384276c192c8e51b14055694574313a",
          "message": "Reduce BTree sizes by boxing values.",
          "timestamp": "2021-05-03T13:45:41+08:00",
          "tree_id": "640dfe1feda866112ccd292fa01549b5a2bc292b",
          "url": "https://github.com/schungx/rhai/commit/c749bbb65384276c192c8e51b14055694574313a"
        },
        "date": 1620021486989,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 188463,
            "range": "± 18818",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 118,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 100,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 286,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1403,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1488,
            "range": "± 251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 7003391,
            "range": "± 542778",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 576,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 645,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18460,
            "range": "± 1119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17288,
            "range": "± 1326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 653,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1231,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 107,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 107,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 106,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1945650,
            "range": "± 93368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4704205,
            "range": "± 253140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4083909,
            "range": "± 258721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 27158,
            "range": "± 1551",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9416,
            "range": "± 519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2474,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2573,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 669,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 719,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1638,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1593,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1293,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1874,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 734,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 699,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 390,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 537,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1059,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 605,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 460748,
            "range": "± 28088",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 28735900,
            "range": "± 1248007",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4397,
            "range": "± 254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15642,
            "range": "± 1189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6320,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21239,
            "range": "± 1715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18418,
            "range": "± 1094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43252,
            "range": "± 3303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3545,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 641,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 2011680,
            "range": "± 145318",
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
          "id": "13c620de4ba1ef35c75aa3e395937d7613b34c95",
          "message": "Implement Eq and PartialEq for ScriptFnMetadata that sorts on function signature.",
          "timestamp": "2021-05-04T10:19:08+08:00",
          "tree_id": "e03d95798f51a6bca3573530c4b77732fbd79e8b",
          "url": "https://github.com/schungx/rhai/commit/13c620de4ba1ef35c75aa3e395937d7613b34c95"
        },
        "date": 1620114558997,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 185833,
            "range": "± 24235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 111,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 277,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1320,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1404,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6653136,
            "range": "± 1279062",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 547,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 623,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17978,
            "range": "± 2752",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16857,
            "range": "± 1871",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 642,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1126,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 101,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 101,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 101,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1830863,
            "range": "± 209706",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4526061,
            "range": "± 297237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4008294,
            "range": "± 414364",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26232,
            "range": "± 6580",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8876,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2348,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2203,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 580,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 635,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1463,
            "range": "± 316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1519,
            "range": "± 1428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1189,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1577,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 629,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 656,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 313,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 477,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 931,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 552,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 417792,
            "range": "± 75938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25623581,
            "range": "± 5404899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4606,
            "range": "± 2360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15985,
            "range": "± 12269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6047,
            "range": "± 1231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 21920,
            "range": "± 9598",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18030,
            "range": "± 5442",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41537,
            "range": "± 7214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3661,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 592,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1710115,
            "range": "± 405764",
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
          "id": "2c0215ea3fe658e6b5b230ad0745e027ef040db4",
          "message": "Shrink arrays and use boxed slices.",
          "timestamp": "2021-05-05T18:38:52+08:00",
          "tree_id": "e5944b7d7b370755baabb1fe2248b669a01eb8cf",
          "url": "https://github.com/schungx/rhai/commit/2c0215ea3fe658e6b5b230ad0745e027ef040db4"
        },
        "date": 1620222949936,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 173586,
            "range": "± 36085",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 108,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 93,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 251,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1330,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1327,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6147815,
            "range": "± 1270795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 512,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 581,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16865,
            "range": "± 3555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15372,
            "range": "± 2745",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 636,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1069,
            "range": "± 283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 93,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 93,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 88,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1604901,
            "range": "± 408372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4234225,
            "range": "± 627302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3400466,
            "range": "± 673197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24446,
            "range": "± 5647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8370,
            "range": "± 2147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2235,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2300,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 580,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 685,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1460,
            "range": "± 398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1327,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1121,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1649,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 586,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 604,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 310,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 432,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 902,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 552,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 387076,
            "range": "± 101179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24372101,
            "range": "± 3121055",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3727,
            "range": "± 686",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14199,
            "range": "± 2522",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5158,
            "range": "± 1699",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17196,
            "range": "± 3704",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14727,
            "range": "± 2637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38226,
            "range": "± 7873",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2901,
            "range": "± 663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 491,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1704154,
            "range": "± 370193",
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
          "id": "9585de4ae47261133bdf23873c85991f7439dcf5",
          "message": "Add Dynamic from shared.",
          "timestamp": "2021-05-11T21:38:07+08:00",
          "tree_id": "0415689f3f416c17f20e1c1f1b65df38a455f034",
          "url": "https://github.com/schungx/rhai/commit/9585de4ae47261133bdf23873c85991f7439dcf5"
        },
        "date": 1620740951601,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 183615,
            "range": "± 16942",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 104,
            "range": "± 7",
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
            "value": 256,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1279,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1326,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5849944,
            "range": "± 522958",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 510,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 561,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16673,
            "range": "± 1491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15848,
            "range": "± 1064",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 601,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1020,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 95,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 97,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 94,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1641726,
            "range": "± 194909",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4160388,
            "range": "± 389983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3429969,
            "range": "± 298900",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22684,
            "range": "± 2333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8233,
            "range": "± 938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2353,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2428,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 603,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 627,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1336,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1361,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1079,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1609,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 614,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 625,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 332,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 454,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 923,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 516,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 370671,
            "range": "± 60203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22748318,
            "range": "± 2276879",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3756,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13811,
            "range": "± 853",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5315,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17567,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16016,
            "range": "± 1387",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40193,
            "range": "± 8513",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3301,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 568,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1712196,
            "range": "± 187399",
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
          "id": "60dc41bfac7ce1eb2802f05f3303df46271223aa",
          "message": "Allow pure setters by making constant Dynamic internally constant as well.",
          "timestamp": "2021-05-15T09:45:40+08:00",
          "tree_id": "38bea8753fa05b3aa54713df5b763b8119151497",
          "url": "https://github.com/schungx/rhai/commit/60dc41bfac7ce1eb2802f05f3303df46271223aa"
        },
        "date": 1621044020494,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 171321,
            "range": "± 25237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 106,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 263,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1390,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1397,
            "range": "± 192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6186808,
            "range": "± 891560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 560,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 601,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16844,
            "range": "± 2116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15494,
            "range": "± 2503",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 592,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1119,
            "range": "± 162",
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
            "value": 99,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 99,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1725907,
            "range": "± 329336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4172880,
            "range": "± 637459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3639332,
            "range": "± 562237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25444,
            "range": "± 3928",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8606,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2385,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2435,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 615,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 640,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1455,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1387,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1248,
            "range": "± 394",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1672,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 621,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 684,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 342,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 489,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 974,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 569,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 401810,
            "range": "± 55556",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24594162,
            "range": "± 2878941",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3890,
            "range": "± 793",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14481,
            "range": "± 1972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5278,
            "range": "± 1748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19117,
            "range": "± 3461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16374,
            "range": "± 1846",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44918,
            "range": "± 6764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3341,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 601,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1823980,
            "range": "± 406322",
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
          "id": "27420dd9b4b525038b1314782f4c4518b59281e9",
          "message": "Merge branch 'master' of https://github.com/schungx/rhai",
          "timestamp": "2021-05-15T11:43:24+08:00",
          "tree_id": "aa32a3d920885bf6ebee011c21f12e15422e1853",
          "url": "https://github.com/schungx/rhai/commit/27420dd9b4b525038b1314782f4c4518b59281e9"
        },
        "date": 1621050523199,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 146824,
            "range": "± 28835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 109,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 227,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1116,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1148,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5367308,
            "range": "± 890472",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 429,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 503,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14162,
            "range": "± 1702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13194,
            "range": "± 2755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 478,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 878,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 82,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 79,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1376689,
            "range": "± 503005",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3587183,
            "range": "± 578740",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3223476,
            "range": "± 516074",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22189,
            "range": "± 8662",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7119,
            "range": "± 1123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1837,
            "range": "± 670",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1961,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 472,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 519,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1219,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1185,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 980,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1322,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 542,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 508,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 266,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 397,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 752,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 425,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 339425,
            "range": "± 134240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21268534,
            "range": "± 2666331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3241,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11585,
            "range": "± 1615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4673,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15146,
            "range": "± 1732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13338,
            "range": "± 1640",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34327,
            "range": "± 4390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2625,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 455,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1428826,
            "range": "± 241002",
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
          "id": "cce2e0242887316ab876b357badb35ed22118ecd",
          "message": "Fix feature builds.",
          "timestamp": "2021-05-15T11:56:19+08:00",
          "tree_id": "112c96e78115dabd189a52d1e15bf8eecb588a99",
          "url": "https://github.com/schungx/rhai/commit/cce2e0242887316ab876b357badb35ed22118ecd"
        },
        "date": 1621051526756,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 189987,
            "range": "± 3668",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 114,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 271,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1421,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1439,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6111920,
            "range": "± 196442",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 563,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 627,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17144,
            "range": "± 603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15972,
            "range": "± 852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 618,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1158,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 99,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 104,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 100,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1683949,
            "range": "± 86285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4247359,
            "range": "± 196252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3712446,
            "range": "± 182918",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24808,
            "range": "± 636",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8839,
            "range": "± 576",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2459,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2476,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 644,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 684,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1467,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1464,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1230,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1702,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 680,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 682,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 357,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 487,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1033,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 565,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 418768,
            "range": "± 16556",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23914574,
            "range": "± 1083074",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4221,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14561,
            "range": "± 965",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5940,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19119,
            "range": "± 818",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16915,
            "range": "± 798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44447,
            "range": "± 2214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3353,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 592,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1819136,
            "range": "± 58476",
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
          "id": "dc9b4d7f4d3832f087c10a53a02f0f4f83cc9ff7",
          "message": "Indexer as fallback to property.",
          "timestamp": "2021-05-18T20:12:30+08:00",
          "tree_id": "b478ba93895f8e70e08c7b5ac5cbf080fa3da11b",
          "url": "https://github.com/schungx/rhai/commit/dc9b4d7f4d3832f087c10a53a02f0f4f83cc9ff7"
        },
        "date": 1621340519573,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 195312,
            "range": "± 20415",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 117,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 100,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 282,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1440,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1468,
            "range": "± 239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6498724,
            "range": "± 708055",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 608,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 653,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19099,
            "range": "± 4300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17615,
            "range": "± 1836",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 679,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1251,
            "range": "± 611",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 95,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 97,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 95,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1858207,
            "range": "± 320090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4536909,
            "range": "± 920653",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3891494,
            "range": "± 652350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25327,
            "range": "± 2990",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9194,
            "range": "± 1035",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2273,
            "range": "± 1477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2351,
            "range": "± 818",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 558,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 597,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1496,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1484,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1221,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1689,
            "range": "± 146",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 675,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 683,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 356,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 493,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1650,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 563,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 413205,
            "range": "± 13393",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23843982,
            "range": "± 675557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4049,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15282,
            "range": "± 353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5843,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20156,
            "range": "± 831",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17715,
            "range": "± 825",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 45591,
            "range": "± 1197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3385,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 569,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1830849,
            "range": "± 45323",
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
          "id": "2ade56fd945893eff14898b523a74a83e9623052",
          "message": "Fix no_index build.",
          "timestamp": "2021-05-18T21:38:09+08:00",
          "tree_id": "ab6d3d672bf88a49fc0f6bb3d57183d9243cc5e2",
          "url": "https://github.com/schungx/rhai/commit/2ade56fd945893eff14898b523a74a83e9623052"
        },
        "date": 1621345728944,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 152802,
            "range": "± 22504",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 105,
            "range": "± 23",
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
            "value": 243,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1138,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1189,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6294544,
            "range": "± 1804038",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 518,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 568,
            "range": "± 163",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14827,
            "range": "± 1839",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13910,
            "range": "± 2217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 531,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 963,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 83,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 78,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 76,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1462980,
            "range": "± 176830",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4025802,
            "range": "± 904811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3204123,
            "range": "± 817362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21517,
            "range": "± 3192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7184,
            "range": "± 1101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1794,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1873,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 451,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 480,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1303,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1291,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 963,
            "range": "± 291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1504,
            "range": "± 455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 560,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 555,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 282,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 412,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1279,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 465,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 350168,
            "range": "± 90878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21925352,
            "range": "± 2394247",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3356,
            "range": "± 476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12377,
            "range": "± 3120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4711,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15886,
            "range": "± 1899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14119,
            "range": "± 2513",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36032,
            "range": "± 5694",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2701,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 461,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1500964,
            "range": "± 218441",
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
          "id": "85a5aa14b3d6bc4d6faa81aa3cd8d85d862bc9f1",
          "message": "Fix no_index build.",
          "timestamp": "2021-05-18T22:03:34+08:00",
          "tree_id": "aad4c94a6951a1fbbfb688d9f98b5d0df8ad1dd4",
          "url": "https://github.com/schungx/rhai/commit/85a5aa14b3d6bc4d6faa81aa3cd8d85d862bc9f1"
        },
        "date": 1621347491780,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 168587,
            "range": "± 31719",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 111,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 92,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 260,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1212,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1286,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5823637,
            "range": "± 478996",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 521,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 570,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16684,
            "range": "± 1626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15121,
            "range": "± 1995",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 577,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1060,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 92,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 89,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1716706,
            "range": "± 253783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4324240,
            "range": "± 1014794",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3772456,
            "range": "± 605331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25895,
            "range": "± 6771",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7992,
            "range": "± 864",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2209,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2060,
            "range": "± 319",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 504,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 575,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1501,
            "range": "± 288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1513,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1251,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1629,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 613,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 637,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 308,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 461,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1431,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 506,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 377910,
            "range": "± 30768",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23533691,
            "range": "± 1385340",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3731,
            "range": "± 631",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13191,
            "range": "± 2063",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5177,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18181,
            "range": "± 1723",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15948,
            "range": "± 1722",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39785,
            "range": "± 3840",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3063,
            "range": "± 375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 545,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1652558,
            "range": "± 196663",
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
          "id": "cc3e2d79a5b2c7aef0544eda86d16a04fdba9ade",
          "message": "Replace unwrap with expect.",
          "timestamp": "2021-05-22T19:14:24+08:00",
          "tree_id": "cb70881a24b4b3661379d920873aa0fd51e6dc0f",
          "url": "https://github.com/schungx/rhai/commit/cc3e2d79a5b2c7aef0544eda86d16a04fdba9ade"
        },
        "date": 1621682400757,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 149429,
            "range": "± 62095",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 103,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 78,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 220,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1128,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1282,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5420165,
            "range": "± 651203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 469,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 514,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14966,
            "range": "± 3755",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13700,
            "range": "± 4404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 506,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 863,
            "range": "± 273",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 71,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 72,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 75,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1498148,
            "range": "± 205825",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3752828,
            "range": "± 807031",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3185910,
            "range": "± 488670",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20744,
            "range": "± 3331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7174,
            "range": "± 896",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1682,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1834,
            "range": "± 286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 435,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 488,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1404,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1289,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1027,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1457,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 582,
            "range": "± 869",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 587,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 254,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 401,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1210,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 433,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 360980,
            "range": "± 126812",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21496864,
            "range": "± 2990810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3395,
            "range": "± 565",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12321,
            "range": "± 2626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4735,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15706,
            "range": "± 3245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13440,
            "range": "± 4955",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33155,
            "range": "± 9933",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2727,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 481,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1507381,
            "range": "± 232161",
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
          "id": "d07d4d295d5118950d860b2e3bdec90ee403d8d9",
          "message": "Fix tests.",
          "timestamp": "2021-05-22T19:34:10+08:00",
          "tree_id": "f1987a8a5b95c175d3967e8a4c272016df0a2172",
          "url": "https://github.com/schungx/rhai/commit/d07d4d295d5118950d860b2e3bdec90ee403d8d9"
        },
        "date": 1621683903764,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 190067,
            "range": "± 26737",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 127,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 103,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 311,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1389,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1400,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6731300,
            "range": "± 1120253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 581,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 650,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19372,
            "range": "± 3443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17488,
            "range": "± 3721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 687,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1164,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 104,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 93,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 95,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1934466,
            "range": "± 209667",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4666804,
            "range": "± 725968",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4046715,
            "range": "± 470312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 25979,
            "range": "± 2112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9006,
            "range": "± 717",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2281,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2306,
            "range": "± 535",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 553,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 591,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1592,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1589,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1198,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1802,
            "range": "± 205",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 669,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 680,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 357,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 502,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1577,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 568,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 427398,
            "range": "± 51900",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 26657236,
            "range": "± 1940207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4068,
            "range": "± 584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15267,
            "range": "± 2637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6200,
            "range": "± 1001",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20444,
            "range": "± 2646",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17549,
            "range": "± 1429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44546,
            "range": "± 4853",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3482,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 553,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1874496,
            "range": "± 184213",
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
          "id": "58d6a88bc462cbafc8c2f50f4955c819f118b27b",
          "message": "Use checked exp for decimal.",
          "timestamp": "2021-05-24T12:12:29+08:00",
          "tree_id": "58ec7b52281a680b7467a454dc5077e2b436a1df",
          "url": "https://github.com/schungx/rhai/commit/58d6a88bc462cbafc8c2f50f4955c819f118b27b"
        },
        "date": 1621836538855,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 159832,
            "range": "± 29053",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 100,
            "range": "± 17",
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
            "value": 223,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1139,
            "range": "± 961",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1196,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5374263,
            "range": "± 598951",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 462,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 508,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14809,
            "range": "± 2305",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13825,
            "range": "± 2674",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 523,
            "range": "± 309",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 959,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 80,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 87,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1532870,
            "range": "± 151046",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3781391,
            "range": "± 641429",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3319181,
            "range": "± 854761",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21299,
            "range": "± 2455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7504,
            "range": "± 2080",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1868,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1874,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 444,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 455,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1331,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1268,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1043,
            "range": "± 250",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1481,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 568,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 566,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 296,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 427,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1311,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 512,
            "range": "± 221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 369262,
            "range": "± 55782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22446428,
            "range": "± 3926609",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3327,
            "range": "± 636",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12038,
            "range": "± 1444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4854,
            "range": "± 1120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17100,
            "range": "± 4624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14666,
            "range": "± 2669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36436,
            "range": "± 4349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2785,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 446,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1486450,
            "range": "± 158850",
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
          "id": "dfea3ed22ae3345c23e9d9c7006ba921bbd6596c",
          "message": "Code style refactor.",
          "timestamp": "2021-05-25T10:54:48+08:00",
          "tree_id": "cd90d7bf9f023ab2b27c9b08a7c17b08fadb23a9",
          "url": "https://github.com/schungx/rhai/commit/dfea3ed22ae3345c23e9d9c7006ba921bbd6596c"
        },
        "date": 1621913966910,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 158581,
            "range": "± 33597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 98,
            "range": "± 20",
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
            "value": 223,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1109,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1143,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5095472,
            "range": "± 737515",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 462,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 488,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15935,
            "range": "± 3157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14194,
            "range": "± 1834",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 573,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1019,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 77,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 77,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 76,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1498032,
            "range": "± 252403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3711253,
            "range": "± 677712",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3083777,
            "range": "± 598368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22852,
            "range": "± 2703",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7323,
            "range": "± 1323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2268,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1871,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 409,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 444,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1342,
            "range": "± 232",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1478,
            "range": "± 159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1237,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1604,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 612,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 650,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 324,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 472,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1611,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 526,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 392647,
            "range": "± 84133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21574111,
            "range": "± 3098368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3852,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14528,
            "range": "± 1221",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5641,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18411,
            "range": "± 1935",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16281,
            "range": "± 1565",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43806,
            "range": "± 3485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3014,
            "range": "± 577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 480,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1489029,
            "range": "± 255515",
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
          "id": "c6ee20094b751edf7872e63533fa48456941234b",
          "message": "Fix teset output.",
          "timestamp": "2021-05-25T11:09:55+08:00",
          "tree_id": "41e030a864c34d31bbf4f5b787d9e09cd6c34a7e",
          "url": "https://github.com/schungx/rhai/commit/c6ee20094b751edf7872e63533fa48456941234b"
        },
        "date": 1621931218464,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 171113,
            "range": "± 11728",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 116,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 264,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1318,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1380,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6393812,
            "range": "± 441919",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 556,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 610,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17639,
            "range": "± 1638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16780,
            "range": "± 1341",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 622,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1099,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 91,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 91,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 91,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1792526,
            "range": "± 87837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4468117,
            "range": "± 409436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3827021,
            "range": "± 400903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24896,
            "range": "± 13069",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8656,
            "range": "± 741",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2195,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2294,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 550,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 590,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1530,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1518,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1190,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1676,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 667,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 666,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 338,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 478,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1467,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 549,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 401030,
            "range": "± 32447",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 25373564,
            "range": "± 1772894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3925,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14299,
            "range": "± 838",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5908,
            "range": "± 958",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19241,
            "range": "± 1327",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16637,
            "range": "± 1457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42593,
            "range": "± 9424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3372,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 559,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1781685,
            "range": "± 398517",
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
          "id": "76bd48d0a6705e3d257360563ca0f4559c651c39",
          "message": "Code style refinements.",
          "timestamp": "2021-05-29T18:33:29+08:00",
          "tree_id": "bfb66e42f25fb7bee90628d5c15b2934fd09dff2",
          "url": "https://github.com/schungx/rhai/commit/76bd48d0a6705e3d257360563ca0f4559c651c39"
        },
        "date": 1622284709610,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 159006,
            "range": "± 20772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 101,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 88,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 239,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1141,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1211,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5830323,
            "range": "± 528905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 494,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 560,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15801,
            "range": "± 2698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15010,
            "range": "± 1889",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 556,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 984,
            "range": "± 401",
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
            "value": 81,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 86,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1674742,
            "range": "± 211120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4182982,
            "range": "± 473308",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3506508,
            "range": "± 407563",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21986,
            "range": "± 5271",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7791,
            "range": "± 1326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1933,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1939,
            "range": "± 796",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 485,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 511,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1349,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1314,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1056,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1496,
            "range": "± 408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 589,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 613,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 309,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 447,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1296,
            "range": "± 366",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 492,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 373256,
            "range": "± 57540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23226328,
            "range": "± 2035606",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3545,
            "range": "± 720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12642,
            "range": "± 4466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5861,
            "range": "± 2302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17785,
            "range": "± 1633",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15059,
            "range": "± 4534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37894,
            "range": "± 5014",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2911,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 497,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1671946,
            "range": "± 222311",
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
          "id": "71684f5e2ab405ba00ae574c2e8c015059d345f3",
          "message": "Implement bit-fields.",
          "timestamp": "2021-06-02T14:29:18+08:00",
          "tree_id": "4c2b8171d7fbdcc982ac56f84097256777a5f980",
          "url": "https://github.com/schungx/rhai/commit/71684f5e2ab405ba00ae574c2e8c015059d345f3"
        },
        "date": 1622615820896,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 185923,
            "range": "± 6182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 111,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 267,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1313,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1358,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6240859,
            "range": "± 85519",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 546,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 608,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17224,
            "range": "± 978",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16149,
            "range": "± 425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 633,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1128,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 94,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 94,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 94,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1816037,
            "range": "± 28120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4339925,
            "range": "± 59530",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3736553,
            "range": "± 35167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23842,
            "range": "± 569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8565,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2221,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2264,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 535,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 582,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1441,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1471,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1216,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1684,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 669,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 671,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 340,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 479,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1578,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 543,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 401798,
            "range": "± 4136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23433298,
            "range": "± 128749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3979,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14689,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5765,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19277,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16586,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44389,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3249,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 552,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1796226,
            "range": "± 12624",
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
          "id": "4cf6550fc618bc8fd64996c4806768bb2f96dcb5",
          "message": "Fix tests.",
          "timestamp": "2021-06-02T15:05:33+08:00",
          "tree_id": "28d52df71fb4a14afdd1765e03458c23e265d74d",
          "url": "https://github.com/schungx/rhai/commit/4cf6550fc618bc8fd64996c4806768bb2f96dcb5"
        },
        "date": 1622617978782,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 155000,
            "range": "± 963",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 102,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 79,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 224,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1086,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1132,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5277181,
            "range": "± 5825",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 447,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 494,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14783,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13650,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 528,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 943,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 78,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 78,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1545007,
            "range": "± 3906",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3616602,
            "range": "± 12051",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3110206,
            "range": "± 7462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20950,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7186,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1831,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1897,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 446,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 485,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1288,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1280,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1002,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1501,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 549,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 568,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 283,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 411,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1290,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 466,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 333108,
            "range": "± 855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21277578,
            "range": "± 88795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3297,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12319,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4867,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16222,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14061,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37482,
            "range": "± 510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2706,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 454,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1491307,
            "range": "± 7893",
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
          "id": "99e06abd94f06b0ae9540bc833942539f52896e2",
          "message": "Fix test.",
          "timestamp": "2021-06-02T15:18:09+08:00",
          "tree_id": "26901c534c2bb894646272ff96f4a5746e2900b4",
          "url": "https://github.com/schungx/rhai/commit/99e06abd94f06b0ae9540bc833942539f52896e2"
        },
        "date": 1622618977476,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 181736,
            "range": "± 16992",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 114,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 282,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1375,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1427,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6771428,
            "range": "± 530704",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 562,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 626,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18004,
            "range": "± 2440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16949,
            "range": "± 1632",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 650,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1203,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 98,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 99,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 96,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1904886,
            "range": "± 156197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4657203,
            "range": "± 570406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 4021080,
            "range": "± 377373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 26522,
            "range": "± 2805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9130,
            "range": "± 510",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2328,
            "range": "± 331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2355,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 552,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 606,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1619,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1703,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1260,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1798,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 697,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 723,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 359,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 508,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1572,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 577,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 415067,
            "range": "± 34242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 27010693,
            "range": "± 1605370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4144,
            "range": "± 448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14902,
            "range": "± 1191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6045,
            "range": "± 1014",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20217,
            "range": "± 1921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17817,
            "range": "± 1370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46397,
            "range": "± 2706",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3372,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 590,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1905454,
            "range": "± 152024",
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
          "id": "c02d702081ee2b600ae5ba4904ea211dc445c15b",
          "message": "Use StaticVec.",
          "timestamp": "2021-06-06T12:17:04+08:00",
          "tree_id": "9d70cc2bcffd7ce5c2e5d42a53a24ef32a20c9f9",
          "url": "https://github.com/schungx/rhai/commit/c02d702081ee2b600ae5ba4904ea211dc445c15b"
        },
        "date": 1622953279587,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 151322,
            "range": "± 20373",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 98,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 84,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 249,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1187,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1190,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5602641,
            "range": "± 210615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 478,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 538,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16306,
            "range": "± 3680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13948,
            "range": "± 1844",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 558,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 972,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 81,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 81,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1599723,
            "range": "± 185961",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3944583,
            "range": "± 225833",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3377632,
            "range": "± 260165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21893,
            "range": "± 3725",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7826,
            "range": "± 3893",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1933,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1974,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 512,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 510,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1392,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1353,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1168,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1485,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 592,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 579,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 299,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 454,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1394,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 493,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 351683,
            "range": "± 23498",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22708774,
            "range": "± 1818153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3482,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12331,
            "range": "± 1764",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5152,
            "range": "± 1090",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17115,
            "range": "± 1885",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15301,
            "range": "± 1985",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37790,
            "range": "± 4919",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2863,
            "range": "± 310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 469,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1604978,
            "range": "± 134125",
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
          "id": "1e66f1963aea66513b770f908a3697557005e920",
          "message": "Add counter variable to for statement.",
          "timestamp": "2021-06-07T11:01:16+08:00",
          "tree_id": "2c95aa8bfa5db19198a8623d1c716d699d229763",
          "url": "https://github.com/schungx/rhai/commit/1e66f1963aea66513b770f908a3697557005e920"
        },
        "date": 1623035322382,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 188415,
            "range": "± 8254",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 112,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 262,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1320,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1386,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6284837,
            "range": "± 108601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 543,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 605,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17072,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16486,
            "range": "± 206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 616,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1128,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 94,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 94,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 94,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1853525,
            "range": "± 23609",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4414089,
            "range": "± 53015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3800668,
            "range": "± 18547",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24198,
            "range": "± 468",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8802,
            "range": "± 505",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2246,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2278,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 540,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 582,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1456,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1472,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1273,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1717,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 653,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 646,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 338,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 470,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1517,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 528,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 399438,
            "range": "± 16075",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22907870,
            "range": "± 926734",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3883,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14118,
            "range": "± 2182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5821,
            "range": "± 355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19056,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16803,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44133,
            "range": "± 391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3205,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 538,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1778279,
            "range": "± 9194",
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
          "id": "411b718a3b94586ba013b701dfa75e75e861db6c",
          "message": "Fix test.",
          "timestamp": "2021-06-07T11:21:45+08:00",
          "tree_id": "b1fa31556f456a20be58ac78b66614c1918eb94f",
          "url": "https://github.com/schungx/rhai/commit/411b718a3b94586ba013b701dfa75e75e861db6c"
        },
        "date": 1623036745385,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 159635,
            "range": "± 31508",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 95,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 85,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 234,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1176,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1265,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5969527,
            "range": "± 1382704",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 527,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 493,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15492,
            "range": "± 2690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14917,
            "range": "± 3715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 525,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1090,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 91,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 91,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 93,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1730444,
            "range": "± 470644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4245729,
            "range": "± 1065732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3586746,
            "range": "± 1105790",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22924,
            "range": "± 6711",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8068,
            "range": "± 2828",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1895,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2182,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 522,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 516,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1437,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1423,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1154,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1580,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 614,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 582,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 291,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 459,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1352,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 515,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 364344,
            "range": "± 87870",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21999922,
            "range": "± 3929620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3389,
            "range": "± 813",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12728,
            "range": "± 4437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5330,
            "range": "± 1374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17254,
            "range": "± 3616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14349,
            "range": "± 3398",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38145,
            "range": "± 9239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2911,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 482,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1546052,
            "range": "± 372473",
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
          "id": "65b7135324396923c0f4fc642a384be6a9a4ed69",
          "message": "Fix tests.",
          "timestamp": "2021-06-07T11:54:10+08:00",
          "tree_id": "e31ae9d92946a89f40f10a43dcb61ae8b8b8182c",
          "url": "https://github.com/schungx/rhai/commit/65b7135324396923c0f4fc642a384be6a9a4ed69"
        },
        "date": 1623038979434,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 164998,
            "range": "± 21973",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 97,
            "range": "± 27",
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
            "value": 246,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1304,
            "range": "± 335",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1368,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6088319,
            "range": "± 769878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 568,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 623,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17855,
            "range": "± 6506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16558,
            "range": "± 3343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 605,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1044,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 79,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1778520,
            "range": "± 250621",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4360735,
            "range": "± 562276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3883770,
            "range": "± 420190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24966,
            "range": "± 4531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8654,
            "range": "± 1569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1995,
            "range": "± 581",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2152,
            "range": "± 615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 556,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 542,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1434,
            "range": "± 1085",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1530,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1203,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1618,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 624,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 622,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 347,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 479,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1510,
            "range": "± 186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 529,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 414977,
            "range": "± 148487",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 24382592,
            "range": "± 3174471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3794,
            "range": "± 949",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13280,
            "range": "± 2037",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5505,
            "range": "± 751",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18639,
            "range": "± 2844",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16066,
            "range": "± 3850",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40648,
            "range": "± 6865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3121,
            "range": "± 571",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 542,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1775082,
            "range": "± 226852",
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
          "id": "2c21928f679493befae23229a62f1cb286e5ed43",
          "message": "Simplify constant function call arguments.",
          "timestamp": "2021-06-08T14:46:49+08:00",
          "tree_id": "094522301a6fd8be6a3659200be46ff318f83eb0",
          "url": "https://github.com/schungx/rhai/commit/2c21928f679493befae23229a62f1cb286e5ed43"
        },
        "date": 1623135763229,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 191906,
            "range": "± 15802",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 110,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 263,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1408,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1451,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6101902,
            "range": "± 7445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 548,
            "range": "± 1",
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
            "value": 17385,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16196,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 595,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1045,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 95,
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
            "value": 1833163,
            "range": "± 4907",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4244905,
            "range": "± 88057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3653135,
            "range": "± 13034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24016,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8772,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2312,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2366,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 548,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 585,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1436,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1504,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1131,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1665,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 638,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 641,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 338,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 466,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1572,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 534,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 394742,
            "range": "± 612",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22766866,
            "range": "± 85566",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4001,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14497,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5814,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19548,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16836,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44442,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3353,
            "range": "± 2385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 545,
            "range": "± 318",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1820258,
            "range": "± 805511",
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
          "id": "ae9f4b5b71796d9ac5cb06832c0dd9dcbbb19cfd",
          "message": "Remove collect() with exact sizes.",
          "timestamp": "2021-06-08T15:48:55+08:00",
          "tree_id": "fbb1cdcd47ee36f457da3c4ea9b1662d82fb7ce6",
          "url": "https://github.com/schungx/rhai/commit/ae9f4b5b71796d9ac5cb06832c0dd9dcbbb19cfd"
        },
        "date": 1623146286918,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 180805,
            "range": "± 23638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 111,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 98,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 261,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1324,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1368,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6122971,
            "range": "± 578604",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 547,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 614,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16967,
            "range": "± 1333",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15648,
            "range": "± 2228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 551,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1010,
            "range": "± 102",
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
            "value": 98,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 91,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1821927,
            "range": "± 148003",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3839133,
            "range": "± 417747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3397714,
            "range": "± 384269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21019,
            "range": "± 6237",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7987,
            "range": "± 770",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2192,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2235,
            "range": "± 244",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 531,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 574,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1384,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1364,
            "range": "± 464",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1074,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1405,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 601,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 582,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 334,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 429,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1481,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 483,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 350269,
            "range": "± 41282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20261881,
            "range": "± 1838962",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3752,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14075,
            "range": "± 1303",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5714,
            "range": "± 615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18753,
            "range": "± 1638",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16854,
            "range": "± 1671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42232,
            "range": "± 9947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3079,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 524,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1628672,
            "range": "± 186058",
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
          "id": "a5031969ca7a9d7c33029674990306ca323b14aa",
          "message": "New custom syntax expression types.",
          "timestamp": "2021-06-10T10:16:39+08:00",
          "tree_id": "6fa0e63d1ddfd7ebefbe0c0470ab71645f8581ad",
          "url": "https://github.com/schungx/rhai/commit/a5031969ca7a9d7c33029674990306ca323b14aa"
        },
        "date": 1623292058094,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 160003,
            "range": "± 41440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 100,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 100,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 226,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1214,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1193,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5445085,
            "range": "± 716880",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 483,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 532,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16434,
            "range": "± 2385",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14863,
            "range": "± 1008",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 472,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 900,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 89,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 84,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1687470,
            "range": "± 248489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3510431,
            "range": "± 310424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2942394,
            "range": "± 352425",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19183,
            "range": "± 1868",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7155,
            "range": "± 1079",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1919,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2006,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 483,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 556,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1286,
            "range": "± 290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1313,
            "range": "± 367",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1081,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1315,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 533,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 543,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 302,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 405,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1423,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 446,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 316204,
            "range": "± 32540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18876342,
            "range": "± 2533872",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3558,
            "range": "± 306",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12861,
            "range": "± 1756",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5143,
            "range": "± 736",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18414,
            "range": "± 2721",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15064,
            "range": "± 3395",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40421,
            "range": "± 8830",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2870,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 471,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1469201,
            "range": "± 196218",
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
          "id": "f9dcfeb1ad4a227173fe9ce1015b85c03c97107b",
          "message": "Check data size after assignments.",
          "timestamp": "2021-06-11T19:59:50+08:00",
          "tree_id": "d55fc52d85a48d11b0c2196a30d978c381b69949",
          "url": "https://github.com/schungx/rhai/commit/f9dcfeb1ad4a227173fe9ce1015b85c03c97107b"
        },
        "date": 1623413205645,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 172277,
            "range": "± 27710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 167,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 273,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1364,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1415,
            "range": "± 184",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6022308,
            "range": "± 980748",
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
            "value": 638,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17958,
            "range": "± 1859",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17012,
            "range": "± 2350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 597,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1059,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 90,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 90,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 89,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1898717,
            "range": "± 200453",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4020155,
            "range": "± 471401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3370444,
            "range": "± 322968",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22100,
            "range": "± 1659",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8245,
            "range": "± 795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2288,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2349,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 558,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 589,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1451,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1468,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1161,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1573,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 635,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 624,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 356,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 452,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1584,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 519,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 375279,
            "range": "± 37819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21218063,
            "range": "± 1655455",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4116,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14942,
            "range": "± 4343",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5840,
            "range": "± 502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19921,
            "range": "± 1685",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17590,
            "range": "± 4051",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44481,
            "range": "± 10436",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3336,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 561,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1716927,
            "range": "± 187285",
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
          "id": "68ea8c27fdf3d4b937bb43b269d6a29ce96bee5d",
          "message": "Fix unchecked.\nDo not duplicate data size checking.",
          "timestamp": "2021-06-12T10:26:50+08:00",
          "tree_id": "74afff83a4439455addb7079e26855da8cdef5a6",
          "url": "https://github.com/schungx/rhai/commit/68ea8c27fdf3d4b937bb43b269d6a29ce96bee5d"
        },
        "date": 1623465362640,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 185793,
            "range": "± 46271",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 111,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 88,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 261,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1371,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1418,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5378956,
            "range": "± 1304974",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 522,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 604,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17709,
            "range": "± 230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16665,
            "range": "± 3281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 585,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 993,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 82,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 88,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 88,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1817848,
            "range": "± 419435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3902845,
            "range": "± 649148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3067060,
            "range": "± 613097",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19808,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7930,
            "range": "± 1466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2024,
            "range": "± 676",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2305,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 546,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 607,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1313,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1264,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1116,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1508,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 603,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 611,
            "range": "± 154",
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
            "value": 442,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1504,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 509,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 345326,
            "range": "± 100157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17769259,
            "range": "± 3730902",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3938,
            "range": "± 910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13258,
            "range": "± 4574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5780,
            "range": "± 1795",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19324,
            "range": "± 5294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17244,
            "range": "± 5423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44405,
            "range": "± 9748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3330,
            "range": "± 921",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 517,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1650345,
            "range": "± 36375",
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
          "id": "743d48f44f9e63f7e17b1f6130439ebe2d625552",
          "message": "Code style cleanup.",
          "timestamp": "2021-06-13T17:41:34+08:00",
          "tree_id": "a5b8b975bee68fe6ba1f5d7b3888ca77f2f4774f",
          "url": "https://github.com/schungx/rhai/commit/743d48f44f9e63f7e17b1f6130439ebe2d625552"
        },
        "date": 1623577668725,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 146420,
            "range": "± 15579",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 143,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 80,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 230,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1177,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1288,
            "range": "± 714",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5025092,
            "range": "± 869369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 450,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 513,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14574,
            "range": "± 2512",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15066,
            "range": "± 3619",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 468,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 853,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 77,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 74,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1578435,
            "range": "± 296986",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3273648,
            "range": "± 701852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2957616,
            "range": "± 653631",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20141,
            "range": "± 5176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7192,
            "range": "± 2584",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1998,
            "range": "± 738",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2036,
            "range": "± 362",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 497,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 536,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1215,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1156,
            "range": "± 227",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 911,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1308,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 470,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 487,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 287,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 371,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1310,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 445,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 298066,
            "range": "± 71396",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17784904,
            "range": "± 3408152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3419,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12146,
            "range": "± 2269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5174,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16528,
            "range": "± 2931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15198,
            "range": "± 3268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42015,
            "range": "± 4446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3398,
            "range": "± 931",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 530,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1432359,
            "range": "± 252379",
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
          "id": "42a14ab4cca9ca7c0b4fb06557cfe7bd771ab2d8",
          "message": "Make file structures consistent.",
          "timestamp": "2021-06-16T18:36:33+08:00",
          "tree_id": "c42b7d6833154d917c15c2e00f8c5f946b7505dc",
          "url": "https://github.com/schungx/rhai/commit/42a14ab4cca9ca7c0b4fb06557cfe7bd771ab2d8"
        },
        "date": 1623840210900,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 178959,
            "range": "± 15171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 111,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 270,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1378,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1420,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5756395,
            "range": "± 504924",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 543,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 596,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17454,
            "range": "± 1515",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15332,
            "range": "± 1108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 585,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1048,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 82,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1851380,
            "range": "± 126076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3892901,
            "range": "± 307445",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3235733,
            "range": "± 217637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21920,
            "range": "± 1050",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7897,
            "range": "± 1032",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2161,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2179,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 552,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 573,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1568,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1490,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1111,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1446,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 611,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 609,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 327,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 448,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1535,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 484,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 354816,
            "range": "± 37958",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20519292,
            "range": "± 1374471",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3826,
            "range": "± 347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13632,
            "range": "± 1188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5780,
            "range": "± 769",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18782,
            "range": "± 1186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16493,
            "range": "± 1015",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42771,
            "range": "± 5463",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3037,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 522,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1619435,
            "range": "± 126790",
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
          "id": "4093727dcbc5ba272efd60d074bcaae584fe08b1",
          "message": "New string functions.",
          "timestamp": "2021-06-17T13:31:58+08:00",
          "tree_id": "970a03ce9e9991ddfbbf392e53366bb81e1ce2ef",
          "url": "https://github.com/schungx/rhai/commit/4093727dcbc5ba272efd60d074bcaae584fe08b1"
        },
        "date": 1624181221735,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 162739,
            "range": "± 27032",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 98,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 82,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 239,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1087,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1136,
            "range": "± 190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5102965,
            "range": "± 922880",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 451,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 486,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14372,
            "range": "± 2383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13588,
            "range": "± 2847",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 448,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 885,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 67,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 70,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 74,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1512755,
            "range": "± 364097",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3463818,
            "range": "± 841877",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2707503,
            "range": "± 713094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18375,
            "range": "± 5186",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6865,
            "range": "± 1588",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1872,
            "range": "± 440",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1901,
            "range": "± 475",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 455,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 478,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1165,
            "range": "± 383",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1175,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 893,
            "range": "± 185",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1122,
            "range": "± 489",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 494,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 526,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 288,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 417,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1415,
            "range": "± 224",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 386,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 289863,
            "range": "± 69258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17519997,
            "range": "± 3010628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3242,
            "range": "± 538",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11201,
            "range": "± 2313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4656,
            "range": "± 561",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17359,
            "range": "± 4878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13974,
            "range": "± 2323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35955,
            "range": "± 9290",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2676,
            "range": "± 505",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 426,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1414175,
            "range": "± 359432",
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
          "id": "ba0cf80314ce0b3c8ab4ecc8c260e86fd56699eb",
          "message": "Prepare for 0.20.3 release.",
          "timestamp": "2021-06-22T22:32:50+08:00",
          "tree_id": "369472da569e4960d2a79b7551591fcf7530a199",
          "url": "https://github.com/schungx/rhai/commit/ba0cf80314ce0b3c8ab4ecc8c260e86fd56699eb"
        },
        "date": 1624372981077,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 195467,
            "range": "± 24823",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 119,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 8",
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
            "value": 1425,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1408,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6028747,
            "range": "± 721864",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 556,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 619,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17467,
            "range": "± 2553",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16135,
            "range": "± 1855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 584,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1013,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 88,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 88,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1899870,
            "range": "± 153568",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4008021,
            "range": "± 208167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3347631,
            "range": "± 296331",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22587,
            "range": "± 4196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8304,
            "range": "± 826",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2286,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2291,
            "range": "± 342",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 547,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 600,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1427,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1406,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1099,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1445,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 615,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 603,
            "range": "± 317",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 343,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 450,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1839,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 516,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 365010,
            "range": "± 46465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21547906,
            "range": "± 2651775",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4111,
            "range": "± 765",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15401,
            "range": "± 1372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5948,
            "range": "± 759",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19729,
            "range": "± 2479",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18053,
            "range": "± 1811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44851,
            "range": "± 2920",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3388,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 556,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1688585,
            "range": "± 328446",
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
          "id": "e40e81ac1ab395b4cb98e1dc15993749ed81f93c",
          "message": "Mark simple functions const.",
          "timestamp": "2021-06-28T18:06:05+08:00",
          "tree_id": "9cf4bebc951fcf0fc53907302186b4ce8398abb2",
          "url": "https://github.com/schungx/rhai/commit/e40e81ac1ab395b4cb98e1dc15993749ed81f93c"
        },
        "date": 1624875695971,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 199290,
            "range": "± 1292",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 83,
            "range": "± 1",
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
            "value": 192,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1020,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1055,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4162497,
            "range": "± 11675",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 411,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 447,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12540,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12208,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 413,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 726,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 64,
            "range": "± 0",
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
            "value": 64,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1351135,
            "range": "± 9230",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2695195,
            "range": "± 6783",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2422705,
            "range": "± 20151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 15644,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 5898,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1666,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1689,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 402,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 428,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1022,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 983,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 777,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1078,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 424,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 430,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 253,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 314,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1253,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 352,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 258074,
            "range": "± 3747",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 15215433,
            "range": "± 278756",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2971,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10877,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4241,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14483,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12859,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32618,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2410,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 401,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1218373,
            "range": "± 9165",
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
          "id": "a13a72436108bf9f8ac64644403103004f0edcd6",
          "message": "Fix builds.",
          "timestamp": "2021-06-28T18:29:53+08:00",
          "tree_id": "1caf09f4c20a3853e8d628955d24a7eb90728ff5",
          "url": "https://github.com/schungx/rhai/commit/a13a72436108bf9f8ac64644403103004f0edcd6"
        },
        "date": 1624876876007,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 241353,
            "range": "± 73152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 108,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 90,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 236,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1230,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1243,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5298308,
            "range": "± 1019666",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 467,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 515,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15418,
            "range": "± 3631",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14270,
            "range": "± 2029",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 472,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 816,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 78,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 75,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 80,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1665219,
            "range": "± 281388",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3471433,
            "range": "± 660543",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2999223,
            "range": "± 540347",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20928,
            "range": "± 4095",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7285,
            "range": "± 1363",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2039,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2086,
            "range": "± 485",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 508,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 565,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1332,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1254,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 934,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1266,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 514,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 508,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 304,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 425,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1525,
            "range": "± 229",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 472,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 319542,
            "range": "± 84974",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18787458,
            "range": "± 3307476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3607,
            "range": "± 616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13405,
            "range": "± 3666",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5672,
            "range": "± 1399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17648,
            "range": "± 4025",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14614,
            "range": "± 1740",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39248,
            "range": "± 10637",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2880,
            "range": "± 501",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 488,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1533398,
            "range": "± 275268",
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
          "id": "69352d74c28176087829c82c31c1a8672735f8a1",
          "message": "Optimize Scope layout.",
          "timestamp": "2021-06-29T23:22:54+08:00",
          "tree_id": "ac835df0ca716eb215f685e1b61f00fc010beee0",
          "url": "https://github.com/schungx/rhai/commit/69352d74c28176087829c82c31c1a8672735f8a1"
        },
        "date": 1624980750475,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 267544,
            "range": "± 29423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 108,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 262,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1323,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1374,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5480233,
            "range": "± 284165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 505,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 545,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16856,
            "range": "± 986",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15863,
            "range": "± 605",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 541,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 986,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 80,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 79,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 79,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1819142,
            "range": "± 93695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3581455,
            "range": "± 154596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3023731,
            "range": "± 100449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19338,
            "range": "± 969",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8060,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2132,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2158,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 503,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 527,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1226,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1153,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1043,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1445,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 575,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 587,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 331,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 432,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1670,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 497,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 351205,
            "range": "± 28658",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17689499,
            "range": "± 916296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3860,
            "range": "± 287",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13831,
            "range": "± 643",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5761,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18832,
            "range": "± 1714",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16241,
            "range": "± 845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42273,
            "range": "± 2207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3142,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 525,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1577088,
            "range": "± 92200",
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
          "id": "8c802dcd587d487387c99b057163becc827e0108",
          "message": "Fix optimizer bug.",
          "timestamp": "2021-07-01T12:27:29+08:00",
          "tree_id": "9db104b50fcedae7e998b46b2b84e9837d3c132f",
          "url": "https://github.com/schungx/rhai/commit/8c802dcd587d487387c99b057163becc827e0108"
        },
        "date": 1625113893300,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 287808,
            "range": "± 1908",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 120,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 103,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 268,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1413,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1461,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5946144,
            "range": "± 23590",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 548,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 600,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17818,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16663,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 581,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1029,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 87,
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
            "value": 1890415,
            "range": "± 6502",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3890813,
            "range": "± 12496",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3258676,
            "range": "± 3192",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20993,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8420,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2339,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2371,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 540,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 576,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1328,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1263,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1067,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1606,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 616,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 618,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 349,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 454,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1737,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 524,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 372316,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19473587,
            "range": "± 135490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4132,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15079,
            "range": "± 180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6061,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19714,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17348,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46281,
            "range": "± 449",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3341,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 565,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1742471,
            "range": "± 70749",
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
          "id": "3e0fd33db4a07e7f74e2bffd907c0f7de6f5e082",
          "message": "Fix optimizer test.",
          "timestamp": "2021-07-01T12:33:16+08:00",
          "tree_id": "c153ce2f9cd8b3fd07f889b4e6b44174d7e75efd",
          "url": "https://github.com/schungx/rhai/commit/3e0fd33db4a07e7f74e2bffd907c0f7de6f5e082"
        },
        "date": 1625114736769,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 225509,
            "range": "± 43774",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 105,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 80,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 225,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1249,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1263,
            "range": "± 176",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5260241,
            "range": "± 1202457",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 468,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 506,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15677,
            "range": "± 1428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13815,
            "range": "± 1704",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 502,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 891,
            "range": "± 183",
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
            "value": 74,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 73,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1667412,
            "range": "± 103199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3442171,
            "range": "± 283676",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2852835,
            "range": "± 120483",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19205,
            "range": "± 1724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7323,
            "range": "± 1160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1961,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1918,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 459,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 483,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1383,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1172,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 928,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1301,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 509,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 537,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 298,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 370,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1510,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 428,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 333181,
            "range": "± 74381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18470638,
            "range": "± 1779758",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3615,
            "range": "± 802",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12812,
            "range": "± 1300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5149,
            "range": "± 505",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16594,
            "range": "± 2085",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15599,
            "range": "± 3977",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37088,
            "range": "± 5355",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2919,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 488,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1457968,
            "range": "± 118630",
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
          "id": "694ac5b5bd36ca246375ad50b4598acc3274bafc",
          "message": "General code fixups.",
          "timestamp": "2021-07-04T16:40:15+08:00",
          "tree_id": "23eb2a3943e6e63dff9fac1193dd4ce8a798b4c9",
          "url": "https://github.com/schungx/rhai/commit/694ac5b5bd36ca246375ad50b4598acc3274bafc"
        },
        "date": 1625388618184,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 228475,
            "range": "± 31994",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 96,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 93,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 249,
            "range": "± 264",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1198,
            "range": "± 222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1274,
            "range": "± 466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5156512,
            "range": "± 964325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 470,
            "range": "± 816",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 511,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15096,
            "range": "± 2274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13830,
            "range": "± 2438",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 502,
            "range": "± 1137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 953,
            "range": "± 207",
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
            "value": 75,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 84,
            "range": "± 640",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1778483,
            "range": "± 458983",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3633536,
            "range": "± 668709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3081742,
            "range": "± 10769860",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19742,
            "range": "± 4251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7054,
            "range": "± 1074",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1928,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1994,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 479,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 462,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1242,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1273,
            "range": "± 282",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1259,
            "range": "± 3947",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1538,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 610,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 662,
            "range": "± 256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 335,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 414,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1711,
            "range": "± 8266",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 472,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 345930,
            "range": "± 1987190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19154223,
            "range": "± 2282693",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3487,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13002,
            "range": "± 2680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5099,
            "range": "± 899",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18432,
            "range": "± 4620",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15585,
            "range": "± 3718",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40889,
            "range": "± 6807",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3107,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 515,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1573972,
            "range": "± 404167",
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
          "id": "4adc044c79e548965d72ea3c9233cd762397d0a7",
          "message": "Fix builds.",
          "timestamp": "2021-07-04T16:51:05+08:00",
          "tree_id": "888bca02396e278969e48910038854c1ad70a9ca",
          "url": "https://github.com/schungx/rhai/commit/4adc044c79e548965d72ea3c9233cd762397d0a7"
        },
        "date": 1625389298707,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 252420,
            "range": "± 94113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 117,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 99,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 263,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1217,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1429,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5382067,
            "range": "± 945793",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 471,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 496,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15499,
            "range": "± 2949",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14496,
            "range": "± 3231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 645,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 978,
            "range": "± 127",
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
            "value": 73,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 76,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1659712,
            "range": "± 369629",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3248351,
            "range": "± 445710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2823932,
            "range": "± 591651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18254,
            "range": "± 3170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6858,
            "range": "± 1114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2163,
            "range": "± 635",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1985,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 450,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 522,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1262,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1326,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1159,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1579,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 564,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 665,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 327,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 437,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1618,
            "range": "± 323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 455,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 323372,
            "range": "± 61070",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18076375,
            "range": "± 3714323",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3773,
            "range": "± 842",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12811,
            "range": "± 3828",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5668,
            "range": "± 1120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17507,
            "range": "± 4177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16357,
            "range": "± 3476",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38449,
            "range": "± 4094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3007,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 477,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1594667,
            "range": "± 274541",
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
          "id": "8e94b2e3b803277d3f2224fff0ac7dfb743732be",
          "message": "Change no-std build scripts.",
          "timestamp": "2021-07-04T16:58:03+08:00",
          "tree_id": "9cd3d1b42f1506b994f8c41a0663291fe7ffb41e",
          "url": "https://github.com/schungx/rhai/commit/8e94b2e3b803277d3f2224fff0ac7dfb743732be"
        },
        "date": 1625389687238,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 218819,
            "range": "± 37288",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 94,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 97,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 203,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1058,
            "range": "± 314",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1057,
            "range": "± 326",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4792057,
            "range": "± 850026",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 458,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 490,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14783,
            "range": "± 3509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13014,
            "range": "± 1730",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 477,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 958,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 73,
            "range": "± 12",
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
            "value": 1648673,
            "range": "± 209097",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3869348,
            "range": "± 873332",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3169340,
            "range": "± 486258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21220,
            "range": "± 4055",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8025,
            "range": "± 1150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2229,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2139,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 462,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 479,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1133,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1130,
            "range": "± 452",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 968,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1265,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 519,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 520,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 276,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 389,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1473,
            "range": "± 267",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 401,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 343233,
            "range": "± 62190",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19474188,
            "range": "± 4601488",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3220,
            "range": "± 369",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11755,
            "range": "± 1915",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4975,
            "range": "± 1016",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16268,
            "range": "± 7251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12828,
            "range": "± 3478",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 35261,
            "range": "± 4990",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2627,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 447,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1442806,
            "range": "± 327299",
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
          "id": "68270e9b6141692b252e74bf486b09e7f6982524",
          "message": "Revert no-std profile changes and fix README.",
          "timestamp": "2021-07-04T17:09:50+08:00",
          "tree_id": "9b0a99d553645ed13d82ca48b702e5380518490b",
          "url": "https://github.com/schungx/rhai/commit/68270e9b6141692b252e74bf486b09e7f6982524"
        },
        "date": 1625390281697,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 197031,
            "range": "± 14819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 86,
            "range": "± 20",
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
            "value": 215,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 993,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1039,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4466713,
            "range": "± 299495",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 393,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 437,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12884,
            "range": "± 1540",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12466,
            "range": "± 1852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 432,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 810,
            "range": "± 95",
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
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 59,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1451340,
            "range": "± 165357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2944670,
            "range": "± 147647",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2473636,
            "range": "± 164874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 16588,
            "range": "± 3497",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6019,
            "range": "± 1663",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1655,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1641,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 391,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 403,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1036,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1002,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 837,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1173,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 471,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 477,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 262,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 328,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1322,
            "range": "± 259",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 375,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 270738,
            "range": "± 27974",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 15920063,
            "range": "± 928405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 2991,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 10553,
            "range": "± 1628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4392,
            "range": "± 669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14293,
            "range": "± 3211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12434,
            "range": "± 1414",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32535,
            "range": "± 2207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2420,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 405,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1268739,
            "range": "± 114587",
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
          "id": "9cb7610cc5f66025e72567a5aea48327cd9f3a94",
          "message": "Unreserve begin, end, then, each, unless",
          "timestamp": "2021-07-06T09:51:29+08:00",
          "tree_id": "d02b27eed0956d7fcefa220dfa49bfd0c6287b96",
          "url": "https://github.com/schungx/rhai/commit/9cb7610cc5f66025e72567a5aea48327cd9f3a94"
        },
        "date": 1625536714578,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 207497,
            "range": "± 24465",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 114,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 86,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 221,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1113,
            "range": "± 242",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1199,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4791835,
            "range": "± 839043",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 432,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 479,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14013,
            "range": "± 1906",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13204,
            "range": "± 2703",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 493,
            "range": "± 147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 856,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 67,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 65,
            "range": "± 14",
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
            "value": 1500919,
            "range": "± 143091",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3341127,
            "range": "± 614853",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2685589,
            "range": "± 648569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19452,
            "range": "± 3702",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6662,
            "range": "± 1222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1789,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1850,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 393,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 420,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1127,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1147,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 939,
            "range": "± 280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1247,
            "range": "± 269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 500,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 501,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 289,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 369,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1432,
            "range": "± 188",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 417,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 290651,
            "range": "± 51209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 16828016,
            "range": "± 1615746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3161,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11287,
            "range": "± 2291",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4541,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15403,
            "range": "± 2059",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13644,
            "range": "± 2562",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 34676,
            "range": "± 4134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2743,
            "range": "± 690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 435,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1362021,
            "range": "± 227960",
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
          "id": "204c08a131afad9533c3a16cb495068d1516efa0",
          "message": "Bump codegen.",
          "timestamp": "2021-07-07T08:38:56+08:00",
          "tree_id": "e49adc16a3bcbb193f48546442177485df831e4f",
          "url": "https://github.com/schungx/rhai/commit/204c08a131afad9533c3a16cb495068d1516efa0"
        },
        "date": 1625618749115,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 265235,
            "range": "± 36065",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 145,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 103,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 276,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1408,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1421,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6026947,
            "range": "± 593256",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 541,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 623,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17771,
            "range": "± 2404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16749,
            "range": "± 2082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 631,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1107,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 82,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 81,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 81,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1919364,
            "range": "± 304953",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4015619,
            "range": "± 511622",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3368437,
            "range": "± 339391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23391,
            "range": "± 4569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8423,
            "range": "± 900",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2273,
            "range": "± 420",
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
            "value": 527,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 556,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1464,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1357,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1229,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1583,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 655,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 666,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 426,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 527,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 2139,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 592,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 384123,
            "range": "± 120680",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21754266,
            "range": "± 1739222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4020,
            "range": "± 488",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14512,
            "range": "± 2311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5839,
            "range": "± 808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19446,
            "range": "± 2484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17022,
            "range": "± 3286",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43978,
            "range": "± 4998",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3417,
            "range": "± 443",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 566,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1707339,
            "range": "± 142676",
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
          "id": "d6220f0d8d958ae96fda375962b1f115b650600c",
          "message": "Remove unnecessary imports.",
          "timestamp": "2021-07-08T22:42:50+08:00",
          "tree_id": "769f245602fa556c654a69060f4410e749bfb3ec",
          "url": "https://github.com/schungx/rhai/commit/d6220f0d8d958ae96fda375962b1f115b650600c"
        },
        "date": 1625755792721,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 253338,
            "range": "± 15669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 111,
            "range": "± 8",
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
            "value": 256,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1316,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1400,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5714136,
            "range": "± 610280",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 537,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 593,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17189,
            "range": "± 1509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15937,
            "range": "± 1182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 646,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1156,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 79,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 80,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 78,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1894780,
            "range": "± 147603",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4262481,
            "range": "± 297089",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3321208,
            "range": "± 338191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21961,
            "range": "± 1316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8127,
            "range": "± 791",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2196,
            "range": "± 268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2199,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 520,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 551,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1392,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1329,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1189,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1529,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 637,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 621,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 351,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 441,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1738,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 505,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 366566,
            "range": "± 41966",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21082169,
            "range": "± 1997981",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3929,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13944,
            "range": "± 1928",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5812,
            "range": "± 1082",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19914,
            "range": "± 3726",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16955,
            "range": "± 3797",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 43594,
            "range": "± 7208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3276,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 555,
            "range": "± 302",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1711062,
            "range": "± 124725",
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
          "id": "e0673a2f1ab16db0894259c946679afdee4ece03",
          "message": "Change some #[inline(always)] to [#inline].",
          "timestamp": "2021-07-10T11:06:13+08:00",
          "tree_id": "eb46430478eef6e78f8e8ca47e50f5aca1d02f62",
          "url": "https://github.com/schungx/rhai/commit/e0673a2f1ab16db0894259c946679afdee4ece03"
        },
        "date": 1625886760921,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 258571,
            "range": "± 48350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 118,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 268,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1334,
            "range": "± 567",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1406,
            "range": "± 178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6191521,
            "range": "± 1001296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 513,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 576,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17398,
            "range": "± 4173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15741,
            "range": "± 2096",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 602,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1066,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 91,
            "range": "± 13",
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
            "value": 88,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1938068,
            "range": "± 360283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4048942,
            "range": "± 948819",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3486174,
            "range": "± 643699",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23453,
            "range": "± 4352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8252,
            "range": "± 2513",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2279,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2324,
            "range": "± 1434",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 535,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 559,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1524,
            "range": "± 351",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1407,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1203,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1610,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 662,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 639,
            "range": "± 162",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 379,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 476,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1735,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 510,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 381619,
            "range": "± 76107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20821443,
            "range": "± 3029648",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4075,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14130,
            "range": "± 2043",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5688,
            "range": "± 1160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19802,
            "range": "± 3052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17734,
            "range": "± 3970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42250,
            "range": "± 8238",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3298,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 554,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1699643,
            "range": "± 308763",
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
          "distinct": false,
          "id": "fe6691752bdb39a383a0806f9d56e7564d1cbdc0",
          "message": "Use smartstring 0.2.7 for no-std.",
          "timestamp": "2021-07-12T12:11:53+08:00",
          "tree_id": "ad44a351ab60c1a5a6bf13a155177787e5344604",
          "url": "https://github.com/schungx/rhai/commit/fe6691752bdb39a383a0806f9d56e7564d1cbdc0"
        },
        "date": 1626063684080,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 250471,
            "range": "± 34298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 114,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 96,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 267,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1316,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1375,
            "range": "± 265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5804802,
            "range": "± 807301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 516,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 568,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16973,
            "range": "± 2521",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15428,
            "range": "± 1534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 604,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1019,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 92,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 91,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 90,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1859826,
            "range": "± 286329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3840789,
            "range": "± 506715",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3308675,
            "range": "± 373444",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21956,
            "range": "± 2516",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8052,
            "range": "± 1135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2143,
            "range": "± 352",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2259,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 504,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 515,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1433,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1386,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1118,
            "range": "± 207",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1484,
            "range": "± 262",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 621,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 650,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 362,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 463,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1825,
            "range": "± 219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 544,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 362358,
            "range": "± 39829",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20566194,
            "range": "± 2761031",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3834,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14208,
            "range": "± 2641",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5755,
            "range": "± 689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19574,
            "range": "± 3135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16216,
            "range": "± 2113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41626,
            "range": "± 12019",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3206,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 518,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1646582,
            "range": "± 270933",
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
          "id": "e3668227c0df3aa741ac22063d5d7e7e29f2ff43",
          "message": "Remove absolute path for files in the current directory.",
          "timestamp": "2021-07-14T18:32:22+08:00",
          "tree_id": "6e8c7e569b13c13926ec423bfb27d74f123c9caa",
          "url": "https://github.com/schungx/rhai/commit/e3668227c0df3aa741ac22063d5d7e7e29f2ff43"
        },
        "date": 1626272213447,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 236871,
            "range": "± 2048",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 99,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 84,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 221,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1170,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1215,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4889054,
            "range": "± 10462",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 441,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 480,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14804,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14051,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 490,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 855,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 75,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 75,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1560397,
            "range": "± 4528",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3187176,
            "range": "± 9375",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2683653,
            "range": "± 10667",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18305,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7061,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1926,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1914,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 437,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 465,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1218,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1154,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1044,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1398,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 576,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 552,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 311,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 408,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1626,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 464,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 306575,
            "range": "± 1486",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17239077,
            "range": "± 103695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3412,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12907,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4950,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17357,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14938,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38242,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2845,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 457,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1455988,
            "range": "± 12609",
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
          "id": "106c8ab5d14bcf16208732c2ab1188452d56d3c7",
          "message": "Fix builds.",
          "timestamp": "2021-07-14T22:33:47+08:00",
          "tree_id": "b62f53c4c0618622f3ef33c634c52c117c41608f",
          "url": "https://github.com/schungx/rhai/commit/106c8ab5d14bcf16208732c2ab1188452d56d3c7"
        },
        "date": 1626273714687,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 235641,
            "range": "± 1874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 98,
            "range": "± 0",
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
            "value": 220,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1182,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1244,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4894257,
            "range": "± 7143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 440,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 480,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14765,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14070,
            "range": "± 236",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 501,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 870,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 76,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 76,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 75,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1569192,
            "range": "± 2754",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3189264,
            "range": "± 3546",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2681460,
            "range": "± 2201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18459,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7034,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1863,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1895,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 436,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 465,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1242,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1173,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1019,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1367,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 556,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 552,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 311,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 406,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1665,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 454,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 306448,
            "range": "± 1219",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17253356,
            "range": "± 112072",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3370,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12856,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4966,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17226,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14652,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38397,
            "range": "± 420",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2830,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 457,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1408527,
            "range": "± 5278",
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
          "id": "b8485b190915820190b7acb50df17beb0089e2a1",
          "message": "Fix bug in indexing.",
          "timestamp": "2021-07-24T12:27:33+08:00",
          "tree_id": "0b91a8e5ddbddd73673c97ab6bd36577ec74920e",
          "url": "https://github.com/schungx/rhai/commit/b8485b190915820190b7acb50df17beb0089e2a1"
        },
        "date": 1627101258298,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 240420,
            "range": "± 46334",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 106,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 89,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 246,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1256,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1322,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5449765,
            "range": "± 844153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 483,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 534,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16153,
            "range": "± 3399",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15037,
            "range": "± 2799",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 563,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 990,
            "range": "± 411",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 87,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 89,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 92,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1633286,
            "range": "± 376391",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3577851,
            "range": "± 843944",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3063820,
            "range": "± 577835",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 21360,
            "range": "± 4008",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7483,
            "range": "± 1868",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2079,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2075,
            "range": "± 325",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 513,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 549,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1414,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1297,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1075,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1475,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 594,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 606,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 362,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 464,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1628,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 521,
            "range": "± 112",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 358014,
            "range": "± 69426",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19697279,
            "range": "± 2912269",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3538,
            "range": "± 1030",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13407,
            "range": "± 2574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5408,
            "range": "± 808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18771,
            "range": "± 3837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15676,
            "range": "± 3215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39163,
            "range": "± 8064",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3256,
            "range": "± 966",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 512,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1545674,
            "range": "± 273383",
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
          "id": "df482d35740605c32da4d77f1ad765d20a5b1b71",
          "message": "Satisfy clippy.",
          "timestamp": "2021-07-24T14:11:16+08:00",
          "tree_id": "f5946fad30d3117901ca6ddbcfc73039a8ee99b9",
          "url": "https://github.com/schungx/rhai/commit/df482d35740605c32da4d77f1ad765d20a5b1b71"
        },
        "date": 1627107469581,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 260114,
            "range": "± 63257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 111,
            "range": "± 11",
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
            "value": 244,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1229,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1309,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5320727,
            "range": "± 614328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 486,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 528,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15709,
            "range": "± 1733",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14694,
            "range": "± 1560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 553,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 962,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 86,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 81,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 84,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1716688,
            "range": "± 197128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3513404,
            "range": "± 431177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2942894,
            "range": "± 310097",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18980,
            "range": "± 1944",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7568,
            "range": "± 749",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2082,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2050,
            "range": "± 198",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 480,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 527,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1234,
            "range": "± 117",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1184,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1136,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1571,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 623,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 631,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 349,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 463,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1684,
            "range": "± 161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 510,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 348015,
            "range": "± 33087",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17909727,
            "range": "± 1612857",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3798,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13726,
            "range": "± 1538",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5432,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18460,
            "range": "± 1760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15849,
            "range": "± 1865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42729,
            "range": "± 3710",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3235,
            "range": "± 228",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 520,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1640790,
            "range": "± 146432",
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
          "id": "8531567ee98eaeb636cc7cb7247e5ebe0905cb3f",
          "message": "Fix builds.",
          "timestamp": "2021-07-24T14:23:14+08:00",
          "tree_id": "869a740944d906b1017278fca18a5a8fa4df14a7",
          "url": "https://github.com/schungx/rhai/commit/8531567ee98eaeb636cc7cb7247e5ebe0905cb3f"
        },
        "date": 1627108231024,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 272765,
            "range": "± 33785",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 125,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 93,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 249,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1249,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1314,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5407320,
            "range": "± 463815",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 499,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 530,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16436,
            "range": "± 1866",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16341,
            "range": "± 737",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 562,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1022,
            "range": "± 101",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 88,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 85,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 85,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1744738,
            "range": "± 175161",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3735343,
            "range": "± 342057",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3158383,
            "range": "± 271239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20028,
            "range": "± 1732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7715,
            "range": "± 786",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2168,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2192,
            "range": "± 214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 490,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 514,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1242,
            "range": "± 125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1230,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1130,
            "range": "± 123",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1457,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 615,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 622,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 356,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 457,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1790,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 506,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 334603,
            "range": "± 32952",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17757567,
            "range": "± 1265493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3745,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13991,
            "range": "± 1127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5438,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18545,
            "range": "± 1757",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16152,
            "range": "± 1692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 41484,
            "range": "± 4076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3170,
            "range": "± 311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 510,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1780706,
            "range": "± 182440",
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
          "distinct": false,
          "id": "6cb710652beaafb1ff5c41b0c77f0ccbed78b1bc",
          "message": "Fix doc link.",
          "timestamp": "2021-07-25T11:51:26+08:00",
          "tree_id": "7f95096e776056184235cecbcaa45a48bd2abef1",
          "url": "https://github.com/schungx/rhai/commit/6cb710652beaafb1ff5c41b0c77f0ccbed78b1bc"
        },
        "date": 1627199574726,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 237702,
            "range": "± 1569",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 106,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 95,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 240,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1141,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1181,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4966820,
            "range": "± 17916",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 442,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 481,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14732,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13713,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 498,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 891,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 75,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 75,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1593499,
            "range": "± 2068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3254339,
            "range": "± 9233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2755083,
            "range": "± 7104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18705,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6963,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1874,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1905,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 436,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 465,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1213,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1161,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 970,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1312,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 543,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 538,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 312,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 406,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1589,
            "range": "± 68",
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
            "value": 302070,
            "range": "± 1151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17433431,
            "range": "± 127939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3330,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12396,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4888,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16773,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14516,
            "range": "± 152",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 37509,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2738,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 453,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1412757,
            "range": "± 4694",
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
          "distinct": false,
          "id": "6955c77b76684a793d9127013e8238b4b9562fec",
          "message": "Remove no_std_repl.",
          "timestamp": "2021-07-26T22:24:11+08:00",
          "tree_id": "92b0ba7fa8abc3bd837b21eb5ecbdb1b060b7ab4",
          "url": "https://github.com/schungx/rhai/commit/6955c77b76684a793d9127013e8238b4b9562fec"
        },
        "date": 1627311851641,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 268347,
            "range": "± 42585",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 120,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 101,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 267,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1414,
            "range": "± 246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1448,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6205127,
            "range": "± 1500074",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 546,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 606,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18544,
            "range": "± 3133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17498,
            "range": "± 3905",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 616,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1175,
            "range": "± 190",
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
            "value": 98,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 94,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2114697,
            "range": "± 306151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4553370,
            "range": "± 835204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3854538,
            "range": "± 666724",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24515,
            "range": "± 4030",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9057,
            "range": "± 1701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2296,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2362,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 570,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 567,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1514,
            "range": "± 217",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1463,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1235,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1634,
            "range": "± 255",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 680,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 668,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 388,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 504,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1976,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 554,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 388722,
            "range": "± 113268",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22026110,
            "range": "± 2004599",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4248,
            "range": "± 810",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15258,
            "range": "± 3178",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6082,
            "range": "± 1534",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20145,
            "range": "± 2065",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17610,
            "range": "± 3379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44125,
            "range": "± 5490",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3419,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 564,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1726549,
            "range": "± 348420",
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
          "distinct": false,
          "id": "0944261b882f66c83bb248386840e101fd3a0608",
          "message": "Merge Stmt::Let and Stmt::Const into Stmt::Var.",
          "timestamp": "2021-08-01T11:59:53+08:00",
          "tree_id": "51ab28771d804e4cf68713c53630198a5be0f62f",
          "url": "https://github.com/schungx/rhai/commit/0944261b882f66c83bb248386840e101fd3a0608"
        },
        "date": 1627790949242,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 272846,
            "range": "± 22698",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 125,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 106,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 272,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1393,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1436,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5922417,
            "range": "± 206520",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 538,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 586,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17509,
            "range": "± 1042",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16361,
            "range": "± 1595",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 606,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1033,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 90,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 90,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 90,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1914606,
            "range": "± 80410",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3951560,
            "range": "± 266630",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3147416,
            "range": "± 272056",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20931,
            "range": "± 1518",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8235,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2239,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2262,
            "range": "± 223",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 522,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 568,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1314,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1264,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1134,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1569,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 654,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 639,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 376,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 461,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1799,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 541,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 369534,
            "range": "± 27378",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19521915,
            "range": "± 1342665",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4169,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14539,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5842,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19530,
            "range": "± 248",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 16611,
            "range": "± 240",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44339,
            "range": "± 1671",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3385,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 621,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1718118,
            "range": "± 55392",
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
          "id": "1d82a11f0b015b12651c8d0d9c4b8acd28f46f4c",
          "message": "Change AST nodes to use bitflags for options.",
          "timestamp": "2021-08-03T22:19:25+08:00",
          "tree_id": "3baee0d964416be2345fc1448509a3e34e89cc9a",
          "url": "https://github.com/schungx/rhai/commit/1d82a11f0b015b12651c8d0d9c4b8acd28f46f4c"
        },
        "date": 1628000786224,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 257641,
            "range": "± 33094",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 157,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 106,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 290,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1451,
            "range": "± 181",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1508,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6249411,
            "range": "± 1083160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 544,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 614,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17453,
            "range": "± 2239",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 16202,
            "range": "± 2719",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 610,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1075,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 88,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 90,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 93,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1916805,
            "range": "± 243717",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4270521,
            "range": "± 839594",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3527181,
            "range": "± 413324",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23465,
            "range": "± 2774",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8519,
            "range": "± 1336",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2268,
            "range": "± 285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2322,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 536,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 607,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1682,
            "range": "± 313",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1667,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1220,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1660,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 649,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 659,
            "range": "± 91",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 407,
            "range": "± 127",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 517,
            "range": "± 275",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1968,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 571,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 400055,
            "range": "± 76405",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22423977,
            "range": "± 2680809",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4007,
            "range": "± 545",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14891,
            "range": "± 2866",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5701,
            "range": "± 720",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20044,
            "range": "± 2922",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17707,
            "range": "± 2651",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 42989,
            "range": "± 6222",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3191,
            "range": "± 482",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 601,
            "range": "± 73",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1751528,
            "range": "± 245852",
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
          "distinct": false,
          "id": "9b56c1ba7809716641f6ba172aa82c267de3a326",
          "message": "Optimize loops better.",
          "timestamp": "2021-08-04T17:40:26+08:00",
          "tree_id": "0307bce7e7cead7db7154c92b7a7a49db8f0a52d",
          "url": "https://github.com/schungx/rhai/commit/9b56c1ba7809716641f6ba172aa82c267de3a326"
        },
        "date": 1628073515148,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 230797,
            "range": "± 2154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 105,
            "range": "± 2",
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
            "value": 225,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1176,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1225,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5083609,
            "range": "± 8554",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 448,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 482,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15020,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13707,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 529,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1035,
            "range": "± 76",
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
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1586320,
            "range": "± 2132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3315012,
            "range": "± 5526",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2795346,
            "range": "± 11194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 18998,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7119,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1982,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1994,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 439,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 474,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1210,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1192,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1008,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1304,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 566,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 552,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 317,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 406,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1557,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 463,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 309924,
            "range": "± 1727",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17479119,
            "range": "± 82310",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3297,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12093,
            "range": "± 170",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4829,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16564,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14147,
            "range": "± 200",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36540,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2678,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 453,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1425487,
            "range": "± 4638",
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
          "id": "278b840e138ed57f30a823b9ef1909b186770135",
          "message": "Fix unchecked build.",
          "timestamp": "2021-08-04T18:57:52+08:00",
          "tree_id": "058dc3e4d515e71c9db939a6801d703426610764",
          "url": "https://github.com/schungx/rhai/commit/278b840e138ed57f30a823b9ef1909b186770135"
        },
        "date": 1628076188963,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 227880,
            "range": "± 45809",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 120,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 98,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 235,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1190,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1222,
            "range": "± 345",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5589329,
            "range": "± 588278",
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
            "value": 527,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15952,
            "range": "± 1594",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14654,
            "range": "± 3855",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 562,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 965,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 84,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 88,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1814969,
            "range": "± 138865",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3816762,
            "range": "± 355448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3212376,
            "range": "± 350641",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20265,
            "range": "± 3798",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7801,
            "range": "± 1154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2016,
            "range": "± 520",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2218,
            "range": "± 379",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 488,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 491,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1297,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1352,
            "range": "± 459",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1097,
            "range": "± 103",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1381,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 590,
            "range": "± 135",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 593,
            "range": "± 115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 355,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 489,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1860,
            "range": "± 667",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 495,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 344890,
            "range": "± 61689",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19601869,
            "range": "± 2070690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3645,
            "range": "± 340",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12909,
            "range": "± 1669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5069,
            "range": "± 669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17846,
            "range": "± 1739",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15079,
            "range": "± 1360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 36620,
            "range": "± 8052",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2912,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 498,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1566630,
            "range": "± 212108",
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
          "id": "98a697cc9b02bad6ba233f23b3e89ba48ab6b394",
          "message": "Change build config to v1.1.",
          "timestamp": "2021-08-12T11:28:31+08:00",
          "tree_id": "37c940b275d27a8e87657787611bd0b173c4d29f",
          "url": "https://github.com/schungx/rhai/commit/98a697cc9b02bad6ba233f23b3e89ba48ab6b394"
        },
        "date": 1628739341856,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 273487,
            "range": "± 39837",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 138,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 119,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 283,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1429,
            "range": "± 130",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1467,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6445845,
            "range": "± 703448",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 558,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 609,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18606,
            "range": "± 2972",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17439,
            "range": "± 2206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 621,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1116,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 97,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 95,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 96,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2042723,
            "range": "± 220923",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4375740,
            "range": "± 556760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3439624,
            "range": "± 302320",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23444,
            "range": "± 2068",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8841,
            "range": "± 852",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2412,
            "range": "± 289",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2450,
            "range": "± 312",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 548,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 589,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1510,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1428,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1240,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1672,
            "range": "± 173",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 672,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 688,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 387,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 511,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1965,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 570,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 399014,
            "range": "± 68316",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 22624744,
            "range": "± 1692732",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4189,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15296,
            "range": "± 1690",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6115,
            "range": "± 982",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20506,
            "range": "± 2888",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17554,
            "range": "± 1582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 44807,
            "range": "± 4154",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3490,
            "range": "± 511",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 622,
            "range": "± 60",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1824431,
            "range": "± 179225",
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
          "id": "ae1813df90070875ba5126daee7219cdea12590d",
          "message": "Change build config to v1.1.",
          "timestamp": "2021-08-12T11:53:22+08:00",
          "tree_id": "a7e9b8bcea4626fc2c42a798a21abff4dc2d6062",
          "url": "https://github.com/schungx/rhai/commit/ae1813df90070875ba5126daee7219cdea12590d"
        },
        "date": 1628741035263,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 234701,
            "range": "± 20481",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 123,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 112,
            "range": "± 11",
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
            "value": 1241,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1309,
            "range": "± 124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5731963,
            "range": "± 723231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 499,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 545,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16085,
            "range": "± 2049",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15034,
            "range": "± 2023",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 579,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 990,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 85,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 88,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 87,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1827684,
            "range": "± 282775",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3936210,
            "range": "± 632817",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3152475,
            "range": "± 265582",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20947,
            "range": "± 2363",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7768,
            "range": "± 650",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2196,
            "range": "± 276",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2194,
            "range": "± 315",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 472,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 509,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1331,
            "range": "± 172",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1268,
            "range": "± 126",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1094,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1487,
            "range": "± 258",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 602,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 576,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 339,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 441,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1704,
            "range": "± 225",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 504,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 356459,
            "range": "± 43771",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 19939979,
            "range": "± 1230004",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3746,
            "range": "± 903",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13533,
            "range": "± 2147",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5509,
            "range": "± 572",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18230,
            "range": "± 2091",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15378,
            "range": "± 2878",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40003,
            "range": "± 6844",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3013,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 547,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1571350,
            "range": "± 139878",
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
          "id": "dba451045695359a95acc273d001a32707220504",
          "message": "Better function parameter names.",
          "timestamp": "2021-08-13T13:42:39+08:00",
          "tree_id": "acb14e2b964bf64e2c3fbcafc8a83ebe0e9520ed",
          "url": "https://github.com/schungx/rhai/commit/dba451045695359a95acc273d001a32707220504"
        },
        "date": 1628833980417,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 248036,
            "range": "± 37577",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 103,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 104,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 268,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1247,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1385,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5690670,
            "range": "± 1226631",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 498,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 574,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15847,
            "range": "± 2933",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15955,
            "range": "± 3220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 563,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1032,
            "range": "± 183",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 80,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 81,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1707745,
            "range": "± 305252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3617777,
            "range": "± 609006",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3065653,
            "range": "± 734840",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20254,
            "range": "± 2974",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7952,
            "range": "± 772",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2097,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2125,
            "range": "± 337",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 486,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 512,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1393,
            "range": "± 208",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1395,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1155,
            "range": "± 177",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1533,
            "range": "± 272",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 662,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 639,
            "range": "± 113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 358,
            "range": "± 51",
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
            "value": 1797,
            "range": "± 321",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 538,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 365671,
            "range": "± 97442",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20728419,
            "range": "± 2209246",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3861,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13753,
            "range": "± 1863",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5461,
            "range": "± 811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18488,
            "range": "± 3058",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15666,
            "range": "± 2348",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39971,
            "range": "± 6531",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3054,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 518,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1676179,
            "range": "± 261406",
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
          "id": "0f46bc772527c9dcf342aad97bfeebf99043a92b",
          "message": "Fix builds.",
          "timestamp": "2021-08-13T14:04:27+08:00",
          "tree_id": "fe7727b61c6cbee74851e3ebc67c8cc6a758902e",
          "url": "https://github.com/schungx/rhai/commit/0f46bc772527c9dcf342aad97bfeebf99043a92b"
        },
        "date": 1628834915262,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 215542,
            "range": "± 4709",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 85,
            "range": "± 1",
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
            "value": 213,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1044,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1088,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4394774,
            "range": "± 33124",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 397,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 428,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 12842,
            "range": "± 132",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12057,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 447,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 806,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 65,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 66,
            "range": "± 1",
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
            "value": 1421164,
            "range": "± 6233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 2919612,
            "range": "± 7581",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2444475,
            "range": "± 6360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 16745,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6251,
            "range": "± 99",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1731,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1763,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 391,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 459,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1087,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1038,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 866,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1179,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 502,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 492,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 280,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 363,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1448,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 425,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 276386,
            "range": "± 934",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 15790134,
            "range": "± 117159",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3000,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11076,
            "range": "± 128",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4341,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 14896,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 12748,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 32719,
            "range": "± 538",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2425,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 400,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1304045,
            "range": "± 6094",
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
          "id": "8cee0d54b7f96b46c6e985b7ea0c2d9936ad25f2",
          "message": "Change build config to v1.1.",
          "timestamp": "2021-08-13T18:54:11+08:00",
          "tree_id": "77810cb5ac4f311b0194e5aa4e268e8417522a32",
          "url": "https://github.com/schungx/rhai/commit/8cee0d54b7f96b46c6e985b7ea0c2d9936ad25f2"
        },
        "date": 1628852673705,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 259436,
            "range": "± 69301",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 114,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 114,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 286,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1489,
            "range": "± 298",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1581,
            "range": "± 805",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6659341,
            "range": "± 1392712",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 569,
            "range": "± 356",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 639,
            "range": "± 107",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 19003,
            "range": "± 5616",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17882,
            "range": "± 5113",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 638,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1086,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 96,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 94,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 96,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1962026,
            "range": "± 521122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4327525,
            "range": "± 909874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3538316,
            "range": "± 725774",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 24229,
            "range": "± 6483",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9162,
            "range": "± 1579",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2376,
            "range": "± 552",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2365,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 534,
            "range": "± 140",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 571,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1539,
            "range": "± 296",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1485,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1237,
            "range": "± 201",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1702,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 739,
            "range": "± 191",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 694,
            "range": "± 349",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 395,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 483,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1897,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 570,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 380550,
            "range": "± 171484",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 21494168,
            "range": "± 5081996",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4087,
            "range": "± 1204",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 14821,
            "range": "± 3760",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6345,
            "range": "± 1353",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 19730,
            "range": "± 7845",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 18186,
            "range": "± 3536",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46228,
            "range": "± 24757",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3514,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 585,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1815562,
            "range": "± 455699",
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
          "id": "3610b5eb7e996a5d05cec966cd4445cfbe98be0e",
          "message": "Change some inline(always) into inline.",
          "timestamp": "2021-08-14T15:10:37+08:00",
          "tree_id": "fd92bb5283fa7edfc5930b0b035c82cd23d0851a",
          "url": "https://github.com/schungx/rhai/commit/3610b5eb7e996a5d05cec966cd4445cfbe98be0e"
        },
        "date": 1628925511930,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 265621,
            "range": "± 27283",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 115,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 113,
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
            "value": 1351,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1419,
            "range": "± 145",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6241595,
            "range": "± 421596",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 518,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 570,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 17019,
            "range": "± 2833",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15574,
            "range": "± 1682",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 624,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1106,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 95,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 90,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 89,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2001452,
            "range": "± 182980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4120813,
            "range": "± 306214",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3415872,
            "range": "± 293628",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 23267,
            "range": "± 2623",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 9016,
            "range": "± 1213",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2366,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2424,
            "range": "± 427",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 549,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 584,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1529,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1477,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1239,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1651,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 708,
            "range": "± 54",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 721,
            "range": "± 62",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 407,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 506,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1972,
            "range": "± 199",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 578,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 418036,
            "range": "± 18014",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 23538699,
            "range": "± 858800",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4249,
            "range": "± 357",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15463,
            "range": "± 970",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5964,
            "range": "± 499",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20809,
            "range": "± 935",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17930,
            "range": "± 695",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46238,
            "range": "± 7091",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3546,
            "range": "± 226",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 531,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1874914,
            "range": "± 103923",
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
          "id": "187198a2d0f7999dcd419a9ac7051b55f4ae7d54",
          "message": "Add Scope::set_or_push.",
          "timestamp": "2021-08-14T15:22:32+08:00",
          "tree_id": "01caf88ca2806ab4bfe2c6abd02a6eb759a545f5",
          "url": "https://github.com/schungx/rhai/commit/187198a2d0f7999dcd419a9ac7051b55f4ae7d54"
        },
        "date": 1628926034483,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 231517,
            "range": "± 2782",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 99,
            "range": "± 0",
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
            "value": 225,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1174,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1200,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5068211,
            "range": "± 12830",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 442,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 478,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 15247,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14285,
            "range": "± 106",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 517,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 921,
            "range": "± 7",
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
            "value": 74,
            "range": "± 0",
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
            "value": 1635369,
            "range": "± 4818",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3322890,
            "range": "± 11829",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2705702,
            "range": "± 2408",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19266,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7043,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1926,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1991,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 438,
            "range": "± 5",
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
            "value": 1222,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1231,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1001,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1401,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 573,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 567,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 321,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 416,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1643,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 470,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 328489,
            "range": "± 1180",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17909786,
            "range": "± 127836",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3434,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 12732,
            "range": "± 97",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5048,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 16925,
            "range": "± 197",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14835,
            "range": "± 261",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38027,
            "range": "± 424",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2878,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 451,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1475567,
            "range": "± 3305",
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
          "id": "224a2dfb6045031961c922f92e53afb316071cc8",
          "message": "Fix bug in dotting-indexing.",
          "timestamp": "2021-08-17T15:32:48+08:00",
          "tree_id": "7e313951537d0229698db37ab1a376f870aed4b4",
          "url": "https://github.com/schungx/rhai/commit/224a2dfb6045031961c922f92e53afb316071cc8"
        },
        "date": 1629186027444,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 258088,
            "range": "± 21958",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 127,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 112,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 270,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1262,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1336,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5429786,
            "range": "± 471874",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 490,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 528,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16717,
            "range": "± 1125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 14986,
            "range": "± 1235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 559,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 974,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 84,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 83,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1842255,
            "range": "± 143980",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3689481,
            "range": "± 354964",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2996768,
            "range": "± 272557",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19841,
            "range": "± 1452",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7816,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2147,
            "range": "± 168",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2183,
            "range": "± 156",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 495,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 535,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1326,
            "range": "± 105",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1208,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1168,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1667,
            "range": "± 174",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 654,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 659,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 357,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 465,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1739,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 507,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 360198,
            "range": "± 34115",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18715159,
            "range": "± 1433895",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3809,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13611,
            "range": "± 1212",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5575,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18588,
            "range": "± 1615",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15780,
            "range": "± 1249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40756,
            "range": "± 3861",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3095,
            "range": "± 281",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 515,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1684268,
            "range": "± 225352",
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
          "id": "66799571d29924ee84b1e5324ce838fc7086ff95",
          "message": "Add Scope::set_or_push.",
          "timestamp": "2021-08-17T15:34:38+08:00",
          "tree_id": "e16465f4e86a94e297d4be2833728d0c86534377",
          "url": "https://github.com/schungx/rhai/commit/66799571d29924ee84b1e5324ce838fc7086ff95"
        },
        "date": 1629186256239,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 214297,
            "range": "± 18861",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 100,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 94,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 218,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1080,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1160,
            "range": "± 277",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4698406,
            "range": "± 504251",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 440,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 497,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14110,
            "range": "± 2748",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 12855,
            "range": "± 2012",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 484,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 841,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 70,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 66,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 70,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1537633,
            "range": "± 185990",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3050405,
            "range": "± 702014",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2592783,
            "range": "± 363693",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 16849,
            "range": "± 1466",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 6475,
            "range": "± 1533",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 1807,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 1857,
            "range": "± 233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 397,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 436,
            "range": "± 108",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1050,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1046,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 905,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1286,
            "range": "± 196",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 605,
            "range": "± 129",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 591,
            "range": "± 122",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 323,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 489,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1612,
            "range": "± 371",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 527,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 343986,
            "range": "± 36836",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17655246,
            "range": "± 2499341",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3523,
            "range": "± 718",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 11095,
            "range": "± 1601",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 4540,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 15091,
            "range": "± 1285",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 13015,
            "range": "± 2653",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 33927,
            "range": "± 4644",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2537,
            "range": "± 278",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 428,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1402548,
            "range": "± 220399",
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
          "id": "0481073ed97d68fedc2e2e5ebdf8793f7e96ebb8",
          "message": "Bump version.",
          "timestamp": "2021-08-17T15:43:02+08:00",
          "tree_id": "f9302d6845ae4eb49c7e2fd77ccaa915b9564955",
          "url": "https://github.com/schungx/rhai/commit/0481073ed97d68fedc2e2e5ebdf8793f7e96ebb8"
        },
        "date": 1629186520796,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 296401,
            "range": "± 2513",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 134,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 125,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 306,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1432,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1510,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 6226079,
            "range": "± 5811",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 553,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 597,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 18251,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 17176,
            "range": "± 220",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 675,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1173,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 92,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 92,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 92,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 2046867,
            "range": "± 2824",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 4155989,
            "range": "± 23206",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3445048,
            "range": "± 4260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 22687,
            "range": "± 148",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 8993,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2464,
            "range": "± 48",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2512,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 566,
            "range": "± 57",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 661,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1405,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1377,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1340,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1762,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 765,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 730,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 405,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 533,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 2038,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 600,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 405179,
            "range": "± 1209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20457504,
            "range": "± 132231",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 4270,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 15309,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 6090,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 20872,
            "range": "± 421",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 17876,
            "range": "± 235",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 46023,
            "range": "± 705",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3389,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 595,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1856572,
            "range": "± 5037",
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
          "id": "9c6cea3c9f827e1dc32340f1144c24569fa98ffd",
          "message": "Add Scope::set_or_push.",
          "timestamp": "2021-08-17T15:51:14+08:00",
          "tree_id": "7c4057a7aa8811b946b305415c40d35be462ae2f",
          "url": "https://github.com/schungx/rhai/commit/9c6cea3c9f827e1dc32340f1144c24569fa98ffd"
        },
        "date": 1629186998700,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 232237,
            "range": "± 2328",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 126,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 122,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 277,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1168,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1190,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 4957921,
            "range": "± 13069",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 441,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 473,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 14724,
            "range": "± 165",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 13732,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 517,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 908,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 73,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 74,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1628359,
            "range": "± 9151",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3273739,
            "range": "± 7097",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2742333,
            "range": "± 11311",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 19356,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7136,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2027,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2030,
            "range": "± 85",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 462,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 483,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1221,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1241,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 989,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1374,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 572,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 558,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 328,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 427,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1577,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 465,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 323683,
            "range": "± 1975",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 17930028,
            "range": "± 122752",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3594,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13207,
            "range": "± 160",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5277,
            "range": "± 102",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17277,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 14989,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 38897,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2961,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 490,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1481738,
            "range": "± 7643",
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
          "id": "73c0ba4ec5760a3436dd600ab57a67c452a154ba",
          "message": "Add to CHANGELOG.",
          "timestamp": "2021-08-17T15:46:21+08:00",
          "tree_id": "906faeea33fd74e260892e65a3580329d544908e",
          "url": "https://github.com/schungx/rhai/commit/73c0ba4ec5760a3436dd600ab57a67c452a154ba"
        },
        "date": 1629187035914,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 256133,
            "range": "± 35701",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 118,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 109,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 265,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1255,
            "range": "± 339",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1306,
            "range": "± 252",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5386477,
            "range": "± 707233",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 479,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 530,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16247,
            "range": "± 2894",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15383,
            "range": "± 2883",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 587,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1069,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 83,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 81,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1787733,
            "range": "± 197639",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3590887,
            "range": "± 681939",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 2995258,
            "range": "± 349403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20469,
            "range": "± 3089",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7794,
            "range": "± 1149",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2139,
            "range": "± 372",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2159,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 490,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 531,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1218,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1166,
            "range": "± 209",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1113,
            "range": "± 215",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1551,
            "range": "± 249",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 628,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 625,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 346,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 479,
            "range": "± 96",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1755,
            "range": "± 294",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 511,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 367292,
            "range": "± 54808",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 18417905,
            "range": "± 3712374",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3685,
            "range": "± 509",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13215,
            "range": "± 1669",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5277,
            "range": "± 1076",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 18087,
            "range": "± 2573",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15428,
            "range": "± 2403",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 40440,
            "range": "± 6136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 2940,
            "range": "± 461",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 532,
            "range": "± 52",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1618528,
            "range": "± 242064",
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
          "id": "58352e00bd7289846bfd19edcb296fad79ca1d0f",
          "message": "Prevent spill-over of new variables in Engine::call_fn.",
          "timestamp": "2021-08-17T23:24:41+08:00",
          "tree_id": "f0009ad3fe840558bbfa767debb9e9fd6b7403d7",
          "url": "https://github.com/schungx/rhai/commit/58352e00bd7289846bfd19edcb296fad79ca1d0f"
        },
        "date": 1629214276435,
        "tool": "cargo",
        "benches": [
          {
            "name": "bench_engine_new",
            "value": 237318,
            "range": "± 21049",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw",
            "value": 110,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_new_raw_core",
            "value": 111,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "bench_engine_register_fn",
            "value": 264,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_get",
            "value": 1189,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_large_set",
            "value": 1228,
            "range": "± 300",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_loop",
            "value": 5729503,
            "range": "± 548936",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_get",
            "value": 469,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_array_small_set",
            "value": 502,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call",
            "value": 16886,
            "range": "± 1350",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_call_expression",
            "value": 15044,
            "range": "± 938",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_literal",
            "value": 549,
            "range": "± 187",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_number_operators",
            "value": 1013,
            "range": "± 158",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_full",
            "value": 81,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_optimized_simple",
            "value": 82,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_expression_single",
            "value": 82,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_number",
            "value": 1812508,
            "range": "± 315910",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_build",
            "value": 3751136,
            "range": "± 205692",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_loop_strings_no_build",
            "value": 3116805,
            "range": "± 208125",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_nested_if",
            "value": 20774,
            "range": "± 5134",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_switch",
            "value": 7889,
            "range": "± 1034",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_get",
            "value": 2038,
            "range": "± 381",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_large_set",
            "value": 2126,
            "range": "± 216",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_get",
            "value": 476,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_map_small_set",
            "value": 489,
            "range": "± 137",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_function_call",
            "value": 1291,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_module",
            "value": 1293,
            "range": "± 141",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_complex",
            "value": 1120,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_longer",
            "value": 1555,
            "range": "± 120",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_multiple",
            "value": 605,
            "range": "± 136",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_scope_single",
            "value": 634,
            "range": "± 138",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_field",
            "value": 352,
            "range": "± 98",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method",
            "value": 439,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_nested",
            "value": 1722,
            "range": "± 139",
            "unit": "ns/iter"
          },
          {
            "name": "bench_type_method_with_params",
            "value": 475,
            "range": "± 114",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_1000",
            "value": 367768,
            "range": "± 33746",
            "unit": "ns/iter"
          },
          {
            "name": "bench_iterations_fibonacci",
            "value": 20916761,
            "range": "± 1640672",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_array",
            "value": 3892,
            "range": "± 511",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_full",
            "value": 13303,
            "range": "± 4265",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_map",
            "value": 5427,
            "range": "± 729",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_full",
            "value": 17727,
            "range": "± 3943",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_optimize_simple",
            "value": 15791,
            "range": "± 1797",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_primes",
            "value": 39128,
            "range": "± 7029",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_simple",
            "value": 3088,
            "range": "± 260",
            "unit": "ns/iter"
          },
          {
            "name": "bench_parse_single",
            "value": 515,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "bench_eval_primes",
            "value": 1647947,
            "range": "± 198088",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}
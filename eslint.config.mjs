import nx from "@nx/eslint-plugin";
import pluginQuery from "@tanstack/eslint-plugin-query";
import perfectionist from "eslint-plugin-perfectionist";

export default [
  ...nx.configs["flat/base"],
  ...nx.configs["flat/typescript"],
  ...nx.configs["flat/javascript"],
  ...pluginQuery.configs["flat/recommended"],
  perfectionist.configs["recommended-natural"],
  {
    ignores: [
      "**/dist",
      "**/vite.config.*.timestamp*",
      "**/vitest.config.*.timestamp*",
      "**/.nx",
      "**/.next",
      "**/.tanstack",
      "**/.nitro",
      "**/.vercel",
      "**/.wrangler",
      "**/.output",
      "**/node_modules",
      "**/test-output"
    ]
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "@nx/enforce-module-boundaries": [
        "error",
        {
          allow: ["^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$"],
          depConstraints: [
            {
              onlyDependOnLibsWithTags: [
                "type:feature",
                "type:ui",
                "type:util",
                "type:data-access"
              ],
              sourceTag: "type:app"
            },
            {
              onlyDependOnLibsWithTags: [],
              sourceTag: "type:e2e"
            },
            {
              onlyDependOnLibsWithTags: [
                "type:feature",
                "type:ui",
                "type:util",
                "type:data-access"
              ],
              sourceTag: "type:feature"
            },
            {
              onlyDependOnLibsWithTags: ["type:data-access", "type:util"],
              sourceTag: "type:data-access"
            },
            {
              onlyDependOnLibsWithTags: ["type:ui", "type:util"],
              sourceTag: "type:ui"
            },
            {
              onlyDependOnLibsWithTags: ["type:util"],
              sourceTag: "type:util"
            }
          ],
          enforceBuildableLibDependency: false
        }
      ]
    }
  },
  {
    files: [
      "**/*.ts",
      "**/*.tsx",
      "**/*.cts",
      "**/*.mts",
      "**/*.js",
      "**/*.jsx",
      "**/*.cjs",
      "**/*.mjs"
    ],
    // Override or add rules here
    rules: {}
  }
];

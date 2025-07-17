import nx from '@nx/eslint-plugin';
import perfectionist from 'eslint-plugin-perfectionist';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  perfectionist.configs['recommended-natural'],
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:ui',
                'type:util',
              ],
              sourceTag: 'type:app',
            },
            {
              onlyDependOnLibsWithTags: [],
              sourceTag: 'type:e2e',
            },
            {
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:ui',
                'type:util',
              ],
              sourceTag: 'type:feature',
            },
            {
              onlyDependOnLibsWithTags: ['type:data-access', 'type:util'],
              sourceTag: 'type:data-access',
            },
            {
              onlyDependOnLibsWithTags: ['type:ui', 'type:util'],
              sourceTag: 'type:ui',
            },
            {
              onlyDependOnLibsWithTags: ['type:util'],
              sourceTag: 'type:util',
            },
            {
              onlyDependOnLibsWithTags: ['scope:shared'],
              sourceTag: 'scope:shared',
            },
          ],
          enforceBuildableLibDependency: true,
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];

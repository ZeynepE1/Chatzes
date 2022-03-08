module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'simple-import-sort'],
  rules: {
    'no-debugger': 'error',
    'no-undef': 'warn',
    'no-console': 'warn',
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used' }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/prop-types': 'off',
    'prettier/prettier': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^react', '^@?\\w'],
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          ['^(@/assets)(/.*|$)'],
          ['^(@/pages)(/.*|$)'],
          ['^(@/components)(/.*|$)'],
          ['^(@/reducers)(/.*|$)'],
          ['^(@/slices)(/.*|$)'],
          ['^(@/middlewares)(/.*|$)'],
          ['^(@/lib)(/.*|$)'],
          ['^(@/utils)(/.*|$)'],
          ['^(@/hooks)(/.*|$)'],
          ['^(@/db)(/.*|$)'],
          ['^(@/models)(/.*|$)'],
          ['^(@/logger)(/.*|$)'],
          ['^(@)(/.*|$)'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
}

}

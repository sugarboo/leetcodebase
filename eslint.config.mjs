import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    semi: false,
    quotes: 'single',
  },
  rules: {
    'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
  },
})

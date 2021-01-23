module.exports = {
  extends: ['@ofadiman/eslint-config-react'],
  overrides: [
    {
      files: ['pages/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        'import/no-default-export': 'off'
      }
    },
    {
      files: ['components/**/*.stories.tsx'],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ]
}

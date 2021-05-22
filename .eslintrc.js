module.exports = {
  ignorePatterns: ['next-dist', 'node_modules', '.idea', '.github', '.storybook', '_templates'],
  extends: ['@ofadiman/eslint-config-react'],
  overrides: [
    {
      files: ['type-definitions/**/*.d.ts'],
      rules: {
        'import/no-default-export': 'off'
      }
    },
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

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
    },
    {
      files: ['*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          { selector: 'typeLike', format: ['PascalCase'] },
          { selector: 'class', format: ['PascalCase'], leadingUnderscore: 'allow' },
          { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'], leadingUnderscore: 'allow' },
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
            leadingUnderscore: 'allow'
          },
          { selector: 'function', format: ['PascalCase', 'camelCase'], leadingUnderscore: 'allow' },
          { selector: 'method', format: ['camelCase'], leadingUnderscore: 'allow' },
          { selector: 'enumMember', format: ['PascalCase'], leadingUnderscore: 'allow' },
          { selector: 'typeParameter', format: ['PascalCase'], leadingUnderscore: 'allow' }
        ]
      }
    }
  ]
}

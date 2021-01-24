module.exports = {
  extends: ['@ofadiman/eslint-config-react'],
  plugins: ['better-styled-components'],
  rules: {
    'better-styled-components/sort-declarations-alphabetically': 'error'
  },
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

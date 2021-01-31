import { css, DefaultTheme, ThemeProps } from 'styled-components'

export const typography: DefaultTheme['typography'] = {
  body: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 1.6rem;
  `,
  h1: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 1.6rem;
  `,
  h2: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 1.6rem;
  `,
  h3: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 1.6rem;
  `,
  h4: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 1.6rem;
  `,
  h5: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 1.6rem;
  `,
  h6: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 1.6rem;
  `
}

import { css, DefaultTheme, ThemeProps } from 'styled-components'

export const typography: DefaultTheme['typography'] = {
  body: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 1.6rem;
  `,
  button: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 1.8rem;
  `,
  caption: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 1.4rem;
  `,
  h1: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 3.3rem;
  `,
  h2: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 3rem;
  `,
  h3: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 2.7rem;
  `,
  h4: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 2.4rem;
  `,
  h5: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 2.1rem;
  `,
  h6: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 1.8rem;
  `,
  paragraph: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 1.6rem;
  `,
  subtitle: ({ theme }: ThemeProps<DefaultTheme>) => css`
    color: ${theme.palette.typography.main};
    font-size: 1.4rem;
  `
}

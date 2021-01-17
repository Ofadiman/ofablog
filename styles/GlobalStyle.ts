import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${() => css`
    #__next {
      height: 100%;
    }

    *,
    *::before,
    *::after {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      text-align: justify;
    }

    html {
      font-size: 62.5%;
      font-family: Roboto, sans-serif;
      line-height: 1.4;
    }

    body {
      font-size: 1.6rem;
    }
  `}
`

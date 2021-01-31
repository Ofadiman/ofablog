/* eslint-disable @typescript-eslint/consistent-type-definitions */
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    mediaQueries: {
      down: {
        desktop: string
        tablet: string
      }
      up: {
        desktop: string
        tablet: string
      }
    }
    palette: {
      background: string
      error: {
        dark: string
        light: string
        main: string
      }
      info: {
        dark: string
        light: string
        main: string
      }
      primary: {
        dark: string
        light: string
        main: string
      }
      secondary: {
        dark: string
        light: string
        main: string
      }
      success: {
        dark: string
        light: string
        main: string
      }
      typography: {
        dark: string
        disabled: string
        light: string
        main: string
      }
      warning: {
        dark: string
        light: string
        main: string
      }
    }
    typography: {
      body: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      h1: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      h2: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      h3: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      h4: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      h5: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      h6: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
    }
    zIndex: {
      drawer: number
      modal: number
      snackbar: number
      tooltip: number
    }
  }
}

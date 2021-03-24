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
    name: string
    palette: {
      backdrop: string
      background: string
      error: {
        contrastText: string
        dark: string
        light: string
        main: string
      }
      info: {
        contrastText: string
        dark: string
        light: string
        main: string
      }
      primary: {
        contrastText: string
        dark: string
        hover: string
        light: string
        main: string
        outline: string
      }
      secondary: {
        contrastText: string
        dark: string
        light: string
        main: string
      }
      success: {
        contrastText: string
        dark: string
        light: string
        main: string
      }
      typography: {
        dark: string
        light: string
        main: string
      }
      warning: {
        contrastText: string
        dark: string
        light: string
        main: string
      }
    }
    typography: {
      body: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      button: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      caption: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      h1: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      h2: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      h3: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      h4: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      h5: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      h6: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      paragraph: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
      subtitle: (options: ThemeProps<DefaultTheme>) => FlattenInterpolation<ThemeProps<DefaultTheme>>
    }
    zIndex: {
      drawer: number
      modal: number
      snackbar: number
      tooltip: number
    }
  }
}

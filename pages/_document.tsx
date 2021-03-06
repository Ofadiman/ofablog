/* eslint-disable react/display-name */
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import createEmotionServer from '@emotion/server/create-instance'
import { ServerStyleSheets } from '@material-ui/styles'
import { DocumentContext, DocumentInitialProps } from 'next/dist/next-server/lib/utils'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'

const getCache = (): ReturnType<typeof createCache> => {
  const cache = createCache({ key: 'css', prepend: true })
  cache.compat = true

  return cache
}

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    const cache = getCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        enhanceComponent: (Component) => (props) =>
          (
            <CacheProvider value={cache}>
              <Component {...props} />
            </CacheProvider>
          )
      })

    const initialProps = await Document.getInitialProps(ctx)
    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        dangerouslySetInnerHTML={{ __html: style.css }}
        data-emotion={`${style.key} ${style.ids.join(' ')}`}
        key={style.key}
      />
    ))

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement(), ...emotionStyleTags]
    }
  }

  public render(): JSX.Element {
    return (
      <Html lang={'en'}>
        <Head>
          <link
            href={'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'}
            rel={'stylesheet'}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

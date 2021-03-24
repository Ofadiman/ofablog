module.exports = {
  stories: ['../**/*.stories.@(tsx)'],
  addons: [
    'storybook-addon-styled-component-theme/dist/preset',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false
      }
    }
  ],
  webpackFinal: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack')
    })

    return config
  }
}

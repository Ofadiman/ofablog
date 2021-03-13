module.exports = {
  webpack(config) {
    config.module.rules.push({
      issuer: {
        test: /\.(js|ts)x?$/u
      },
      test: /\.svg$/u,
      use: ['@svgr/webpack']
    })

    return config
  }
}

const withTM = require('next-transpile-modules')(['react-syntax-highlighter'])

const nextConfig = {
  distDir: 'next-dist',
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

module.exports = withTM(nextConfig)

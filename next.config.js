module.exports = {
  images: {
    domains: ['images.ctfassets.net']
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      loader: '@svgr/webpack',
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
        titleProp: true,
      },
    })
    return config
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}
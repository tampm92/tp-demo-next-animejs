const withSass = require('@zeit/next-sass');
const tailwindCss = require('tailwindcss');

module.exports = withSass({
  env: {
    npm_package_description: process.env.npm_package_description
  },
  webpack: (config) => {
    const rules = [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [tailwindCss('./tailwind.config.js')]
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ];
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@'] = __dirname;
    config.module.rules.push(...rules);
    return config;
  }
});

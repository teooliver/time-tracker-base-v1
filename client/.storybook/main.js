const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         {
  //           loader: 'style-loader',
  //         },
  //         {
  //           loader: 'css-loader',
  //         },
  //         {
  //           loader: 'sass-loader',
  //           options: {
  //             javascriptEnabled: true,
  //           },
  //         },
  //       ],
  //       include: path.resolve(__dirname, '../'),
  //     },
  //   ],
  // },
};
import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
      test: /\.css$/,
      sideEffects: true,
      use: [
          require.resolve("style-loader"),
          {
              loader: require.resolve("css-loader"),
              options: {
                  importLoaders: 1,
              },
          },{
    loader: require.resolve("postcss-loader"),
    options: {
    implementation: require.resolve("postcss"),
    },
    },
      ],
    },],
      }
    })
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.js')
    },
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: (config, options) => {

    if(config.resolve){
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

      return config;
  },
};
export default config;

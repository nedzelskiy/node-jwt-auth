import minimist from 'minimist';
import { normalize } from 'path';
import { Mode } from './interfaces';
import { Configuration as WebpackConfiguration } from 'webpack';
import nodeExternals from 'webpack-node-externals';

const args = minimist(process.argv.slice(2));
const MODE = args.mode === Mode.PRODUCTION ? Mode.PRODUCTION : Mode.DEVELOPMENT;

const webpackConfig: WebpackConfiguration = {
  target: 'node',
  entry: {
    index: './index.ts',
  },
  output: {
    path: normalize(`${process.env.PWD}/builds/${MODE}/`),
  },
  watchOptions: {
    aggregateTimeout: 100,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: normalize('./tsconfig.json'),
            },
          },
        ],
      },
    ],
  },
  externals: [
    nodeExternals(),
  ],
};

module.exports = webpackConfig;

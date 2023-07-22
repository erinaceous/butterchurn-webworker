const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const env = require('yargs').argv.env;

const srcRoot = path.join(__dirname, '..', 'src');
const nodeRoot = path.join(__dirname, '..', 'node_modules');
const outputPath = path.join(__dirname, '..', 'dist');

let outputFile = '[name]';

if (env === 'prod') {
  outputFile += '.min';
}

const config = {
  entry: {
    butterchurn: path.join(srcRoot, 'index.js'),
    isSupported: path.join(srcRoot, 'isSupported.js'),
  },
  mode: env === 'prod' ? 'production' : 'development',
  devtool: 'source-map',
  output: {
    path: outputPath,
    filename: outputFile + '.js',
    hashFunction: 'xxhash64',
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
            sourceType: 'unambiguous',
          },
        },
      },
      {
        test: /\.ts?$/,
        use: {
          loader: path.resolve('loaders/assemblyscript.js'),
        },
      },
    ],
  },
  resolve: {
    modules: [srcRoot, nodeRoot],
    extensions: ['.js'],
  },
  plugins: [
    new ESLintPlugin({
      // files: ['src/**/*.js'],
      // fix: true,
    }),
  ],
};

module.exports = config;

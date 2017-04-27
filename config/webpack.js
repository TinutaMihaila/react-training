const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getConfig(url, dirname) {
  return {
    devtool: 'cheap-module-source-map',
    entry: [
      'babel-polyfill',
      `webpack-dev-server/client?${url}`,
      'webpack/hot/only-dev-server',
      './src/index.jsx',
    ],
    output: {
      path: path.join(__dirname, 'public'),
      publicPath: '/',
      filename: 'app.bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot-loader', 'babel-loader'],
        }
      ],
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        debug: true,
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html',
        inject: 'body',
      }),
    ],
  };
}

module.exports = getConfig;

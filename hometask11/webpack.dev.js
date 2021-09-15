const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, './build')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './public')
    },
    liveReload: true,
    port: 9000,
    open: true,
    hot: false,
  },
  module: {
    rules: [
      // styles
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  }
});
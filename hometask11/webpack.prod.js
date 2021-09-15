const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name]',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/style.css',
    }),
    
  ],
  module: {
    rules: [
      // styles
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ], 
      }
    ]
  }
});
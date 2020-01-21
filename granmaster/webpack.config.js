const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin= require('copy-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/index.js', './src/scss/main.scss'],
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    port: 9000
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery'
    }),
    new CopyWebpackPlugin([
      {
        from: './src/images',
        to: './images'
      },
      {
        from: './src/fonts',
        to: './fonts'
      },
    ]),
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index']
    }),
    new HTMLPlugin({
      filename: 'catalog.html',
      template: './src/catalog.html',
      chunks: ['catalog']
    }),
    new HTMLPlugin({
      filename: 'projects.html',
      template: './src/projects.html',
      chunks: ['projects']
    }),
    new HTMLPlugin({
      filename: 'recommendations.html',
      template: './src/recommendations.html',
      chunks: ['recommendations']
    }),
    new HTMLPlugin({
      filename: 'search.html',
      template: './src/search.html',
      chunks: ['search']
    })
  ]
};

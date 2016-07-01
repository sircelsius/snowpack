var path = require('path');
var webpack = require('webpack');
var JsDocPlugin = require('jsdoc-webpack-plugin');

var jsEntryPath = path.resolve(__dirname, 'src', 'lib', 'index.js');
var outputPath = path.resolve(__dirname, 'build');

module.exports = {
  entry: [
    jsEntryPath
  ],
  output: {
    path: outputPath,
    filename: 'snowpack.[hash].js'
  },
  module: {
    preLoaders: [
      {
        test: /src\/.*\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'
      }
    ],
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
    },
    {
      test: /\.less$/,
      loader: 'style!css!less'
    }]
  },
  plugins: [
    new JsDocPlugin({
      conf: './jsdoc.conf.json'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
};

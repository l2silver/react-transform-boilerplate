var path = require('path');
var webpack = require('webpack');
require('es6-promise');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
      loader: 'url?limit=10000&mimetype=application/font-woff'
    },{
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    },{
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
      loader: 'file'
    },{
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
      loader: 'file',
    },{
      test: /\.less/,
      loaders: ['style', 'css', 'less']
    },{
      test: /\.js?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};

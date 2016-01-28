var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
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
    },{
      test: /\.scss/,
      loaders: ['style', 'css', 'sass']
    }]
  }
};

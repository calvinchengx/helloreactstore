'use strict';

var nfs = require('node-fs');
var underscore = require('underscore');
var projDirs = ['src/sass', 'src/css', 'src/js', 'src/img', 'dist'];
underscore.each(projDirs, function(dir) {
  nfs.mkdirSync(dir, '0755', true);
});

var webpack = require('webpack');
var bowerDir = __dirname + '/bower_components';
var BowerWebPackPlugin = require('bower-webpack-plugin'); // automatically graps packages in bower_components, e.g. react-router

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp(path));
  },
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/dev-server',
      './src/js/index.jsx'
    ],
    vendors: ['react']
  },
  resolve: {
    alias: {},
    extensions: ['', '.jsx', '.js', 'min.js']
  },
  output: {
    path: __dirname + '/dist/js',
    filename: 'bundle.js', 
    publicPath: '/js/'
  },
  module: {
    noParse: [ ], // Ask wepack not to parse pre-built files
    loaders: [
      { test: /\.jsx$/, loader:  'jsx-loader?insertPragma=React.DOM&harmony' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.jpeg$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: 'file' },
      { test: /\.html$/, loader: 'file'}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new BowerWebPackPlugin()
  ],
  externals: {
  }
};

config.addVendor('react', bowerDir + '/react/react.js');
config.addVendor('react', bowerDir + '/react/react.min.js');

module.exports = config;

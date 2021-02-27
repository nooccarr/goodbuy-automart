const webpack = require('webpack');
const path = require('path');

const config = {
  // mode: 'production',
  entry: './client/src/index.jsx',
  output: {
    path: path.resolve('./client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
}

module.exports = config;
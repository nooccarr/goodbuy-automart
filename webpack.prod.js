const webpack = require('webpack');
const path = require('path'); // to get the current path

const config = {
  mode: 'production',
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
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    // // do "npm install process" before running the build
    // new webpack.ProvidePlugin({
    //   process: 'process/browser',
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        'HOST': JSON.stringify(process.env.HOST)
      },
    }),
  ],
}

module.exports = config;
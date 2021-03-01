const webpack = require('webpack');
const path = require('path'); // to get the current path
// const dotenv = require('dotenv');

// // call dotenv and it will return an Object with a parsed key
// const env = dotenv.config().parsed || {};

// // reduce it to a nice object, the same as before
// const envKeys = Object.keys(env).reduce((prev, next) => {
//   prev[`process.env.${next}`] = JSON.stringify(env[next]);
//   return prev;
// }, {});

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
  plugins: [
    // do "npm install process" before running the build
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    // new webpack.DefinePlugin(envKeys)

    // new webpack.DefinePlugin({
    //   'process.env.TEST': JSON.stringify('TESTESTESTST')
    // })
  ],
}

module.exports = config;
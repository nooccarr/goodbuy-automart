const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path'); // to get the current path
const fs = require('fs'); // to check if the file exists


// // call dotenv and it will return an Object with a parsed key
// const env = dotenv.config().parsed;

// // reduce it to a nice object, the same as before
// const envKeys = Object.keys(env).reduce((prev, next) => {
//   prev[`process.env.${next}`] = JSON.stringify(env[next]);
//   return prev;
// }, {});


// Get the root path (assuming your webpack config is in the root of your project!)
const currentPath = path.join(__dirname);

// Create the fallback path (the production .env)
const basePath = currentPath + '/.env';

// Check if the file exists, otherwise fall back to the production .env
const finalPath = fs.existsSync(basePath);

// Set the path parameter in the dotenv config
const fileEnv = dotenv.config({ path: finalPath }).parsed;

// reduce it to a nice object, the same as before (but with the variables from the file)
const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
  return prev;
}, {});

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
    new webpack.DefinePlugin(envKeys)
  ],
}

module.exports = config;
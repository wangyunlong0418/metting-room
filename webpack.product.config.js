const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    vendor: ['react', 'react-router', 'react-dom', 'react-router-dom', 'react-redux', 'redux-thunk'],
    entry: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        },
      }
    ]
  },
  // resolve: {
  //   extensions: ['.js'],
  //   modules: [
  //     path.resolve(__dirname, 'src'),
  //     path.resolve(__dirname, 'node_modules'),
  //   ]
  // },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/index.html',
        to: 'index.html'
      },
    ]),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        priority: '0',
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    }
  }
};

module.exports = config;

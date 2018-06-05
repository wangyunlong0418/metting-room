const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    vendor: ['react', 'react-router', 'react-dom', 'react-router-dom', 'react-redux', 'redux-thunk'],
    entry: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'buildTest'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react'],
      },
    }]
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ]
  },
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
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/index.html',
        to: 'index.html'
      },
      {
        from: 'src/lib',
        to: 'js/libs'
      },
    ]),
    new HtmlWebpackPlugin({
      template: 'src/index.html.tpl',
      buildTime: new Date().getTime()
    }),
    function () {
      console.log('fe build success');
    }
  ],
};

module.exports = config;


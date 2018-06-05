const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const devUrl = 'http://localhost:9000';
const proxyUrl = 'https://www.okb.com';

const config = {
  mode: 'development',
  entry: {
    vendor: ['react', 'react-router', 'react-dom', 'react-router-dom', 'react-redux', 'redux-thunk', 'lodash'],
    entry: path.join(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
    port: 9000,
    proxy: {
      '/v2/*': {
        target: proxyUrl,
        changeOrigin: true,
        secure: true
      }
    },
    historyApiFallback: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'less-loader'
          }]
        })
      }, {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({
      url: devUrl
    }),
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


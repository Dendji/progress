const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const extractSass = new ExtractTextPlugin({
  filename: '[name].bundle.css',
  disable: process.env.NODE_ENV === 'development'
});
const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist/')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: ['ie >= 8', 'last 4 version']
                  })
                ],
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      { test: /\.html$/, use: ['html-loader'] }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    extractSass
  ]
};

module.exports = config;

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJsPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'SpaceCadet',
      template: './src/index.html',
      inject: 'body'
    })
  ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: [
            /node_modules/,
            /spec/
        ],
          loader: "eslint-loader"
        }
      ]
    }
  };

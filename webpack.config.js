const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js'
  },
  devServer: {
    allowedHosts: [
      'all'
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/main.wasm', to: './' }, // output path is 'public' folder, already defined.
        { from: './src/styles.css', to: './' }
      ]
    })
  ]
}
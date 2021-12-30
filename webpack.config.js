const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

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
  ]
}
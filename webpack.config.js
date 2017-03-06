var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //context: __dirname + "/app",
  entry: {
        javascript: "./app/js/app.js"
  },
  output: {
    filename: "dist/bundle.js",
    //path: __dirname + "/dist",
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: './dist/index.html',
      template: 'app/index.html'
    })
  ]
};

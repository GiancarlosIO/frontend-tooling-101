/* eslint-disable */

var path = require("path");
var webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: [
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new UglifyJsPlugin(),
  ],
  module: {
    rules: [{
      test: /\.md$/,
      use: "html-loader!markdown-loader?gfm=false"
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ["babel-loader"]
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: ["url-loader?limit=8192"]
    }, {
      test: /\.svg$/,
      use: ["url-loader?limit=10000&mimetype=image/svg+xml"]
    }]
  }
};

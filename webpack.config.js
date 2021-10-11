"use strict";

var path = require("path");
var webpack = require("webpack");

module.exports = {
  devtool: "eval",

  entry: {
    demo: ["webpack/hot/dev-server", "./demo/index.js"],
  },

  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },

  output: {
    filename: "demo/bundle.js",
  },

  resolve: {
    extensions: ["", ".js"],
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  devServer: {
    static: path.join(__dirname, "/demo"),
  },
};

var webpack = require("webpack");

module.exports = {
  entry: {
    "with-button": ["./src/facebook-with-button.js"],
    "render-props": ["./src/facebook.js"],
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

  externals: {
    react: "react",
    "react-dom": "ReactDOM",
  },

  output: {
    filename: "facebook-login-[name].js",
    libraryTarget: "umd",
    library: "FacebookLogin",
  },

  resolve: {
    extensions: ["", ".js"],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};

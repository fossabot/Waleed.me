const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Stylish = require("webpack-stylish");

const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    app: ["./src/scripts/app.js"]
  },
  output: {
    filename: "app.js",
    path: path.resolve("app")
  },
  mode: "production",
  devServer: {
    contentBase: path.join("app"),
    compress: true,
    port: 2222,
    hot: true,
    stats: "errors-only"
  },
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve("./src/scripts/"),
        loader: "babel-loader?cacheDirectory=true",
        options: {
          presets: ["es2015"],
          compact: true
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve("./src/scss/"),
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.html$/,
        loader: "ng-cache-loader?prefix=../templates/**"
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/styles.css"
    }),
    new CopyWebpackPlugin([{ from: "index.html", to: "index.html" }]),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(["app"]),
    new Stylish()
  ]
};

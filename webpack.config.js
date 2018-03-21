
const  ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");


const webpack = require("webpack");
const path = require("path");



module.exports = {
    entry: {

        app: [
            "./src/scripts/app.js"

            ],


    },
    output: {
        filename: "app.js",
        path: path.resolve("app")
    },
    devServer: {
        contentBase: path.join("app"),
        compress: true,
        port: 2222,
        hot: true
    },
    module: {
        rules: [
            {
              test: /\.js$/,
                include: path.resolve("./src/scripts/"),
                loader: "babel-loader?cacheDirectory=true",
                options: {
                    presets: ['es2015'],
                    compact: true
                }
            },
            {
                test: /\.scss$/,
                include: path.resolve("./src/scss/"),
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[{

                        loader: "css-loader", options: {minimize : true}
                    }]
                })
            },
            {
                test: /\.html$/,
                loader: "ng-cache-loader?prefix=../templates/**"
            }
        ]
    },
    node: {
        console: false,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },

    plugins: [
        new webpack.DefinePlugin({"process.env.NODE_ENV": JSON.stringify("production")}),
        new ExtractTextPlugin("css/styles.css"),
        new CopyWebpackPlugin([{from:"index.html", to:"index.html"} ]),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(["app"])

    ]
};
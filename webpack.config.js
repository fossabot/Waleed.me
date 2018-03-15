
const  ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path');

module.exports = {
    entry: './src/scripts/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'app')
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
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

    plugins: [
        new ExtractTextPlugin("css/styles.css"),
        new CopyWebpackPlugin([{from:"index.html", to:"index.html"} ])
    ]
};
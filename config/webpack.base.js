
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, '../src/assets/scripts/index.js'),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader', //3. Injects styles into DOM
                    'css-loader', //2. Turns css into CommonJS
                    "sass-loader" //1. Turns sass into css
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home page',
            template: path.resolve(__dirname, '../src/assets/portfolio/index.html'),
            filename: '../dist/index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Blog page',
            template: path.resolve(__dirname, '../src/assets/portfolio/blog.html'),
            filename: '../dist/blog.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
};
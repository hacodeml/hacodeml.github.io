const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge(base, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true
    },
});


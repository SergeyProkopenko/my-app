const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    target: 'web',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './build'),
        open: true,
        compress: true,
        hot: true,
        port: 3000,
        watchContentBase: true
    },
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
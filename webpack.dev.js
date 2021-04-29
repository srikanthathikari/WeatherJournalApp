const path = require("path")
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
    mode: 'development',
    entry: './src/index.js',

    module : {
        new CleanWebpackPlugin(),
        rules :[
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
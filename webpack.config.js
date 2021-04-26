const path = require("path")
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',

    module : {
        rules :[
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}
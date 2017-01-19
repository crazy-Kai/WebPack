/*
   webpack 配置文件
 */
var webpack = require("webpack"),
    path = require("path"),
    node_modules = path.resolve("./node_modules");
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//css 单独打包


module.exports = {
    devtool: 'eval-source-map',
    cache: true,
    // entry:"./app.js",
    entry: {
        app: './app.js',//测试入口文件
        common:['react','react-dom','jquery']//公用组件
    },
    output: {
        path: path.resolve("./build"),
        filename: "[name].bundle.js",
        publicPath: "/build"
    },
    module: {
        loaders: [{
            // babel解析react
            test: /\.js$/,
            exclude: [node_modules],
            loader: "babel-loader",
            query:{presets:['es2015','react']}
        }, {
            //css
            test: /\.css$/,
            exclude: [node_modules],
            loader: ExtractTextPlugin.extract("style-loader","css-loader")
        }, {
            //less
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            //sass
            test: /\.sass$/,
            loader: "style!css!sass"
        }]
    },
    resolve: {
        alias: {},
        extensions: ['', '.js','.json','.jsonp'],
        root: node_modules
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
       
    ]

}

/*
   webpack 配置文件
 */
var webpack = require("webpack"),
    path = require("path"),
    node_modules = path.resolve("./node_modules");


module.exports = {
    cache: true,
    entry: ["./app.js"],
    output: {
        path: path.resolve("./build"),
        filename: "bundle.js",
        publicPath: "/build"
    },
    module: {
        loaders: [{
            // babel解析react
            test: /(\.jsx)|(\.es6)$/,
            exclude: [node_modules],
            loader: "babel"
        }, {
            //css
            test: /\.css$/,
            exclude: [node_modules],
            loader: "style!css"
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
        root: node_modules
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]

}

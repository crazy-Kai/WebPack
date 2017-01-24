/*
   webpack 配置文件
 */
var webpack = require("webpack"),
    path = require("path"),
    node_modules = path.resolve("./node_modules");
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //动态生成html并压缩
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //css 单独打包
var TransferWebpackPlugin = require("transfer-webpack-plugin"); //复制src到dist
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    context: path.join(__dirname, "/"),
    devServer: { outputPath: path.join(__dirname, "/") },
    cache: true,
    entry: {
        app: './src/pages/reactExercise/app.js', //测试入口文件
        iframRouterApp: './src/pages/iframe/iframRouterApp.js', //单页面多视图多入口文件
        reactRouterApp:"./src/pages/reactRouter/reactRouterApp.js",
        common: ['react', 'react-dom', 'jquery', 'reflux'] //公用组件
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "build/[name].bundle.js",
        chunkFilename: '[name].[chunkhash:5].min.js', //按需加载的子文件名
        publicPath: "/dist"
    },
    module: {
        loaders: [{
            // babel解析react
            test: /\.js$/,
            exclude: [node_modules],
            loader: "babel-loader",
            query: { presets: ['es2015', 'react'] }
        }, {
            //css
            test: /\.css$/,
            exclude: [node_modules],
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
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
        extensions: ['', '.js', '.json', '.jsonp'],
        root: node_modules
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("css/styles.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: true, // remove all comments
            },
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']
        }),
        //new CopyWebpackPlugin([{from:path.join(__dirname,"src/"),to:path.join(__dirname,"dist/")}])
    ]

}

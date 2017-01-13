/*
   webpack 配置文件
 */
var webpack = require("webpack"),
    path = require("path"),
    node_modules = path.resolve("./node_modules");
console.log(webpack);

module.exports = {
    entry: "./app.js",
    output: {
        path: "./build",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
        	// babel解析react
            test: /(\.jsx)|(\.es6)$/,
            exclude:[node_modules],
            loader: "babel"
        }, {
        	//css
        	test:/\.css$/,
        	loader:"style!css"
        },{
        	//less
        	test:/\.less$/,
        	loader:"style!css!less"
        },{
        	//sass
        	test:/\.sass$/,
        	loader:"style!css!sass"
        }]
    },
    resolve:{
    	alias:{},
    	root:node_modules 
    }

}

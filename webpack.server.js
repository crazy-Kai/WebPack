var webpack = require("webpack"),
    WebpackDevServer= require('webpack-dev-server'),
    config = require("./webpack.config.js");
    console.log(config)
//给config配置文件中的入口文件中添加配置项!

//编译
var compiler = webpack(config);
//启动webpack-dev-server
var server = new  WebpackDevServer(compiler, {
    publicPath: "http://localhost:8080/build",
    historyApiFallback: true,
    hot: true,//开启hot 
    inline: true
    
   
})
server.listen(8080)
console.log(server)
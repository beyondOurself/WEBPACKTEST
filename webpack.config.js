// webpack 是 node写出来的 node的写法 
let path = require('path')
module.exports = {

    mode:'development', //模式 默认两种 production development 
    entry:'./src/index.js', // 入口 
    output:{
    
        filename:'bundle.js' , // 打包后的文件名 
        path: path.resolve(__dirname,'dist'), //路径必须是一个绝对路径 

    }
}
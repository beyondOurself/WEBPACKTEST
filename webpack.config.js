// webpack 是 node写出来的 node的写法 
var path = require('path')

var  HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    devServer:{ //开发服务器的配置 
        port:3000,  //指定端口
        progress:true, //打开进度条
        contentBase:'./build',  // 指向我们静态服务的内容,
        compress:true
    }, 

    mode:'production', //模式 默认两种 production development 
    entry:'./src/index.js', // 入口 
    output:{
    
        filename:'bundle.[hash:8].js' , // 打包后的文件名 //.[hash:8]. 文件名添加长度为8的哈希值
        path: path.resolve(__dirname,'build'), //路径必须是一个绝对路径 

    },
    plugins:[ // 数组 放着所有的webpack 插件

        new HtmlWebpackPlugin({
            template:'./src/index.html', //模板存放的路径
            filename:'index.html', // 生成的文件名 
            minify:{ //对打包内容的优化
                removeAttributeQuotes:true, //去除内容的双引号
                collapseWhitespace:true, //打包内容为一行

            },
            hash:true //运行输入文件使用hash
        })
    ],

    module:{ //模块 
        rules:[ //规则 css-loader 接续 @import这种语法d
            //style-loader 他说把css 插入到head的标签中 
            //loader 的特点 希望单一
            // loader 的用法 字符串只用一个loader
            // 多个loader 需要 []
            //loader 的顺序 默认是从右向左执行 从下到上执行
            { test :/\.css$/, use:[
                {
                    loader:'style-loader'
                },
                'css-loader'
            ] }

        ]


    }



}
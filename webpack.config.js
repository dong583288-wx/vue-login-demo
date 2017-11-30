'use strict';
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {

    entry: {
        'main': './src/main.js'
    },
    output: {
        //产出的其他资源目录
        path:path.join(__dirname,'dist'),
        //产出的js文件名
        filename: 'build.js'
    },
    //声明一个模块（对象）
    module: {
        //加载器
        loaders: [{
            test: /\.css$/,
            // loader的加载顺序是从右向左
            loader: 'style-loader!css-loader', //这里是固定
        }, {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader', //这里是固定
        },{
            test:/\.(jpg|png|svg|gif|ttf)$/,
            // loader:'url-loader?limit=4096&name=1.jpg'
            loader:'url-loader',
            options:{
                limit:4096,
                name:'my_[name].[ext]'
            }

        },{
            test:/\.js$/,
            loader:'babel-loader',
            exclude:/node_modules/,//排除node_modules下面的资源
            options:{
                presets:['env'],//处理语法
                plugins:['transform-runtime']//处理函数
            }
        },
            //解决.vue文件
        {
            test:/\.vue$/,
            loader:'vue-loader',//依赖vue-template-compiler
        }


        ]
    },
    //插件
    plugins:[
        new htmlWebpackPlugin({
            //要扔到的目的地需要配合output的属性
            template:'./src/index.html'
        }),
    ]

}
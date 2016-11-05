'use strict'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin') //生成html
const ExtractTextPlugin = require('extract-text-webpack-plugin') //css单独打包
const AppCachePlugin = require('appcache-webpack-plugin'); //生成离线缓存清单
var WebpackHotMiddleware = require('webpack-hot-middleware');
let publicPath = '/src/' ,//服务器路径
path = __dirname + '/src/';
let loaders = [],
     plugins = [];


// 将ES6代码转换成ES5
loaders.push({
    test: /\.js$/,
    exclude: 'node_modules',
    loader: 'babel?presets=es2015'
})
//处理 vue 文件
loaders.push({
    test: /\.vue$/,
    exclude: 'node_modules',
    loader: 'vue'
})
//处理 css
loaders.push({
    test: /\.css$/,
    exclude: /^node_modules$/,
    loader: 'style-loader!css-loader'
})


if (process.env.NODE_ENV == 'production') { //生产环境
    plugins.push(new webpack.DefinePlugin({ //编译成生产版本
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }))
    publicPath = '/public'
    path = __dirname + '/public'
    plugins.push(new AppCachePlugin({ //自动生成app.appcache 离线缓存清单
        output: 'main.appcache'
    }))
}

plugins.push(new ExtractTextPlugin('[name].css')) //css单独打包
// plugins.push(new webpack.HotModuleReplacementPlugin()) //css单独打包
module.exports = {
    entry: './src/main.js',
    output: {
        publicPath, //服务器的路径
        path, //编译到app目录
        filename: 'index.js' //编译后的文件名
    },
    devtool:'#cheap-module-eval-source-map',
    module: {
        loaders: loaders
    },
    plugins: plugins,
    resolve: {
        extensions: ['', '.js', '.vue'] //后缀名自动补全

    }
}


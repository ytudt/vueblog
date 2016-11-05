'use strict'
const webpack = require('webpack')
const request = require('request');
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

//启动服务
let server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
})

let serverUrl = 'http://127.0.0.1:3000';
//将其他路由，全部返回index.html
server.app.get('*', (req, res) => {
    if (req.url.indexOf('api') !== -1||req.url.indexOf('.png') !== -1) {
        let url = serverUrl + req.url;
        req.pipe(request(url)).pipe(res);
    } else {

        res.sendFile(__dirname + '/index.html')
    }


})
server.app.post('*', (req, res) => {
    console.log(req.url);
    let url = serverUrl + req.url;
    console.log(url)
    req.pipe(request(url)).pipe(res);

})
server.listen(8000)

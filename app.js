'use strict'
const path=require('path');
const express=require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const ejs=require('ejs');
const routes = require('./routes');
const config=require('./config/config.js');




var app = express();



app.use(cookieParser());
// 挂载Session中间件

app.use(session({
  secret: config.secret, // 每一次生成Cookie的值的时候，1 2 3 4 5 6，通过一个私钥生成一个随机字符串再交给客户端
  resave: false,
  cookie: { maxAge: config.validTime },
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use('/', routes);


module.exports = app;


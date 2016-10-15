'use strict'
const path=require('path');
const express=require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const ejs=require('ejs');
const routes = require('./routes');



var app = express();


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true,limit: '50mb'
}))
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use('/', routes);


module.exports = app;


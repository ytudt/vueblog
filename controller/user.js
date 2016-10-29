'use strict'
const User = require('../models').User;
const Tools  = require('../utils/index.js');
const Q = require('q');
const ValidataFunc=require('../utils/validator.js');

let BreakSignal=Tools.BreakSignal

exports.doRegister = (req, res, next) => {
  console.time('注册开始')
    let userName = req.body.userName || '';
    let passWord = Tools.md5(req.body.passWord || '');
    let email = req.body.email || '';
    let getUserByLoginNamePromise = User.getUserByLoginName(userName);
    //验证用户名邮箱密码格式
    let errorMsg=ValidataFunc.registerValidataFunc(userName,email,req.body.passWord);
    if(errorMsg){
        res.send({
            statusCode:errorMsg,
            reason:'formate error'
        });
        return;
    }
    getUserByLoginNamePromise
        .then(function(data) {
            if (data) {
                console.log('用户名存在');
                throw new BreakSignal(400, 'userName is exsited');

            } else {
                return User.getUserByEmail(email)
            }
        })
        .then(function(data) {
            console.log('+++++++' + data)
            if (data) {
                throw new BreakSignal(401, 'email is exsited');
            } else {
                return User.newAndSave(userName, passWord, email)
            }
        })
        .then(function(data) {
            console.log('插入结果' + data);
            if (data) {
                res.send({
                    statusCode: 200,
                    user: data
                })
            } else {
                throw new BreakSignal(500, 'insert error');
            }
        }).catch(function(err) {
            if (err.statusCode) {
                res.send({
                    statusCode: err.statusCode,
                    reason: err.reason
                })
            } else {
                res.send({
                    statusCode: 500,
                    reason: 'server error'
                })
            }

        })
}

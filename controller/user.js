'use strict'
const User = require('../models').User;
const Tools = require('../utils/index.js');

exports.doRegister = (req, res, next) => {
    let userName = req.body.userName || '';
    let passWord = Tools.md5(req.body.passWord || '');
    let email = req.body.email || '';
    let getUserByLoginNamePromise = User.getUserByLoginName(userName);
    getUserByLoginNamePromise
        .then(function(data) {
          console.log('用户名结果'+data);
            return data;
        })
        .then(function(data) {
            if (data) {
                res.send({
                    statusCode: 400,
                    reason: 'userName is exsited'
                });
            } else {
                let getUserByEmailPromise = User.getUserByEmail(email);
                getUserByEmailPromise.then(function(data) {
                  console.log('邮箱结果'+data);
                    return data
                });
            }
        })
        .then(function(data) {
            console.log(data);
            if (data) {
                res.send({
                    statusCode: 401,
                    reason: 'email is exsited'
                });
            } else {
                let registerPromise = User.newAndSave(userName, passWord, email);
                registerPromise
                    .then((data) => {
                        console.log(data);
                        res.send({
                            statusCode: 200,
                            userName
                        });
                    }, (err) => {
                        next(err);
                        console.log(err);
                    });
            }
        })
}

'use strict'
const User = require('../models').User;
const Tools = require('../utils/index.js');
const Q = require('q');

exports.doRegister = (req, res, next) => {
    let userName = req.body.userName || '';
    let passWord = Tools.md5(req.body.passWord || '');
    let email = req.body.email || '';
    let getUserByLoginNamePromise = User.getUserByLoginName(userName);
    getUserByLoginNamePromise
        .then(function(data) {
            if (data) {
                res.send({
                      statusCode: 400,
                      reason: 'userName is exsited'
                  });
                console.log(data);
                return  Q.defer().promise;
            } else {
                return User.getUserByEmail(email)
            }
        })
        .then(function(data) {
            console.log('+++++++' + data)
            if (data) {
                res.send({
                    statusCode: 401,
                    reason: 'email is exsited'
                });
                 return  Q.defer().promise;
            }
             else {

            }
        })
        .then(function(data) {
            console.log('=======' + data);
            if (data) {
                // res.send({
                //     statusCode: 401,
                //     reason: 'email is exsited'
                // });
            } else {
                // let registerPromise = User.newAndSave(userName, passWord, email);
                // registerPromise
                //     .then((data) => {
                //         console.log(data);
                //         res.send({
                //             statusCode: 200,
                //             userName
                //         });
                //     }, (err) => {
                //         next(err);
                //         console.log(err);
                //     });
            }
        }).catch(function(err) {
            console.log(error);
        })
}

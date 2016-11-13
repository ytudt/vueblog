'use strict'
const User = require('../models').User;
const Tools = require('../utils/index.js');
const Q = require('q');
const ValidataFunc = require('../utils/validator.js');
const formidable = require('formidable');
const fs = require('fs')
const path = require('path')
let BreakSignal = Tools.BreakSignal

exports.doRegister = (req, res, next) => {
    console.log('注册新用户');
    let userName = req.body.userName || '';
    let passWord = Tools.md5(req.body.passWord || '');
    let email = req.body.email || '';
    let getUserByLoginNamePromise = User.getUserByLoginName(userName);
    //验证用户名邮箱密码格式
    let errorMsg = ValidataFunc.registerValidataFunc(userName, email, req.body.passWord);
    if (errorMsg) {
        res.json({
            statusCode: errorMsg,
            reason: 'formate error'
        });
        return;
    }
    getUserByLoginNamePromise
        .then((data) => {
            if (data) {
                throw new BreakSignal(400, 'userName is exsited');

            } else {
                return User.getUserByEmail(email)
            }
        })
        .then((data) => {
            console.log('+++++++' + data)
            if (data) {
                throw new BreakSignal(401, 'email is exsited');
            } else {
                return User.newAndSave(userName, passWord, email)
            }
        })
        .then((data) => {
            console.log('插入结果' + data);
            if (data) {
                req.session.userInfo = data;
                res.json({
                    statusCode: 200,
                    user: data
                })
            } else {
                throw new BreakSignal(500, 'insert error');
            }
        }).catch((err) => {
            if (err.statusCode) {
                res.json({
                    statusCode: err.statusCode,
                    reason: err.reason
                })
            } else {
                // res.json({
                //     statusCode: 500,
                //     reason: 'server error'
                // })
                next(err);
            }

        })
}
exports.doLogin = (req, res, next) => {
    console.log('登录');
    let userName = req.body.userName || '';
    let passWord = Tools.md5(req.body.passWord || '');
    let getUserByLoginNamePromise = User.getUserByLoginName(userName);
    let getUserByEmail = User.getUserByLoginName(userName);

    Q.all([
            User.getUserByLoginName(userName), User.getUserByEmail(userName)
        ]).then((data) => {
            // console.log('***一介布衣博客:***', result);
            let result = data[0] || data[1];
            console.log(data);
            if (result) {
                if (passWord === result.passWord) {
                    req.session.userInfo = result;

                    res.json({
                        statusCode: 200,
                        user: result

                    })
                } else {
                    res.json({
                        statusCode: 400,
                        reason: 'passWord is wrong'

                    })
                }
            } else {
                res.json({
                    statusCode: 404,
                    reason: 'user is not exit'
                })
            }

        })
        .catch((err) => {
            next(err);
        });

}
exports.exitBlog = (req, res, next) => {
    if (req.session.userInfo) {
        req.session.userInfo = '';
        res.send({
            statusCode: 200
        });
    } else {
        res.send({
            statusCode: 404
        });
    }

}
exports.uploadAvatar = (req, res, next) => {
    console.log('====================================================')
    console.log(req.sessionStore.sessions )
     console.log('====================================================')
    // console.log(req.session.userInfo._id)
    let form = new formidable.IncomingForm();
    form.uploadDir = './userAvatar';
    form.parse(req, function(err, fields, files) {
          console.log('======+++++++++++++++++++++++++++++++==============================================')
    console.log(fields )
     console.log('+++++++++++++++++++++++++++++++====================================================')
        if (err) {
            //
            return res.json({
                code: '0',
                msg: 'failed'
            });
        }
        // console.log(files.file);
        let tempPath = files.file.path;
        let extName = path.extname(files.file.name);
        let newPath = tempPath + extName;

        fs.rename(tempPath, newPath, function(err, data) {
           if(!err){
            User.setAvatar(fields._id,newPath)
            .then(function(data){
                 res.json({
                        statusCode: 200,
                        user: data
                    })
            })

           }

        });

    });


}

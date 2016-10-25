'use strict'
const User = require('../models').User;
const Tools = require('../utils/index.js');

exports.doRegister = (req,res,next) => {
    let userName = req.body.userName || '';
    let passWord = Tools.md5(req.body.passWord || '');
    let email = req.body.email || '';
    let registerPromise=User.newAndSave(userName, passWord, email);
    registerPromise.then((data)=>{
      console.log(data);
      res.send({
        statusCode:200,
        userName
      });
    },(err)=>{
      next(err);
      console.log(err);
    });
}

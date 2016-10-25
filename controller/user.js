'use strict'
const User = require('../models').User;
const Tools = require('../utils/index.js');
// const user={};
// user.doRegister=(req,res,next)=>{
// console.log('35q3543qw5');
// }
// module.exports=user
exports.doRegister = (req,res,next) => {
    let userName = req.body.userName || '';
    console.log("======================"+req.body.userName);
    console.log("======================"+req.body.passWord);
    console.log("======================"+req.body.email);
    let passWord = Tools.md5(req.body.passWord || '');
    // Logger.debug(passWord);
    let email = req.body.email || '';
    let registerPromise=User.newAndSave(userName, passWord, email);
    registerPromise.then((data)=>{
      console.log(data);
      res.send({
        statusCode:200
      });
    },(err)=>{
      next(err);
      console.log(err);
    });
}

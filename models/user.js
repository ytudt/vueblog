'use strict'
const models = require('../db');
const User = models.User;
const Q = require('q');

/**
 * 添加用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} userName 登录名
 * @param {String} passWord 密码
 * @param {String} email 邮箱
 */
exports.newAndSave = (userName, passWord, email) => {
    var defer = Q.defer();
    let user = new User();
    user.userName = userName;
    user.passWord = passWord;
    user.email = email;
    user.save((err, data) => {
        if (!err) {
            defer.resolve(data);

        } else {
            defer.reject(err);
        }

    });

    return defer.promise;
};


/**
 * 根据登录名查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} loginname 登录名
 * @param {Function} callback 回调函数
 */
exports.getUserByLoginName = (userName) => {
    var defer = Q.defer();
    User.findOne({ 'userName':userName }, function(err, data) {
        if (!err) {
            console.log('yonghuming'+data)
            defer.resolve(data);
        } else {
            defer.reject(err);
        }

    });
    return defer.promise;
};
/**
 * 根据登邮箱查找用户
 * Callback:
 * - err, 数据库异常
 * @param {String} email 登录名
 */
exports.getUserByEmail = (email) => {
    var defer = Q.defer();
    User.findOne({ 'email':email }, function(err, data) {
        if (!err) {
            console.log('youxiagn'+data);
            defer.resolve(data);
        } else {
            defer.reject(err);
        }

    });
    return defer.promise;
};


/**
 * 根据用户ID，查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} id 用户ID
 * @param {Function} callback 回调函数
 */
exports.getUserById = function(id, callback) {
    if (!id) {
        return callback();
    }
    User.findOne({ _id: id }, callback);
};

/**
 * 根据邮箱，查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} email 邮箱地址
 * @param {Function} callback 回调函数
 */
let getUserByMail = function(email, callback) {
    User.findOne({ email: email }, callback);
};
// q封装版
exports.qGetUserByMail = function(email) {
    var defer = Q.defer();
    getUserByMail(email, function(error, data) {
        if (!error) {
            defer.resolve(data);
        } else {
            defer.reject(err);
        }
    });
    return defer.promise;
};
/**
 * 根据用户名更新头像
 * Callback:
 * - err, 数据库异常
 * - lologinname, 用户名
 * - avatar, 头像路径
 * @param {Function} callback 回调函数
 */
exports.setAvatar = function(lologinname, newPath, callback) {
    getUserByloginname(lologinname, function(err, data) {
            if (err || !data) {
                return callback(err);
            }
            data.avatar = newPath;
            data.save(callback)
        })
        // let user = new User();
        // user.loginname = loginname;
        // user.passWord = passWord;
        // user.email = email;
        // User.update({"_id" : data._id},{$set:{"avatar":data.avatar}});
}

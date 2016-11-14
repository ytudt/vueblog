/*
 * @Author: Administrator
 * @Date:   2016-11-14 10:34:19
 * @Last Modified by:   Administrator
 * @Last Modified time: 2016-11-14 11:32:17
 */

'use strict';
const fs = require('fs');
const Q = require('q');

exports.rename = (tempPath, newPath) => {
    let defer = Q.defer();
    fs.rename(tempPath, newPath, (err, data) => {
        if (!err) {
            defer.resolve(true)
        } else {
            defer.reject(err)
        }
    });
    return defer.promise;

}

'use strict'

//表单提交策略对象
let strategies = {
        isNoEmpty: (value, errorMsg) => {
            if (value == '') {
                return errorMsg
            }
        },
        isGegUser: (value, errorMsg) => {
            let reg = /^[a-zA-z]\w{5,15}$/;
            if (!reg.test(value)) {
                return errorMsg
            }

        },
        isGegPassWord: (value, errorMsg) => {
            let reg = /^[a-zA-z]\w{5,15}$/;
            if (!reg.test(value)) {
                return errorMsg
            }

        },
        isGegEmail: (value, errorMsg) => {
            let reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
            // let reg = /^[a-zA-z]\w{10,15}$/;
            if (!reg.test(value)) {
                return errorMsg
            }
        }
    }
    //验证类
class Validator {
    constructor() {
        this.cache = [];
    }
    add(value, rules) {
        let that = this;
        for (let i = 0, rule; rule = rules[i++];) {
            (function(rule) {
                let strategyAry = rule.strategy.split(':');
                let errorMsg = rule.errorMsg;
                that.cache.push(function() {
                    let strategy = strategyAry.shift();
                    strategyAry.unshift(value);
                    strategyAry.push(errorMsg);
                    return strategies[strategy].apply(value, strategyAry)
                });
            })(rule)
        }
    }
    start() {
        for (let i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
            let errorMsg = validatorFunc();
            if (errorMsg) {
                return errorMsg;
            }
        }
    }
}


//注册验证函数
exports.registerValidataFunc = (userName, email, passWord) => {
        let validator = new Validator();
        validator.add(userName, [{
            strategy: 'isGegUser',
            errorMsg: 402 //用户名格式错误
        }]);
        validator.add(email, [{
            strategy: 'isGegEmail',
            errorMsg: 403 //邮箱格式错误
        }]);
        validator.add(passWord, [{
            strategy: 'isGegPassWord',
            errorMsg: 404 //密码格式错误
        }]);
        let errorMsg = validator.start();
        return errorMsg;
    }
    //登录验证函数

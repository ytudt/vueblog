<template>
<div class="loginWrap md">
<div v-show="errorMsg" class='errorMsg'>{{errorMsg}}</div>
  <table>
  <tr>
    <td>用户名</td>
    <td><input  placeholder="用户名或邮箱" type="text" v-model="userName"></td>
    <td v-bind:class="{'errorWarn':userNameError}">
    <span v-show="!userNameError">6-16位字母数字字符</span>
    <div v-show="userNameError">
      <span >用户名格式错误</span>
    </div>
    </td>
  </tr>
    <tr>
    <td>密&emsp;码</td>
    <td><input placeholder="密码" type="text"  v-model="passWord"></td>
    <td v-bind:class="{'errorWarn':passWordError}">
    <span v-show="!passWordError">6-16位字母数字字符</span>
    <div v-show="passWordError">
      <span>密码格式错误</span>
    </div>
    </td>
  </tr>
</table>
<button class="submitButton" @click="submitLogin">登录</button>
<button class="cancelButton" class="cancelButton" @click="clearInput">取消</button>
  <a class="goLogin" href="javascript:;" v-link="'/register'">没有账号？点击注册</a>
</div>

</template>
<style scoped>
.loginWrap{
/*
  width: 100%;
  height: 100;*/
  /*position: relative;*/
}
.errorMsg{
   background: #fcdede;
    color: #911;
    text-align: center;
    line-height: 40px;
    font-size: 30px;
    border-radius: 5px;
    margin: 0 50px;
}

table td
{
  padding: 5px;
}
input{
  width: 300px;
  height: 40px;
  line-height: 40px;
  border:1px solid #ccc;
  padding-left: 20px;
}
.submitButton,
.cancelButton,
.goLogin{
  position: relative;
  left: 70px;
  margin: 5px;
}
.submitButton,
.cancelButton{
  width: 80px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 5px;
  background:#3879d9;
  color: #fff;
  font-size: 18px;
}
.cancelButton{
  background: #fff;
  border: 1px solid #3879d9;
  color: #3879d9;
  box-sizing: border-box;
}
.goLogin{
  color: #3879d9;
}
.errorWarn{
  color: #911;
  height: 10px;
}
.errorWarn div{
    border-radius: 5px;
    background: #fcdede;
    height: 30px;
     padding: 5px;
     line-height: 30px;
}
</style>
<script>
import Tools from '../utils/tools.js';
import fectchDate from '../utils/api.js';
import mixins from '../mixin'
export default{
  mixins: [mixins('')],
  data(){
    return{
    userName:'',
    passWord:'',
    errorMsg:'',
    userNameError:false,
    passWordError:false,
    }
  },
  methods:{
    clearInput(){
      this.userName='';
      this.passWord='';
    },
    submitLogin(){
      console.log(222)
      let vm=this;
      vm.userNameError=false;
      vm.passWordError=false;
      if(!Tools.reg_user(vm.userName)&&!Tools.reg_email(vm.userName)){
        console.log(111)
        vm.userNameError=true;
        return;
      }
       if(!Tools.reg_user(vm.passWord)){
           console.log(121)
        vm.passWordError=true;
        return;
       }
       if(!vm.userNameError&&!vm.passWordError){
        console.log(111)
        let loginPromise=fectchDate.doPost(vm,'/doLogin',{
        userName:vm.userName,
        passWord:vm.passWord
      },{})
      loginPromise.then(function(data){
        switch(data.body.statusCode){
          case 200:
          vm.errorMsg='';
           vm.loginSuccess(data.body.user);
          vm.$router.go('/');
           break;
           case 400:
           vm.errorMsg='密码错误';
           break;
           case 404:
           vm.errorMsg='用户名或邮箱不存在';
           break;
           default:
           break;
        }
      },function(error){});
       }

    }
  }

}

</script>


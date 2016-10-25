<template>
<div class="loginWrap md">
  <table>
  <tr>
    <td>用户名</td>
    <td><input  placeholder="用户名" type="text" v-model="userName"></td>
    <td v-bind:class="{'errorWarn':userNameError}">
    <span v-show="!userNameError">6-16位字母数字字符</span>
    <div v-show="userNameError">
      <span >用户名格式错误</span>
    </div>
    </td>
  </tr>
  <tr>
    <td>邮&emsp;箱</td>
    <td><input  placeholder="邮箱" type="text" v-model="email"></td>
    <td v-bind:class="{'errorWarn':emailError}">
    <span v-show="!emailError">正确格式邮箱</span>
    <div v-show="emailError">
      <span >邮箱格式错误</span>
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
    <tr>
    <td>确认密码</td>
    <td><input placeholder="确认密码" type="text"  v-model="rePassWord"></td>
    <td v-bind:class="{'errorWarn':rePassWordError}">
    <span v-show="!rePassWordError">6-16位字母数字字符</span>
    <div v-show="rePassWordError">
       <span>密码格式错误</span>
    </div>
    </td>
  </tr>
</table>
<button class="submitButton" @click="submitLogin">注册</button>
<button class="cancelButton" class="cancelButton" @click="clearInput">取消</button>
  <a class="goLogin" href="javascript:;" v-link="'/login'">已有账号？点击登录</a>
</div>

</template>
<style scoped>
.loginWrap{
/*
  width: 100%;
  height: 100;*/
  /*position: relative;*/
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
    email:'',
    passWord:'',
    rePassWord:'',
    userNameError:false,
    emailError:false,
    passWordError:false,
    rePassWordError:false
    }
  },
  methods:{
    clearInput(){
      this.userName='';
      this.email='';
      this.passWord='';
      this.rePassWord='';
    },
    submitLogin(){
        let vm=this;
      vm.userNameError=false;
      vm.emailError=false;
      vm.passWordError=false;
      vm.rePassWordError=false;
      console.log(222)

      console.log(Tools.reg_email(vm.email));
      if(!Tools.reg_user(vm.userName)){
        vm.userNameError=true;
        return;
      }
       if(!Tools.reg_email(vm.email)){
        vm.emailError=true;
        return;
       }
       if(!Tools.reg_user(vm.passWord)){
        vm.passWordError=true;
        return;
       }
       if(!Tools.reg_user(vm.rePassWord)){
        vm.rePassWordError=true;
        return;
       }
       if(vm.passWord!=vm.rePassWord){
        return;
       }
       if(!vm.userNameError&&!vm.emailError&&!vm.passWordError&&!vm.rePassWordError&&vm.passWord==vm.rePassWord){
        let registerPromise=fectchDate.doRegister(vm,'/doRegister',{
        userName:vm.userName,
        email:vm.email,
        passWord:vm.passWord
      },{})
      registerPromise.then(function(data){
        if(data.body.statusCode==200){
          vm.loginSuccess(data.body);
        }
      },function(error){});
       }

    }
  }

}

</script>

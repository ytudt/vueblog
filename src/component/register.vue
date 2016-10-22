<template>
<div class="loginWrap md">
  <table>
  <tr>
    <td>用户名</td>
    <td><input  placeholder="用户名" type="text" v-model="userName"></td>
  </tr>
    <tr>
    <td>密码</td>
    <td><input placeholder="密码" type="text"  v-model="password"></td>
  </tr>
    <tr>
    <td>确认密码</td>
    <td><input placeholder="确认密码" type="text"  v-model="rePassword"></td>
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

</style>
<script>
import fectchDate from '../utils/api.js'
console.log(fectchDate)
export default{
  data(){
    return{
    userName:'',
    password:'',
    rePassword:''
    }
  },
  methods:{
    clearInput(){
      this.userName='';
      this.password='';
      this.rePassword='';
    },
    submitLogin(){
      console.log(222)
      let vm=this;
      let registerPromise=fectchDate.doRegister(vm,'/doRegister',{
        userName:vm.userName,
        password:vm.password
      },{})
      registerPromise.then(function(data){
        console.log(data);
      },function(error){});


    }
  }

}

</script>

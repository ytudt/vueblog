<template>
<div class="articleWrap md">
我是文章列表页
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

    }
  },
  created(){
  console.log('created'+(+new Date()))

  },
  init(){console.log('init'+(+new Date()))},
  compiled(){console.log('compiled'+(+new Date()))},
  ready(){
    console.log('ready'+(+new Date()))
    let vm=this;
    fectchDate.doGet(this,'/showArticle?tab=node')
    .then(function(data){
      console.log(data);
      vm.loginSuccess(data.body.user);
    })

  },
  methods:{



  }

}

</script>

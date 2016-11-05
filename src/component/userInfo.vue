
<template>
<div class="userInfoWrap">

<div class="baseInfo">

<img class="userAvatar" :src='userAvatar' alt="我的头像">
<!-- <img  :src='user.avatar' alt="我的头像"> -->
<span>{{user.userName}}</span>
<span>{{user.email}}</span>

</div>
<div class="articleNum">
  <span>我的文章{{user.articleNum}}</span>
</div>
</div>
</template>
<style scoped>
.userInfoWrap{
  /*background:#ddd;*/
  color: #333;
  width: 100%;
  padding:  100px 200px;
  box-sizing: border-box;
}
.userInfoWrap .userAvatar{
width: 50px;
height: 50px;
cursor: pointer;
}
.userInfoWrap div{
   background:#fff;
   margin-top: 20px;
   padding: 10px;
    /*box-sizing: border-box;*/
    border-radius: 5px;
}
.userInfoWrap .baseInfo span{
  display: block;
  margin: 5px 0;
}

</style>
<script>
import menus from '../config/menus.js'
import store from '../vuex/store'
import actions from '../actions/'
  export default{
      store,
        vuex: {
            getters: {
                user: state => state.user
            },
            actions: actions()
        },

    data(){
      return{
         userAvatar:'../userAvatar/defaltAvatar.png'
      }
    },
    ready(){
    }
  }
</script>

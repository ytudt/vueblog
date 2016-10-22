
<template>
<header class="header clr">
<div class="return">
</div>
<ul class="menus clr fl">
<li v-for="menu in menus"  v-on:click="SET_STATUS">
  {{menu.title}}
</li>
</ul>
<div>
  <button class="fr" v-link="'/register'">注册</button>
  <button class="fr" v-link="'/login'">登录</button>
</div>
</header>
</template>
<style scoped>
  .header{
    width: 100%;
    height: 50px;
    background: rgba(0,0,0,.5);
  }
  .header .menus{
    width:calc(100% - 150px);
    height: 100%;
    display: inline-block;
  }
   .header .menus li{
    float: left;
    width: 25%;
    height:100%;
    line-height: 50px;
    color: #fff;
    font-size: 30px;
    text-align: center;

   }
    .header .menus li:hover{
      background: rgba(0,0,0,0.6);
    }
    .header button{
      display: inline-block;
      height: 100%;
      line-height: 50px;
      margin-right: 10px;
      padding: 0 15px;
      border-radius: 5px;
    }
</style>
<script>
import menus from '../../config/menus.js'
  import store from '../../vuex/store'
    import actions from '../../actions/'
  export default{
      store,
        vuex: {
            getters: {
                user: state => state.user
                // state: state => state[name]
            },
            actions: actions()
        },

    data(){
      return{
        menus
      }
    },
    ready(){
    }
  }
</script>

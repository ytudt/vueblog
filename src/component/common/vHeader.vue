
<template>
<header class="header">
<div class="return">
</div>
<ul class="menus clr">
<li v-for="menu in menus" >
  {{menu.title}}
</li>
</ul>
</header>
</template>
<style scoped>
  .header{
    width: 100%;
    height: 50px;
    background: rgba(0,0,0,.5);
  }
  .header .menus{
    width:calc(100% - 50px);
    height: 100%;
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
</style>
<script>
import menus from '../../config/menus.js'
console.log('menus');
console.log(menus);
  export default{
    data(){
      return{
        menus
      }
    },
    ready(){

      console.log('vheader');
    }
  }
</script>

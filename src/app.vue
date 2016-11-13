
<template>
<v-header></v-header>
<div class="contentWrap">
    <router-view></router-view>
</div>

</template>
<style>
#main{
    height:100%;
}
.contentWrap{
    width: 100%;

    position: absolute;
     top: 50px;
    bottom:0;
}
</style>
<script>

import components from './component/common/';
 import store from './vuex/store'
   export default {
   store,
    components,
    vuex: {
            getters: {
                user: state => state.user
            }
    },
     ready(){
            }
    }
</script>

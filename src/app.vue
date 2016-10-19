
<template>
<v-header></v-header>
{{user.name}}
<router-view></router-view>
</template>
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
          console.log('app ready');
          console.log(this.user.name);
            }
    }
</script>

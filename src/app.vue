
<template>
<v-header></v-header>
    <h2>app.vue</h2>
    <h1>ceshi</h1>
     <router-view></router-view>

</template>
<script>
import components from './component/common/'
   export default {
    components,
        ready(){
          console.log('app ready');
        }
    }
</script>

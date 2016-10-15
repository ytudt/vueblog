import Vue from 'vue'
import VueRouter from 'vue-router'
import route from './route' //路由配置
console.log(route);
// import * as filter from './filter' //过滤器
import app from './app.vue'



Vue.use(VueRouter)
// // Object.keys(filter).forEach(k => Vue.filter(k, filter[k])) //注册过滤器


var router = new VueRouter({ //配置路由
    history: process.env.NODE_ENV !== 'production'
})
router.map(route)

router.start(Vue.extend({}), '#main')


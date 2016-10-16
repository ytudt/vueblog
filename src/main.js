import Vue from 'vue'
import VueRouter from 'vue-router'
import route from './route' //路由配置
// import * as filter from './filter' //过滤器
import app from './app.vue'
import './css/reset.css'


Vue.use(VueRouter)
// // Object.keys(filter).forEach(k => Vue.filter(k, filter[k])) //注册过滤器


var router = new VueRouter({ //配置路由
    history: process.env.NODE_ENV !== 'production'
})

router.map(route)
console.log('route')
console.log(route)

router.start(Vue.extend({}), '#main')


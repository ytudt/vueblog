import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import route from './route' //路由配置
// import * as filter from './filter' //过滤器
import app from './app.vue'
import './css/reset.css'
// vue-core-image-upload
// import VueCoreImageUpload  from './vue.core.image.upload.vue';


Vue.use(VueRouter)
Vue.use(VueResource)
// // Object.keys(filter).forEach(k => Vue.filter(k, filter[k])) //注册过滤器


var router = new VueRouter({ //配置路由
    history: process.env.NODE_ENV !== 'production'
})

router.map(route)
router.start(Vue.extend({}), '#main')


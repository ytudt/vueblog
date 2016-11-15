import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import route from './route' //路由配置
// import * as filter from './filter' //过滤器
import app from './app.vue'
import {imgError} from './directive'
import './css/reset.css'
 import store from './vuex/store'
// import   app from './app'
// vue-core-image-upload
// import VueCoreImageUpload  from './vue.core.image.upload.vue';


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.directive('img-error',imgError);
// // Object.keys(filter).forEach(k => Vue.filter(k, filter[k])) //注册过滤器


var router = new VueRouter({ //配置路由
    history: process.env.NODE_ENV !== 'production'
})

router.map(route)
router.beforeEach(({to, next}) => {
    if (to.auth && !app.store.state.user._id) { //验证用户是否登录，用户没有登录则强制跳转到登录页面
        router.replace('/')
    } else {
        next()
    }
})
router.start(Vue.extend({}), '#main')


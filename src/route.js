
 import index from './component/index.vue'
 import login from './component/login.vue'
 import register from './component/register.vue'



export default {
    '/': {
        component: (resolve) => {
            console.log('resolve');
            console.log(resolve);
            require(['./app.vue'], resolve)
        },
        subRoutes: {
            '/': {
                auth: false,
                title: {
                    query: 'index',
                    data: {}
                },
                component: index
            },
            '/login':{
                auth:false,
                component:login
            },
            '/register':{
                auth:false,
                component:register
            }
        }
    }
}


 import index from './component/index.vue'



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
            }
        }
    }
}

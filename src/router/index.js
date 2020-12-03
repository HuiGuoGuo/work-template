import Vue from 'vue' ;
import Router from "vue-router";

Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index',
            component: require('@/pages/Layout').default,
            children: [
                {
                    name: 'index',
                    path: 'index',
                    component: require('@/pages/Main').default
                },
                {
                    name: 'template',
                    path: 'template',
                    component: require('@/pages/Template').default
                }
            ]
        }
    ]
})

import Vue from 'vue'
import VueRouter  from 'vue-router'
import Dashboard from './views/dashboard.vue'
import Requests from './views/requests.vue'

Vue.use(VueRouter)

const router = new VueRouter ({
    mode:'history',
    linkExactActiveClass: 'active',
    routes:[
        {   
            name:'dashboard',
            path: '/',
            component: Dashboard
        },
        {   
            name:'requests',
            path: '/requests',
            component: Requests
        }
    ]
}) 

export default router
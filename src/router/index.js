import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: () =>
            import ('../components/tabar/Home.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import ('../components/tabar/Search.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () =>
            import ('../components/tabar/Cart.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../components/tabar/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
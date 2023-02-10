import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Service from '../components/Services.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/service',
        name: 'Service',
        component: Service
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
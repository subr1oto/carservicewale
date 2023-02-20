import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Service from '../components/Services.vue'
import Login from '../components/Login.vue'

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
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
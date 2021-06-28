import Home from '@/components/Home' 
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Update from '@/components/update'
import Add from '@/components/add'



import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/',
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
    },
    {
        name: 'Login',
        component: Login,
        path: '/login',
    },
    {
        name: 'Update',
        component: Update,
        path: '/update',
    },
    {
        name: 'Add',
        component: Add,
        path: '/add',
    }
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
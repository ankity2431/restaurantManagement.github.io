import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import AddRestaurant from './components/add.vue'
import UpdateRestaurant from './components/update.vue'

import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name: 'Home',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'AddRestaurant',
        component: AddRestaurant,
        path: '/add-restro'
    },
    {
        name: 'UpdateRestaurant',
        component: UpdateRestaurant,
        path: '/update-restro/:id',
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router
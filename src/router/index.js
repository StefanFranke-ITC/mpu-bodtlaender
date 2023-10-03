import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MPUView from "@/views/MPUView";
import ImpressumNeuView from "@/views/ImpressumView";
import InfoView from "@/views/InfoView";
import ÜberMichView from "@/views/ÜberMichView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/impressum',
        name: 'impressum',
        component: ImpressumNeuView
    },
    {
        path: '/mpu',
        name: 'mpu',
        component: MPUView
    },
    {
        path: '/info',
        name: 'info',
        component: InfoView
    },
    {
        path: '/überMich',
        name: 'überMich',
        component: ÜberMichView
    },
    {
        path: '/:catchAll(.*)', component: HomeView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior: function (to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        } else {
            return {el: document.getElementById('home'), behavior: 'smooth'}
        }
    }
})

export default router

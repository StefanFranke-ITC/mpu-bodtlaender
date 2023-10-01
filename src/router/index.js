import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import DatenschutzView from "@/views/DatenschutzView";
import MPUView from "@/views/MPUView";
import ImpressumNeuView from "@/views/ImpressumNeuView";
import InfoView from "@/views/InfoView";

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
    path: '/datenschutz',
    name: 'datenschutz',
    component: DatenschutzView
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

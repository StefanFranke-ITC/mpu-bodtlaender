import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import DatenschutzView from "@/views/DatenschutzView";
import MPUView from "@/views/MPUView";
import PreiseView from "@/views/PreiseView";
import ImpressumNeuView from "@/views/ImpressumNeuView";

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
    path: '/preise',
    name: 'preise',
    component: PreiseView
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

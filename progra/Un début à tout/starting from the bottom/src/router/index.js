import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Variable from '../views/VariableView.vue'
import Boucle from '../views/BoucleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/variable',
      name: 'variable',
      component: Variable
    },
    {
      path: '/boucle',
      name: 'boucle',
      component: Boucle
    }
  ]
})

export default router

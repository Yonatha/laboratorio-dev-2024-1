import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Questao3 from '@/components/questoes/Questao3.vue'
import Questao4 from '@/components/questoes/Questao4.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/questoes/3',
      name: 'questao-3',
      component: Questao3
    },
    {
      path: '/questoes/4',
      name: 'questao-4',
      component: Questao4
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

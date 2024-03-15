import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Questao1 from '@/components/questoes/Questao1.vue'
import Questao2 from '@/components/questoes/Questao2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/questoes/2',
      name: 'questao-2',
      component: Questao2
    },
    {
      path: '/questao/1',
      name: 'questao',
      component: Questao1 
    }
  ]
})

export default router

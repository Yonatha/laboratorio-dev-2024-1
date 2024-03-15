import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Questao1 from '@/components/questoes/Questao1.vue'
import Questao3 from '@/components/questoes/Questao3.vue'

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
      path: '/questao/1',
      name: 'questao',
      component: Questao1 
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Questao1 from '@/components/questoes/Questao1.vue'
import Questao3 from '@/components/questoes/Questao3.vue'
import Questao2 from '@/components/questoes/Questao2.vue'
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
      path: '/questoes/2',
      name: 'questao-2',
      component: Questao2
    },
    {
      path: '/questao/1',
      name: 'questao',
      component: Questao1 
    },
    {
      path: '/questao/4',
      name: 'questao-4',
      component: Questao4 
    }
  ]
})

export default router

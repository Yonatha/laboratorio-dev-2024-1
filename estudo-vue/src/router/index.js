import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Questao1 from '@/components/questoes/Questao1.vue'
import Questao3 from '@/components/questoes/Questao3.vue'
import Questao2 from '@/components/questoes/Questao2.vue'
import Questao4 from '@/components/questoes/Questao4.vue'
import Questao5 from '@/components/questoes/Questao5.vue'
import Questao6 from '@/components/questoes/Questao6.vue'
import Questao7 from '@/components/questoes/Questao7.vue'
import Questao8 from '@/components/questoes/Questao8.vue'
import Questao9 from '@/components/questoes/Questao9.vue'

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
    },
    {
      path: '/questao/5',
      name: 'questao-5',
      component: Questao5
    },
    {
      path: '/questao/6',
      name: 'questao-6',
      component: Questao6
    },
    {
      path: '/questao/7',
      name: 'questao-7',
      component: Questao7
    },
    {
      path: '/questao/8',
      name: 'questao-8',
      component: Questao8
    },
    {
      path: '/questao/9',
      name: 'questao-9',
      component: Questao9
    }
  ]
})

export default router

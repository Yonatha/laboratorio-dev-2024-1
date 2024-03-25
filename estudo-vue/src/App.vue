<script>
import { RouterLink, RouterView } from 'vue-router'
import Questao1 from './components/questoes/Questao1.vue'
import Questao2 from '@/components/questoes/Questao2.vue'
import Questao3 from "@/components/questoes/Questao3.vue"
import Questao4 from './components/questoes/Questao4.vue'
import Questao5 from '@/components/questoes/Questao5.vue'
import Questao6 from '@/components/questoes/Questao6.vue'
import Questao7 from '@/components/questoes/Questao7.vue'
import Questao8 from '@/components/questoes/Questao8.vue'
import Questao9 from '@/components/questoes/Questao9.vue'


 export default {
  components: {
    Questao3,
    Questao2,
    Questao1,
    Questao4,
    Questao5,
    Questao6,
    Questao7,
    Questao8,
    Questao9
  }
}
</script>

<template>
  <nav>
        <RouterLink to="/questao/1">Questão 1</RouterLink>
        <RouterLink to="/questoes/2">Questão 2</RouterLink>
        <RouterLink to="/questoes/3">Questão 3</RouterLink>
        <RouterLink to="/questao/4">Questão 4</RouterLink>
        <RouterLink to="/questao/5">Questão 5</RouterLink>
        <RouterLink to="/questao/6">Questão 6</RouterLink>
        <RouterLink to="/questao/7">Questão 7</RouterLink>
        <RouterLink to="/questao/8">Questão 8</RouterLink>
        <RouterLink to="/questao/9">Questão 9</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

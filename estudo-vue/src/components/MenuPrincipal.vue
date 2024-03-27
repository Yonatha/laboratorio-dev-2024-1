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
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: "MenuPrincipal"
}
</script>

<style>
body {
  padding-top: 30px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  background: #000000;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  height: 30px;
  z-index: 999;
  padding-top: 10px;
}

nav a {
  margin-right: 10px;
  color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  margin-top: 10px;
  padding: 4px;
  border-radius: 4px;
  letter-spacing: 1px;
}

nav a.router-link-active {
  background-color: rgb(0, 43, 231);
  color: rgb(255, 255, 255);
}

nav a:hover {
  background: #323131;
}
</style>
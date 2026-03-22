<template>
  <div id="app">
  
    <Header />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* Reseta margens para a tela toda */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

/* O container principal ocupa pelo menos 100% da altura da tela */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* O conteúdo principal cresce e empurra o Footer para o final */
.main-content {
  flex: 1;
}
</style>

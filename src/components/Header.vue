<template>
  <header>
    <nav class="nav-links">
      <GlowButton to="/about">Sobre</GlowButton>
      <GlowButton to="/projects">Meus Projetos</GlowButton>
      <GlowButton to="/skills">Habilidades</GlowButton>
      <GlowButton to="/resume">Currículo</GlowButton>
      <GlowButton to="/contact">Contato</GlowButton>
    </nav>
  </header>
</template>

<script setup>
import GlowButton from './GlowButton.vue';
</script>

<style scoped>
header {
  padding: 5rem;
  display: flex;
  flex-direction: column; /* Coloca o nav abaixo do h1 */
  align-items: center;    /* Centraliza os itens na tela */
  gap: 1.5rem;            /* Espaço entre o título e os botões */
  color: #fff;
  background-color: black;
}

h1 {
  margin: 0;
  text-align: center;
}

.nav-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Caso adicione muitos botões e a tela seja pequena */
  gap: 1rem;
}
</style>
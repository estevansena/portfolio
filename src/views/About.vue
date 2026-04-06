<template>
  <div class="hero">
    <SectionTitle 
      firstName="Ab" 
      lastName="out" 
      :items="[
        { label: 'Projetos', description: 'Aqui ficam todos meus projetos em andamento' },
        { label: 'Skills', description: 'Minhas habilidades em desenvolvimento e design' },
        { label: 'Contato', description: 'Como me encontrar e enviar mensagens' }
      ]"
    />

  </div>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
</script>

<style scoped>

.hero {
  position: relative;
}

.hero :deep(.box-group) {
  top: 30%;
  transform: translateY(-25%);
}

</style>
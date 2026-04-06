<template>
  <div class="hero">
    <SectionTitle 
      firstName="Down" 
      lastName="load" 
      :items="[
        { label: 'Digital Business Card', description: 'Faça o download do meu Digital Business Card' },
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
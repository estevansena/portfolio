<template>
  <div class="hero">
    <SectionTitle 
      firstName="Estevan " 
      lastName="Sena" 
      :items="[
        { label: 'Frontend Developer | UX Designer', description: 'Hello, World!' },
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

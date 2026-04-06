<template>
  <div class="hero">
    <SectionTitle 
      firstName="Contact " 
      lastName="Me" 
      :items="[
        { label: 'Linkedin', description: 'Confira minhas informações profissionais' },
        { label: 'Github', description: 'Confira meu repositório no Github' },
        { label: 'Instagram', description: 'Siga-me no Instagram' },
        { label: 'Twitter', description: 'Siga-me no Twitter' }

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
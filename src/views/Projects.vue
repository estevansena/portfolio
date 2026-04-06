<template>
  <div class="hero">
    <SectionTitle 
      firstName="Pro" 
      lastName="jects" 
      :items="[
        { icon: faFolderRegular, label: 'Json Editor', description: 'Minhas habilidades em desenvolvimento e design' },
        { icon: faFolderRegular, label: 'Video Downloader', description: 'Como me encontrar e enviar mensagens' },
        { icon: faFolderRegular, label: 'Portfolio', description: 'Como me encontrar e enviar mensagens' }
      ]"
    />
  </div>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import { faFolder as faFolderRegular } from '@fortawesome/free-regular-svg-icons'
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
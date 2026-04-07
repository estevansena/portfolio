<template>
  <div class="page">
    <div class="content">
      <SectionTitle 
        firstName="Pro" 
        lastName="jects" 
      />
      <BodyMenu 
        :items="[
          { label: 'Json Editor', description: 'Minhas habilidades em desenvolvimento e design' },
          { label: 'Video Downloader', description: 'Como me encontrar e enviar mensagens' },
          { label: 'Portfolio', description: 'Como me encontrar e enviar mensagens' }
        ]"
        @select="onSelect"
      />
      <TypingText :text="currentDescription" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'
import BodyMenu from '../components/BodyMenu.vue'
import TypingText from '../components/TypingText.vue'

const currentDescription = ref('Minhas habilidades em desenvolvimento e design')

function onSelect(item) {
  currentDescription.value = item.description
}
</script>

<style scoped>
.page {
  padding-left: 60px;
  padding-right: 40px;
  padding-top: 70px;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 1024px) {
  .page {
    padding-left: 40px;
    padding-right: 24px;
  }
}

@media (max-width: 768px) {
  .page {
    padding-left: 20px;
    padding-right: 16px;
    padding-top: 70px;
  }

  .content {
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .page {
    padding-left: 16px;
    padding-right: 12px;
  }
}
</style>

<template>
  <div class="page">
    <div class="content">
      <SectionTitle 
        :firstName="titles.firstName" 
        :lastName="titles.lastName" 
        page="contactMe"
      />
      <BodyMenu 
        :items="menuItems"
        @select="onSelect"
      />
      <TypingText :text="currentDescription" />
    </div>
  </div>
</template>

<script setup>
import { ref, inject, watch, computed } from 'vue'
import SectionTitle from '../components/SectionTitle.vue'
import BodyMenu from '../components/BodyMenu.vue'
import TypingText from '../components/TypingText.vue'
import { translations } from '../i18n/translations'

const currentLang = inject("currentLang")

const titles = computed(() => translations[currentLang.value].titles.contactMe)

const menuItems = ref([
  { label: 'Linkedin', description: translations[currentLang.value].contactMe.linkedin },
  { label: 'Github', description: translations[currentLang.value].contactMe.github },
  { label: 'Instagram', description: translations[currentLang.value].contactMe.instagram },
  { label: 'Twitter', description: translations[currentLang.value].contactMe.twitter }
])

const currentDescription = ref(menuItems.value[0].description)

watch(currentLang, () => {
  menuItems.value = [
    { label: 'Linkedin', description: translations[currentLang.value].contactMe.linkedin },
    { label: 'Github', description: translations[currentLang.value].contactMe.github },
    { label: 'Instagram', description: translations[currentLang.value].contactMe.instagram },
    { label: 'Twitter', description: translations[currentLang.value].contactMe.twitter }
  ]
  currentDescription.value = menuItems.value[0].description
}, { immediate: true })

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

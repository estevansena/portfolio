<template>
  <div class="page">
    <div class="content">
      <SectionTitle 
        :firstName="titles.firstName" 
        :lastName="titles.lastName" 
        page="techStack"
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
import { faCss, faHtml5, faJsSquare, faNodeJs, faVuejs } from '@fortawesome/free-brands-svg-icons'

const currentLang = inject("currentLang")

const titles = computed(() => translations[currentLang.value].titles.techStack)

const menuItems = ref([
  { icon: faVuejs, label: 'Vue.js', description: translations[currentLang.value].techStack.vue },
  { icon: faNodeJs, label: 'Node.js', description: translations[currentLang.value].techStack.node },
  { icon: faHtml5, label: 'HTML', description: translations[currentLang.value].techStack.html },
  { icon: faCss, label: 'CSS', description: translations[currentLang.value].techStack.css },
  { icon: faJsSquare, label: 'JavaScript', description: translations[currentLang.value].techStack.javascript }
])

const currentDescription = ref(menuItems.value[0].description)

watch(currentLang, () => {
  menuItems.value = [
    { icon: faVuejs, label: 'Vue.js', description: translations[currentLang.value].techStack.vue },
    { icon: faNodeJs, label: 'Node.js', description: translations[currentLang.value].techStack.node },
    { icon: faHtml5, label: 'HTML', description: translations[currentLang.value].techStack.html },
    { icon: faCss, label: 'CSS', description: translations[currentLang.value].techStack.css },
    { icon: faJsSquare, label: 'JavaScript', description: translations[currentLang.value].techStack.javascript }
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

<template>
  <h1 class="title">
    {{ displayFirstName }}<span class="highlight">{{ displayLastName }}</span>
  </h1>
</template>

<script setup>
import { ref, inject, watch, computed } from "vue"
import { translations } from "../i18n/translations"

const props = defineProps({
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  page: { type: String, default: '' } // 'projects', 'techStack', 'about', 'contactMe', 'download'
})

const currentLang = inject("currentLang", ref('pt'))

const displayFirstName = computed(() => {
  if (props.page && translations[currentLang.value]?.titles?.[props.page]) {
    return translations[currentLang.value].titles[props.page].firstName
  }
  return props.firstName
})

const displayLastName = computed(() => {
  if (props.page && translations[currentLang.value]?.titles?.[props.page]) {
    return translations[currentLang.value].titles[props.page].lastName
  }
  return props.lastName
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

.title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #fff;
  -webkit-text-stroke: 1px #fff;
  line-height: 1.1;
  margin: 0;
  display: block;
}

.highlight {
  color: #ff0066;
  -webkit-text-stroke: 0;
}

@media (max-width: 1024px) {
  .title {
    letter-spacing: 3px;
  }
}

@media (max-width: 768px) {
  .title {
    letter-spacing: 2px;
    text-align: left;
  }
}

@media (max-width: 480px) {
  .title {
    letter-spacing: 1px;
  }
}
</style>

<style>
/* Light mode - não scoped para funcionar */
body:not(.dark) .title {
  color: #000 !important;
  -webkit-text-stroke: 1px #000 !important;
}

body:not(.dark) .title .highlight {
  color: #ff0066 !important;
  -webkit-text-stroke: 0 !important;
}
</style>

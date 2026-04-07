<template>
  <div class="lang">
    <span 
      class="pt" 
      :class="{ active: currentLang === 'pt' }"
      @click="setLang('pt')"
    >PT</span>
    <span class="separator"> | </span>
    <span 
      class="en" 
      :class="{ active: currentLang === 'en' }"
      @click="setLang('en')"
    >EN</span>
  </div>
</template>

<script setup>
import { inject } from "vue";

const currentLang = inject("currentLang");
const setLang = inject("setLang");
</script>

<style scoped>
.lang {
  font-weight: 500;
  cursor: pointer;
}

.pt, .en {
  color: white;
  transition: 0.3s;
}

.pt:hover, .en:hover {
  color: #00eeff;
}

.pt.active, .en.active {
  color: #00eeff;
  font-weight: 700;
}

/* Light mode */
body:not(.dark) .pt,
body:not(.dark) .en {
  color: #000;
}

body:not(.dark) .pt:hover,
body:not(.dark) .en:hover {
  color: #ff0066;
}

body:not(.dark) .pt.active,
body:not(.dark) .en.active {
  color: #ff0066;
}

body:not(.dark) .separator {
  color: #000;
}
</style>

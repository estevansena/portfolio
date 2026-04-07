<template>
  <p class="typing-text">{{ displayedText }}</p>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'

const props = defineProps({
  text: { type: String, default: '' },
  speed: { type: Number, default: 40 }
})

const displayedText = ref('')
let typingTimeout = null

function typeChar(text) {
  if (typingTimeout) {
    clearTimeout(typingTimeout)
    typingTimeout = null
  }
  
  if (!text) {
    displayedText.value = ''
    return
  }
  
  displayedText.value = ''
  let index = 0

  function type() {
    if (index < text.length) {
      displayedText.value += text[index]
      index++
      typingTimeout = setTimeout(type, props.speed)
    }
  }

  type()
}

watch(() => props.text, (newText, oldText) => {
  if (newText !== oldText) {
    typeChar(newText)
  }
}, { immediate: true })

onUnmounted(() => {
  if (typingTimeout) {
    clearTimeout(typingTimeout)
  }
})

defineExpose({ typeText: typeChar })
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

.typing-text {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(0, 238, 255, 0.8);
  min-height: 24px;
  white-space: pre-wrap;
  margin: 0;
}

/* Light mode */
body:not(.dark) .typing-text {
  color: rgba(0, 0, 0, 0.8);
}

@media (max-width: 768px) {
  .typing-text {
    display: none;
  }
}
</style>

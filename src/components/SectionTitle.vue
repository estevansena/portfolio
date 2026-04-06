<template>
  <div class="title-wrapper">
    <h3 class="title">
      {{ firstName }}<span class="highlight">{{ lastName }}</span>
    </h3>

    <div class="items-list">
      <a
        v-for="(item, i) in scrollItems"
        :key="i"
        :href="item.url || '#'"
        class="scroll-item"
        :class="{ active: activeIndex === i }"
        @mouseenter="setActive(i)"
      >
        <!-- Ícone opcional -->
        <FontAwesomeIcon v-if="item.icon" :icon="item.icon" class="icon" />

        <!-- Label -->
        <span>{{ item.label || item }}</span>
      </a>
    </div>

    <!-- Texto com efeito typing -->
    <p class="typing-text">{{ displayedText }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  firstName: { type: String, default: 'Estevan' },
  lastName: { type: String, default: 'Sena' },
  items: { type: Array, default: () => [] },
  count: { type: Number, default: 0 }
})

// Computa os itens de scroll
const scrollItems = computed(() => {
  if (props.items.length) return props.items
  return Array.from({ length: props.count }, (_, i) => ({
    label: `Item ${i + 1}`,
    description: `Descrição do Item ${i + 1}`,
  }))
})

const displayedText = ref('')
const activeIndex = ref(0)

// Função de typing
let typingTimeout
function startTyping(text) {
  clearTimeout(typingTimeout)
  displayedText.value = ''
  let index = 0

  function typeChar() {
    if (index < text.length) {
      displayedText.value += text[index]
      index++
      typingTimeout = setTimeout(typeChar, 40)
    }
  }

  typeChar()
}

// Define o item ativo
function setActive(index) {
  activeIndex.value = index
  startTyping(scrollItems.value[index].description)
}

// Inicializa com o primeiro item ativo
if (scrollItems.value.length) {
  setActive(0)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

.title-wrapper {
  display: flex;
  flex-direction: column;
}

.title {
  font-family: 'Orbitron', sans-serif;
  font-size: 6rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #fff;
  margin: 0 0 5px 0;
}

.highlight { color: #ff0066; }

.items-list {
  margin-top: 3px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.scroll-item {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: rgba(119, 119, 119, 0.8);
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.2s, opacity 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  opacity: 0.4;
}

.scroll-item:hover {
  color: #00eeff;
  opacity: 1;
}

.scroll-item.active {
  color: #ff0066;
  opacity: 1;
}

.icon {
  font-size: 1.2rem;
  color: #0ff;
}

.typing-text {
  margin-top: 15px;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(0, 238, 255, 0.8);
  min-height: 24px;
  white-space: pre-wrap;
}
</style>
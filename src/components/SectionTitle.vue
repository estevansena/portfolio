<template>
  <div class="section-title">
    <h1 class="title">
      {{ firstName }}<span class="highlight">{{ lastName }}</span>
    </h1>

    <div class="items">
      <a
        v-for="(item, i) in scrollItems"
        :key="i"
        :href="item.url || '#'"
        class="item"
        :class="{ active: activeIndex === i }"
        @mouseenter="setActive(i)"
      >
        <FontAwesomeIcon v-if="item.icon" :icon="item.icon" class="icon" />
        <span>{{ item.label || item }}</span>
      </a>
    </div>

    <p class="typing">{{ displayedText }}</p>
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

const scrollItems = computed(() => {
  if (props.items.length) return props.items
  return Array.from({ length: props.count }, (_, i) => ({
    label: `Item ${i + 1}`,
    description: `Descrição do Item ${i + 1}`,
  }))
})

const displayedText = ref('')
const activeIndex = ref(0)
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

function setActive(index) {
  activeIndex.value = index
  startTyping(scrollItems.value[index].description)
}

if (scrollItems.value.length) {
  setActive(0)
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

.section-title {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.title {
  font-family: 'Orbitron', sans-serif;
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #fff;
  line-height: 1.1;
}

.highlight {
  color: #ff0066;
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.item {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.541);
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.2s, opacity 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  opacity: 0.5;
}

.item:hover,
.item.active {
  color: #ff0066;
  opacity: 1;
}

.icon {
  font-size: 1rem;
  color: #00eeff;
}

.typing {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(0, 238, 255, 0.8);
  min-height: 24px;
  white-space: pre-wrap;
  margin-top: 8px;
}

/* Tablet */
@media (max-width: 1024px) {
  .title {
    letter-spacing: 3px;
  }

  .item {
    font-size: 0.75rem;
    letter-spacing: 2px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .section-title {
    width: 100%;
    gap: 24px;
  }

  .title {
    letter-spacing: 2px;
    text-align: left;
  }

  .items {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .item {
    font-size: 1rem;
    letter-spacing: 2px;
    opacity: 1;
  }

  .item.active {
    color: #00eeff;
  }

  .typing {
    display: none;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .title {
    letter-spacing: 1px;
  }

  .item {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
}
</style>

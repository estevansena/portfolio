<template>
  <div class="body-menu">
    <a
      v-for="(item, i) in items"
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
</template>

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
  items: { type: Array, default: () => [] }
})

const emit = defineEmits(['select'])

const activeIndex = ref(0)

function setActive(index) {
  activeIndex.value = index
  emit('select', props.items[index])
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

.body-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.item {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
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

/* Light mode */
body:not(.dark) .item {
  color: rgb(0, 0, 0);
}

body:not(.dark) .item:hover,
body:not(.dark) .item.active {
  color: #ff0066;
}

body:not(.dark) .icon {
  color: #000;
}

@media (max-width: 1024px) {
  .item {
    font-size: 0.75rem;
    letter-spacing: 2px;
  }
}

@media (max-width: 768px) {
  .body-menu {
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
}

@media (max-width: 480px) {
  .item {
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
}
</style>

<template>
  <h1 class="title">
    {{ firstName }}<span class="highlight">{{ lastName }}</span>
  </h1>
</template>

<script setup>
defineProps({
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' }
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
  line-height: 1.1;
  margin: 0;
}

.highlight {
  color: #ff0066;
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

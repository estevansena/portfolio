<template>
  <router-link
    v-if="to"
    :to="to"
    :target="target"
    class="btn-glow"
  >
    <slot></slot>
  </router-link>
  <a
    v-else
    :href="href"
    :target="target"
    class="btn-glow"
  >
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  },
  target: {
    type: String,
    default: '_self'
  }
});
</script>

<style scoped>
/* Os estilos da classe .btn-glow já estão no src/assets/global.css e serão aplicados automaticamente */
</style>

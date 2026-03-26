<template>
  <div 
    class="grid-background"
    :style="{ '--my': `${mouseY}px` }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mouseY = ref(-1000)

const handleMouseMove = (e) => {
  mouseY.value = e.clientY
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.grid-background {
  position: fixed;
  inset: 0;
  background: #000;
  z-index: -999;
  pointer-events: none;

  /* 🔥 GRID ROXA */
  background-image:
    linear-gradient(#a100ff 1px, transparent 1px),
    linear-gradient(90deg, #a100ff 1px, transparent 1px);

  background-size: 40px 40px;

  /* 🔥 Agora usamos UMA máscara só (sem bug) */
  -webkit-mask-image: radial-gradient(
    ellipse 300px 200px at 50% var(--my),
    black 0%,
    transparent 100%
  );

  mask-image: radial-gradient(
    ellipse 300px 200px at 50% var(--my),
    black 0%,
    transparent 100%
  );

  /* 🔥 Limita só nas laterais usando clip-path (hack limpo) */
  clip-path: polygon(
    0% 0%, 15% 0%, 15% 100%, 0% 100%,     /* esquerda */
    85% 0%, 100% 0%, 100% 100%, 85% 100%  /* direita */
  );
}
</style>
<template>
  <div class="grid-background">
    <!-- Glow Difuso (Neon) -->
    <div 
      class="grid-glow-blur" 
      :style="{ '--mx': `${mouseX}px`, '--my': `${mouseY}px` }"
    ></div>
    
    <!-- Linhas de Glow Nítidas (Foco do Mouse) -->
    <div 
      class="grid-glow" 
      :style="{ '--mx': `${mouseX}px`, '--my': `${mouseY}px` }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mouseX = ref(-1000)
const mouseY = ref(-1000)

// Monitora o mouse em toda a janela do usuário
const handleMouseMove = (e) => {
  mouseX.value = e.clientX
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
  /* Fundo da view isolado e preso na parte de trás da tela */
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  z-index: -999;
  overflow: hidden;
  pointer-events: none; /* Deixa você clicar em tudo livremente */
}

/* O brilho acompanhando o mouse */
.grid-glow,
.grid-glow-blur {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(161, 0, 255, 1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(161, 0, 255, 1) 1px, transparent 1px);
  background-size: 40px 40px;
  
  /* Recorte dinâmico exato da posição do mouse travado via variáveis CSS limitando 250px a partir do ponteiro */
  -webkit-mask-image: radial-gradient(
    circle 250px at var(--mx, 50%) var(--my, 50%),
    black 0%,
    transparent 100%
  );
  mask-image: radial-gradient(
    circle 250px at var(--mx, 50%) var(--my, 50%),
    black 0%,
    transparent 100%
  );
}

.grid-glow-blur {
  filter: blur(8px);
  opacity: 0.8;
}
</style>
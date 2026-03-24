<template>
  <div class="divider"></div>
</template>

<script setup>
</script>

<style scoped>
.divider {
  height: 2px;
  margin: 20px 0;
  border-radius: 2px;

  background: linear-gradient(
    90deg,
    #a100ff,
    #4a00ff,
    #a100ff
  );

  background-size: 300% 100%;
  animation: moveGradient 3s ease-in-out infinite alternate;

  opacity: 0.85;
}

@keyframes moveGradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>
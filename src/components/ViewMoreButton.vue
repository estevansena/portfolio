<template>
  <div class="wrapper">
<router-link :to="url" class="btn">
  <span>{{ text }}</span>
</router-link>
  </div>
</template>

<script setup>
defineProps({
  url: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: "VIEW MORE"
  }
})
</script>

<style scoped>


/* botão */
.btn {
  display: inline-block; /* 👈 importante */
  padding: 10px 20px;    /* 👈 controla o tamanho */
  font-size: 14px;
  font-family: sans-serif;
  text-decoration: none;
  color: white;
  background: #2b2b2b;
  border: 1px solid #444;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all 0.35s;
}

/* texto */
.btn span {
  position: relative;
  z-index: 2;
}

.btn:hover {
  background: linear-gradient(90deg, #a100ff, #4a00ff, #a100ff);
  background-size: 300% 100%;
  color: #ffffff;
  animation: moveGradient 3s ease-in-out infinite alternate;
  box-shadow: 0 4px 15px rgba(161, 0, 255, 0.4);
  opacity: 0.9;
  transform: translateY(-2px);
}


</style>
<template>
  <div class="wrapper">
    <a :href="url" target="_blank" class="btn">
      <span>{{ text }}</span>
    </a>
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
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* botão */
.btn {
  display: inline-block; /* 👈 importante */
  padding: 10px 20px;    /* 👈 controla o tamanho */
  font-size: 14px;
  font-family: sans-serif;
  text-decoration: none;
  color: #4d4d4d;
  border: 2px solid #333;
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

/* efeito hover */
.btn::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #a100ff;
  transition: all 0.35s;
}

.btn:hover {
  color: #fff;
}

.btn:hover::after {
  width: 100%;
}
</style>
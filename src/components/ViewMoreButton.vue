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
  display: inline-block;
  padding: 10px 24px;
  font-size: 13px;
  font-family: sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  color: rgba(0, 238, 255, 0.9);
  background: rgba(0, 238, 255, 0.04);
  border: 1px solid rgba(0, 238, 255, 0.5);
  box-shadow: 0 0 10px rgba(0, 238, 255, 0.25);
  text-align: center;
  position: relative;
  transition: all 0.2s ease-in-out;
  border-radius: 0;
}

/* texto */
.btn span {
  position: relative;
  z-index: 2;
}

.btn:hover {
  background: rgba(255, 0, 102, 0.15);
  color: #ff0066;
  border-color: rgba(255, 0, 102, 0.7);
  box-shadow: 0 0 15px rgba(255, 0, 102, 0.45);
  text-shadow: 0 0 8px rgba(255, 0, 102, 0.8);
  transform: translateY(-2px);
}


</style>
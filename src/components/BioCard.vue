<template>
  <div class="wrapper">
    <div class="card">
      <div class="image-box">
        <img :src="image" :alt="title" />
      </div>

      <div class="content">
        <h3 class="title">{{ title }}</h3>
        <p class="text">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  description: String
})
</script>

<style scoped>
/* FUNDO GRADIENT */
.wrapper {
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #ff7a18, #ff3d3d);
}

/* CARD BRANCO */
.card {
  position: relative;
  display: flex;
  align-items: center;
  background: #fff;
  width: 800px;
  padding: 40px 40px 40px 120px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

/* IMAGEM FLUTUANDO */
.image-box {
  position: absolute;
  left: -60px;
  width: 180px;
  height: 180px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* TEXTO */
.content {
  max-width: 500px;
}

.title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #111;
}

.text {
  color: #555;
  line-height: 1.5;
}

/* RESPONSIVO */
@media (max-width: 768px) {
  .card {
    flex-direction: column;
    padding: 80px 20px 20px;
    text-align: center;
  }

  .image-box {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -60px;
  }
}
</style>
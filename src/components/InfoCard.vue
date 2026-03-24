<template>
  <div class="card">
    <img :src="image" class="card-img-top" :alt="title">

    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>

      <p class="card-text">
        {{ text }}
      </p>

      <a :href="link" class="btn">
        {{ buttonText }}
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  text: String,
  link: String,
  buttonText: {
    type: String,
    default: 'Ver mais'
  }
})
</script>

<style scoped>
.card {
  width: 18rem;
  background: rgb(17, 17, 17);
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  transition: 0.3s;

}

.card:hover {
  transform: translateY(-5px);
  background: rgb(29, 29, 29);

}

.card-img-top {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-body {
  padding: 15px;
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #ffffff;

}

.card-text {
  font-size: 0.9rem;
  color: #777676;
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  padding: 8px 12px;
  background: #a100ff;
  color: white;
  text-decoration: none;
  transition: 0.3s;
  border-radius: 4px;
}

.btn:hover {
  background: linear-gradient(
    90deg,
    #a100ff,
    #4a00ff,
    #a100ff
  );

  background-size: 300% 100%;
  animation: moveGradient 3s ease-in-out infinite alternate;

  opacity: 0.9;
  transform: translateY(-2px);
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
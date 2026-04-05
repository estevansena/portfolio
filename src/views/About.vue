<template>
  <div class="hero">
    
    <!-- 👇 container da imagem -->
    <div class="image-wrapper">
      <img :src="profileImg" alt="Profile" class="profile-img" />

      <!-- 👇 partículas -->
      <span class="particle p1"></span>
      <span class="particle p2"></span>
      <span class="particle p3"></span>
      <span class="particle p4"></span>
    </div>

    <SectionTitle 
      firstName="Ab"
      lastName="out"
      subtitle="Frontend Developer | Interactive UI" 
    />

  </div>
</template>

<script setup>
import SectionTitle from '../components/SectionTitle.vue'
import profileImg from '../assets/images/profile.png'
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 80px;
  min-height: 100vh;
}

/* 👇 container com glow */
.image-wrapper {
  position: relative;
  width: 420px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 👇 imagem */
.profile-img {
  width: 500px;
  height: 500px;
  border-radius: 50%;
  z-index: 2;
  position: relative;

}


</style>
<template>
  <div class="title-wrapper">
    <h3 class="title">
      {{ firstName }}<span class="highlight">{{ lastName }}</span>
    </h3>

    <!-- 👇 agora dinâmico -->
    <p v-if="subtitle" class="subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  firstName: {
    type: String,
    default: 'Estevan'
  },
  lastName: {
    type: String,
    default: 'Sena'
  },
  subtitle: {                // 👈 NOVO PROP
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.title-wrapper {
  display: flex;
  flex-direction: column;
}

/* ===== NOME ===== */
.title {
  font-size: 6rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #ffffff;
  text-shadow: 
    0 0 60px rgba(0, 238, 255, 0.2);
  margin: 0 0 5px 0;
}

.highlight {
  color: #ff0066;
  -webkit-text-fill-color: #ff0066;
  text-shadow: 
    0 0 50px rgba(255, 0, 102, 0.3);
}

/* ===== SUBTITLE ===== */
.subtitle {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;

  color: rgba(0, 238, 255, 0.7);

  margin-top: 10px;
  max-width: 500px;

  padding: 12px 18px;
  background: rgba(0, 238, 255, 0.03);
  border-left: 2px solid rgba(0, 238, 255, 0.4);

  transition: all 0.3s ease;
}

.subtitle:hover {
  color: rgba(0, 238, 255, 1);
  text-shadow: 0 0 15px rgba(0,238,255,0.6);

  border-left: 2px solid rgba(0, 238, 255, 0.8);
}
</style>
<template>
  <div class="card">
    <div class="card-body">
      
      <div class="card-header">
        <img v-if="image" :src="image" class="avatar" alt="Avatar" />
        <h5 class="card-title">{{ title }}</h5>
      </div>

      <p class="card-text">
        {{ text }}
      </p>

      <div v-if="tags && tags.length" class="tags-container">
        <span 
          v-for="(tag, index) in tags" 
          :key="index" 
          class="tag-badge" 
          :style="getTagStyle(tag)"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  image: String,
  title: String,
  text: String,
  tags: {
    type: Array,
    default: () => []
  },
})

const tagColors = {
  javascript: { bg: '#F0DB4F', color: '#323330' },
  python: { bg: '#3776AB', color: '#ffffff' },
  'node.js': { bg: '#339939', color: '#ffffff' },
  puppeteer: { bg: '#40B5A4', color: '#ffffff' },
  'vue.js': { bg: '#4FC08D', color: '#ffffff' },
  html: { bg: '#E34F26', color: '#ffffff' },
  css: { bg: '#1572B6', color: '#ffffff' },
  react: { bg: '#61DAFB', color: '#000000' },
  java: { bg: '#b07219', color: '#ffffff' },
  typescript: { bg: '#3178C6', color: '#ffffff' },
  php: { bg: '#777BB4', color: '#ffffff' },
  ruby: { bg: '#CC342D', color: '#ffffff' },
  go: { bg: '#00ADD8', color: '#ffffff' },
  'c#': { bg: '#178600', color: '#ffffff' },
  'c++': { bg: '#f34b7d', color: '#ffffff' }
}

const hexToRgba = (hex, alpha) => {
  if (!hex || hex.length !== 7) return hex;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const getTagStyle = (tag) => {
  const norm = tag.toLowerCase();
  if (tagColors[norm]) {
    const baseColor = tagColors[norm].bg;
    return { 
      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
      color: baseColor,
      border: `1px solid rgba(255, 255, 255, 0.1)`
    };
  }
  return { 
    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
    color: '#aaaaaa',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };
}
</script>

<style scoped>
.card {
  width: 18rem;
  background: rgba(15, 15, 15, 0.65) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.5) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  border-radius: 0;
}

.card:hover {
  transform: translateY(-5px);
  background: rgba(25, 25, 25, 0.8) !important;
  box-shadow: 0 15px 50px rgba(0,0,0,0.7) !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
}

.card-body {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 0;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.card-title {
  font-size: 1.2rem;
  margin: 0;
  color: #ffffff;
}

.card-text {
  font-size: 0.9rem;
  color: #777676;
  margin-bottom: 15px;
  flex-grow: 1;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 0;
}

.tag-badge {
  font-size: 0.65rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 0;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.actions-container {
  display: flex;
  gap: 10px;
  margin-top: auto;
}


</style>
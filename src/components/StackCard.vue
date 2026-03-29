<template>
  <div 
    class="card" 
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseleave="resetRotation"
    :style="{ 
      transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` 
    }"
  >
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
import { ref, reactive } from 'vue'

defineProps({
  image: String,
  title: String,
  text: String,
  tags: {
    type: Array,
    default: () => []
  },
})

const cardRef = ref(null)
const rotation = reactive({ x: 0, y: 0 })

const handleMouseMove = (e) => {
  if (!cardRef.value) return
  
  const card = cardRef.value
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const rotateX = ((y - centerY) / centerY) * -12
  const rotateY = ((x - centerX) / centerX) * 12
  
  rotation.x = rotateX
  rotation.y = rotateY
}

const resetRotation = () => {
  rotation.x = 0
  rotation.y = 0
}

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
  background:
    linear-gradient(rgba(13, 4, 30, 0.85), rgba(13, 4, 30, 0.85)),
    repeating-linear-gradient(
      0deg, transparent, transparent 29px,
      rgba(0, 238, 255, 0.03) 29px, rgba(0, 238, 255, 0.03) 30px
    ),
    repeating-linear-gradient(
      90deg, transparent, transparent 29px,
      rgba(0, 238, 255, 0.03) 29px, rgba(0, 238, 255, 0.03) 30px
    ) !important;
  backdrop-filter: blur(10px) !important;
  -webkit-backdrop-filter: blur(10px) !important;
  overflow: hidden;
  border: 1px solid rgba(0, 238, 255, 0.6) !important;
  box-shadow: 0 0 8px rgba(0, 238, 255, 0.2), inset 0 0 15px rgba(0, 238, 255, 0.01) !important;
  transition: transform 0.1s ease-out, border-color 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  transform-style: preserve-3d;
}

.card:hover {
  border-color: rgba(0, 238, 255, 0.9) !important;
  box-shadow: 0 0 15px rgba(0, 238, 255, 0.35), 0 0 30px rgba(0, 238, 255, 0.1), inset 0 0 20px rgba(0, 238, 255, 0.02) !important;
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
  border: 1px solid rgba(0, 238, 255, 0.5);
  box-shadow: 0 0 6px rgba(0, 238, 255, 0.4);
  transform: translateZ(60px); /* Avatar salta mais que o título */
}

.card-title {
  font-size: 1.2rem;
  margin: 0;
  color: #ffffff;
  text-shadow: 0 0 8px rgba(0, 238, 255, 0.5);
  letter-spacing: 1px;
  text-transform: uppercase;
  transform: translateZ(50px);
}

.card-text {
  font-size: 0.9rem;
  color: rgba(0, 238, 255, 0.5);
  margin-bottom: 15px;
  flex-grow: 1;
  letter-spacing: 0.3px;
  transform: translateZ(30px);
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 0;
  transform: translateZ(40px);
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
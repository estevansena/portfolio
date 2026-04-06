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
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ text }}</p>

      <div v-if="tags && tags.length" class="tags">
        <span 
          v-for="(tag, index) in tags" 
          :key="index" 
          class="tag" 
          :style="getTagStyle(tag)"
        >
          {{ tag }}
        </span>
      </div>

      <div class="actions">
        <a v-if="githubLink" :href="githubLink" target="_blank" class="btn btn-github">
          <GithubOutlined /> GitHub
        </a>
        <a v-if="projectLink" :href="projectLink" target="_blank" class="btn btn-project">
          <LinkOutlined /> View Online
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons-vue'

defineProps({
  title: String,
  text: String,
  tags: { type: Array, default: () => [] },
  githubLink: String,
  projectLink: String
})

const cardRef = ref(null)
const rotation = reactive({ x: 0, y: 0 })

const handleMouseMove = (e) => {
  if (!cardRef.value || window.innerWidth < 768) return
  
  const card = cardRef.value
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  rotation.x = ((y - centerY) / centerY) * -12
  rotation.y = ((x - centerX) / centerX) * 12
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

const getTagStyle = (tag) => {
  const norm = tag.toLowerCase()
  if (tagColors[norm]) {
    return { 
      backgroundColor: 'rgba(255, 255, 255, 0.05)', 
      color: tagColors[norm].bg,
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }
  }
  return { 
    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
    color: '#aaaaaa',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  }
}
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 320px;
  background:
    linear-gradient(rgba(13, 4, 30, 0.9), rgba(13, 4, 30, 0.9)),
    repeating-linear-gradient(
      0deg, transparent, transparent 29px,
      rgba(0, 238, 255, 0.03) 29px, rgba(0, 238, 255, 0.03) 30px
    ),
    repeating-linear-gradient(
      90deg, transparent, transparent 29px,
      rgba(0, 238, 255, 0.03) 29px, rgba(0, 238, 255, 0.03) 30px
    );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 238, 255, 0.6);
  box-shadow: 0 0 8px rgba(0, 238, 255, 0.2);
  transition: transform 0.1s ease-out, border-color 0.3s, box-shadow 0.3s;
}

.card:hover {
  border-color: rgba(0, 238, 255, 0.9);
  box-shadow: 0 0 20px rgba(0, 238, 255, 0.3);
}

.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.card-title {
  font-size: 1.1rem;
  color: #fff;
  text-shadow: 0 0 8px rgba(0, 238, 255, 0.5);
  letter-spacing: 1px;
  text-transform: uppercase;
}

.card-text {
  font-size: 0.9rem;
  color: rgba(0, 238, 255, 0.6);
  line-height: 1.5;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 0.65rem;
  font-weight: 600;
  padding: 4px 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.actions {
  display: flex;
  gap: 10px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  color: rgba(0, 238, 255, 0.8);
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.2s ease;
  border: 1px solid rgba(0, 238, 255, 0.35);
  background: rgba(0, 238, 255, 0.04);
}

.btn:hover {
  background: rgba(255, 0, 102, 0.15);
  color: #ff0066;
  border-color: rgba(255, 0, 102, 0.7);
  box-shadow: 0 0 12px rgba(255, 0, 102, 0.4);
}

/* Mobile */
@media (max-width: 768px) {
  .card {
    max-width: 100%;
  }

  .card-body {
    padding: 16px;
  }

  .card-title {
    font-size: 1rem;
  }

  .card-text {
    font-size: 0.85rem;
  }

  .actions {
    flex-direction: column;
  }

  .btn {
    justify-content: center;
  }
}
</style>

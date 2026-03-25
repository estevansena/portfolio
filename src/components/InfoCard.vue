<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>

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

      <div class="actions-container">
        <a 
          v-if="githubLink" 
          :href="githubLink" 
          target="_blank" 
          class="btn btn-github"
        >
          <GithubOutlined /> GitHub
        </a>
        <a 
          v-if="projectLink" 
          :href="projectLink" 
          target="_blank" 
          class="btn btn-project"
        >
          <LinkOutlined /> View Online
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GithubOutlined, LinkOutlined } from '@ant-design/icons-vue'

defineProps({
  title: String,
  text: String,
  tags: {
    type: Array,
    default: () => []
  },
  githubLink: String,
  projectLink: String
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
      backgroundColor: hexToRgba(baseColor, 0.15), 
      color: baseColor,
      border: `1px solid ${hexToRgba(baseColor, 0.3)}`
    };
  }
  return { 
    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
    color: '#ccc',
    border: '1px solid rgba(255, 255, 255, 0.2)'
  };
}
</script>

<style scoped>
.card {
  width: 18rem;
  background: rgb(17, 17, 17);
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  border-radius: 0;
}

.card:hover {
  transform: translateY(-5px);
  background: rgb(29, 29, 29);
}

.card-body {
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-title {
  font-size: 1.2rem;
  margin: 0 0 10px 0;
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
  margin-bottom: 20px;
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

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 8px 12px;
  color: white;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 0;
  transition: 0.3s;
  flex: 1; /* Make buttons grow equally if both are present */
}

.btn-project {
  background: #2b2b2b;
  border: 1px solid #444;
}

.btn-project:hover {
  background: linear-gradient(90deg, #a100ff, #4a00ff, #a100ff);
  background-size: 300% 100%;
  animation: moveGradient 3s ease-in-out infinite alternate;
  opacity: 0.9;
  transform: translateY(-2px);
}

.btn-github {
  background: #2b2b2b;
  border: 1px solid #444;
}

.btn-github:hover {
  background: linear-gradient(90deg, #a100ff, #4a00ff, #a100ff);
  background-size: 300% 100%;
  animation: moveGradient 3s ease-in-out infinite alternate;
  opacity: 0.9;
  transform: translateY(-2px);
}
</style>
<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li>
          <HomeOutlined class="icon"/>
          <router-link to="/Home">Home</router-link>
        </li>

        <li>
          <ProjectOutlined class="icon"/>
          <router-link to="/Projects">Projects</router-link>
        </li>

        <li>
          <ProjectOutlined class="icon"/>
          <router-link to="/TechStack">Tech Stack</router-link>
        </li>

        <li>
          <CoffeeOutlined class="icon"/>
          <router-link to="/About">About</router-link>
        </li>

        <li>
          <CoffeeOutlined class="icon"/>
          <router-link to="/About">Contact Me</router-link>
        </li>

         <li>
          <CoffeeOutlined class="icon"/>
          <router-link to="/About">Download</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { 
  HomeOutlined,
  ProjectOutlined,
  CoffeeOutlined
} from '@ant-design/icons-vue'
</script>

<style scoped>
.sidebar {
  width: 100%;
  height: 80px; /* 🔥 define altura do header */
  display: flex;
  align-items: center;
  padding: 0 40px;
}

/* UL em linha */
ul { 
  list-style: none; 
  padding: 0; 
  display: flex;
  align-items: center;
  gap: 20px;
}

li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 8px 12px;
  border: 1px solid transparent;
  background: transparent;
  transition: transform 0.15s ease-out;
  cursor: pointer;
}

.icon { 
  font-size: 18px; 
  color: rgba(0, 238, 255, 0.5); 
  transition: color 0.1s; 
}

a {
  color: rgba(0, 238, 255, 0.5); 
  text-decoration: none;
}


li:has(.router-link-active) .icon { 
  color: #ff0066; 
}

li:has(.router-link-active) a {
  color: #ff0066;
  font-weight: 700;
  text-shadow: 0 0 8px rgba(255, 0, 102, 0.8);
}


li:hover .icon { 
  color: #00eeff; 
}

li:hover a { 
  color: #00eeff; 
}
</style>
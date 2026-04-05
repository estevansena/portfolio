<template>
  <aside class="headermenu">
    <nav>
      <ul>
        <li>
          <router-link to="/Home">Home</router-link>
        </li>

        <li>
          <router-link to="/Projects">Projects</router-link>
        </li>

        <li>
          <router-link to="/TechStack">Tech Stack</router-link>
        </li>

        <li>
          <router-link to="/About">About</router-link>
        </li>

        <li>
          <router-link to="/Contact">Contact Me</router-link>
        </li>

        <li>
          <router-link to="/Download">Download</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
// sem imports necessários
</script>

<style scoped>
.headermenu {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 40px;
}

ul { 
  list-style: none; 
  padding: 0; 
  display: flex;
  align-items: center;
  gap: 10px;
}

li {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 8px 12px;
  border: 1px solid transparent;
  background: transparent;
  transition: transform 0.15s ease-out;
  cursor: pointer;
}

a {
  color: rgba(0, 238, 255, 0.5); 
  text-decoration: none;
}

/* ativo */
li:has(.router-link-active) a {
  color: #ff0066;
  font-weight: 700;
  text-shadow: 0 0 8px rgba(255, 0, 102, 0.8);
}

/* hover */
li:hover a { 
  color: #00eeff; 
}
</style>
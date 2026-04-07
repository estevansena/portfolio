<template>
  <header class="header">
    <button 
      class="hamburger"
      :class="{ active: isOpen }"
      @click="toggleMenu"
      aria-label="Menu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav class="nav-desktop">
      <router-link v-for="item in menuItems" :key="item.path" :to="item.path">
        {{ item.label }}
      </router-link>
    </nav>

    <div class="nav-mobile" :class="{ open: isOpen }" @click="closeMenu">
      <nav @click.stop>
        <router-link 
          v-for="item in menuItems" 
          :key="item.path" 
          :to="item.path"
          @click="closeMenu"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/Projects', label: 'Projects' },
  { path: '/TechStack', label: 'Tech Stack' },
  { path: '/About', label: 'About' },
  { path: '/ContactMe', label: 'Contact Me' },
  { path: '/Download', label: 'Download' }
]

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

function closeMenu() {
  isOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700&display=swap');

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  z-index: 100;
  background: transparent;
  font-family: 'Orbitron', sans-serif;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 101;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: #00eeff;
  transition: all 0.3s ease;
  box-shadow: 0 0 8px rgba(0, 238, 255, 0.6);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Desktop Nav */
.nav-desktop {
  display: flex;
  gap: 24px;
}

.nav-desktop a {
  color: #fff;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  transition: color 0.2s, text-shadow 0.2s;
  padding: 8px 0;
}

.nav-desktop .router-link-active {
  color: #00eeff;
  text-shadow: 0 0 10px rgba(0, 238, 255, 0.8);
}

.nav-desktop a:hover {
  color: #ff0066;
  text-shadow: 0 0 10px rgba(255, 0, 102, 0.8);
}

/* Mobile Nav */
.nav-mobile {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.92);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 99;
}

.nav-mobile.open {
  opacity: 1;
  visibility: visible;
}

.nav-mobile nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 32px;
}

.nav-mobile a {
  color: #fff;
  text-decoration: none;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  transition: color 0.2s, text-shadow 0.2s;
}

.nav-mobile .router-link-active {
  color: #00eeff;
  text-shadow: 0 0 15px rgba(0, 238, 255, 0.8);
}

.nav-mobile a:hover {
  color: #ff0066;
  text-shadow: 0 0 15px rgba(255, 0, 102, 0.8);
}

/* Tablet */
@media (max-width: 1024px) {
  .nav-desktop {
    gap: 16px;
  }

  .nav-desktop a {
    font-size: 11px;
    letter-spacing: 1px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .header {
    padding: 0 20px;
  }

  .hamburger {
    display: flex;
  }

  .nav-desktop {
    display: none;
  }

  .nav-mobile {
    display: block;
  }
}
</style>

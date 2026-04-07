<template>
  <div class="app">
    <CanvasBackground />
      <DarkModeSwitch />

        <div class="header-container">

    <HeaderMenu />
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import HeaderMenu from './components/HeaderMenu.vue'
import CanvasBackground from './components/CanvasBackground.vue'
import DarkModeSwitch from './components/DarkModeSwitch.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header-container {
  position: fixed;
  top: 355px;
  left: 34px;
  z-index: 10;
}

html, body {
  height: 100%;
  overflow-x: hidden;
}

.app {
  min-height: 100vh;
  min-height: 100dvh;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

body.dark {
  background: #0f0f0f;
  color: #ffffff;
}

body.dark a {
  color: #00ffff;
}
</style>

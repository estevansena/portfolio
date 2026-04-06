<template>
  <div class="app">
    <CanvasBackground />
    <HeaderMenu />
    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import HeaderMenu from './components/HeaderMenu.vue'
import CanvasBackground from './components/CanvasBackground.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow-x: hidden;
}

.app {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  padding-left: 60px;
  padding-right: 40px;
  padding-top: 70px;
  display: flex;
  align-items: center;
}

/* Tablet */
@media (max-width: 1024px) {
  .main {
    padding-left: 40px;
    padding-right: 24px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .main {
    padding-left: 20px;
    padding-right: 16px;
    padding-top: 70px;
    align-items: flex-start;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .main {
    padding-left: 16px;
    padding-right: 12px;
  }
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
</style>

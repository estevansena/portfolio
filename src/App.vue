<template>
  <div class="layout">
      <CanvasBackground />

    <Sidebar />

    <main class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import CanvasBackground from "./components/CanvasBackground.vue";
</script>

<style>
.layout {
  display: flex;
}

.content {
  margin-left: 220px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
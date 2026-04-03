<template>
  <div class="layout">
    <CanvasBackground />

    <!-- HEADER -->
    <Sidebar />

    <!-- CONTEÚDO -->
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
  flex-direction: column; /* 🔥 agora é vertical */
}

body {
  overflow-x: hidden;
}

/* CONTEÚDO */
.content {
  width: 100%;
  min-height: calc(100vh - 80px); /* altura do header */
  
  display: flex;
  justify-content: flex-start; /* 👈 esquerda */
  align-items: center;         /* 👈 centro vertical */

  padding-left: 80px;          /* ajuste fino da margem */
  padding-right: 20px;
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
<template>
  <div class="layout">
    <Sidebar />

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
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
</style>
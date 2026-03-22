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
  margin-left: 250px; /* espaço da sidebar */
  padding: 20px;
  width: 100%;
}
</style>
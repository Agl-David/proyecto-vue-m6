<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f5f7fa;
}

.container {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}
</style>

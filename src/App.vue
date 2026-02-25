<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import Analytics from '@vercel/analytics/next'
</script>

<template>
  <div id="app-wrapper">
    <TheHeader />
    <RouterView />
    <Analytics />
  </div>
</template>

<style scoped>
/* General Layout Styles for the entire application shell */
#app-wrapper {
  background-color: #1a5f91;
  color: #ffffff;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
}
</style>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const progress = ref(0)
let ticking = false

function update() {
  const doc = document.documentElement
  const max = doc.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(window.scrollY / max, 1) : 0
  ticking = false
}

function onScroll() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(update)
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  update()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})
</script>

<template>
  <div class="scroll-progress" aria-hidden="true">
    <div class="scroll-progress-bar" :style="{ transform: `scaleX(${progress})` }"></div>
  </div>
</template>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 100;
  pointer-events: none;
}

.scroll-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  transform-origin: 0 50%;
  transform: scaleX(0);
}
</style>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const RADIUS = 20
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

const visible = ref(false)
const progress = ref(0)
let ticking = false

function update() {
  const doc = document.documentElement
  const max = doc.scrollHeight - window.innerHeight
  visible.value = window.scrollY > 400
  progress.value = max > 0 ? Math.min(window.scrollY / max, 1) : 0
  ticking = false
}

function onScroll() {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(update)
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  update()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <Transition name="backtotop">
    <button
      v-if="visible"
      type="button"
      class="back-to-top"
      aria-label="Back to top"
      title="Back to top"
      @click="scrollToTop"
    >
      <svg class="progress-ring" viewBox="0 0 48 48" width="48" height="48" aria-hidden="true">
        <circle class="ring-track" cx="24" cy="24" :r="RADIUS"></circle>
        <circle
          class="ring-fill"
          cx="24"
          cy="24"
          :r="RADIUS"
          :stroke-dasharray="CIRCUMFERENCE"
          :stroke-dashoffset="CIRCUMFERENCE * (1 - progress)"
        ></circle>
      </svg>
      <svg
        class="arrow-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5"></path>
        <path d="m5 12 7-7 7 7"></path>
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 90;
  width: 48px;
  height: 48px;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: var(--bg);
  color: var(--text-muted);
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: color 0.3s ease, transform 0.3s ease;
}

.back-to-top:hover {
  color: var(--text-strong);
  transform: translateY(-3px);
}

.progress-ring {
  position: absolute;
  inset: 0;
  transform: rotate(-90deg);
}

.ring-track {
  fill: none;
  stroke: var(--border-1);
  stroke-width: 2.5;
}

.ring-fill {
  fill: none;
  stroke: var(--accent);
  stroke-width: 2.5;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.15s linear;
}

.arrow-icon {
  position: relative;
  z-index: 1;
}

.backtotop-enter-active,
.backtotop-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.backtotop-enter-from,
.backtotop-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (max-width: 600px) {
  .back-to-top {
    right: 1rem;
    bottom: 1rem;
  }
}
</style>

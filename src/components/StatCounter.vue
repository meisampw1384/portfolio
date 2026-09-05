<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  value: { type: String, required: true },
})

// Parse values like "10+", "3+", "42" into prefix / number / suffix.
const match = props.value.match(/^(\D*)(\d+)(.*)$/)
const prefix = match?.[1] ?? ''
const target = Number(match?.[2] ?? 0)
const suffix = match?.[3] ?? ''

const display = ref(String(target))
const el = ref(null)
let observer = null
let raf = null

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion || !target || !el.value) return

  display.value = '0'
  observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return
      observer.disconnect()
      const duration = 1300
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        display.value = String(Math.round(target * eased))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    },
    { threshold: 0.4 }
  )
  observer.observe(el.value)
})

onUnmounted(() => {
  observer?.disconnect()
  if (raf) cancelAnimationFrame(raf)
})
</script>

<template>
  <span ref="el" class="stat-counter">{{ prefix }}{{ display }}{{ suffix }}</span>
</template>

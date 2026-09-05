<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import CommandPalette from './components/CommandPalette.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import BackToTop from './components/BackToTop.vue'
import { useCommandPalette } from './composables/useCommandPalette'

const { toggle } = useCommandPalette()

function onGlobalKeydown(e) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    toggle()
  }
}

onMounted(() => window.addEventListener('keydown', onGlobalKeydown))
onUnmounted(() => window.removeEventListener('keydown', onGlobalKeydown))
</script>

<template>
  <div id="app-wrapper">
    <ScrollProgress />
    <TheHeader />
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <TheFooter />
    <BackToTop />
    <CommandPalette />
  </div>
</template>


<style scoped>
#app-wrapper {
  background-color: var(--bg);
  color: var(--text);
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
}

/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>

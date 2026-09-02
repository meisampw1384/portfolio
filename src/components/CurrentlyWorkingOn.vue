<script setup>
const items = [
  {
    icon: '🛰️',
    label: 'Building',
    text: 'Satellite imagery download project at ISCAN',
  },
  {
    icon: '⚛️',
    label: 'Learning',
    text: 'React alongside the project',
  },
  {
    icon: '🤖',
    label: 'Exploring',
    text: 'AI Agents',
  },
  {
    icon: '🏗️',
    label: 'Studying',
    text: 'System Design',
  },
  {
    icon: '🔧',
    label: 'Learning',
    text: 'gRPC with Go',
  },
]
</script>

<template>
  <section class="currently-section">
    <h2 class="section-title" v-animate="'fade-up'">Currently</h2>
    <div class="items-grid">
      <div
        v-for="(item, i) in items"
        :key="item.label + item.text"
        class="item-card"
        v-animate="{ animation: 'zoom-in', delay: i * 80 }"
      >
        <span class="item-icon">{{ item.icon }}</span>
        <div class="item-content">
          <span class="item-label">{{ item.label }}</span>
          <p class="item-text">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.currently-section {
  padding: 0 0 4rem 0;
}

.section-title {
  font-family: 'Lora', serif;
  font-size: 2rem;
  margin-bottom: 2.5rem;
  text-align: center;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.item-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: var(--surface-2);
  backdrop-filter: blur(8px);
  border: 1px solid var(--border-1);
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.item-card:hover {
  background: var(--surface-2-hover);
  border-color: var(--border-3);
}

.item-icon {
  font-size: 1.6rem;
  line-height: 1;
  flex-shrink: 0;
  margin-top: 2px;
}

.item-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.item-label {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-faint);
}

.item-text {
  font-size: 0.93rem;
  color: var(--text);
  line-height: 1.4;
}
</style>

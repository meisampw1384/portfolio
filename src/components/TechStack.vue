<script setup>
const techItems = [
  { name: 'Python', color: '#3776AB' },
  { name: 'Django', color: '#092E20' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Vue.js', color: '#4FC08D' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Java', color: '#ED8B00' },
  { name: 'Spring Boot', color: '#6DB33F' },
  { name: 'Go', color: '#00ADD8' },
  { name: 'C++', color: '#00599C' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'gRPC', color: '#00B0AD' },
  { name: 'Linux', color: '#FCC624' },
  { name: 'Git', color: '#F05032' },
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
]
</script>

<template>
  <section class="tech-stack-section">
    <h2 class="section-title" v-animate="'fade-up'">Tech Stack</h2>
    <div class="tech-grid" v-animate="{ animation: 'fade-up', delay: 150 }">
      <div v-for="tech in techItems" :key="tech.name" class="tech-item">
        <div class="tech-dot" :style="{ backgroundColor: tech.color }"></div>
        <span class="tech-name">{{ tech.name }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tech-stack-section {
  padding: 2rem 0;
}

.section-title {
  font-family: 'Lora', serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.1rem;
  background: var(--surface-2);
  backdrop-filter: blur(6px);
  border: 1px solid var(--border-1);
  border-radius: 10px;
  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
}

.tech-item:hover {
  background: var(--surface-2-hover);
  border-color: var(--border-3);
  transform: translateY(-2px);
}

.tech-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 8px currentColor;
}

.tech-name {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text);
  white-space: nowrap;
}
</style>

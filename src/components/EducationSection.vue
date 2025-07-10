<script setup>
const education = {
  degree: 'Bachelor of Science in Computer Engineering',
  university: 'Isfahan University of Technology (IUT)',
  duration: '2023 – Present',
  description: 'Focusing on core computer science principles, including algorithms, data structures, and software development methodologies.'
};
</script>

<template>
  <section class="resume-column">
    <h2 class="column-title">Education</h2>
    <div class="timeline-item">
      <h3 class="item-title">{{ education.degree }}</h3>
      <p class="item-subtitle">{{ education.university }}</p>
      <p class="item-duration">{{ education.duration }}</p>
      <p class="item-description">{{ education.description }}</p>
    </div>
  </section>
</template>

<style scoped>

.column-title {
  font-family: 'Lora', serif;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.5rem;
}

/* Timeline style for Education */
.timeline-item {
  position: relative;
  padding-left: 2rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #1a5f91;
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 18px;
  bottom: 0;
  width: 2px;
  background-color: rgba(255, 255, 255, 0.2);
}

.item-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 0.25rem; }
.item-subtitle { font-size: 1rem; color: rgba(255, 255, 255, 0.9); margin-bottom: 0.25rem; }
.item-duration { font-size: 0.9rem; color: rgba(255, 255, 255, 0.7); margin-bottom: 1rem; }
</style>

<script setup>
const experiences = [
  {
    role: 'Backend Developer',
    company: 'ISCAN',
    type: 'Full-time',
    period: 'Jun 2026 – Present',
    location: 'Isfahan Science and Technology Town (ISTT) · On-site',
    technologies: ['FastAPI', 'Docker'],
  },
  {
    role: 'Backend Developer',
    company: 'Tafavot Co.',
    type: 'Full-time',
    period: 'Jul 2025 – Sep 2025',
    location: 'Isfahan, Iran · On-site',
    technologies: ['Java', 'Spring Boot'],
  },
]
</script>

<template>
  <section class="experience-section">
    <h2 class="column-title">Work Experience</h2>
    <div class="timeline">
      <div
        v-for="(exp, i) in experiences"
        :key="exp.company + exp.role"
        class="timeline-item"
        :class="{ 'is-last': i === experiences.length - 1 }"
        v-animate="{ animation: 'fade-left', delay: i * 150 }"
      >
        <div class="timeline-dot" :class="{ active: i === 0 }"></div>
        <div class="timeline-card">
          <div class="card-header">
            <div>
              <h3 class="role">{{ exp.role }}</h3>
              <p class="company">{{ exp.company }} · {{ exp.type }}</p>
            </div>
            <span class="period">{{ exp.period }}</span>
          </div>
          <p v-if="exp.location" class="location">{{ exp.location }}</p>
          <div class="tech-tags">
            <span v-for="tech in exp.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  /* no extra padding needed — parent handles it */
}

.column-title {
  font-family: 'Lora', serif;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: var(--text-strong);
  border-bottom: 2px solid var(--border-3);
  padding-bottom: 0.5rem;
}

/* Timeline layout */
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline-item {
  position: relative;
  padding-left: 2.5rem;
  padding-bottom: 2.5rem;
}

.timeline-item.is-last {
  padding-bottom: 0;
}

/* Vertical line */
.timeline-item::after {
  content: '';
  position: absolute;
  left: 7px;
  top: 18px;
  bottom: 0;
  width: 2px;
  background: var(--border-2);
}

.timeline-item.is-last::after {
  display: none;
}

/* Dot */
.timeline-dot {
  position: absolute;
  left: 0;
  top: 6px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--surface-3);
  border: 2px solid var(--border-strong);
  z-index: 1;
}

.timeline-dot.active {
  background: var(--accent);
  border-color: var(--accent);
  box-shadow: 0 0 10px var(--accent-glow);
}

/* Card */
.timeline-card {
  background: var(--surface-1);
  border: 1px solid var(--border-1);
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  box-shadow: var(--card-shadow);
  transition: background 0.3s ease, border-color 0.3s ease;
}

.timeline-card:hover {
  background: var(--surface-1-hover);
  border-color: var(--border-2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.role {
  font-family: 'Lora', serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-strong);
  margin-bottom: 0.15rem;
}

.company {
  font-size: 0.92rem;
  color: var(--text-subtle);
}

.period {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-faint);
  white-space: nowrap;
  flex-shrink: 0;
}

.location {
  font-size: 0.82rem;
  color: var(--text-ghost);
  margin-bottom: 0.75rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.5rem;
}

.tech-tag {
  background: var(--accent-soft);
  color: var(--accent-text);
  font-size: 0.72rem;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 20px;
  letter-spacing: 0.02em;
}
</style>

<script setup>
import EducationSection from '@/components/EducationSection.vue'
import WorkExperience from '@/components/WorkExperience.vue'
import SkillsSection from '@/components/SkillsSection.vue'
</script>

<template>
  <main class="resume-page">
    <header class="page-header">
      <h1>My Resume</h1>
      <p class="subtitle">A summary of my professional experience, education, and technical skills.</p>
    </header>

    <div class="resume-content">
      <div class="resume-left">
        <WorkExperience />
        <EducationSection />
      </div>
      <div class="resume-right">
        <SkillsSection />
      </div>
    </div>
  </main>
</template>

<style scoped>
.resume-page {
  padding: 4rem 5%;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

h1 {
  font-family: 'Lora', serif;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: var(--text-strong);
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.resume-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 4rem;
}

.resume-left {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}

@media (max-width: 820px) {
  .resume-content {
    grid-template-columns: minmax(0, 1fr);
    gap: 3rem;
  }
}

@media (max-width: 600px) {
  .resume-page {
    padding: 2.5rem 5%;
  }

  .page-header {
    margin-bottom: 2.5rem;
  }

  h1 {
    font-size: 2.1rem;
  }

  .subtitle {
    font-size: 1rem;
    margin-bottom: 0;
  }

  .resume-left {
    gap: 2.5rem;
  }
}
</style>

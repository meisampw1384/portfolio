<script setup>
// Import the new components
import EducationSection from '@/components/EducationSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
</script>

<template>
  <main class="resume-page">
    <header class="page-header">
      <h1>My Resume</h1>
      <p class="subtitle">A summary of my academic background and technical skills.</p>
      <RouterLink to="/python-django-resume" class="specialized-resume-link">
        View My Specialized Python & Django Resume
      </RouterLink>
    </header>

    <div class="resume-content">
      <!-- Use the components -->
      <EducationSection />
      <SkillsSection />
    </div>
  </main>
</template>

<style scoped>
/* These styles are for the page layout, not the components themselves */
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
}
.subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
}

.resume-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

/* Responsive Design */
@media (max-width: 820px) {
  .resume-content {
    grid-template-columns: 1fr; /* Stack columns on smaller screens */
  }
}

.specialized-resume-link {
  display: inline-block;
  margin-top: 2rem;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}
.specialized-resume-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: #fff;
  transform: translateY(-2px);
}
</style>

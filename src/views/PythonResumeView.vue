<!-- src/views/PythonResumeView.vue -->
<script setup>
import PythonJourneySection from '@/components/PythonJourneySection.vue'
import PythonSkillsSection from '@/components/PythonSkillsSection.vue'
</script>

<template>
  <main class="content-area">
    <div class="page-title-container">
      <h1>Python & Django Resume</h1>
      <p>A detailed look at my experience and skills in the Python ecosystem.</p>
    </div>
    <!-- Re-using the same grid layout from ResumeView -->
    <div class="resume-grid">
      <PythonJourneySection />
      <PythonSkillsSection />
    </div>
  </main>
</template>

<style scoped>
.content-area {
  padding: 4rem 5%;
  animation: fadeIn 0.3s ease-out;
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
.page-title-container {
  text-align: center;
  margin-bottom: 4rem;
}
.page-title-container h1 {
  font-family: 'Lora', serif;
  font-size: 3rem;
  margin-bottom: 0.5rem;
}
.page-title-container p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
}
.resume-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>

<script setup>
import ProjectsSection from '@/components/ProjectsSection.vue'
</script>

<template>
  <main class="content-area">
    <!--
      1. The <Transition> wrapper is removed.
      2. We add a class directly to the component to trigger the animation.
    -->
    <ProjectsSection class="fade-in-on-load" />
  </main>
</template>

<style scoped>
/*
  3. Define the keyframes for our animation.
*/
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

/*
  4. Create a class that USES the keyframes.
     This is the missing piece from your original code.
*/
.fade-in-on-load {
  animation: fadeIn 1s ease-out forwards;
}

.content-area {
  padding: 0 5%;
}

.projects-section {
  padding-top: 4rem;
  padding-bottom: 6rem;
}
</style>

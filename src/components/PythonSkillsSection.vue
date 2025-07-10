<script setup>
const skillCategories = [
  { title: 'Core Backend', skills: ['Python', 'Django', 'Django REST Framework', 'APIs'] },
  { title: 'Databases & ORM', skills: ['MariaDB', 'SQL Server', 'Django ORM'] },
  { title: 'Testing & Deployment', skills: ['Docker'] },
  { title: 'Related Libraries', skills: ['Pandas', 'NumPy','scikit-learn','TensorFlow','Matplotlib' ] },
]
</script>

<template>
  <section class="resume-column">
    <h2 class="column-title">Specialized Skills</h2>
    <!-- The structure is identical to SkillsSection.vue -->
    <div class="skills-container">
      <div v-for="category in skillCategories" :key="category.title" class="skill-category">
        <h4 class="category-title">{{ category.title }}</h4>
        <ul class="skills-list">
          <li v-for="skill in category.skills" :key="skill" class="skill-item">
            {{ skill }}
          </li>
        </ul>
      </div>
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

.skills-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.category-title {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
}
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
}
.skill-item {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: background-color 0.3s ease;
}
.skill-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>

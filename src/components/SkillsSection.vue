<script setup>
// Skill data is local to this component
const skillCategories = [
  { title: 'Programming Languages', skills: ['Python', 'C/C++', 'JavaScript', 'Java','HTML/CSS'] },
  { title: 'Frameworks & Libraries', skills: ['Vue.js', 'Django', 'Django Rest Framework','Spring Boot'] },
  { title: 'Databases', skills: ['MariaDB','SQL Server'] },
  { title: 'Tools & Technologies', skills: ['Git & GitHub', 'Docker', 'Socket Programming','Linux','Packet Tracer'] },
];
</script>

<template>
  <section class="resume-column">
    <h2 class="column-title">Technical Skills</h2>
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

.skills-container { display: flex; flex-direction: column; gap: 2rem; }
.category-title { font-size: 1.1rem; font-weight: 500; margin-bottom: 1rem; color: rgba(255, 255, 255, 0.9); }
.skills-list { display: flex; flex-wrap: wrap; gap: 0.75rem; list-style: none; padding: 0; }
.skill-item { background-color: rgba(255, 255, 255, 0.1); padding: 8px 16px; border-radius: 8px; font-size: 0.95rem; transition: background-color 0.3s ease; }
.skill-item:hover { background-color: rgba(255, 255, 255, 0.2); }
</style>

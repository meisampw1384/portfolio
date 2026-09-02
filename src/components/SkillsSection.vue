<script setup>
const skillCategories = [
  { title: 'Programming Languages', skills: ['Python', 'C/C++', 'JavaScript', 'Java', 'Go', 'HTML/CSS'] },
  {
    title: 'Frameworks & Libraries',
    skills: ['Vue.js', 'React', 'Django', 'Django Rest Framework', 'Spring Boot', 'FastAPI'],
  },
  { title: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'MariaDB', 'SQL Server'] },
  {
    title: 'Tools & Technologies',
    skills: ['Git & GitHub', 'Docker', 'Redis', 'gRPC', 'Socket Programming', 'Linux'],
  },
]
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
  color: var(--text-strong);
  border-bottom: 2px solid var(--border-3);
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
  color: var(--text);
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  list-style: none;
  padding: 0;
}

.skill-item {
  background-color: var(--surface-3);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: background-color 0.3s ease;
}

.skill-item:hover {
  background-color: var(--surface-3-hover);
}

@media (max-width: 600px) {
  .column-title {
    font-size: 1.55rem;
    margin-bottom: 1.5rem;
  }

  .skills-container {
    gap: 1.5rem;
  }

  .category-title {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }

  .skills-list {
    gap: 0.5rem;
  }

  .skill-item {
    padding: 7px 13px;
    font-size: 0.88rem;
  }
}
</style>

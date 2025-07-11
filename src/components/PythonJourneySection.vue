<script setup>
// You can add as many items as you want here
const journeyItems = [
  {
    title: 'Django Tutorial Course',
    source: 'Youtube',
    link: 'https://www.youtube.com/playlist?list=PL8oRZVu1TnSJdnbFLDoXKPkd_5gdaAu-z', // Example link to the course
  },
  {
    title: 'Python',
    source: 'Faradars',
    link: 'https://faradars.org/courses/python-programming-basic-fvpht0064',
  },
  {
    title: 'Children of Heaven Charity Website',
    source: 'Website Project',
    link: 'https://childrenofheaven.ir/',
  },
  {
    title: 'Django Social Network Platform',
    source: 'Personal Training Project',
    link: 'https://github.com/meisampw1384/Social-Network-Simulater',
  },
    {
    title: 'Dockerized Django Shop',
    source: 'Personal Training Project With Docker',
    link: 'https://github.com/meisampw1384/django-shop-exp',
  },

]
</script>

<!-- src/components/PythonJourneySection.vue -->
<template>
  <section class="resume-column">
    <h2 class="column-title">Python & Django Journey</h2>
    <div
      v-for="(item, index) in journeyItems"
      :key="item.title"
      class="timeline-item"
      :class="{ 'is-last': index === journeyItems.length - 1 }"
    >
      <h3 class="item-title">{{ item.title }}</h3>
      <p class="item-subtitle">{{ item.source }}</p>

      <!--
        NEW: Link button that only appears if a link exists.
        It handles both internal and external links.
      -->
      <a
        v-if="item.link"
        :href="item.link"
        :target="item.link.startsWith('http') ? '_blank' : '_self'"
        rel="noopener noreferrer"
        class="item-link-button"
      >
        <span>View Source</span>
        <!-- A small arrow icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
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

.timeline-item {
  position: relative;
  padding-left: 2rem;
  padding-bottom: 2rem; /* Add space between items */
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
  z-index: 1;
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: 5px;
  top: 18px;
  height: 100%; /* Line will connect to the next item */
  width: 2px;
  background-color: rgba(255, 255, 255, 0.2);
}

.timeline-item.is-last::after {
  display: none; /* Hide line for the last item */
}

.item-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.25rem;
}
.item-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
}
.item-link-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 6px 14px;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: #cde4f7;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.item-link-button:hover {
  background-color: rgba(255, 255, 255, 0.15);
  border-color: #fff;
  color: #fff;
}
.item-link-button:hover svg {
  transform: translateX(3px);
}
.item-link-button svg {
  transition: transform 0.3s ease;
}
</style>

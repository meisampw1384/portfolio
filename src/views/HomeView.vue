<script setup>
import HeroSection from '@/components/HeroSection.vue'
import TechStack from '@/components/TechStack.vue'
import CurrentlyWorkingOn from '@/components/CurrentlyWorkingOn.vue'
import { RouterLink } from 'vue-router'

const featuredProjects = [
  {
    title: 'Children of Heaven Charity Website',
    image: '/project-3.webp',
    tags: ['Django', 'Python', 'Team Project'],
    link: 'https://childrenofheaven.ir/',
  },
  {
    title: 'Django Chat with Redis',
    image: 'django-chat-redis.webp',
    tags: ['Django', 'WebSocket', 'Redis'],
    link: 'https://github.com/meisampw1384/django-chat-redis',
  },
  {
    title: 'WebSocket Chat App',
    image: 'websocket-chat.webp',
    tags: ['Spring Boot', 'WebSocket'],
    link: 'https://github.com/meisampw1384/spring-websocket-chat-demo',
  },
]
</script>

<template>
  <main class="home-page">
    <!-- Hero spans full width -->
    <HeroSection />

    <!-- Bento Grid -->
    <div class="bento-grid">
      <!-- About Me - Large card -->
      <div class="bento-card bento-about" v-animate="'fade-up'">
        <h3 class="bento-label">About Me</h3>
        <p class="bento-about-text">
          I'm a Computer Engineering student at IUT who loves building things that work well
          and look good. From low-level C socket programming to full-stack Django apps, I enjoy
          understanding how every layer of a system fits together.
        </p>
        <div class="about-stats">
          <div class="stat">
            <span class="stat-number">10+</span>
            <span class="stat-label">Projects</span>
          </div>
          <div class="stat">
            <span class="stat-number">6+</span>
            <span class="stat-label">Languages</span>
          </div>
          <div class="stat">
            <span class="stat-number">3+</span>
            <span class="stat-label">Frameworks</span>
          </div>
        </div>
      </div>

      <!-- Tech Stack - Wide card -->
      <div class="bento-card bento-tech" v-animate="{ animation: 'fade-up', delay: 100 }">
        <TechStack />
      </div>

      <!-- Featured Projects - Horizontal cards -->
      <div class="bento-card bento-projects" v-animate="{ animation: 'fade-up', delay: 200 }">
        <div class="bento-header">
          <h3 class="bento-label">Featured Projects</h3>
          <RouterLink to="/projects" class="see-all-link">See all →</RouterLink>
        </div>
        <div class="featured-list">
          <a
            v-for="project in featuredProjects"
            :key="project.title"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="featured-item"
          >
            <div class="featured-thumb">
              <img :src="project.image" :alt="project.title" loading="lazy" />
            </div>
            <div class="featured-info">
              <h4 class="featured-title">{{ project.title }}</h4>
              <div class="featured-tags">
                <span v-for="tag in project.tags" :key="tag" class="mini-tag">{{ tag }}</span>
              </div>
            </div>
            <svg
              class="featured-arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Currently Working On -->
      <div class="bento-card bento-currently" v-animate="{ animation: 'fade-up', delay: 300 }">
        <CurrentlyWorkingOn />
      </div>
    </div>
  </main>
</template>

<style scoped>
.home-page {
  padding: 0 5%;
}

/* --- Bento Grid --- */
.bento-grid {
  display: grid;
  /* minmax(0, …) keeps wide card content from forcing the tracks
     past the viewport width on narrow screens */
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.25rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0 6rem 0;
}

.bento-card {
  min-width: 0;
  background: var(--surface-1);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-1);
  border-radius: 18px;
  padding: 2rem;
  box-shadow: var(--card-shadow);
  transition:
    border-color 0.3s ease,
    background 0.3s ease;
}

.bento-card:hover {
  border-color: var(--border-2);
  background: var(--surface-1-hover);
}

.bento-label {
  font-family: 'Lora', serif;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-strong);
}

/* --- Grid Positions --- */
.bento-about {
  grid-column: span 5;
}

.bento-tech {
  grid-column: span 7;
}

.bento-projects {
  grid-column: span 7;
}

.bento-currently {
  grid-column: span 5;
}

/* --- About Card --- */
.bento-about-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 1.75rem;
}

.about-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-family: 'Lora', serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-strong);
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-faint);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.3rem;
}

/* --- Featured Projects Card --- */
.bento-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.see-all-link {
  font-size: 0.85rem;
  color: var(--text-faint);
  text-decoration: none;
  transition: color 0.3s ease;
}

.see-all-link:hover {
  color: var(--text-strong);
}

.featured-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.featured-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 12px;
  text-decoration: none;
  color: var(--text-strong);
  transition: background 0.3s ease;
}

.featured-item:hover {
  background: var(--surface-2);
}

.featured-thumb {
  width: 56px;
  height: 56px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
}

.featured-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-info {
  flex-grow: 1;
  min-width: 0;
}

.featured-title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.featured-tags {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.mini-tag {
  font-size: 0.68rem;
  background: var(--surface-3);
  padding: 2px 8px;
  border-radius: 12px;
  color: var(--text-subtle);
}

.featured-arrow {
  flex-shrink: 0;
  color: var(--text-ghost);
  transition: color 0.3s ease, transform 0.3s ease;
}

.featured-item:hover .featured-arrow {
  color: var(--text-strong);
  transform: translate(2px, -2px);
}

/* --- Currently Card --- */
.bento-currently {
  padding: 1.5rem;
}

/* --- Responsive --- */
@media (max-width: 900px) {
  .bento-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .bento-about,
  .bento-tech,
  .bento-projects,
  .bento-currently {
    grid-column: span 1;
  }
}

@media (max-width: 600px) {
  .bento-grid {
    gap: 1rem;
    padding: 1.5rem 0 4rem 0;
  }

  .bento-card {
    padding: 1.5rem 1.25rem;
    border-radius: 16px;
  }

  .bento-currently {
    padding: 1.25rem;
  }

  .about-stats {
    gap: 1.25rem 1.75rem;
  }

  .stat-number {
    font-size: 1.75rem;
  }

  .featured-item {
    gap: 0.75rem;
    padding: 0.6rem;
  }

  .featured-thumb {
    width: 48px;
    height: 48px;
  }

  /* Let long titles wrap instead of being cut off mid-word */
  .featured-title {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
    line-height: 1.35;
  }
}
</style>

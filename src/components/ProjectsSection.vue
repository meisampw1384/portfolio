<script setup>


const projects = [
  {
    title: 'Children of Heaven Charity Website',
    image: '/project-3.webp',
    description:
      'A dynamic website for a student-run charity at IUT, developed collaboratively with a team using the Django framework.',
    tags: ['Django', 'Django Rest Framework', 'Python', 'Team Project', 'Charity'],
    githubLink: null,
    liveLink: 'https://childrenofheaven.ir/',
  },
  {
    title: 'Django Chat with Redis',
    image: 'django-chat-redis.webp',
    description:
      'A real-time one-to-one chat application built with Django Channels, WebSocket, and Redis. It features live user list updates, instant messaging, and secure authentication.',
    tags: ['Django', 'Channels', 'WebSocket', 'Redis', 'Real-Time'],
    githubLink: 'https://github.com/meisampw1384/django-chat-redis',
    liveLink: null,
  },
  {
    title: 'WebSocket Chat App',
    image: 'websocket-chat.webp',
    description:
      'A real-time chat application built with Spring Boot WebSocket, STOMP, and React. It supports private and group messaging, user presence updates, and live notifications.',
    tags: ['Spring Boot', 'WebSocket', 'STOMP'],
    githubLink: 'https://github.com/meisampw1384/spring-websocket-chat-demo',
    liveLink: null,
  },
  {
    title: 'Dockerized Django Shop',
    image: '/django-docker.webp',
    description:
      'A foundational shop built with Django, featuring product management and user authentication, fully containerized with Docker for consistent and reproducible deployments.',
    tags: ['Django', 'Docker', 'Python', 'MariaDB', 'Docker Compose'],
    githubLink: 'https://github.com/meisampw1384/django-shop-exp',
    liveLink: null,
  },
  {
    title: 'Spring Boot Secure Task API',
    image: '/spring-boot-jwt.webp',
    description:
      'A complete REST API for a task manager, built with Spring Boot and secured end-to-end using JWT. Covers authentication, authorization, and best practices.',
    tags: ['Spring Boot', 'Java', 'Spring Security', 'JWT', 'JPA', 'REST API'],
    githubLink: 'https://github.com/meisampw1384/Simple-Task-Manager-API-with-Spring-Security-JWT',
    liveLink: null,
  },
  {
    title: 'Spring Boot REST API for Student Management',
    image: '/spring-boot.webp',
    description:
      'A RESTful API with Spring Boot covering CRUD operations, data validation, and JPA for database interaction.',
    tags: ['Java', 'Spring Boot', 'REST API', 'JPA', 'Hibernate'],
    githubLink: 'https://github.com/meisampw1384/SpringBootStudentApp',
    liveLink: null,
  },
  {
    title: 'Advanced Data Structures for Media Management',
    image: '/Algorithm.webp',
    description:
      'A C++ application for managing and searching media, utilizing custom-built data structures like Splay Trees, Tries, and Hash Tables for optimal performance.',
    tags: ['C++', 'Data Structures', 'Algorithms'],
    githubLink: 'https://github.com/meisampw1384/Series-Management-Project',
    liveLink: null,
  },
  {
    title: 'Plants vs. Zombies',
    image: 'pvz-qt.webp',
    description:
      'A recreation of the classic tower defense game built as a desktop application using C++ and the Qt framework.',
    tags: ['Qt', 'C++', 'Socket Programming'],
    githubLink: 'https://github.com/meisampw1384/Plants-vs-Zombies',
    liveLink: null,
  },
  {
    title: 'Reverse Shell',
    image: '/project-2.webp',
    description:
      'A low-level implementation of a reverse shell in C, demonstrating core socket programming and networking concepts.',
    tags: ['C', 'C++', 'Socket Programming', 'Networking'],
    githubLink: 'https://github.com/meisampw1384/Reverse-shell',
    liveLink: null,
  },
  {
    title: 'Pacman',
    image: '/project-1.webp',
    description:
      'A classic Pac-Man game built with separate frontend and backend logic, developed as a first-semester project at IUT.',
    tags: ['C++', 'C'],
    githubLink: 'https://github.com/meisampw1384/Pacman',
    liveLink: null,
  },
]

function handleTilt(event) {
  // Pointer-based tilt only makes sense with a real hovering pointer.
  // On touch screens a tap fires mousemove without a matching mouseleave,
  // which would leave the card stuck at an angle.
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

  const card = event.currentTarget
  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -6
  const rotateY = ((x - centerX) / centerX) * 6

  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
  // Drive the cursor spotlight from the same handler
  card.style.setProperty('--spot-x', `${x}px`)
  card.style.setProperty('--spot-y', `${y}px`)
}

function resetTilt(event) {
  const card = event.currentTarget
  card.style.transform = ''
}
</script>

<template>
  <section id="projects" class="projects-section">
    <h2 class="section-title" v-animate="'fade-up'">My Projects</h2>
    <div class="projects-grid">
      <div
        v-for="(project, i) in projects"
        :key="project.title"
        class="project-card"
        v-animate="{ animation: 'fade-up', delay: (i % 3) * 100 }"
        @mousemove="handleTilt"
        @mouseleave="resetTilt"
      >
        <div class="card-image-container">
          <img :src="project.image" :alt="'Screenshot of ' + project.title" loading="lazy" />
        </div>
        <div class="card-content">
          <div class="card-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-description">{{ project.description }}</p>
          <div class="card-links">
            <a
              v-if="project.githubLink"
              :href="project.githubLink"
              target="_blank"
              rel="noopener noreferrer"
              class="link-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                ></path>
              </svg>
              <span>Code</span>
            </a>
            <a
              v-if="project.liveLink"
              :href="project.liveLink"
              target="_blank"
              rel="noopener noreferrer"
              class="link-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  text-align: center;
}

.section-title {
  font-family: 'Lora', serif;
  font-size: 2.5rem;
  margin-bottom: 3.5rem;
  color: var(--text-strong);
}

.projects-grid {
  display: grid;
  /* min() keeps the 320px floor from overflowing viewports narrower than that */
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 2.5rem;
  text-align: left;
}

/* --- Project Card with 3D Tilt --- */
.project-card {
  position: relative;
  background: var(--card-gradient);
  backdrop-filter: blur(6px);
  border: 1px solid var(--border-1);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition:
    transform 0.15s ease-out,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  will-change: transform;
}

/* Cursor spotlight: a soft glow that follows the pointer.
   --spot-x / --spot-y are set by the mousemove handler. */
.project-card::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  background: radial-gradient(
    480px circle at var(--spot-x, 50%) var(--spot-y, 50%),
    rgb(56 152 236 / 0.13),
    transparent 45%
  );
  transition: opacity 0.4s ease;
}

.project-card:hover::after {
  opacity: 1;
}

@media (prefers-reduced-motion: reduce) {
  .project-card::after {
    display: none;
  }
}

.project-card:hover {
  box-shadow: var(--shadow-lg);
  border-color: var(--border-2);
}

.card-image-container {
  height: auto;
  overflow: hidden;
}

.card-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .card-image-container img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: var(--surface-3);
  color: var(--accent-text);
  font-size: 0.72rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
  letter-spacing: 0.02em;
}

.card-title {
  font-family: 'Lora', serif;
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
  color: var(--text-strong);
}

.card-description {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-muted);
  flex-grow: 1;
  margin-bottom: 1.5rem;
}

.card-links {
  display: flex;
  gap: 1.25rem;
  margin-top: auto;
}

.link-button {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-subtle);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.link-button:hover {
  color: var(--accent);
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  .projects-grid {
    gap: 1.75rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }

  .projects-grid {
    gap: 1.5rem;
  }

  .card-content {
    padding: 1.25rem;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-description {
    font-size: 0.88rem;
    margin-bottom: 1.25rem;
  }

  /* Keep both links comfortably tappable on one row */
  .card-links {
    gap: 1rem;
  }

  .link-button {
    padding: 6px 0;
  }
}
</style>

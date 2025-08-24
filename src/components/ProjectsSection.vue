<script setup>
// --- YOUR PROJECT DATA GOES HERE ---
// Simply add or remove objects in this array to update your projects.
const projects = [
  {
    title: 'Pacman',
    image: '/project-1.jpg', // Path to your image in the /public/images/ folder
    description:
      'A classic Pac-Man game built with separate frontend and backend logic, developed as a first-semester project at IUT.',
    tags: ['C++', 'C'],
    githubLink: 'https://github.com/meisampw1384/Pacman', // Your GitHub repo link
    liveLink: null, // Your live demo link (if available)
  },
  {
    title: 'Reverse Shell',
    image: '/project-2.jpg',
    description:
      'A low-level implementation of a reverse shell in C, demonstrating core socket programming and networking concepts.',
    tags: ['C', 'C++', 'Socket Programming', 'networking'],
    githubLink: 'https://github.com/meisampw1384/Reverse-shell',
    liveLink: null,
  },
  {
    title: 'Children of Heaven Charity Website',
    image: '/project-3.jpg',
    description:
      'A dynamic website for a student-run charity at IUT, developed collaboratively with a team using the Django framework.',
    tags: ['Django', 'DjangoRestFrameWork', 'Python', 'Team Project', 'Charity'],
    githubLink: null,
    liveLink: 'https://childrenofheaven.ir/',
  },
  {
    title: 'Advanced Data Structures for Media Management',
    image: '/Algorithm.jpg',
    description:
      'A C++ application for managing and searching media, utilizing custom-built data structures like Splay Trees, Tries, and Hash Tables for optimal performance.',
    tags: ['C++', 'Data Structures', 'Algorithms'],
    githubLink: 'https://github.com/meisampw1384/Series-Management-Project',
    liveLink: null,
  },
  {
    title: 'Spring Boot REST API for Student Management',
    image: '/spring-boot.jpg',
    description:
      'A practical learning project to implement a RESTful API with Spring Boot, covering core concepts like CRUD operations, data validation, and JPA for database interaction.',
    tags: ['Java', 'Spring Boot', 'REST API', 'JPA', 'Hibernate'],
    githubLink: 'https://github.com/meisampw1384/SpringBootStudentApp',
    liveLink: null,
  },
  {
    title: 'Spring Boot Secure Task API',
    image: '/spring-boot-jwt.jpg',
    description:
      'A complete REST API for a task manager, built with Spring Boot and secured end-to-end using JWT. A hands-on project covering authentication, authorization, and best practices.',
    tags: ['Spring Boot', 'Java', 'Spring Security', 'JWT', 'JPA', 'REST API'],
    githubLink: 'https://github.com/meisampw1384/Simple-Task-Manager-API-with-Spring-Security-JWT',
    liveLink: null,
  },
  {
    title: 'WebSocket Chat App',
    image: 'websocket-chat.jpg',
    description:
      'A real-time chat application built with Spring Boot WebSocket, STOMP, and React. It supports private and group messaging, user presence updates, and live notifications.',
    tags: ['Spring Boot', 'WebSocket', 'STOMP'],
    githubLink: 'https://github.com/meisampw1384/spring-websocket-chat-demo',
    liveLink: null,
  },
  {
    title: 'Plants vs. Zombies',
    image: 'pvz-qt.jpg',
    description:
      'A recreation of the classic tower defense game, Plants vs. Zombies, built as a desktop application using C++ and the Qt framework for the graphical user interface.',
    tags: ['Qt', 'C++', 'Socket Programming'],
    githubLink: 'https://github.com/meisampw1384/Plants-vs-Zombies',
    liveLink: null,
  },
  {
    title: 'Dockerized Django Shop',
    image: '/django-docker.jpg',
    description:
      'A foundational Shop built with Django, featuring product management and user authentication, fully containerized with Docker for consistent and reproducible deployments.',
    tags: ['Django', 'Docker', 'Python', 'MariaDB', 'Docker Compose'],
    githubLink: 'https://github.com/meisampw1384/django-shop-exp',
    liveLink: null,
  },
]
</script>

<template>
  <section id="projects" class="projects-section">
    <h2 class="section-title">My Projects</h2>
    <div class="projects-grid">
      <!-- We loop through the projects array using v-for -->
      <div v-for="project in projects" :key="project.title" class="project-card">
        <div class="card-image-container">
          <img :src="project.image" :alt="'Screenshot of ' + project.title" />
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
              <!-- GitHub Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <!-- Live Demo Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
  margin-bottom: 4rem;
  color: #fff;
}

.projects-grid {
  display: grid;
  /* Creates a responsive grid: 1 column on small screens, 2 on medium, 3 on large */
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  text-align: left; /* Align text inside cards to the left */
}

/* --- Project Card Styling --- */
.project-card {
  background-color: rgba(30, 81, 123, 0.6); /* Semi-transparent, slightly darker blue */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column; /* Ensures content pushes links to the bottom */
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.card-image-container {
  height: auto;
  overflow: hidden;
}

.card-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .card-image-container img {
  transform: scale(1.05); /* Zoom effect on hover */
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* This makes the content area take up available space */
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background-color: rgba(255, 255, 255, 0.1);
  color: #cde4f7;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
}

.card-title {
  font-family: 'Lora', serif;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #fff;
}

.card-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  flex-grow: 1; /* Pushes the links to the bottom */
  margin-bottom: 1.5rem;
}

.card-links {
  display: flex;
  gap: 1rem;
  margin-top: auto; /* Pushes links to the very bottom */
}

.link-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.link-button:hover {
  color: #82c3f1; /* A brighter blue for hover */
}
</style>

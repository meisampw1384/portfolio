<script setup>
import { RouterLink } from 'vue-router' // Import RouterLink

// Updated navigation links to use router paths
const navLinks = [
  { text: 'Projects', path: '/projects' }, // Changed path
  { text: 'Resume', path: '/resume' },
  //{ text: 'Contact', path: '/contact' },   // Future path
]
</script>

<template>
  <header class="main-header">
    <div class="logo">
      <RouterLink to="/">Meysam Pouryamehr</RouterLink>
    </div>

    <nav class="main-nav">
      <ul>
        <li v-for="link in navLinks" :key="link.text">
          <RouterLink :to="link.path">{{ link.text }}</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="social-icons">
      <a
        href="https://www.linkedin.com/in/meysam-pouryamehr-7482ab339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        aria-label="LinkedIn"
      >
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
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          ></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      </a>
      <a href="https://github.com/meisampw1384" aria-label="GitHub">
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
      </a>
      <a href="https://www.instagram.com/meisampw?igsh=MWhwN2c5NjQ5aXptaw==" aria-label="Instagram">
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
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
      <a href="https://t.me/gmpkw" aria-label="Telegram">
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
          <path d="M22 2L11 13L2 9L22 2ZM22 2L15 22L11 13L2 9L22 2Z"></path>
        </svg>
      </a>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  /* --- Sticky and Glassmorphism Effect --- */
  position: sticky;
  top: 0;
  z-index: 10;

  /* Semi-transparent background for the glass effect */
  background-color: rgba(30, 81, 123, 0.8); /* A slightly darker, more transparent blue */

  /* The magic blur effect */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* For Safari support */

  /* A subtle border to separate the header from content */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  /* --- Layout & Spacing --- */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 5%; /* Padding inside the header */
  transition: background-color 0.3s ease;
}

.logo a {
  font-family: 'Lora', serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}
.logo a:hover {
  color: #cde4f7; /* A slightly lighter, more inviting color on hover */
}

/* --- Navigation Links with Animated Underline --- */
.main-nav ul {
  list-style: none;
  display: flex;
  gap: 2.5rem; /* Increased gap for more breathing room */
  margin: 0;
  padding: 0;
}

.main-nav a {
  position: relative; /* Needed for the ::after pseudo-element */
  color: #e0e0e0; /* Slightly softer white for better readability */
  text-decoration: none;
  font-size: 1rem;
  padding-bottom: 5px; /* Space for the underline to appear */
  transition: color 0.3s ease;
}

.main-nav a:hover {
  color: #fff; /* Brightens on hover */
}

/* The underline animation */
.main-nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); /* This makes the underline grow from the center */
  background-color: #fff;
  transition: width 0.3s ease-in-out;
}

.main-nav a:hover::after {
  width: 100%;
}

.social-icons {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.social-icons a {
  color: #e0e0e0;
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

.social-icons a:hover {
  color: #fff;
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .main-header {

    position: relative;

    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 5%;

    background-color: transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border-bottom: none;
  }
}
</style>

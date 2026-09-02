<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const route = useRoute()
const { isDark, toggleTheme } = useTheme()

const navLinks = [
  { text: 'Projects', path: '/projects' },
  { text: 'Resume', path: '/resume' },
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
          <RouterLink :to="link.path" :class="{ active: route.path === link.path }">
            {{ link.text }}
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div class="header-actions">
      <div class="social-icons">
        <a
          href="https://www.linkedin.com/in/meysam-pouryamehr-7482ab339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
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
        <a
          href="https://github.com/meisampw1384"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
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
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </a>
        <a
          href="https://t.me/meisampw"
          aria-label="Telegram"
          target="_blank"
          rel="noopener noreferrer"
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
            <path d="M22 2L11 13L2 9L22 2ZM22 2L15 22L11 13L2 9L22 2Z"></path>
          </svg>
        </a>
      </div>

      <button
        type="button"
        class="theme-toggle"
        :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
        :aria-pressed="!isDark"
        :title="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
        @click="toggleTheme"
      >
        <!-- Sun icon in dark mode: the icon shows the theme you switch to -->
        <svg
          v-if="isDark"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
          ></path>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  position: sticky;
  top: 0;
  z-index: 10;

  background: var(--header-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  border-bottom: 1px solid var(--border-soft);

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 5%;
  transition: background 0.3s ease;
}

/* Logo */
.logo a {
  font-family: 'Lora', serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-strong);
  text-decoration: none;
  transition: color 0.3s ease;
}

.logo a:hover {
  color: var(--text-link);
}

/* Navigation */
.main-nav ul {
  list-style: none;
  display: flex;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
}

.main-nav a {
  position: relative;
  color: var(--text-subtle);
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding-bottom: 5px;
  transition: color 0.3s ease;
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--text-strong);
}

.main-nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  border-radius: 2px;
  transition: width 0.3s ease-in-out;
}

.main-nav a:hover::after,
.main-nav a.active::after {
  width: 100%;
}

/* Actions cluster */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

/* Social Icons */
.social-icons {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.social-icons a {
  color: var(--text-faint);
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}

.social-icons a:hover {
  color: var(--text-strong);
  transform: translateY(-2px);
}

/* Theme toggle */
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid var(--border-2);
  background: var(--surface-2);
  color: var(--text-muted);
  cursor: pointer;
  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
}

.theme-toggle:hover {
  background: var(--surface-2-hover);
  border-color: var(--border-strong);
  color: var(--text-strong);
  transform: translateY(-2px);
}

.theme-toggle svg {
  display: block;
}

/* Mobile */
@media (max-width: 768px) {
  .main-header {
    position: relative;
    flex-direction: column;
    gap: 1.25rem;
    padding: 1.5rem 5%;
    background: transparent;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    border-bottom: none;
  }

  .logo a {
    font-size: 1.45rem;
  }

  .main-nav ul {
    gap: 1.75rem;
  }

  /* Bigger touch targets without changing the visual size of the text/icons */
  .main-nav a {
    display: inline-block;
    padding: 6px 4px 8px;
  }

  .social-icons a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
  }

  .social-icons {
    gap: 0.5rem;
  }

  .header-actions {
    gap: 0.75rem;
  }

  .theme-toggle {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 400px) {
  .main-header {
    gap: 1rem;
    padding: 1.25rem 5%;
  }

  .logo a {
    font-size: 1.3rem;
  }

  .main-nav ul {
    gap: 1.25rem;
  }
}
</style>

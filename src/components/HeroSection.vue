<script setup>
import { RouterLink } from 'vue-router'
import TypingEffect from './TypingEffect.vue'

const roles = ['Backend Developer', 'Django Enthusiast', 'Problem Solver', 'Lifelong Learner']
</script>

<template>
  <section class="hero-section">
    <!-- Animated mesh gradient background -->
    <div class="hero-bg">
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
      <div class="gradient-orb orb-3"></div>
      <div class="noise-overlay"></div>
    </div>

    <div class="hero-content">
      <div class="image-wrapper">
        <div class="image-container">
          <img src="/profile-pic.jpg" alt="A photo of Meysam Pouryamehr" />
        </div>
        <div class="ring ring-1"></div>
        <div class="ring ring-2"></div>
        <div class="dots-decorator"></div>
      </div>

      <div class="text-container">
        <h1 v-animate="'fade-up'">A curious mind exploring the world of code.</h1>
        <p class="subtitle" v-animate="{ animation: 'fade-up', delay: 150 }">
          I'm Meysam Pouryamehr, a Computer Engineering student at Isfahan University of
          Technology.
        </p>
        <p class="typing-line" v-animate="{ animation: 'fade-up', delay: 300 }">
          I'm a&nbsp;<TypingEffect :words="roles" />
        </p>
        <RouterLink
          to="/projects"
          class="cta-button"
          v-animate="{ animation: 'zoom-in', delay: 450 }"
        >
          View My Work
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
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* --- Main Section Layout --- */
.hero-section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 8rem 0 6rem 0;
  overflow: hidden;
}

/* --- Animated Mesh Gradient Background --- */
.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: var(--orb-opacity);
  animation: float 12s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgb(56 152 236 / 0.6), transparent 70%);
  top: -10%;
  left: -10%;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgb(0 188 212 / 0.4), transparent 70%);
  top: 50%;
  right: -5%;
  animation-delay: -4s;
  animation-duration: 15s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgb(99 102 241 / 0.35), transparent 70%);
  bottom: -10%;
  left: 30%;
  animation-delay: -8s;
  animation-duration: 18s;
}

.noise-overlay {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
  background-repeat: repeat;
  pointer-events: none;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -20px) scale(1.05);
  }
  66% {
    transform: translate(-20px, 15px) scale(0.95);
  }
}

/* --- Content on top of background --- */
.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

/* --- Image Styling --- */
.image-wrapper {
  position: relative;
  margin-bottom: 3rem;
}

.image-container {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--border-strong);
  box-shadow:
    var(--shadow-md),
    var(--shadow-ring);
  position: relative;
  z-index: 2;
  transition: transform 0.4s ease;
}

.image-container:hover {
  transform: scale(1.03);
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Animated rings around image */
.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid var(--border-2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: pulse-ring 3s ease-in-out infinite;
}

.ring-1 {
  width: 270px;
  height: 270px;
  animation-delay: 0s;
}

.ring-2 {
  width: 320px;
  height: 320px;
  animation-delay: 1.5s;
}

@keyframes pulse-ring {
  0%,
  100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.1;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

.dots-decorator {
  position: absolute;
  width: 80px;
  height: 80px;
  top: -20px;
  left: -40px;
  background-image: radial-gradient(circle, var(--dot-decor) 1.5px, transparent 1.5px);
  background-size: 12px 12px;
  z-index: 1;
}

/* --- Text Styling --- */
.text-container {
  max-width: 700px;
  width: 100%;
}

.text-container h1 {
  font-family: 'Lora', serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  color: var(--text-strong);
}

.subtitle {
  font-size: 1.15rem;
  color: var(--text-muted);
  margin: 1.25rem 0 0.5rem 0;
  line-height: 1.7;
}

.typing-line {
  font-size: 1.2rem;
  color: var(--text);
  margin: 0.75rem 0 2.5rem 0;
  min-height: 1.6em;
}

/* --- CTA Button --- */
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-strong);
  color: var(--text-strong);
  font-size: 1rem;
  font-weight: 500;
  padding: 14px 32px;
  border-radius: 50px;
  text-decoration: none;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-sm);
  background: var(--glass-bg-hover);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(4px);
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 0 3.5rem 0;
  }

  .text-container h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .typing-line {
    font-size: 1.05rem;
  }

  .image-wrapper {
    margin-bottom: 2.5rem;
  }

  .image-container {
    width: 180px;
    height: 180px;
    border-width: 3px;
  }

  .ring-1 {
    width: 220px;
    height: 220px;
  }

  .ring-2 {
    width: 260px;
    height: 260px;
  }

  /* Smaller orbs so the blur does not wash out the whole screen */
  .orb-1 {
    width: 320px;
    height: 320px;
  }

  .orb-2 {
    width: 260px;
    height: 260px;
  }

  .orb-3 {
    width: 220px;
    height: 220px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 3rem 0 3rem 0;
  }

  .text-container h1 {
    font-size: 1.65rem;
    line-height: 1.35;
  }

  .subtitle {
    font-size: 0.95rem;
    margin-top: 1rem;
  }

  .typing-line {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .image-wrapper {
    margin-bottom: 2rem;
  }

  .image-container {
    width: 148px;
    height: 148px;
  }

  .ring-1 {
    width: 184px;
    height: 184px;
  }

  .ring-2 {
    width: 216px;
    height: 216px;
  }

  .dots-decorator {
    width: 60px;
    height: 60px;
    top: -12px;
    left: -24px;
    background-size: 10px 10px;
  }

  .cta-button {
    padding: 12px 26px;
    font-size: 0.95rem;
  }
}
</style>

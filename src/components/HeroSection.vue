<template>
  <!-- We add a class for the entry animation -->
  <section class="hero-section fade-in">
    <div class="image-wrapper">
      <div class="image-container">
        <img src="/profile-pic.jpg" alt="A photo of Meysam Pouryamehr" />
      </div>
      <!-- Decorative graphical elements -->
      <div class="dots-decorator"></div>
      <div class="circle-decorator-1"></div>
      <div class="circle-decorator-2"></div>
    </div>

    <div class="text-container">
      <h1>A curious mind exploring the world of code.</h1>
      <p class="subtitle">
        I'm Meysam Pouryamehr, a Computer Engineering student at Isfahan University of
        Technology. I'm passionate about turning complex ideas into beautiful and intuitive digital
        experiences.
      </p>
      <RouterLink to="/projects" class="cta-button">
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
  </section>
</template>

<style scoped>
/* --- Main Section Layout --- */
.hero-section {
  display: flex;
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center them horizontally */
  text-align: center;
  padding: 6rem 0; /* More vertical space */
}

/* --- Entry Animation --- */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  /* Apply the animation */
  animation: fadeIn 1s ease-in-out;
}

/* --- Image Styling with Decorators --- */
.image-wrapper {
  position: relative;
  margin-bottom: 3rem;
}

.image-container {
  width: 250px;
  height: 250px;
  border-radius: 50%; /* A circular image looks more modern */
  overflow: hidden;
  border: 5px solid #fff; /* A clean white border */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* A subtle shadow for depth */
  position: relative; /* To keep it on top of decorators */
  z-index: 2;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* --- Decorative Elements --- */
.dots-decorator {
  position: absolute;
  width: 80px;
  height: 80px;
  top: -20px;
  left: -40px;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 2px, transparent 2px);
  background-size: 15px 15px;
  z-index: 1;
}

.circle-decorator-1,
.circle-decorator-2 {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 1;
}

.circle-decorator-1 {
  width: 60px;
  height: 60px;
  bottom: -20px;
  right: -30px;
}

.circle-decorator-2 {
  width: 20px;
  height: 20px;
  top: 40px;
  right: -35px;
  background-color: rgba(255, 255, 255, 0.2);
}

/* --- Text Styling --- */
.text-container {
  max-width: 700px;
}

.text-container h1 {
  font-family: 'Lora', serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  color: #fff;
}

.subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 1.5rem 0 2.5rem 0; /* top, horizontal, bottom */
}

/* --- Call-to-Action Button --- */
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #fff;
  color: #1a5f91; /* The main blue color */
  font-size: 1rem;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 50px; /* A pill-shaped button */
  text-decoration: none;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(4px);
}

/* --- Responsive Design Adjustments --- */
@media (max-width: 768px) {
  .text-container h1 {
    font-size: 2.2rem;
  }
  .subtitle {
    font-size: 1rem;
  }
}
</style>

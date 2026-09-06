<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <p class="footer-made">
        Designed &amp; built by
        <RouterLink to="/" class="footer-name">Meysam Pouryamehr</RouterLink>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border-soft);
  padding: 2.5rem 5%;
  margin-top: 2rem;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
  text-align: center;
}

.footer-made {
  color: var(--text-muted);
  font-size: 0.92rem;
}

.footer-name {
  color: var(--text-strong);
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid var(--border-2);
  transition: color 0.3s ease, border-color 0.3s ease;
}

.footer-name:hover {
  color: var(--text-link);
  border-color: var(--accent);
}

.footer-tech {
  color: var(--text-faint);
  font-size: 0.8rem;
  letter-spacing: 0.03em;
}

.footer-hint {
  margin-top: 0.5rem;
  color: var(--text-ghost);
  font-size: 0.8rem;
}

.footer-hint kbd {
  font-family: inherit;
  font-size: 0.72rem;
  color: var(--text-subtle);
  background: var(--surface-2);
  border: 1px solid var(--border-1);
  border-bottom-width: 2px;
  border-radius: 5px;
  padding: 2px 6px;
  margin: 0 2px;
}
</style>

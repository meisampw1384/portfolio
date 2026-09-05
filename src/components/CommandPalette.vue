<script setup>
import { computed, nextTick, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useTheme } from '@/composables/useTheme'
import { useCommandPalette } from '@/composables/useCommandPalette'

const router = useRouter()
const { isDark, setTheme } = useTheme()
const { isOpen, close } = useCommandPalette()

const query = ref('')
const activeIndex = ref(0)
const searchInput = ref(null)

const actions = computed(() => [
  {
    id: 'home',
    icon: '🏠',
    label: 'Go to Home',
    hint: 'Navigation',
    keywords: 'home landing start main',
    run: () => router.push('/'),
  },
  {
    id: 'projects',
    icon: '🚀',
    label: 'Go to Projects',
    hint: 'Navigation',
    keywords: 'projects work portfolio apps',
    run: () => router.push('/projects'),
  },
  {
    id: 'resume',
    icon: '📄',
    label: 'Go to Resume',
    hint: 'Navigation',
    keywords: 'resume cv experience education skills',
    run: () => router.push('/resume'),
  },
  {
    id: 'theme',
    icon: isDark.value ? '☀️' : '🌙',
    label: isDark.value ? 'Switch to light theme' : 'Switch to dark theme',
    hint: 'Preferences',
    keywords: 'theme dark light mode color appearance',
    run: () => setTheme(isDark.value ? 'light' : 'dark'),
  },
  {
    id: 'github',
    icon: '🐙',
    label: 'Open GitHub profile',
    hint: 'Links',
    keywords: 'github code repos source',
    run: () => window.open('https://github.com/meisampw1384', '_blank', 'noopener'),
  },
  {
    id: 'linkedin',
    icon: '💼',
    label: 'Open LinkedIn profile',
    hint: 'Links',
    keywords: 'linkedin network professional',
    run: () =>
      window.open('https://www.linkedin.com/in/meysam-pouryamehr-7482ab339', '_blank', 'noopener'),
  },
  {
    id: 'telegram',
    icon: '✈️',
    label: 'Open Telegram chat',
    hint: 'Links',
    keywords: 'telegram contact message chat',
    run: () => window.open('https://t.me/meisampw', '_blank', 'noopener'),
  },
])

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return actions.value
  return actions.value.filter((a) => (a.label + ' ' + a.keywords).toLowerCase().includes(q))
})

watch(filtered, () => {
  activeIndex.value = 0
})

watch(isOpen, (open) => {
  if (open) {
    query.value = ''
    nextTick(() => searchInput.value?.focus())
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})

function onKeydown(e) {
  if (e.key === 'Escape') {
    close()
    return
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    activeIndex.value = (activeIndex.value + 1) % Math.max(filtered.value.length, 1)
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    activeIndex.value =
      (activeIndex.value - 1 + Math.max(filtered.value.length, 1)) % Math.max(filtered.value.length, 1)
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const action = filtered.value[activeIndex.value]
    if (action) select(action)
  }
}

function select(action) {
  close()
  action.run()
}
</script>

<template>
  <Teleport to="body">
    <Transition name="palette">
      <div v-if="isOpen" class="palette-overlay" @click.self="close">
        <div class="palette-panel" role="dialog" aria-modal="true" aria-label="Command palette">
          <div class="palette-input-row">
            <svg
              class="palette-search-icon"
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
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              ref="searchInput"
              v-model="query"
              class="palette-input"
              type="text"
              placeholder="Type a command or search…"

              aria-label="Search commands"
              @keydown="onKeydown"
            />
            <kbd class="palette-esc">ESC</kbd>
          </div>

          <ul class="palette-list">
            <li v-for="(action, i) in filtered" :key="action.id">
              <button
                type="button"
                class="palette-item"
                :class="{ active: i === activeIndex }"
                @mouseenter="activeIndex = i"
                @click="select(action)"
              >
                <span class="palette-item-icon" aria-hidden="true">{{ action.icon }}</span>
                <span class="palette-item-label">{{ action.label }}</span>
                <span class="palette-item-hint">{{ action.hint }}</span>
              </button>
            </li>
            <li v-if="filtered.length === 0" class="palette-empty">No matching commands</li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.palette-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 15vh 1rem 0 1rem;
  background: rgb(0 0 0 / 0.45);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.palette-panel {
  width: min(560px, 100%);
  background: var(--bg);
  border: 1px solid var(--border-2);
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}

.palette-input-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border-1);
  color: var(--text-faint);
}

.palette-search-icon {
  flex-shrink: 0;
}

.palette-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: var(--text-strong);
  font-family: inherit;
  font-size: 1rem;
}

.palette-input::placeholder {
  color: var(--text-faint);
}

.palette-esc {
  flex-shrink: 0;
  font-family: inherit;
  font-size: 0.68rem;
  letter-spacing: 0.05em;
  color: var(--text-faint);
  border: 1px solid var(--border-1);
  border-radius: 6px;
  padding: 3px 7px;
  background: var(--surface-2);
}

.palette-list {
  list-style: none;
  margin: 0;
  padding: 0.5rem;
  max-height: 320px;
  overflow-y: auto;
}

.palette-item {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  width: 100%;
  padding: 0.7rem 0.85rem;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: var(--text);
  font-family: inherit;
  font-size: 0.95rem;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;
}

.palette-item.active {
  background: var(--surface-2-hover);
  color: var(--text-strong);
}

.palette-item-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
}

.palette-item-label {
  flex: 1;
  min-width: 0;
}

.palette-item-hint {
  flex-shrink: 0;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-faint);
}

.palette-empty {
  padding: 1.5rem;
  text-align: center;
  color: var(--text-faint);
  font-size: 0.9rem;
}

/* Enter / leave transition */
.palette-enter-active,
.palette-leave-active {
  transition: opacity 0.2s ease;
}

.palette-enter-active .palette-panel,
.palette-leave-active .palette-panel {
  transition: transform 0.2s ease;
}

.palette-enter-from,
.palette-leave-to {
  opacity: 0;
}

.palette-enter-from .palette-panel,
.palette-leave-to .palette-panel {
  transform: translateY(-8px) scale(0.98);
}

@media (max-width: 600px) {
  .palette-overlay {
    padding-top: 10vh;
  }

  .palette-item-hint {
    display: none;
  }
}
</style>


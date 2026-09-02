import { computed, ref } from 'vue'

const STORAGE_KEY = 'theme'
const VALID = ['light', 'dark']

function systemTheme() {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function storedTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return VALID.includes(value) ? value : null
  } catch {
    return null
  }
}

// Module-level state so every component shares a single source of truth.
// The initial value matches what index.html already applied to <html>.
const theme = ref(document.documentElement.dataset.theme || storedTheme() || systemTheme())

// Follow the OS while the user has not made an explicit choice.
const media = window.matchMedia('(prefers-color-scheme: light)')
media.addEventListener('change', () => {
  if (!storedTheme()) apply(systemTheme())
})

let animTimeout = null

function apply(next, { animate = false } = {}) {
  theme.value = next
  document.documentElement.dataset.theme = next

  if (!animate) return

  // Transition colors only during a toggle, so page load and hover
  // effects keep their own timings.
  const root = document.documentElement
  root.classList.add('theme-anim')
  clearTimeout(animTimeout)
  animTimeout = setTimeout(() => root.classList.remove('theme-anim'), 300)
}

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')

  function setTheme(next) {
    if (!VALID.includes(next)) return
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Private mode / storage disabled: the theme still applies for this session.
    }
    apply(next, { animate: true })
  }

  function toggleTheme() {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  return { theme, isDark, setTheme, toggleTheme }
}

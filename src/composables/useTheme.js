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

  function setTheme(next, origin = null) {
    if (!VALID.includes(next)) return
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Private mode / storage disabled: the theme still applies for this session.
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Circular wipe expanding from the toggle button, via the View Transitions API.
    if (document.startViewTransition && !reduceMotion) {
      const x = origin?.x ?? window.innerWidth / 2
      const y = origin?.y ?? window.innerHeight / 2
      const radius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      )
      const transition = document.startViewTransition(() => {
        theme.value = next
        document.documentElement.dataset.theme = next
      })
      transition.ready
        .then(() => {
          document.documentElement.animate(
            {
              clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
            },
            {
              duration: 450,
              easing: 'ease-in-out',
              pseudoElement: '::view-transition-new(root)',
            }
          )
        })
        .catch(() => {})
      return
    }

    apply(next, { animate: true })
  }

  function toggleTheme(event) {
    const origin =
      event && typeof event.clientX === 'number' ? { x: event.clientX, y: event.clientY } : null
    setTheme(isDark.value ? 'light' : 'dark', origin)
  }

  return { theme, isDark, setTheme, toggleTheme }
}

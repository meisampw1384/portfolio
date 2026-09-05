import { ref } from 'vue'

// Module-level shared state so the header trigger, the global ⌘K shortcut
// and the palette component itself all stay in sync.
const isOpen = ref(false)

function open() {
  isOpen.value = true
}

function close() {
  isOpen.value = false
}

function toggle() {
  isOpen.value = !isOpen.value
}

export function useCommandPalette() {
  return { isOpen, open, close, toggle }
}

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  words: { type: Array, required: true },
  typingSpeed: { type: Number, default: 100 },
  deletingSpeed: { type: Number, default: 60 },
  pauseDuration: { type: Number, default: 2000 },
})

const displayText = ref('')
const showCursor = ref(true)
let wordIndex = 0
let charIndex = 0
let isDeleting = false
let typeTimeout = null
let blinkInterval = null

function type() {
  const currentWord = props.words[wordIndex]

  if (!isDeleting) {
    displayText.value = currentWord.substring(0, charIndex + 1)
    charIndex++

    if (charIndex === currentWord.length) {
      isDeleting = true
      typeTimeout = setTimeout(type, props.pauseDuration)
      return
    }
    typeTimeout = setTimeout(type, props.typingSpeed)
  } else {
    displayText.value = currentWord.substring(0, charIndex - 1)
    charIndex--

    if (charIndex === 0) {
      isDeleting = false
      wordIndex = (wordIndex + 1) % props.words.length
      typeTimeout = setTimeout(type, 500)
      return
    }
    typeTimeout = setTimeout(type, props.deletingSpeed)
  }
}

onMounted(() => {
  type()
  blinkInterval = setInterval(() => {
    showCursor.value = !showCursor.value
  }, 530)
})

onUnmounted(() => {
  clearTimeout(typeTimeout)
  clearInterval(blinkInterval)
})
</script>

<template>
  <span class="typing-text">
    {{ displayText }}<span class="cursor" :class="{ blink: showCursor }">|</span>
  </span>
</template>

<style scoped>
.typing-text {
  display: inline;
  color: var(--text-link);
  font-weight: 500;
}

.cursor {
  display: inline-block;
  color: var(--text-link);
  font-weight: 300;
  opacity: 0;
  transition: opacity 0.1s;
}

.cursor.blink {
  opacity: 1;
}
</style>

/**
 * v-animate — Scroll-triggered animation directive
 *
 * Usage:
 *   <div v-animate>                          <!-- default: fade up -->
 *   <div v-animate="'fade-left'">            <!-- specific animation -->
 *   <div v-animate="{ animation: 'zoom-in', delay: 200 }">  <!-- with delay -->
 *
 * Available animations: fade-up, fade-down, fade-left, fade-right, zoom-in, zoom-out
 */

const ANIMATIONS = {
  'fade-up': {
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  'fade-down': {
    from: { opacity: 0, transform: 'translateY(-40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  'fade-left': {
    from: { opacity: 0, transform: 'translateX(40px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  },
  'fade-right': {
    from: { opacity: 0, transform: 'translateX(-40px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  },
  'zoom-in': {
    from: { opacity: 0, transform: 'scale(0.85)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
  'zoom-out': {
    from: { opacity: 0, transform: 'scale(1.1)' },
    to: { opacity: 1, transform: 'scale(1)' },
  },
}

function getOptions(binding) {
  if (typeof binding.value === 'string') {
    return { animation: binding.value, delay: 0, duration: 700 }
  }
  return {
    animation: binding.value?.animation || 'fade-up',
    delay: binding.value?.delay || 0,
    duration: binding.value?.duration || 700,
  }
}

export const vAnimate = {
  mounted(el, binding) {
    const { animation, delay, duration } = getOptions(binding)
    const anim = ANIMATIONS[animation] || ANIMATIONS['fade-up']

    // Respect users who prefer reduced motion: show content immediately.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      Object.assign(el.style, anim.to)
      return
    }

    // Set initial state
    Object.assign(el.style, anim.from)
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
    el.style.willChange = 'opacity, transform'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Object.assign(el.style, anim.to)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    el._animateObserver = observer
  },

  unmounted(el) {
    el._animateObserver?.disconnect()
  },
}

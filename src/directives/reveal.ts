import type { Directive } from 'vue'

/**
 * A custom Vue 3 directive for elegant scroll reveal animations.
 * Usage:
 * - Simple: `<div v-reveal>...</div>`
 * - With modifiers: `<div v-reveal.delay-1>...</div>`
 * - With dynamic delay (number in ms): `<div v-reveal="i * 80">...</div>`
 * - With custom options: `<div v-reveal="{ delay: 200, threshold: 0.2 }">...</div>`
 */
const revealDirective: Directive = {
  mounted(el: HTMLElement, binding) {
    // Add the base reveal CSS class
    el.classList.add('reveal')

    let delay = ''
    let threshold = 0.1

    // 1. Check for modifiers (e.g. v-reveal.delay-1, v-reveal.delay-2, v-reveal.delay-3)
    if (binding.modifiers['delay-1']) {
      el.classList.add('reveal-delay-1')
    } else if (binding.modifiers['delay-2']) {
      el.classList.add('reveal-delay-2')
    } else if (binding.modifiers['delay-3']) {
      el.classList.add('reveal-delay-3')
    }

    // 2. Check for value-based configurations (dynamic delays or objects)
    if (binding.value !== undefined) {
      if (typeof binding.value === 'number') {
        delay = `${binding.value}ms`
      } else if (typeof binding.value === 'string') {
        delay = binding.value
      } else if (typeof binding.value === 'object' && binding.value !== null) {
        if (binding.value.delay !== undefined) {
          delay = typeof binding.value.delay === 'number' ? `${binding.value.delay}ms` : binding.value.delay
        }
        if (binding.value.threshold !== undefined) {
          threshold = binding.value.threshold
        }
      }
    }

    // Apply inline transition delay if specified
    if (delay) {
      el.style.transitionDelay = delay
    }

    // Create the intersection observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px' // Triggers slightly before fully visible for smoother UX
      }
    )

    // Store observer reference on element for clean cleanup
    ;(el as any)._revealObserver = observer
    observer.observe(el)
  },
  unmounted(el: HTMLElement) {
    if ((el as any)._revealObserver) {
      (el as any)._revealObserver.disconnect()
      delete (el as any)._revealObserver
    }
  }
}

export default revealDirective

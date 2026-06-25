import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable that creates a typing/deleting animation cycling through an array of strings.
 *
 * @param titles - Array of strings to cycle through
 * @param typingSpeed - Milliseconds per character when typing (default: 88)
 * @param deletingSpeed - Milliseconds per character when deleting (default: 48)
 * @param pauseAfterType - Milliseconds to pause after finishing typing a word (default: 1900)
 */
export function useTypingEffect(
  titles: string[],
  typingSpeed = 88,
  deletingSpeed = 48,
  pauseAfterType = 1900,
) {
  const typedText = ref('')
  let titleIndex = 0
  let charIndex = 0
  let isDeleting = false
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  function typeLoop() {
    const currentTitle = titles[titleIndex]

    if (currentTitle === undefined) {
      return
    }

    if (!isDeleting) {
      typedText.value = currentTitle.slice(0, ++charIndex)
      if (charIndex === currentTitle.length) {
        isDeleting = true
        timeoutId = setTimeout(typeLoop, pauseAfterType)
        return
      }
    } else {
      typedText.value = currentTitle.slice(0, --charIndex)
      if (charIndex === 0) {
        isDeleting = false
        titleIndex = (titleIndex + 1) % titles.length
      }
    }

    timeoutId = setTimeout(typeLoop, isDeleting ? deletingSpeed : typingSpeed)
  }

  onMounted(() => {
    timeoutId = setTimeout(typeLoop, 600)
  })

  onUnmounted(() => {
    if (timeoutId) clearTimeout(timeoutId)
  })

  return { typedText }
}

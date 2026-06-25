import { ref, onMounted, watch } from 'vue'

/**
 * Composable for dark/light theme toggling with localStorage persistence.
 */
export function useTheme() {
  const isDark = ref(true)

  function applyTheme(dark: boolean) {
    if (dark) {
      document.body.classList.add('dark')
      document.body.classList.remove('light')
    } else {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  }

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  onMounted(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) {
      isDark.value = saved === 'dark'
    } else {
      // Respect system preference
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme(isDark.value)
  })

  watch(isDark, (val) => {
    localStorage.setItem('portfolio-theme', val ? 'dark' : 'light')
    applyTheme(val)
  })

  return { isDark, toggleTheme }
}

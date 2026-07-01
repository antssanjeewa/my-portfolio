import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable to track which section is currently visible in the viewport.
 * Returns a reactive ref with the ID of the active section.
 */
export function useActiveSection(sectionIds: string[]) {
  const activeSection = ref('')

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      {
        rootMargin: '-50% 0px -40% 0px',
        threshold: 0,
      },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer!.observe(el)
    })
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { activeSection }
}

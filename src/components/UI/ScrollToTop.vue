<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <Transition name="scroll-top">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer border border-primary/30"
      aria-label="Scroll to top"
    >
      <ArrowUp class="w-5 h-5" />
    </button>
  </Transition>
</template>

<style scoped>
.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: all 0.3s ease;
}

.scroll-top-enter-from,
.scroll-top-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.85);
}
</style>

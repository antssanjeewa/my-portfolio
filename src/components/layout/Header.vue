<script setup lang="ts">
import { ref } from 'vue'
import { Download, Menu, X, Sun, Moon } from 'lucide-vue-next'
import { resume_link } from '@/data/portfolioData'
import { useActiveSection } from '@/composables/useActiveSection'
import { useTheme } from '@/composables/useTheme'

const { activeSection } = useActiveSection(['experience', 'skills', 'projects', 'education', 'contact'])
const { isDark, toggleTheme } = useTheme()

const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const smoothScroll = (e: Event) => {
  const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
  if (target?.startsWith('#')) {
    e.preventDefault()
    document.querySelector(target)?.scrollIntoView({
      behavior: 'smooth',
    })
    isMobileMenuOpen.value = false
  }
}
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur-md border-b border-border/50 bg-background/80">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

      <!-- Logo -->
      <a href="/" @click="smoothScroll" class="font-bold text-xl tracking-wider text-primary font-mono">
        { ANTS }
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-6">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="smoothScroll"
          class="text-sm font-medium transition-colors duration-300"
          :class="activeSection === link.href.slice(1)
            ? 'text-primary'
            : 'text-muted-foreground hover:text-primary'"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Right Actions -->
      <div class="flex items-center gap-3">

        <!-- Theme Toggle -->
        <button
          @click="toggleTheme"
          class="p-2 rounded-lg border border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <Sun v-if="isDark" class="w-4 h-4" />
          <Moon v-else class="w-4 h-4" />
        </button>

        <!-- Resume Download (Fixed: entire area is clickable) -->
        <a
          v-if="resume_link"
          :href="resume_link"
          download="Sameera_Sanjeewa_CV.pdf"
          class="hidden sm:flex items-center gap-2 px-4 py-1.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono text-xs font-semibold rounded transition-all duration-300 shadow-md shadow-emerald-500/5"
        >
          <Download class="h-4 w-4" />
          Resume
        </a>

        <!-- Mobile Hamburger -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden p-2 rounded-lg border border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <X v-if="isMobileMenuOpen" class="w-5 h-5" />
          <Menu v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <Transition name="slide-menu">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-border bg-background/95 backdrop-blur-xl"
      >
        <nav class="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            @click="smoothScroll"
            class="py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200"
            :class="activeSection === link.href.slice(1)
              ? 'text-primary bg-primary/10'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'"
          >
            {{ link.label }}
          </a>

          <!-- Resume link in mobile menu too -->
          <a
            v-if="resume_link"
            :href="resume_link"
            download="Sameera_Sanjeewa_CV.pdf"
            class="py-3 px-4 rounded-lg text-sm font-semibold text-primary flex items-center gap-2 hover:bg-primary/10 transition-all mt-2 border border-primary/30"
          >
            <Download class="w-4 h-4" />
            Download Resume
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Mobile menu slide transition */
.slide-menu-enter-active,
.slide-menu-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}

.slide-menu-enter-from,
.slide-menu-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-8px);
}

.slide-menu-enter-to,
.slide-menu-leave-from {
  opacity: 1;
  max-height: 500px;
  transform: translateY(0);
}
</style>
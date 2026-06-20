<script setup lang="ts">
import { Download } from 'lucide-vue-next';
import { resume_link } from '@/data/portfolioData';


const smoothScroll = (e: Event) => {
  const target = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
  if (target?.startsWith('#')) {
    e.preventDefault()
    document.querySelector(target)?.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
</script>

<template>
  <header class="sticky top-0 z-50 backdrop-blur-md border-b border-border/50">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="/" @click="smoothScroll" class="font-bold text-xl tracking-wider text-primary font-mono">{ ANTS }</a>
      <nav class="flex gap-6 text-sm font-medium text-muted-foreground">
        <a href="#experience" @click="smoothScroll" class="hover:text-primary transition-colors duration-300">Experience</a>
        <a href="#skills" @click="smoothScroll" class="hover:text-primary transition-colors duration-300">Skills</a>
        <a href="#projects" @click="smoothScroll" class="hover:text-primary transition-colors duration-300">Projects</a>
        <a href="#contact" @click="smoothScroll" class="hover:text-primary transition-colors duration-300">Contact</a>
      </nav>

      <div v-if="resume_link" class="flex items-center gap-2 px-4 py-1 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono text-xs font-semibold rounded transition-all duration-300 shadow-md shadow-emerald-500/5">
        <Download class="h-5 w-4" />
        <a :href="resume_link" download="Sameera_Sanjeewa_CV.pdf">
          Resume
        </a>
      </div>
    </div>
  </header>
</template>
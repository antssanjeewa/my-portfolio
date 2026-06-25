<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'
</script>

<template>
  <section class="min-h-[80vh] flex items-center justify-center px-6">
    <div class="text-center max-w-md">
      <div class="text-8xl font-extrabold text-primary/20 font-mono mb-4 select-none">404</div>
      <h1 class="text-2xl font-bold text-foreground mb-3">Page Not Found</h1>
      <p class="text-muted-foreground text-sm mb-8 leading-relaxed">
        The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>
      <router-link
        to="/"
        class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/10"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to Home
      </router-link>
    </div>
  </section>
</template>

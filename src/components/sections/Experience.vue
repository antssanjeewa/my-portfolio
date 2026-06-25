<script setup lang="ts">
import { ref } from 'vue';
import { experiences } from "@/data/portfolioData"

const experiencesList = ref(experiences)
</script>
<template>
  <!-- Experience Section -->
  <section id="experience" class="max-w-6xl mx-auto px-6 py-20 border-t border-border">
    <h2 v-reveal class="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4 text-foreground">
      <span class="text-primary font-mono text-xl">**</span> Where I've Worked
    </h2>
    <div class="space-y-12 max-w-4xl">
      <div v-for="(exp, index) in experiencesList" :key="exp.company" v-reveal="index * 120" class="relative pl-6 border-l-2 border-border hover:border-primary/30 transition-all">
        <div class="absolute w-3 h-3 bg-primary rounded-full -left-1.75 top-1.5"></div>
        <div class="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <h3 class="text-xl font-bold text-foreground">
            {{ exp.role }} <span class="text-primary">@ {{ exp.company }}</span>
          </h3>
          <span class="text-sm font-mono text-muted-foreground">{{ exp.period }}</span>
        </div>
        <p class="text-xs text-muted-foreground mb-4 font-medium">{{ exp.location }}</p>
        <ul class="space-y-2.5">
          <li v-for="ach in exp.achievements" :key="ach" class="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
            <span class="text-primary mt-1">▹</span> <span>{{ ach }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
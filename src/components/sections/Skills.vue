<script setup land="ts">
import { ref } from 'vue'
import { skills } from '@/data/portfolioData'

const techSkills = ref(skills);
</script>
<template>
  <section id="skills" class="max-w-6xl mx-auto px-6 py-20 border-t border-border">
    <h2 v-reveal class="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4">
      <span class="text-primary font-mono text-xl">**</span>
      Technical Expertise
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(skill, index) in techSkills" :key="skill.category" v-reveal="index * 80" class="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:bg-muted/20 transition-all duration-300">
        <h3 class="text-primary font-semibold mb-4 text-sm uppercase tracking-wider font-mono">
          {{ skill.category }}
        </h3>
        <ul class="space-y-2">
          <li v-for="item in skill.items" :key="item" class="text-muted-foreground text-sm flex items-center gap-2">
            <span class="w-1.5 h-1.5 bg-primary rounded-full opacity-80"></span> {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

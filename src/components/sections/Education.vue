<script setup lang="ts">
import { education } from '@/data/portfolioData'
import { GraduationCap, Award } from 'lucide-vue-next'
</script>

<template>
  <section id="education" class="max-w-6xl mx-auto px-6 py-20 border-t border-border">
    <h2 v-reveal class="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4 text-foreground">
      <span class="text-primary font-mono text-xl">**</span> Education & Certifications
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div
        v-for="(edu, index) in education"
        :key="edu.degree"
        v-reveal="index * 100"
        class="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:bg-muted/20 transition-all duration-300 group"
      >
        <!-- Icon + Type Badge -->
        <div class="flex items-center gap-2 mb-3">
          <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
            <GraduationCap v-if="edu.type === 'Undergraduate Degree'" class="w-4 h-4" />
            <Award v-else class="w-4 h-4" />
          </div>
          <span class="text-[10px] font-mono text-primary uppercase tracking-wider font-semibold">
            {{ edu.type }}
          </span>
        </div>

        <!-- Degree -->
        <h3 class="text-sm font-bold text-foreground mb-1.5 leading-snug">
          {{ edu.degree }}
        </h3>

        <!-- Institution -->
        <p class="text-xs text-muted-foreground mb-2">
          {{ edu.institution }}
        </p>

        <!-- Year -->
        <span class="text-[11px] font-mono text-muted-foreground/70">
          {{ edu.year }}
        </span>
      </div>
    </div>
  </section>
</template>

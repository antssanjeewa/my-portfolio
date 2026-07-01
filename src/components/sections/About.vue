<script setup lang="ts">
import { bio, education } from '@/data/portfolioData'
</script>

<template>
  <section id="about" class="max-w-6xl mx-auto px-6 py-20 border-t border-border">
    <h2
      v-reveal
      class="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4 text-foreground"
    >
      <span class="text-primary font-mono text-xl">**</span> About Me
    </h2>

    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div v-reveal>
        <p class="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
          {{ bio }}
        </p>
        <p class="text-muted-foreground text-base md:text-lg leading-relaxed">
          Proven track record in optimizing backend performance and managing production-scale cloud
          infrastructure on AWS. Committed to delivering clean, maintainable code following SOLID
          principles.
        </p>
      </div>

      <div v-reveal.delay-1 class="bg-card border border-border p-8 rounded-2xl">
        <h3 class="text-xl font-semibold mb-6 text-foreground">Education & Certifications</h3>
        <ul class="space-y-4">
          <li v-for="(edu, index) in education" :key="index" class="flex gap-4">
            <span class="text-primary font-bold">•</span>
            <div>
              <div class="font-medium text-foreground">{{ edu.degree }}</div>
              <div class="text-sm text-muted-foreground">
                {{ edu.institution }} ({{ edu.year }})
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

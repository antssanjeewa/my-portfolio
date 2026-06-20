<script setup lang="ts">
import { Github, Linkedin, Mail, Phone } from 'lucide-vue-next';
import { email, mobile, github, linkedin } from '@/data/portfolioData';

</script>

<template>
  <section id="contact" class="max-w-6xl mx-auto px-6 py-16 border-t border-border text-center">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-4 text-foreground">Get In Touch</h2>
      <p class="max-w-md mx-auto text-muted-foreground text-sm mb-8">
        I am currently open to new opportunities, freelance projects, or just networking. Drop me a line!
      </p>

      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <a href="mailto:antssanjeewa94@gmail.com" class="flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
          <Mail class="w-4 h-4" /> {{ email }}
        </a>
        <a href="tel:+94712554866" class="flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
          <Phone class="w-4 h-4" /> {{ mobile }}
        </a>
      </div>

      <div class="flex justify-center gap-6 text-sm font-mono text-muted-foreground/80">
        <a :href="github" target="_blank" class="flex items-center gap-1.5 hover:text-foreground transition-colors">
          <Github class="w-4 h-4" /> GitHub
        </a>
        <a :href="linkedin" target="_blank" class="flex items-center gap-1.5 hover:text-foreground transition-colors">
          <Linkedin class="w-4 h-4" /> LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>
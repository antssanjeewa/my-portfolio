<script setup lang="ts">
import { ref } from 'vue';
import { name, bio, title, profile_link } from "@/data/portfolioData"

const nameVal = ref<string>(name)
const titleVal = ref<string>(title)
const bioVal = ref<string>(bio)

</script>
<template>
  <section class="min-h-[90vh] max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-12">

    <div v-reveal class="order-2 md:order-1 text-left">
      <p class="text-primary font-mono mb-3 tracking-widest text-sm">Hi, my name is</p>
      <h1 class="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-4 uppercase">
        {{ nameVal }}
      </h1>
      <h2 class="text-2xl md:text-4xl font-bold text-muted-foreground mb-6">
        {{ titleVal }}
      </h2>
      <p class="max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
        {{ bioVal }}
      </p>
      <div class="flex flex-wrap gap-4">
        <a href="#projects" class="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/10">
          View My Work
        </a>
        <a href="#contact" class="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted/50 text-foreground transition-all">
          Contact Me
        </a>
      </div>
    </div>

    <div v-if="profile_link" v-reveal.delay-1 class="flex-1 order-1 md:order-2 flex justify-center md:justify-end relative group">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>

      <div class="relative z-10 max-w-[320px] md:max-w-105">
        <img :src="profile_link" alt="Sameera Sanjeewa - Senior Software Engineer" class="mask-[linear-gradient(to_bottom,rgba(0,0,0,1)_85%,rgba(0,0,0,0)_100%)] w-full h-auto object-cover drop-shadow-[0_10px_20px_rgba(16,185,129,0.15)] filter grayscale-10 hover:grayscale-0 transition-all duration-500 transform hover:scale-[1.02]" />
      </div>
    </div>

  </section>
</template>
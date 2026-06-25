<script setup lang="ts">
import { name, bio, profile_link } from '@/data/portfolioData'
import { useTypingEffect } from '@/composables/useTypingEffect'

const titles = ['Software Engineer.', 'Full-Stack Developer.']
const { typedText } = useTypingEffect(titles)

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '99.9%', label: 'System Uptime' },
  { value: '40%', label: 'Faster Deployments' },
]
</script>

<template>
  <section id="hero" class="relative min-h-[92vh] flex items-center overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 z-0">
      <!-- Grid Pattern -->
      <div class="hero-grid"></div>
      <!-- Gradient Orbs -->
      <div class="hero-orb hero-orb-1"></div>
      <div class="hero-orb hero-orb-2"></div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-10 py-12"
    >
      <!-- Left: Text Content -->
      <div v-reveal class="order-2 md:order-1 flex-1">
        <p class="text-primary font-mono mb-3 tracking-widest text-sm">Hi, my name is</p>
        <h1
          class="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-4 uppercase"
        >
          {{ name }}
        </h1>

        <!-- Typing Animation Row -->
        <div class="flex items-center gap-1 mb-6">
          <h2 class="text-2xl md:text-4xl font-bold text-muted-foreground">
            {{ typedText }}<span class="typing-cursor"></span>
          </h2>
        </div>

        <p class="max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
          {{ bio }}
        </p>

        <div class="flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            class="px-6 py-3 bg-primary border border-border dark:bg-primary/60 text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/10 hover:border-primary/40 hover:shadow-primary/25 hover:-translate-y-0.5 active:scale-95"
          >
            View My Work ↓
          </a>
          <a
            href="#contact"
            class="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted/50 text-foreground transition-all hover:border-primary/40 hover:-translate-y-0.5 active:scale-95"
          >
            ✉ Get In Touch
          </a>
        </div>

        <!-- Stats Bar -->
        <div v-reveal="200" class="flex flex-wrap gap-6 sm:gap-10 pt-6 border-t border-border">
          <div v-for="(stat, index) in stats" :key="stat.label" v-reveal="300 + index * 100">
            <div
              class="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight leading-none"
            >
              {{ stat.value }}
            </div>
            <div class="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Profile Image -->
      <div
        v-if="profile_link"
        v-reveal.delay-1
        class="flex-1 order-1 md:order-2 flex justify-center md:justify-end relative group"
      >
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"
        ></div>

        <div class="relative z-10 max-w-[320px] md:max-w-105">
          <img
            :src="profile_link"
            alt="Sameera Sanjeewa - Senior Software Engineer"
            class="mask-[linear-gradient(to_bottom,rgba(0,0,0,1)_85%,rgba(0,0,0,0)_100%)] w-full h-auto object-cover drop-shadow-[0_10px_20px_rgba(16,185,129,0.15)] filter grayscale-10 hover:grayscale-0 transition-all duration-500 transform hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Typing Cursor */
.typing-cursor {
  display: inline-block;
  width: 3px;
  height: 0.9em;
  background: var(--primary);
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

/* Animated Background Grid */
.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(var(--border) 1px, transparent 1px),
    linear-gradient(90deg, var(--border) 1px, transparent 1px);
  background-size: 56px 56px;
  opacity: 0.3;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 40%, black 0%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 40%, black 0%, transparent 75%);
}

/* Gradient Orbs */
.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.08;
  pointer-events: none;
}

.hero-orb-1 {
  width: 480px;
  height: 480px;
  background: var(--primary);
  top: -120px;
  right: -80px;
  animation: float-orb 8s ease-in-out infinite;
}

.hero-orb-2 {
  width: 340px;
  height: 340px;
  background: #3b82f6;
  bottom: -60px;
  left: -100px;
  animation: float-orb 10s ease-in-out infinite reverse;
}

@keyframes float-orb {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, -20px);
  }
}
</style>

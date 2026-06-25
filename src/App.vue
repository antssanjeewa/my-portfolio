<script setup lang="ts">
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import ScrollToTop from './components/UI/ScrollToTop.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground selection:bg-primary/5 selection:text-primary antialiased">
    <Header />
    <RouterView />
    <Footer />
    <ScrollToTop />
  </div>
</template>

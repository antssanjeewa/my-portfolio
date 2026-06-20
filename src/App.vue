<script setup land="ts">
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground selection:bg-brand selection:text-primary antialiased">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

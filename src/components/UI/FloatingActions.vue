<script setup lang="ts">
import ChatWidget from '../chat/ChatWidget.vue'
import ScrollToTop from './ScrollToTop.vue'
</script>

<template>
  <div class="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
    <ChatWidget />
    <ScrollToTop />
  </div>
</template>

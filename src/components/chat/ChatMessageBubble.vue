<script setup lang="ts">
import { computed } from 'vue'
import type { ChatMessage } from '@/types/chat'
import { renderLightMarkdown } from '@/utils/renderLightMarkdown'

const props = defineProps<{ message: ChatMessage }>()

const html = computed(() =>
  props.message.role === 'assistant' ? renderLightMarkdown(props.message.content) : null,
)
</script>

<template>
  <div class="flex w-full" :class="message.role === 'user' ? 'justify-end' : 'justify-start'">
    <div
      class="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed wrap-break-words"
      :class="[
        message.role === 'user'
          ? 'bg-primary text-primary-foreground rounded-br-sm whitespace-pre-wrap'
          : 'bg-muted text-foreground rounded-bl-sm',
        message.isError && 'bg-destructive/10 text-destructive',
      ]"
    >
      <div v-if="html" v-html="html" />
      <template v-else>{{ message.content }}</template>
    </div>
  </div>
</template>

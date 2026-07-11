<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { usePortfolioChat } from '@/composables/usePortfolioChat'
import ChatMessageBubble from './ChatMessageBubble.vue'
import { name, portfolioData } from '@/data/portfolioData.ts'
import { Send, Trash2, MessageSquare, X } from 'lucide-vue-next'

const { messages, isOpen, isLoading, errorMessage, hasMessages, toggle, reset, send, stop } =
  usePortfolioChat(portfolioData)

const draft = ref('')
const scrollRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLTextAreaElement | null>(null)

const suggestions = [
  `What has ${name.split(' ')[0]} built recently?`,
  'What are the strongest technical skills here?',
  'Walk me through the most impactful project.',
]

async function scrollToBottom() {
  await nextTick()
  scrollRef.value?.scrollTo({ top: scrollRef.value.scrollHeight, behavior: 'smooth' })
}

watch(messages, scrollToBottom, { deep: true })

async function submit() {
  const text = draft.value
  draft.value = ''
  await send(text)
}

function ask(question: string) {
  draft.value = question
  submit()
}

function onEnter(e: KeyboardEvent) {
  if (e.shiftKey) return
  e.preventDefault()
  submit()
}

watch(isOpen, async (open) => {
  if (open) {
    await scrollToBottom()
    inputRef.value?.focus()
  }
})
</script>

<template>
  <div class="flex flex-col items-end gap-3">
    <!-- Panel -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-3 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-3 scale-95"
    >
      <div
        v-if="isOpen"
        class="flex h-[min(35rem,75dvh)] w-[min(25rem,92vw)] flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-2xl origin-bottom-right"
        role="dialog"
        aria-label="Portfolio assistant chat"
      >
        <!-- Header -->
        <header class="flex items-center justify-between border-b border-border px-4 py-3">
          <div class="flex items-center gap-2.5">
            <span class="relative flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"
              />
              <span class="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <div>
              <p class="text-sm font-medium leading-none">
                Ask about {{ portfolioData.name.split(' ')[0] }}
              </p>
              <p class="mt-0.5 text-xs text-muted-foreground">Usually answers instantly</p>
            </div>
          </div>
          <div class="flex items-center gap-1">
            <button
              v-if="hasMessages"
              class="rounded-md p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              aria-label="Clear conversation"
              @click="reset"
            >
              <Trash2 class="h-4 w-4" />
            </button>
            <button
              class="rounded-md p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              aria-label="Close chat"
              @click="toggle"
            >
              <X class="h-4 w-4" />
            </button>
          </div>
        </header>

        <!-- Messages -->
        <div ref="scrollRef" class="flex-1 space-y-3 overflow-y-auto px-4 py-4">
          <div
            v-if="!hasMessages"
            class="flex h-full flex-col items-center justify-center gap-4 text-center"
          >
            <p class="text-sm text-muted-foreground">
              Ask me anything about {{ portfolioData.name }}'s skills, experience, or projects.
            </p>
            <div class="flex w-full flex-col gap-2">
              <button
                v-for="q in suggestions"
                :key="q"
                class="rounded-lg border border-border px-3 py-2 text-left text-xs text-foreground/80 transition hover:border-primary/40 hover:bg-muted"
                @click="ask(q)"
              >
                {{ q }}
              </button>
            </div>
          </div>

          <ChatMessageBubble v-for="m in messages" :key="m.id" :message="m" />

          <div v-if="isLoading" class="flex justify-start">
            <div class="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-muted px-4 py-3">
              <span
                class="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]"
              />
              <span
                class="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]"
              />
              <span class="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
            </div>
          </div>
        </div>

        <!-- Composer -->
        <form class="border-t border-border p-3" @submit.prevent="submit">
          <div
            class="flex items-end gap-2 rounded-xl border border-border bg-background px-3 py-2 focus-within:border-primary/50"
          >
            <textarea
              ref="inputRef"
              v-model="draft"
              rows="1"
              placeholder="Type a question…"
              class="max-h-24 my-auto flex-1 resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              @keydown.enter="onEnter"
            />
            <button
              type="submit"
              class="shrink-0 rounded-lg bg-primary p-1.5 text-primary-foreground transition disabled:opacity-40"
              :disabled="!draft.trim() || isLoading"
              aria-label="Send message"
            >
              <Send class="h-4 w-4" />
            </button>
          </div>
          <p v-if="errorMessage" class="mt-1.5 text-xs text-destructive">{{ errorMessage }}</p>
        </form>
      </div>
    </Transition>

    <!-- Launcher -->
    <button
      class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-105 active:scale-95"
      :aria-label="isOpen ? 'Close chat' : 'Open portfolio assistant'"
      @click="toggle"
    >
      <MessageSquare v-if="!isOpen" class="h-6 w-6" />
      <X v-else class="h-6 w-6" />
    </button>
  </div>
</template>

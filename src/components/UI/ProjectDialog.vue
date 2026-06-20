<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Project } from '@/types/portfolio'
import { CheckCircle2, FolderClosed, Link2, X } from 'lucide-vue-next'

const props = defineProps<{
  isOpen: boolean
  project: Project | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

// පින්තූරය ලෝඩ් වන තෙක් පාලනය කරන State එක
const isImageLoading = ref(true)

// Modal එක වසා නැවත විවෘත වන විට Image Loader එක Reset කිරීම
watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) isImageLoading.value = true
  },
)

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen && project"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md transition-all duration-300"
      @click.self="handleClose"
    >
      <div
        class="bg-card border border-border max-w-2xl w-full rounded-2xl shadow-2xl relative max-h-[90vh] flex flex-col overflow-hidden transform scale-100 transition-all duration-300"
      >
        <div class="sticky top-0 bg-card/100 z-20 border-b border-border shrink-0 p-6 md:p-8 pb-4">
          <button
            @click="handleClose"
            class="absolute top-6 right-6 text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-muted transition-colors cursor-pointer z-30 border border-border/40"
          >
            <X class="w-5 h-5" />
          </button>

          <div class="flex items-center gap-3 mb-4">
            <FolderClosed class="w-6 h-6 text-primary" />
            <span class="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md">
              Project Case Study
            </span>
          </div>

          <h3 class="text-2xl font-bold text-foreground mb-4 pr-12">
            {{ project.title }}
          </h3>

          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="tag in project.tags"
              :key="tag.id"
              class="text-[11px] font-mono bg-muted/60 text-foreground border border-border px-2.5 py-0.5 rounded-md"
            >
              {{ tag.label }}
            </span>
          </div>
        </div>

        <div class="p-6 md:p-8 pt-4 overflow-y-auto flex-1 space-y-6">
          <div
            v-if="project.coverImage"
            class="w-full aspect-video rounded-xl overflow-hidden border border-border bg-muted/40 group/img relative"
          >
            <div
              v-if="isImageLoading"
              class="absolute inset-0 bg-gradient-to-r from-muted via-muted/80 to-muted bg-[length:200%_100%] animate-pulse"
            ></div>

            <img
              :src="project.coverImage"
              :alt="project.title"
              loading="lazy"
              class="w-full h-full object-cover group-hover/img:scale-[1.02] transition-all duration-500"
              :class="isImageLoading ? 'opacity-0 absolute' : 'opacity-100'"
              @load="isImageLoading = false"
            />
          </div>

          <div>
            <h4 class="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
              Project Overview
            </h4>
            <p class="text-muted-foreground text-sm md:text-base leading-relaxed">
              {{ project.longDescription || project.description }}
            </p>
          </div>

          <div v-if="project.challenge" class="border-l-2 border-primary/30 pl-4 py-1">
            <h4 class="text-xs font-mono text-foreground uppercase tracking-wider mb-1.5">
              The Technical Challenge
            </h4>
            <p class="text-muted-foreground text-sm leading-relaxed">
              {{ project.challenge }}
            </p>
          </div>

          <div v-if="project.features && project.features.length">
            <h4 class="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">
              Key Responsibilities & Features
            </h4>
            <ul class="space-y-2">
              <li
                v-for="feature in project.features"
                :key="feature"
                class="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <CheckCircle2 class="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <div v-if="project.impact" class="bg-muted/30 border border-border rounded-xl p-4">
            <h4 class="text-xs font-mono text-primary uppercase tracking-wider mb-1">
              Measurable Impact
            </h4>
            <p class="text-foreground text-sm font-medium leading-relaxed">
              {{ project.impact }}
            </p>
          </div>
        </div>

        <div class="flex flex-wrap gap-4 border-t border-border p-6 bg-card shrink-0 z-20">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            class="flex items-center gap-2 px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg hover:bg-muted/80 transition-colors cursor-pointer border border-border/60"
          >
            <Link2 class="w-4 h-4" /> Code Architecture
          </a>
        </div>
      </div>
    </div>
  </Teleport>
</template>

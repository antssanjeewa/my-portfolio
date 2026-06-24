<script setup lang="ts">
import { ref, watch } from 'vue'
import type { Project } from '@/types/portfolio'
import { X, Github, ExternalLink, CheckCircle2, FolderClosed } from 'lucide-vue-next'

const props = defineProps<{
  isOpen: boolean
  project: Project | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const isImageLoading = ref(true)

watch(() => props.isOpen, (newVal) => {
  if (newVal) isImageLoading.value = true
})

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen && project"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-lg"
      @click.self="handleClose"
    >
      <div class="bg-card border border-border w-full max-w-7xl rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        <div class="sticky top-0 bg-card z-20 border-b border-border px-8 py-6 flex items-center justify-between rounded-t-3xl">
          <div class="flex items-center gap-4">
            <FolderClosed class="w-7 h-7 text-primary" />
            <div>
              <h2 class="text-2xl font-bold text-foreground">{{ project.title }}</h2>
              <p v-if="project.role" class="text-xs font-mono text-primary/90 mt-0.5">
                Role: {{ project.role }}
              </p>
            </div>
          </div>
          
          <button
            @click="handleClose"
            class="text-muted-foreground hover:text-foreground p-3 rounded-xl hover:bg-muted transition-colors cursor-pointer"
          >
            <X class="w-6 h-6" />
          </button>
        </div>

        <div class="flex-1 overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row">
          
          <!-- Left Pane: Visual Showcase, Links & Metrics -->
          <div class="w-full lg:w-5/12 bg-muted/30 relative flex items-center justify-center p-8 border-b lg:border-b-0 lg:border-r border-border lg:h-full lg:overflow-y-auto">
            <div class="w-full max-w-md space-y-6">
              <!-- Cover Image -->
              <div class="aspect-video rounded-2xl overflow-hidden border border-border shadow-inner bg-black/40 relative">
                <template v-if="project.coverImage">
                  <img
                    :src="project.coverImage"
                    :alt="project.title"
                    class="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                    @load="isImageLoading = false"
                  />
                </template>
                <div v-else class="w-full h-full flex items-center justify-center text-primary/20">
                  <FolderClosed class="w-24 h-24" />
                </div>
              </div>

              <!-- Desktop Action Buttons -->
              <div class="flex gap-3">
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  class="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-2xl hover:bg-primary/90 transition-all font-medium text-sm shadow-sm cursor-pointer"
                  :aria-label="'Visit ' + project.title + ' live demo'"
                >
                  <ExternalLink class="w-4 h-4" /> Live Demo
                </a>
                <a
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="flex-1 flex items-center justify-center gap-2 border border-border py-3 rounded-2xl hover:bg-muted transition-all font-medium text-sm text-foreground cursor-pointer"
                  :aria-label="'View ' + project.title + ' source code on GitHub'"
                >
                  <Github class="w-4 h-4" /> GitHub
                </a>
              </div>

              <!-- Technologies List -->
              <div>
                <h4 class="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Technologies Used</h4>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="tag in project.tags"
                    :key="tag.id"
                    class="inline-flex items-center gap-1 text-[11px] font-mono bg-muted/50 px-2.5 py-1 rounded-md text-muted-foreground border border-border/60"
                    :class="tag.colorClass"
                  >
                    <component :is="tag.icon" v-if="tag.icon" class="w-3.5 h-3.5" />
                    {{ tag.label }}
                  </span>
                </div>
              </div>

              <!-- Quantifiable Impact Summary Box -->
              <div v-if="project.impactSummary" class="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
                <div class="flex items-start gap-4">
                  <span class="text-3xl select-none">⚡</span>
                  <div>
                    <p class="font-semibold text-emerald-400 leading-normal">{{ project.impactSummary }}</p>
                    <p v-if="project.impact" class="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {{ project.impact }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Pane: Comprehensive Case Study Details -->
          <div class="w-full lg:w-7/12 p-8 md:p-10 space-y-8 lg:h-full lg:overflow-y-auto">
            <!-- Project Overview -->
            <div>
              <h4 class="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Project Overview</h4>
              <p class="text-muted-foreground leading-relaxed text-[15px]">
                {{ project.longDescription || project.description }}
              </p>
            </div>

            <!-- Key Achievements -->
            <div v-if="project.highlights?.length">
              <h4 class="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Key Achievements</h4>
              <ul class="grid grid-cols-1 gap-3">
                <li v-for="(highlight, i) in project.highlights" :key="i" class="flex gap-3 text-sm">
                  <CheckCircle2 class="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span class="text-foreground leading-normal">{{ highlight }}</span>
                </li>
              </ul>
            </div>

            <!-- Technical Challenge Box -->
            <div v-if="project.challenge" class="bg-muted/50 border-l-4 border-primary pl-5 py-5 rounded-r-xl">
              <h4 class="font-semibold mb-2 text-foreground text-sm">Technical Challenge</h4>
              <p class="text-muted-foreground text-sm leading-relaxed">
                {{ project.challenge }}
              </p>
            </div>

            <!-- Key Features / Responsibilities -->
            <div v-if="project.features?.length">
              <h4 class="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 font-semibold">Key Features & Responsibilities</h4>
              <ul class="space-y-3">
                <li v-for="(feature, i) in project.features" :key="i" class="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span class="text-primary text-xl leading-none mt-0.5 select-none">•</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Mobile Action Buttons (Visible only on smaller devices) -->
        <div class="lg:hidden border-t border-border p-6 flex gap-3 bg-card">
          <a 
            v-if="project.link" 
            :href="project.link" 
            target="_blank" 
            class="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-2xl hover:bg-primary/90 transition-all font-medium text-sm"
            :aria-label="'Visit ' + project.title + ' live demo'"
          >
            <ExternalLink class="w-4 h-4" /> Live Demo
          </a>
          <a 
            v-if="project.github" 
            :href="project.github" 
            target="_blank" 
            class="flex-1 flex items-center justify-center gap-2 border border-border py-3 rounded-2xl hover:bg-muted transition-all font-medium text-sm text-foreground"
            :aria-label="'View ' + project.title + ' source code on GitHub'"
          >
            <Github class="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/data/portfolioData'
import { FolderClosed, ExternalLink, Link2Icon } from 'lucide-vue-next'

import ProjectDialog from '@/components/UI/ProjectDialog.vue'
const projectsList = ref(projects)

const showAll = ref(false)
const INITIAL_COUNT = 3

const visibleProjects = computed(() => {
  return showAll.value ? projectsList.value : projectsList.value.slice(0, INITIAL_COUNT)
})

const isModalOpen = ref(false)
const selectedProject = ref(null)

const openProjectModal = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
  document.body.style.overflow = ''
}
</script>

<template>
  <section id="projects" class="max-w-6xl mx-auto px-6 py-20 border-t border-border">
    <h2 class="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4 text-foreground">
      <span class="text-primary font-mono text-xl">**</span> Featured Projects
    </h2>

    <!-- Projects Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="project in visibleProjects"
        :key="project.title"
        class="bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 hover:bg-muted/10 hover:border-primary/20 shadow-sm group min-h-85"
      >
        <div>
          <!-- Top Action Bar -->
          <div class="flex items-center justify-between mb-6">
            <FolderClosed class="w-7 h-7 text-primary icon-glow" />
            <div class="flex gap-4 text-muted-foreground">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                class="hover:text-primary transition-colors"
                title="GitHub Repository"
              >
                <Link2Icon class="w-5 h-5" />
              </a>
              <a
                v-if="project.live"
                :href="project.live"
                target="_blank"
                class="hover:text-primary transition-colors"
                title="Live Project"
              >
                <ExternalLink class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Title (Clickable for Modal) -->
          <h3
            @click="openProjectModal(project)"
            class="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-1"
          >
            {{ project.title }}
          </h3>

          <p class="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
            {{ project.description }}
          </p>
        </div>

        <!-- Tech Tags & Details Trigger -->
        <div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="inline-flex items-center gap-1.5 text-[11px] font-mono bg-muted/50 px-2.5 py-1 rounded-md text-muted-foreground border border-border"
              :class="tag.colorClass"
            >
              <component :is="tag.icon" class="w-3.5 h-3.5 transition-all duration-300" />

              {{ tag.label }}
            </span>
          </div>

          <button
            @click="openProjectModal(project)"
            class="text-xs font-mono text-primary hover:underline cursor-pointer"
          >
            View Details →
          </button>
        </div>
      </div>
    </div>

    <!-- View More / View Less Button -->
    <div v-if="projectsList.length > INITIAL_COUNT" class="flex justify-center mt-12">
      <button
        @click="showAll = !showAll"
        class="px-6 py-2.5 border border-border rounded-lg font-mono text-sm font-medium hover:bg-muted/50 text-foreground transition-all cursor-pointer shadow-sm hover:border-primary/30"
      >
        {{
          showAll
            ? 'Show Less'
            : `View More (${projectsList.length - INITIAL_COUNT} Older Projects)`
        }}
      </button>
    </div>

    <ProjectDialog :is-open="isModalOpen" :project="selectedProject" @close="closeModal" />
  </section>
</template>

<style scoped>
.icon-glow {
  filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.2));
}
</style>

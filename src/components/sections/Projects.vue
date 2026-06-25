<script setup>
import { ref, computed } from 'vue'
import { projects } from '@/data/projectsData'
import { FolderClosed, ExternalLink, Github } from 'lucide-vue-next'

import ProjectDialog from '@/components/UI/ProjectDialog.vue'
const projectsList = ref(projects)

const showAll = ref(false)
const INITIAL_COUNT = 6

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
    <h2
      v-reveal
      class="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4 text-foreground"
    >
      <span class="text-primary font-mono text-xl">**</span> Featured Projects
    </h2>

    <!-- Projects Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(project, index) in visibleProjects"
        :key="project.title"
        v-reveal="index * 100"
        class="bg-card border border-border rounded-xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 hover:bg-muted/5 hover:border-primary/20 shadow-sm group overflow-hidden"
      >
        <!-- Project Cover Image with Top Badges, Overlay Links & Fallback -->
        <div
          class="w-full aspect-video overflow-hidden border-b border-border bg-muted/20 cursor-pointer relative"
          @click="openProjectModal(project)"
        >
          <img
            v-if="project.coverImage"
            :src="project.coverImage"
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <!-- Elegant Fallback if Cover Image is missing -->
          <div
            v-else
            class="w-full h-full bg-linear-to-br from-slate-900 to-slate-950 flex items-center justify-center text-primary/40 group-hover:text-primary/60 transition-colors"
          >
            <FolderClosed class="w-12 h-12 stroke-[1.2]" />
          </div>

          <!-- ✨ Badges: Top-Left (Absolute positioning) -->
          <div class="absolute top-3 left-3 flex gap-1.5 z-10 pointer-events-none">
            <span
              v-if="project.isPublic"
              class="text-[9px] bg-amber-500 text-slate-950 px-2 py-0.5 rounded font-bold uppercase tracking-wider shadow-sm"
            >
              Open Source
            </span>
            <span
              v-else
              class="text-[9px] bg-blue-500 text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider shadow-sm"
            >
              Live
            </span>
          </div>

          <div v-if="project.link" class="absolute top-2.5 right-2.5 flex gap-2 z-10" @click.stop>
            <a
              :href="project.link"
              target="_blank"
              class="w-8 h-8 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/90 hover:text-primary hover:scale-110 active:scale-95 transition-all shadow-md"
              aria-label="Project Link"
              title="Live Project"
            >
              <Github v-if="project.isPublic" class="w-4 h-4" />
              <ExternalLink v-else class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Card Content -->
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <!-- Title -->
            <h3
              @click="openProjectModal(project)"
              class="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              {{ project.title }}
            </h3>

            <p class="text-[11px] font-mono text-primary/80 mb-3 font-medium">
              {{ project.role || 'Backend Engineer' }}
            </p>

            <!-- Description -->
            <p class="text-muted-foreground text-sm leading-relaxed mb-4">
              {{ project.description }}
            </p>
          </div>

          <!-- Tech Tags & Details Trigger -->
          <div>
            <div class="flex flex-wrap gap-1.5 mb-4.5">
              <span
                v-for="tag in project.tags"
                :key="tag.id"
                class="inline-flex items-center gap-1 text-[10px] font-mono bg-muted/50 px-2 py-0.5 rounded border border-border/50 text-muted-foreground transition-colors duration-200"
                :class="tag.colorClass"
              >
                <component :is="tag.icon" v-if="tag.icon" class="w-3 h-3" />
                {{ tag.label }}
              </span>
            </div>

            <div class="flex items-center justify-end">
              <button
                @click="openProjectModal(project)"
                class="text-xs font-mono text-primary hover:underline cursor-pointer flex items-center gap-1 font-semibold"
              >
                View More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- View More / View Less Button -->
    <div v-if="projectsList.length > INITIAL_COUNT" v-reveal class="flex justify-center mt-12">
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

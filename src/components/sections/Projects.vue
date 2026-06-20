<script setup>
import { ref, computed } from 'vue';
import { projects } from '@/data/portfolioData';
import { FolderClosed, Link2, ExternalLink, Github, X, Link2Icon } from 'lucide-vue-next';

const projectsList = ref(projects);

const showAll = ref(false);
const INITIAL_COUNT = 3;

const visibleProjects = computed(() => {
  return showAll.value ? projectsList.value : projectsList.value.slice(0, INITIAL_COUNT);
});


const isModalOpen = ref(false);
const selectedProject = ref(null);

const openProjectModal = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
  document.body.style.overflow = '';
};
</script>

<template>
  <section id="projects" class="max-w-6xl mx-auto px-6 py-20 border-t border-border">
    <h2 class="text-2xl md:text-3xl font-bold mb-12 flex items-center gap-4 text-foreground">
      <span class="text-primary font-mono text-xl">**</span> Featured Projects
    </h2>

    <!-- Projects Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="project in visibleProjects" :key="project.title" class="bg-card border border-border rounded-xl p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 hover:bg-muted/10 hover:border-primary/20 shadow-sm group min-h-85">
        <div>
          <!-- Top Action Bar -->
          <div class="flex items-center justify-between mb-6">
            <FolderClosed class="w-7 h-7 text-primary icon-glow" />
            <div class="flex gap-4 text-muted-foreground">
              <a v-if="project.github" :href="project.github" target="_blank" class="hover:text-primary transition-colors" title="GitHub Repository">
                <Link2Icon class="w-5 h-5" />
              </a>
              <a v-if="project.live" :href="project.live" target="_blank" class="hover:text-primary transition-colors" title="Live Project">
                <ExternalLink class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Title (Clickable for Modal) -->
          <h3 @click="openProjectModal(project)" class="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors cursor-pointer inline-flex items-center gap-1">
            {{ project.title }}
          </h3>

          <p class="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
            {{ project.description }}
          </p>
        </div>

        <!-- Tech Tags & Details Trigger -->
        <div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in project.tags" :key="tag" class="text-[11px] font-mono bg-muted/50 px-2.5 py-1 rounded-md text-muted-foreground border border-border">
              {{ tag }}
            </span>
          </div>

          <button @click="openProjectModal(project)" class="text-xs font-mono text-primary hover:underline cursor-pointer">
            View Details →
          </button>
        </div>
      </div>
    </div>

    <!-- View More / View Less Button -->
    <div v-if="projectsList.length > INITIAL_COUNT" class="flex justify-center mt-12">
      <button @click="showAll = !showAll" class="px-6 py-2.5 border border-border rounded-lg font-mono text-sm font-medium hover:bg-muted/50 text-foreground transition-all cursor-pointer shadow-sm hover:border-primary/30">
        {{ showAll ? 'Show Less' : `View More (${projectsList.length - INITIAL_COUNT} Older Projects)` }}
      </button>
    </div>

    <!-- 3. Project Details Popup Dialog (Modal) -->
    <Teleport to="body">
      <div v-if="isModalOpen && selectedProject" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md transition-all duration-300" @click.self="closeModal">
        <div class="bg-card border border-border max-w-2xl w-full rounded-2xl p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto transform scale-100 transition-all duration-300">
          <!-- Close Button -->
          <button @click="closeModal" class="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-muted transition-colors cursor-pointer">
            <X class="w-5 h-5" />
          </button>

          <!-- Modal Header -->
          <div class="flex items-center gap-3 mb-4">
            <FolderClosed class="w-6 h-6 text-primary" />
            <span class="text-xs font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-md">Project Case Study</span>
          </div>

          <h3 class="text-2xl font-bold text-foreground mb-4">
            {{ selectedProject.title }}
          </h3>

          <!-- Project Description -->
          <div class="prose prose-invert max-w-none text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
            <p>{{ selectedProject.longDescription || selectedProject.description }}</p>
          </div>

          <!-- Technologies Used -->
          <div class="mb-8">
            <h4 class="text-xs font-mono text-foreground uppercase tracking-wider mb-3">Technologies Used</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in selectedProject.tags" :key="tag" class="text-xs font-mono bg-muted text-foreground border border-border px-3 py-1 rounded-lg">
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Action Links Inside Modal -->
          <div class="flex flex-wrap gap-4 border-t border-border pt-6">
            <a v-if="selectedProject.github" :href="selectedProject.github" target="_blank" class="flex items-center gap-2 px-4 py-2 bg-muted text-foreground text-sm font-medium rounded-lg hover:bg-muted/80 transition-colors">
              <Github class="w-4 h-4" /> Code Architecture
            </a>
            <a v-if="selectedProject.live" :href="selectedProject.live" target="_blank" class="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-colors shadow-sm">
              <ExternalLink class="w-4 h-4" /> Live Deployment
            </a>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.icon-glow {
  filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.2));
}
</style>
import {
  Flame, // Laravel
  Compass, // Vue / Frontend
  Triangle, // Next.js
  Layers, // Vuetify / Frontend Components
  Database, // Databases (MySQL, PostgreSQL)
  Wind, // Tailwind CSS
  Code2, // Languages / APIs (PHP, TypeScript, REST API)
  Zap, // Redis
  Workflow, // State Management (Vuex)
  Cloud, // Cloud (AWS)
  Link2, // Inertia.js
  Bug, // Testing (Pest)
  Eye, // Testing/Automation (Playwright, Laravel Dusk)
  Server, // Web Servers (Nginx)
  Atom, // React
  Box, // Containers (Docker)
  GitBranch, // Version Control (Git)
  FileCode, // Runtime / Environments (Node.js)
  Layout,
  FlameIcon,
  Video,
  Smartphone,
} from 'lucide-vue-next'

export const Techs = {
  // --- Core Frameworks & Languages ---
  php: {
    id: 'php',
    label: 'PHP',
    icon: Code2,
    colorClass: 'group-hover:text-[#777BB4]', // Official PHP Purple
  },
  laravel: {
    id: 'laravel',
    label: 'Laravel',
    icon: Flame,
    colorClass: 'group-hover:text-[#FF2D20]', // Official Laravel Red
  },
  blade: {
    id: 'blade',
    label: 'Blade',
    icon: Layout,
    colorClass: 'group-hover:text-[#FF2D20]',
  },
  typescript: {
    id: 'typescript',
    label: 'TypeScript',
    icon: Code2,
    colorClass: 'group-hover:text-[#3178C6]', // Official TS Blue
  },

  // --- Frontend Frameworks & Libraries ---
  vue: {
    id: 'vue',
    label: 'Vue.js',
    icon: Compass,
    colorClass: 'group-hover:text-[#4FC08D]', // Official Vue Green
  },
  react: {
    id: 'react',
    label: 'React',
    icon: Atom,
    colorClass: 'group-hover:text-[#61DAFB]', // Official React Cyan
  },
  next: {
    id: 'next',
    label: 'Next.js',
    icon: Triangle,
    colorClass: 'group-hover:text-[#000000] dark:group-hover:text-[#FFFFFF]', // Black/White
  },
  vuetify: {
    id: 'vuetify',
    label: 'Vuetify',
    icon: Layers,
    colorClass: 'group-hover:text-[#1867C0]', // Official Vuetify Blue
  },
  tailwindcss: {
    id: 'tailwindcss',
    label: 'Tailwind CSS',
    icon: Wind,
    colorClass: 'group-hover:text-[#06B6D4]', // Official Tailwind Cyan
  },
  flutter: {
    id: 'flutter',
    label: 'Flutter',
    icon: Smartphone,
    colorClass: 'group-hover:text-[#02569B]',
  },

  // --- Databases & Caching ---
  mysql: {
    id: 'mysql',
    label: 'MySQL',
    icon: Database,
    colorClass: 'group-hover:text-[#4479A1]', // Official MySQL Blue
  },
  postgresSql: {
    id: 'postgresSql',
    label: 'PostgreSQL',
    icon: Database,
    colorClass: 'group-hover:text-[#4169E1]', // Official Postgres Blue
  },
  redis: {
    id: 'redis',
    label: 'Redis',
    icon: Zap,
    colorClass: 'group-hover:text-[#DC382D]', // Official Redis Red
  },

  // --- Architecture & State Management ---
  inertia: {
    id: 'inertia',
    label: 'Inertia.js',
    icon: Link2,
    colorClass: 'group-hover:text-[#9553E6]', // Official Inertia Purple
  },
  vuex: {
    id: 'vuex',
    label: 'Vuex',
    icon: Workflow,
    colorClass: 'group-hover:text-[#4FC08D]', // Vue Green
  },
  rest_api: {
    id: 'rest_api',
    label: 'REST API',
    icon: Code2,
    colorClass: 'group-hover:text-[#00CDAE]', // Clean Teal
  },

  // --- DevOps & Infrastructure ---
  nginx: {
    id: 'nginx',
    label: 'Nginx',
    icon: Server,
    colorClass: 'group-hover:text-[#009639]', // Official Nginx Green
  },
  aws: {
    id: 'aws',
    label: 'AWS',
    icon: Cloud,
    colorClass: 'group-hover:text-[#FF9900]', // Official AWS Orange
  },
  docker: {
    id: 'docker',
    label: 'Docker',
    icon: Box,
    colorClass: 'group-hover:text-[#2496ED]', // Official Docker Blue
  },

  // --- Testing Tools ---
  testing: {
    id: 'testing',
    label: 'Pest',
    icon: Bug,
    colorClass: 'group-hover:text-[#00CDAE]', // Pest Cyan
  },
  playwright: {
    id: 'playwright',
    label: 'Playwright',
    icon: Eye,
    colorClass: 'group-hover:text-[#2EAD33]', // Official Playwright Green
  },
  dusk: {
    id: 'dusk',
    label: 'Laravel Dusk',
    icon: Eye,
    colorClass: 'group-hover:text-[#E44B34]', // Dusk Amber/Red
  },

  // --- Additional Core Dev Tools ---
  git: {
    id: 'git',
    label: 'Git',
    icon: GitBranch,
    colorClass: 'group-hover:text-[#F05032]', // Official Git Orange
  },
  nodejs: {
    id: 'nodejs',
    label: 'Node.js',
    icon: FileCode,
    colorClass: 'group-hover:text-[#339933]', // Official Node Green
  },
  firebase: {
    id: 'firebase',
    label: 'Firebase DB',
    icon: FlameIcon,
    colorClass: 'group-hover:text-[#FFCA28]',
  },
  supabase: {
    id: 'supabase',
    label: 'Supabase DB',
    icon: FlameIcon,
    colorClass: 'group-hover:text-[#FFCA28]',
  },
  agora: {
    id: 'agora',
    label: 'Agora SDK',
    icon: Video,
    colorClass: 'group-hover:text-[#3AB0FF]',
  },
}

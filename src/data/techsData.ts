import { Braces, Globe, Database, Cpu, Server, Bug } from 'lucide-vue-next'

export const Techs = {
  laravel: {
    id: 'laravel',
    label: 'Laravel',
    icon: Braces,
    colorClass: 'group-hover:text-[#FF2D20]',
  },
  vue: {
    id: 'vue',
    label: 'Vue.js',
    icon: Globe,
    colorClass: 'group-hover:text-[#4FC08D]',
  },
  mysql: { id: 'mysql', label: 'MySQL', icon: Database, colorClass: 'group-hover:text-[#4479A1]' },
  tailwindcss: {
    id: 'tailwindcss',
    label: 'Tailwind CSS',
    icon: Globe,
    colorClass: 'group-hover:text-[#06B6D4]',
  },
  php: { id: 'php', label: 'PHP', icon: Braces, colorClass: 'group-hover:text-[#777BB4]' },
  redis: { id: 'redis', label: 'Redis', icon: Database, colorClass: 'group-hover:text-[#DC382D]' },
  rest_api: {
    id: 'rest_api',
    label: 'REST API',
    icon: Cpu,
    colorClass: 'group-hover:text-[#00CDAE]',
  },
  aws: { id: 'aws', label: 'AWS', icon: Server, colorClass: 'group-hover:text-[#FF9900]' },
  typescript: { id: 'typescript', label: 'TypeScript', icon: Cpu, colorClass: 'group-hover:text-[#00CDAE]' },
  inertia: { id: 'inertia', label: 'Inertia.js', icon: Cpu, colorClass: 'group-hover:text-[#00CDAE]' },
  testing: { id: 'testing', label: 'Pest', icon: Bug, colorClass: 'group-hover:text-[#00CDAE]' },
  playwright: { id: 'playwright', label: 'Playwright', icon: Bug, colorClass: 'group-hover:text-[#00CDAE]' },
}

import type { Skill, Experience, Project } from '@/types/portfolio'
import { Braces, Globe, Database, Cpu, Server, Terminal } from 'lucide-vue-next'

export const name = 'Sameera Sanjeewa'
export const email = 'antssanjeewa94@gmail.com'
export const mobile = '+94 71 255 4866'
export const title = 'Senior Software Engineer | Full-Stack Developer'
export const bio =
  'Innovative Software Engineer with over 6 years of experience in architecting high-performance web applications using PHP (Laravel) and Vue.js/Nuxt.js. Expert in AWS infrastructure and real-time APIs.'

export const github = 'https://github.com/antssanjeewa'
export const linkedin = 'https://linkedin.com/in/sameera-sanjeewa-ants'

export const profile_link = '/images/profile.png'
export const resume_link = '/resume/SAMEERA SANJEEWA.pdf'

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['PHP (7.x, 8.x)', 'JavaScript (ES6+)', 'Dart', 'Python'],
  },
  {
    category: 'Frameworks',
    items: ['Laravel (Expert)', 'Vue.js 3', 'Nuxt.js', 'Flutter'],
  },
  {
    category: 'Backend & Cloud',
    items: ['RESTful APIs', 'AWS (EC2, S3)', 'Docker', 'CI/CD', 'Nginx'],
  },
  {
    category: 'Databases & Tools',
    items: ['MySQL (Optimization)', 'Redis', 'TDD (PHPUnit)', 'Git'],
  },
]

export const experiences: Experience[] = [
  {
    role: 'Software Engineer (Backend)',
    company: 'Elegant Media',
    location: 'Melbourne, Australia (Remote)',
    period: '2023 - 2026',
    achievements: [
      'Architected Laravel-based backends supporting 200+ users, achieving 99.9% uptime.',
      'Optimized AWS EC2 environments, enhancing application performance by 25%.',
      'Integrated Twilio and Agora APIs for real-time messaging and video features.',
      'Reduced deployment downtime by 40% through CI/CD and Docker orchestration.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Shraddha Media Network',
    location: 'Colombo, Sri Lanka',
    period: '2019 - 2023',
    achievements: [
      'Developed core business apps using Laravel & Vue.js, reducing manual work by 40%.',
      'Optimized complex MySQL queries, resulting in a 30% reduction in server load.',
      'Designed and deployed a custom Donation Management System, improving accuracy by 35%.',
      'Revamped UI/UX of legacy systems using Vue.js and Tailwind CSS.',
    ],
  },
]

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
}

export const projects: Project[] = [
  {
    title: 'Donation Management System',
    description:
      'A high-security platform with optimized MySQL reporting, automated receipts, and streamlined workflows.',
    tags: [Techs.laravel, Techs.mysql, Techs.vue, Techs.tailwindcss],
  },
  {
    title: 'Bookshop Application',
    description:
      'Full-stack system featuring a real-time inventory synchronization mechanism and API-first architecture.',
    tags: [Techs.laravel, Techs.vue],
  },
  {
    title: 'SIGreetings.com',
    description:
      'Scaled and maintained a cloud-based digital greeting platform with integrated production payment gateways.',
    tags: [Techs.php, Techs.laravel, Techs.aws],
  },
  {
    title: 'Donation Management System',
    description:
      'A high-security platform with optimized MySQL reporting, automated receipts, and streamlined workflows.',
    longDescription:
      'This application was custom-built to streamline non-profit donation processing while ensuring strict financial auditing. It features fully automated digital receipt token generation and multi-tier role permissions for administrative transparency.',
    challenge:
      'The platform needed to process heavy reporting queries across millions of rows without causing database lockups during high-traffic donation periods.',
    features: [
      'Implemented multi-tenant role-based access control (RBAC) for audit logs.',
      'Integrated automated PDF receipt generation via asynchronous background queues.',
      'Optimized complex financial aggregations using advanced MySQL indexing strategy.',
    ],
    impact:
      '⚡ Reduced reporting page generation time from 8.4 seconds to 450ms through strategic query optimization and data caching.',
    coverImage: '/images/projects/project_001.jpeg',
    tags: [Techs.laravel, Techs.vue, Techs.mysql, Techs.tailwindcss],
  },
]

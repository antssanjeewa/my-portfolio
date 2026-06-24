import type { Project } from '@/types/portfolio'
import { Techs } from './techsData'

export const projects: Project[] = [
  {
    title: 'Sermon Manage Application',
    role: 'Full Stack Developer',
    coverImage: '/images/projects/project_001.jpeg',
    link: 'https://adsw.smn.lk',
    isPublic: false,
    description:
      'A secure multi-tenant sermon management system featuring public request workflows, multi-role access control, and native bilingual support (English & Sinhala).',
    highlights: [
      'Multi-tenant data isolation with custom Laravel Middleware.',
      'Automated scheduling engine running via asynchronous cron tasks.',
      'Biometric Passkey (WebAuthn) & Fortify 2FA security.',
      'High-performance reactive frontend using Vue 3 and Inertia.js.',
      'Dynamic multi-language switcher (Sinhala / English).',
      'Comprehensive test suites using Pest PHP and Playwright.',
    ],
    tags: [
      Techs.laravel,
      Techs.vue,
      Techs.mysql,
      Techs.tailwindcss,
      Techs.typescript,
      Techs.inertia,
      Techs.testing,
    ],
  },
]

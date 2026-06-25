import type { Project } from '@/types/portfolio'
import { Techs } from './techsData'

const sermonProject: Project = {
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
}

const onlineProject: Project = {
  title: 'Online Payment Gateway Platform',
  role: 'Full Stack Developer',
  coverImage: '/images/projects/project_003.jpeg',
  link: 'https://donate.shraddha.lk',
  isPublic: true,
  description:
    'A secure online payment integration platform developed for Shraddha Media Network to process digital donations through the Sampath Bank Paycorp gateway.',
  highlights: [
    'Integrated Sampath Bank Paycorp payment API using secure Guzzle HTTP clients.',
    'Built a dynamic and responsive multi-currency donation UI with Vue 3 and Inertia.js.',
    'Secured public payment forms against bot attacks using reCAPTCHA v3 integration.',
    'Automated transactional browser testing using Laravel Dusk suites.',
    'Configured real-time error tracking and application monitoring with Sentry Laravel.',
    'Implemented clean alert architectures using SweetAlert2 for user payment feedback.',
  ],
  tags: [Techs.laravel, Techs.vue, Techs.inertia, Techs.tailwindcss, Techs.testing],
}

export const projects: Project[] = [sermonProject, onlineProject]

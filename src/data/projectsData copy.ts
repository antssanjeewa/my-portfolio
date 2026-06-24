import type { Project } from '@/types/portfolio'
import { Techs } from './techsData'

export const projects: Project[] = [
  {
    title: 'Sermon Manage Application',
    role: 'Senior Software Engineer',
    period: '2023 - 2026',
    coverImage: '/images/projects/project_001.jpeg',
    link: 'https://adsw.smn.lk',
    isPublic: true,
    github: 'https://github.com/antssanjeewa/dhamma-app',
    description:
      'A multi-tenant workflow automation platform built for Buddhist monasteries to streamline sermon requests, scheduling, and multi-role access control with native bi-lingual support.',
    highlights: [
      'Multi-tenant data isolation with custom Laravel Middleware.',
      'Automated scheduling engine running via asynchronous cron tasks.',
      'Biometric Passkey (WebAuthn) & Fortify 2FA security.',
      'High-performance reactive frontend using Vue 3 and Inertia.js.',
      'Dynamic multi-language switcher (Sinhala / English).',
      'Comprehensive test suites using Pest PHP and Playwright.',
    ],
    impactSummary:
      'Automated 100% of workflows & established zero-relational multi-tenant isolation.',
    longDescription:
      'DhammaApp is a secure, enterprise-grade system designed to automate the manual workflow of tracking and assigning Dhamma sermon requests across multiple monasteries. Featuring a comprehensive multi-role dashboard (Admin, Manager, Monk), it implements rigid security architectures like Passkey authentication (WebAuthn), 2FA, background cron automation, and dynamic multi-layered query constraints via optimized Repository layers.',
    challenge:
      'Architecting a secure role-based access control (RBAC) across multi-tenant data while optimizing complex calendar grid performance, handling asynchronous background status resets, and maintaining strict multi-lingual (Sinhala/English) content resolution without adding relational overhead to the database.',
    features: [
      'Developed a multi-tier authorization structure using Custom Laravel Middleware gates and rigid Model Policies.',
      'Engineered an automated workflow engine powered by Laravel Scheduler commands running via asynchronous background queues.',
      'Implemented robust application security by integrating Fortify for Two-Factor Authentication (2FA) and Passkey/WebAuthn infrastructure.',
      'Optimized data binding and frontend responsiveness using Vue 3, Inertia.js, and TypeScript.',
      'Designed a multi-layered middleware architecture for dynamic Locale Resolution.',
      'Established high code quality standards by writing comprehensive test suites using Pest PHP and Playwright.',
    ],
    impact:
      '⚡ Achieved 100% automated sermon lifecycle transitions from creation to final logs, eliminating human error in scheduling, protecting public entry-points with reCAPTCHA v3, and achieving zero performance overhead by decoupling business logic into specialized Services and Repository layers.',
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
  // {
  //   title: 'Donation Management System',
  //   role: 'Full Stack Developer',
  //   period: '2019 - 2023',
  //   coverImage: '/images/projects/project_001.jpeg',
  //   github: 'https://github.com/antssanjeewa/donation-management-system',
  //   description:
  //     'A high-security platform with optimized MySQL reporting, automated receipts, and streamlined workflows.',
  //   highlights: [
  //     'Designed and deployed custom automated receipt generator.',
  //     'Optimized database indexing to handle massive financial tables.',
  //     'Developed responsive administrative analytics dashboards.',
  //   ],
  //   impactSummary:
  //     'Boosted accounting data accuracy by 35% and handled thousands of secure monthly logs.',
  //   longDescription:
  //     'This application was custom-built to streamline non-profit donation processing while ensuring strict financial auditing. It features fully automated digital receipt token generation and multi-tier role permissions for administrative transparency.',
  //   challenge:
  //     'The platform needed to process heavy reporting queries across millions of rows without causing database lockups during high-traffic donation periods.',
  //   features: [
  //     'Implemented multi-tenant role-based access control (RBAC) for audit logs.',
  //     'Integrated automated PDF receipt generation via asynchronous background queues.',
  //     'Optimized complex financial aggregations using advanced MySQL indexing strategy.',
  //   ],
  //   impact:
  //     '⚡ Reduced reporting page generation time from 8.4 seconds to 450ms through strategic query optimization and data caching.',
  //   tags: [Techs.laravel, Techs.vue, Techs.mysql, Techs.tailwindcss],
  // },
  // {
  //   title: 'Bookshop Application',
  //   role: 'Senior Full-Stack Engineer',
  //   period: '2022 - 2023',
  //   coverImage: '/images/projects/project_001.jpeg',
  //   github: 'https://github.com/antssanjeewa/bookshop-app',
  //   description:
  //     'Full-stack system featuring a real-time inventory synchronization mechanism and API-first architecture.',
  //   highlights: [
  //     'Designed pessimistic locking transaction layer.',
  //     'Developed real-time inventory Vue frontend.',
  //     'Documented APIs with OpenAPI / Swagger specifications.',
  //   ],
  //   impactSummary:
  //     'Achieved 100% inventory accuracy with zero double-selling incidents over 50k+ processed orders.',
  //   longDescription:
  //     'An enterprise-grade e-commerce and inventory management system designed to handle real-time stock levels, multi-warehouse tracking, and automated supplier invoicing.',
  //   challenge:
  //     'Preventing race conditions and stock discrepancies during high-concurrency flash sales where thousands of users attempt to purchase overlapping stock simultaneously.',
  //   features: [
  //     'Engineered a pessimistic locking strategy in Laravel database transactions to prevent double-selling.',
  //     'Built a reactive real-time inventory dashboard using WebSockets and Vue.js.',
  //     'Implemented an API-first design with comprehensive OpenAPI/Swagger documentation for third-party integrations.',
  //   ],
  //   impact:
  //     '⚡ Achieved 100% inventory accuracy with zero double-selling incidents over 50,000+ processed transactions.',
  //   tags: [Techs.laravel, Techs.vue, Techs.mysql, Techs.rest_api],
  // },
  // {
  //   title: 'SIGreetings.com',
  //   role: 'DevOps & Backend Engineer',
  //   period: '2021 - 2022',
  //   coverImage: '/images/projects/project_001.jpeg',
  //   link: 'https://sigreetings.com',
  //   github: 'https://github.com/antssanjeewa/sigreetings',
  //   description:
  //     'Scaled and maintained a cloud-based digital greeting platform with integrated production payment gateways.',
  //   highlights: [
  //     'Configured AWS S3 + CloudFront CDN caching networks.',
  //     'Integrated Stripe payment gateway checkouts and subscription flows.',
  //     'Eager-loaded Eloquent queries to eliminate N+1 query bottlenecks.',
  //   ],
  //   impactSummary:
  //     'Maintained 99.9% uptime during 500% spikes and reduced monthly AWS costs by 18%.',
  //   longDescription:
  //     'A high-traffic digital greeting card platform allowing users to design, customize, and schedule high-resolution e-cards. Integrated with Stripe and PayPal for global monetized checkouts.',
  //   challenge:
  //     'Scaling image rendering and delivery under sudden holiday spikes (e.g., Christmas/New Year) without bloating AWS infrastructure costs.',
  //   features: [
  //     'Configured AWS S3 and CloudFront CDN caching to offload 90% of image asset requests from the application server.',
  //     'Integrated Stripe Webhooks for asynchronous, reliable order processing and receipt dispatch.',
  //     'Refactored legacy PHP queries to use Laravel Eloquent eager loading, resolving critical N+1 query bottlenecks.',
  //   ],
  //   impact:
  //     '⚡ Maintained 99.9% uptime during a 500% holiday traffic surge, while reducing monthly AWS hosting costs by 18% through efficient CDN usage.',
  //   tags: [Techs.php, Techs.laravel, Techs.aws, Techs.rest_api],
  // },
]

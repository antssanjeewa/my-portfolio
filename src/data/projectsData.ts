import type { Project } from '@/types/portfolio'
import { Techs } from './techsData'

const SermonProject: Project = {
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
  tags: [Techs.laravel, Techs.vue, Techs.mysql, Techs.tailwindcss, Techs.inertia, Techs.testing],
}

const OnlineProject: Project = {
  title: 'Online Payment Gateway Platform',
  role: 'Full Stack Developer',
  coverImage: '/images/projects/project_003.jpeg',
  link: 'https://donate.shraddha.lk',
  isPublic: false,
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
  tags: [Techs.laravel, Techs.vue, Techs.mysql, Techs.inertia, Techs.tailwindcss, Techs.testing],
}

const InventoryApp: Project = {
  title: 'Inventory Management System',
  description:
    'A secure, internal Inventory Management System designed for Ceyntics Systems (Pvt) Ltd to track tools, products, and electronic components across physical storage locations.',
  coverImage: '/images/projects/project_002.jpeg',
  link: 'https://github.com/antssanjeewa/inventory_management_system',
  role: 'Full-Stack Developer',
  isPublic: true,
  highlights: [
    'Developed a robust full-stack web application utilizing a Laravel 12 API backend and a Next.js 15 frontend.',
    'Implemented secure authentication and Role-Based Access Control (RBAC) for Admin and Staff using Laravel Sanctum.',
    'Designed a logic-based, hierarchical storage organization system structured as Cupboards → Places → Items.',
    'Engineered a secure borrowing and returning system featuring atomic transactions and concurrency protection for precise stock validation.',
    'Integrated a comprehensive audit logging system to track and record all significant user actions and system events.',
    'Created a modern, fully responsive dark-themed user interface utilizing Tailwind CSS and Google Fonts.',
  ],
  // "tags": ["Laravel", "PHP", "PostgreSQL", "Next.js", "React", "Tailwind CSS", "Laravel Sanctum"],
  tags: [
    Techs.laravel,
    Techs.next,
    Techs.postgresSql,
    Techs.rest_api,
    Techs.tailwindcss,
    Techs.testing,
  ],
}

const vesakCardApp: Project = {
  title: 'Digital Vesak Greeting Card Generator',
  description:
    'A web application developed for Shraddha TV to allow users to generate personalized digital Vesak greeting cards with custom names and share them directly across social media platforms.',
  coverImage: '/images/projects/project_004.jpeg',
  link: 'https://vesak.shraddha.tv',
  role: 'Full-Stack Developer',
  isPublic: false,
  highlights: [
    'Developed a high-traffic greeting card generation platform used by thousands of users during the Vesak festival season.',
    'Built a dynamic image manipulation and canvas rendering system to overlay custom user names onto pre-designed greeting cards.',
    'Integrated direct social media sharing capabilities, allowing seamless card distribution via Facebook, WhatsApp, and Viber.',
    'Designed a responsive frontend user interface using Vue.js and Tailwind CSS to ensure a smooth mobile-first experience.',
    'Optimized backend performance in Laravel to efficiently handle concurrent card generation requests and database logs.',
  ],
  tags: [Techs.laravel, Techs.vue, Techs.mysql, Techs.tailwindcss, Techs.testing],
}

const bookShopApp: Project = {
  title: 'Book Stall & ERP System',
  description:
    'An internal Enterprise Resource Planning (ERP) and e-commerce management platform developed for Shraddha Media Network to streamline multi-role operations including employee tracking, cashier point-of-sale (POS) workflows, and financial accounts management.',
  coverImage: '/images/projects/project_006.jpeg',
  // link: 'https://github.com/shraddha-tv/book-shop-app',
  role: 'Full-Stack Developer',
  isPublic: false,
  highlights: [
    'Engineered a multi-role enterprise system with granular access control tailored for Admins, Cashiers, and Account Managers.',
    'Developed a dedicated Cashier Module to handle rapid point-of-sale transactions, billing, and real-time stock deductions.',
    'Integrated a comprehensive Account Management dashboard to track daily sales revenues, operational expenses, and financial auditing.',
    'Built an Employee Management subsystem to securely track staff roles, performance logs, and internal system permissions.',
    'Designed a responsive, unified frontend dashboard using Vue.js and Tailwind CSS to ensure a seamless operational workflow across desktop and tablet devices.',
  ],
  tags: [Techs.laravel, Techs.vue, Techs.mysql, Techs.inertia, Techs.tailwindcss, Techs.testing],
}

const donationManageApp: Project = {
  title: 'Donation Management Platform',
  description:
    'An enterprise-grade, multi-role, and multi-department internal ERP system designed for Shraddha Media Network to track and manage organization-wide donation records, automate monthly donor subscriptions, and generate digital merit certificates (Punyanumodana).',
  coverImage: '/images/projects/project_005.jpeg',
  link: 'https://shraddha.tv',
  role: 'Full-Stack Developer',
  isPublic: false,
  highlights: [
    'Engineered a multi-department architecture supporting granular Role-Based Access Control (RBAC) to securely segregate administrative, department-specific, and financial operations.',
    'Developed a comprehensive analytics dashboard featuring advanced monthly tracking of donor contributions, program-wise donation distribution graphs, and location-based metrics.',
    'Built a monthly subscription and standing order tracking engine to manage recurring donations, processing over millions in local currency tracks.',
    "Integrated dynamic document and image manipulation tools to automatically generate printable official receipts and customized digital 'Punyanumodana' (merit blessing) greeting graphics.",
    'Implemented a high-performance reporting subsystem capable of compiling and exporting extensive database records into clean Excel/PDF financial summaries.',
  ],
  tags: [
    Techs.laravel,
    Techs.vue,
    Techs.mysql,
    Techs.vuetify,
    Techs.vuex,
    Techs.rest_api,
    Techs.nginx,
    Techs.testing,
  ],
}

export const projects: Project[] = [
  SermonProject,
  bookShopApp,
  donationManageApp,
  OnlineProject,
  vesakCardApp,
  InventoryApp,
]

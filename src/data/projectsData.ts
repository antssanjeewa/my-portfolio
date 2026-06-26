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
    'Took complete full-stack ownership of the platform, developing both the multi-tenant backend architecture and the reactive frontend application.',
    'Architected multi-tenant data isolation using custom Laravel Middleware to ensure complete data segregation between organizations.',
    'Built automated scheduling engine with asynchronous cron tasks for processing sermon requests and notifications.',
    'Developed high-performance reactive frontend using Vue 3 and Inertia.js for seamless user experience.',
    'Created dynamic multi-language switcher supporting both Sinhala and English with real-time localization.',
    'Wrote comprehensive test suites using Pest PHP and Playwright ensuring 95%+ code coverage.',
    'Configured automated build and test workflows using GitHub Actions to maintain high code quality before production deployment.',
    'Deployed and configured the production environment on an Ubuntu VPS to ensure secure and stable application hosting.',
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
    'Took full-stack ownership of the application, managing the entire product lifecycle from database schema architecture to final production deployment.',
    'Integrated Sampath Bank Paycorp payment API using PHP SOAP client, ensuring robust error handling and secure data transmission.',
    'Built a dynamic, responsive multi-currency donation UI using Vue 3 and Inertia.js, integrating SweetAlert2 to deliver seamless, real-time payment feedback and an optimal user experience.',
    'Secured public payment forms against bot attacks using reCAPTCHA v3 integration and rate limiting.',
    'Developed a comprehensive test suite combining Laravel Dusk for E2E user-flow testing and Pest for backend feature validation.',
    'Configured real-time error tracking and application monitoring with Sentry Laravel for quick issue resolution.',
    'Configured a secure deployment environment on an Ubuntu VPS with Nginx, establishing a reliable deployment workflow to achieve zero-downtime releases.',
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
    'Developed a robust full-stack web application with a RESTful architecture, utilizing a Laravel 12 API backend and Next.js 15 frontend.',
    'Implemented secure authentication and Role-Based Access Control (RBAC) for Admin and Staff roles using Laravel Sanctum.',
    'Designed a logic-based hierarchical storage system structured across Cupboards, Locations, and Items to ensure efficient asset tracking.',
    'Engineered a secure borrowing and returning system featuring atomic database transactions and concurrency protection for precise stock validation.',
    'Integrated a comprehensive audit logging system to track and record all significant user actions and critical system events.',
    'Created a modern, fully responsive dark-themed user interface utilizing Tailwind CSS to deliver an intuitive and optimized UX.',
  ],
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
    'Architected and deployed a high-traffic greeting card generation platform, successfully handling thousands of concurrent users during peak festive seasons.',
    'Built a dynamic backend image manipulation engine to programmaticly overlay custom user names onto pre-designed high-resolution assets with precise typography mapping.',
    'Integrated seamless social media sharing workflows for Facebook, WhatsApp, and Viber, leveraging dynamic Open Graph (OG) meta tags for rich link previews.',
    'Designed a responsive, mobile-first frontend user interface utilizing Vue.js and Tailwind CSS to ensure a smooth, high-speed user experience across all devices.',
    'Optimized MySQL database structure to efficiently log generation metrics and analytics without degrading application performance.',
    'Wrote comprehensive feature and integration test suites using Pest PHP to validate input sanitization, name rendering logic, and overall system reliability.',
    'Configured a secure server production environment on Ubuntu, optimizing Nginx and Laravel performance (via caching/queues) to handle intensive concurrent image generation requests.',
  ],
  tags: [Techs.laravel, Techs.vue, Techs.mysql, Techs.inertia, Techs.tailwindcss, Techs.testing],
}

const bookShopApp: Project = {
  title: 'Book Stall & ERP System',
  description:
    'An internal Enterprise Resource Planning (ERP) and e-commerce management platform developed for Shraddha Media Network to streamline multi-role operations including employee tracking, cashier point-of-sale (POS) workflows, and financial accounts management.',
  coverImage: '/images/projects/project_006.jpeg',
  role: 'Full-Stack Developer',
  isPublic: false,
  highlights: [
    'Took complete full-stack ownership of the ERP platform, developing both the multi-role backend logic and the unified frontend dashboard.',
    'Engineered multi-role enterprise system with granular access control tailored for Admins, Cashiers, and Account Managers.',
    'Developed dedicated Cashier Module to handle rapid point-of-sale transactions, billing, and real-time stock deductions.',
    'Integrated comprehensive Account Management dashboard to track daily sales revenues, operational expenses, and financial auditing.',
    'Built Employee Management subsystem to securely track staff roles, performance logs, and internal system permissions.',
    'Implemented a remarks-based audit log table to automatically track and record all user activities, including CRUD operations and database actions.',
    'Designed responsive, unified frontend dashboard using Vue.js and Tailwind CSS ensuring seamless operational workflow across devices.',
    'Wrote comprehensive unit and feature test suites to thoroughly validate business logic, transaction workflows, and role-based permissions.',
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
    'Took complete full-stack ownership of the platform, engineering both the complex multi-department backend and the reactive component-driven frontend UI.',
    'Engineered multi-department architecture supporting granular Role-Based Access Control (RBAC) to securely segregate administrative, department-specific, and financial operations.',
    'Built monthly subscription and standing order tracking engine to manage recurring donations, processing millions in local currency.',
    'Implemented a polymorphic remarks-based audit trail to dynamically track and record all user activities and CRUD events across various database models.',
    "Integrated dynamic document and image manipulation tools to automatically generate printable official receipts and customized digital 'Punyanumodana' greeting graphics.",
    'Implemented high-performance reporting subsystem capable of compiling and exporting extensive database records into daily and monthly Excel/PDF financial summaries.',
    'Developed a comprehensive testing suite combining Laravel Dusk for automated E2E browser behavior and PHPUnit for critical business logic validation.',
    'Deployed and configured the complete application environment on a secure Ubuntu VPS running Nginx for stable production hosting.',
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

const hospotoApp: Project = {
  title: 'Hospoto — Job Board Platform',
  description:
    'A specialized full-stack recruitment platform and job board tailored for the hospitality industry, connecting employers with top-tier talent through smart job matching, interactive company profiles, and seamless application workflows.',
  coverImage: '/images/projects/project_007.jpeg',
  link: 'https://hospoto.com.au/',
  role: 'Backend Software Engineer (PHP)',
  isPublic: false,
  highlights: [
    'Developed the unified monolithic backend and web platform, providing both the core web application functionality and the centralized APIs to power the mobile apps.',
    'Engineered high-performance, server-side rendered web portals featuring dual-dashboard architectures for both employers and candidates using Laravel Blade.',
    'Optimized backend database queries and routing in Laravel to handle concurrent requests, ensuring fast page load times and seamless data processing.',
    'Built secure resume management and job application processing workflows with real-time application status tracking.',
    'Integrated Stripe payment gateway to handle secure premium subscription billing, recurring payments.',
    'Deployed and configured the complete application environment on a secure Ubuntu VPS running Nginx for stable production hosting.',
  ],
  tags: [Techs.laravel, Techs.blade, Techs.mysql, Techs.rest_api, Techs.nginx],
}

const parentSeekApp: Project = {
  title: 'Parent Seeking — Social Platform',
  description:
    'A secure, features-rich online dating and matchmaking web application specifically designed for single parents to connect, chat, and build meaningful relationships within a trusted community.',
  coverImage: '/images/projects/project_008.jpeg',
  link: 'https://www.parentseeking.com.au',
  role: 'Backend Software Engineer (PHP)',
  isPublic: false,
  highlights: [
    'Developed the core web platform and centralized RESTful APIs, establishing a unified system to power both the web application and the mobile apps.',
    'Engineered a dynamic profile discovery engine using Laravel and MySQL, enabling users to filter connections by location, age, and affinity interests.',
    'Integrated Firebase Realtime Database to deliver high-performance, instant in-app messaging and real-time chatting across the platform.',
    'Implemented secure, low-latency audio and video calling solutions by integrating the Agora SDK backend API and web interfaces.',
    'Integrated Stripe payment gateway to handle secure premium subscription billing, recurring payments.',
    'Developed a highly responsive frontend architecture using Laravel Blade templates integrated with Tailwind CSS for optimized server-side rendering.',
    'Secured user interaction endpoints and API sessions to guarantee data privacy and platform integrity within the dating community.',
  ],
  tags: [
    Techs.laravel,
    Techs.blade,
    Techs.mysql,
    Techs.agora,
    Techs.firebase,
    Techs.rest_api,
    Techs.nginx,
  ],
}

const UTICApp: Project = {
  title: 'UTIC — Service & Logistics Platform',
  description:
    'An enterprise-grade on-demand service fulfillment and logistics ecosystem in Australia, powered by a robust centralized backend handling high-concurrency mobile application APIs, real-time tracking, and automated service matching.',
  coverImage: '/images/projects/project_010.jpeg',
  link: 'https://www.utic.com.au/',
  role: 'Backend Software Engineer (PHP)',
  isPublic: false,
  highlights: [
    'Architected and developed the unified monolithic platform, providing high-concurrency RESTful APIs for iOS/Android apps alongside the core web application.',
    'Engineered a multi-role administrative system tailored for dispatchers, corporate managers, and system administrators with granular permission controls.',
    'Engineered a smart backend service matching engine to dynamically connect users with optimal service providers based on real-time logistics parameters.',
    'Integrated an automated financial reporting system featuring programmatic PDF generation for official corporate invoices and transaction receipts.',
    'Optimized complex MySQL relational database schemas to guarantee data integrity, fast querying, and secure transaction logging under high-concurrency loads.',
    'Developed a secure administration dashboard utilizing Laravel Blade templates for centralized internal operations and transparent pricing controls.',
    'Deployed and managed the application infrastructure on AWS EC2, configuring the server environment to ensure high availability and continuous uptime.',
  ],
  tags: [Techs.laravel, Techs.blade, Techs.mysql, Techs.aws, Techs.firebase, Techs.rest_api],
}

const AquaticTribeApp: Project = {
  title: 'Aquatic Tribe',
  description:
    'A comprehensive niche e-commerce and social community marketplace tailored for aquarium hobbyists and aquatic life enthusiasts, featuring streamlined product catalogs, secure checkout pipelines, and interactive user interactions.',
  coverImage: '/images/projects/project_009.jpeg',
  link: 'https://www.aquatictribe.com/',
  role: 'Full-Stack Developer',
  isPublic: false,
  highlights: [
    'Took complete full-stack ownership of the monolithic web application, developing both the core e-commerce backend logic and the server-side rendered frontend.',
    'Engineered a dynamic server-side architecture using Laravel Blade to manage extensive aquatic product variations, livestock listings, and custom store profiles.',
    'Integrated secure online payment processing gateways alongside seamless automated transaction confirmation workflows.',
    'Developed advanced filtering mechanisms allowing hobbyists to query items and aquatic species precisely by categories, pricing, and environmental compatibility tags.',
    'Optimized core MySQL database structures and query execution to deliver rapid page load speeds during high-traffic product drops and member discussions.',
    'Designed a visually stunning, fully responsive, and marine-themed modern user interface utilizing Tailwind CSS to maximize user retention and brand consistency.',
  ],
  tags: [Techs.laravel, Techs.blade, Techs.mysql],
}

const ExpenseTrackerApp: Project = {
  title: 'Expense Tracker App',
  description:
    'A cross-platform mobile application built as a hobby project to simplify personal finance tracking, featuring secure user authentication, instant cloud data synchronization, and dynamic expense categorizations.',
  coverImage: '/images/projects/project_011.jpeg',
  link: 'https://github.com/antssanjeewa/smart_expense_tracker',
  role: 'Mobile Developer',
  isPublic: true,
  highlights: [
    'Developed cross-platform mobile application for Android and iOS using Flutter and Dart to manage daily personal finances.',
    'Integrated Supabase as modern Backend-as-a-Service (BaaS) for secure user authentication and real-time cloud data storage.',
    'Designed structured PostgreSQL database tables within Supabase to manage user transactions, profiles, and custom financial categories.',
    'Implemented clean state management and repository patterns to ensure fast, reactive, and responsive mobile user interface.',
  ],
  tags: [Techs.flutter, Techs.supabase],
}
const PeriodicApp: Project = {
  title: 'Periodic Table App',
  description:
    'An interactive, educational mobile application built to explore the chemical elements of the periodic table, providing structured data, atomic properties, and a highly visual chemical interface.',
  coverImage: '/images/projects/project_012.jpeg',
  link: 'https://github.com/antssanjeewa/periodic_table_app',
  role: 'Mobile Developer',
  isPublic: true,
  highlights: [
    'Built interactive, visually rich mobile application showcasing the periodic table of elements using Flutter.',
    'Designed responsive and scalable grid layout that flawlessly aligns and displays chemical elements across various mobile screen sizes.',
    'Implemented seamless navigation and local state handling to allow users to instantly tap elements and inspect detailed atomic properties and configurations.',
    'Focused on fluid UI animations and semantic color-coding to group chemical series (e.g., noble gases, alkali metals) intuitively.',
  ],
  tags: [Techs.flutter],
}

export const projects: Project[] = [
  SermonProject,
  UTICApp,
  parentSeekApp,

  hospotoApp,
  OnlineProject,
  donationManageApp,

  bookShopApp,
  AquaticTribeApp,
  vesakCardApp,

  InventoryApp,
  ExpenseTrackerApp,
  PeriodicApp,
]

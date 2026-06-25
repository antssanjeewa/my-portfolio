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

const hospotoApp: Project = {
  title: 'Hospoto — Job Board Platform',
  description:
    'A specialized full-stack recruitment platform and job board tailored for the hospitality industry, connecting employers with top-tier talent through smart job matching, interactive company profiles, and seamless application workflows.',
  coverImage: '/images/projects/project_007.jpeg',
  link: 'https://hospoto.com.au/',
  role: 'Backend Software Engineer (PHP)',
  isPublic: false,
  highlights: [
    'Engineered a high-performance, responsive job portal featuring dual-dashboard architectures for both employers (job posters) and candidates (job seekers).',
    'Developed an advanced filtering and search subsystem enabling users to query jobs efficiently by role type, location, hospitality sectors, and experience levels.',
    'Built a secure resume management and job application processing workflow with real-time application status tracking.',
    'Designed a clean, modern, and mobile-first user interface utilizing Vue.js and Tailwind CSS, ensuring smooth navigation for on-the-go shift workers.',
    'Optimized backend RESTful APIs using Laravel to handle thousands of concurrent queries, ensuring fast page load times and seamless state updates.',
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
    'Engineered a dynamic profile matching discovery engine enabling users to filter connections by precise location, age, and personalized affinity interests.',
    'Integrated Firebase Realtime Database to deliver a high-performance, instant in-app messaging and real-time chatting experience.',
    'Implemented secure, low-latency audio and video calling solutions within the browser using Agora SDK web integration.',
    'Developed a highly responsive and lightweight frontend architecture using Laravel Blade templates integrated with Tailwind CSS for rapid server-side rendering.',
    'Implemented secure user interaction validation and session protection tools to guarantee maximum privacy and platform integrity.',
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
    'Architected and optimized high-performance RESTful APIs using Laravel to power the native iOS and Android mobile applications seamlessly.',
    'Engineered a smart, AI-driven service matching engine on the backend to dynamically connect users with optimal service providers based on real-time parameters.',
    'Designed and implemented complex relational database schemas using MySQL to guarantee data integrity, fast querying, and secure transaction logging.',
    'Deployed and managed the core application infrastructure on AWS, ensuring high availability, continuous uptime, and secure data storage workflows.',
    'Developed a secure administration dashboard utilizing Laravel Blade templates for internal dispatchers, corporate managers, and transparent pricing controls.',
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
    'Engineered a dynamic and high-performance e-commerce ecosystem capable of managing extensive aquatic product variations, livestock listings, and custom store profiles.',
    'Integrated secure and optimized online payment processing gateways alongside seamless automated transaction confirmation workflows.',
    'Developed an advanced filtering mechanism allowing hobbyists to query items and aquatic species precisely by categories, pricing, and environmental compatibility tags.',
    'Designed a visually stunning, responsive, and marine-themed modern user interface utilizing Tailwind CSS to maximize user retention and brand consistency.',
    'Optimized core database structures and state management processes to deliver rapid page load speeds during high-traffic product drops and member discussions.',
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
    'Developed a cross-platform mobile application for Android and iOS using Flutter and Dart to manage daily personal finances.',
    'Integrated Supabase as a modern Backend-as-a-Service (BaaS) for secure user authentication and real-time cloud data storage.',
    'Designed structured PostgreSQL database tables within Supabase to manage user transactions, profiles, and custom financial categories.',
    'Implemented clean state management and repository patterns to ensure a fast, reactive, and responsive mobile user interface.',
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
    'Built an interactive, visually rich mobile application showcasing the periodic table of elements using Flutter.',
    'Designed a responsive and scalable grid layout that flawlessly aligns and displays chemical elements across various mobile screen sizes.',
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

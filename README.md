# 💻 Modern Developer Portfolio — Sameera Sanjeewa

[![Vue 3](https://img.shields.io/badge/Vue.js-3.5+-4fc08d?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0+-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-06b6d4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.0+-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)

A premium, highly responsive, and data-driven portfolio web application designed for senior full-stack developers. Built using **Vue 3 (Composition API)**, **TypeScript**, and **Tailwind CSS v4**, this application features a sleek dark-mode-first design, fluid layout transitions, interactive components, and high-quality typography.

---

## ✨ Features

*   **🌑 Elegant Dark-Mode Aesthetic:** Tailored dark theme featuring a customized slate/emerald palette, subtle glassmorphism headers, and smooth hover state micro-animations.
*   **⚙️ 100% Data-Driven Architecture:** All portfolio contents (Bio, Experience, Skills, Projects, Contact info, Resume, and Social links) are completely decoupled from the UI markup and managed from a single configuration file.
*   **📱 Fully Responsive & Fluid Layout:** Mobile-first design leveraging Tailwind CSS v4's modern utilities. Supports smooth scroll navigation and high-density displays.
*   **🔍 Interactive Project Details:** Engaging UI featuring a custom modal dialog (`ProjectDialog.vue`) that showcases project descriptions, challenges, features, and business impacts.
*   **⚡ Built for Performance:** Optimized with Vite 8, utilizing lightning-fast build times, lazy loading, and lightweight custom scrollbars.
*   **🛡️ Robust Code Quality Tools:** Configured with TypeScript type-safety (`vue-tsc`), ESLint, Oxlint (ultra-fast linter), and Prettier.

---

## 🛠️ Tech Stack & Tooling

*   **Core:** [Vue 3](https://vuejs.org/) (Composition API, `<script setup>`)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (Strictly typed, type checking via `vue-tsc`)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using `@import "tailwindcss"` & modern `@theme inline` configurations)
*   **Routing:** [Vue Router](https://router.vuejs.org/)
*   **Icons:** [Lucide Vue Next](https://lucide.dev/)
*   **Build Tool:** [Vite 8](https://vite.dev/)
*   **Linters & Formatters:** [Oxlint](https://github.com/oxc-project/oxc) (performance-driven JS/TS linter), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

---

## 📂 Repository Structure

The project features a clean, highly modular architecture that decouples structural layouts, page sections, and UI elements:

```text
src/
├── assets/             # Static assets & stylesheets
│   └── css/
│       └── main.css     # Tailwind CSS v4 directives, custom theme variables, & utility layer
├── components/         # Reusable Vue components
│   ├── layout/         # Structural components (Header, Footer)
│   ├── UI/             # Shared base UI components (Button, Card, ProjectDialog)
│   └── sections/       # Independent page sections (Hero, About, Experience, Skills, Projects, Contact)
├── data/               # Centralized data engine
│   └── portfolioData.ts # Contains all dynamic profile information and project logs
├── router/             # Vue Router configurations
├── types/              # Global TypeScript interface definitions
├── utils/              # Helper utilities
├── views/              # High-level views (HomeView)
├── App.vue             # Root application wrapper
└── main.ts             # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites
*   **Node.js:** `^22.18.0` or `>=24.12.0`
*   **Package Manager:** `npm` (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/antssanjeewa/portfolio_web_app.git
   cd portfolio_web_app
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server
Start the local Vite dev server with hot-module replacement (HMR):
```bash
npm run dev
```
Once started, open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Useful Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Vite development server locally |
| `npm run build` | Type-checks code with `vue-tsc` and builds a minified production bundle in `dist/` |
| `npm run preview` | Runs the production build locally for verification |
| `npm run lint` | Lints the codebase using ESLint and Oxlint with auto-fix enabled |
| `npm run format` | Formats all files inside `src/` using Prettier |

---

## ⚙️ Customization Guide

Updating the portfolio's content is incredibly simple. All data is centralized in [src/data/portfolioData.ts](file:///home/ants/development/Others/portfolio_web_app/src/data/portfolioData.ts). 

### How to update your profile content:
Simply open `src/data/portfolioData.ts` and modify the exported constants:

```typescript
// Define your personal details
export const name = 'Your Name'
export const title = 'Your Professional Title'
export const bio = 'A compelling summary of your professional journey and expertise...'
export const email = 'your.email@example.com'
export const mobile = '+123 456 7890'

// Update social networks & document links
export const github = 'https://github.com/yourusername'
export const linkedin = 'https://linkedin.com/in/yourusername'
export const resume_link = '/resume/your-resume.pdf'
export const profile_link = '/images/profile.png'
```

### How to update skills:
Skills are organized by category. Add, remove, or modify items within the `skills` array:
```typescript
export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['PHP (8.x)', 'TypeScript', 'Go', 'Python'],
  },
  // Add more categories as needed...
]
```

### How to update experience:
Add achievements under your respective roles:
```typescript
export const experiences: Experience[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Company Name',
    location: 'Location (Remote/On-site)',
    period: '2023 - Present',
    achievements: [
      'Architected cloud-native services reducing infrastructure costs by 30%.',
      'Led a team of 4 frontend engineers to rebuild legacy apps in Vue 3.',
    ],
  },
]
```

### How to add/modify projects:
Projects support rich metadata fields including challenges, feature highlights, and measurable business impact:
```typescript
export const projects: Project[] = [
  {
    title: 'Project Title',
    description: 'A brief description shown on the project card.',
    longDescription: 'An in-depth explanation shown in the details modal.',
    challenge: 'A paragraph detailing the technical challenge faced during development.',
    features: [
      'Key feature one description.',
      'Key feature two description.',
    ],
    impact: '⚡ Measurable outcome (e.g., 40% performance boost, $10k saved).',
    coverImage: '/images/projects/project-cover.jpeg',
    tags: [Techs.laravel, Techs.vue, Techs.mysql],
  },
]
```

---

## 🎨 Styling & Theming

The layout uses a custom utility layer built on top of **Tailwind CSS v4**. Custom colors and variables are configured using standard CSS variables inside [src/assets/css/main.css](file:///home/ants/development/Others/portfolio_web_app/src/assets/css/main.css):

*   **Primary Theme Accent:** Emerald Green (`hsl(160 84% 39%)`)
*   **Background:** Deep Slate (`hsl(224 71% 4%)` / `#020617`)
*   **Typography:** The application imports and uses **Inter** as its primary typeface, utilizing optimized font features for high-legibility rendering (`font-feature-settings`).

To customize the primary brand colors, adjust the `--primary` HSL value inside `main.css`.

---

## 👤 Author & License

*   **Author:** Sameera Sanjeewa
*   **Email:** [antssanjeewa94@gmail.com](mailto:antssanjeewa94@gmail.com)
*   **GitHub:** [@antssanjeewa](https://github.com/antssanjeewa)
*   **LinkedIn:** [Sameera Sanjeewa](https://linkedin.com/in/sameera-sanjeewa-ants)

This project is private and proprietary. All rights reserved.

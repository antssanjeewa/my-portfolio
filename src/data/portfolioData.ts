import type { Skill, Experience } from '@/types/portfolio'

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
    items: ['PHP (7.x, 8.x)', 'JavaScript (ES6+)', 'TypeScript', 'Dart', 'Python'],
  },
  {
    category: 'Frameworks & State',
    items: ['Laravel (Expert)', 'Vue.js 3', 'Nuxt.js', 'Pinia / Vuex', 'Inertia.js', 'Flutter'],
  },
  {
    category: 'Backend & Cloud',
    items: ['RESTful APIs', 'AWS (EC2, S3, RDS, CloudFront)', 'Docker', 'CI/CD (GitHub Actions)', 'Nginx'],
  },
  {
    category: 'Databases & Quality Assurance',
    items: ['MySQL (Optimization)', 'Redis', 'TDD (Pest, PHPUnit)', 'E2E (Playwright)', 'Git', 'Clean Architecture'],
  },
]

export const experiences: Experience[] = [
  {
    role: 'Software Engineer (Backend)',
    company: 'Elegant Media',
    location: 'Melbourne, Australia (Remote)',
    period: '2023 - 2026',
    achievements: [
      'Architected high-throughput Laravel backends supporting 200,000+ active users, achieving 99.9% uptime.',
      'Optimized multi-tier AWS environments (EC2, RDS, S3, CloudFront), enhancing application performance by 25%.',
      'Engineered real-time features integrating Twilio and Agora APIs for instant messaging and video streaming.',
      'Designed and managed automated CI/CD pipelines (GitHub Actions, Docker) reducing deployment downtime by 40%.',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Shraddha Media Network',
    location: 'Colombo, Sri Lanka',
    period: '2019 - 2023',
    achievements: [
      'Developed core business apps using Laravel & Vue.js, automating workflows and reducing manual work by 40%.',
      'Optimized complex MySQL database schemas and query structures, resulting in a 30% reduction in production server load.',
      'Designed and deployed a highly secure custom Donation Management System, improving accounting accuracy by 35%.',
      'Modernized legacy interfaces into high-performance SPAs using Vue.js, Pinia, and Tailwind CSS.',
    ],
  },
]

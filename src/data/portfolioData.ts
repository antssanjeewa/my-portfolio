import type { Skill, Experience, Education } from '@/types/portfolio'

export const name = 'Sameera Sanjeewa'
export const email = 'antssanjeewa94@gmail.com'
export const mobile = '+94 71 255 4866'
export const title = 'Software Engineer | Full-Stack Developer'
export const bio =
  'Innovative Software Engineer with 6+ years of experience engineering high-performance web applications. Specializing in backend architectures with Laravel and crafting fluid user interfaces with Vue.js. Focused on building secure, scalable enterprise systems, optimizing complex databases, and writing clean, future-proof code.'

export const github = 'https://github.com/antssanjeewa'
export const linkedin = 'https://linkedin.com/in/sameera-sanjeewa-ants'

export const profile_link = '/images/profile.png'
export const resume_link = '/resume/SAMEERA SANJEEWA.pdf'

export const skills: Skill[] = [
  {
    category: 'Architecture & Backend',
    items: [
      'PHP (7.x, 8.x) / OOP / Design Patterns',
      'Laravel (Monolithic & Multi-tenant)',
      'Java & Python Development',
      'RESTful API Architecture & Design',
      'Clean Architecture & SOLID Principles',
    ],
  },
  {
    category: 'Modern Frontend & State',
    items: [
      'Vue.js (2 & 3 with Composition API)',
      'React.js & TypeScript',
      'State Management (Pinia / Vuex)',
      'Inertia.js & Laravel Blade Templates',
      'Flutter (Cross-Platform Mobile Application)',
    ],
  },
  {
    category: 'Data Layer & Optimization',
    items: [
      'MySQL (Schema Design & Indexing)',
      'Database Query Optimization',
      'Redis Caching & Data Management',
      'Firebase Realtime Database',
      'Polymorphic Relations & Audit Trails',
    ],
  },
  {
    category: 'DevOps & Quality Assurance',
    items: [
      'AWS (EC2, S3) & Ubuntu VPS Management',
      'Nginx Web Server Configuration',
      'CI/CD (GitHub Actions) & Docker',
      'TDD / Automated Testing (Pest, PHPUnit)',
      'E2E Browser Testing (Playwright, Dusk)',
    ],
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

export const education: Education[] = [
  {
    type: 'Undergraduate Degree',
    degree: 'BSc (Eng) in Computer Engineering',
    institution: 'University of Peradeniya, Sri Lanka',
    year: '2015 – 2019',
  },
  {
    type: 'Certification',
    degree: 'Full Stack Web Development',
    institution: 'University of Moratuwa × DP Education',
    year: '2022',
  },
  {
    type: 'Certification',
    degree: 'Flutter Mobile Development',
    institution: 'Franklin Training Institute',
    year: '2022',
  },
  {
    type: 'Certification',
    degree: 'OCJP — Oracle Certified Java Professional',
    institution: 'Dakma Certification Center, Matara',
    year: '2015',
  },
]

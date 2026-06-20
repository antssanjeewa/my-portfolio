import type { Skill, Experience, Project } from '@/types/portfolio'

export const name = 'Sameera Sanjeewa'
export const email = 'antssanjeewa94@gmail.com'
export const mobile = '+94 71 255 4866'
export const title = 'Senior Software Engineer | Full-Stack Developer'
export const bio =
  'Innovative Software Engineer with over 6 years of experience in architecting high-performance web applications using PHP (Laravel) and Vue.js/Nuxt.js. Expert in AWS infrastructure and real-time APIs.'

export const github = 'https://github.com/antssanjeewa'
export const linkedin = 'https://linkedin.com/in/sameera-sanjeewa-ants'

export const profile_link = '/src/assets/images/profile.png'
export const resume_link = '/Sameera_Sanjeewa_CV.pdf'

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

export const projects: Project[] = [
  {
    title: 'Donation Management System',
    description:
      'A high-security platform with optimized MySQL reporting, automated receipts, and streamlined workflows.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'Bookshop Application',
    description:
      'Full-stack system featuring a real-time inventory synchronization mechanism and API-first architecture.',
    tags: ['Laravel', 'Vue 3', 'REST API', 'Redis'],
  },
  {
    title: 'SIGreetings.com',
    description:
      'Scaled and maintained a cloud-based digital greeting platform with integrated production payment gateways.',
    tags: ['PHP', 'Laravel', 'AWS', 'Payment Gateway'],
  },
  {
    title: 'SIGreetings.com',
    description:
      'Scaled and maintained a cloud-based digital greeting platform with integrated production payment gateways.',
    tags: ['PHP', 'Laravel', 'AWS', 'Payment Gateway'],
  },
  {
    title: 'SIGreetings.com',
    description:
      'Scaled and maintained a cloud-based digital greeting platform with integrated production payment gateways.',
    tags: ['PHP', 'Laravel', 'AWS', 'Payment Gateway'],
  },
  {
    title: 'SIGreetings.com',
    description:
      'Scaled and maintained a cloud-based digital greeting platform with integrated production payment gateways.',
    tags: ['PHP', 'Laravel', 'AWS', 'Payment Gateway'],
  },
  {
    title: 'SIGreetings.com',
    description:
      'Scaled and maintained a cloud-based digital greeting platform with integrated production payment gateways.',
    tags: ['PHP', 'Laravel', 'AWS', 'Payment Gateway'],
  },
]

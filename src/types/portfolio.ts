export interface Skill {
  category: string
  items: string[]
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  achievements: string[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
}

export interface PortfolioData {
  name: string
  title: string
  bio: string
  skills: Skill[]
  experiences: Experience[]
  projects: Project[]
}

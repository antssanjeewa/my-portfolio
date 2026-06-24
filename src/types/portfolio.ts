import type { Component } from 'vue'

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
  tags: tech[]
  link?: string
  role?: string
  isPublic: boolean

  longDescription?: string
  github?: string
  period?: string
  challenge?: string
  impact?: string
  impactSummary?: string
  features?: string[]
  highlights?: string[]
  coverImage?: string
}

export interface tech {
  id: string
  label: string
  colorClass: string
  icon?: Component
}

export interface PortfolioData {
  name: string
  title: string
  bio: string
  skills: Skill[]
  experiences: Experience[]
  projects: Project[]
}

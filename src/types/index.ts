import { IconType } from 'react-icons'

export interface Skill {
  name: string
  icon: IconType
}

export interface Experience {
  title: string
  company: string
  period: string
  responsibilities: string[]
}

export interface Project {
  title: string
  description: string
  technologies: string
}

export interface Education {
  title: string
  institution: string
  period: string
} 
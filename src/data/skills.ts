import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    title: 'Backend y datos',
    skills: [
      { name: 'C#', level: 90 },
      { name: '.NET', level: 75 },
      { name: 'Node.js', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'Rust', level: 60 },
      { name: 'PHP', level: 50 },
      { name: 'Laravel', level: 50 },
      { name: 'NoSQL', level: 50 },
    ],
  },
  {
    title: 'Herramientas',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Linux y servidores', level: 75 },
    ],
  },
]

/** Tecnologías del marquee: solo las que aparecen de verdad en los proyectos. */
export const techMarquee: string[] = [
  'React',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'Rust',
  'Axum',
  'C#',
  '.NET',
  'PHP',
  'Laravel',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
  'Docker',
  'Git',
  'Linux',
  'Unity',
  'Cloudflare',
]

export const courses: string[] = ['Python Essentials 1 y 2 · Cisco Networking Academy']

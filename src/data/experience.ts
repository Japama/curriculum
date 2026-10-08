import type { EducationEntry, TimelineEntry } from './types'

export const experience: TimelineEntry[] = [
  {
    role: 'Profesor de Informática',
    org: 'Formación Profesional',
    period: 'Actualidad',
    description:
      'Enseño sistemas, redes, scripts y fundamentos de IT integrando tecnologías actuales. Es donde valido si una herramienta se entiende de verdad y en qué se atasca la gente.',
  },
  {
    role: 'Full Stack Developer',
    org: 'Synit',
    period: '1 año',
    description:
      'Aplicación web para la gestión del mantenimiento de molinos eólicos, con mejoras de rendimiento y escalabilidad sobre una base de datos relacional.',
    stack: ['HTML', 'CSS', 'JavaScript', '.NET', 'MySQL'],
  },
  {
    role: 'Full Stack Developer',
    org: 'Everillion',
    period: '6 meses',
    description:
      'Aplicación web de fidelización de clientes con ASP.NET Core MVC, cuidando consultas y estructura de datos para sostener el crecimiento.',
    stack: ['ASP.NET Core MVC', '.NET', 'MySQL'],
  },
  {
    role: 'Full Stack Developer',
    org: 'Promoshop',
    period: '6 meses',
    description:
      'Desarrollo de un ERP para la gestión integral de la empresa, desde los formularios de entrada hasta los informes.',
    stack: ['PHP', 'HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
  },
]

export const education: EducationEntry[] = [
  { year: '2024', title: 'Máster en Profesorado', place: 'Universidad de Alicante' },
  { year: '2023', title: 'Máster en Diseño y Programación de Videojuegos', place: 'UOC' },
  { year: '2021', title: 'Graduado en Ingeniería Informática', place: 'Universidad de Alicante' },
  {
    year: '2015',
    title: 'Ciclo Superior en Sistemas y Redes',
    place: 'I.E.S. Marcos Zaragoza',
  },
]

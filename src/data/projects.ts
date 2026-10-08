import type { Project } from './types'

/**
 * Añadir un proyecto = añadir un objeto aquí.
 * Ocultarlo sin borrar su ficha = poner `visible: false` (caso de MoodPlan).
 */
export const projects: Project[] = [
  {
    id: 'profeasy',
    name: 'Profeasy',
    tagline: 'Evaluación competencial para Formación Profesional',
    description:
      'Plataforma web autoalojada y de código abierto que automatiza la evaluación competencial en FP: motor de reglas visual, importador de tareas de Aules y cuaderno de calificación que recalcula en tiempo real. La lógica de cálculo se ejecuta en local para cumplir con el RGPD.',
    highlights: [
      'Motor de reglas dinámico y agnóstico: cada docente define sus ponderaciones y condiciones sin escribir código.',
      'Importador con deduplicación inteligente desde CSV de Aules (upsert por email y tarea).',
      'Cuaderno de calificación hiper-reactivo y modo privacidad para proyectar notas en el aula sin exponer nombres.',
    ],
    url: 'https://profeasy.es',
    domain: 'profeasy.es',
    links: [{ label: 'Ver Profeasy', href: 'https://profeasy.es' }],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Rust', 'Axum', 'PostgreSQL', 'Docker'],
    status: 'live',
    visible: true,
    featured: true,
    accent: 'violet',
  },
  {
    id: 'proentreno',
    name: 'ProEntreno',
    tagline: 'Gestión multiclub y multideporte para entidades deportivas',
    description:
      'SaaS de gestión para clubes y federaciones: inscripciones, jugadores, pagos, categorías, calendario, licencias y área deportiva. Nació en el Club de Rugby La Vila y se generalizó para que cualquier club, de cualquier deporte, personalice su nombre, color y logotipo con sus datos aislados.',
    highlights: [
      'Multiclub y multideporte: catálogo de 252 deportes en 18 familias, con plantillas de destrezas por deporte.',
      'Área administrativa y deportiva con roles: administración, coordinación, entrenadores y superadministración de plataforma.',
      'Aislamiento por club con Row Level Security, auditoría de acciones sensibles, exportación y supresión de datos personales.',
    ],
    url: 'https://proentreno.es',
    domain: 'proentreno.es',
    links: [{ label: 'Ver ProEntreno', href: 'https://proentreno.es' }],
    stack: ['React 19', 'Vite', 'React Router', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    status: 'live',
    visible: true,
    featured: true,
    accent: 'amber',
  },
  {
    id: 'teacherinator',
    name: 'Teacherinator',
    tagline: 'Asistencia y guardias para centros educativos',
    description:
      'Plataforma para gestionar la asistencia del profesorado y el reparto de guardias en instituciones educativas, con un backend en Rust para el cálculo crítico y un frontend en React.',
    highlights: [
      'Cálculo de guardias y ausencias en tiempo real sobre un backend Rust.',
      'Cliente y servidor en repositorios separados, con despliegue propio.',
    ],
    url: 'https://teacherinator.juanbautistavalero.com',
    domain: 'teacherinator.juanbautistavalero.com',
    links: [
      { label: 'Ver demo', href: 'https://teacherinator.juanbautistavalero.com' },
      { label: 'Código del front', href: 'https://github.com/Japama/TeacherinatorClient' },
      { label: 'Código del back', href: 'https://github.com/Japama/TeacherinatorServer' },
    ],
    stack: ['React', 'Rust', 'REST API', 'Docker'],
    status: 'live',
    visible: true,
    featured: false,
    accent: 'blue',
  },
  {
    id: 'dex',
    name: 'Dex',
    tagline: 'Enciclopedia visual de Pokémon',
    description:
      'Aplicación para explorar Pokémon con animaciones interactivas, búsqueda y fichas detalladas. Un ejercicio de frontend cuidado sobre una API propia con varias bases de datos.',
    highlights: [
      'Frontend en React con SASS y transiciones propias.',
      'Backend en Node.js con Express sobre MongoDB y PostgreSQL.',
    ],
    url: 'https://dex.juanbautistavalero.com',
    domain: 'dex.juanbautistavalero.com',
    links: [
      { label: 'Ver demo', href: 'https://dex.juanbautistavalero.com' },
      { label: 'Código', href: 'https://github.com/Japama/dex/tree/main' },
    ],
    stack: ['React', 'SASS', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    status: 'live',
    visible: true,
    featured: false,
    accent: 'cyan',
  },
  {
    id: 'tsunys-adventure',
    name: "Tsuny's Adventure",
    tagline: 'Videojuego de plataformas 2D pensado para personas con autismo',
    description:
      'Proyecto de fin de máster: un plataformas 2D diseñado desde cero pensando en la accesibilidad cognitiva, con control de estímulos y ritmo pausado.',
    highlights: [
      'Diseño de niveles y mecánicas orientado a la accesibilidad cognitiva.',
      'Desarrollado en Unity con C# como trabajo de fin de máster.',
    ],
    links: [
      { label: 'Código', href: 'https://github.com/Japama/TFM' },
      { label: 'Vídeo demostrativo', href: 'https://www.youtube.com/watch?v=resLexYIeLM' },
    ],
    stack: ['Unity', 'C#', 'Diseño de juego'],
    status: 'live',
    visible: true,
    featured: false,
    accent: 'emerald',
  },
  {
    id: 'moodplan',
    name: 'MoodPlan',
    tagline: 'Itinerarios de ocio local según cómo te sientes hoy',
    description:
      'MVP en construcción: genera planes de ocio locales a partir del estado de ánimo, con quién vas, cuánto quieres gastar y cuánto tiempo tienes. Incluye wizard de 7 pasos, storytelling con IA y panel B2B con analítica de producto.',
    highlights: [
      'Algoritmo de itinerarios sobre una base de datos propia de lugares y auras.',
      'Storytelling con IA con proveedor conmutable y fallback garantizado.',
      'Autenticación, RGPD, panel B2B y observabilidad desde el primer despliegue.',
    ],
    links: [{ label: 'Código', href: 'https://github.com/Japama' }],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'TypeScript', 'OpenAI'],
    status: 'in_development',
    // Sin dominio y aún en desarrollo: sus datos están completos, pero no se publica.
    visible: false,
    featured: false,
    accent: 'emerald',
  },
]

/** Proyectos que se muestran en la web. Punto único de filtrado. */
export const visibleProjects: Project[] = projects.filter((project) => project.visible)

export const featuredProjects: Project[] = visibleProjects.filter((project) => project.featured)

export const otherProjects: Project[] = visibleProjects.filter((project) => !project.featured)

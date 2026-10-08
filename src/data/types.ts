export type ProjectStatus = 'live' | 'in_development'

export type ProjectAccent = 'violet' | 'amber' | 'cyan' | 'blue' | 'emerald'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  /** Identificador estable: se usa en tests y como ancla de la sección. */
  id: string
  name: string
  /** Frase corta que resume el producto. */
  tagline: string
  /** Descripción ampliada, para la tarjeta destacada. */
  description: string
  /** Qué problema resuelve o qué aporta, en viñetas cortas. */
  highlights: string[]
  /** Dominio o repositorio principal, si existe. */
  url?: string
  /** Dominio mostrado en la interfaz (sin protocolo). */
  domain?: string
  links: ProjectLink[]
  stack: string[]
  status: ProjectStatus
  /**
   * Controla si el proyecto se renderiza en la web.
   * MoodPlan está en desarrollo y sin dominio: sus datos viven aquí con
   * `visible: false` para poder publicarlo cambiando una sola línea.
   */
  visible: boolean
  /** Los productos en producción se pintan en tamaño grande. */
  featured: boolean
  accent: ProjectAccent
}

export interface Skill {
  name: string
  /** 0-100, para el ancho de la barra de progreso. */
  level: number
}

export interface SkillGroup {
  title: string
  skills: Skill[]
}

export interface TimelineEntry {
  role: string
  org: string
  /** Periodo legible ("2022 — hoy"). Se omite si no se conoce con certeza. */
  period?: string
  description: string
  stack?: string[]
}

export interface EducationEntry {
  year: string
  title: string
  place?: string
}

export interface LanguageEntry {
  name: string
  level: string
}

export interface Principle {
  title: string
  description: string
}

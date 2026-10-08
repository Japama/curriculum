import type { ProjectAccent } from '@/data/types'

interface AccentStyles {
  /** Degradado de la cabecera de la tarjeta destacada. */
  gradient: string
  /** Punto de color del listado. */
  dot: string
  /** Borde al pasar el ratón. */
  border: string
  /** Tinte de fondo del nombre. */
  text: string
}

/** Estilos por acento de producto. Literales completos para que Tailwind los detecte. */
export const accentStyles: Record<ProjectAccent, AccentStyles> = {
  violet: {
    gradient: 'from-violet-500/25 via-violet-500/5 to-transparent',
    dot: 'bg-violet-400',
    border: 'hover:border-violet-400/50',
    text: 'text-violet-200',
  },
  amber: {
    gradient: 'from-amber-500/25 via-amber-500/5 to-transparent',
    dot: 'bg-amber-400',
    border: 'hover:border-amber-400/50',
    text: 'text-amber-200',
  },
  cyan: {
    gradient: 'from-cyan-500/25 via-cyan-500/5 to-transparent',
    dot: 'bg-cyan-400',
    border: 'hover:border-cyan-400/50',
    text: 'text-cyan-200',
  },
  blue: {
    gradient: 'from-sky-500/25 via-sky-500/5 to-transparent',
    dot: 'bg-sky-400',
    border: 'hover:border-sky-400/50',
    text: 'text-sky-200',
  },
  emerald: {
    gradient: 'from-emerald-500/25 via-emerald-500/5 to-transparent',
    dot: 'bg-emerald-400',
    border: 'hover:border-emerald-400/50',
    text: 'text-emerald-200',
  },
}

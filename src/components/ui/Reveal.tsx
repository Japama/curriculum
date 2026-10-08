import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Retardo en segundos, para entradas escalonadas. */
  delay?: number
  /** Distancia vertical del desplazamiento inicial. */
  y?: number
  as?: 'div' | 'li' | 'section' | 'article' | 'header'
}

/**
 * Entrada al hacer scroll. Con `prefers-reduced-motion` el contenido aparece
 * ya visible y sin desplazamiento.
 */
export function Reveal({ children, className, delay = 0, y = 24, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  if (reduce) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  )
}

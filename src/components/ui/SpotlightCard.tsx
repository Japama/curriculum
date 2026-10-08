import { useCallback, useRef, type PointerEvent, type ReactNode } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  /** Sobrescribe las coordenadas iniciales del foco (por defecto, centro). */
  as?: 'article' | 'div' | 'li'
}

/**
 * Tarjeta cuyo borde y fondo se iluminan siguiendo al puntero. Las coordenadas
 * viajan por variables CSS, así que mover el ratón no re-renderiza React.
 */
export function SpotlightCard({ children, className = '', as: Tag = 'article' }: SpotlightCardProps) {
  const ref = useRef<HTMLElement | null>(null)

  const onPointerMove = useCallback((event: PointerEvent<HTMLElement>) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    if (!rect.width || !rect.height) return
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    node.style.setProperty('--spotlight-x', `${x.toFixed(2)}%`)
    node.style.setProperty('--spotlight-y', `${y.toFixed(2)}%`)
  }, [])

  return (
    <Tag
      ref={ref as never}
      onPointerMove={onPointerMove}
      className={`spotlight glass rounded-2xl transition-colors duration-300 hover:border-electric/40 ${className}`}
    >
      {children}
    </Tag>
  )
}

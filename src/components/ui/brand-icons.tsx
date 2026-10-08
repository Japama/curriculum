import type { SVGProps } from 'react'

/**
 * Iconos de marca propios: lucide-react v1 ya no incluye iconos de marcas, y
 * así evitamos una dependencia extra. Comparten los trazos y el grosor de
 * lucide para que la interfaz se vea homogénea.
 */
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  width: 24,
  height: 24,
  'aria-hidden': true,
  focusable: false,
}

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M15 21v-3.6a3.1 3.1 0 0 0-.9-2.5c2.9-.3 5.9-1.4 5.9-6.4a5 5 0 0 0-1.3-3.5 4.7 4.7 0 0 0-.1-3.4s-1.1-.3-3.5 1.3a12 12 0 0 0-6.3 0C6.4 1.3 5.3 1.6 5.3 1.6a4.7 4.7 0 0 0-.1 3.4A5 5 0 0 0 3.9 8.5c0 5 3 6 5.9 6.4a3.1 3.1 0 0 0-.9 2.5V21" />
      <path d="M9 19.2c-2.6.8-4-1-4-1" />
    </svg>
  )
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M7.8 10.5V16.5" />
      <path d="M7.8 7.9h.01" />
      <path d="M11.7 16.5v-3.3a2.4 2.4 0 0 1 4.8 0v3.3" />
      <path d="M11.7 16.5V10.5" />
    </svg>
  )
}

import type { LanguageEntry, Principle } from './types'

const env = import.meta.env

/** Dominio canónico de la web. Configurable con VITE_SITE_URL. */
export const SITE_URL: string = env.VITE_SITE_URL ?? 'https://juanbautistavalero.com'

/** Placeholder claro: si no defines VITE_CONTACT_EMAIL, se ve este valor. */
export const CONTACT_EMAIL: string = env.VITE_CONTACT_EMAIL ?? 'hola@juanbautistavalero.com'

export const bio = {
  name: 'Juan Bautista Valero Carrasco',
  shortName: 'Juan Bautista Valero',
  initials: 'JB',
  role: 'Desarrollador de software',
  headline: 'Construyo productos SaaS y enseño a programar.',
  intro:
    'Profesor de informática en formación profesional y desarrollador full stack. Diseño, programo y despliego mis propios productos: herramientas que usan docentes y clubes deportivos reales.',
  location: 'Valencia, España',
  email: CONTACT_EMAIL,
  github: 'https://github.com/japama',
  linkedin: 'https://www.linkedin.com/in/juan-bautista-valero-carrasco',
  /** Cifras verificables, sin métricas infladas. */
  stats: [
    { value: '2', label: 'productos en producción' },
    { value: '5', label: 'proyectos publicados' },
    { value: '10+', label: 'tecnologías en uso diario' },
  ],
  principles: [
    {
      title: 'Producto propio, de principio a fin',
      description:
        'Del modelo de datos al diseño de la interfaz y al despliegue. Productos en marcha que uso y mantengo, no prototipos de escaparate.',
    },
    {
      title: 'Me obsesiona la privacidad',
      description:
        'Profeasy calcula y enmascara notas en el navegador: los datos del alumnado no salen del centro si no tienen que salir.',
    },
    {
      title: 'Docencia como contexto',
      description:
        'Llevo años explicando sistemas, redes y programación en FP. Me obliga a entender las cosas de verdad y a diseñar pensando en quien lo usará.',
    },
  ] satisfies Principle[],
}

export const languages: LanguageEntry[] = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Valenciano', level: 'Avanzado' },
  { name: 'Inglés', level: 'Intermedio' },
  { name: 'Japonés', level: 'Básico' },
]

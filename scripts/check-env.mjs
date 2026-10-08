/**
 * Comprueba las variables obligatorias antes de construir.
 *
 * Vite sustituye `import.meta.env.VITE_*` en tiempo de empaquetado, así que un
 * `if` en el código no protege nada: con la variable vacía el chequeo se
 * convierte en `if (!"")` y el minificador lo elimina. La validación tiene que
 * ocurrir aquí, antes de que Vite empiece.
 *
 * Uso: node scripts/check-env.mjs
 */
import { loadEnv } from 'vite'

const REQUIRED = [
  {
    name: 'VITE_CONTACT_EMAIL',
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    help: 'Pon tu email real de contacto (por ejemplo jbvc91@gmail.com).',
  },
  {
    name: 'VITE_SITE_URL',
    validate: (value) => /^https:\/\/[^\s/]+$/.test(value),
    help: 'Dominio canónico, con https:// y sin barra final.',
  },
]

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
// Prefijo vacío: loadEnv solo devuelve las claves con ese prefijo.
const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env }

const failures = []

for (const variable of REQUIRED) {
  const value = (env[variable.name] ?? '').trim()
  if (!value) {
    failures.push(`${variable.name} no está definida. ${variable.help}`)
  } else if (!variable.validate(value)) {
    failures.push(`${variable.name}="${value}" no tiene un formato válido. ${variable.help}`)
  }
}

if (failures.length > 0) {
  console.error('\n✗ No se puede construir la web:\n')
  for (const failure of failures) console.error(`  · ${failure}`)
  console.error('\nCopia .env.example a .env y rellena los valores.\n')
  process.exit(1)
}

console.log(`✓ Variables de entorno correctas (modo ${mode})`)

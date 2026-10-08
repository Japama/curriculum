/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Dominio canónico de la web, sin barra final. */
  readonly VITE_SITE_URL?: string
  /** Email de contacto público. */
  readonly VITE_CONTACT_EMAIL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

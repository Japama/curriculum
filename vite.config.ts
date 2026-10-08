import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    css: false,
  },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        // Separamos el motor de animaciones para que el primer pintado no
        // arrastre todo el bundle.
        manualChunks: (id: string) =>
          id.includes('node_modules/framer-motion') || id.includes('node_modules/motion')
            ? 'motion'
            : undefined,
      },
    },
  },
})

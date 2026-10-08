import { useEffect, useRef, useState } from 'react'
import { Check, Copy, Mail } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { bio } from '@/data/bio'
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons'

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(false)
  const timeout = useRef<number | null>(null)

  useEffect(
    () => () => {
      if (timeout.current !== null) window.clearTimeout(timeout.current)
    },
    [],
  )

  async function copyEmail() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(bio.email)
      } else {
        // Alternativa para contextos sin permiso de portapapeles (http, iframes).
        const input = document.createElement('textarea')
        input.value = bio.email
        input.setAttribute('readonly', '')
        input.style.position = 'fixed'
        input.style.opacity = '0'
        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
      }
      setError(false)
      setCopied(true)
      if (timeout.current !== null) window.clearTimeout(timeout.current)
      timeout.current = window.setTimeout(() => setCopied(false), 2200)
    } catch {
      setError(true)
    }
  }

  return (
    <section id="contacto" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-aurora absolute left-1/2 top-0 size-[30rem] -translate-x-1/2 rounded-full bg-electric/15 blur-[130px]" />
      </div>

      <div className="section-shell">
        <SectionHeading
          eyebrow="Contacto"
          title="¿Hablamos de un proyecto?"
          description="Estoy abierto a colaboraciones, encargos de desarrollo y a que me cuentes qué necesitas. Si te interesa cómo funcionan Profeasy o ProEntreno, también puedes escribirme."
        />

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="glass flex h-full flex-col justify-between gap-6 rounded-2xl p-7">
              <div>
                <span className="mb-4 inline-grid size-10 place-items-center rounded-xl border border-electric/25 bg-electric/10 text-cyan">
                  <Mail aria-hidden size={18} />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">Email directo</h3>
                <p className="mt-2 text-sm text-ink-soft">
                  La vía más rápida. Cuéntame el contexto y te respondo lo antes que puedo.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${bio.email}`}
                  className="flex-1 truncate rounded-xl border border-line/80 bg-surface-2/40 px-4 py-3 font-mono text-sm text-ink transition-colors hover:border-electric/40"
                >
                  {bio.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric to-cyan px-4 py-3 text-sm font-semibold text-abyss transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {copied ? <Check aria-hidden size={15} /> : <Copy aria-hidden size={15} />}
                  {copied ? 'Copiado' : 'Copiar'}
                </button>
              </div>

              <p aria-live="polite" className="min-h-5 text-xs text-cyan">
                {copied ? 'Email copiado al portapapeles.' : ''}
                {error ? 'No se pudo copiar; selecciona el email a mano.' : ''}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-4">
              <a
                href={bio.github}
                target="_blank"
                rel="noreferrer noopener"
                className="glass group flex flex-1 items-center justify-between gap-4 rounded-2xl p-6 transition-colors hover:border-electric/40"
              >
                <span>
                  <span className="flex items-center gap-2 font-display text-base font-semibold text-ink">
                    <GithubIcon width={17} height={17} />
                    GitHub
                  </span>
                  <span className="mt-1 block text-sm text-ink-soft">
                    Código de mis proyectos, incluidos los antiguos.
                  </span>
                </span>
              </a>

              <a
                href={bio.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="glass flex flex-1 items-center justify-between gap-4 rounded-2xl p-6 transition-colors hover:border-electric/40"
              >
                <span>
                  <span className="flex items-center gap-2 font-display text-base font-semibold text-ink">
                    <LinkedinIcon width={17} height={17} />
                    LinkedIn
                  </span>
                  <span className="mt-1 block text-sm text-ink-soft">
                    Trayectoria profesional y contacto.
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

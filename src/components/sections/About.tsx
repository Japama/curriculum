import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { bio } from '@/data/bio'

export function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Productos propios, hechos para usarse de verdad"
          description="No hago demos de escaparate: lo que construyo está en marcha y lo mantengo yo. Ahí es donde aprendo de verdad qué falla y qué se puede mejorar."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {bio.principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.08}>
              <SpotlightCard className="h-full p-6">
                <span
                  aria-hidden
                  className="mb-5 inline-grid size-10 place-items-center rounded-xl border border-electric/25 bg-electric/10 font-mono text-sm text-cyan"
                >
                  0{index + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-ink">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{principle.description}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Briefcase } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Chip, SectionHeading } from '@/components/ui/SectionHeading'
import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="trayectoria" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Trayectoria"
          title="De dónde vengo"
          description="Años de desarrollo web en empresa y, después, la docencia: dos formas de mirar el mismo problema."
        />

        <ol className="relative border-l border-line/70 pl-6 sm:pl-8">
          {experience.map((entry, index) => (
            <Reveal
              as="li"
              key={`${entry.role}-${entry.org}`}
              delay={index * 0.06}
              className="relative pb-10 last:pb-0"
            >
              <span
                aria-hidden
                className={[
                  'absolute -left-[1.85rem] top-1.5 size-3 rounded-full border-2 sm:-left-[2.35rem]',
                  index === 0
                    ? 'border-cyan bg-cyan/30'
                    : 'border-line bg-abyss',
                ].join(' ')}
              />
              <div className="glass rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="flex items-center gap-2 font-display text-base font-semibold text-ink">
                    <Briefcase aria-hidden size={15} className="text-cyan" />
                    {entry.role}
                  </h3>
                  {entry.period ? (
                    <span className="font-mono text-[0.68rem] text-ink-faint">{entry.period}</span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-ink-soft">
                  {entry.org}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{entry.description}</p>
                {entry.stack?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.stack.map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

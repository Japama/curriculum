import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { courses, skillGroups, techMarquee } from '@/data/skills'
import { languages } from '@/data/bio'
import { GraduationCap, Languages } from 'lucide-react'
import { education } from '@/data/experience'

function levelLabel(level: number) {
  if (level >= 85) return 'Alto'
  if (level >= 70) return 'Medio'
  return 'Básico'
}

function Marquee() {
  const row = [...techMarquee, ...techMarquee]

  return (
    <div className="marquee-mask mb-16 overflow-hidden">
      <ul className="animate-marquee flex w-max items-center gap-3 will-change-transform">
        {row.map((tech, index) => (
          <li
            key={`${tech}-${index}`}
            className="rounded-full border border-line/70 bg-surface-2/40 px-4 py-2 font-mono text-xs whitespace-nowrap text-ink-soft"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const reduce = useReducedMotion()

  return (
    <li>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span className="text-sm text-ink">{name}</span>
        <span className="font-mono text-[0.68rem] text-ink-faint">{levelLabel(level)}</span>
      </div>
      <div
        role="meter"
        aria-label={`Nivel de ${name}`}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-1.5 overflow-hidden rounded-full bg-surface-2"
      >
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-electric to-cyan"
          initial={reduce ? { width: `${level}%` } : { width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </li>
  )
}

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 border-y border-line/50 bg-abyss-soft/60 py-20 sm:py-28">
      <div className="section-shell">
        <Marquee />

        <SectionHeading
          eyebrow="Stack"
          title="Tecnologías con las que trabajo a diario"
          description="Sin porcentajes mágicos: esto es lo que uso para construir y desplegar mis propios productos."
        />

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group, groupIndex) => (
              <Reveal key={group.title} delay={groupIndex * 0.05}>
                <h3 className="mb-5 font-mono text-xs tracking-[0.18em] text-cyan uppercase">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-5">
                  {group.skills.map((skill, index) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} />
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-6">
                <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-semibold text-ink">
                  <GraduationCap aria-hidden size={16} className="text-cyan" />
                  Formación académica
                </h3>
                <ol className="flex flex-col gap-3">
                  {education.map((entry) => (
                    <li key={entry.title} className="flex gap-3 text-xs">
                      <span className="font-mono text-cyan">{entry.year}</span>
                      <span className="text-ink-soft">
                        <span className="block text-ink">{entry.title}</span>
                        {entry.place ? <span className="text-ink-faint">{entry.place}</span> : null}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass rounded-2xl p-6">
                <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-semibold text-ink">
                  <Languages aria-hidden size={16} className="text-cyan" />
                  Idiomas
                </h3>
                <ul className="flex flex-col gap-2.5 text-xs">
                  {languages.map((language) => (
                    <li key={language.name} className="flex items-baseline justify-between gap-3">
                      <span className="text-ink-soft">{language.name}</span>
                      <span className="font-mono text-[0.68rem] text-ink-faint">
                        {language.level}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-line/60 pt-4 text-xs text-ink-faint">
                  {courses[0]}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

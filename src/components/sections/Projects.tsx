import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Chip, SectionHeading, StatusBadge } from '@/components/ui/SectionHeading'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { featuredProjects, otherProjects } from '@/data/projects'
import type { Project } from '@/data/types'
import { accentStyles } from '@/lib/accents'

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2">
      {project.links.map((link, index) => {
        const isPrimary = index === 0 && Boolean(project.url)
        const external = link.href.startsWith('http')
        return (
          <a
            key={link.href}
            href={link.href}
            {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
            className={[
              'inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors',
              isPrimary
                ? 'bg-electric/15 text-cyan hover:bg-electric/25'
                : 'border border-line/80 text-ink-soft hover:border-electric/40 hover:text-ink',
            ].join(' ')}
          >
            {isPrimary ? (
              <ExternalLink aria-hidden size={14} />
            ) : (
              <ArrowUpRight aria-hidden size={14} />
            )}
            {link.label}
          </a>
        )
      })}
    </div>
  )
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const accent = accentStyles[project.accent]

  return (
    <Reveal delay={index * 0.06}>
      <SpotlightCard className={`overflow-hidden ${accent.border}`}>
        <div className={`relative bg-gradient-to-br ${accent.gradient} p-7 sm:p-9`}>
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            {project.domain ? (
              <span className={`font-mono text-xs ${accent.text}`}>{project.domain}</span>
            ) : null}
          </div>

          <h3 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 text-base text-ink">{project.tagline}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
            {project.description}
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5 text-xs leading-relaxed text-ink-soft">
                <span aria-hidden className={`mt-1.5 size-1.5 shrink-0 rounded-full ${accent.dot}`} />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </div>

          <ProjectLinks project={project} />
        </div>
      </SpotlightCard>
    </Reveal>
  )
}

function MiniProject({ project, index }: { project: Project; index: number }) {
  const accent = accentStyles[project.accent]

  return (
    <Reveal delay={index * 0.06} className="h-full">
      <SpotlightCard className={`flex h-full flex-col p-6 ${accent.border}`}>
        <div className="flex items-start justify-between gap-3">
          <span aria-hidden className={`mt-1.5 size-2 rounded-full ${accent.dot}`} />
          <StatusBadge status={project.status} />
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold text-ink">{project.name}</h3>
        <p className={`mt-1.5 text-sm ${accent.text}`}>{project.tagline}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>

        <ProjectLinks project={project} />
      </SpotlightCard>
    </Reveal>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-24 py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Proyectos"
          title="Lo que he construido y sigue funcionando"
          description="Dos productos propios en producción y varios proyectos que me han servido para aprender tecnologías nuevas: de Rust y C# a Unity."
        />

        <div className="flex flex-col gap-6">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {otherProjects.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <MiniProject key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

import { bio } from '@/data/bio'
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line/60 bg-abyss-soft/60 py-10">
      <div className="section-shell flex flex-col gap-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl border border-electric/30 bg-gradient-to-br from-electric/25 to-cyan/10 font-display text-sm font-semibold text-cyan">
              {bio.initials}
            </span>
            <span>
              <span className="block font-display text-sm font-medium text-ink">{bio.name}</span>
              <span className="block text-xs text-ink-faint">{bio.role} · {bio.location}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={bio.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="grid size-10 place-items-center rounded-xl border border-line/70 text-ink-soft transition-colors hover:border-electric/40 hover:text-cyan"
            >
              <GithubIcon width={17} height={17} />
            </a>
            <a
              href={bio.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-xl border border-line/70 text-ink-soft transition-colors hover:border-electric/40 hover:text-cyan"
            >
              <LinkedinIcon width={17} height={17} />
            </a>
            <a
              href={`mailto:${bio.email}`}
              className="rounded-xl border border-line/70 px-4 py-2.5 font-mono text-xs text-ink-soft transition-colors hover:border-electric/40 hover:text-cyan"
            >
              {bio.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line/50 pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {bio.name}. Todos los derechos reservados.
          </p>
          <p>
            Titular: {bio.name} · {bio.location} ·{' '}
            <a href={`mailto:${bio.email}`} className="text-ink-soft hover:text-cyan">
              {bio.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

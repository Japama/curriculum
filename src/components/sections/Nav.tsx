import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { bio } from '@/data/bio'

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#stack', label: 'Stack' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#contacto', label: 'Contacto' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Marca la sección visible en el menú.
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((node): node is Element => node !== null)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-line/70 bg-abyss/80 backdrop-blur-xl' : 'border-b border-transparent',
      ].join(' ')}
    >
      <nav
        aria-label="Navegación principal"
        className="section-shell flex h-16 items-center justify-between gap-4"
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label={`${bio.name} — inicio`}
        >
          <span className="grid size-9 place-items-center rounded-xl border border-electric/30 bg-gradient-to-br from-electric/25 to-cyan/10 font-display text-sm font-semibold text-cyan">
            {bio.initials}
          </span>
          <span className="hidden font-display text-sm font-medium tracking-tight text-ink sm:block">
            {bio.shortName}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? 'true' : undefined}
                className={[
                  'rounded-lg px-3 py-2 text-sm transition-colors',
                  active === link.href
                    ? 'text-cyan'
                    : 'text-ink-soft hover:bg-surface-2/70 hover:text-ink',
                ].join(' ')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${bio.email}`}
            className="hidden rounded-xl border border-electric/40 bg-electric/10 px-4 py-2 text-sm font-medium text-cyan transition-colors hover:bg-electric/20 sm:inline-flex"
          >
            Escríbeme
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="grid size-10 place-items-center rounded-xl border border-line/80 text-ink-soft transition-colors hover:text-ink md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="menu-movil" className="border-t border-line/70 bg-abyss/95 backdrop-blur-xl md:hidden">
          <ul className="section-shell flex flex-col py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-sm text-ink-soft transition-colors hover:bg-surface-2/70 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}

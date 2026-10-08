import { ArrowRight, ChevronDown, MapPin, Sparkles } from 'lucide-react'
import { bio } from '@/data/bio'
import { GithubIcon, LinkedinIcon } from '@/components/ui/brand-icons'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 lg:pb-24">
      {/* Fondo: aurora en movimiento + rejilla con parallax */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.35]" />
        <div className="animate-aurora absolute -top-40 -left-24 size-[38rem] rounded-full bg-electric/25 blur-[120px]" />
        <div className="animate-aurora absolute -right-32 top-10 size-[32rem] rounded-full bg-cyan/20 blur-[130px] [animation-delay:-7s]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-abyss" />
      </div>

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line/80 bg-surface-2/50 px-3.5 py-1.5 text-xs text-ink-soft">
            <Sparkles aria-hidden size={14} className="text-cyan" />
            {bio.role} · {bio.location}
          </p>

          <h1 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-[3.4rem]">
            <span className="block text-ink">{bio.name}</span>
            <span className="text-gradient mt-2 block">{bio.headline}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {bio.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-electric to-cyan px-5 py-3 text-sm font-semibold text-abyss transition-transform duration-200 hover:-translate-y-0.5"
            >
              Ver mis proyectos
              <ArrowRight
                aria-hidden
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-electric/50 hover:text-cyan"
            >
              Hablemos
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href={bio.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub de Juan Bautista Valero"
                className="grid size-10 place-items-center rounded-xl border border-line/70 text-ink-soft transition-colors hover:border-electric/40 hover:text-cyan"
              >
                <GithubIcon width={18} height={18} />
              </a>
              <a
                href={bio.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn de Juan Bautista Valero"
                className="grid size-10 place-items-center rounded-xl border border-line/70 text-ink-soft transition-colors hover:border-electric/40 hover:text-cyan"
              >
                <LinkedinIcon width={18} height={18} />
              </a>
            </div>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line/60 pt-6">
            {bio.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-ink-faint">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative">
            <div
              aria-hidden
              className="animate-pulse-ring absolute inset-0 rounded-[2rem] border border-electric/30"
            />
            <div className="animate-float relative overflow-hidden rounded-[2rem] border border-line/80 bg-surface shadow-[0_25px_80px_-20px_rgba(56,189,248,0.35)]">
              <img
                src="/profile.jpg"
                alt="Retrato de Juan Bautista Valero Carrasco"
                width={458}
                height={458}
                loading="eager"
                decoding="async"
                className="h-auto w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-abyss via-abyss/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5">
                <span className="inline-flex items-center gap-1.5 text-xs text-ink-soft">
                  <MapPin aria-hidden size={13} className="text-cyan" />
                  Valencia, España
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[0.65rem] tracking-wide text-emerald-300 uppercase">
                  <span aria-hidden className="size-1.5 rounded-full bg-emerald-300" />
                  Disponible
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell mt-16 hidden justify-center lg:flex">
        <a
          href="#sobre-mi"
          aria-label="Bajar a la sección Sobre mí"
          className="animate-bounce text-ink-faint transition-colors hover:text-cyan [animation-duration:3s]"
        >
          <ChevronDown aria-hidden size={22} />
        </a>
      </div>
    </section>
  )
}

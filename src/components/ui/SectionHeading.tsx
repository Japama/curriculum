import type { ReactNode } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string
  title: string
  description?: string
  id?: string
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-2 font-mono text-xs tracking-[0.22em] text-cyan uppercase">
        <span aria-hidden className="inline-block h-px w-8 bg-cyan/60" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-3xl font-semibold text-ink sm:text-4xl lg:text-[2.6rem] lg:leading-tight"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{description}</p>
      ) : null}
    </div>
  )
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line/80 bg-surface-2/60 px-3 py-1 font-mono text-[0.7rem] tracking-wide text-ink-soft">
      {children}
    </span>
  )
}

export function StatusBadge({ status }: { status: 'live' | 'in_development' }) {
  const live = status === 'live'
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.68rem] tracking-wide uppercase',
        live
          ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300'
          : 'border-amber-400/30 bg-amber-400/10 text-amber-300',
      ].join(' ')}
    >
      <span
        aria-hidden
        className={[
          'size-1.5 rounded-full',
          live ? 'bg-emerald-300' : 'animate-shimmer bg-amber-300',
        ].join(' ')}
      />
      {live ? 'En producción' : 'En desarrollo'}
    </span>
  )
}

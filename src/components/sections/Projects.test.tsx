import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Projects } from '@/components/sections/Projects'
import { featuredProjects, otherProjects, visibleProjects } from '@/data/projects'

describe('sección de proyectos', () => {
  it('muestra los proyectos visibles con su enlace', () => {
    render(<Projects />)

    for (const project of visibleProjects) {
      expect(screen.getByRole('heading', { name: project.name })).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: /ver profeasy/i })).toHaveAttribute(
      'href',
      'https://profeasy.es',
    )
    expect(screen.getByRole('link', { name: /ver proentreno/i })).toHaveAttribute(
      'href',
      'https://proentreno.es',
    )
  })

  it('no renderiza los proyectos ocultos', () => {
    render(<Projects />)
    expect(screen.queryByText('MoodPlan')).not.toBeInTheDocument()
  })

  it('destaca los productos en producción', () => {
    render(<Projects />)

    expect(featuredProjects.map((project) => project.id)).toEqual(['profeasy', 'proentreno'])
    expect(otherProjects.length).toBeGreaterThan(0)

    // Cada destacado expone su dominio tal cual, sin protocolo.
    for (const project of featuredProjects) {
      expect(screen.getByText(project.domain as string)).toBeInTheDocument()
    }
  })

  it('abre los enlaces externos en una pestaña nueva y de forma segura', () => {
    render(<Projects />)
    const link = screen.getByRole('link', { name: /ver profeasy/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
  })

  it('cada tarjeta lista al menos una tecnología', () => {
    render(<Projects />)
    for (const project of visibleProjects) {
      const heading = screen.getByRole('heading', { name: project.name })
      const card = heading.closest('article')
      expect(card, project.id).not.toBeNull()
      expect(within(card as HTMLElement).getAllByText(/./).length).toBeGreaterThan(0)
    }
  })
})

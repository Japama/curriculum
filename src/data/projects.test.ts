import { describe, expect, it } from 'vitest'
import { otherProjects, projects, visibleProjects } from '@/data/projects'

describe('datos de proyectos', () => {
  it('no repite identificadores', () => {
    const ids = projects.map((project) => project.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('todo proyecto visible tiene enlace, stack y acento', () => {
    for (const project of visibleProjects) {
      expect(project.links.length, project.id).toBeGreaterThan(0)
      expect(project.stack.length, project.id).toBeGreaterThan(0)
      expect(project.name.trim(), project.id).not.toBe('')
      expect(project.tagline.trim(), project.id).not.toBe('')
    }
  })

  it('todas las URLs son https y sin protocolo duplicado en el dominio', () => {
    for (const project of projects) {
      for (const link of project.links) {
        expect(link.href, `${project.id} → ${link.label}`).toMatch(/^https:\/\//)
      }
      if (project.url) {
        expect(project.url, project.id).toMatch(/^https:\/\//)
      }
      if (project.domain) {
        expect(project.domain, project.id).not.toMatch(/^https?:\/\//)
        expect(project.domain, project.id).not.toMatch(/\/$/)
      }
    }
  })

  it('los productos destacados están en producción, con dominio y enlace', () => {
    const featured = visibleProjects.filter((project) => project.featured)
    expect(featured.length).toBeGreaterThan(0)

    for (const project of featured) {
      expect(project.status, project.id).toBe('live')
      expect(project.domain, project.id).toBeTruthy()
      expect(project.url, project.id).toBeTruthy()
    }
  })

  it('un proyecto en producción no puede estar sin dominio y sin repositorio', () => {
    for (const project of visibleProjects.filter((item) => item.status === 'live')) {
      const hasHome = Boolean(project.domain || project.url)
      if (!hasHome) {
        // Si no hay web propia, el primer enlace debe llevar a algún sitio real.
        expect(project.links[0]?.href, project.id).toMatch(/^https:\/\/github\.com\//)
      }
    }
  })

  it('MoodPlan queda completo pero oculto', () => {
    const moodplan = projects.find((project) => project.id === 'moodplan')
    expect(moodplan).toBeDefined()
    expect(moodplan?.visible).toBe(false)
    expect(moodplan?.stack.length).toBeGreaterThan(0)
    expect(moodplan?.highlights.length).toBeGreaterThan(0)
    expect(visibleProjects.some((project) => project.id === 'moodplan')).toBe(false)
    expect(otherProjects.some((project) => project.id === 'moodplan')).toBe(false)
  })

  it('separa destacados del resto sin perder ninguno', () => {
    const featured = visibleProjects.filter((project) => project.featured)
    expect(featured.map((project) => project.id)).toEqual(['profeasy', 'proentreno'])
    expect(featured.length + otherProjects.length).toBe(visibleProjects.length)
  })
})

import { describe, expect, it } from 'vitest'
import { bio } from '@/data/bio'

describe('datos de la persona', () => {
  it('el email de contacto está definido y no es un valor de relleno', () => {
    expect(bio.email).not.toBe('')
    expect(bio.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    expect(bio.email).not.toBe('hola@juanbautistavalero.com')
    expect(bio.email).not.toBe('undefined')
  })

  it('expone los enlaces públicos de GitHub y LinkedIn', () => {
    expect(bio.github).toBe('https://github.com/japama')
    expect(bio.linkedin).toContain('linkedin.com/in/juan-bautista-valero-carrasco')
  })
})

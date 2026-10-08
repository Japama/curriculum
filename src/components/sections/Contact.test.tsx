import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from '@/components/sections/Contact'
import { bio } from '@/data/bio'

describe('sección de contacto', () => {
  it('usa un email válido, nunca undefined', () => {
    render(<Contact />)

    expect(bio.email).toBeTruthy()
    expect(bio.email).not.toBe('undefined')
    expect(bio.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

    const mailLinks = screen.getAllByRole('link', { name: new RegExp(`^${bio.email}$`) })
    expect(mailLinks.length).toBeGreaterThan(0)
    expect(mailLinks[0]).toHaveAttribute('href', `mailto:${bio.email}`)
  })

  it('enlaza GitHub y LinkedIn', () => {
    render(<Contact />)

    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', bio.github)
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', bio.linkedin)
  })

  it('ofrece copiar el email al portapapeles', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /copiar/i })).toBeInTheDocument()
  })
})

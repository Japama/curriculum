import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Stack } from '@/components/sections/Stack'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <a
        href="#proyectos"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-electric focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-abyss"
      >
        Saltar al contenido
      </a>

      <Nav />

      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

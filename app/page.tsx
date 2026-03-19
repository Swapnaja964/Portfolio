"use client"

import { Navigation } from "@/components/portfolio/navigation"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { SideElements } from "@/components/portfolio/side-elements"
import { MatrixBackground } from "@/components/portfolio/matrix-background"
import { FloatingCode } from "@/components/portfolio/floating-code"

export default function Portfolio() {
  return (
    <div className="relative">
      {/* Background effects */}
      <MatrixBackground />
      <FloatingCode />
      
      <Navigation />
      <SideElements />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

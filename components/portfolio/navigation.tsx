"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.href.replace('#', ''))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href: string) => {
    const element = document.getElementById(href.replace('#', ''))
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <a 
          href="#" 
          className="text-lg font-mono font-bold tracking-tight hover:text-primary transition-colors group"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className="text-primary group-hover:glow-text transition-all">{'<'}</span>
          SM
          <span className="text-primary group-hover:glow-text transition-all">{' />'}</span>
        </a>
        
        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <li key={item.label}>
              <button
                onClick={() => handleClick(item.href)}
                className={cn(
                  "text-sm font-mono transition-colors duration-300 relative group",
                  activeSection === item.href.replace('#', '')
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="text-primary text-xs mr-1">0{index + 1}.</span>
                {item.label}
                {activeSection === item.href.replace('#', '') && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary glow-sm" />
                )}
              </button>
            </li>
          ))}
        </ul>
        
        <a 
          href="https://drive.google.com/drive/folders/1NU_JnEGUPRv72sjtIaSD9bo5rOVF568C?usp=drive_link" 
          className="hidden md:inline-flex px-4 py-2 text-sm font-mono border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:glow-sm"
        >
          Resume
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="flex flex-col p-6 gap-4">
            {navItems.map((item, index) => (
              <li key={item.label}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="text-lg font-mono text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary text-sm mr-2">0{index + 1}.</span>
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <a 
                href="https://drive.google.com/drive/folders/1NU_JnEGUPRv72sjtIaSD9bo5rOVF568C?usp=drive_link" 
                className="inline-flex px-4 py-2 text-sm font-mono border border-primary text-primary rounded-md"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

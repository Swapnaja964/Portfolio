"use client"

import { Github, Linkedin, Mail, Heart, Code } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social links - Mobile */}
          <div className="flex items-center gap-6 md:hidden">
            <a 
              href="https://github.com/Swapnaja964" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/swapnaja-magarde/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:swapnajamagarde2004@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          {/* Attribution */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm font-mono flex items-center gap-2 justify-center md:justify-start">
              <Code className="w-4 h-4 text-primary" />
              Designed & Built by <span className="text-primary">Swapnaja Magarde</span>
            </p>
          </div>
          
          {/* Tech stack */}
          <p className="text-muted-foreground text-xs font-mono flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
        
        {/* Binary decoration */}
        <div className="mt-6 text-center text-primary/20 font-mono text-xs tracking-widest overflow-hidden">
          01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100
        </div>
      </div>
    </footer>
  )
}

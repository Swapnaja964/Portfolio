"use client"

import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypingText } from "./typing-text"
import { TerminalCard } from "./terminal-card"

export function Hero() {
  const roles = [
    "AI & Data Science Engineer",
    "Full Stack Developer", 
    "Machine Learning Enthusiast",
    "NLP Specialist",
  ]

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 lg:px-8">
      {/* Circuit board grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan" />
      </div>
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Binary decorations */}
      <div className="absolute top-20 left-10 text-primary/10 font-mono text-xs hidden lg:block">
        10110101<br/>01001011<br/>11010010
      </div>
      <div className="absolute bottom-20 right-10 text-primary/10 font-mono text-xs hidden lg:block">
        01101001<br/>10010110<br/>01011010
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary glow-sm" />
              <span className="text-primary text-sm font-mono tracking-wider">{"<hello_world />"}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance">
              <span className="text-foreground">Swapnaja</span>{" "}
              <span className="text-primary text-glow">Magarde</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground font-mono mb-6 h-8">
              <TypingText texts={roles} />
            </div>
            
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed mb-8">
              Final-year B.Tech student specializing in <span className="text-primary">AI & Data Science</span>. 
              I build intelligent systems that solve real-world problems, from NLP chatbots with{" "}
              <span className="text-primary font-mono">98.6% accuracy</span> to full-stack web applications.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button 
                variant="default" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm transition-all duration-300 font-mono"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {">"} View Projects
              </Button>
              <Button 
                variant="outline" 
                className="border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-mono"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {">"} Get in Touch
              </Button>
            </div>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com/Swapnaja964" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:glow-sm"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/swapnaja-magarde/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:swapnajamagarde2004@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://drive.google.com/drive/folders/1NU_JnEGUPRv72sjtIaSD9bo5rOVF568C?usp=drive_link" 
                className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1"
                aria-label="Resume"
              >
                <FileText className="w-5 h-5" />
                <span className="text-xs font-mono">Resume</span>
              </a>
            </div>
          </div>
          
          {/* Right content - Terminal */}
          <div className="hidden lg:block">
            <TerminalCard />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-mono tracking-wider">{"// SCROLL"}</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  )
}

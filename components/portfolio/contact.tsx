"use client"

import { Mail, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-8 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(45,212,191,0.08)_0%,transparent_60%)]" />
      
      <div className="max-w-2xl mx-auto text-center relative">
        <span className="text-primary font-mono text-sm">04. What's Next?</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Get In Touch</h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          I'm currently looking for new opportunities in <span className="text-primary">AI/ML</span> and{" "}
          <span className="text-primary">Full Stack Development</span>. Whether you have a question, 
          a project idea, or just want to say hi, my inbox is always open!
        </p>
        
        {/* Terminal-style message */}
        <div className="bg-card border border-border rounded-lg p-4 mb-8 font-mono text-sm text-left">
          <div className="text-muted-foreground">
            <span className="text-primary">$</span> echo "Let's build something amazing together!"
          </div>
          <div className="text-foreground mt-1">
            {">"} Let's build something amazing together!
          </div>
        </div>
        
        <Button 
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm transition-all duration-300 font-mono group"
          asChild
        >
          <a href="mailto:swapnajamagarde2004@gmail.com">
            <Mail className="w-4 h-4 mr-2" />
            Say Hello
            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
        
        {/* Social links */}
        <div className="flex justify-center gap-6 mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 hover:glow-sm rounded-lg"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:swapnaja@example.com" 
            className="text-muted-foreground hover:text-primary transition-colors p-2"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}

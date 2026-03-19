import { Github, Linkedin, Mail } from "lucide-react"

export function SideElements() {
  return (
    <>
      {/* Left side - Social links */}
      <div className="fixed bottom-0 left-8 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:block after:w-px after:h-24 after:bg-primary/30">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:swapnaja@example.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* Right side - Email */}
      <div className="fixed bottom-0 right-8 hidden lg:flex flex-col items-center gap-6 after:content-[''] after:block after:w-px after:h-24 after:bg-primary/30">
        <a
          href="mailto:swapnaja@example.com"
          className="text-muted-foreground hover:text-primary transition-all duration-300 [writing-mode:vertical-rl] text-sm font-mono tracking-widest"
        >
          swapnaja@example.com
        </a>
      </div>
    </>
  )
}

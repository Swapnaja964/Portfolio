"use client"

import { Brain, Code, Database, Award } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    label: "98.6%",
    desc: "NLP Model Accuracy",
  },
  {
    icon: Award,
    label: "IEEE",
    desc: "Research Published",
  },
  {
    icon: Code,
    label: "Full Stack",
    desc: "Development",
  },
  {
    icon: Database,
    label: "AI/ML",
    desc: "Specialization",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="text-primary font-mono">01.</span> About Me
          </h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>
        
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {"// "}<span className="text-primary">Hello World!</span> I'm Swapnaja, a final-year <span className="text-foreground">B.Tech student</span> in 
              Computer Engineering with a specialization in <span className="text-primary">AI & Data Science</span>.
            </p>
            <p>
              My journey in tech started with curiosity about how machines can learn and think. This led me to 
              dive deep into <span className="text-primary">Machine Learning</span>, <span className="text-primary">Natural Language Processing</span>, 
              and <span className="text-primary">Deep Learning</span>, eventually building an NLP chatbot that achieved 
              <span className="text-foreground font-mono"> 98.6% accuracy</span>.
            </p>
            <p>
              As a <span className="text-foreground">Full-Stack Development Intern</span>, I worked with real-world systems including 
              ERP data integration, API development, Firebase, ClickHouse, and Twilio automation. I love bridging 
              the gap between AI research and practical applications.
            </p>
            <p className="font-mono text-sm">
              <span className="text-primary">{">"}</span> My research has been published in <span className="text-primary">IEEE</span>, 
              demonstrating my commitment to advancing the field.
            </p>
            
            {/* Highlight cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
              {highlights.map((item) => (
                <div 
                  key={item.label}
                  className="bg-card/50 border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors group"
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:text-glow" />
                  <div className="text-lg font-bold text-foreground">{item.label}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Profile card with code aesthetic */}
          <div className="lg:col-span-2 relative group">
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">profile.json</span>
              </div>
              
              {/* JSON-style profile */}
              <div className="p-4 font-mono text-sm">
                <div className="text-muted-foreground">{"{"}</div>
                <div className="pl-4">
                  <span className="text-primary">"name"</span>: <span className="text-foreground">"Swapnaja Magarde"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary">"title"</span>: <span className="text-foreground">"AI Engineer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary">"education"</span>: <span className="text-foreground">"B.Tech CS (AI/DS)"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-primary">"focus"</span>: [
                </div>
                <div className="pl-8 text-muted-foreground">
                  "Machine Learning",<br/>
                  "NLP",<br/>
                  "Full Stack Dev"
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-primary">"available"</span>: <span className="text-green-400">true</span>
                </div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </div>
            
            {/* Decorative border */}
            <div className="absolute -inset-2 border border-primary/30 rounded-lg -z-10 translate-x-3 translate-y-3 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

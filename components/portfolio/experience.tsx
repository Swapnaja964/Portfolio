"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Acme Corp",
    title: "Senior Frontend Engineer",
    period: "2023 — Present",
    description: [
      "Build and maintain critical components used to construct Acme's frontend, across the whole product.",
      "Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.",
      "Collaborate with designers to create pixel-perfect interfaces that scale across devices.",
    ],
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
  },
  {
    company: "TechStart",
    title: "Full Stack Developer",
    period: "2021 — 2023",
    description: [
      "Developed and shipped highly interactive web applications for multiple clients.",
      "Built and maintained internal tools and dashboards used by the entire company.",
      "Worked with a variety of different languages, platforms, and frameworks.",
    ],
    technologies: ["JavaScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    company: "CodeLabs",
    title: "Frontend Developer",
    period: "2019 — 2021",
    description: [
      "Developed and maintained code for client websites primarily using HTML, CSS, and JavaScript.",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility.",
      "Clients included tech startups, healthcare companies, and financial institutions.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Vue.js"],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="text-primary font-mono">02.</span> Experience
          </h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab list */}
          <div className="relative flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-5 py-3 text-sm font-mono whitespace-nowrap text-left transition-all duration-300",
                  activeTab === index
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {exp.company}
              </button>
            ))}
            {/* Active indicator */}
            <div 
              className="absolute hidden md:block left-0 w-0.5 h-[42px] bg-primary glow-sm transition-transform duration-300"
              style={{ transform: `translateY(${activeTab * 42}px)` }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[300px]">
            <h3 className="text-xl font-medium mb-1">
              {experiences[activeTab].title}{" "}
              <a 
                href="#" 
                className="text-primary hover:underline inline-flex items-center gap-1"
              >
                @ {experiences[activeTab].company}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </h3>
            <p className="text-sm font-mono text-muted-foreground mb-6">
              {experiences[activeTab].period}
            </p>
            <ul className="space-y-3">
              {experiences[activeTab].description.map((item, index) => (
                <li key={index} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1.5 shrink-0">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-6">
              {experiences[activeTab].technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

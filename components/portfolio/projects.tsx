"use client"

import { useState } from "react"
import { ExternalLink, Github, Folder, Brain, Globe, Server } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "AI/ML", "Web", "Software"]

const featuredProjects = [
  {
    title: "NLP Student Guidance System",
    description:
      "An intelligent chatbot powered by TensorFlow that provides personalized academic guidance to students. Achieved 98.6% accuracy through advanced NLP techniques including intent classification, entity recognition, and context-aware responses. Research paper published in IEEE.",
    technologies: ["Python", "TensorFlow", "NLP", "Deep Learning", "Flask"],
    github: "https://github.com",
    external: "https://example.com",
    category: "AI/ML",
    highlight: "98.6% Accuracy | IEEE Published",
  },
  {
    title: "Tiffin Management System",
    description:
      "A comprehensive full-stack web application for managing tiffin/meal subscriptions. Features include user authentication, subscription management, order tracking, payment integration, and an admin dashboard for business analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    github: "https://github.com",
    external: "https://example.com",
    category: "Web",
    highlight: "Full Stack MERN",
  },
  {
    title: "Fleet Management System",
    description:
      "A robust vehicle fleet management solution with real-time tracking, maintenance scheduling, driver management, and comprehensive reporting. Built with Java for enterprise-grade performance and reliability.",
    technologies: ["Java", "MySQL", "Swing", "JDBC", "Maven"],
    github: "https://github.com",
    category: "Software",
    highlight: "Enterprise Grade",
  },
]

const otherProjects = [
  {
    title: "Robocon Website",
    description: "Official website for the college robotics team featuring event updates, team profiles, and project showcases.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    external: "https://example.com",
    category: "Web",
  },
  {
    title: "Data Pipeline Automation",
    description: "Automated ETL pipeline for processing ERP data with real-time sync using Apache Kafka and ClickHouse.",
    technologies: ["Python", "Kafka", "ClickHouse", "Docker"],
    github: "https://github.com",
    category: "Software",
  },
  {
    title: "Sentiment Analysis Tool",
    description: "ML-powered sentiment analyzer for social media data with visualization dashboard.",
    technologies: ["Python", "PyTorch", "Streamlit", "Pandas"],
    github: "https://github.com",
    category: "AI/ML",
  },
  {
    title: "SMS Notification Service",
    description: "Automated SMS notification system integrated with Twilio for real-time alerts and updates.",
    technologies: ["Node.js", "Twilio", "Firebase", "Express"],
    github: "https://github.com",
    category: "Web",
  },
  {
    title: "Image Classification Model",
    description: "Deep learning model for multi-class image classification with transfer learning.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    github: "https://github.com",
    category: "AI/ML",
  },
  {
    title: "Task Automation Scripts",
    description: "Collection of Python scripts for automating repetitive development and data tasks.",
    technologies: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
    github: "https://github.com",
    category: "Software",
  },
]

const categoryIcons = {
  "AI/ML": Brain,
  "Web": Globe,
  "Software": Server,
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredFeatured = activeFilter === "All" 
    ? featuredProjects 
    : featuredProjects.filter(p => p.category === activeFilter)
  
  const filteredOther = activeFilter === "All"
    ? otherProjects
    : otherProjects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="text-primary font-mono">03.</span> Projects
          </h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={cn(
                "px-4 py-2 text-sm font-mono rounded-lg border transition-all duration-300",
                activeFilter === cat
                  ? "bg-primary text-primary-foreground border-primary glow-sm"
                  : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {filteredFeatured.map((project, index) => {
            const CategoryIcon = categoryIcons[project.category as keyof typeof categoryIcons]
            return (
              <div 
                key={project.title}
                className={cn(
                  "relative grid lg:grid-cols-12 gap-4 items-center",
                  index % 2 === 0 ? "" : "lg:text-right"
                )}
              >
                {/* Project visual */}
                <div 
                  className={cn(
                    "lg:col-span-7 relative group",
                    index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-6"
                  )}
                >
                  <div className="relative overflow-hidden rounded-lg bg-card border border-border aspect-video">
                    {/* Code-like background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <CategoryIcon className="w-16 h-16 text-primary/30 mx-auto mb-4" />
                        <div className="font-mono text-primary/50 text-sm">
                          {project.highlight}
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </div>

                {/* Project content */}
                <div 
                  className={cn(
                    "lg:col-span-6 lg:absolute",
                    index % 2 === 0 
                      ? "lg:right-0 lg:text-right" 
                      : "lg:left-0 lg:text-left"
                  )}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary font-mono text-sm">Featured Project</span>
                    <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded font-mono">{project.category}</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 hover:text-primary transition-colors">
                    <a href={project.external || project.github} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <div className="bg-card p-5 rounded-lg shadow-xl mb-4 border border-border">
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <ul className={cn(
                    "flex flex-wrap gap-3 text-xs font-mono text-muted-foreground mb-4",
                    index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                  )}>
                    {project.technologies.map((tech) => (
                      <li key={tech} className="hover:text-primary transition-colors">{tech}</li>
                    ))}
                  </ul>
                  <div className={cn(
                    "flex gap-4",
                    index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"
                  )}>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.external && (
                      <a 
                        href={project.external} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                        aria-label="External Link"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Other Projects */}
        {filteredOther.length > 0 && (
          <>
            <h3 className="text-lg font-mono text-center mb-8 text-muted-foreground">
              {"// "}<span className="text-primary">Other Noteworthy Projects</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredOther.map((project) => (
                <div 
                  key={project.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="w-10 h-10 text-primary" />
                    <div className="flex gap-3">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.external && (
                        <a 
                          href={project.external} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="External Link"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded font-mono">{project.category}</span>
                  <h4 className="text-lg font-semibold mt-3 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

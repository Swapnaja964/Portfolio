"use client"

import { Code, Brain, Wrench, Database, Server, Cpu } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "C", "R", "TypeScript"],
    color: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    title: "AI & Data Science",
    icon: Brain,
    skills: ["Machine Learning", "Deep Learning", "NLP", "TensorFlow", "PyTorch", "Scikit-learn"],
    color: "from-purple-500/20 to-purple-500/5",
  },
  {
    title: "Web Development",
    icon: Server,
    skills: ["React", "Next.js", "Node.js", "Express", "REST APIs", "MongoDB"],
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Firebase", "ClickHouse", "MySQL", "Redis"],
    color: "from-orange-500/20 to-orange-500/5",
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "Docker", "Apache Kafka", "Twilio", "Vercel", "AWS"],
    color: "from-pink-500/20 to-pink-500/5",
  },
  {
    title: "Core CS",
    icon: Cpu,
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "OS", "System Design"],
    color: "from-blue-500/20 to-blue-500/5",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.05)_0%,transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="text-primary font-mono">02.</span> Skills & Technologies
          </h2>
          <div className="h-px flex-1 bg-border max-w-xs" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30 group-hover:glow-sm transition-all">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                
                {/* Skills grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-mono bg-secondary/80 text-muted-foreground rounded border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/20 group-hover:border-primary/50 transition-colors" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/20 group-hover:border-primary/50 transition-colors" />
            </div>
          ))}
        </div>

        {/* Tech stack visual */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground font-mono text-sm mb-6">
            {"// "}<span className="text-primary">Primary Stack</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Python", "TensorFlow", "React", "Next.js", "PostgreSQL", "Docker"].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 bg-card border border-border rounded-lg font-mono text-sm hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-1"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

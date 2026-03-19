"use client"

import { useEffect, useState } from "react"

const terminalLines = [
  { text: "$ whoami", type: "command" },
  { text: "swapnaja_magarde", type: "output" },
  { text: "$ cat skills.txt", type: "command" },
  { text: "Python, Java, JavaScript, TensorFlow, PyTorch", type: "output" },
  { text: "$ ./run_model.py --accuracy", type: "command" },
  { text: "Model Accuracy: 98.6% ✓", type: "success" },
  { text: "$ git status", type: "command" },
  { text: "All systems operational...", type: "output" },
]

export function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1)
      }, 800)
      return () => clearTimeout(timeout)
    }
  }, [visibleLines])

  return (
    <div className="bg-card/80 backdrop-blur border border-border rounded-lg overflow-hidden shadow-xl">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs font-mono text-muted-foreground">terminal</span>
      </div>
      
      {/* Terminal content */}
      <div className="p-4 font-mono text-sm space-y-1 min-h-[200px]">
        {terminalLines.slice(0, visibleLines).map((line, index) => (
          <div
            key={index}
            className={`
              ${line.type === "command" ? "text-foreground" : ""}
              ${line.type === "output" ? "text-muted-foreground pl-2" : ""}
              ${line.type === "success" ? "text-primary pl-2" : ""}
            `}
          >
            {line.text}
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
        )}
      </div>
    </div>
  )
}

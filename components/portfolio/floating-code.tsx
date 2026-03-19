"use client"

import { useState, useEffect } from "react"

const codeSnippets = [
  "const model = tf.sequential();",
  "model.add(layers.Dense(128));",
  "optimizer = Adam(lr=0.001)",
  "X_train, X_test = train_test_split()",
  "predictions = model.predict(X)",
  "accuracy_score(y_true, y_pred)",
  "SELECT * FROM neural_network;",
  "git commit -m 'feat: add AI'",
  "docker run -p 3000:3000 app",
  "from transformers import BERT",
  "loss = nn.CrossEntropyLoss()",
  "async function fetchData() {",
  "  return await api.get('/ml')",
  "}",
  "def train_epoch(model):",
  "    for batch in dataloader:",
  "        optimizer.zero_grad()",
  "import { useEffect } from 'react'",
  "export default function App()",
  "npm install @tensorflow/tfjs",
  "class NeuralNet(nn.Module):",
  "model.compile(loss='mse')",
  "weights = torch.load('model.pt')",
  "CREATE TABLE predictions (",
  "  id SERIAL PRIMARY KEY,",
  "  score FLOAT NOT NULL",
  ");",
  "const [state, setState] = useState()",
  "router.push('/dashboard')",
  "response = requests.post(url)",
]

interface CodeLine {
  id: number
  text: string
  top: string
  opacity: number
  duration: string
  delay: string
  direction: "left" | "right"
}

export function FloatingCode() {
  const [lines, setLines] = useState<CodeLine[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const newLines = codeSnippets.map((text, i) => ({
      id: i,
      text,
      top: `${3 + (i * 3.2) % 94}%`,
      opacity: 0.04 + Math.random() * 0.06,
      duration: `${40 + Math.random() * 30}s`,
      delay: `${-Math.random() * 40}s`,
      direction: (i % 2 === 0 ? "left" : "right") as "left" | "right",
    }))
    setLines(newLines)
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {lines.map((line) => (
        <div
          key={line.id}
          className="absolute font-mono text-sm text-primary/30 whitespace-nowrap"
          style={{
            top: line.top,
            left: line.direction === "left" ? "-20%" : "auto",
            right: line.direction === "right" ? "-20%" : "auto",
            opacity: line.opacity,
            animation: `${line.direction === "left" ? "scrollCodeLeft" : "scrollCodeRight"} ${line.duration} linear ${line.delay} infinite`,
          }}
        >
          <span className="px-4 py-1 rounded bg-primary/5 backdrop-blur-sm border border-primary/10">
            {line.text}
          </span>
        </div>
      ))}
    </div>
  )
}

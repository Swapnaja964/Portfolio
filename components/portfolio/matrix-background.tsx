"use client"

import { useState, useEffect } from "react"

interface CodeLine {
  id: number
  top: string
  delay: number
  duration: number
  code: string
  direction: "left" | "right"
}

export function MatrixBackground() {
  const [lines, setLines] = useState<CodeLine[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Full code syntax lines from languages used in projects
    const codeLines = [
      // Python / ML
      'import tensorflow as tf',
      'from sklearn.model_selection import train_test_split',
      'model = Sequential([Dense(128, activation="relu")])',
      'def train_model(X_train, y_train):',
      '    history = model.fit(X_train, y_train, epochs=50)',
      'predictions = model.predict(X_test)',
      'accuracy = accuracy_score(y_true, y_pred)',
      'df = pd.read_csv("dataset.csv")',
      'X = np.array(features).reshape(-1, 1)',
      'from transformers import BertTokenizer',
      'nlp = spacy.load("en_core_web_sm")',
      'vectorizer = TfidfVectorizer(max_features=5000)',
      
      // JavaScript / React
      'const [state, setState] = useState(null)',
      'useEffect(() => { fetchData() }, [dependency])',
      'export default function Component({ props })',
      'const response = await fetch("/api/data")',
      'return <div className="container">{children}</div>',
      'const handleSubmit = async (e) => { e.preventDefault() }',
      'import { useRouter } from "next/navigation"',
      'const data = items.map((item) => item.value)',
      'export async function GET(request: Request)',
      
      // Java
      'public class Application extends SpringBootApplication',
      'private final UserRepository userRepository;',
      'public ResponseEntity<User> getUser(@PathVariable Long id)',
      '@Autowired private JdbcTemplate jdbcTemplate;',
      'List<String> results = new ArrayList<>();',
      'try { connection.commit(); } catch (SQLException e)',
      
      // SQL
      'SELECT u.name, COUNT(*) FROM users u JOIN orders o ON u.id = o.user_id',
      'CREATE TABLE projects (id SERIAL PRIMARY KEY, name VARCHAR(255))',
      'INSERT INTO skills (name, category) VALUES ($1, $2)',
      'UPDATE users SET last_login = NOW() WHERE id = ?',
      'SELECT * FROM products WHERE price > 100 ORDER BY created_at DESC',
      
      // HTML/CSS/Tailwind
      '<section className="grid grid-cols-3 gap-4 p-8">',
      'className="flex items-center justify-between px-6"',
      '@apply bg-gradient-to-r from-cyan-500 to-blue-500;',
    ]
    
    const lineCount = 15
    const newLines = Array.from({ length: lineCount }, (_, i) => ({
      id: i,
      top: `${(i / lineCount) * 100}%`,
      delay: Math.random() * 5,
      duration: 25 + Math.random() * 15,
      code: codeLines[Math.floor(Math.random() * codeLines.length)],
      direction: Math.random() > 0.5 ? "left" as const : "right" as const,
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
          className="absolute font-mono text-xs text-primary/20 whitespace-nowrap"
          style={{
            top: line.top,
            left: line.direction === "left" ? "-50%" : "auto",
            right: line.direction === "right" ? "-50%" : "auto",
            animation: `scroll${line.direction === "left" ? "Left" : "Right"} ${line.duration}s linear ${line.delay}s infinite`,
          }}
        >
          {line.code}
        </div>
      ))}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(150vw); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(-150vw); }
        }
      ` }} />
    </div>
  )
}

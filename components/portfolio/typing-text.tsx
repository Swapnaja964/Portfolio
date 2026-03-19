"use client"

import { useEffect, useState } from "react"

interface TypingTextProps {
  texts: string[]
  className?: string
}

export function TypingText({ texts, className = "" }: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]
    const typingSpeed = isDeleting ? 30 : 80
    const pauseTime = 2000

    if (!isDeleting && displayText === currentFullText) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length - 1))
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex, texts])

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
    </span>
  )
}

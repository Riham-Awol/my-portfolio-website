"use client"

import { useState, useEffect } from "react"
import "./sparkle.css"

const Sparkle = ({ children }) => {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    const createSparkle = () => {
      const newSparkle = {
        id: Date.now() + Math.random(),
        size: Math.random() * 10 + 5, // Size between 5px and 15px
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        animationDelay: Math.random() * 2 + "s", // Delay up to 2s
        duration: Math.random() * 1.5 + 1.5 + "s", // Duration between 1.5s and 3s
      }
      setSparkles((prev) => [...prev, newSparkle])

      // Remove sparkle after its animation duration + a small buffer
      setTimeout(
        () => {
          setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id))
        },
        Number.parseFloat(newSparkle.duration) * 1000 + 100,
      )
    }

    const interval = setInterval(createSparkle, 300) // Create a new sparkle every 300ms

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="sparkle-container">
      {children}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle"
          style={{
            width: s.size,
            height: s.size,
            left: s.left,
            top: s.top,
            animationDelay: s.animationDelay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </span>
  )
}

export default Sparkle

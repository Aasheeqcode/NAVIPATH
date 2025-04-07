"use client"

import { useEffect, useState } from "react"
import { Ship } from "lucide-react"

export function PageTransition() {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`page-transition ${exiting ? "exit" : ""}`}>
      <div className="sailing-boat">
        <Ship className="h-16 w-16 text-white" />
      </div>
      <div className="ocean-waves">
        <div className="ocean-wave"></div>
        <div className="ocean-wave"></div>
        <div className="ocean-wave"></div>
      </div>
    </div>
  )
}


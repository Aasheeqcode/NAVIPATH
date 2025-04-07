"use client"

import { useEffect, useState } from "react"
import { Ship } from "lucide-react"

export function LoadingAnimation() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => Math.min(prev + 1, 100))
      } else {
        setIsComplete(true)
      }
    }, 30)

    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary transition-opacity duration-500 ${isComplete ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="relative w-full max-w-md h-2 bg-primary-foreground/20 rounded-full overflow-hidden mb-4">
        <div
          className="absolute top-0 left-0 h-full bg-secondary rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative w-full max-w-md h-20 mb-8">
        <div className="absolute bottom-0 left-0 w-full h-10 bg-secondary/20 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-secondary/40 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="absolute top-0 loading-ship" style={{ left: `${progress}%` }}>
          <Ship className="h-12 w-12 text-white" />
        </div>
      </div>

      <p className="text-white text-xl font-medium">Loading NaviPath...</p>
      <p className="text-white/70 text-sm mt-2">Charting the optimal course</p>
    </div>
  )
}


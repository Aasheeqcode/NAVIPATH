import * as THREE from "three"

// Utility function to load textures with fallbacks
export const loadTextureWithFallback = (url, fallbackColor = "#1e40af", onLoad) => {
  // Create a fallback texture (solid color)
  const canvas = document.createElement("canvas")
  canvas.width = 1
  canvas.height = 1
  const context = canvas.getContext("2d")
  if (context) {
    context.fillStyle = fallbackColor
    context.fillRect(0, 0, 1, 1)
  }
  const fallbackTexture = new THREE.CanvasTexture(canvas)

  // Try to load the actual texture
  const textureLoader = new THREE.TextureLoader()
  textureLoader.load(
    url,
    (loadedTexture) => {
      if (onLoad) onLoad(loadedTexture)
    },
    undefined,
    (error) => {
      console.error(`Error loading texture from ${url}:`, error)
      if (onLoad) onLoad(fallbackTexture)
    },
  )

  // Return the fallback immediately, will be replaced when/if real texture loads
  return fallbackTexture
}

// Create a simple procedural water texture
export const createWaterTexture = (width = 512, height = 512, color1 = "#0c4a6e", color2 = "#0369a1") => {
  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext("2d")

  if (context) {
    // Create a gradient
    const gradient = context.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, color1)
    gradient.addColorStop(1, color2)
    context.fillStyle = gradient
    context.fillRect(0, 0, width, height)

    // Add some noise/waves
    context.fillStyle = "rgba(255, 255, 255, 0.1)"
    for (let i = 0; i < 20; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const w = Math.random() * 100 + 50
      const h = Math.random() * 10 + 5
      context.fillRect(x, y, w, h)
    }
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  return texture
}


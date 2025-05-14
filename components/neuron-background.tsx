"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface NeuronBackgroundProps {
  className?: string
}

export default function NeuronBackground({ className = "" }: NeuronBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initial resize
    resizeCanvas()

    // Handle window resize
    window.addEventListener("resize", resizeCanvas)

    // Neuron nodes
    class Neuron {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      connections: Neuron[]

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.radius = Math.random() * 2 + 1
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.connections = []
      }

      update() {
        // Move the neuron
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        if (!ctx) return

        // Draw the neuron
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = theme === "dark" ? "rgba(100, 180, 255, 0.7)" : "rgba(30, 144, 255, 0.7)"
        ctx.fill()

        // Draw connections
        this.connections.forEach((neuron) => {
          const distance = Math.sqrt(Math.pow(this.x - neuron.x, 2) + Math.pow(this.y - neuron.y, 2))
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(this.x, this.y)
            ctx.lineTo(neuron.x, neuron.y)
            const opacity = 1 - distance / 150
            ctx.strokeStyle =
              theme === "dark" ? `rgba(100, 180, 255, ${opacity * 0.5})` : `rgba(30, 144, 255, ${opacity * 0.5})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      }

      connect(neurons: Neuron[]) {
        this.connections = neurons.filter((neuron) => {
          const distance = Math.sqrt(Math.pow(this.x - neuron.x, 2) + Math.pow(this.y - neuron.y, 2))
          return distance < 150 && neuron !== this
        })
      }
    }

    // Create neurons
    const neuronCount = Math.floor((canvas.width * canvas.height) / 15000)
    const neurons: Neuron[] = []

    for (let i = 0; i < neuronCount; i++) {
      neurons.push(new Neuron(Math.random() * canvas.width, Math.random() * canvas.height))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw neurons
      neurons.forEach((neuron) => {
        neuron.update()
        neuron.connect(neurons)
        neuron.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 -z-10 h-full w-full opacity-20 ${className}`}
      aria-hidden="true"
    />
  )
}

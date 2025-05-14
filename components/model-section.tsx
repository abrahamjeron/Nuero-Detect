"use client"

import { motion } from "framer-motion"

interface ModelSectionProps {
  title: string
  description: string
  steps: string[]
}

export default function ModelSection({ title, description, steps }: ModelSectionProps) {
  return (
    <motion.div
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
      <div className="mt-4 space-y-2">
        <h4 className="font-medium">Algorithm:</h4>
        <ul className="ml-6 list-disc space-y-1">
          {steps.map((step, index) => (
            <li key={index} className="text-sm text-gray-500">
              {step}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"

interface FeatureCardProps {
  title: string
  description: string
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </motion.div>
  )
}

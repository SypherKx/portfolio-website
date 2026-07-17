'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  force?: boolean
}

export function Reveal({ children, delay = 0, className = '', force = false }: RevealProps) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={force ? { y: 0, opacity: 1 } : undefined}
      whileInView={!force ? { y: 0, opacity: 1 } : undefined}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

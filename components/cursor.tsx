'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function Cursor() {
  const [p, setP] = useState({ x: -100, y: -100 })
  const [h, setH] = useState(false)
  
  useEffect(() => {
    const m = (e: MouseEvent) => {
      setP({ x: e.clientX, y: e.clientY })
      const target = e.target as HTMLElement
      setH(!!target?.closest('a, button, [data-cursor="hover"], [role="button"]'))
    }
    window.addEventListener('mousemove', m)
    return () => window.removeEventListener('mousemove', m)
  }, [])

  return (
    <motion.div 
      className="cursor-dot" 
      animate={{ 
        scale: h ? 4 : 1,
        backgroundColor: h ? 'hsl(var(--accent))' : 'hsl(var(--ink))',
        opacity: h ? 0.4 : 1
      }}
      style={{ 
        width: '8px',
        height: '8px',
        borderRadius: '9999px',
        left: p.x, 
        top: p.y,
        position: 'fixed',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: h ? 'normal' : 'difference'
      }} 
    />
  )
}

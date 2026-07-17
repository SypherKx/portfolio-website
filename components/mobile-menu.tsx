'use client'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV } from '@/lib/data'

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [open])

  const overlay = (
    <AnimatePresence>
      {open && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999]"
          style={{ background: 'rgba(8,8,8,0.92)', backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)' }}
        >
          {/* Liquid Glass Highlights */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-to-br from-accent/20 via-transparent to-accent/10 opacity-40 blur-[100px] animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'radial-gradient(circle at 50% -20%, rgba(255,255,255,0.06), transparent 70%)' }} />
          </div>
          
          <div className="relative z-10 flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-12 px-2">
              <span className="text-accent font-semibold font-mono text-[11px] uppercase tracking-[0.2em]">Navigation</span>
              <button 
                onClick={() => setOpen(false)} 
                data-cursor="hover"
                className="h-10 w-10 border border-line/50 rounded-full flex items-center justify-center hover:bg-bg2 transition-colors text-ink active:scale-90"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {NAV.map((n, i) => (
                <motion.a 
                  key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  data-cursor="hover"
                  className="group flex items-baseline gap-4 border-b border-line/50 pb-4"
                >
                  <span className="font-mono text-[12px] text-accent group-hover:scale-110 transition-transform duration-300">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-serif text-5xl italic text-ink group-hover:text-accent transition-all group-hover:translate-x-4 group-hover:skew-x-[-6deg] duration-500">{n}</span>
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto pt-10 border-t border-line/50 grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
              <a href="https://github.com/SypherKx" className="flex items-center gap-2 hover:text-ink transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub
              </a>
              <a href="https://linkedin.com/in/karan730" className="flex items-center gap-2 hover:text-ink transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      <button 
        onClick={() => setOpen(true)} 
        className="relative z-50 flex items-center gap-2 border border-line bg-bg2/80 backdrop-blur-md px-4 py-2 rounded-full hover:bg-bg2 transition-all active:scale-95"
      >
        <Menu size={14} className="text-accent" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-ink">Menu</span>
      </button>
      {mounted && ReactDOM.createPortal(overlay, document.body)}
    </>
  )
}

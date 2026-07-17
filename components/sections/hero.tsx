'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { TITLES } from '@/lib/data'

export function HeroSection() {
  const [titleIdx, setTitleIdx] = useState(0)

  useEffect(() => {
    const i = setInterval(() => setTitleIdx((p) => (p + 1) % TITLES.length), 2400)
    return () => clearInterval(i)
  }, [])

  return (
    <section id="index" className="relative flex flex-col justify-between min-h-[calc(100vh-3rem)]">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 pt-4 sm:pt-6 flex-1 flex flex-col pb-8">

        <div className="py-10 sm:py-0 sm:flex-1 flex flex-col sm:justify-center sm:min-h-[40vh]">
          <h1 className="font-serif text-[12vw] sm:text-[clamp(4rem,8vw,9rem)] leading-[0.9] font-medium tracking-tighter">
            <Reveal>Karan Pratap</Reveal>
            <Reveal delay={0.1} className="block italic font-light text-accent">Singh.</Reveal>
          </h1>
        </div>

        <div className="mt-6 grid grid-cols-12 gap-y-6 gap-x-6 border-t border-line pt-6">
          {/* Row 1: Intro + Links (Desktop) / Flow (Mobile) */}
          <div className="col-span-12 sm:col-span-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute order-1 sm:order-none">
            <Reveal>- Currently</Reveal>
          </div>
          <div className="col-span-12 sm:col-span-6 order-2 sm:order-none">
            <Reveal>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xl sm:text-4xl font-serif leading-tight">
                <span className="text-ink-soft">A</span>
                <div className="relative inline-block h-[1.1em] min-w-[10ch] sm:min-w-[12ch] overflow-hidden align-middle translate-y-1 sm:translate-y-2">
                  <AnimatePresence>
                    <motion.span 
                      key={titleIdx}
                      initial={{ y: '100%', opacity: 0 }} 
                      animate={{ y: 0, opacity: 1 }} 
                      exit={{ y: '-100%', opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                      className="absolute left-0 top-0 italic text-accent whitespace-nowrap"
                    >
                      {TITLES[titleIdx]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="text-ink-soft">- building intelligent systems</span>
              </div>
              <p className="mt-4 max-w-xl text-lg sm:text-xl text-ink-soft leading-relaxed">
                I work at the intersection of data, machine learning and automated workflows. I turn raw signals into insights - and insights into scale.
              </p>
            </Reveal>
          </div>

          {/* Disciplines - Moved up on mobile using order classes */}
          <div className="col-span-12 sm:col-span-3 order-3 sm:order-none sm:hidden lg:hidden">
             {/* This is a mobile-only placeholder or I can just rearrange the DOM */}
          </div>

          {/* Desktop Links - Hidden on mobile in this position, moved down */}
          <div className="hidden sm:flex col-span-12 sm:col-span-3 flex-col items-start gap-4 order-5 sm:order-none">
            <Reveal delay={0.1}>
              <div className="flex flex-col items-start gap-3">
                <a href="#work" className="group inline-flex items-center gap-2 text-sm font-medium border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors">
                  Selected work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-medium border-b border-line pb-1 hover:text-accent hover:border-accent transition-colors">
                  Download Resume <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href="https://github.com/SypherKx" target="_blank" rel="noopener noreferrer" 
                  data-cursor="hover"
                  className="flex-1 min-w-[110px] flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-mute hover:text-accent transition-colors border border-line rounded-full px-4 py-2.5 bg-bg2/50 group">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/karan730" target="_blank" rel="noopener noreferrer" 
                  data-cursor="hover"
                  className="flex-1 min-w-[110px] flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-mute hover:text-accent transition-colors border border-line rounded-full px-4 py-2.5 bg-bg2/50 group">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          {/* Row 2: Volume + Disciplines + Availability */}
          <div className="col-span-12 sm:col-span-3 order-3 sm:order-none border-t sm:border-t-0 border-line/20 pt-4 sm:pt-0">
            <Reveal force>
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-5xl sm:text-8xl leading-none">01</span>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Volume</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">Edition 2026</span>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 sm:col-span-6 order-4 sm:order-none border-t sm:border-t-0 pt-4 sm:pt-0">
            <Reveal force delay={0.05}>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute block mb-3">Core Disciplines</span>
              <p className="font-serif text-2xl sm:text-4xl leading-tight">
                <span className="italic">Data Analysis</span> <span className="text-accent">/</span> Machine Learning <span className="text-accent">/</span><br className="hidden sm:block" /> <span className="italic">AI Tools & Workflows</span>
              </p>
            </Reveal>
          </div>
          <div className="hidden lg:block sm:col-span-3 text-left sm:order-none">
            <Reveal force delay={0.1}>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute block mb-3">Availability</span>
              <p className="font-serif text-xl italic text-ink-soft">Open to strategic full-time roles <br/>& high-impact &apos;26 internships</p>
            </Reveal>
          </div>

          {/* Mobile-only Links - Placed at the very bottom */}
          <div className="col-span-12 sm:hidden flex flex-col items-center gap-4 order-6 mt-4 pt-8 border-t border-line/20">
            <div className="flex flex-col items-center gap-3">
              <a href="#work" className="group inline-flex items-center gap-2 text-sm font-medium border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors">
                Selected work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-medium border-b border-line pb-1 hover:text-accent hover:border-accent transition-colors">
                Download Resume <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
            <div className="mt-5 w-full grid grid-cols-2 gap-3">
              <a href="https://github.com/SypherKx" target="_blank" rel="noopener noreferrer" 
                data-cursor="hover"
                className="flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-mute hover:text-accent transition-colors border border-line rounded-full px-4 py-2.5 bg-bg2/50 group">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/karan730" target="_blank" rel="noopener noreferrer" 
                data-cursor="hover"
                className="flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-mute hover:text-accent transition-colors border border-line rounded-full px-4 py-2.5 bg-bg2/50 group">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

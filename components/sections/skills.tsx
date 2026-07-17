'use client'
import React from 'react'
import { Reveal } from '@/components/reveal'
import { SKILLS } from '@/lib/data'

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-[1400px] px-6 sm:px-10 py-24 sm:py-32">
      <div className="mb-16 sm:mb-24 text-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mb-4">iii. The toolbox</p>
          <h2 className="font-serif text-5xl sm:text-7xl tracking-tight leading-[0.95] mb-3 text-accent">Skills.</h2>
          <p className="font-serif text-2xl sm:text-3xl italic text-ink-soft leading-tight">A short, opinionated stack.</p>
        </Reveal>
      </div>
      <div className="grid grid-cols-12 gap-x-6 gap-y-10 border-t border-line pt-10">
        {SKILLS.map(([cat, items], i) => (
          <Reveal key={cat} delay={i * 0.06} className="col-span-12 sm:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">{String(i + 1).padStart(2, '0')} / {cat}</p>
            <ul className="mt-4 space-y-2">
              {items.map((it) => (
                <li key={it} className="font-serif text-2xl sm:text-3xl leading-tight tracking-tight">
                  <span className="text-accent mr-2">·</span>{it}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

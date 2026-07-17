'use client'
import React from 'react'
import { Reveal } from '@/components/reveal'
import { CERTS } from '@/lib/data'

export function CertsSection() {
  return (
    <section className="border-y border-line bg-bg2">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-24">
        <div className="mb-12 pt-24 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mb-4">iv. Credentials</p>
            <h2 className="font-serif text-4xl sm:text-6xl tracking-tight">
              Studied with the best, <br className="hidden sm:block" />
              <span className="italic text-ink-soft">applied in the real.</span>
            </h2>
          </Reveal>
        </div>
        <div className="border-t border-line">
          {CERTS.map(([t, o], i) => (
            <Reveal key={t} delay={i * 0.04}>
              <div className="grid grid-cols-12 gap-6 py-6 border-b border-line items-baseline">
                <div className="col-span-2 sm:col-span-1 font-mono text-xs text-ink-mute">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="col-span-10 sm:col-span-7 font-serif text-xl sm:text-3xl tracking-tight">
                  {t}
                </h4>
                <p className="col-span-12 sm:col-span-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute sm:text-right">
                  {o}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'
import { Reveal } from '@/components/reveal'
import { TIMELINE } from '@/lib/data'

export function AboutSection() {
  return (
    <section id="about" className="bg-bg2 border-y border-line">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-24 sm:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            <Reveal>ii. A note on the work</Reveal>
          </div>
          <div className="col-span-12 sm:col-span-9 space-y-8">
            <Reveal>
              <h2 className="font-serif text-5xl sm:text-7xl tracking-tight leading-[0.95] mb-8 text-accent">About.</h2>
              <p className="font-serif text-2xl sm:text-5xl leading-[1.2] tracking-tight">
                I build intelligent systems that turn raw datasets into <span className="italic text-accent">clarity</span> - vision models that see in real time, automated pipelines that handle complexity, and workflow engines that <span className="italic">map the rhythm of modern scale.</span>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-12 gap-6 pt-4">
                <p className="col-span-12 sm:col-span-6 text-ink-soft text-lg leading-relaxed">
                  I am pursuing a B.Tech in Information Technology at Pranveer Singh Institute of Technology. My focus is data analytics, machine-learning and high-performance workflows. Curious by default, methodical by training.
                </p>
                <p className="col-span-12 sm:col-span-6 text-ink-soft text-lg leading-relaxed">
                  I love the moment a notebook stops being code and starts being a solution. Outside the editor, I research AI systems, build automated experiments, and lead web for two student communities on campus.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 border-t border-line pt-8">
                {TIMELINE.map((t, i) => (
                  <div key={i} className="grid grid-cols-12 gap-6 py-6 border-b border-line/70 last:border-b-0">
                    <div className="col-span-3 sm:col-span-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{t.y}</div>
                    <div className="col-span-9 sm:col-span-4">
                      <h4 className="font-serif text-xl sm:text-2xl">{t.t}</h4>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mt-1">{t.o}</p>
                    </div>
                    <div className="col-span-12 sm:col-span-6 text-ink-soft leading-relaxed text-sm">
                      {Array.isArray(t.d) ? (
                        <ul className="space-y-2">
                          {t.d.map((point, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-accent mt-1.5 h-1 w-1 rounded-full shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{t.d}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

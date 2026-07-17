'use client'
import { ArrowUpRight, Github } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { PROJECTS } from '@/lib/data'

export function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 sm:px-10 py-24 sm:py-32">
      <div className="mb-16 sm:mb-24 text-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mb-4">i. Selected Work</p>
          <h2 className="font-serif text-5xl sm:text-7xl tracking-tight leading-[0.95] mb-3 text-accent">Work.</h2>
          <p className="font-serif text-2xl sm:text-3xl italic text-ink-soft leading-tight">Selected projects, one signal.</p>
        </Reveal>
      </div>

      <div className="space-y-0 border-t border-line">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.05}>
            <div className="group block border-b border-line py-10 sm:py-14 hover:bg-bg2 transition-colors">
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-2 sm:col-span-1 font-mono text-xs text-ink-mute mt-1 sm:mt-2.5">{p.n}</div>
                <div className="col-span-10 sm:col-span-5">
                  <h3 className="font-serif text-3xl sm:text-5xl leading-tight tracking-tight group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                    {p.role} <span className="mx-2">/</span> {p.year}
                  </p>
                </div>
                <div className="col-span-12 sm:col-span-6 flex flex-col gap-5 mt-1 sm:mt-2">
                  <div className="text-ink-soft text-base leading-relaxed">{p.desc}</div>
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    {p.links ? (
                      p.links.map((l) => {
                        const isGithub = l.label.toLowerCase().includes('github') || l.url.toLowerCase().includes('github.com')
                        return (
                          <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink hover:text-accent transition-colors">
                            {isGithub && <Github size={12} className="transition-colors" />}
                            <span className="border-b border-ink group-hover/link:border-accent pb-0.5">{l.label}</span>
                            {!isGithub && !l.label.includes('↗') && <ArrowUpRight size={12} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />}
                          </a>
                        )
                      })
                    ) : p.link ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink hover:text-accent transition-colors">
                        <span className="border-b border-ink group-hover/link:border-accent pb-0.5">Live Project</span>
                        <ArrowUpRight size={12} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-8 sm:gap-12 sm:pl-[8.33%]">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-[10px] uppercase tracking-widest text-ink-mute border border-line rounded-full px-3 py-1">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.15}>
          <a href="https://github.com/SypherKx" target="_blank" rel="noopener noreferrer" className="group block border-b border-line py-10 sm:py-14 hover:bg-bg2 transition-colors text-center flex flex-col items-center gap-2">
            <span className="font-serif text-3xl sm:text-5xl italic text-ink-soft group-hover:text-ink transition-colors">
              Explore the complete archive <ArrowUpRight className="inline-block ml-2 -translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={28} />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute group-hover:text-accent transition-colors">Visit GitHub for more projects and source code</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

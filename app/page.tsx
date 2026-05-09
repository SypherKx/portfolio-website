'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { ArrowUpRight, ArrowRight, MoveRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const NAV = ['Index', 'Work', 'About', 'Skills', 'Contact']
const TITLES = ['Data Analyst', 'ML Engineer', 'Future Data Scientist', 'Fintech Enthusiast']

const PROJECTS = [
  {
    n: '01', name: 'Global Sales Dashboard', year: '2024', role: 'Data / BI',
    desc: 'An interactive Power BI dashboard tracking global sales metrics, regional performance, and revenue forecasting with dynamic data modeling.',
    stack: ['Power BI', 'DAX', 'Data Modeling', 'SQL']
  },
  {
    n: '02', name: 'NutraHire', year: '2024', role: 'AI / LLM App',
    desc: 'An intelligent, serverless resume screening platform that parses PDFs and instantly ranks candidates using Groq API (Llama-3.3-70B) and a Flask backend.',
    stack: ['Python', 'Flask', 'LLM'],
    link: 'https://nutrahire.vercel.app'
  },
  {
    n: '03', name: 'Footprints 2K26', year: '2024', role: 'Frontend / Web App',
    desc: 'A modern, high-performance web app for the Footprints 2K26 sports festival showcasing 14 live events with immersive UI.',
    stack: ['JavaScript', 'TailwindCSS v4', 'Framer Motion'],
    link: 'https://footprints.ignitia.in'
  },
  {
    n: '04', name: 'CardSentinel', year: '2024', role: 'Fintech / Fraud Detection',
    desc: 'An AI-powered, real-time credit card fraud detection engine built with a Logistic Regression ML model and a modern Flask Web UI featuring glassmorphism design.',
    stack: ['Python', 'Flask', 'Scikit-learn', 'Machine Learning'],
    link: 'https://card-sentinel.vercel.app'
  },
  {
    n: '05', name: 'Aether Eye', year: '2024', role: 'AI / Computer Vision',
    desc: 'A real-time object detection pipeline built on YOLOv8 + OpenCV. Tracks, classifies and reports across live video streams with millisecond inference.',
    stack: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch']
  },
  {
    n: '06', name: 'S&P 500 Predictor', year: '2023', role: 'Quant / Time Series',
    desc: 'A quantitative engine forecasting S&P 500 movements via LSTM and technical indicators. Backtested strategies with risk-adjusted Sharpe optimization.',
    stack: ['Python', 'TensorFlow', 'Pandas', 'Tableau']
  }
]

const TIMELINE = [
  { y: '2024 —', t: 'Website Co-Head', o: 'PSIT Ignitia & Footprints 2K26', d: 'Architecting and shipping fest websites; leading designers and developers; delivered immersive experiences with 99.9% uptime during live events.' },
  { y: '2024 —', t: 'Head, Technical Design & Development', o: 'PSIT Sports Club', d: 'Owning the digital identity of the club. Branding systems, web rollouts, and registration platforms for inter-college tournaments.' },
  { y: '2023 — 27', t: 'B.Tech, Information Technology', o: 'Pranveer Singh Institute of Technology', d: 'Pursuing IT with a sharp focus on Data Analytics, Machine Learning and Quantitative Finance. Active in coding contests and open-source.' }
]

const SKILLS: [string, string[]][] = [
  ['Data Science & ML', ['Scikit-learn', 'Pandas', 'NumPy', 'YOLO', 'OpenCV', 'Prophet', 'Random Forest', 'EDA']],
  ['Data Visualization', ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Google Data Analytics']],
  ['Languages & Databases', ['Python', 'SQL', 'Java', 'C++', 'C']],
  ['Web & Tools', ['Streamlit', 'AWS', 'Git/GitHub', 'Jupyter Notebooks']],
  ['Domain Knowledge', ['Financial Analysis', 'Quantitative Modeling', 'Risk Assessment', 'Stock Market Analysis']]
]

const CERTS: [string, string][] = [
  ['Google Data Analytics Professional Certificate', 'Coursera · Google'],
  ['How Software Ate Finance', 'Stanford University'],
  ['Financial Markets', 'Yale University'],
  ['ICPC Asia Kanpur — Preliminary Contestant', 'ACM ICPC']
]



function Cursor() {
  const [p, setP] = useState({ x: -100, y: -100 })
  useEffect(() => {
    const m = (e: MouseEvent) => setP({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', m)
    return () => window.removeEventListener('mousemove', m)
  }, [])
  return <div className="cursor-dot" style={{ transform: `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)` }} />
}

function MobileMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
    return () => { document.body.style.overflow = 'auto' }
  }, [open])

  return (
    <>
      <button onClick={() => setOpen(true)} className="flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/10 transition-all active:scale-95">
        <Menu size={14} className="text-accent" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-white/90">Menu</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-[32px] flex flex-col p-6 border-b border-white/10 overflow-hidden"
          >
            {/* Liquid Glass Highlights */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-to-br from-accent/20 via-transparent to-accent/10 opacity-50 blur-[80px] animate-pulse" />
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.1),transparent_70%)]" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-center mb-12">
                <span className="text-white/90 font-semibold font-mono text-[11px] uppercase tracking-[0.16em]">Navigation</span>
                <button onClick={() => setOpen(false)} className="h-10 w-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors text-white">
                  <X size={18} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {NAV.map((n, i) => (
                  <a 
                    key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 border-b border-white/5 pb-4"
                  >
                    <span className="font-mono text-[12px] text-accent/80">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-serif text-5xl italic text-white/90 group-hover:text-accent transition-colors group-hover:translate-x-2 transition-transform duration-500">{n}</span>
                  </a>
                ))}
              </nav>
              <div className="mt-auto pt-10 border-t border-white/5 grid grid-cols-2 gap-4 font-mono text-[10px] uppercase tracking-widest text-white/40">
                <a href="https://github.com/SypherKx" className="hover:text-white transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/karan730" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Reveal({ children, delay = 0, className = '', force = false }: { children: React.ReactNode; delay?: number; className?: string; force?: boolean }) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={force ? { y: 0, opacity: 1 } : undefined}
      whileInView={!force ? { y: 0, opacity: 1 } : undefined}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >{children}</motion.div>
  )
}

export default function Page() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [time, setTime] = useState('')
  const [contact, setContact] = useState<string | null>(null)

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, lerp: 0.08 })
    function raf(t: number) { lenis.raf(t); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    const i = setInterval(() => setTitleIdx((p) => (p + 1) % TITLES.length), 2400)
    return () => clearInterval(i)
  }, [])

  useEffect(() => {
    const update = () => {
      const d = new Date()
      const opts: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata', hour12: false }
      setTime(d.toLocaleTimeString('en-GB', opts) + ' IST')
    }
    update()
    const i = setInterval(update, 30_000)
    return () => clearInterval(i)
  }, [])

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setContact('sending')
    const fd = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fd.get('name'), email: fd.get('email'), message: fd.get('message') })
      })
      if (!res.ok) throw new Error()
      setContact('sent'); e.currentTarget.reset()
    } catch { setContact('error') }
  }

  return (
    <main className="relative min-h-screen">
      <Cursor />
      <div className="grain" />

      <div className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-md">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 h-14 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.16em] text-ink-mute">
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-ink font-semibold text-xs tracking-tight">KPS<span className="text-accent">.</span></span>
            <div className="hidden sm:flex items-center gap-6">
              <span>Kanpur, IN</span>
              <span className="hidden md:inline">{time}</span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-6">
            {NAV.map((n, i) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="link-underline hover:text-ink whitespace-nowrap shrink-0">
                <span className="text-accent mr-1">{String(i + 1).padStart(2, '0')}</span>{n}
              </a>
            ))}

          </nav>

          {/* Mobile Nav Trigger */}
          <div className="sm:hidden flex items-center gap-3">

            <MobileMenu />
          </div>
        </div>
      </div>

      <section id="index" className="relative flex flex-col justify-between min-h-[calc(100vh-3rem)]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 pt-4 sm:pt-6 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-12 gap-y-4 gap-x-6">
            <div className="col-span-12 sm:col-span-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
              <Reveal>(Portfolio · 2026) <span className="text-accent">●</span> Vol. 01</Reveal>
            </div>
            <div className="col-span-12 sm:col-span-9 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
              <Reveal>Based in Kanpur, India <span className="mx-2">/</span> Available for select engagements</Reveal>
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <h1 className="font-serif text-[clamp(2.75rem,10vw,10rem)] leading-[0.9] font-medium tracking-tight">
              <Reveal>Karan Pratap</Reveal>
              <Reveal delay={0.1} className="block italic font-light text-accent">Singh.</Reveal>
            </h1>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-y-6 gap-x-6 border-t border-line pt-6">
            <div className="col-span-12 sm:col-span-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
              <Reveal>— Currently</Reveal>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <Reveal>
                <div className="flex items-baseline flex-wrap gap-x-3 text-2xl sm:text-3xl font-serif">
                  <span className="text-ink-soft">A</span>
                  <span className="relative inline-block h-9 sm:h-10 w-[16ch] overflow-hidden align-baseline">
                    <AnimatePresence mode="wait">
                      <motion.span key={titleIdx}
                        initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -36, opacity: 0 }}
                        transition={{ duration: 0.45 }}
                        className="absolute left-0 top-0 italic text-accent">{TITLES[titleIdx]}</motion.span>
                    </AnimatePresence>
                  </span>
                  <span className="text-ink-soft">— building intelligent systems</span>
                </div>
                <p className="mt-4 max-w-xl text-base sm:text-lg text-ink-soft leading-relaxed">
                  I work at the intersection of data, AI and quantitative finance. I turn raw signals into stories — and stories into decisions.
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 sm:col-span-3 flex flex-col items-start gap-4">
              <Reveal delay={0.1}>
                <div className="flex flex-col items-start gap-3">
                  <a href="#work" className="group inline-flex items-center gap-2 text-sm font-medium border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors">
                    Selected work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-medium border-b border-line pb-1 hover:text-accent hover:border-accent transition-colors">
                    Download Resume <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
                <div className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                  <a href="https://github.com/SypherKx" target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:border-ink transition-colors border border-line rounded-full px-4 py-1.5 bg-bg2/50">GitHub</a>
                  <a href="https://www.linkedin.com/in/karan730" target="_blank" rel="noopener noreferrer" className="hover:text-ink hover:border-ink transition-colors border border-line rounded-full px-4 py-1.5 bg-bg2/50">LinkedIn</a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 pb-6 pt-4">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-6 sm:col-span-3">
              <Reveal force><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Issue</p>
              <p className="font-serif text-5xl sm:text-7xl mt-1">№ 01</p></Reveal>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <Reveal force delay={0.05}><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Discipline</p>
              <p className="font-serif text-2xl sm:text-3xl mt-1 italic">Data · Finance · ML</p></Reveal>
            </div>

          </div>
        </div>
      </section>

      <div className="border-y border-line py-5 overflow-hidden bg-bg2">
        <div className="flex w-max marquee gap-12 whitespace-nowrap font-serif text-3xl sm:text-5xl italic">
          {[...Array(3)].map((_, k) => (
            <div key={k} className="flex items-center gap-12">
              {['Data Analytics', '·', 'Machine Learning', '·', 'Computer Vision', '·', 'Quant Finance', '·', 'Fintech', '·'].map((w, i) => (
                <span key={i} className={i % 2 === 1 ? 'text-accent' : 'text-ink'}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

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
                <div className="grid grid-cols-12 gap-6 items-baseline">
                  <div className="col-span-2 sm:col-span-1 font-mono text-xs text-ink-mute">{p.n}</div>
                  <div className="col-span-10 sm:col-span-5">
                    <h3 className="font-serif text-3xl sm:text-5xl leading-tight tracking-tight group-hover:text-accent transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">{p.role} <span className="mx-2">/</span> {p.year}</p>
                  </div>
                  <div className="col-span-12 sm:col-span-6 text-ink-soft text-base leading-relaxed">{p.desc}</div>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-6 sm:pl-[8.33%]">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="font-mono text-[10px] uppercase tracking-widest text-ink-mute border border-line rounded-full px-3 py-1">{s}</span>
                    ))}
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink hover:text-accent transition-colors">
                      <span className="border-b border-ink group-hover/link:border-accent pb-0.5">Live Project</span>
                      <ArrowUpRight size={14} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
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

      <section id="about" className="bg-bg2 border-y border-line">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-24 sm:py-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
              <Reveal>ii. A note on the work</Reveal>
            </div>
            <div className="col-span-12 sm:col-span-9 space-y-8">
              <Reveal>
                <h2 className="font-serif text-5xl sm:text-7xl tracking-tight leading-[0.95] mb-8 text-accent">About.</h2>
                <p className="font-serif text-3xl sm:text-5xl leading-[1.1] tracking-tight">
                  I build intelligent systems that turn raw datasets into <span className="italic text-accent">clarity</span> — fraud detectors that watch a million transactions, vision models that see in real time, and forecasting engines that <span className="italic">map the rhythm of markets.</span>
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="grid grid-cols-12 gap-6 pt-4">
                  <p className="col-span-12 sm:col-span-6 text-ink-soft text-lg leading-relaxed">
                    I am pursuing a B.Tech in Information Technology at Pranveer Singh Institute of Technology. My focus is data analytics, machine-learning and quantitative finance. Curious by default, methodical by training.
                  </p>
                  <p className="col-span-12 sm:col-span-6 text-ink-soft text-lg leading-relaxed">
                    I love the moment a notebook stops being code and starts being a decision. Outside the editor, I read finance, build small experiments, and lead web for two student communities on campus.
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
                      <p className="col-span-12 sm:col-span-6 text-ink-soft leading-relaxed">{t.d}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

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

      <section className="border-y border-line bg-bg2">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-24">
          <div className="mb-12 pt-24 text-center">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mb-4">iv. Credentials</p>
              <h2 className="font-serif text-4xl sm:text-6xl tracking-tight">Studied with the best, <br className="hidden sm:block" /><span className="italic text-ink-soft">applied in the real.</span></h2>
            </Reveal>
          </div>
          <div className="border-t border-line">
            {CERTS.map(([t, o], i) => (
              <Reveal key={t} delay={i * 0.04}>
                <div className="grid grid-cols-12 gap-6 py-6 border-b border-line items-baseline">
                  <div className="col-span-2 sm:col-span-1 font-mono text-xs text-ink-mute">{String(i + 1).padStart(2, '0')}</div>
                  <h4 className="col-span-10 sm:col-span-7 font-serif text-xl sm:text-3xl tracking-tight">{t}</h4>
                  <p className="col-span-12 sm:col-span-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute sm:text-right">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1400px] px-6 sm:px-10 py-24 sm:py-32">
        <div className="mb-16 sm:mb-24 text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute mb-4">v. Correspondence</p>
            <h2 className="font-serif text-5xl sm:text-7xl tracking-tight leading-[0.95] mb-3 text-accent">Contact.</h2>
            <p className="font-serif text-2xl sm:text-3xl italic text-ink-soft leading-tight">Let&apos;s make something useful.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-10 border-t border-line pt-10">
          <div className="col-span-12 lg:col-span-5 space-y-8">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Direct</p>
              <a href="mailto:itskaranpratapsingh@gmail.com" className="block font-serif text-2xl sm:text-3xl mt-2 link-underline break-all">itskaranpratapsingh@gmail.com</a>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Elsewhere</p>
              <ul className="mt-3 space-y-2 text-xl">
                <li><a href="https://github.com/SypherKx" target="_blank" rel="noopener noreferrer" className="link-underline flex items-baseline justify-between gap-6">
                  <span className="font-serif">GitHub</span>
                  <span className="font-mono text-xs text-ink-mute">github.com/SypherKx</span>
                </a></li>
                <li><a href="https://www.linkedin.com/in/karan730" target="_blank" rel="noopener noreferrer" className="link-underline flex items-baseline justify-between gap-6">
                  <span className="font-serif">LinkedIn</span>
                  <span className="font-mono text-xs text-ink-mute">linkedin.com/in/karan730</span>
                </a></li>
                <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="link-underline flex items-baseline justify-between gap-6">
                  <span className="font-serif">Resume</span>
                  <span className="font-mono text-xs text-ink-mute">Download PDF ↗</span>
                </a></li>
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="border-t border-line pt-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Status</p>
                <p className="mt-2 text-lg flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                  Open to internships & collaborations
                </p>
              </div>
            </Reveal>
          </div>

          <form onSubmit={submit} className="col-span-12 lg:col-span-7 space-y-5">
            <Reveal>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Name</label>
                  <Input name="name" required placeholder="Your name" className="mt-2 bg-transparent border-x-0 border-t-0 border-b border-line rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent text-lg" />
                </div>
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Email</label>
                  <Input name="email" type="email" required placeholder="you@domain.com" className="mt-2 bg-transparent border-x-0 border-t-0 border-b border-line rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent text-lg" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Message</label>
              <Textarea name="message" required rows={6} placeholder="Tell me about your project, idea or opportunity — the more specific the better."
                className="mt-2 bg-transparent border-x-0 border-t-0 border-b border-line rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent text-lg resize-none" />
            </Reveal>
            <Reveal delay={0.1}>
              <Button type="submit" disabled={contact === 'sending'}
                className="group rounded-none bg-ink text-paper hover:bg-accent transition-colors px-8 py-6 text-base font-medium">
                {contact === 'sending' ? 'Sending …' : contact === 'sent' ? 'Sent — thank you' : contact === 'error' ? 'Error — try again' : 'Send the note'}
                <MoveRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </Reveal>
          </form>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-10">
          <div className="max-w-xl">
            <p className="font-serif text-3xl sm:text-5xl italic leading-tight">Built with data, design <span className="text-accent">&amp;</span> curiosity.</p>
          </div>
          <div className="sm:text-right font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute flex flex-col gap-2">
            <p>© {new Date().getFullYear()} Karan Pratap Singh</p>
            <a href="#index" className="inline-flex items-center sm:justify-end gap-1 link-underline normal-case tracking-normal text-ink">Index ↑</a>
          </div>
        </div>
      </footer>
    </main>
  )
}

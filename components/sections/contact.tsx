'use client'
import { useState } from 'react'
import { MoveRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Reveal } from '@/components/reveal'

export function ContactSection() {
  const [contact, setContact] = useState<string | null>(null)

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setContact('sending')
    
    const form = e.target as HTMLFormElement
    const fd = new FormData(form)
    
    // Web3Forms Integration
    fd.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "")
    
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: fd
      })
      const data = await res.json()
      
      if (data.success) {
        setContact('sent')
        form.reset()
      } else {
        console.error("Web3Forms Error:", data)
        setContact('error')
      }
    } catch (err) { 
      console.error("Fetch Error:", err)
      setContact('error') 
    }
  }

  return (
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
            <a href="mailto:itskaranpratapsingh@gmail.com" className="block font-serif text-2xl sm:text-3xl mt-2 link-underline break-all">
              itskaranpratapsingh@gmail.com
            </a>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Elsewhere</p>
            <ul className="mt-3 space-y-4">
              <li>
                <a href="https://github.com/SypherKx" target="_blank" rel="noopener noreferrer" className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line/50 pb-2">
                  <span className="font-serif text-2xl group-hover:text-accent transition-colors shrink-0">GitHub</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute truncate max-w-full text-right">github.com/SypherKx ↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/karan730" target="_blank" rel="noopener noreferrer" className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line/50 pb-2">
                  <span className="font-serif text-2xl group-hover:text-accent transition-colors shrink-0">LinkedIn</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute truncate max-w-full text-right">linkedin.com/in/karan730 ↗</span>
                </a>
              </li>
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line/50 pb-2">
                  <span className="font-serif text-2xl group-hover:text-accent transition-colors shrink-0">Resume</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute truncate max-w-full text-right">Download PDF ↗</span>
                </a>
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-t border-line pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">Status</p>
              <p className="mt-2 text-lg flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                Open to full-time roles & high-impact internships
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
            <Textarea name="message" required rows={6} placeholder="Tell me about your project, idea or opportunity - the more specific the better."
              className="mt-2 bg-transparent border-x-0 border-t-0 border-b border-line rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent text-lg resize-none" />
          </Reveal>
          <Reveal delay={0.1}>
            <Button type="submit" disabled={contact === 'sending'}
              className="group rounded-none bg-ink text-paper hover:bg-accent transition-colors px-8 py-6 text-base font-medium">
              {contact === 'sending' ? 'Sending …' : contact === 'sent' ? 'Sent successfully' : contact === 'error' ? 'Error - try again' : 'Send the note'}
              <MoveRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </Reveal>
        </form>
      </div>
    </section>
  )
}

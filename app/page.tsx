'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import { NAV } from '@/lib/data'
import { Cursor } from '@/components/cursor'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/sections/hero'
import { MarqueeSection } from '@/components/sections/marquee'
import { WorkSection } from '@/components/sections/work'
import { AboutSection } from '@/components/sections/about'
import { SkillsSection } from '@/components/sections/skills'
import { CertsSection } from '@/components/sections/certs'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  // Setup smooth scroll (Lenis)
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, lerp: 0.08 })
    function raf(t: number) { lenis.raf(t); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  // Keyboard shortcut navigation (keys 1-5 for sections)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      const num = parseInt(e.key);
      if (!isNaN(num) && num > 0 && num <= NAV.length) {
        const sectionId = NAV[num - 1].toLowerCase();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Cursor />
      <div className="grain" />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <WorkSection />
      <AboutSection />
      <SkillsSection />
      <CertsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

'use client'
import { useEffect, useState } from 'react'
import { NAV } from '@/lib/data'
import { SpotifyStatus } from '@/components/spotify-status'
import { MobileMenu } from '@/components/mobile-menu'

export function Navbar() {
  const [time, setTime] = useState('')

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

  return (
    <div className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur-md">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 h-14 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.16em] text-ink-mute">
        
        {/* Left Side */}
        <div className="flex items-center gap-6 sm:gap-8 flex-1">
          <a href="#index" className="font-bold text-ink hover:text-accent transition-colors tracking-[0.2em] text-[12px] group shrink-0">
            KARAN<span className="text-accent group-hover:text-ink transition-colors">.</span>
          </a>
          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <span>Kanpur, IN</span>
            <span className="hidden xl:inline">{time}</span>
          </div>
        </div>
        
        {/* Center (Desktop Nav) */}
        <nav className="hidden sm:flex items-center justify-center gap-6 shrink-0">
          {NAV.map((n, i) => (
            <a key={n} href={`#${n.toLowerCase()}`} className="link-underline hover:text-ink whitespace-nowrap">
              <span className="text-accent mr-1">{String(i + 1).padStart(2, '0')}</span>{n}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center justify-end gap-4 sm:gap-6 flex-1">
          <div className="scale-90 sm:scale-100 origin-right shrink-0">
            <SpotifyStatus />
          </div>

          {/* Mobile Nav Trigger */}
          <div className="sm:hidden flex items-center shrink-0">
            <MobileMenu />
          </div>
        </div>

      </div>
    </div>
  )
}

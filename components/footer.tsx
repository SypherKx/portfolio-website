import React from 'react'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-10">
        <div className="max-w-xl">
          <p className="font-serif text-3xl sm:text-5xl italic leading-tight">
            Built with data, design <span className="text-accent">&amp;</span> curiosity.
          </p>
        </div>
        <div className="sm:text-right font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute flex flex-col gap-2">
          <p>© {new Date().getFullYear()} Karan Pratap Singh</p>
          <a href="#index" className="inline-flex items-center sm:justify-end gap-1 link-underline normal-case tracking-normal text-ink">
            Index ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

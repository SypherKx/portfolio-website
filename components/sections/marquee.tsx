import React from 'react'

export function MarqueeSection() {
  return (
    <div className="border-y border-line py-5 overflow-hidden bg-bg2">
      <div className="flex w-max marquee gap-12 whitespace-nowrap font-serif text-3xl sm:text-5xl italic">
        {[...Array(3)].map((_, k) => (
          <div key={k} className="flex items-center gap-12">
            {['Data Analytics', '·', 'Machine Learning', '·', 'Computer Vision', '·', 'AI Workflows', '·', 'Scalable Systems', '·'].map((w, i) => (
              <span key={i} className={i % 2 === 1 ? 'text-accent' : 'text-ink'}>{w}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

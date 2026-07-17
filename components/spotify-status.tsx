'use client'
import { motion } from 'framer-motion'

export function SpotifyStatus() {
  return (
    <a 
      href="https://open.spotify.com/user/31aqx6n2ml7xm6vnsijv4275fywm?si=BHoHk2cmQaWy9qgfyiemPg" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-3 group cursor-pointer"
      data-cursor="hover"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-accent/10 rounded-full blur-md group-hover:bg-accent/20 transition-colors animate-pulse" />
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-ink-mute group-hover:fill-accent relative z-10 transition-colors" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.508 17.302c-.216.354-.672.468-1.026.252-2.856-1.746-6.456-2.142-10.704-1.17-.408.096-.816-.162-.906-.57-.096-.408.162-.816.57-.906 4.638-1.062 8.628-.606 11.808 1.338.354.216.468.672.258 1.056zm1.47-3.258c-.276.444-.858.588-1.302.312-3.264-2.004-8.244-2.586-12.108-1.41-.504.156-1.038-.138-1.194-.642-.156-.504.138-1.038.642-1.194 4.416-1.338 9.9-1.686 13.662.63.45.276.588.858.3 1.308zm.138-3.39c-3.912-2.322-10.362-2.538-14.124-1.398-.6.18-1.242-.162-1.422-.762-.18-.6.162-1.242.762-1.422 4.314-1.308 11.448-1.05 15.96 1.632.54.324.72.1.396 1.542-.324.54-1.038.72-1.572.408z"/>
        </svg>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-ink font-bold text-[10px] tracking-widest uppercase group-hover:text-accent transition-colors">Spotify</span>
          <div className="flex gap-[2px] items-end h-2">
            {[0.4, 0.7, 0.5, 0.9].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: ["20%", "100%", "40%", "80%", "20%"] }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
                className="w-[1.5px] bg-accent"
              />
            ))}
          </div>
        </div>
        <span className="text-[9px] text-ink-mute lowercase tracking-normal leading-none group-hover:text-ink transition-colors">Connected</span>
      </div>
    </a>
  )
}

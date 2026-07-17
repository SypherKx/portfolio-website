/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: { center: true, padding: '2rem', screens: { '2xl': '1400px' } },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Fraunces', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      colors: {
        bg: 'hsl(var(--bg) / <alpha-value>)',
        bg2: 'hsl(var(--bg-2) / <alpha-value>)',
        ink: 'hsl(var(--ink) / <alpha-value>)',
        'ink-soft': 'hsl(var(--ink-soft) / <alpha-value>)',
        'ink-mute': 'hsl(var(--ink-mute) / <alpha-value>)',
        line: 'hsl(var(--line) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        paper: 'hsl(var(--paper) / <alpha-value>)',
        background: 'hsl(var(--bg) / <alpha-value>)',
        foreground: 'hsl(var(--ink) / <alpha-value>)',
        border: 'hsl(var(--line) / <alpha-value>)',
        input: 'hsl(var(--line) / <alpha-value>)',
        ring: 'hsl(var(--accent) / <alpha-value>)',
        primary: { DEFAULT: 'hsl(var(--ink) / <alpha-value>)', foreground: 'hsl(var(--paper) / <alpha-value>)' },
        secondary: { DEFAULT: 'hsl(var(--bg-2) / <alpha-value>)', foreground: 'hsl(var(--ink) / <alpha-value>)' },
        muted: { DEFAULT: 'hsl(var(--bg-2) / <alpha-value>)', foreground: 'hsl(var(--ink-mute) / <alpha-value>)' },
        destructive: { DEFAULT: 'hsl(0 84% 50% / <alpha-value>)', foreground: 'hsl(var(--paper) / <alpha-value>)' },
        card: { DEFAULT: 'hsl(var(--paper) / <alpha-value>)', foreground: 'hsl(var(--ink) / <alpha-value>)' },
        popover: { DEFAULT: 'hsl(var(--paper) / <alpha-value>)', foreground: 'hsl(var(--ink) / <alpha-value>)' }
      },
      borderRadius: { lg: '0.5rem', md: '0.375rem', sm: '0.25rem' }
    }
  },
  plugins: [require('tailwindcss-animate')]
}

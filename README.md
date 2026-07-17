# Karan Pratap Singh — Editorial & Swiss-Modernism Portfolio

A premium, high-performance typographic portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Framer Motion**, and **Lenis smooth scrolling**. 

This portfolio adopts a **modular, component-driven architecture** separating the structural code from static assets and section components to maximize readability, maintainability, and load times.

---

## 🚀 Key Features & Performance Optimizations

- **Modular Architecture**: Replaced the monolithic layout with self-contained, isolated components under `components/sections/` and `components/ui/`.
- **Localized State (Optimized Re-renders)**:
  - Time clock updates are localized to the `<Navbar />`.
  - Animating hero titles are localized to the `<HeroSection />`.
  - Form submission status is localized to the `<ContactSection />`.
  - *Result*: Prevents child state changes from re-rendering the entire page, ensuring 60fps animations.
- **Micro-Animations & Motion**: Smooth viewport reveals powered by Framer Motion and custom spring physics.
- **Custom Liquid Cursor**: Fixed custom circular cursor follower that dynamically morphs and scales on hover over interactives (`a`, `button`, input fields).
- **Web3Forms Correspondence**: Integrated contact form submissions directly with Web3Forms (no database overhead required for email delivery).
- **Keyboard Navigation**: Pressing number keys `1`–`5` instantly scrolls to the corresponding section smoothly.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with customized, fluid HSL design tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [Lenis](https://lenis.darkroom.engineering/) for smooth momentum scrolling
- **Icons**: [Lucide React](https://lucide.dev/) (including contextual repo logos)
- **Primitives**: shadcn/ui (Button, Input, Textarea)

---

## 📁 Repository Structure

```
portfolio-website-main/
├── app/
│   ├── globals.css          # Design tokens, fonts, custom styling & animations
│   ├── layout.tsx           # Main Next.js HTML structure & analytics injection
│   └── page.tsx             # Root page orchestrator (Lenis init, hotkeys, page structure)
│
├── components/
│   ├── cursor.tsx           # Custom liquid cursor tracking client-side mouse
│   ├── footer.tsx           # Page footer structure
│   ├── mobile-menu.tsx      # Backdrop-blur portal menu for smaller screens
│   ├── navbar.tsx           # Sticky top header, desktop navigation & real-time clock
│   ├── reveal.tsx           # Spring-reveal viewport observer wrapping components
│   ├── spotify-status.tsx   # Active listener widget with custom animated equalizer
│   │
│   ├── ui/                  # Component design primitives
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   │
│   └── sections/            # Core portfolio page sections
│       ├── about.tsx        # Bio introduction & education/work experience timeline
│       ├── certs.tsx        # Credentials & professional certifications table
│       ├── contact.tsx      # Contact form, Web3Forms integration, validation & feedbacks
│       ├── hero.tsx         # Typographic header and animated skills typewriter loop
│       ├── marquee.tsx      # Horizontal marquee banner
│       ├── skills.tsx       # Interactive stack and developer toolbox grid
│       └── work.tsx         # Selected projects grid (dynamically prepending GitHub logos)
│
├── lib/
│   ├── data.ts              # Clean static datasets (NAV labels, projects metadata, certs)
│   └── utils.ts             # Tailwind class merging utility (cn)
```

---

## 💻 Local Development

1. **Clone and Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY="your-access-key-here"
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it.

4. **Production Build**:
   ```bash
   npm run build
   ```

---

Built with data, design & curiosity.

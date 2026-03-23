# Humble House, LLC — Website

Professional government contracting website for Humble House, LLC — a Service-Disabled Veteran-Owned Small Business (SDVOSB, pending) based in Tampa, FL.

## Tech Stack

- **Framework:** Next.js 16.2.1 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion v12
- **Fonts:** Playfair Display (headings) + Inter (body) via `next/font/google`
- **Language:** TypeScript

## Getting Started

```bash
cd humblehouse
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
humblehouse/
├── app/
│   ├── layout.tsx          # Root layout — fonts, Navbar, Footer
│   ├── globals.css         # Tailwind v4 theme + custom CSS
│   ├── page.tsx            # Home (/)
│   ├── about/page.tsx      # About (/about)
│   ├── services/page.tsx   # Services (/services)
│   ├── experience/page.tsx # Past Performance (/experience)
│   └── contact/page.tsx    # Contact (/contact)
└── components/
    ├── Navbar.tsx           # Sticky nav with mobile hamburger (client)
    ├── Footer.tsx           # Footer with entity info
    ├── FadeUp.tsx           # Framer Motion scroll animation wrapper (client)
    └── ContactForm.tsx      # Contact form with state (client)
```

## Brand Colors

| Token         | Hex       | Usage                            |
|---------------|-----------|----------------------------------|
| `copper`      | `#C07830` | CTAs, accents, borders, hover    |
| `copper-light`| `#D4924A` | Hover state for copper buttons   |
| `navy`        | `#1B2A4A` | Primary dark surfaces, headers   |
| `navy-dark`   | `#111C33` | Deeper navy for mobile menu      |
| `cream`       | `#FAF7F2` | Main page background             |
| `charcoal`    | `#2D2D2D` | Body text                        |

## Key Notes

- All pages are **static Server Components** — no `'use client'` on page files.
- Interactive elements (Navbar, ContactForm, FadeUp animations) are isolated client components.
- Hover effects use `.btn-copper` and `.btn-copper-outline` CSS classes (defined in `globals.css`) — no JS event handlers needed on server pages.
- The contact form currently simulates a submission (800ms delay). Wire up to an API route or third-party service (Formspree, Resend, etc.) as needed.
- Add your capability statement PDF at `public/HumbleHouse_CapabilityStatement.pdf` to activate the download button on the home page.

## Build

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # ESLint
```

## Entity Information

| Field  | Value          |
|--------|----------------|
| CAGE   | 10CJ5          |
| UEI    | SQAFH9D15NR1   |
| SDVOSB | Pending        |
| 8(a)   | Pending        |

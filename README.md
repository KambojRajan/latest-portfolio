# Rajan Kamboj — Portfolio

A high-end, modern developer portfolio built with Next.js 14, TypeScript, and Tailwind CSS.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (ready to extend)
- **Fonts**: DM Serif Display · Inter · JetBrains Mono (via Google Fonts)
- **Images**: Next.js Image (Unsplash CDN)

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
rajan-portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed navigation with scroll-aware styling
│   │   ├── SectionWrapper.tsx  # Scroll-triggered fade-in wrapper
│   │   └── Footer.tsx          # Footer with hidden easter egg (click the dot 5×)
│   ├── sections/
│   │   ├── Hero.tsx            # Typed animation, CTA buttons
│   │   ├── About.tsx           # Bio + stat cards + hobby cards
│   │   ├── Experience.tsx      # Timeline with metrics
│   │   ├── Projects.tsx        # Interactive project cards
│   │   ├── Skills.tsx          # 4-column skill grid + certs
│   │   ├── Creative.tsx        # Beyond Code — hobbies + gallery
│   │   └── Contact.tsx         # Email CTA + social links
│   ├── globals.css             # Tailwind base + custom utilities
│   ├── layout.tsx              # Root layout with fonts + metadata
│   └── page.tsx                # Page composition
├── public/                     # Static assets (add resume PDF here)
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Customisation

### Add Your Resume
Place your resume PDF at `public/RajanKamboj_Resume.pdf` — the navbar Resume link will work automatically.

### Update Content
All content is co-located with each section component in `app/sections/`. Edit the data arrays at the top of each file.

### Color Palette
Defined in `tailwind.config.ts`:
- **Gold** (`#C49A5A`) — primary accent, timelines, tags
- **Indigo** (`#6366F1`) — secondary accent, hover effects
- **Teal** (`#2DD4BF`) — typed text, meta labels
- **Slate** (`#0C0C0E` → `#F8F8F9`) — backgrounds and text scale

### Add Real Images
Replace Unsplash URLs in `app/sections/Creative.tsx` with your own images placed in `/public`.

### Easter Egg
Click the tiny dot in the footer 5 times to reveal it.

## SEO
Metadata is configured in `app/layout.tsx`. Update the `metadata` export for your domain and Open Graph image.

## Deployment

One-command deploy to Vercel:

```bash
npx vercel
```

Or connect the GitHub repo to [vercel.com](https://vercel.com) for automatic deploys.

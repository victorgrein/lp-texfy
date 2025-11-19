# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **Texfy**, a modern landing page for a textile industry AI startup specializing in PCP (Production Planning and Control) optimization. The project is built with Next.js 15, TypeScript, and is optimized for serverless deployment on Vercel.

## Development Commands

### Core Development
```bash
npm run dev          # Start Next.js development server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Architecture & Key Design Decisions

### Serverless Architecture (Vercel-Ready)
- **Standard Next.js 15** with App Router
- **No custom server** - uses Next.js built-in server
- **Serverless functions** for API routes
- **Static generation** where possible
- **Optimized for Vercel** deployment with `vercel.json` configuration

### Technology Stack
- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 with shadcn/ui components
- **Email:** Nodemailer with Gmail SMTP (serverless-compatible)
- **Forms:** Plain React state management (useState)
- **Animations:** Framer Motion + custom CSS animations
- **Deployment:** Vercel (configured for São Paulo region - gru1)

### Application Structure

```
src/
├── app/
│   ├── api/
│   │   ├── waitlist/route.ts    # Main form submission endpoint (sends emails)
│   │   └── health/route.ts      # Health check endpoint
│   ├── layout.tsx               # Root layout with Geist fonts
│   ├── page.tsx                 # Landing page (client component)
│   └── globals.css              # Global styles with custom animations
├── components/ui/               # shadcn/ui components (50+ components)
├── hooks/
│   ├── use-intersection-observer.ts  # Scroll animations
│   ├── use-mobile.ts            # Mobile detection
│   └── use-toast.ts             # Toast notifications
└── lib/
    └── utils.ts                 # Utility functions (cn, etc.)
```

### Email System Architecture
- **Endpoint:** `/api/waitlist` (POST) - Serverless function
- **Provider:** Gmail SMTP (smtp.gmail.com:587)
- **Credentials:** Stored in `.env` (EMAIL_USER, EMAIL_PASS)
- **Important:** Uses Gmail App Password (not regular password)
- **Recipient:** All waitlist emails go to `contatovhg@hotmail.com`
- **Template:** Professional HTML email with gradient design
- **Validation:** Both client-side and server-side validation
- **Serverless-Compatible:** Works perfectly in Vercel serverless functions

**Email Configuration:** See `DEPLOY.md` for detailed Gmail setup instructions.

### Frontend Architecture
- **Single-page landing** with animated sections
- **Client-side rendering** ("use client" directive on page.tsx)
- **Scroll animations** using Intersection Observer API
- **Form handling** with controlled components (useState)
- **Responsive design** with mobile-first approach
- **No external data fetching** - fully self-contained

### Key Features
1. **Waitlist Form:** Captures leads with nome, email, cargo, empresa, desafio
2. **Email Automation:** Automatically sends formatted emails via Nodemailer
3. **Animations:** Custom CSS keyframes + Intersection Observer for scroll effects
4. **Performance Optimized:** Static generation where possible, minimal runtime dependencies

### Design System
- **Minimalist aesthetic** with neutral color palette (grays, black, white)
- **Glassmorphism effects** in CTA section
- **Animated backgrounds** with pulsing gradient orbs
- **Smooth transitions** (0.8s) and hover effects
- **Border radius:** 12px standard
- **Fonts:** Geist Sans and Geist Mono

## Important Configuration Notes

### Next.js Config (`next.config.ts`)
- **Clean configuration** with minimal settings
- React Strict Mode **enabled** for better development experience
- No custom webpack configurations
- Standard Next.js optimizations enabled

### Environment Variables
Required in `.env` (and Vercel dashboard):
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

**Note:** No database required. All leads are sent via email only.

### Vercel Configuration (`vercel.json`)
- **Region:** São Paulo (gru1) for optimal Brazilian latency
- **Framework:** Next.js (auto-detected)
- **Build Command:** `next build`
- **Install Command:** `npm install`

### Development Workflow
1. Run `npm run dev` to start Next.js development server
2. Visit `http://localhost:3000`
3. Edit files - Next.js Hot Module Replacement (HMR) provides instant updates
4. Test form submission with real email credentials

## Common Patterns

### Adding New API Routes
Create files in `src/app/api/[route]/route.ts` following Next.js App Router conventions.
All API routes automatically become serverless functions on Vercel.

### Adding UI Components
This project uses shadcn/ui. Components are installed in `src/components/ui/`.
Configuration in `components.json` with import alias `@/components/ui`.

To add new components:
```bash
npx shadcn@latest add [component-name]
```

### Custom Animations
Custom CSS animations are defined in `src/app/globals.css` including:
- `fade-in-up`: Elements appear from bottom
- `gradient`: Animated gradients
- `float`: Floating effect
- `pulse`: Pulsing effect
- Animation delay utilities: `animation-delay-2000`, `animation-delay-4000`

## Testing the Application

### Local Testing
1. Start dev server: `npm run dev`
2. Visit `http://localhost:3000`
3. Test form submission to verify email sending
4. Check browser console for any errors
5. Test responsive design on different screen sizes

### Production Build Testing
```bash
npm run build
npm run start
```
Visit `http://localhost:3000` to test production build locally.

## Deployment to Vercel

### Initial Setup
1. Push code to GitHub repository
2. Import project in Vercel dashboard
3. Configure environment variables:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail App Password
4. Deploy

### Continuous Deployment
- Every push to `main` branch triggers automatic deployment
- Preview deployments created for pull requests
- Rollback available in Vercel dashboard

### Post-Deployment
1. Visit deployed URL
2. Test waitlist form submission
3. Verify email delivery to `contatovhg@hotmail.com`
4. Check Vercel logs for any errors

See `DEPLOY.md` for detailed deployment instructions and troubleshooting.

## Metadata & SEO
Current layout.tsx has Z.ai branding in metadata. This should likely be updated to Texfy branding for production deployment.

## Architecture History

**Previous Architecture (Removed):**
This project originally used a custom Node.js server with Socket.IO and Prisma/SQLite database. These were removed because:
- They were configured but never used by the application
- Custom servers don't work with Vercel's serverless architecture
- SQLite file-based database is incompatible with serverless ephemeral filesystems
- The only real functionality is landing page + email form (both serverless-compatible)

**Current Architecture (Clean & Serverless):**
- Standard Next.js 15 with App Router
- API routes as serverless functions
- No database (email-only lead capture)
- Fully compatible with Vercel and other serverless platforms

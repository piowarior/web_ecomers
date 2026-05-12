# CLAUDE.md

# NEXORA

## All-in-One Digital Service Ecosystem

Nexora is a modern digital ecosystem platform that combines a service marketplace and an official digital rental store into one integrated platform.

The platform focuses on helping users:
- find digital services
- hire freelancers
- order custom digital projects
- rent digital products/services
- manage projects through a modern dashboard system

The overall platform combines:
- Fiverr style marketplace
- Upwork style project requests
- modern SaaS dashboard experience
- startup-style UI/UX
- AI-powered digital services

---

# MAIN CONCEPT

Nexora has 2 main systems:

## 1. Marketplace Ecosystem

Marketplace system where freelancers/sellers can:
- create service listings
- upload portfolios
- offer digital services
- apply to custom client projects

Categories:
- Web Development
- AI Automation
- Design Services

---

## 2. Official Digital Rental Store

Official platform-owned digital rental service.

This section is NOT marketplace-based.

Only the platform/admin can manage digital rental products.

Examples:
- Canva Pro
- Hosting
- VPS
- Premium AI Tools
- Premium Templates
- Domain Setup
- Game Server Rental

---

# PROJECT GOALS

The purpose of this platform is:

- create a modern startup-level digital ecosystem
- provide professional digital services
- connect clients and freelancers
- simplify digital project management
- provide a centralized dashboard system
- build a scalable SaaS-ready architecture
- build a portfolio-level fullstack project

---

# TARGET USERS

## Client / Buyer

Can:
- browse services
- order services
- create custom projects
- rent digital products
- track project progress
- manage subscriptions

---

## Freelancer / Seller

Can:
- create service listings
- manage portfolio
- apply project proposals
- update project progress
- communicate with clients

Cannot:
- sell digital rental products

---

## Admin / Platform

Can:
- manage all users
- manage marketplace services
- manage official rental products
- manage transactions
- monitor analytics
- moderate platform activity

---

# DESIGN SYSTEM

## Main Theme

The platform uses:

# Soft Neubrutalism + Cream Modern SaaS

Design inspiration:
- Linear
- Vercel
- Stripe
- Framer
- Raycast

---

# VISUAL STYLE

## Color Palette

Primary:
- Cream
- Soft Beige
- Warm White
- Soft Black
- Muted Orange
- Muted Brown

Accent:
- Soft Blue
- Soft Purple
- Light Peach

Avoid:
- overly saturated colors
- neon cyberpunk colors
- harsh contrast
- overly glassmorphism-heavy design

---

# UI STYLE

The UI should feel:
- modern
- soft
- clean
- premium
- startup-like
- smooth
- elegant
- highly responsive

---

# COMPONENT STYLE

Use:
- rounded corners
- soft shadows
- subtle borders
- layered cards
- smooth hover animations
- clean spacing
- bold typography hierarchy

Avoid:
- messy layouts
- overcomplicated decorations
- inconsistent spacing
- huge paragraphs
- generic bootstrap-like design

---

# ANIMATION SYSTEM

Use:
- Framer Motion

Animation style should feel:
- modern
- immersive
- dynamic
- premium
- smooth
- interactive
- startup-level

The platform is allowed to use:
- advanced motion layouts
- floating animations
- animated backgrounds
- layered motion effects
- animated gradients
- shape animations
- animated glow effects
- smooth parallax
- mouse reactive effects
- animated dashboard transitions
- animated cards
- animated hero sections
- animated typography
- cinematic section reveals
- scroll-based animations
- stagger animations
- smooth hover interactions

Animations should:
- remain performant
- feel fluid
- avoid lag
- avoid janky motion
- maintain readability
- preserve UX clarity

Preferred feeling:
- modern startup website
- interactive SaaS experience
- futuristic but clean
- visually impressive
- premium motion design

Avoid:
- laggy animations
- extremely chaotic movement
- poor mobile performance
- flashing effects
- overwhelming motion without hierarchy


---

# TECH STACK

## Frontend

- Next.js 16 App Router
- React 19
- TypeScript
- TailwindCSS
- shadcn/ui
- Framer Motion
- Lucide React

---

## Backend

- Next.js Server Actions
- Route Handlers
- Prisma ORM
- PostgreSQL

---

## Authentication

Preferred:
- Clerk

Alternative:
- Auth.js

---

## Database

- PostgreSQL

Development:
- local PostgreSQL

Production:
- Neon PostgreSQL
or
- Supabase PostgreSQL

---

## File Upload

- UploadThing

---

## State Management

Use:
- Zustand

Avoid:
- Redux unless truly necessary

---

## Form Handling

- React Hook Form
- Zod validation

---

## Payment Gateway

Indonesia:
- Midtrans

Global:
- Stripe

---

## Hosting

Frontend:
- Vercel

Database:
- Neon
or
- Supabase

File Storage:
- UploadThing
or
- Cloudinary

---

# SECURITY

Must implement:
- input validation
- zod validation
- server-side validation
- protected routes
- role-based access
- environment variable protection
- secure auth middleware

Avoid:
- exposing API keys
- exposing database secrets
- trusting frontend validation only
- storing sensitive data in client

---

# MOTION & INTERACTION SYSTEM

This project uses a cinematic SaaS motion system.

The goal is:
- make UI feel alive
- not heavy or laggy
- smooth and premium like Stripe / Framer / Linear

---

# MOTION PRINCIPLES

All animations must follow:

DO:
- opacity fade
- transform (translate, scale)
- stagger animation
- soft easing (easeOut / easeInOut)
- subtle hover effects

DO NOT:
- animate top / left
- heavy blur animations
- layout shifting animations
- excessive parallax layers
- animation on every text element

---

# PERFORMANCE RULES FOR ANIMATION

Must use:
- transform: translate3d()
- opacity transitions
- GPU-friendly animations

Avoid:
- layout reflow animations
- heavy shadow animation loops
- large blur transitions

---

# FRAMER MOTION USAGE RULE

Framer Motion should ONLY be used for:
- Hero section
- Cards
- Page transitions
- Key UI interactions

DO NOT:
- wrap every component with motion.div
- animate static text blocks
- animate entire pages unnecessarily

---

# CURSOR SYSTEM (OPTIONAL BUT RECOMMENDED)

If implemented:

Cursor behavior:
- soft trailing cursor
- magnetic hover on buttons
- glow effect on interactive elements
- focus lens effect on cards

---

# BACKGROUND MOTION SYSTEM

Allowed:
- slow gradient movement
- floating blur shapes
- subtle grid animation

NOT allowed:
- fast moving backgrounds
- distracting motion layers

---

# ANIMATION TOOLS STACK

Recommended libraries:

- Framer Motion (primary)
- GSAP (only for advanced scroll animation)
- Lenis (smooth scrolling)
- Motion One (lightweight alternative)

Use ONLY when needed:
- GSAP → cinematic scroll effects
- Lenis → smooth scroll experience
- Framer Motion → UI interactions

---

# ANIMATION ANTI-PATTERN

DO NOT:
- overuse motion everywhere
- combine GSAP + Framer randomly
- create laggy UI interactions
- animate background excessively

---

# UI FEEL TARGET

The UI must feel:

- soft
- cinematic
- premium SaaS
- responsive
- alive but not distracting

# CODE ARCHITECTURE

Use:

# Feature-Based Architecture

NOT fully layered clean architecture.

Reason:
- more scalable for frontend-heavy SaaS
- easier maintenance
- easier team scaling
- clearer feature separation

---

# FOLDER STRUCTURE

```txt
src/
│
├── app/
├── features/
├── components/
├── lib/
├── hooks/
├── services/
├── stores/
├── providers/
├── types/
├── config/
├── styles/
├── utils/
├── constants/
├── middleware/
└── prisma/
```

---

# FOLDER EXPLANATION

## app/

Contains:
- routing
- layouts
- pages
- route groups
- dashboard routes

Use:
- App Router conventions

Do NOT place:
- huge business logic here

---

## features/

Main business feature modules.

Example:

```txt
features/
├── auth/
├── marketplace/
├── projects/
├── rental/
├── dashboard/
├── profile/
├── payment/
└── ai-services/
```

Each feature contains:
- components
- actions
- hooks
- schemas
- services
- types

This is the CORE architecture.

---

## components/

Global reusable UI components.

Example:
- navbar
- sidebar
- buttons
- modal
- cards
- typography
- loaders

Avoid putting business-specific logic here.

---

## lib/

Core helper libraries.

Example:
- prisma client
- auth config
- upload config
- utility setup

---

## hooks/

Reusable custom hooks.

Example:
- use-mobile
- use-auth
- use-sidebar
- use-debounce

---

## services/

External integrations.

Example:
- payment gateway
- AI API
- email service
- upload service

---

## stores/

Global Zustand stores.

Example:
- auth store
- modal store
- sidebar state

---

## providers/

React providers.

Example:
- theme provider
- auth provider
- query provider

---

## types/

Global TypeScript types.

---

## config/

Static configs.

Example:
- navigation
- dashboard menu
- feature flags

---

## styles/

Global styles.

Example:
- globals.css
- animations.css

---

## utils/

Pure utility functions.

---

## constants/

Static constants.

Example:
- roles
- statuses
- categories

---

# CODING STYLE

Use:

# Clean Modular Code

Rules:
- small reusable components
- avoid giant files
- avoid deeply nested logic
- split concerns properly
- highly readable code
- meaningful naming

---

# COMPONENT RULES

Prefer:
- server components

Use client components only when needed:
- state
- animation
- browser APIs

---

# FILE SIZE RULES

Avoid:
- components over 300 lines
- giant pages
- mixed logic

Split:
- UI
- actions
- validation
- hooks

properly.

---

# TYPESCRIPT RULES

Use:
- strict typing
- proper interfaces
- reusable types

Avoid:
- any
- unknown unsafe typing

---

# API RULES

Prefer:
- server actions

Use API routes only when:
- external API needed
- webhook needed
- upload needed

---

# DATABASE RULES

Use:
- normalized schema
- proper relationships
- enums for statuses

Avoid:
- duplicated fields
- unstructured database

---

# PERFORMANCE RULES

Must:
- lazy load heavy components
- optimize images
- use caching where needed
- minimize client rendering

Avoid:
- unnecessary re-renders
- overusing useEffect
- large client bundles

---

# ACCESSIBILITY

Must:
- semantic HTML
- keyboard navigation
- proper aria labels
- accessible forms

---

# SEO

Must:
- metadata
- OpenGraph
- proper headings
- optimized titles

---

# TESTING

Current phase:
- basic testing required

Use:
- manual testing first

Later:
- unit testing
- integration testing

Recommended:
- Vitest
- Playwright

---

# DEVELOPMENT RULES

Before implementing:
- understand feature goal
- analyze architecture impact
- avoid random implementation

If instructions are ambiguous:
- ASK FOR CONFIRMATION
- ASK FOR EXAMPLES
- ASK FOR CLARIFICATION

DO NOT:
- assume business logic
- invent missing flows
- create fake features

---

# AI ASSISTANT INSTRUCTIONS

When generating code:

- always read this file first
- maintain consistency
- preserve architecture
- avoid breaking existing features
- do not create unnecessary complexity

If prompt is unclear:
- ask follow-up questions
- request flow clarification
- request UI examples
- request business logic confirmation

Reduce risk of:
- architecture mismatch
- inconsistent UI
- broken database flow
- feature duplication

---

# FEATURES STATUS

## CURRENTLY PLANNED

- Authentication
- Marketplace service listing
- Freelancer profiles
- Portfolio system
- Official rental store
- Order management
- Dashboard system
- Role system
- Project tracking
- Payment integration

---

## FUTURE FEATURES

- Realtime chat
- Notifications
- AI recommendation
- Subscription plans
- Analytics dashboard
- Review & rating system

---

# THINGS THAT MUST NOT BE DONE

DO NOT:
- use messy architecture
- create giant components
- duplicate logic
- hardcode sensitive data
- use inline styles excessively
- create inconsistent spacing
- use random colors
- use poor naming
- ignore TypeScript errors
- skip validation
- overuse client components

---

# UI RULES

Avoid:
- ugly default UI
- bootstrap-like appearance
- inconsistent radius
- inconsistent typography
- poor mobile responsiveness

Must:
- mobile-first
- premium feel
- smooth interactions
- clean dashboard layout

---

# RESPONSIVENESS

Must support:
- mobile
- tablet
- desktop
- ultrawide

---

# GIT RULES

Use:
- clean commits
- feature-based commits

Example:
- feat(auth): add login page
- fix(dashboard): fix sidebar mobile issue

---

# FINAL PHILOSOPHY

Nexora should feel like:
- a real startup
- a premium SaaS platform
- a modern digital ecosystem
- highly scalable
- visually polished
- developer-friendly
- maintainable long-term

The platform must prioritize:
- clarity
- scalability
- maintainability
- modern UX
- clean architecture
- premium UI quality
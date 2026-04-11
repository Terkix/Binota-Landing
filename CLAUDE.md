# Moneta Landing

A landing page for the Moneta Protocol - a stablecoin experience built on Monad. Features the UNO stablecoin and NETA governance token.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 15.5.5 (App Router, Turbopack) |
| UI | React 19.1.0, TypeScript 5.x |
| Styling | Tailwind CSS v4, PostCSS |
| Components | @base-ui-components/react (Accordion) |
| Linting | Biome 2.2.0 |
| Fonts | Geist (next/font), Kaypro (custom) |

## Commands

```bash
pnpm run dev      # Start dev server (Turbopack)
pnpm run build    # Production build
pnpm run start    # Start production server
pnpm run lint     # Run Biome linter
pnpm run format   # Format with Biome
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page - composes all sections
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── globals.css        # Global styles and CSS variables
│   └── styles.tsx         # Typography/button style exports
├── sections/              # Page sections (each is a component)
│   ├── Splash.tsx         # Hero section with shader effect
│   ├── Stats.tsx          # Metrics display (TVL, etc.)
│   ├── Uno.tsx            # UNO token showcase
│   ├── Features.tsx       # Features accordion
│   ├── Products.tsx       # EARN/COLLATERALS columns
│   ├── Governance.tsx     # Protocol features grid
│   ├── Distribution.tsx   # Token distribution with shader
│   └── Footer.tsx         # Navigation and social links
├── components/            # Reusable UI components
│   ├── MonButton.tsx      # Primary button component
│   ├── Stack.tsx          # Flex layout utility
│   ├── Accordion.tsx      # Features accordion (Base UI)
│   ├── BrandLogo.tsx      # Logo component
│   └── Shader*.tsx        # WebGL shader effects (5 variants)
└── styles/modules/        # Tailwind class constants
    ├── typography.ts      # Text styles
    ├── buttons.ts         # Button variants
    ├── card.ts            # Card styles
    ├── accordion.ts       # Accordion styles
    └── index.ts           # Barrel export
```

## Key Files

| Purpose | Location |
|---------|----------|
| Page composition | `src/app/page.tsx:10-24` |
| CSS variables (colors, fonts) | `src/app/globals.css` |
| Primary button | `src/components/MonButton.tsx` |
| Flex layout helper | `src/components/Stack.tsx` |
| Style constants | `src/styles/modules/*.ts` |

## Assets

```
public/assets/
├── img/           # SVG icons and PNG images
├── shaders/       # JSON shader definitions
├── font/          # Custom Kaypro font
└── cursors/       # Custom cursor assets
```

## Color Tokens

Defined in `src/app/globals.css` as CSS variables:
- Primary: `#ede61d` (yellow)
- Secondary: `#8a00c4` (purple)
- Background: `#000000` (black)

Use via Tailwind: `text-primary-200`, `bg-secondary-600`, etc.

## Path Aliases

```typescript
import MonButton from "@/components/MonButton";  // @/* = src/*
```

## Development Notes

- **No testing framework** - Tests not configured
- **Shader effects** - Use UnicornStudio library loaded from CDN
- **Client components** - Only Shader*.tsx files use `'use client'`
- **Metadata TODO** - `src/app/layout.tsx:8-9` has placeholder title/description

## Adding New Sections

1. Create component in `src/sections/NewSection.tsx`
2. Add to page composition in `src/app/page.tsx`
3. Use style constants from `src/styles/modules/` for consistency

## Adding New Components

1. Create in `src/components/ComponentName.tsx`
2. Define props type as `ComponentNameProps`
3. Use default export

---

## Additional Documentation

When working on specific areas, check these files:

| Topic | File |
|-------|------|
| Architectural patterns, conventions, styling approaches | `.claude/docs/architectural_patterns.md` |

# Claude Code Guide

Always use Context7 MCP when I need library/API documentation, code generation, setup or configuration steps without me having to explicitly ask.

## Workflow Rules

Always ask me any necessary questions and let me know if there is anything missing required to make any update/change work properly.

### Git Commit After Each File Change
When making changes to files, commit each file modification before proceeding to the next file:
1. After modifying a file, stage and commit the changes immediately
2. Use a descriptive commit title and comments explaining the changes
3. Print a clear message in the terminal highlighting the commit was created
4. Exception: Only skip this if explicitly told otherwise by the user

Example workflow:
- Edit `file1.ts` → commit with message → print confirmation
- Edit `file2.ts` → commit with message → print confirmation

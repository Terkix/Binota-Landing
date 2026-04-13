# Architectural Patterns

This document describes the recurring architectural patterns, design decisions, and conventions used across the Binota Landing codebase.

## Component Architecture

### Section-Based Page Composition
The landing page is built as a composition of self-contained section components:
- `src/app/page.tsx:10-24` - Composes all sections in order (Splash → Stats → Uno → Features → Products → Governance → Distribution → Footer)

### Client vs Server Components
- **Server Components (default)**: All sections and most components
- **Client Components**: Only interactive components requiring hooks use `'use client'`
  - `src/components/ShaderSplash.tsx:1`
  - `src/components/ShaderUno.tsx:1`
  - `src/components/ShaderDistribution.tsx:1`
  - `src/components/ShaderNOISE.tsx:1`
  - `src/components/ShaderEffect.tsx:1`

## State Management

### Local State Only
No global state management (Redux, Zustand, Context). All state is local via React hooks:
- `useState` for component state
- `useRef` for DOM references and mutable values
- `useEffect` for side effects and cleanup

Pattern example: `src/components/ShaderSplash.tsx:32-35`

## Styling Patterns

### Tailwind CSS Classes (Primary)
All components use Tailwind utility classes directly in JSX.

### Centralized Style Constants (Secondary)
Reusable Tailwind class strings exported as constants:

| Module | Location | Purpose |
|--------|----------|---------|
| `ButtonClasses` | `src/styles/modules/buttons.ts:2-14` | Button variants |
| `TypographyClasses` | `src/styles/modules/typography.ts:2-15` | Text styles |
| `CardStyles` | `src/styles/modules/card.ts:2-12` | Card components |
| `AccordionStyles` | `src/styles/modules/accordion.ts:2-19` | Accordion component |
| `NavigationStyles` | `src/styles/modules/NavigationStyles.tsx:2-11` | Navigation menus |

### Style Import Convention
Styles are imported with aliases for readability:
```typescript
import { ButtonClasses as ButtonStyles } from "../styles/modules/buttons";
import { TypographyClasses as TypeStyles } from "../styles/modules/typography";
```
Examples: `src/sections/Splash.tsx:6-7`, `src/components/MonButton.tsx:2`

### Container Pattern
Consistent max-width and padding across sections:
```typescript
className="container px-8 py-24 md:p-24 mx-0 sm:mx-12 lg:mx-24 max-w-[1440px]"
```
Example: `src/sections/Splash.tsx:14`

### Grid System
Responsive grid using Tailwind breakpoints:
- `src/sections/Stats.tsx:8` - 4/8/12 column responsive grid
- `src/sections/Governance.tsx:25` - 4/8 column grid

## Component Patterns

### Props Type Naming
Props types use `ComponentNameProps` suffix:
- `src/components/MonButton.tsx:4` - `type MonButtonProps`
- `src/components/Stack.tsx:3` - `type StackProps`

### Type Composition
Extending React HTML element types:
```typescript
type StackProps = React.HTMLAttributes<HTMLDivElement> & {
  direction?: "row" | "column";
  // ...
};
```
Example: `src/components/Stack.tsx:3-10`

### Exported Types
Shader components export their prop types for reuse:
- `src/components/ShaderEffect.tsx:5` - `export type FlowProps`
- `src/components/ShaderDistribution.tsx:5` - `export type StarFieldProps`

## Reusable Components

### MonButton
Branded button with consistent styling:
- Location: `src/components/MonButton.tsx:11-45`
- Usage: `src/sections/Splash.tsx:29`, `src/sections/Products.tsx:35,57`

### Stack
Flexible layout wrapper with direction, alignment, and spacing props:
- Location: `src/components/Stack.tsx:1-36`
- Usage: `src/sections/Products.tsx:11-16`

### Shader Components
WebGL shader effects using UnicornStudio library. All follow identical pattern:
1. Load external script with caching
2. Initialize shader with projectId/jsonFilePath
3. Cleanup on unmount

Pattern: `src/components/ShaderSplash.tsx:40-66` (initializeScript function)

## Import Patterns

### Path Aliases
Uses `@/*` alias for `src/*` imports:
```typescript
import MonButton from "@/components/MonButton";
```
Examples: `src/sections/Distribution.tsx:5`, `src/sections/Governance.tsx:5`

### Relative Imports for Styles
Style modules use relative paths:
```typescript
import { AccordionStyles } from "../styles/modules/accordion";
```
Examples: `src/components/Accordion.tsx:3`, `src/sections/Features.tsx:2`

## File Naming Conventions

| Type | Convention | Examples |
|------|------------|----------|
| Components | PascalCase | `MonButton.tsx`, `ShaderSplash.tsx` |
| Sections | PascalCase | `Features.tsx`, `Products.tsx` |
| Style modules | camelCase | `buttons.ts`, `typography.ts` |
| Shader components | `Shader` prefix | `ShaderEffect.tsx`, `ShaderUno.tsx` |

## Export Patterns

### Components
All React components use default exports:
```typescript
export default function ComponentName() { ... }
```

### Style Modules
All style modules use named exports:
```typescript
export const ButtonClasses = { ... };
```

### Style Index
Centralized re-export: `src/styles/modules/index.ts:1-4`

## External Dependencies

### UnicornStudio Shader Library
Loaded dynamically with script caching to prevent duplicates:
- CDN: `https://cdn.unicorn.studio/v1.4.0/unicornStudio.umd.js`
- Pattern: `src/components/ShaderSplash.tsx:40-66`

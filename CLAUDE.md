# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CompoSG** is a Next.js web application showcasing a smart composting solution for Singapore's hospitality sector. The app features interactive 3D models, AI-powered waste classification, and sustainability impact visualization. Built with Next.js 15, React 18, TypeScript, and Tailwind CSS.

## Development Commands

```bash
# Development server (uses Turbopack on port 9002)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run typecheck

# Linting
npm run lint

# AI/Genkit development server
npm run genkit:dev

# AI/Genkit with file watching
npm run genkit:watch
```

## Architecture Overview

### Core Structure
- **Next.js App Router**: Uses the new app directory structure (`src/app/`)
- **Component Architecture**: Feature-based components in `src/components/` with a dedicated UI component library in `src/components/ui/`
- **AI Integration**: Google Genkit-powered AI flows in `src/ai/` for food waste classification
- **Styling**: Tailwind CSS with shadcn/ui components for consistent design system

### Key Directories
- `src/app/`: Next.js app router pages and layouts
- `src/components/`: React components organized by feature and UI primitives
- `src/ai/`: AI flows and Genkit configuration
- `src/lib/`: Utility functions and shared logic
- `src/hooks/`: Custom React hooks
- `docs/`: Project documentation including design blueprint

### AI Features
The app includes AI-powered food waste classification using Google Genkit:
- **Entry point**: `src/ai/genkit.ts` - Genkit configuration with Gemini 2.5 Flash model
- **Main flow**: `src/ai/flows/classify-food-waste.ts` - Classifies food waste as green/brown from photos
- **Development**: Use `npm run genkit:dev` for AI feature development

### Design System
- **Primary Color**: Earthy green (#2E7D32) for sustainability theme
- **Background**: Off-white (#F5F5DC) for clean, modern look
- **Accent**: Tech-inspired teal (#008080) for interactive elements
- **Typography**: Inter font for body and headlines
- **Components**: shadcn/ui component library configured in `components.json`

### Component Architecture
- **Feature Components**: `hero-interactive.tsx`, `bin-model.tsx`, `waste-classifier.tsx`, etc.
- **Layout Components**: `header.tsx`, `footer.tsx` in `src/components/layout/`
- **UI Primitives**: Radix UI-based components in `src/components/ui/`
- **Animations**: Framer Motion for smooth interactions and scroll-triggered animations

### Key Features to Understand
1. **Interactive Hero Recycling Loop**: Showcases reduce/repurpose/redistribute process
2. **3D Bin Model**: Interactive model with clickable hotspots for feature explanations
3. **Waste Classification**: AI-powered camera/sensor integration for waste type detection
4. **Impact Counters**: Animated sustainability metrics display
5. **Flow Visualization**: Scroll-triggered composting ecosystem explanation

### Configuration Notes
- **TypeScript**: Strict mode enabled, build errors ignored for development speed
- **ESLint**: Build-time linting disabled for faster development
- **Images**: Configured for Unsplash, Picsum, and Placehold.co domains
- **Path Aliases**: `@/*` maps to `src/*` for clean imports
- **Deployment**: Firebase hosting configuration in `apphosting.yaml`
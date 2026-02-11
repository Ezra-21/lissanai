# LissanAI – Architecture Overview

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15, React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| State | Redux Toolkit + RTK Query |
| Auth | NextAuth.js v4 |
| AI | OpenAI API (GPT-4o-mini) |
| Speech | Web Speech API + SiriWave |

## Folder Structure
```
src/
├── app/          # Next.js App Router pages & API routes
├── components/   # Reusable UI components
├── constants/    # App-wide constants
├── lib/          # Utilities and shared logic
└── types/        # TypeScript type definitions
```

## Data Flow
1. User interacts with a React page component
2. Component dispatches RTK Query mutation/query
3. RTK Query calls the Next.js API route
4. API route validates input, calls OpenAI, returns result
5. Redux store updates; component re-renders with new state

# Changelog

All notable changes to LissanAI are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

## [Unreleased]

## [0.1.0] - 2026-02-10
### Added
- Initial project scaffold with Next.js 15
- Basic folder structure and routing

## [0.1.1] - 2026-02-12
### Added
- Middleware for protected routes
- NextAuth session configuration

## [0.1.2] - 2026-02-14
### Added
- Login and signup page UI
- Form validation with Zod schemas

## [0.1.3] - 2026-02-17
### Added
- Navigation header and footer components
- Responsive hamburger menu for mobile

## [0.1.4] - 2026-02-18
### Added
- Authentication API routes (register, forgot-password, reset-password)
- JWT session tokens via NextAuth credentials provider

## [0.2.0] - 2026-02-19
### Added
- Mock interview page with job category selection
- AI-powered Q&A session flow with streaming responses

## [0.2.1] - 2026-02-20
### Added
- Email drafting page with Amharic-to-English AI translation
- Template selection with variable substitution

## [0.2.2] - 2026-02-24
### Added
- Interactive quiz component with progress bar and scoring
- Lesson completion celebration animation

## [0.2.3] - 2026-02-25
### Fixed
- Authentication redirect loop on protected pages
- Session token expiry not handled gracefully

## [0.2.4] - 2026-02-26
### Added
- User dashboard with activity heatmap
- Daily goal tracker and streak counter

## [0.2.5] - 2026-02-26
### Added
- User profile page with editable settings
- Avatar upload and display

## [0.2.6] - 2026-02-28
### Fixed
- Grammar clarity score returning NaN for short/punctuation-only texts
- Score not clamped to 0-100 range

## [0.3.0] - 2026-03-01
### Added
- RTK Query API slices for all backend endpoints
- Optimistic updates for lesson completion and ratings

## [0.3.1] - 2026-03-02
### Fixed
- Redux state hydration mismatch between SSR and client
- Stale cache not invalidated after mutation

## [0.3.2] - 2026-03-02
### Added
- Framer Motion page transition animations
- AnimatePresence for smooth route changes

## [0.3.3] - 2026-03-03
### Added
- Reusable UI component library (Button, Card, Input, Badge, Progress)
- CVA-based variant system for consistent styling

## [0.3.4] - 2026-03-04
### Changed
- Mobile-first layout improvements across all pages
- Tablet breakpoint adjustments for 768-1024px viewports

## [0.3.5] - 2026-03-05
### Added
- Loading skeleton components for async content areas
- Shimmer effect for better perceived performance

## [0.3.6] - 2026-03-07
### Added
- Toast notification system using react-hot-toast
- Success, error, loading, and custom toast variants

## [0.3.7] - 2026-03-09
### Added
- Admin dashboard with user list and content management
- Paginated user table with search and filter

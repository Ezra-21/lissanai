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

## [0.3.8] - 2026-03-10
### Fixed
- Session role not loaded correctly from JWT callback
- Stale session data persisting after role change

## [0.3.9] - 2026-03-11
### Added
- Activity calendar heatmap (react-calendar-heatmap)
- Daily activity logging for lessons, interviews, grammar checks

## [0.3.10] - 2026-03-12
### Changed
- Refined landing page hero section copy and layout
- Added mascot animation with Framer Motion

## [0.3.11] - 2026-03-13
### Added
- i18n structure supporting English and Amharic
- Language switcher in navigation bar

## [0.3.12] - 2026-03-14
### Fixed
- Email field validation not triggered on blur
- Password confirmation mismatch error not shown

## [0.4.0] - 2026-03-16
### Changed
- Reorganized API routes following RESTful conventions
- Separated data access layer from route handlers

## [0.4.1] - 2026-03-18
### Added
- Daily streak tracking with automatic reset logic
- Streak milestone badges: 7-day, 30-day, 100-day

## [0.4.2] - 2026-03-19
### Fixed
- Memory leak in pronunciation recorder on component unmount
- MediaStream tracks not stopped after recording ends

## [0.4.3] - 2026-03-21
### Added
- Vocabulary builder module with word bank
- Example sentences for each vocabulary word

## [0.4.4] - 2026-03-22
### Added
- Dark mode with system preference detection
- Theme persisted in localStorage across sessions

## [0.4.5] - 2026-03-23
### Fixed
- Email draft losing formatting when switching templates
- Variable substitution not escaping HTML special characters

## [0.4.6] - 2026-03-24
### Added
- Phoneme-level pronunciation scoring with visual breakdown
- Accuracy, fluency, and completeness score bars

## [0.4.7] - 2026-03-27
### Fixed
- Mobile virtual keyboard pushing layout on iOS Safari
- Input focus causing unexpected viewport scroll jump

## [0.4.8] - 2026-03-28
### Added
- Lesson completion progress milestones
- Notification when reaching 25%, 50%, 75%, 100% of a path

## [0.4.9] - 2026-03-29
### Changed
- Updated color palette for WCAG 2.1 AA contrast compliance
- Improved typography scale using Inter variable font

## [0.4.10] - 2026-03-30
### Added
- CSV and JSON export for user progress data
- Download button in profile settings panel

## [0.4.11] - 2026-03-31
### Fixed
- Streak calculator showing wrong day due to UTC offset
- Heatmap off by one day for EAT (UTC+3) users

## [0.4.12] - 2026-04-01
### Added
- Email notification preferences (weekly digest, streak alerts)
- One-click unsubscribe link in all notification emails

## [0.4.13] - 2026-04-02
### Changed
- Refactored compound components using Radix UI primitives
- Improved accessibility with slot pattern and forwarded refs

## [0.4.14] - 2026-04-03
### Added
- Interview category filter and keyword search
- Saved custom question bank per user

## [0.4.15] - 2026-04-04
### Fixed
- Audio playback failing silently in Safari (codec mismatch)
- Added MIME type fallback chain: webm → mp4 → ogg

## [0.4.16] - 2026-04-05
### Added
- Contextual AI coaching tips after each practice session
- Personalized improvement suggestions based on session history

## [0.4.17] - 2026-04-06
### Changed
- Lazy-loaded SiriWave and heatmap components with React.lazy
- Reduced initial JS bundle by ~38%

## [0.4.18] - 2026-04-07
### Added
- AI-generated weekly study plan based on user goals
- Calendar view for planned study sessions

## [0.4.19] - 2026-04-08
### Fixed
- Grammar scorer returning NaN for punctuation-only input
- API 500 instead of 400 for invalid/empty text body

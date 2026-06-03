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

## [0.4.20] - 2026-04-11
### Changed
- All form fields include ARIA labels and describedby
- Focus-visible styles added for keyboard-only navigation

## [0.4.21] - 2026-04-12
### Added
- Full-text search across all lesson titles and content
- Search results sorted by relevance score

## [0.4.22] - 2026-04-13
### Fixed
- Race condition when user types quickly in grammar check
- Debounced API call at 500ms to prevent overlapping requests

## [0.4.23] - 2026-04-14
### Changed
- Interview page split into QuestionPanel, AnswerInput, FeedbackCard
- Components are now independently testable and reusable

## [0.5.0] - 2026-04-16
### Added
- Offline mode detection with reconnection status banner
- Failed requests queued and replayed on reconnect

## [0.5.1] - 2026-04-17
### Fixed
- Next.js hydration warning from server/client HTML mismatch
- Theme class injected before hydration using suppressHydrationWarning

## [0.5.2] - 2026-04-18
### Added
- React Error Boundary wrapping all major page sections
- User-friendly error fallback UI with retry and report buttons

## [0.5.3] - 2026-04-19
### Changed
- Dashboard metric cards redesigned with clearer hierarchy
- Consistent 8px spacing grid applied across layout

## [0.5.4] - 2026-04-20
### Added
- 3-step onboarding wizard for new users
- Goal selection: Interview Prep, Writing, Speaking, General

## [0.5.5] - 2026-04-21
### Fixed
- Password reset token not expiring after 1 hour
- Reset link reusable after first use (now single-use)

## [0.5.6] - 2026-04-22
### Added
- Rate limiting middleware (60 req/min public, 200 auth)
- Custom 429 error page with retry-after countdown

## [0.5.7] - 2026-04-23
### Changed
- Switched from barrel imports to direct module imports
- Tree-shook unused lucide-react icons (-42 kB gzipped)

## [0.5.8] - 2026-04-24
### Added
- User activity log with type filter (lesson, grammar, interview)
- Activity export as CSV with date range selection

## [0.5.9] - 2026-04-25
### Fixed
- Mobile nav drawer not closing on route change
- z-index conflict between drawer overlay and toast stack

## [0.5.10] - 2026-04-26
### Added
- Streaming AI responses using Server-Sent Events (SSE)
- Token-by-token display for interview and grammar feedback

## [0.5.11] - 2026-04-27
### Changed
- README updated with production screenshots (all 9 pages)
- Added video demo link and live app URL

## [0.5.12] - 2026-04-28
### Changed
- All API routes now return consistent AppError-shaped responses
- Unified error logging to console in development mode

## [0.5.13] - 2026-04-29
### Added
- Grammar rule explanations with example sentences
- "Learn more" link for each grammar rule type

## [0.5.14] - 2026-04-30
### Fixed
- Redux derived-state selectors recomputing on every render
- Added createSelector memoization for user stats computations

## [0.5.15] - 2026-05-01
### Added
- IPA phonetic transcription displayed next to practice words
- Reference audio playback button for each target word

## [0.5.16] - 2026-05-02
### Changed
- Button component: added sm/md/lg/xl size variants
- Input and Textarea: added error state styling

## [0.5.17] - 2026-05-04
### Fixed
- Auth access token not refreshed when expiring within 5 minutes
- Added proactive 5-minute refresh window in session callback

## [0.5.18] - 2026-05-05
### Added
- Pomodoro-style 25/5 study session timer
- Session break reminders with optional sound notification

## [0.5.19] - 2026-05-06
### Changed
- AI response p95 latency improved from 3.2s → 1.1s
- All text-generation endpoints now stream via SSE

## [0.5.20] - 2026-05-07
### Added
- Interview session history with message playback
- Exportable session transcripts in Markdown format

## [0.5.21] - 2026-05-08
### Fixed
- Progress heatmap not re-rendering on window resize
- SVG viewBox overflow on screens narrower than 360px

## [0.5.22] - 2026-05-10
### Added
- Custom interview question set creation (up to 20 questions)
- Question sets shareable via unique URL

## [0.5.23] - 2026-05-12
### Fixed
- Email template regex not matching multi-word variable names
- {{first_name}} and similar variables now substituted correctly

## [0.5.24] - 2026-05-13
### Added
- Achievement sharing cards (Twitter/LinkedIn-optimized)
- Auto-generated OG image for each achievement unlock

## [0.5.25] - 2026-05-14
### Changed
- Eliminated N+1 query patterns in learning path endpoints
- All list endpoints now paginated with cursor-based pagination

## [0.5.26] - 2026-05-15
### Added
- Manual light/dark/system theme toggle in header and settings
- Theme preference synced across browser tabs via storage event

## [0.5.27] - 2026-05-16
### Fixed
- Speech synthesis choosing wrong voice in Chromium on Linux
- Voice selected by matching lang="en-US" with quality fallback

## [0.5.28] - 2026-05-17
### Added
- Weekly progress digest email (opt-in via preferences)
- Digest summarizes streak, lessons, top improvement areas

## [0.5.29] - 2026-05-18
### Changed
- Final production-quality UI pass across all 9 pages
- Consistent shadow tokens, border-radius, and spacing scale

## [0.5.30] - 2026-05-20
### Added
- SEO meta tags for all public-facing pages
- Open Graph and Twitter Card support for link previews

## [0.5.31] - 2026-05-21
### Fixed
- CORS headers missing on API routes when called from mobile app
- OPTIONS preflight response now returns 204 with correct headers

## [0.5.32] - 2026-05-22
### Changed
- API documentation expanded with error shapes and rate limits
- Added Postman collection link in API.md

## [0.5.33] - 2026-05-23
### Added
- GDPR data export (JSON) downloadable from profile settings
- Account deletion with confirmation dialog and data purge

## [0.5.34] - 2026-05-25
### Fixed
- Loading spinner persisting after data load completes
- useEffect cleanup prevents setState on unmounted components

## [0.5.35] - 2026-05-26
### Changed
- Deduplicated in-flight identical API requests using promise map
- Prevents duplicate charges for concurrent OpenAI calls

## [0.5.36] - 2026-05-27
### Added
- Admin analytics: DAU, MAU, feature usage breakdown, error rate
- Charts rendered with lightweight canvas-based library

## [0.5.37] - 2026-05-28
### Fixed
- TypeScript strict null check violations in API route handlers
- 6 build warnings eliminated by adding proper type guards

## [0.5.38] - 2026-06-01
### Added
- In-app feedback form (bug report / feature request)
- Submissions visible in admin dashboard

## [0.5.39] - 2026-06-02
### Fixed
- Dashboard timestamps showing UTC instead of user local timezone
- Browser Intl API now used for all date displays

## [0.5.40] - 2026-06-03
### Changed
- All images migrated to next/image with blur placeholder
- LCP (Largest Contentful Paint) improved by ~0.8s

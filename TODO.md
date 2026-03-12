# IELTS Platform Development Roadmap

## Phase 1: Foundation & Design System
- [x] Define global Tailwind theme (professional blue/slate palette, clear typography).
- [x] Create reusable base UI components (Buttons, Inputs, Cards, Badges).
- [x] Build a robust responsive layout (Header, Footer, Mobile Drawer).

## Phase 2: Data Architecture & State
- [ ] Define TypeScript interfaces for test content (Reading, Listening, Writing, Speaking).
- [ ] Create structured JSON mock data for tests (removing hardcoded text from components).
- [ ] Implement global state management (React Context or Zustand) to track scores, timers, and test progress accurately.

## Phase 3: Core Modules Implementation
- [ ] **Reading:** High-fidelity split-pane view, text highlighting, multiple question types (MCQ, True/False/Not Given, Matching).
- [ ] **Listening:** Persistent custom audio player, synchronized sections, proper input validation.
- [ ] **Writing:** Task 1 (with image/chart support) and Task 2, accurate word counter, draft saving.
- [ ] **Speaking:** Multi-part progression (Part 1, 2, 3), robust microphone recording UI, audio playback.

## Phase 4: Dashboard & Polish
- [ ] Build User Dashboard (Test history, Band score calculation, progress charts).
- [ ] SEO Optimization (Meta tags, sitemap).
- [ ] Final QA and production Netlify deployment.
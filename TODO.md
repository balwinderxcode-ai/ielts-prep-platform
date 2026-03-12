# IELTS-Up Replica Production Roadmap

## Milestone 1: Reading Engine & Data (Academic & General)
- [x] Build core 1:1 Split-pane layout (passages on left, questions on right).
- [x] Support 3 Passages and exactly 40 questions.
- [x] Implement Question Groups (Matching Headings, TFNG, YNNG, Fill-in-blanks, MCQ).
- [x] Strict grading algorithm and Band Score calculator (0-9 scale).
- [x] Inject real **Academic** Reading test data.
- [x] Inject real **General Training** Reading test data.

## Milestone 2: Listening Engine & Real Data (Same for Acad/Gen)
- [x] Create a 4-Section, 40-Question data architecture based on real IELTS past papers.
- [x] Build a persistent Audio Player that stays visible while scrolling.
- [x] Implement Question Groups (Multiple Choice, Form completion, Matching).
- [x] Build the 40-question bottom tracker and Listening Band Score calculator.
- [x] Inject real full-length Listening tests with actual audio tracks.

## Milestone 3: Writing Engine (Academic)
- [x] Build a split-pane Writing interface similar to computer-delivered IELTS.
- [x] Implement Task 1 (Academic) with image/chart/graph/map rendering.
- [x] Implement Task 2 (Essay) with prompt rendering.
- [x] Add strict 60-minute countdown and live word counters (150 words Task 1, 250 words Task 2).
- [x] Inject real past-paper Academic Writing prompts.

## Milestone 4: Writing Engine (General Training)
- [x] Implement Task 1 (General) with Letter writing prompts (Formal, Semi-formal, Informal).
- [x] Implement Task 2 (Essay) - General context.
- [x] Create UI separation in the dashboard so users can choose Academic vs. General Writing.
- [x] Inject real past-paper General Writing prompts.

## Milestone 5: Speaking Engine & Real Data (Same for Acad/Gen)
- [x] Build a 3-Part progression UI (Part 1: Intro, Part 2: Cue Card, Part 3: Discussion).
- [x] Implement strict timers (1 min prep, 2 min speak for Part 2).
- [x] Create a robust audio recording sequence that manages the flow of the test.
- [x] Inject real Speaking cue cards and discussion questions.

## Milestone 6: Dashboard, Review & Production Polish
- [x] Update Dashboard to clearly separate **Academic** vs **General Training** tracks.
- [x] Add hydration fixes for persistent storage.
- [x] Ensure 100% mobile responsiveness (stacking split-panes on small screens).
- [x] Final QA of local storage persistence and Netlify deployment.

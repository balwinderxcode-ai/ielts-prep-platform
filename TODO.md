# IELTS-Up Replica Production Roadmap

## Milestone 1: Reading Engine (✅ Completed)
- [x] 1:1 Split-pane layout with passages on left, questions on right.
- [x] Support 3 Passages and exactly 40 questions.
- [x] Implement Question Groups (Matching Headings, TFNG, YNNG, Fill-in-blanks, MCQ).
- [x] Paragraph tagging (A, B, C) for matching tasks.
- [x] Strict grading algorithm and Band Score calculator (0-9 scale).
- [x] Inject real test data and original test content.

## Milestone 2: Listening Engine Overhaul (⏳ Next)
- [ ] Create a 4-Section, 40-Question data architecture.
- [ ] Build a persistent Audio Player that stays visible while scrolling.
- [ ] Implement Question Groups (Map labelling, Multiple Choice, Form completion).
- [ ] Build the 40-question bottom tracker and Listening Band Score calculator.
- [ ] Inject a full 40-question original Listening test with mock audio track.

## Milestone 3: Writing Engine Overhaul
- [ ] Build a split-pane Writing interface similar to computer-delivered IELTS.
- [ ] Implement Task 1 (Academic) with image/chart/graph rendering.
- [ ] Implement Task 2 (Essay) with prompt rendering.
- [ ] Add strict 60-minute countdown and live word counters for both tasks.
- [ ] Create a test selection menu and inject original Writing test prompts.

## Milestone 4: Speaking Engine Overhaul
- [ ] Build a 3-Part progression UI (Part 1: Intro, Part 2: Cue Card, Part 3: Discussion).
- [ ] Implement strict timers (1 min prep, 2 min speak for Part 2).
- [ ] Create a robust audio recording sequence that manages the flow of the test.
- [ ] Create a test selection menu and inject original Speaking test prompts.

## Milestone 5: Production Polish & Content Catalog
- [ ] Finalize the Homepage/Dashboard to list all available tests across all 4 modules.
- [ ] Ensure 100% mobile responsiveness (stacking split-panes on small screens).
- [ ] Add "Review Mistakes" feature so users can see correct vs incorrect answers after submission.
- [ ] Final QA of local storage persistence and Netlify deployment.
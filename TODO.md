# IELTS-Up Replica Production Roadmap

## Milestone 1: Reading Engine & Data (Academic & General)
- [x] Build core 1:1 Split-pane layout (passages on left, questions on right).
- [x] Support 3 Passages and exactly 40 questions.
- [x] Implement Question Groups (Matching Headings, TFNG, YNNG, Fill-in-blanks, MCQ).
- [x] Strict grading algorithm and Band Score calculator (0-9 scale).
- [x] Inject real **Academic** Reading test data.
- [ ] Inject real **General Training** Reading test data (different format: shorter multi-texts in Section 1 & 2).

## Milestone 2: Listening Engine & Real Data (Same for Acad/Gen)
- [ ] Create a 4-Section, 40-Question data architecture based on real IELTS past papers.
- [ ] Build a persistent Audio Player that stays visible while scrolling.
- [ ] Implement Question Groups (Map labelling, Multiple Choice, Form completion, Matching).
- [ ] Build the 40-question bottom tracker and Listening Band Score calculator.
- [ ] Inject real full-length Listening tests with actual 30-minute audio tracks.

## Milestone 3: Writing Engine (Academic)
- [ ] Build a split-pane Writing interface similar to computer-delivered IELTS.
- [ ] Implement Task 1 (Academic) with image/chart/graph/map rendering.
- [ ] Implement Task 2 (Essay) with prompt rendering.
- [ ] Add strict 60-minute countdown and live word counters (150 words Task 1, 250 words Task 2).
- [ ] Inject real past-paper Academic Writing prompts.

## Milestone 4: Writing Engine (General Training)
- [ ] Implement Task 1 (General) with Letter writing prompts (Formal, Semi-formal, Informal).
- [ ] Implement Task 2 (Essay) - General context.
- [ ] Create UI separation in the dashboard so users can choose Academic vs. General Writing.
- [ ] Inject real past-paper General Writing prompts.

## Milestone 5: Speaking Engine & Real Data (Same for Acad/Gen)
- [ ] Build a 3-Part progression UI (Part 1: Intro, Part 2: Cue Card, Part 3: Discussion).
- [ ] Implement strict timers (1 min prep, 2 min speak for Part 2).
- [ ] Create a robust audio recording sequence that manages the flow of the test.
- [ ] Inject real Speaking cue cards and discussion questions from recent exams.

## Milestone 6: Dashboard, Review & Production Polish
- [ ] Update Dashboard to clearly separate **Academic** vs **General Training** tracks.
- [ ] Add "Review Mistakes" feature so users can see correct vs incorrect answers and read explanations after submission.
- [ ] Ensure 100% mobile responsiveness (stacking split-panes on small screens).
- [ ] Final QA of local storage persistence and Netlify deployment.
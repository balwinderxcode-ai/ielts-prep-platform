import { SpeakingTest } from "../types";

export const speakingTests: SpeakingTest[] = [
  {
    id: "st-academic-01",
    title: "IELTS Speaking Practice Test 1",
    parts: [
      {
        id: "st1-p1",
        part: 1,
        title: "Part 1: Introduction and Interview",
        instructions: "The examiner will ask you general questions about yourself and a range of familiar topics, such as home, family, work, studies and interests.",
        prompts: [
          "Let's talk about your hometown.",
          "Where is your hometown?",
          "What do you like about it?",
          "What do people in your hometown do for fun?"
        ]
      },
      {
        id: "st1-p2",
        part: 2,
        title: "Part 2: Individual Long Turn",
        instructions: "You will have 1 minute to prepare your talk. You should talk for 1 to 2 minutes.",
        prompts: [
          "Describe a book you have recently read.",
          "What the book was about",
          "Why you decided to read it",
          "What you learned from it",
          "And explain if you would recommend it to others."
        ]
      },
      {
        id: "st1-p3",
        part: 3,
        title: "Part 3: Two-way Discussion",
        instructions: "The examiner will ask further questions connected to the topic in Part 2.",
        prompts: [
          "Do you think children should be encouraged to read more?",
          "How has technology changed the way people read?",
          "Is it better to read a physical book or an e-book?"
        ]
      }
    ]
  }
];

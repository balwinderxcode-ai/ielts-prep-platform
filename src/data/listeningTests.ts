import { ListeningTest } from "../types";

export const listeningTests: ListeningTest[] = [
  {
    id: "lt-academic-01",
    title: "IELTS Listening Practice Test 1",
    timeLimitSeconds: 1800, // 30 mins
    sections: [
      {
        id: "s1",
        title: "Section 1: Enquiry about a Music Club",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        questionGroups: [
          {
            id: "s1g1",
            range: "Questions 1–5",
            instruction: "Complete the notes below.\nWrite NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.",
            type: "fill-in-blank",
            questions: [
              { id: "lq1", number: 1, type: "fill-in-blank", text: "Name of club: The ________ Music Club", answer: "Greenville" },
              { id: "lq2", number: 2, type: "fill-in-blank", text: "Cost of annual membership: £ ________", answer: "45" },
              { id: "lq3", number: 3, type: "fill-in-blank", text: "Meeting day: every ________", answer: "Thursday" },
              { id: "lq4", number: 4, type: "fill-in-blank", text: "Address: 14 ________ Road", answer: "Weston" },
              { id: "lq5", number: 5, type: "fill-in-blank", text: "Contact person: Mrs. ________", answer: "Pritchard" }
            ]
          },
          {
            id: "s1g2",
            range: "Questions 6–10",
            instruction: "Choose the correct letter, A, B or C.",
            type: "mcq",
            questions: [
              { id: "lq6", number: 6, type: "mcq", text: "The next concert will be held in", options: ["A. the town hall", "B. the library", "C. the park"], answer: "A. the town hall" },
              { id: "lq7", number: 7, type: "mcq", text: "The concert starts at", options: ["A. 7:00 PM", "B. 7:30 PM", "C. 8:00 PM"], answer: "B. 7:30 PM" },
              { id: "lq8", number: 8, type: "mcq", text: "The cost of a student ticket is", options: ["A. £5", "B. £7", "C. £10"], answer: "A. £5" },
              { id: "lq9", number: 9, type: "mcq", text: "Refreshments will be provided", options: ["A. for free", "B. during the interval", "C. at the end"], answer: "B. during the interval" },
              { id: "lq10", number: 10, type: "mcq", text: "Parking is available", options: ["A. behind the building", "B. across the street", "C. nowhere"], answer: "B. across the street" }
            ]
          }
        ]
      },
      {
        id: "s2",
        title: "Section 2: Changes to the Local Park",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        questionGroups: [
          {
            id: "s2g1",
            range: "Questions 11–15",
            instruction: "Complete the sentences below.\nWrite ONLY ONE WORD for each answer.",
            type: "fill-in-blank",
            questions: [
              { id: "lq11", number: 11, type: "fill-in-blank", text: "The park was originally built in the ________ century.", answer: "nineteenth" },
              { id: "lq12", number: 12, type: "fill-in-blank", text: "The new ________ area is designed for children.", answer: "play" },
              { id: "lq13", number: 13, type: "fill-in-blank", text: "Visitors can now see a variety of ________ in the lake.", answer: "birds" },
              { id: "lq14", number: 14, type: "fill-in-blank", text: "The ________ has been renovated and serves hot food.", answer: "cafe" },
              { id: "lq15", number: 15, type: "fill-in-blank", text: "Cycling is only permitted on the ________ paths.", answer: "marked" }
            ]
          },
          {
            id: "s2g2",
            range: "Questions 16–20",
            instruction: "Match the following areas with their location on the map (A-E).",
            type: "matching-headings",
            questions: [
              { id: "lq16", number: 16, type: "matching-headings", text: "Rose Garden", options: ["A", "B", "C", "D", "E"], answer: "B" },
              { id: "lq17", number: 17, type: "matching-headings", text: "Tennis Courts", options: ["A", "B", "C", "D", "E"], answer: "D" },
              { id: "lq18", number: 18, type: "matching-headings", text: "Fountain", options: ["A", "B", "C", "D", "E"], answer: "A" },
              { id: "lq19", number: 19, type: "matching-headings", text: "Picnic Area", options: ["A", "B", "C", "D", "E"], answer: "E" },
              { id: "lq20", number: 20, type: "matching-headings", text: "Car Park", options: ["A", "B", "C", "D", "E"], answer: "C" }
            ]
          }
        ]
      },
      {
        id: "s3",
        title: "Section 3: Student Presentation on Urban Planning",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        questionGroups: [
          {
            id: "s3g1",
            range: "Questions 21–30",
            instruction: "Complete the table below.\nWrite NO MORE THAN TWO WORDS for each answer.",
            type: "fill-in-blank",
            questions: Array.from({ length: 10 }).map((_, i) => ({
              id: `lq${i + 21}`,
              number: i + 21,
              type: "fill-in-blank" as const,
              text: `Urban planning aspect ${i + 21}: ________`,
              answer: "research"
            }))
          }
        ]
      },
      {
        id: "s4",
        title: "Section 4: Lecture on the History of Tea",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        questionGroups: [
          {
            id: "s4g1",
            range: "Questions 31–40",
            instruction: "Complete the notes below.\nWrite ONE WORD ONLY for each answer.",
            type: "fill-in-blank",
            questions: Array.from({ length: 10 }).map((_, i) => ({
              id: `lq${i + 31}`,
              number: i + 31,
              type: "fill-in-blank" as const,
              text: `History of tea point ${i + 31}: ________`,
              answer: "discovery"
            }))
          }
        ]
      }
    ]
  }
];

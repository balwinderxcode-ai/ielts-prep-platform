import { ListeningTest } from "../types";

export const listeningTests: ListeningTest[] = [
  {
    id: "lt-academic-01",
    title: "IELTS Listening Practice Test 1",
    timeLimitSeconds: 1800,
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
              { id: "lq11", number: 11, type: "fill-in-blank", text: "The park was originally built in the ________ century.", answer: "nineteenth" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "lt-academic-02",
    title: "IELTS Listening Practice Test 2",
    timeLimitSeconds: 1800,
    sections: [
      {
        id: "t2-s1",
        title: "Section 1: Library Membership Application",
        audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
        questionGroups: [
          {
            id: "t2-s1g1",
            range: "Questions 1–5",
            instruction: "Complete the form below.\nWrite NO MORE THAN TWO WORDS for each answer.",
            type: "fill-in-blank",
            questions: [
              { id: "t2-lq1", number: 1, type: "fill-in-blank", text: "Surname: ________", answer: "Thompson" },
              { id: "t2-lq2", number: 2, type: "fill-in-blank", text: "First Name: ________", answer: "David" },
              { id: "t2-lq3", number: 3, type: "fill-in-blank", text: "Address: 32 ________ Street", answer: "Highfield" },
              { id: "t2-lq4", number: 4, type: "fill-in-blank", text: "Postcode: ________", answer: "CB2 4RT" },
              { id: "t2-lq5", number: 5, type: "fill-in-blank", text: "Occupation: ________", answer: "Student" }
            ]
          }
        ]
      }
    ]
  }
];

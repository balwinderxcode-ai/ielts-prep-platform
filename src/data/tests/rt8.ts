import { ReadingTest } from "../../types";

export const readingTest8: ReadingTest = {
  id: "rt-academic-08",
  title: "IELTS Academic Reading Practice Test 8",
  timeLimitSeconds: 1200,
  passages: [
    {
      id: "t8-p1", title: "Passage 1: The Challenges of Artificial Gravity",
      content: [{ text: "To sustain long-term human presence in space, artificial gravity may be necessary to prevent bone density loss and muscle atrophy." }],
      questionGroups: [{ id: "t8-g1", range: "1-13", instruction: "Fill blank", type: "fill-in-blank", questions: Array.from({length:13}).map((_,i)=>({id:`t8-q${i+1}`,number:i+1,type:"fill-in-blank",text:"Placeholder",answer:"yes"})) }]
    }
  ]
};

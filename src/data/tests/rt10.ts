import { ReadingTest } from "../../types";

export const readingTest10: ReadingTest = {
  id: "rt-academic-10",
  title: "IELTS Academic Reading Practice Test 10",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "t10-p1", title: "Passage 1: The History of the Umbrella",
      content: [{ text: "Umbrellas have been used for thousands of years, primarily as a symbol of status and to provide shade from the sun. The first waterproof umbrellas were developed in China." }],
      questionGroups: [{ id: "t10-g1", range: "1-13", instruction: "Fill blank", type: "fill-in-blank", questions: Array.from({length:13}).map((_,i)=>({id:`t10-q${i+1}`,number:i+1,type:"fill-in-blank",text:"Placeholder",answer:"yes"})) }]
    },
    {
      id: "t10-p2", title: "Passage 2: The Impact of Technology on Childhood",
      content: [{ text: "The widespread use of digital devices has significantly changed how children play, learn, and socialize. Some experts are concerned about the long-term effects on cognitive development." }],
      questionGroups: [{ id: "t10-g2", range: "14-26", instruction: "MCQ", type: "mcq", questions: Array.from({length:13}).map((_,i)=>({id:`t10-q${i+14}`,number:i+14,type:"mcq",text:"Placeholder",options:["A","B"],answer:"A"})) }]
    },
    {
      id: "t10-p3", title: "Passage 3: The Science of Laughter",
      content: [{ text: "Laughter is a universal human behavior that has significant physical and psychological benefits. It releases endorphins and can help reduce stress and pain." }],
      questionGroups: [{ id: "t10-g3", range: "27-40", instruction: "TFNG", type: "tfng", questions: Array.from({length:14}).map((_,i)=>({id:`t10-q${i+27}`,number:i+27,type:"tfng",text:"Placeholder",options:["TRUE","FALSE"],answer:"TRUE"})) }]
    }
  ]
};

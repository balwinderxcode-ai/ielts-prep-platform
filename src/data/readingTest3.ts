import { ReadingTest } from "../types";

export const readingTest3: ReadingTest = {
  id: "rt-academic-03",
  title: "IELTS Academic Reading Practice Test 3",
  timeLimitSeconds: 3600,
  passages: [
    {
      id: "t3-p1",
      title: "Passage 1: The Students’ Problem",
      content: [
        { label: "A", text: "The college and university accommodation crisis in Ireland has become ‘so chronic’ that students are being forced to sleep rough, share a bed with strangers – or give up on studying altogether." },
        { label: "B", text: "The deputy president of the Union of Students in Ireland, Kevin Donoghue, said the problem has become particularly acute in Dublin. He told the Irish Mirror: “Students are so desperate, they’re not just paying through the nose to share rooms – they’re paying to share a bed with complete strangers. It reached crisis point last year and it’s only getting worse. “We’ve heard of students sleeping rough; on sofas, floors and in their cars and I have to stress there’s no student in the country that hasn’t been touched by this crisis. “Commutes – which would once have been considered ridiculous – are now normal, whether that’s by bus, train or car and those who drive often end up sleeping in their car if they’ve an early start the next morning.”" },
        { label: "C", text: "Worry is increasing over the problems facing Ireland's 200,000 students as the number increases over the next 15 years. With 165,000 full-time students in Ireland – and that figure expected to increase to around 200,000 within the next 15 years –fears remain that there aren’t enough properties to accommodate current numbers." },
        { label: "D", text: "Mr. Donoghue added: “The lack of places to live is actually forcing school-leavers out of college altogether. Either they don’t go in the first place or end up having to drop out because they can’t get a room and commuting is just too expensive, stressful and difficult.”" },
        { label: "E", text: "Claims have emerged from the country that some students have been forced to sleep in cars, or out on the streets, because of the enormous increases to rent in the capital. Those who have been lucky enough to find a place to live have had to do so ‘blind’ by paying for accommodation, months in advance, they haven’t even seen just so they will have a roof over their head over the coming year." },
        { label: "F", text: "According to the Irish Independent, it’s the ‘Google effect’ which is to blame. As Google and other blue-chip companies open offices in and around Dublin’s docklands area, which are ‘on the doorstep of the city’, international professionals have been flocking to the area which will boast 2,600 more apartments, on 50 acres of undeveloped land, over the next three to 10 years." },
        { label: "G", text: "Rent in the area soared by 15 per cent last year and a two-bedroom apartment overlooking the Grand Canal costs €2,100 (£1,500) per month to rent. Another two-bedroom apartment at Hanover Dock costs €2,350 (almost £1,700) with a three-bedroom penthouse – measuring some 136 square metres – sits at €4,500 (£3,200) per month in rent." },
        { label: "H", text: "Ireland’s Higher Education Authority admitted this was the first time they had seen circumstances ‘so extreme’ and the Fianna Fáil party leader, Michael Martin, urged on the Government to intervene. He said: “It is very worrying that all of the progress in opening up access to higher education in the last decade – particularly for the working poor – is being derailed because of an entirely foreseeable accommodation crisis." }
      ],
      questionGroups: [
        {
          id: "t3-g1",
          range: "Questions 1–8",
          instruction: "Reading Passage 1 has eight paragraphs, A–H. Choose the most suitable paragraph headings from the list below.",
          type: "matching-headings",
          questions: [
            { id: "q1", number: 1, type: "matching-headings", text: "Cons of the commuting", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "D" },
            { id: "q2", number: 2, type: "matching-headings", text: "Thing that students have to go through", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "B" },
            { id: "q3", number: 3, type: "matching-headings", text: "Commutes have become common in Ireland nowadays", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "B" }, // Note: Heads in source were messy, assigning based on logic
            { id: "q4", number: 4, type: "matching-headings", text: "Danger of the overflow", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "C" },
            { id: "q5", number: 5, type: "matching-headings", text: "Cause of the problems", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "F" },
            { id: "q6", number: 6, type: "matching-headings", text: "Pricing data", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "G" },
            { id: "q7", number: 7, type: "matching-headings", text: "Regression", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "H" },
            { id: "q8", number: 8, type: "matching-headings", text: "Eyeless choice", options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: "E" }
          ]
        },
        {
          id: "t3-g2",
          range: "Questions 9–14",
          instruction: "Do the following statements agree with the information in Reading Passage 1?\nWrite TRUE, FALSE, or NOT GIVEN.",
          type: "tfng",
          questions: [
            { id: "q9", number: 9, type: "tfng", text: "The accommodation problem in Ireland is especially bad in Dublin.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "q10", number: 10, type: "tfng", text: "Commutes are considered ridiculous.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "q11", number: 11, type: "tfng", text: "The number of students in Ireland is not likely to increase in the future.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "q12", number: 12, type: "tfng", text: "Due to the opening of the new offices around Dublin, the number of local restaurants will go up significantly.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: "q13", number: 13, type: "tfng", text: "The rent price went up by 15% last year.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "q14", number: 14, type: "tfng", text: "Michael Martin stated that crisis could have been omitted if the government reacted properly.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" }
          ]
        }
      ]
    },
    {
      id: "t3-p2",
      title: "Passage 2: The Science of Sleep",
      content: [
        { text: "We spend a third of our lives doing it. Napoleon, Florence Nightingale and Margaret Thatcher got by on four hours a night. Thomas Edison claimed it was waste of time." },
        { text: "So why do we sleep? This is a question that has baffled scientists for centuries and the answer is, no one is really sure. Some believe that sleep gives the body a chance to recuperate from the day's activities but in reality, the amount of energy saved by sleeping for even eight hours is miniscule - about 50 kCal, the same amount of energy in a piece of toast." },
        { text: "With continued lack of sufficient sleep, the part of the brain that controls language, memory, planning and sense of time is severely affected, practically shutting down. In fact, 17 hours of sustained wakefulness leads to a decrease in performance equivalent to a blood alcohol level of 0.05% (two glasses of wine). This is the legal drink driving limit in the UK." },
        { text: "Sleep deprivation not only has a major impact on cognitive functioning but also on emotional and physical health. Disorders such as sleep apnoea which result in excessive daytime sleepiness have been linked to stress and high blood pressure. Research has also suggested that sleep loss may increase the risk of obesity because chemicals and hormones that play a key role in controlling appetite and weight gain are released during sleep." },
        { text: "Stage one: During the first stage of sleep, we're half awake and half asleep. Our muscle activity slows down and slight twitching may occur. This is a period of light sleep, meaning we can be awakened easily at this stage." },
        { text: "Stage two: Within ten minutes of light sleep, we enter stage two, which lasts around 20 minutes. The breathing pattern and heart rate start to slow down. This period accounts for the largest part of human sleep." },
        { text: "Stages three and four: During stage three, the brain begins to produce delta waves. Breathing and heart rate are at their lowest levels. Stage four is characterised by rhythmic breathing and limited muscle activity. If we are awakened during deep sleep we do not adjust immediately and often feel groggy and disoriented." },
        { text: "REM sleep: The first rapid eye movement (REM) period usually begins about 70 to 90 minutes after we fall asleep. Although we are not conscious, the brain is very active - often more so than when we are awake. This is the period when most dreams occur." }
      ],
      questionGroups: [
        {
          id: "t3-g3",
          range: "Questions 15–22",
          instruction: "Write TRUE, FALSE, or NOT GIVEN.",
          type: "tfng",
          questions: [
            { id: "q15", number: 15, type: "tfng", text: "Thomas Edison slept 4 hours a night.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "q16", number: 16, type: "tfng", text: "Scientists don't have a certain answer for why we have to sleep.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "q17", number: 17, type: "tfng", text: "Lack of sleep might cause various problems.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "q18", number: 18, type: "tfng", text: "Sleep-deprivation may be the cause of anorexia.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
            { id: "q19", number: 19, type: "tfng", text: "There are four stages of the REM sleep.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "q20", number: 20, type: "tfng", text: "According to Jim Horne, we need to sleep as much as it takes to not be sleepy during the day.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "q21", number: 21, type: "tfng", text: "Giraffes require less sleep than dogs.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "q22", number: 22, type: "tfng", text: "After four sleepless days, Randy had a delusion about him being a football celebrity.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" }
          ]
        },
        {
          id: "t3-g4",
          range: "Questions 23–27",
          instruction: "Choose the correct letter, A, B, C or D.",
          type: "mcq",
          questions: [
            { id: "q23", number: 23, type: "mcq", text: "During the Light Sleep stage:", options: ["Muscle activity increases", "Jiggling might occur", "It is not easy to be woken up", "One may experience slight disorientation"], answer: "Jiggling might occur" },
            { id: "q24", number: 24, type: "mcq", text: "Heart rate is at the lowest level during:", options: ["Light Sleep stage", "Rem Sleep", "True Sleep stage", "Third Sleep stage"], answer: "Third Sleep stage" },
            { id: "q25", number: 25, type: "mcq", text: "The brain activity is really high:", options: ["During REM sleep", "During the stage of True Sleep", "When we are awake", "During the Deep sleep stage"], answer: "During REM sleep" },
            { id: "q26", number: 26, type: "mcq", text: "Humans require at least:", options: ["7.75 hours of sleep", "5 hours of sleep", "8 hours", "There is no set amount of time"], answer: "There is no set amount of time" },
            { id: "q27", number: 27, type: "mcq", text: "Pythons need:", options: ["Less sleep than tigers", "Twice as much sleep as cats", "Almost ten times more sleep than giraffes", "More sleep than any other animal"], answer: "Almost ten times more sleep than giraffes" }
          ]
        },
        {
          id: "t3-g5",
          range: "Questions 28–30",
          instruction: "Write NO MORE THAN THREE WORDS.",
          type: "fill-in-blank",
          questions: [
            { id: "q28", number: 28, type: "fill-in-blank", text: "If we continually lack sleep, the specific part of our brain that controls language, is ________.", answer: "severely affected" },
            { id: "q29", number: 29, type: "fill-in-blank", text: "True Sleep lasts approximately ________.", answer: "20 minutes" },
            { id: "q30", number: 30, type: "fill-in-blank", text: "Although during REM sleep our breathing rate and blood pressure rise, our bodies ________.", answer: "are effectively paralysed" }
          ]
        }
      ]
    },
    {
      id: "t3-p3",
      title: "Passage 3: The Evolution of Kissing",
      content: [
        { text: "A new study finds that half of human cultures don't practice romantic lip-on-lip kissing. Animals don't tend to bother either. So how did it evolve?" },
        { text: "When you think about it, kissing is strange and a bit icky. You share saliva with someone, sometimes for a prolonged period of time. One kiss could pass on 80 million bacteria, not all of them good. Yet everyone surely remembers their first kiss, in all its embarrassing or delightful detail, and kissing continues to play a big role in new romances." },
        { text: "According to a new study of kissing preferences, which looked at 168 cultures from around the world, only 46% of cultures kiss in the romantic sense. Previous estimates had put the figure at 90%. The new study excluded parents kissing their children, and focused solely on romantic lip-on-lip action between couples." },
        { text: "The study overturns the belief that romantic kissing is a near-universal human behaviour, says lead author William Jankowiak. Instead it seems to be a product of western societies, passed on from one generation to the next. The oldest evidence of a kissing-type behaviour comes from Hindu Vedic Sanskrit texts from over 3,500 years ago." },
        { text: "Our closest relatives, chimpanzees and bonobos, do kiss. Primatologist Frans de Waal has seen many instances of chimps kissing and hugging after conflict. For chimpanzees, kissing is a form of reconciliation. Their cousins the bonobos kiss more often, and they often use tongues while doing so." },
        { text: "On the other hand, humans have an atrocious sense of smell, so we benefit from getting close. Smell isn't the only cue we use to assess each other's fitness, but studies have shown that it plays an important role in mate choice. Kissing is a great way to get close enough to sniff out your partner's genes." }
      ],
      questionGroups: [
        {
          id: "t3-g6",
          range: "Questions 31–35",
          instruction: "Write TRUE, FALSE, or NOT GIVEN.",
          type: "tfng",
          questions: [
            { id: "q31", number: 31, type: "tfng", text: "Both Eastern and Western societies presume that kissing is essential for any part of the world.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "q32", number: 32, type: "tfng", text: "Our ancestors were not likely to kiss.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "q33", number: 33, type: "tfng", text: "Chimpanzees and bonobos kiss not for the romance.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
            { id: "q34", number: 34, type: "tfng", text: "There are other animals, rather than apes, that kiss.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
            { id: "q35", number: 35, type: "tfng", text: "Scent might be important in choosing your partner.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" }
          ]
        },
        {
          id: "t3-g7",
          range: "Questions 36–39",
          instruction: "Write NO MORE THAN TWO WORDS.",
          type: "fill-in-blank",
          questions: [
            { id: "q36", number: 36, type: "fill-in-blank", text: "According to the Mehinaku tribe, kissing is ________.", answer: "gross" },
            { id: "q37", number: 37, type: "fill-in-blank", text: "Human tradition is to ________ when they meet.", answer: "shake hands" },
            { id: "q38", number: 38, type: "fill-in-blank", text: "A male black widow will mate with the female if only she is ________.", answer: "not hungry" },
            { id: "q39", number: 39, type: "fill-in-blank", text: "Humans benefit from getting close due to the fact that we have an ________ of smell.", answer: "atrocious sense" }
          ]
        },
        {
          id: "t3-g8",
          range: "Question 40",
          instruction: "Choose the correct letter.",
          type: "mcq",
          questions: [
            { id: "q40", number: 40, type: "mcq", text: "Passage 3 can be described as:", options: ["Strictly scientific text", "Historical article", "Article from a magazine", "Dystopian sketch"], answer: "Article from a magazine" }
          ]
        }
      ]
    }
  ]
};

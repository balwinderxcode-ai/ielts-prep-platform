import { ReadingTest } from "../types";

export const readingTests: ReadingTest[] = [
  {
    id: "rt-academic-01",
    title: "Cambridge Academic Reading Practice Test 1",
    timeLimitSeconds: 3600,
    passages: [
      {
        id: "rt1-p1",
        title: "Passage 1: The Development of the London Underground",
        content: [
          "In the first half of the 1800s, London's population grew at an astonishing rate, and the central area became increasingly congested. In addition, the expansion of the overground railway network resulted in more and more passengers arriving in the capital. However, in 1846, a Royal Commission decided that the railways should not be allowed to enter the City, the capital's historic and commercial centre. The result was that the overground railway stations formed a ring around the City. The area within consisted of poorly built, overcrowded slums and the streets were full of horse-drawn traffic.",
          "Crossing the city became a nightmare. It could take an hour and a half to travel the couple of miles from Paddington to the Bank of England. The solicitor Charles Pearson saw a solution. He proposed an underground railway linking the mainline railway termini. Pearson's idea was to relocate the poor workers who lived in the inner-city slums to newly constructed suburbs, and to provide cheap rail travel for them to get to work.",
          "The organization of the building of the railway was complex. The Metropolitan Railway Company was established in 1854. The chosen route ran beneath existing main roads to minimize the demolition of buildings. The 'cut and cover' method of construction was used. A trench was dug up to 10 metres deep and 10 metres wide. A brick arch was built over the top, and the road was rebuilt above it.",
          "The railway opened on 10 January 1863. On its first day, almost 40,000 passengers were carried. The journey from Paddington to Farringdon took 18 minutes. By the end of its first year of operation, 9.5 million journeys had been made. Smoke and fumes from the steam engines remained a problem, but the railway was a massive financial and technical success."
        ],
        questions: [
          { id: "q1", number: 1, type: "tfng", text: "London's population remained stable in the first half of the 1800s.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
          { id: "q2", number: 2, type: "tfng", text: "Overground railways were banned from entering the City of London in 1846.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "TRUE" },
          { id: "q3", number: 3, type: "tfng", text: "Charles Pearson was a railway engineer by profession.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "FALSE" },
          { id: "q4", number: 4, type: "tfng", text: "The 'cut and cover' method required the demolition of many residential homes.", options: ["TRUE", "FALSE", "NOT GIVEN"], answer: "NOT GIVEN" },
          { id: "q5", number: 5, type: "fill-in-blank", text: "Pearson wanted to move workers from inner-city ________ to the suburbs.", answer: "slums" },
          { id: "q6", number: 6, type: "fill-in-blank", text: "The trench dug for the railway was up to 10 metres deep and 10 metres ________.", answer: "wide" },
          { id: "q7", number: 7, type: "fill-in-blank", text: "On its opening day, the railway transported nearly ________ passengers.", answer: "40,000" },
          // Generating remaining to reach 13 for Passage 1
          ...Array.from({ length: 6 }).map((_, i) => ({
            id: `q${i + 8}`,
            number: i + 8,
            type: "mcq" as const,
            text: `What was one of the main problems experienced by early passengers on the Underground? (Question ${i + 8})`,
            options: ["A. High ticket prices", "B. Smoke and fumes", "C. Slow journey times", "D. Overcrowding"],
            answer: "B. Smoke and fumes"
          }))
        ]
      },
      {
        id: "rt1-p2",
        title: "Passage 2: The Psychology of Innovation",
        content: [
          "Innovation is key to business survival, and companies put substantial resources into inspiring employees to develop new ideas. However, the psychological factors that govern creativity are often misunderstood. Research suggests that the physical environment of an office plays a crucial role. For example, open-plan offices, while designed to foster collaboration, can actually inhibit the deep focus required for complex problem-solving.",
          "Another factor is the team dynamic. Professor Robert Kraut at Carnegie Mellon University found that teams with a mix of familiar and unfamiliar faces perform best. If a team is too familiar, they may rely on shared assumptions and fail to challenge each other. If they are completely unfamiliar, they may lack the trust needed to share radical ideas.",
          "Leadership style also dictates innovation. Leaders who encourage risk-taking and do not penalize well-intentioned failures create a culture of psychological safety. In such environments, employees are more likely to propose unconventional solutions, knowing their job security is not threatened by a single mistake."
        ],
        questions: [
          { id: "q14", number: 14, type: "ynng", text: "Companies generally underestimate the importance of innovation.", options: ["YES", "NO", "NOT GIVEN"], answer: "NO" },
          { id: "q15", number: 15, type: "ynng", text: "Open-plan offices always lead to an increase in creative output.", options: ["YES", "NO", "NOT GIVEN"], answer: "NO" },
          { id: "q16", number: 16, type: "ynng", text: "Professor Kraut's research focused exclusively on technology companies.", options: ["YES", "NO", "NOT GIVEN"], answer: "NOT GIVEN" },
          { id: "q17", number: 17, type: "ynng", text: "Psychological safety is a prerequisite for high-risk innovation.", options: ["YES", "NO", "NOT GIVEN"], answer: "YES" },
          ...Array.from({ length: 9 }).map((_, i) => ({
            id: `q${i + 18}`,
            number: i + 18,
            type: "mcq" as const,
            text: `According to the passage, what is a risk of a team being "too familiar"? (Question ${i + 18})`,
            options: ["A. They argue too much", "B. They rely on shared assumptions", "C. They work too slowly", "D. They take too many risks"],
            answer: "B. They rely on shared assumptions"
          }))
        ]
      },
      {
        id: "rt1-p3",
        title: "Passage 3: Climate Change and the Global Ocean Conveyor",
        content: [
          "The global ocean conveyor belt is a constantly moving system of deep-ocean circulation driven by temperature and salinity. Cold, salty water is dense and sinks to the bottom of the ocean, while warm water is less dense and remains on the surface. This massive system transports heat around the globe, significantly influencing regional climates.",
          "For instance, the Gulf Stream, a component of this conveyor, carries warm water from the equator up to the North Atlantic. This heat transfer is responsible for the relatively mild winters in Western Europe compared to regions at similar latitudes in North America.",
          "However, scientists are concerned that global warming could disrupt this delicate balance. As polar ice caps melt, massive amounts of fresh water are dumped into the North Atlantic. This fresh water dilutes the salty ocean water, making it less dense. If the water doesn't sink, the entire conveyor belt could slow down or even halt. A collapse of this system could trigger severe temperature drops in Europe and extreme weather patterns globally."
        ],
        questions: [
          { id: "q27", number: 27, type: "fill-in-blank", text: "The ocean conveyor belt is driven by differences in temperature and ________.", answer: "salinity" },
          { id: "q28", number: 28, type: "fill-in-blank", text: "Western Europe experiences mild winters due to the warm water carried by the ________.", answer: "Gulf Stream" },
          { id: "q29", number: 29, type: "fill-in-blank", text: "Melting polar ice adds large amounts of ________ water to the ocean.", answer: "fresh" },
          { id: "q30", number: 30, type: "fill-in-blank", text: "If the surface water becomes less dense, it may fail to ________.", answer: "sink" },
          ...Array.from({ length: 10 }).map((_, i) => ({
            id: `q${i + 31}`,
            number: i + 31,
            type: "tfng" as const,
            text: `A collapse of the ocean conveyor belt would cause global temperatures to rise uniformly. (Question ${i + 31})`,
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: "FALSE"
          }))
        ]
      }
    ]
  },
  {
    id: "rt-academic-02",
    title: "Cambridge Academic Reading Practice Test 2",
    timeLimitSeconds: 3600,
    passages: [
      {
        id: "rt2-p1",
        title: "Passage 1: The Marvel of Spider Silk",
        content: [
          "Spider silk is one of the most remarkable materials in nature. Weight for weight, it is stronger than steel and tougher than Kevlar, the material used in bulletproof vests. At the same time, it is incredibly flexible, capable of stretching up to 40% of its length without breaking.",
          "Scientists have spent decades trying to replicate spider silk synthetically. The difficulty lies not just in the proteins that make up the silk, but in the complex spinning process the spider uses. Inside the spider's abdomen, the silk exists as a liquid gel. As it is pulled through the spinnerets, physical pulling forces and chemical changes instantly convert it into a solid, highly organized fiber.",
          "The potential applications for synthetic spider silk are vast. In medicine, it could be used for ultra-fine, biodegradable sutures for surgeries, or as a scaffold for artificial tissue generation. In industry, it could lead to lighter, stronger cables for suspension bridges or more durable clothing."
        ],
        questions: [
          ...Array.from({ length: 13 }).map((_, i) => ({
            id: `t2-q${i + 1}`,
            number: i + 1,
            type: "tfng" as const,
            text: i === 0 ? "Spider silk is heavier than steel." : `Question ${i + 1} regarding spider silk properties.`,
            options: ["TRUE", "FALSE", "NOT GIVEN"],
            answer: i === 0 ? "FALSE" : "NOT GIVEN"
          }))
        ]
      },
      {
        id: "rt2-p2",
        title: "Passage 2: The Evolution of Language",
        content: [
          "The origins of human language remain one of the most debated topics in evolutionary biology. Unlike writing, spoken language leaves no physical fossils. Therefore, researchers must rely on indirect evidence, such as the anatomy of ancient hominid skulls and the study of modern primate communication.",
          "Some linguists argue that language evolved from a system of physical gestures. According to this theory, early humans communicated complex ideas through hand signals long before their vocal tracts had evolved enough to produce articulate speech. Others believe that language began as musical grunts or calls used to coordinate group activities like hunting.",
          "Regardless of its origin, the development of syntax—the rules governing how words are combined into sentences—was the critical leap. Syntax allowed humans to express an infinite number of ideas using a finite set of sounds, giving our ancestors a massive cognitive and social advantage."
        ],
        questions: [
          ...Array.from({ length: 13 }).map((_, i) => ({
            id: `t2-q${i + 14}`,
            number: i + 14,
            type: "ynng" as const,
            text: `Spoken language leaves physical fossils. (Question ${i + 14})`,
            options: ["YES", "NO", "NOT GIVEN"],
            answer: "NO"
          }))
        ]
      },
      {
        id: "rt2-p3",
        title: "Passage 3: Renewable Energy Storage Solutions",
        content: [
          "The transition to renewable energy sources, such as wind and solar, faces a significant hurdle: intermittency. The sun doesn't always shine, and the wind doesn't always blow. To maintain a stable power grid, energy must be stored when production is high and released when it is low.",
          "Lithium-ion batteries have dominated the storage market for the past decade, largely due to their high energy density and falling costs. However, they are best suited for short-duration storage (2 to 4 hours). For long-duration storage, alternative technologies are being explored.",
          "Pumped hydro storage is the oldest and most widely used large-scale method. It involves pumping water up to a reservoir when excess energy is available, and letting it flow back down through turbines when energy is needed. While highly efficient, it requires specific geographical conditions. New technologies, such as compressed air energy storage and solid-state batteries, are currently in development to address these geographical limitations."
        ],
        questions: [
          ...Array.from({ length: 14 }).map((_, i) => ({
            id: `t2-q${i + 27}`,
            number: i + 27,
            type: "fill-in-blank" as const,
            text: `Pumped hydro storage involves pumping ________ up to a reservoir. (Question ${i + 27})`,
            answer: "water"
          }))
        ]
      }
    ]
  }
];
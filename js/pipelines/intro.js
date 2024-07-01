import { AUTHORS, NODE_TYPES, WAIT_TIME } from "../const.js";

export const actions = [
  {
    id: "userGreetings-neutral",
    content: "Ciao",
  },
  {
    id: "userGreetings-positive",
    content: "Ciao 👋",
  },
  {
    id: "userGreetings-negative",
    content: "Che noia 😴",
  },
  {
    id: "soCool-positive",
    content: "Figata 🤯",
  },
  {
    id: "whyIAmHere-negative",
    content: "Perchè sono qui?",
  },
  {
    id: "pleasure-neutral",
    content: "Piacere",
  },
  {
    id: "userComing-positive",
    content: "Certo che ci sono",
  },
  {
    id: "userComing-neutral",
    content: "👍",
  },
  {
    id: "userComing-negative",
    content: "No, purtroppo",
  },
  {
    id: "stayLonger-neutral",
    content: "Si può fare",
  },
  {
    id: "stayLonger-negative",
    content: "No mi dispiace, devo scappare",
  },
  {
    id: "stayLonger-positive",
    content: "Ok, fammi vedere che sai fare",
  },
];

export const intro = [
  {
    author: AUTHORS.AI,
    id: "oh",
    nexts: ["embarassed"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Oh!",
    },
  },
  {
    author: AUTHORS.AI,
    id: "embarassed",
    nexts: ["greetings"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "😅",
    },
  },
  {
    author: AUTHORS.AI,
    id: "greetings",
    nexts: ["userGreetings-neutral", "userGreetings-positive", "userGreetings-negative"],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Ciao! 🤗",
    },
  },
  {
    author: AUTHORS.USER,
    id: "userGreetings-neutral",
    nexts: ["meetingSomeone-neutral"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "Ciao",
    },
  },
  {
    author: AUTHORS.AI,
    id: "meetingSomeone-neutral",
    nexts: ["weCanDoBetter"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Speravo in un primo incontro più spettacolare",
    },
  },
  {
    author: AUTHORS.AI,
    id: "weCanDoBetter",
    nexts: ["presentation"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Ma adesso che ci siamo",
    },
  },
  {
    author: AUTHORS.AI,
    id: "presentation",
    nexts: ["iAmQualìta"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Piacere!",
    },
  },
  {
    author: AUTHORS.AI,
    id: "iAmQualìta",
    nexts: ["soCool-positive", "whyIAmHere-negative", "pleasure-neutral"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Io sono Qualìta",
    },
  },
  {
    author: AUTHORS.USER,
    id: "soCool-positive",
    nexts: ["melting"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "Figata 🤯",
    },
  },
  {
    author: AUTHORS.AI,
    id: "melting",
    nexts: ["funnyRight"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "🫠",
    },
  },
  {
    author: AUTHORS.AI,
    id: "funnyRight",
    nexts: ["cantWait"],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: "È divertente vero?",
    },
  },
  {
    author: AUTHORS.AI,
    id: "cantWait",
    nexts: ["toTheSparkathon"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Non vedo l'ora che arrivi sabato",
    },
  },
  {
    author: AUTHORS.AI,
    id: "toTheSparkathon",
    nexts: ["sparkathonLove"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "per lo Sparkathon, ovviamente",
    },
  },
  {
    author: AUTHORS.AI,
    id: "sparkathonLove",
    nexts: ["userComing"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "🤩😍🤩",
    },
  },
  {
    author: AUTHORS.AI,
    id: "userComing",
    nexts: ["userComing-positive", "userComing-neutral", "userComing-negative"],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Anche tu parteciperai?",
    },
  },
  {
    author: AUTHORS.USER,
    id: "userComing-positive",
    nexts: ["meetIRL"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "Certo che ci sono",
    },
  },
  {
    author: AUTHORS.AI,
    id: "meetIRL",
    nexts: ["awesome"],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Potremmo conoscerci dal vivo",
    },
  },
  {
    author: AUTHORS.AI,
    id: "awesome",
    // TODO
    nexts: ["userValuePipeline", "userHrPipeline"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "È stupendo",
    },
  },
  {
    author: AUTHORS.USER,
    id: "userComing-neutral",
    nexts: ["meetIRLBored"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "👍",
    },
  },
  {
    author: AUTHORS.AI,
    id: "meetIRLBored",
    nexts: ["sawSubjects"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Allora ci conosceremo dal vivo",
    },
  },
  {
    author: AUTHORS.AI,
    id: "sawSubjects",
    // TODO
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Hai già guardato i programmi delle varie tracce?",
    },
  },
  {
    author: AUTHORS.USER,
    id: "userComing-negative",
    nexts: ["tooBad"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "No, purtroppo",
    },
  },
  {
    author: AUTHORS.AI,
    id: "tooBad",
    nexts: ["niceToMeetYouIRL"],
    waitTime: 500,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Che peccato",
    },
  },
  {
    author: AUTHORS.AI,
    id: "niceToMeetYouIRL",
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Mi sarebbe piaciuto conoscerti",
    },
  },
  {
    author: AUTHORS.USER,
    id: "whyIAmHere-negative",
    nexts: ["dunno"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "Che ci faccio qui? 👀",
    },
  },
  {
    author: AUTHORS.AI,
    id: "dunno",
    nexts: ["maybeYouClickedWrong"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "🤷‍♀️",
    },
  },
  {
    author: AUTHORS.AI,
    id: "maybeYouClickedWrong",
    nexts: ["nicePlace"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Forse hai cliccato il link sbagliato",
    },
  },
  {
    author: AUTHORS.AI,
    id: "nicePlace",
    nexts: ["stayLonger"],
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Ad ogni modo, sembra proprio un posto interessante qui",
    },
  },
  {
    author: AUTHORS.AI,
    id: "stayLonger",
    nexts: ["stayLonger-neutral", "stayLonger-negative", "stayLonger-positive"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Perché non ti fermi qualche altro minuto?",
    },
  },
  {
    author: AUTHORS.USER,
    id: "stayLonger-neutral",
    // TODO
    content: {
      type: NODE_TYPES.TEXT,
      content: "Si può fare",
    },
  },
  {
    author: AUTHORS.USER,
    id: "stayLonger-negative",
    // TODO
    // !EXIT
    content: {
      type: NODE_TYPES.TEXT,
      content: "No mi dispiace, devo scappare",
    },
  },
  {
    author: AUTHORS.USER,
    id: "stayLonger-positive",
    // TODO
    content: {
      type: NODE_TYPES.TEXT,
      content: "Ok, fammi vedere che sai fare",
    },
  },
  {
    author: AUTHORS.USER,
    id: "pleasure-neutral",
    nexts: ["cantWait"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Piacere",
    },
  },
  {
    author: AUTHORS.USER,
    id: "userGreetings-positive",
    nexts: ["niceVibe"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Ciao 👋",
    },
  },
  {
    author: AUTHORS.AI,
    id: "niceVibe",
    nexts: ["presentation"],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Che bella energia",
    },
  },
  {
    author: AUTHORS.USER,
    id: "userGreetings-negative",
    nexts: ["maybeYouClickedWrong"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "Che noia 😴",
    },
  },
];
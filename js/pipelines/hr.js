import { AUTHORS, NODE_TYPES, WAIT_TIME } from "../const.js";

export const actions = [
  {
    id: "knowNothing",
    content: "Non so nulla di AI",
  },
  {
    id: "prepareSomething",
    content: "Devo preparare qualcosa?",
  },
  {
    id: "who",
    content: "Ma in questo team chi troverò? 🤌🏻",
  },
  {
    id: "goodAtCSS",
    content: "Chi sono gli altri?",
  },
  {
    id: "technologies",
    content: "Ma quali tecnologie utilizzeremo?! 😱",
  },
];

export const hr = [
  {
    author: AUTHORS.AI,
    id: "hrPipeline",
    nexts: ["noFear"],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Nell'impresa di costruirmi non sarai solo/a!",
    },
  },
  {
    author: AUTHORS.AI,
    id: "noFear",
    nexts: ["noProblems"],
    waitTime: WAIT_TIME.XL,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Non avere paura delle complessità che potranno esserci 🫂",
    },
  },
  {
    author: AUTHORS.AI,
    id: "noProblems",
    nexts: ["knowNothing"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Insieme al team che stiamo costruendo non avrai problemi a lavorare a questo progetto 🙌🏻",
    },
  },
  {
    author: AUTHORS.USER,
    id: "knowNothing",
    nexts: ["usEither"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Ma io non so assolutamente nulla di intelligenza artificiale 🤖",
    },
  },
  {
    author: AUTHORS.AI,
    id: "usEither",
    nexts: ["onlyCoders"],
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Neanche noi siamo esperti di IA e non serve che tu lo sia ✅",
    },
  },
  {
    author: AUTHORS.AI,
    id: "onlyCoders",
    nexts: ["prepareSomething", "who", "technologies"],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Siamo solo coders che vogliono toccare con mano questa rivoluzione tecnologica e quello che serve è la passione e la voglia di fare 👨🏻‍💻👩🏻‍💻",
    },
  },
  {
    author: AUTHORS.USER,
    id: "prepareSomething",
    //TODO: Connect Event Pipeline
    nexts: ["eventPipeline"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Ma io devo preparare qualcosa? Ad esempio un modello? 📑",
    },
  },
  {
    author: AUTHORS.USER,
    id: "who",
    nexts: ["ourMentor"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Ma in questo team chi troverò? 🤌🏻",
    },
  },
  {
    author: AUTHORS.AI,
    id: "ourMentor",
    nexts: ["goodAtCSS"],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Ogni gruppo avrà un mentor ed il nostro sarà Emiliano Morghen, ma non è solo! 🏄🏻‍♂️",
    },
  },
  {
    author: AUTHORS.USER,
    id: "goodAtCSS",
    nexts: ["ourCoMentor"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "So che è fortissimo con il CSS! Chi sono gli altri?",
    },
  },
  {
    author: AUTHORS.AI,
    id: "ourCoMentor",
    nexts: ["prepareSomething"],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Giulio Bracci e Brian Atzori, il nostro porta borracce!🥤",
    },
  },
  {
    author: AUTHORS.USER,
    id: "technologies",
    // TODO: Connect DX Pipeline
    nexts: ["techPipeline"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Ma quali tecnologie utilizzeremo?! 😱",
    },
  },
];

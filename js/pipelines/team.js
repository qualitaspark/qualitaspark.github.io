import { AUTHORS, NODE_TYPES, WAIT_TIME } from "../const.js";

export const actions = [
  {
    id: "downloadSomething",
    content: "Devo scaricare qualcosa?",
  },
  {
    id: "whatContain",
    content: "Cosa conterrà?",
  },
  {
    id: "ifIJoin",
    content: "Di cosa mi occuperei? 🤔",
  },
  {
    id: "technologies",
    content: "Ma quali tecnologie utilizzeremo?! 😱",
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
    id: "howToContribute",
    content: "Posso proporre qualcosa?",
  },
];

export const team = [
  {
    author: AUTHORS.AI,
    id: "teamPipeline",
    nexts: ["thinkAboutIt"],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Non ti devi preoccupare di nulla!",
    },
  },
  {
    author: AUTHORS.AI,
    id: "thinkAboutIt",
    nexts: ["downloadSomething"],
    waitTime: WAIT_TIME.XL,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Tu porta la voglia di fare, al resto pensiamo noi! 🫶🏻",
    },
  },
  {
    author: AUTHORS.USER,
    id: "downloadSomething",
    nexts: ["starterKit"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Devo scaricare qualche SDK o altro? ⬇️",
    },
  },
  {
    author: AUTHORS.AI,
    id: "starterKit",
    nexts: ["whatContain"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "No, come anticipato stiamo preparando uno starter kit per il giorno dell'hackaton! 🧰",
    },
  },
  {
    author: AUTHORS.USER,
    id: "whatContain",
    nexts: ["repository"],
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Wow e cosa conterrà? 🤓",
    },
  },
  {
    author: AUTHORS.AI,
    id: "repository",
    nexts: ["kitContent"],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Si tratterà di un repository GitLab che ti verrà fornito qualche giorno prima dell'evento! 🛠️",
    },
  },
  {
    author: AUTHORS.AI,
    id: "kitContent",
    nexts: ["eventDay"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Al suo interno troverai i data sources necessari, le info necessarie come le key ai servizi esterni e dei progetti buildabili 🏗️",
    },
  },
  {
    author: AUTHORS.AI,
    id: "eventDay",
    nexts: ["technologies", "ifIJoin"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "In questo modo, il giorno dell'hackaton dovrai solo presentarti e iniziare a scrivere codice con noi! 👨🏻‍💻👩🏻‍💻",
    },
  },
  {
    author: AUTHORS.USER,
    id: "technologies",
    nexts: ["techPipeline"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Ma quali tecnologie utilizzeremo?! 😱",
    },
  },
  {
    author: AUTHORS.USER,
    id: "ifIJoin",
    nexts: ["decideTogether"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Se decidessi di unirmi a voi, di cosa mi occuperei? 🤔",
    },
  },
  {
    author: AUTHORS.AI,
    id: "decideTogether",
    nexts: ["preparationWeek"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Beh ma questo lo decideremo insieme! 🫱🏼‍🫲🏽",
    },
  },
  {
    author: AUTHORS.AI,
    id: "preparationWeek",
    nexts: ["who"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Nel corso di questa settimana decideremo insieme come suddividere il team e i compiti, in preparazione all'hackaton 🏁",
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
    id: "howToContribute",
    nexts: ["moreContributes"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Ma io posso proporre qualcosa? Come posso contribuire? 🤩",
    },
  },
  {
    author: AUTHORS.AI,
    id: "moreContributes",
    nexts: ["hrPipeline"],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Certo! Abbiamo bisogno di più contributi possibili per mettermi in piedi! 👷🏻👷🏼‍♂️",
    },
  },
];

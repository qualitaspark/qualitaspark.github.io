import { AUTHORS, NODE_TYPES, WAIT_TIME } from "../const.js";
export const actions = [
  {
    id: "iWantToKnowAllTheStack",
    content: "Stack completo! 🤯",
  },
  {
    id: "doIHaveToStudy",
    content: "Devo studiare? 🙀",
  },
  {
    id: "prepareSomethingForMyLocal",
    content: "Devo installare qualcosa? 🤔",
  },
  {
    id: "canIJoinIfNoReact",
    content: "Posso unirmi all'avventura anche se non conosco React? 🫠",
  },
  {
    id: "canIProposeStackAdditions",
    content: "Ma...Posso proporre qualche aggiunta allo stack?",
  },
];

export const developerExperience = [
  {
    author: AUTHORS.AI,
    id: "developerExperiencePipeline",
    nexts: ["trandyTechnologyUsage"],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Sarà bellissimo costruirmi! 😚",
    },
  },
  {
    author: AUTHORS.AI,
    id: "trandyTechnologyUsage",
    nexts: ["reactLovesNest"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Useremo le tecnologie più all'avanguardia",
    },
  },
  {
    author: AUTHORS.AI,
    id: "reactLovesNest",
    nexts: ["butThatsNotAll"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "React per il nostro Frontend 👗 e NestJS per il nostro backend ⚙️",
    },
  },
  {
    author: AUTHORS.AI,
    id: "butThatsNotAll",
    nexts: [
      "iWantToKnowAllTheStack",
      "doIHaveToStudy",
      "prepareSomethingForMyLocal",
    ],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Ma non solo...😇",
    },
  },
  {
    author: AUTHORS.USER,
    id: "iWantToKnowAllTheStack",
    nexts: ["completeStack-1"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Datemi lo stack completo! 🤯",
    },
  },
  {
    author: AUTHORS.USER,
    id: "doIHaveToStudy",
    nexts: ["No"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Devo studiare? 🙀",
    },
  },
  {
    author: AUTHORS.USER,
    id: "prepareSomethingForMyLocal",
    nexts: ["No"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "Devo preparare qualcosa per il mio ambiente locale? 🤔",
    },
  },
  {
    author: AUTHORS.AI,
    id: "No",
    nexts: ["weWillLearnTogether"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "No, non è necessario. 😊",
    },
  },
  {
    author: AUTHORS.AI,
    id: "weWillLearnTogether",
    nexts: ["langchain"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Impareremo insieme, partendo da uno starter kit costruito appositamente per rendere il processo più smooth possibile 😻 🤗",
    },
  },
  {
    author: AUTHORS.AI,
    id: "langchain",
    nexts: ["iWantToKnowAllTheStack"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Useremo Langchain per interfacciarci con OpeanAI 🌍 e costruirmi!",
    },
  },
  {
    author: AUTHORS.AI,
    id: "completeStack-1",
    nexts: ["completeStack-2"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "🔥 Typescript",
    },
  },
  {
    author: AUTHORS.AI,
    id: "completeStack-2",
    nexts: ["completeStack-3"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "⛓️ Langchain",
    },
  },
  {
    author: AUTHORS.AI,
    id: "completeStack-3",
    nexts: ["completeStack-4"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "🟣 Chroma DB",
    },
  },
  {
    author: AUTHORS.AI,
    id: "completeStack-4",
    nexts: ["completeStack-6"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "🔵 React",
    },
  },
  {
    author: AUTHORS.AI,
    id: "completeStack-6",
    nexts: ["canIProposeStackAdditions"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "🔴 Nest JS",
    },
  },
  {
    author: AUTHORS.USER,
    id: "canIProposeStackAdditions",
    nexts: ["ofCourse"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "Ma...Posso proporre qualche aggiunta allo stack?",
    },
  },
  {
    author: AUTHORS.AI,
    id: "ofCourse",
    nexts: ["canIJoinIfNoReact"],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Certo! Siamo sempre aperti a nuove idee e miglioramenti 😊",
    },
  },
  {
    author: AUTHORS.USER,
    id: "canIJoinIfNoReact",
    nexts: ["noReactNoProblem"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "Posso unirmi all'avventura anche se non conosco React? 🫠",
    },
  },
  {
    author: AUTHORS.AI,
    id: "noReactNoProblem",
    nexts: ["weAreSorryForYourTimeWIthoutReact"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Certo! Non è obbligatorio conoscere React per unirti a noi. \n ",
    },
  },
  {
    author: AUTHORS.AI,
    id: "weAreSorryForYourTimeWIthoutReact",
    nexts: ["trollFace"],
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Ci dispiace che tu non abbia mai usato questo framework superiore™️🌶️, ma non preoccuparti, avremo modo di rimediare! 😊",
    },
  },
  {
    author: AUTHORS.AI,
    id: "trollFace",
    nexts: ["canIJoinIfNoReactRes"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.IMG,
      content: "./../../assets/images/Trollface_non-free.png",
    },
  },
  {
    author: AUTHORS.AI,
    id: "trollFace",
    nexts: ["canIJoinIfNoReactRes"],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.IMG,
      content: "./../../assets/images/Trollface_non-free.png",
    },
  },
  // TODO: NEXT PIPELINE
];

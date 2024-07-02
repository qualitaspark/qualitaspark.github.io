import { AUTHORS, NODE_TYPES, WAIT_TIME } from '../const.js';

export const actions = [
  {
    id: 'exit.userExitPipeline-positive',
    content: 'È stato bello, voglio unirmi 🎉',
  },
  {
    id: 'exit.userExitPipeline-negative',
    content: 'In bocca al lupo 🐺',
  },
  {
    id: 'exit.userExitPipeline-neutral',
    content: 'Non so se mi candiderò 🤔',
  },
];

export const exit = [
  {
    author: AUTHORS.USER,
    id: 'exit.userExitPipeline-positive',
    nexts: ['exit.exitPipeline-positive'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'È stato bello, voglio unirmi 🎉',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'exit.userExitPipeline-negative',
    nexts: ['exit.exitPipeline-negative'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'In bocca al lupo 🐺',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'exit.userExitPipeline-neutral',
    nexts: ['exit.exitPipeline-neutral'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Non so se mi candiderò 🤔',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'exit.exitPipeline-positive',
    nexts: ['exit.gladToFun'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Sono contenta',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'exit.gladToFun',
    nexts: ['exit.love'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Davvero',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'exit.love',
    nexts: ['exit.thisIsAnIdea'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: '❤️🔥',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'exit.thisIsAnIdea',
    nexts: ['exit.makeItHappen'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Questa è solo un'idea",
    },
  },
  {
    author: AUTHORS.AI,
    id: 'exit.makeItHappen',
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: `Clicca sul bottone arancione e realizziamola insieme 👊`,
    },
  },
  {
    author: AUTHORS.AI,
    id: 'exit.exitPipeline-negative',
    nexts: ['exit.theButton'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Grazie per avermi dedicato questi minuti',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'exit.theButton',
    nexts: ['exit.embarassed'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Il bottone per candidarsi?',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'exit.embarassed',
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: '🙈🙈🙈',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'exit.itsTheOrangeOne',
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'È quello arancio, in basso a destra 😬',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'exit.exitPipeline-neutral',
    nexts: ['exit.youKnow'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Se te lo stai chiedendo',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'exit.youKnow',
    waitTime: WAIT_TIME.M,
    nexts: ['exit.thisIsAnIdea'],
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Sai già qual è la risposta giusta per te',
    },
  },
];

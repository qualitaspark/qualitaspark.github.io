import { AUTHORS, NODE_TYPES, WAIT_TIME } from '../const.js';
import { corePipelinesActions, corePipelinesMessages } from './core.js';

export const actions = [
  {
    id: 'team.downloadSomething',
    content: 'Devo scaricare qualcosa?',
  },
  {
    id: 'team.whatContain',
    content: 'Cosa conterrà?',
  },
  {
    id: 'team.ifIJoin',
    content: 'Di cosa mi occuperei? 🤔',
  },
  {
    id: 'team.who',
    content: 'Ma in questo team chi troverò? 🤌🏻',
  },
  {
    id: 'team.goodAtCSS',
    content: 'Chi sono gli altri?',
  },
  {
    id: 'team.howToContribute',
    content: 'Posso proporre qualcosa?',
  },
];

export const team = [
  {
    author: AUTHORS.AI,
    id: 'team.teamPipeline',
    nexts: ['team.thinkAboutIt'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Non ti devi preoccupare di nulla!',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'team.thinkAboutIt',
    nexts: ['team.downloadSomething'],
    waitTime: WAIT_TIME.XL,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Tu porta la voglia di fare, al resto pensiamo noi! 🫶🏻',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'team.downloadSomething',
    nexts: ['team.starterKit'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Devo scaricare qualche SDK o altro? ⬇️',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'team.starterKit',
    nexts: ['team.whatContain'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "No, come anticipato stiamo preparando uno starter kit per il giorno dell'hackaton! 🧰",
    },
  },
  {
    author: AUTHORS.USER,
    id: 'team.whatContain',
    nexts: ['team.repository'],
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Wow e cosa conterrà? 🤓',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'team.repository',
    nexts: ['team.kitContent'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Si tratterà di un repository GitLab che ti verrà fornito qualche giorno prima dell'evento! 🛠️",
    },
  },
  {
    author: AUTHORS.AI,
    id: 'team.kitContent',
    nexts: ['team.eventDay'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Al suo interno troverai i data sources necessari, le info necessarie come le key ai servizi esterni e dei progetti buildabili 🏗️',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'team.eventDay',
    nexts: ['team.technologies', 'team.ifIJoin'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "In questo modo, il giorno dell'hackaton dovrai solo presentarti e iniziare a scrivere codice con noi! 👨🏻‍💻👩🏻‍💻",
    },
  },
  {
    author: AUTHORS.USER,
    id: 'team.technologies',
    nexts: ['dx.dxPipeline'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Ma quali tecnologie utilizzeremo?! 😱',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'team.ifIJoin',
    nexts: ['team.decideTogether'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Se decidessi di unirmi a voi, di cosa mi occuperei? 🤔',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'team.decideTogether',
    nexts: ['team.preparationWeek'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Beh ma questo lo decideremo insieme! 🫱🏼‍🫲🏽',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'team.preparationWeek',
    nexts: ['team.who'],
    waitTime: WAIT_TIME.XL,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        "Nel corso di questa settimana decideremo insieme come suddividere il team e i compiti, in preparazione all'hackaton 🏁",
    },
  },
  {
    author: AUTHORS.USER,
    id: 'team.who',
    nexts: ['team.ourMentor'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Ma in questo team chi troverò? 🤌🏻',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'team.ourMentor',
    nexts: ['team.goodAtCSS'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Ogni gruppo avrà un mentor ed il nostro sarà Emiliano Morghen, ma non è solo! 🏄🏻‍♂️',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'team.goodAtCSS',
    nexts: ['team.ourCoMentor'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'So che è fortissimo con il CSS! Chi sono gli altri?',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'team.ourCoMentor',
    nexts: ['hr.userHrPipeline'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Giulio Bracci e Brian Atzori, il nostro porta borracce!🥤',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'team.howToContribute',
    nexts: ['team.moreContributes'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Ma io posso proporre qualcosa? Come posso contribuire? 🤩',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'team.moreContributes',
    nexts: ['hr.hrPipeline'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Certo! Abbiamo bisogno di più contributi possibili per mettermi in piedi! 👷🏻👷🏼‍♂️',
    },
  },
];

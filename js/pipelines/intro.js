import { AUTHORS, NODE_TYPES, WAIT_TIME } from '../const.js';

export const actions = [
  {
    id: 'intro.userGreetings-neutral',
    content: 'Ciao',
  },
  {
    id: 'intro.userGreetings-positive',
    content: 'Ciao 👋',
  },
  {
    id: 'intro.userGreetings-negative',
    content: 'Che noia 😴',
  },
  {
    id: 'intro.soCool-positive',
    content: 'Figata 🤯',
  },
  {
    id: 'intro.whyIAmHere-negative',
    content: 'Perchè sono qui?',
  },
  {
    id: 'intro.pleasure-neutral',
    content: 'Piacere',
  },
  {
    id: 'intro.userComing-positive',
    content: 'Certo che ci sono',
  },
  {
    id: 'intro.userComing-neutral',
    content: '👍',
  },
  {
    id: 'intro.userComing-negative',
    content: 'No, purtroppo',
  },
  {
    id: 'intro.stayLonger-neutral',
    content: 'Si può fare',
  },
  {
    id: 'intro.stayLonger-negative',
    content: 'No mi dispiace, devo scappare',
  },
  {
    id: 'intro.stayLonger-positive',
    content: 'Ok, fammi vedere che sai fare',
  },
];

export const intro = [
  {
    author: AUTHORS.AI,
    id: 'intro.oh',
    nexts: ['intro.embarassed'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Oh!',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.embarassed',
    nexts: ['intro.greetings'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: '😅',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.greetings',
    nexts: [
      'intro.userGreetings-neutral',
      'intro.userGreetings-positive',
      'intro.userGreetings-negative',
    ],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Ciao! 🤗',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'intro.userGreetings-neutral',
    nexts: ['intro.meetingSomeone-neutral'],
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Ciao',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.meetingSomeone-neutral',
    nexts: ['intro.weCanDoBetter'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Speravo in un primo incontro più spettacolare',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.weCanDoBetter',
    nexts: ['intro.presentation'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Ma adesso che ci siamo',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.presentation',
    nexts: ['intro.iAmQualìta'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Piacere!',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.iAmQualìta',
    nexts: [
      'intro.soCool-positive',
      'intro.whyIAmHere-negative',
      'intro.pleasure-neutral',
    ],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Io sono Qualìta',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'intro.soCool-positive',
    nexts: ['intro.melting'],
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Figata 🤯',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.melting',
    nexts: ['intro.funnyRight'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: '🫠',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.funnyRight',
    nexts: ['intro.cantWait'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'È divertente vero?',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.cantWait',
    nexts: ['intro.toTheSparkathon'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Non vedo l'ora che arrivi sabato",
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.toTheSparkathon',
    nexts: ['intro.sparkathonLove'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'per lo Sparkathon, ovviamente',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.sparkathonLove',
    nexts: ['intro.userComing'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: '🤩😍🤩',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.userComing',
    nexts: [
      'intro.userComing-positive',
      'intro.userComing-neutral',
      'intro.userComing-negative',
    ],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Anche tu parteciperai?',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'intro.userComing-positive',
    nexts: ['intro.meetIRL'],
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Certo che ci sono',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.meetIRL',
    nexts: ['intro.awesome'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Potremmo conoscerci dal vivo',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.awesome',
    // TODO
    nexts: [
      'value.userValuePipeline',
      'hr.userHrPipeline',
      'dx.userDxPipeline',
    ],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'È stupendo',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'intro.userComing-neutral',
    nexts: ['intro.meetIRLBored'],
    content: {
      type: NODE_TYPES.TEXT,
      content: '👍',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.meetIRLBored',
    nexts: ['intro.sawSubjects'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Allora ci conosceremo dal vivo',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.sawSubjects',
    // TODO
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Hai già guardato i programmi delle varie tracce?',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'intro.userComing-negative',
    nexts: ['intro.tooBad'],
    content: {
      type: NODE_TYPES.TEXT,
      content: 'No, purtroppo',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.tooBad',
    nexts: ['intro.niceToMeetYouIRL'],
    waitTime: 500,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Che peccato',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.niceToMeetYouIRL',
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Mi sarebbe piaciuto conoscerti',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'intro.whyIAmHere-negative',
    nexts: ['intro.dunno'],
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Che ci faccio qui? 👀',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.dunno',
    nexts: ['intro.maybeYouClickedWrong'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: '🤷‍♀️',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.maybeYouClickedWrong',
    nexts: ['intro.nicePlace'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Forse hai cliccato il link sbagliato',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.nicePlace',
    nexts: ['intro.stayLonger'],
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Ad ogni modo, sembra proprio un posto interessante qui',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.stayLonger',
    nexts: [
      'intro.stayLonger-neutral',
      'stayLonger-negative',
      'stayLonger-positive',
    ],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Perché non ti fermi qualche altro minuto?',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'intro.stayLonger-neutral',
    nexts: ['value.valuePipeline'],
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Si può fare',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'intro.stayLonger-negative',
    nexts: ['exit.exitPipeline'],
    // !EXIT
    content: {
      type: NODE_TYPES.TEXT,
      content: 'No mi dispiace, devo scappare',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'intro.stayLonger-positive',
    nexts: ['value.valuePipeline'],
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Ok, fammi vedere che sai fare',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'intro.pleasure-neutral',
    nexts: ['intro.cantWait'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Piacere',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'intro.userGreetings-positive',
    nexts: ['intro.niceVibe'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Ciao 👋',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'intro.niceVibe',
    nexts: ['intro.presentation'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Che bella energia',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'intro.userGreetings-negative',
    nexts: ['intro.maybeYouClickedWrong'],
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Che noia 😴',
    },
  },
];

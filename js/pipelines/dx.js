import { AUTHORS, NODE_TYPES, WAIT_TIME } from '../const.js';
export const actions = [
  {
    id: 'dx.iWantToKnowAllTheStack',
    content: 'Stack completo? 🤓',
  },
  {
    id: 'dx.doIHaveToStudy',
    content: 'Devo studiare? 🙀',
  },
  {
    id: 'dx.prepareSomethingForMyLocal',
    content: 'Devo installare qualcosa? 🤔',
  },
  {
    id: 'dx.canIJoinIfNoReact',
    content: 'Ma se non conosco React? 🫠',
  },
  {
    id: 'dx.canIProposeStackAdditions',
    content: 'Ma...Posso proporre qualche aggiunta allo stack?',
  },
  {
    id: 'dx.gotoHr',
    content: 'Voglio contribuire ma non mi sento sicuro',
  },
];

export const dx = [
  {
    author: AUTHORS.AI,
    id: 'dx.dxPipeline',
    nexts: ['dx.trandyTechnologyUsage'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Sarà bellissimo costruirmi! 😚',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.trandyTechnologyUsage',
    nexts: ['dx.reactLovesNest'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Useremo le tecnologie più all'avanguardia",
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.reactLovesNest',
    nexts: ['dx.butThatsNotAll'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'React per il Frontend 👗 e NestJS per il backend ⚙️',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.butThatsNotAll',
    nexts: [
      'dx.iWantToKnowAllTheStack',
      'dx.doIHaveToStudy',
      'dx.prepareSomethingForMyLocal',
    ],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Ma non solo...😇',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'dx.iWantToKnowAllTheStack',
    nexts: ['dx.completeStack-0'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Stack completo? 🤓',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'dx.doIHaveToStudy',
    nexts: ['dx.No'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Devo studiare? 🙀',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'dx.prepareSomethingForMyLocal',
    nexts: ['dx.No'],
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Devo preparare qualcosa per il mio ambiente locale? 🤔',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.No',
    nexts: ['dx.weWillLearnTogether'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'No, non è necessario. 😊',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.weWillLearnTogether',
    nexts: ['dx.langchain'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Impareremo insieme, partendo da uno starter kit costruito appositamente per rendere il processo più smooth possibile 😻 🤗',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.langchain',
    nexts: ['dx.iWantToKnowAllTheStack'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Useremo Langchain per interfacciarci con OpeanAI 🌍 e rendermi intelligente!',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.completeStack-0',
    nexts: ['dx.completeStack-0-meme'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Curiosone...🤪',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.completeStack-0-meme',
    nexts: ['dx.completeStack-0-ok'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.IMGS,
      classes: ['bubble-img'],
      content: [
        {
          type: NODE_TYPES.IMG,
          content: './../../assets/images/29xp-meme-articleLarge-v3.webp',
        },
      ],
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.completeStack-0-ok',
    nexts: ['dx.completeStack-1'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Eh va bene...😅.\n Tiè.\n Beccate.\n Guarda che robetta che acchittiamo:',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.completeStack-1',
    nexts: ['dx.completeStack-2'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: '🔥 Typescript',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.completeStack-2',
    nexts: ['dx.completeStack-3'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: '⛓️ Langchain',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.completeStack-3',
    nexts: ['dx.completeStack-4'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: '🟣 Chroma DB',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.completeStack-4',
    nexts: ['dx.completeStack-6'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: '🔵 React',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.completeStack-6',
    nexts: ['dx.canIProposeStackAdditions', 'dx.canIJoinIfNoReact'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: '🔴 Nest JS',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'dx.canIProposeStackAdditions',
    nexts: ['dx.ofCourse'],
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Posso proporre qualche aggiunta allo stack?',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'dx.canIJoinIfNoReact',
    nexts: ['dx.noReactNoProblem'],
    content: {
      type: NODE_TYPES.TEXT,
      content: 'E se non conosco React? 🫠',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.ofCourse',
    nexts: ['dx.ofCourseAlmost'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Certo! Siamo (quasi) sempre aperti a nuove idee e miglioramenti 😊',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.ofCourseAlmost',
    nexts: ['dx.canIJoinIfNoReact'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Quindi, almeno che tu non voglia proporre jQuery (rispetto, soldato 🫡), se hai qualche idea, non esitare a condividerla con noi! 🖤🚀',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.noReactNoProblem',
    nexts: ['dx.weAreSorryForYourTimeWIthoutReact'],
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Non è obbligatorio conoscere React per unirti a noi ⛪️ ✝️ \n ',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.weAreSorryForYourTimeWIthoutReact',
    nexts: ['dx.trollFace'],
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Ci dispiace che tu non abbia mai usato questo framework superiore™️(🌶️🌶️🌶️), ma non preoccuparti, avremo modo di rimediare! 😊',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.trollFace',
    nexts: ['dx.hihi'],
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.IMGS,
      classes: ['bubble-img'],
      content: [
        {
          type: NODE_TYPES.IMG,
          content: './../../assets/images/Trollface_non-free.png',
        },
      ],
    },
  },
  {
    author: AUTHORS.AI,
    id: 'dx.hihi',
    nexts: ['dx.gotoHr'],
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content: '🤭🤭🤭',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'dx.gotoHr',
    nexts: ['hr.hrPipeline'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Voglio contribuire ma non mi sento sicuro',
    },
  },
];

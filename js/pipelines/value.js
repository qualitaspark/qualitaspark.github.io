import { AUTHORS, NODE_TYPES, WAIT_TIME } from '../const.js';

export const value = [
  {
    author: AUTHORS.AI,
    id: 'valuePipeline',
    nexts: ['usefulAndBeautiful'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Un giorno sarò una vera e propria ChatBOT',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'usefulAndBeautiful',
    nexts: ['thatsWannaBe'],
    waitTime: WAIT_TIME.XL,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Secondo me essere uno strumento potente significa essere utile e soprattutto piacevole da utilizzare',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'thatsWannaBe',
    nexts: ['anExperience'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Ed è proprio questo che vorrei rappresentare',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'anExperience',
    nexts: ['tellMeWhatYouWant'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Vorrei davvero che interagire con me fosse un'esperienza",
    },
  },
  {
    author: AUTHORS.AI,
    id: 'tellMeWhatYouWant',
    nexts: ['improvingTogether'],
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Vorrei che con me gli utenti possano raccontare le proprie idee',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'improvingTogether',
    nexts: ['bigIdeas'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Migliorarle e definirle insieme',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'bigIdeas',
    // TODO
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Secondo me, ogni idea può diventare grande',
    },
  },
];

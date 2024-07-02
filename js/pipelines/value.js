import { AUTHORS, NODE_TYPES, WAIT_TIME } from '../const.js';
import { corePipelinesMessages } from './core.js';

const _corePipelinesMessages = corePipelinesMessages.filter(
  message => message.id !== 'value.userValuePipeline'
);

export const value = [
  {
    author: AUTHORS.AI,
    id: 'value.valuePipeline',
    nexts: ['value.usefulAndBeautiful'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Un giorno sarò una vera e propria ChatBOT',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'value.usefulAndBeautiful',
    nexts: ['value.thatsWannaBe'],
    waitTime: WAIT_TIME.XL,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Essere uno strumento potente significa essere utile e soprattutto piacevole da utilizzare',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'value.thatsWannaBe',
    nexts: ['value.anExperience'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Ed è proprio questo che vorrei rappresentare',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'value.anExperience',
    nexts: ['value.tellMeWhatYouWant'],
    waitTime: WAIT_TIME.M,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Vorrei davvero che interagire con me fosse un'esperienza",
    },
  },
  {
    author: AUTHORS.AI,
    id: 'value.tellMeWhatYouWant',
    nexts: ['value.improvingTogether'],
    waitTime: WAIT_TIME.L,
    content: {
      type: NODE_TYPES.TEXT,
      content:
        'Vorrei che con me gli utenti possano raccontare le proprie idee',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'value.improvingTogether',
    nexts: ['value.bigIdeas'],
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Migliorarle e definirle insieme',
    },
  },
  {
    author: AUTHORS.AI,
    id: 'value.bigIdeas',
    nexts: _corePipelinesMessages.map(({ id }) => id),
    waitTime: WAIT_TIME.R,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Secondo me, ogni idea può diventare grande',
    },
  },
];

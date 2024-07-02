import { AUTHORS, NODE_TYPES, WAIT_TIME } from '../const.js';

export const corePipelinesActions = [
  {
    id: 'hr.userHrPipeline',
    content: 'Se volessi contribuire?',
  },
  {
    id: 'value.userValuePipeline',
    content: 'Parlami di te',
  },
  {
    id: 'dx.userDxPipeline',
    content: 'Come sarai costruita?',
  },
  {
    id: 'team.userTeamPipeline',
    content: 'Nel team chi ci sarà?',
  },
];

export const corePipelinesMessages = [
  {
    author: AUTHORS.USER,
    id: 'value.userValuePipeline',
    nexts: ['value.valuePipeline'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Parlami di te',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'hr.userHrPipeline',
    nexts: ['hr.hrPipeline'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Se volessi contribuire?',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'dx.userDxPipeline',
    nexts: ['dx.dxPipeline'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Come sarai costruita?',
    },
  },
  {
    author: AUTHORS.USER,
    id: 'team.userTeamPipeline',
    nexts: ['team.teamPipeline'],
    waitTime: WAIT_TIME.S,
    content: {
      type: NODE_TYPES.TEXT,
      content: 'Nel team chi ci sarà?',
    },
  },
];

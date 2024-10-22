import { AUTHORS, NODE_TYPES, WAIT_TIME } from './const.js';
import { dx, actions as dxActions } from './pipelines/dx.js';
import { hr, actions as hrActions } from './pipelines/hr.js';

import { value } from './pipelines/value.js';
import { intro, actions as introActions } from './pipelines/intro.js';
import { team, actions as teamActions } from './pipelines/team.js';
import {
  corePipelinesActions,
  corePipelinesMessages,
} from './pipelines/core.js';
import { exit } from './pipelines/exit.js';

export const actions = [
  ...corePipelinesActions,
  ...introActions,
  ...hrActions,
  ...dxActions,
  ...teamActions,
];

const pipelines = [...hr, ...value, ...team, ...hr, ...intro, ...dx, ...exit];

// Every message with AUTHOR.USER MUST only have 1 AUTHOR.AI message as its nexts
// A AUTHOR.AI message as nexts can have either 1 other AUTHOR.AI message or "n" AUTHOR.USER messages
export const messages = [
  ...pipelines,
  ...corePipelinesMessages,
  // {
  //   author: AUTHORS.AI,
  //   id: "oh",
  //   nexts: ["ciao"],
  //   waitTime: 500,
  //   content: {
  //     type: NODE_TYPES.TEXT,
  //     content: "Oh 🤗",
  //   },
  // },
  // {
  //   author: AUTHORS.AI,
  //   id: "ciao",
  //   waitTime: 500,
  //   nexts: ["founders"],
  //   content: {
  //     type: NODE_TYPES.TEXT_NODE,
  //     classes: [TEXT_CLASSES.BOLD, TEXT_CLASSES.ITALIC],
  //     content: [
  //       {
  //         type: NODE_TYPES.TEXT,
  //         content: "Ciao!",
  //       },
  //       {
  //         type: NODE_TYPES.TEXT_NODE,
  //         classes: [TEXT_CLASSES.ITALIC],
  //         content: {
  //           type: NODE_TYPES.TEXT,
  //           content: "mondo",
  //         },
  //       }
  //     ],
  //   }
  // },
  // {
  //   author: AUTHORS.AI,
  //   id: "founders",
  //   nexts: ["nonPensavo"],
  //   content: [
  //     {
  //       type: NODE_TYPES.DIV,
  //       classes: [BUBBLE_CLASSES.BUBBLE_BORDER_RADIUS],
  //       content: [
  //         {
  //           type: NODE_TYPES.IMGS,
  //           classes: ["bubble-img"],
  //           content: [
  //             {
  //               type: NODE_TYPES.IMG,
  //               content: "/assets/images/dai.gif",
  //               otherProps: {
  //                 alt: "dai, dai, dai! cit: Boris",
  //               }
  //             },
  //             {
  //               type: NODE_TYPES.IMG,
  //               content: "/assets/images/dai.gif",
  //               otherProps: {
  //                 alt: "dai, dai, dai! cit: Boris",
  //               }
  //             },
  //             {
  //               type: NODE_TYPES.IMG,
  //               content: "/assets/images/dai.gif",
  //               otherProps: {
  //                 alt: "dai, dai, dai! cit: Boris",
  //               }
  //               }
  //             },
  //           ]
  //         },
  //       ]
  //     },
  //     {
  //       type: NODE_TYPES.TEXT_NODE,
  //       content: {
  //         type: NODE_TYPES.TEXT,
  //         content: "Non pensavo avrei incontrato qualcuno"
  //       },
  //       classes: [TEXT_CLASSES.BOLD, TEXT_CLASSES.ITALIC],
  //     },
  //   ]
  // },
  // {
  //   author: AUTHORS.AI,
  //   id: "nonPensavo",
  //   nexts: ["prova", "prova2"],
  //   content: {
  //     type: NODE_TYPES.TEXT,
  //     content: "Non pensavo avrei incontrato qualcuno",
  //   }
  // },
  // {
  //   author: AUTHORS.USER,
  //   id: "prova",
  //   nexts: ["founders"],
  //   content: {
  //     type: NODE_TYPES.TEXT,
  //     content: "Prova",
  //   }
  // },
  // {
  //   author: AUTHORS.USER,
  //   id: "prova2",
  //   nexts: ["ciao"],
  //   content: {
  //     type: NODE_TYPES.TEXT,
  //     content: "Prova2",
  //   }
  // }
];

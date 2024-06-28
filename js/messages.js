import { AUTHORS, NODE_TYPES, TEXT_CLASSES, BUBBLE_CLASSES } from "./const.js";
import { developerExperincePipeline } from "./developerExperience.js";
import { hrPipeline } from "./hrPipeline.js";
import { teamPipeline } from "./teamPipeline.js";
import { techTrendyPipeline } from "./techTrendyPipeline.js";
import { valuePipeline } from "./valuePipeline.js";

export const actions = [
  {
    id: "prova",
    content: "Ciao!",
  },
  {
    id: "prova2",
    content: "Interessante!",
  }
];

const pipelines = [
  ...techTrendyPipeline,
  ...developerExperincePipeline,
  ...valuePipeline,
  ...teamPipeline,
  ...hrPipeline,
];

// Every message with AUTHOR.USER MUST only have 1 AUTHOR.AI message as its nexts
// A AUTHOR.AI message as nexts can have either 1 other AUTHOR.AI message or "n" AUTHOR.USER messages
export const messages = [
  ...pipelines,
  {
    author: AUTHORS.AI,
    id: "oh",
    nexts: ["ciao"],
    waitTime: 500,
    content: {
      type: NODE_TYPES.TEXT,
      content: "Oh 🤗",
    },
  },
  {
    author: AUTHORS.AI,
    id: "ciao",
    waitTime: 500,
    nexts: ["founders"],
    content: {
      type: NODE_TYPES.TEXT_NODE,
      classes: [TEXT_CLASSES.BOLD, TEXT_CLASSES.ITALIC],
      content: [
        {
          type: NODE_TYPES.TEXT,
          content: "Ciao!",
        },
        {
          type: NODE_TYPES.TEXT_NODE,
          classes: [TEXT_CLASSES.ITALIC],
          content: {
            type: NODE_TYPES.TEXT,
            content: "mondo",
          },
        }
      ],
    }
  },
  {
    author: AUTHORS.AI,
    id: "founders",
    nexts: ["nonPensavo"],
    content: [
      {
        type: NODE_TYPES.DIV,
        classes: [BUBBLE_CLASSES.BUBBLE_BORDER_RADIUS],
        content: [
          {
            type: NODE_TYPES.IMGS,
            classes: ["bubble-img"],
            content: [
              {
                type: NODE_TYPES.IMG,
                content: "/assets/images/dai.gif",
                otherProps: {
                  alt: "dai, dai, dai! cit: Boris",
                }
              },
              {
                type: NODE_TYPES.IMG,
                content: "/assets/images/dai.gif",
                otherProps: {
                  alt: "dai, dai, dai! cit: Boris",
                } 
              },
              {
                type: NODE_TYPES.IMG,
                content: "/assets/images/dai.gif",
                otherProps: {
                  alt: "dai, dai, dai! cit: Boris",
                } 
              },
            ]
          },
        ]
      },
      {
        type: NODE_TYPES.TEXT_NODE,
        content: {
          type: NODE_TYPES.TEXT,
          content: "Non pensavo avrei incontrato qualcuno"
        },
        classes: [TEXT_CLASSES.BOLD, TEXT_CLASSES.ITALIC],
      },
    ]
  },
  {
    author: AUTHORS.AI,
    id: "nonPensavo",
    nexts: ["prova", "prova2"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "Non pensavo avrei incontrato qualcuno",
    }
  },
  {
    author: AUTHORS.USER,
    id: "prova",
    nexts: ["founders"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "Prova",
    }
  },
  {
    author: AUTHORS.USER,
    id: "prova2",
    nexts: ["ciao"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "Prova2",
    }
  }
];
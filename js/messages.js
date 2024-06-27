import { AUTHORS, NODE_TYPES, TEXT_CLASSES, _AI_BUBBLE_CLASSES } from "./const.js";

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

// Every message with AUTHOR.USER MUST only have 1 AUTHOR.AI message as its nexts
// A AUTHOR.AI message as nexts can have either 1 other AUTHOR.AI message or "n" AUTHOR.USER messages
export const messages = [
  {
    author: AUTHORS.AI,
    id: "oh",
    nexts: ["ciao"],
    content: {
      type: NODE_TYPES.TEXT,
      content: "Oh 🤗",
    },
  },
  {
    author: AUTHORS.AI,
    id: "ciao",
    nexts: ["founders"],
    content: {
      type: NODE_TYPES.TEXT_NODE,
      classes: [TEXT_CLASSES.BOLD],
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
        classes: [_AI_BUBBLE_CLASSES.BUBBLE_BORDER_RADIUS],
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
]
import { ACTIONS_CLASSES, ANIMATIONS_CLASSES, AUTHORS, BTN_CLASSES, NODE_TYPES, TEXT_CLASSES, BUBBLE_CLASSES, DOT_CLASSES } from "./const.js";
import { actions, messages } from "./messages.js"

export default function main () {
  let _aiSpeed = 1300;
  let _messages;
  let _bubbles;
  let _actions;
  let _currentBubble;
  let _loop = false;
  const _chat = document.getElementById('messages');
  const _optionsSecondary = document.getElementById('options-secondary');
  const _optionsPrimary = document.getElementById('options-primary');

  const _handleObserve = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.dataset.show = "";
      }
    })
  }

  const _buildBaseNode = (node, element) => {
    Object.keys(node?.otherProps || {})
      .filter((key) => key !== 'innerHTML')
      .forEach((key) => {
        element.setAttribute(key, node.otherProps[key]);
      })
  };

  const _buildText = (node, element) => {
    return document.createTextNode(node.content);
  };

  const _buildTextNode = (node, element) => {
    const textNode = document.createElement("text-node");
    textNode.classList.add(...node.classes);
    _buildBaseNode(node, textNode);


    if (typeof node.content === "object" && node.content.length) {
      node.content.forEach((child) => {
        textNode.appendChild(_buildNode(child));
      });
      return textNode;
    }

    if (typeof node.content === "object" && !node.content.length) {
      textNode.appendChild(_buildNode(node.content));

      return textNode;
    }

  };

  const _buildDivNode = (node, element) => {
    const div = document.createElement("div");
    div.classList.add(...node.classes);

    node.content.forEach((child) => div.appendChild(_buildNode(child, element)));

    _buildBaseNode(node, div);

    return div;
  };

  const _buildImgsNode = (node, element) => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add(BUBBLE_CLASSES.IMAGES);

    node.content.forEach((child) => imageContainer.appendChild(_buildNode(child, element)));
    imageContainer.classList.add(BUBBLE_CLASSES.IMAGES_SLOTS_3)

    _buildBaseNode(node, imageContainer);
    element.classList.add(BUBBLE_CLASSES.BUBBLE_IMG);

    return imageContainer;
  };

  const _buildImgNode = (node, element) => {
    const img = document.createElement("img");
    img.setAttribute("src", node.content);

    _buildBaseNode(node, img);

    return img;
  };

  const _buildNode = (node, element) => {
    switch (node.type) {
      case NODE_TYPES.TEXT:
        return _buildText(node, element);
      case NODE_TYPES.TEXT_NODE:
        return _buildTextNode(node, element);
      case NODE_TYPES.DIV:
        return _buildDivNode(node, element);
      case NODE_TYPES.IMGS:
        return _buildImgsNode(node, element);
      case NODE_TYPES.IMG:
        return _buildImgNode(node, element);
    }
  };

  const _buildBubble = (message) => {
    const bubble = document.createElement("div");
    bubble.classList.add(BUBBLE_CLASSES.BUBBLE);

    message.author === AUTHORS.AI && bubble.classList.add(BUBBLE_CLASSES.BUBBLE_AI);
    message.author === AUTHORS.USER && bubble.classList.add(BUBBLE_CLASSES.BUBBLE_USER);

    let body;

    if (typeof message.content === "object" && message.content.length) {
      body = message.content.map((child) => _buildNode(child, bubble));
    } else {
      body = _buildNode(message.content, bubble);
    }


    typeof body === "object" && body.length && !body.wholeText && body.forEach((node, element) => bubble.appendChild(node));
    typeof body === "object" && !body.length && bubble.appendChild(body);
    typeof body === "object" && body.wholeText && bubble.appendChild(body);

    return bubble;
  }

  const _buildAction = (action) => {
    const option = document.createElement("li");
    option.classList.add(ACTIONS_CLASSES.OPTION);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add(BTN_CLASSES.BTN, BTN_CLASSES.BTN_SECONDARY);

    btnContainer.addEventListener("click", () => {
      _setCurrentMessage(action.id);
    })

    const span = document.createElement("span");
    const a = document.createElement("a");

    span.appendChild(document.createTextNode(action.content));
    btnContainer.appendChild(span);
    btnContainer.appendChild(a);
    option.appendChild(btnContainer);

    return option;
  }

  const _buildActions = (messages) => {
    return actions
      .filter(({id}) => messages.some((msgId) => msgId === id))
      .map((action) => _buildAction(action));
  }

  const _buildIsWritingBubble = (author) => {
    const bubble = document.createElement('div');
    bubble.classList.add(
      BUBBLE_CLASSES.BUBBLE, 
      author === AUTHORS.AI ? BUBBLE_CLASSES.BUBBLE_AI : BUBBLE_CLASSES.BUBBLE_USER, 
      BUBBLE_CLASSES.BUBBLE_WRITING, 
      ANIMATIONS_CLASSES.IN
    );
    bubble.id = BUBBLE_CLASSES.BUBBLE_WRITING;

    for (let i = 0; i<3; i++) {
      const dot = document.createElement('div');
      dot.classList.add(DOT_CLASSES.DOT);
      bubble.appendChild(dot);
    }

    return bubble;
  }

  const _appendNext = () => {
    const writingBubble = document.getElementById(BUBBLE_CLASSES.BUBBLE_WRITING);
    writingBubble?.remove();

    if (!_currentBubble || !_currentBubble.build) {
      _loop = false;
      return;
    }

    let aiSpeed = _currentBubble.message.waitTime || _aiSpeed;
    _currentBubble.node = _currentBubble.build();
    
    _chat.appendChild(_currentBubble.node);
    _bubbles.push(_currentBubble);


    const next = _getNext(_currentBubble);

    if (next) {
      _chat.appendChild(_buildIsWritingBubble(next.message.author));

      if (Object.keys(next) === 0 || !next.build || next.message.author === AUTHORS.USER) {
        _loop = false;
  
        const _userMessages = _messages.reduce(
          (acc, message) => [
              ...acc,
              ...(
                _currentBubble.message.nexts.some((n) => n === message.message.id) && message.message.author === AUTHORS.USER
                ? [message.message.id]
                : []
              ),
            ]
          , []);
  
        _actions = _buildActions(_userMessages);
        _actions.forEach((action) => _optionsSecondary.appendChild(action));
  
        return;
      }

      _currentBubble = next;
    }

    setTimeout(() => _appendNext(), aiSpeed);
  }

  function renderLoop () {
    _bubbles = _bubbles?.flatMap((bubble) => {
      if (!bubble.node.className.includes(ANIMATIONS_CLASSES.IN)) {
        setTimeout(() => {
          bubble.node.classList.add(ANIMATIONS_CLASSES.IN);

          setTimeout(() => {
            const _currentMessageRect = bubble.node.getBoundingClientRect();
            const y = _currentMessageRect.top + _currentMessageRect.height + window.scrollY - 20;
            window.scrollTo({top: y, behavior: 'smooth'});
          }, 300)
        }, 1);
        return [];
      }

      return bubble;
    });

    if (!_loop) {
      return;
    }

    requestAnimationFrame(renderLoop);
  }

  const _getNext = () => {
    return _messages.find((message) => _currentBubble.message.nexts?.some((n) => {
      return n === message.message.id;
    }))
  };

  const _appendBubbleAndStartLoop = (bubble, aiSpeed) => {
    _currentBubble = bubble;

    _loop = true;
    renderLoop();

    setTimeout(() => _appendNext(), aiSpeed || _aiSpeed);
  }

  const _emptyActions = () => {
    _actions.forEach((action) => action.remove());
  }

  const _setCurrentMessage = (messageId) => {
    const message = _messages.find((message) => message.message.id === messageId);
    const bubble = {
      ...message,
      node: message.build(),
    }

    _bubbles.push(bubble);

    _appendBubbleAndStartLoop(bubble, 1);
    _emptyActions();
  }

  function init (messages, config) {
    _aiSpeed = config?.aiSpeed || _aiSpeed;
    _messages = messages.map((message) => ({
      build: () => _buildBubble(message),
      message,
    }));

    const firstMessage = _messages.find((message) => message.id === config?.startId) || _messages[0];

    const firstBubble = {
      ...firstMessage,
      node: firstMessage.build(),
    };

    _bubbles = [firstBubble];

    _appendBubbleAndStartLoop(firstBubble);
  }

  return  {
    init,
  }
}

window.onload = () => {
  const chat = main();
  chat.init(messages, {startId: 'oh'});
}
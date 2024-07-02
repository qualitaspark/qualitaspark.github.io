import {
  ACTIONS_CLASSES,
  ANIMATIONS_CLASSES,
  AUTHORS,
  BTN_CLASSES,
  NODE_TYPES,
  BUBBLE_CLASSES,
  DOT_CLASSES,
} from './const.js';
import { actions, messages } from './messages.js';
import { Cursor } from './cursor.js';
import './lenis.js';
import { corePipelinesMessages } from './pipelines/core.js';
import { actions as exitActions } from './pipelines/exit.js';

export default function main() {
  let _aiSpeed = 1300;
  let _loop = false;
  let _messages;
  let _bubbles;
  let _actions;
  let _currentBubble;
  let _userBubbleIsWriting;
  let _moodQuestions = 0;
  let _userScore = 0;
  const _choosedActions = [];
  const _chat = document.getElementById('messages');
  const _optionsSecondary = document.getElementById('options-secondary');
  const _options = document.getElementById('options');
  let onOptionMount;
  let onActionClick;

  const _buildBaseNode = (node, element) => {
    Object.keys(node?.otherProps || {})
      .filter(key => key !== 'innerHTML')
      .forEach(key => {
        element.setAttribute(key, node.otherProps[key]);
      });
  };

  const _buildText = (node, element) => {
    return document.createTextNode(node.content);
  };

  const _buildTextNode = (node, element) => {
    const textNode = document.createElement('text-node');
    textNode.classList.add(...node.classes);
    _buildBaseNode(node, textNode);

    if (typeof node.content === 'object' && node.content.length) {
      node.content.forEach(child => {
        textNode.appendChild(_buildNode(child));
      });
      return textNode;
    }

    if (typeof node.content === 'object' && !node.content.length) {
      textNode.appendChild(_buildNode(node.content));

      return textNode;
    }
  };

  const _buildDivNode = (node, element) => {
    const div = document.createElement('div');
    div.classList.add(...node.classes);

    node.content.forEach(child => div.appendChild(_buildNode(child, element)));

    _buildBaseNode(node, div);

    return div;
  };

  const _buildImgsNode = (node, element) => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add(BUBBLE_CLASSES.IMAGES);

    node.content.forEach(child =>
      imageContainer.appendChild(_buildNode(child, element))
    );
    imageContainer.classList.add(BUBBLE_CLASSES.IMAGES_SLOTS_3);

    _buildBaseNode(node, imageContainer);
    element.classList.add(BUBBLE_CLASSES.BUBBLE_IMG);

    return imageContainer;
  };

  const _buildImgNode = (node, element) => {
    const img = document.createElement('img');
    img.setAttribute('src', node.content);

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

  const _buildBubble = message => {
    const bubble = document.createElement('div');
    bubble.classList.add(BUBBLE_CLASSES.BUBBLE);

    message.author === AUTHORS.AI &&
      bubble.classList.add(BUBBLE_CLASSES.BUBBLE_AI);
    message.author === AUTHORS.USER &&
      bubble.classList.add(BUBBLE_CLASSES.BUBBLE_USER);

    let body;

    if (typeof message.content === 'object' && message.content.length) {
      body = message.content.map(child => _buildNode(child, bubble));
    } else {
      body = _buildNode(message.content, bubble);
    }

    typeof body === 'object' &&
      body.length &&
      !body.wholeText &&
      body.forEach((node, element) => bubble.appendChild(node));
    typeof body === 'object' && !body.length && bubble.appendChild(body);
    typeof body === 'object' && body.wholeText && bubble.appendChild(body);

    return bubble;
  };

  const _buildAction = action => {
    const option = document.createElement('li');
    option.classList.add(ACTIONS_CLASSES.OPTION, ACTIONS_CLASSES.MOUSE_HOVER);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add(BTN_CLASSES.BTN, BTN_CLASSES.BTN_SECONDARY);

    btnContainer.addEventListener('click', () => {
      _choosedActions.push(action.id);

      if (/.*-(positive|neutral|negative)$/.test(action.id)) {
        _moodQuestions++;

        _userScore = Math.log(
          _userScore +
            (1.2214027581601699 * /.*-positive/.test(action.id) +
              0.8187307530779818 * /.*-negative/.test(action.id))
        );
      }

      _setCurrentMessage(action.id);

      onActionClick && onActionClick(action);
    });

    const span = document.createElement('span');

    span.appendChild(document.createTextNode(action.content));
    btnContainer.appendChild(span);
    option.appendChild(btnContainer);

    return option;
  };

  const _buildActions = messages => {
    const includePipelines = messages.some(id => id.includes('Pipeline'));

    let _messages = includePipelines
      ? [
          ...new Map(
            [...messages, ...corePipelinesMessages].map(({ id }) => [id, id])
          ).values(),
        ]
      : messages;

    const _actions = actions
      .filter(({ id }) => {
        return (
          _messages.some(msgId => msgId === id) &&
          (!includePipelines || !_choosedActions.some(cA => cA === id))
        );
      })
      .map(action => _buildAction(action));

    if (_actions.length === 0 && includePipelines) {
      return exitActions.map(action => _buildAction(action));
    }

    return _actions;
  };

  const _buildIsWritingBubble = author => {
    const bubble = document.createElement('div');
    bubble.classList.add(
      BUBBLE_CLASSES.BUBBLE,
      author === AUTHORS.AI
        ? BUBBLE_CLASSES.BUBBLE_AI
        : BUBBLE_CLASSES.BUBBLE_USER,
      BUBBLE_CLASSES.BUBBLE_WRITING
    );
    bubble.id = BUBBLE_CLASSES.BUBBLE_WRITING;

    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('div');
      dot.classList.add(DOT_CLASSES.DOT);
      bubble.appendChild(dot);
    }

    return bubble;
  };

  const _appendNext = () => {
    _chat.classList.remove('userIsWritingPlaceholder');
    const writingBubble = document.getElementById(
      BUBBLE_CLASSES.BUBBLE_WRITING
    );
    writingBubble?.remove();

    if (!_currentBubble || !_currentBubble.build) {
      _loop = false;
      return;
    }

    let aiSpeed = _currentBubble.message.waitTime || _aiSpeed;
    _currentBubble.node = _currentBubble.build();

    _chat.appendChild(_currentBubble.node);
    _bubbles.push(_currentBubble);

    const nexts = _getNext(_currentBubble);

    if (!nexts || nexts.length === 0 || nexts.every(n => !n.build)) {
      _loop = false;
      _currentBubble = undefined;

      return;
    }

    if (nexts.every(n => n.message.author === AUTHORS.USER)) {
      _loop = false;

      _chat.classList.add('userIsWritingPlaceholder');

      _actions = _buildActions(nexts.map(n => n.message.id));
      _actions.forEach(action => _optionsSecondary.appendChild(action));
      setTimeout(() => onOptionMount && onOptionMount(), 1);
      return;
    }

    if (nexts[0].message.author === AUTHORS.AI) {
      const isWritingBubble = _buildIsWritingBubble(nexts[0].message.author);
      _chat.appendChild(isWritingBubble);

      setTimeout(() => {
        isWritingBubble.classList.add(ANIMATIONS_CLASSES.IN);
      }, 100);
    }

    _currentBubble = nexts[0];

    setTimeout(() => _appendNext(), aiSpeed);
  };

  function renderLoop() {
    _bubbles = _bubbles?.flatMap(bubble => {
      if (bubble.node.className.includes(ANIMATIONS_CLASSES.IN)) {
        return bubble;
      }

      setTimeout(() => {
        bubble.node.classList.add(ANIMATIONS_CLASSES.IN);

        setTimeout(() => {
          const _currentMessageRect = bubble.node.getBoundingClientRect();
          const y =
            _currentMessageRect.top +
            _currentMessageRect.height +
            window.scrollY -
            20;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 300);
      }, 1);

      return [];
    });

    if (!_loop) {
      return;
    }

    requestAnimationFrame(renderLoop);
  }

  const _getNext = () => {
    const next = _messages.filter(message =>
      _currentBubble.message.nexts?.some(n => {
        return n === message.message.id;
      })
    );

    if (!next) {
      console.error(
        _currentBubble.message.id,
        _currentBubble.message.nexts,
        _messages.map(({ message: { id } }) => id)
      );
    }

    return next;
  };

  const _appendBubbleAndStartLoop = (bubble, aiSpeed) => {
    _currentBubble = bubble;

    _loop = true;
    renderLoop();

    setTimeout(() => _appendNext(), aiSpeed || _aiSpeed);
  };

  const _emptyActions = () => {
    _actions.forEach(action => action.remove());
  };

  const _setCurrentMessage = messageId => {
    const message = _messages.find(message => message.message.id === messageId);
    const bubble = {
      ...message,
      node: message.build(),
    };

    _bubbles.push(bubble);

    _appendBubbleAndStartLoop(bubble, 1);
    _emptyActions();
  };

  const _handleOptionOver = () => {
    if (_loop || !_currentBubble || _userBubbleIsWriting) {
      return;
    }
    _userBubbleIsWriting = _buildIsWritingBubble(AUTHORS.USER);
    _chat.appendChild(_userBubbleIsWriting);

    setTimeout(() => {
      _userBubbleIsWriting.classList.add(ANIMATIONS_CLASSES.IN);
    }, 100);
  };

  const _handleOptionLeave = () => {
    if (_userBubbleIsWriting) {
      _userBubbleIsWriting.classList.remove(ANIMATIONS_CLASSES.IN);
      setTimeout(() => {
        _userBubbleIsWriting?.remove();
        _userBubbleIsWriting = undefined;
      }, 300);
    }
  };
  function init(messages, config) {
    _aiSpeed = config?.aiSpeed || _aiSpeed;
    _messages = messages.map(message => ({
      build: () => _buildBubble(message),
      message,
    }));
    onActionClick = config?.onActionClick;
    onOptionMount = config?.onOptionMount;

    const firstMessage =
      _messages.find(message => message.message.id === config?.startId) ||
      _messages[0];

    const firstBubble = {
      ...firstMessage,
      node: firstMessage.build(),
    };

    _bubbles = [firstBubble];

    _options.addEventListener('mouseenter', _handleOptionOver);
    _options.addEventListener('mouseleave', _handleOptionLeave);

    if (config.startChatCallback) {
      config.startChatCallback(() => _appendBubbleAndStartLoop(firstBubble));
    }
  }

  return {
    init,
  };
}

const handleStartChatCallback = startLoop => {
  const _loop = () => {
    if (window._chatStarted) {
      return;
    }

    window._chatStarted = true;
    startLoop();
  };

  if (document.hasFocus()) {
    _loop();
    return;
  }

  onfocus = _loop();
};

window.onload = () => {
  const chat = main();
  const lenis = new Lenis();

  lenis.on('scroll', e => {
    // Events emitted by lenis.
    // FYI in the event object, you can find the scroll position.
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  const cursor = new Cursor();

  requestAnimationFrame(raf);
  chat.init(messages, {
    startId: 'intro.oh',
    startChatCallback: handleStartChatCallback,
    onActionClick: () => {
      cursor.removeMouseHighlight();
    },
    corePipelinesMessages,
    onOptionMount: () => {
      cursor.refresh();
    },
  });
};

import { CONVERSION_RESULT_MSG, CONVERSION_RESULT_STATUS } from './consts';

const createItem = (node) => {
  const { id, name, type } = node;
  const value = node.characters;
  // eslint-disable-next-line no-use-before-define
  const children = findTexts(node.children) || null;
  return {
    id,
    name,
    type,
    value,
    children,
  };
};

const createItems = (node) => {
  if (node.type === 'TEXT') {
    return [createItem(node)];
  }
  if (node.children) {
    // eslint-disable-next-line no-use-before-define
    return [...findTexts(node.children)];
  }

  return [];
};

function findTexts(nodes) {
  const items = nodes
    ? nodes.reduce((acc, cur) => {
        return [...acc, ...createItems(cur)];
      }, [])
    : [];

  return items;
}

const createNode = (node) => {
  if (node.type === 'FRAME') {
    return [createItem(node)];
  }
  if (node.type === 'TEXT') {
    return [createItem(node)];
  }
  if (node.children) {
    // eslint-disable-next-line no-use-before-define
    return [...getSelectedNodesWithText(node.children)];
  }

  return [];
};

function getSelectedNodesWithText(nodes) {
  const items = nodes.reduce((acc, cur) => {
    return [...acc, ...createNode(cur)];
  }, []);

  return items;
}

async function loadFonts(node) {
  const allFonts = node.getRangeAllFontNames(0, node.characters.length);
  await Promise.all(allFonts.map(figma.loadFontAsync));
}

async function convertTextNodeValue(id, text) {
  if (figma.currentPage.selection.length !== 1) {
    return {
      status: CONVERSION_RESULT_STATUS.ERROR,
      msg: CONVERSION_RESULT_MSG.ERROR.SELECT_SINGLE_NODE,
    };
  }

  const node = figma.currentPage.selection[0];
  if (node.type !== 'TEXT') {
    return {
      status: CONVERSION_RESULT_STATUS.ERROR,
      msg: CONVERSION_RESULT_MSG.ERROR.SELECT_SINGLE_NODE,
    };
  }
  if (node.id !== id) {
    return {
      status: CONVERSION_RESULT_STATUS.ERROR,
      msg: CONVERSION_RESULT_MSG.ERROR.DO_NOT_CHANGE_SELECTION,
    };
  }

  await loadFonts(node);
  node.characters = text;
  figma.currentPage.selection = [node];

  return {
    status: CONVERSION_RESULT_STATUS.SUCCESS,
    msg: CONVERSION_RESULT_MSG.SUCCESS.CONVERSION_COMPLETE,
  };
}

figma.showUI(__html__, {
  width: 400,
  height: 680,
  title: '한국어 맞춤법 검사기',
});

figma.ui.onmessage = async (msg) => {
  switch (msg.type) {
    case 'quit': {
      figma.closePlugin();
      break;
    }
    case 'convert': {
      const { id, text } = msg.convert;
      const result = await convertTextNodeValue(id, text);
      figma.ui.postMessage({
        query: 'conversionresult',
        result,
      });
      break;
    }
    default:
      break;
  }
};

figma.on('selectionchange', () => {
  const selectedNodes = figma.currentPage.selection;
  const selectedNodesWithText = getSelectedNodesWithText(selectedNodes);
  figma.ui.postMessage({
    query: 'selectionchange',
    selectedNodesWithText,
  });
});

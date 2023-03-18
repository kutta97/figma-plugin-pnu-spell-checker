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

figma.showUI(__html__, {
  width: 400,
  height: 680,
  title: '한국어 맞춤법 검사기',
});

figma.ui.onmessage = (msg) => {
  if (msg.quit) figma.closePlugin();
};

figma.on('selectionchange', () => {
  const selectedNodes = figma.currentPage.selection;
  const selectedNodesWithText = getSelectedNodesWithText(selectedNodes);
  figma.ui.postMessage({
    query: 'selectionchange',
    selectedNodesWithText,
  });
});

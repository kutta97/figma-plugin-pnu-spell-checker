function findTexts(nodes) {
  const createItems = (node) => {
    if (node.children) {
      return [...findTexts(node.children)];
    }

    if (node.type === 'TEXT') {
      return [
        {
          id: node.id,
          name: node.name,
          text: node.characters,
        },
      ];
    }

    return [];
  };

  const items = nodes.reduce((acc, cur) => {
    return [...acc, ...createItems(cur)];
  }, []);

  return items;
}

function getSelectedNodesWithText(nodes) {
  const items = [];
  nodes.forEach((node) => {
    if (node.type === 'FRAME' || node.type === 'TEXT') {
      const item = {
        id: node.id,
        name: node.name,
        type: node.type,
      };
      switch (node.type) {
        case 'FRAME': {
          item.texts = findTexts(node.children);
          break;
        }
        case 'TEXT': {
          item.text = node.characters;
          break;
        }
        default:
          break;
      }
      items.push(item);
    } else if (node.children) {
      items.push(...getSelectedNodesWithText(node.children));
    }
  });
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

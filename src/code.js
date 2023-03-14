function findTexts(nodes) {
  const items = [];
  nodes.forEach((node) => {
    if (node.type === 'TEXT') {
      items.push({
        id: node.id,
        name: node.name,
        text: node.characters,
      });
    } else if (node.children) {
      items.push(...findTexts(node.children));
    }
  });
  return items;
}

function getSelectedTextNodes(nodes) {
  const items = [];
  nodes.forEach((node) => {
    if (node.type === 'FRAME' || node.type === 'TEXT') {
      const item = {
        id: node.id,
        name: node.name,
        type: node.type,
      };
      if (node.type === 'FRAME') item.texts = findTexts(node.children);
      if (node.type === 'TEXT') item.text = node.characters;
      items.push(item);
    } else if (node.children) {
      items.push(...getSelectedTextNodes(node.children));
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
  const selectedTextNodes = getSelectedTextNodes(selectedNodes);
  figma.ui.postMessage({
    query: 'selectionchange',
    selectedTextNodes,
    done: true,
  });
});

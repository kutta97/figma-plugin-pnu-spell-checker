function findText(node) {
  const nodes = [];
  if (node.type === 'TEXT') {
    nodes.push({
      id: node.id,
      text: node.characters,
    });
    return nodes;
  }
  if (node.children) {
    nodes.push(node.children.map((child) => findText(child)).flat());
  }
  return nodes.flat();
}

function searchText(_query) {
  const query = _query.toLowerCase();
  const root = figma.currentPage.selection;

  const items = root.map((frame) => ({
    id: frame.id,
    name: frame.name,
    type: frame.type,
    text: findText(frame, []),
  }));

  const result = items.filter((item) => item.text.length > 0);
  figma.ui.postMessage({ query, result, done: true });
}

figma.showUI(__html__, {
  width: 400,
  height: 680,
  title: '한국어 맞춤법 검사기',
});

figma.ui.onmessage = (msg) => {
  console.log('msg', msg);
  if (msg.query) {
    searchText(msg.query);
  } else if (msg.quit) {
    figma.closePlugin();
  }
};

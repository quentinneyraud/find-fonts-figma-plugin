export const getTextNodes = _ => {
  return figma.currentPage
    .findAll(node => node.type === 'TEXT')
}

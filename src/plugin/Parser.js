class Parser {
  getNodes ({ parent = 'currentPage', type } = {}) {
    return figma[parent]
      ?.findAll(node => node.type === 'TEXT')
  }

  getTextNodes ({ parent = 'currentPage' } = {}) {
    return figma[parent]
      ?.findAll(node => node.type === 'TEXT')
  }
}

export default new Parser()

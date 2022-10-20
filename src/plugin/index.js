// figma.showUI(__html__);

const getTextNodesConfigs = _ => {
  return figma.currentPage
    .findAll(node => node.type === 'TEXT')
    .map(parseTextNode)
    .reduce((acc, curr) => {
      if (curr.isValid) {
        delete curr.isValid

        acc.push(curr)
      }

      return acc
    }, [])
}

const parseTextNode = textNode => {
  if (textNode.fontName === figma.mixed) {
    // console.log(textNode);
    // console.log(textNode.getStyledTextSegments());
    return {
      isValid: false
    }
  }
  return {
    isValid: true,
    fontName: textNode.fontName.family,
    fontSize: textNode.fontSize,
    fontWeightValue: textNode.fontWeight,
    fontWeightName: textNode.fontName.style,
    letterSpacingUnit: textNode.letterSpacing.unit,
    letterSpacingValue: textNode.letterSpacing.value,
    lineHeightUnit: textNode.lineHeight.unit,
    lineHeightValue: textNode.lineHeight.value,
    case: textNode.textCase
  }
}

console.clear()

const hasSame = ['fontName', 'fontSize', 'fontWeightValue', 'letterSpacingValue', 'lineHeightValue']
const textNodesConfigs = getTextNodesConfigs()

const textNodesConfigsDedup = textNodesConfigs
  .reduce((acc, curr) => {
    const f = acc
      .find(a => {
        return hasSame.every(property => a[property] === curr[property])
      })

    if (!f) {
      acc.push(curr)
    }
    return acc
  }, [])
console.log('textNodesConfigs:', textNodesConfigs)
console.log('textNodesConfigsDedup:', textNodesConfigsDedup)

const getFrame = _ => {
  const maybeFrame = figma.currentPage
    .findOne(node => node.type === 'FRAME' && node.getPluginData('test') === 'ok')

  if (maybeFrame) return maybeFrame

  const frame = figma.createFrame()
  frame.name = 'Typos'
  frame.setPluginData('test', 'ok')
}

const frame = getFrame()
console.log('frame:', frame)

figma.ui.onmessage = msg => {

  // figma.closePlugin();
}

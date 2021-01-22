/**
 *
 * @param {Function} template tpl函数
 * @param {Object} templateObject 组件的props
 * @returns html字符串
 */
function tplReplace (template, templateObject) {
  return template().replace(/\{\{(.*?)\}\}/g, (node, key) => {
    return templateObject[key.trim()]
  })
}

export {
  tplReplace
}

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

function scrollToTop () {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 0)
}

function setPageData (data, count) {
  let index = 0
  const pageData = []

  while (index < data.length) {
    pageData.push(data.slice(index, index += count))
  }

  return pageData
}

export {
  tplReplace,
  scrollToTop,
  setPageData
}

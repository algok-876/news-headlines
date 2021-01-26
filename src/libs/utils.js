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

function srcollToBottom (callback) {
  if (getClientHeight() + document.documentElement.scrollTop > document.documentElement.scrollHeight - 10) {
    callback()
  }
}

function getClientHeight () {
  let clientHeight = 0
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
  } else {
    clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight
  }
  return clientHeight
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

function getUrlQueryValue (key) {
  const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i')
  const res = window.location.search.substr(1).match(reg)

  return res !== null ? decodeURIComponent(res[2]) : '/'
}

function getItemNode (node) {
  let target = node
  while (target = target.parentNode) {
    if (target.classList.contains('news-item')) {
      return target
    }
  }
  return null
}

export {
  tplReplace,
  scrollToTop,
  setPageData,
  srcollToBottom,
  getUrlQueryValue,
  getItemNode
}

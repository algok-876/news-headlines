import './imports.js'
import Header from '../components/Header'

(doc => {
  const oApp = doc.querySelector('#app')

  const init = () => {
    render()
  }

  function render () {
    const header = Header.tpl({
      url: '/',
      title: '新闻收藏',
      showLeftIcon: true,
      showRightIcon: false
    })
    oApp.innerHTML += header
  }

  init()
})(document)

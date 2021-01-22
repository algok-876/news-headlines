import './imports.js'
// import {
//   getNewsList
// } from '../services'
import Header from '../components/Header'

(doc => {
  const oApp = doc.querySelector('#app')

  const init = () => {
    render()
  }

  function render () {
    const header = Header.tpl({
      url: '/',
      title: '新闻头条',
      showRightIcon: true,
      showLeftIcon: false
    })
    oApp.innerHTML += header
  }

  init()
})(document)

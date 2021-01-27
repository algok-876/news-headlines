import './imports.js'
import Header from '../components/Header'
import NewsList from '../components/NewsList'
import NoDataTip from '../components/NoDataTip'
import { getUrlQueryValue } from '../libs/utils'
import InterObserver from '../libs/interObserver'

(doc => {
  const oApp = doc.querySelector('#app')
  let newsList = null
  const followList = JSON.parse(localStorage.getItem('followList') || '[]')

  const init = () => {
    render()
    bindEvent()
  }

  function render () {
    const header = Header.tpl({
      url: getUrlQueryValue('path'),
      title: '新闻收藏',
      showLeftIcon: true,
      showRightIcon: false
    })
    oApp.innerHTML += (header + NewsList.wrapperTpl(40 / 37.52))
    newsList = document.querySelector('.news-list')
    if (followList.length) {
      renderList()
    } else {
      newsList.innerHTML = NoDataTip.tpl('icon-meiyoushuju', '没有收藏新闻')
    }
  }

  function bindEvent () {
    NewsList.bindEvent(setCurrentNews)
  }
  // 渲染新闻列表
  function renderList () {
    newsList.innerHTML += NewsList.tpl({
      data: followList,
      pageNum: -1
    })
    const lazy = new InterObserver('.lazy-image')
    lazy.lazyImage()
    const newsItemFadein = new InterObserver('.news-item')
    newsItemFadein.listAnimationed()
  }
  
  // 设置当前新闻回调函数
  function setCurrentNews (options) {
    const { index } = options
    localStorage.setItem('currentNews', JSON.stringify(followList[index]))
  }

  init()
})(document)

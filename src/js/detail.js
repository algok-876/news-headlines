import './imports.js'
import Header from '../components/Header'
import iframe from '../components/iframe'
import Follow from '../components/Follow'
import { getUrlQueryValue } from '../libs/utils'

(doc => {
  const oApp = doc.querySelector('#app')

  const init = () => {
    render()
    bindEvent()
  }

  function render () {
    const header = Header.tpl({
      url: getUrlQueryValue('path'),
      title: '新闻详情',
      showLeftIcon: true,
      showRightIcon: false
    })

    const iframeTpl = iframe.tpl(getCurrentNewsUrl())
    oApp.innerHTML += (header + iframeTpl + renderFollowTpl())
  }

  function bindEvent () {
    Follow.bindEvent(doFollow)
  }

  function getCurrentNewsUrl () {
    const currentNews = JSON.parse(localStorage.getItem('currentNews'))
    return currentNews.url
  }

  function renderFollowTpl () {
    const followList = JSON.parse(localStorage.getItem('followList') || '[]')
    const currentNews = JSON.parse(localStorage.getItem('currentNews') || '{}')
    const isExists = followList.find(news => {
      return news.uniquekey === currentNews.uniquekey
    })
    console.log(isExists)
    return isExists ? Follow.follow() : Follow.unfollow()
  }

  function doFollow (follow) {
    let followList = JSON.parse(localStorage.getItem('followList') || '[]')
    const currentNews = JSON.parse(localStorage.getItem('currentNews') || '{}')
    console.log(currentNews)
    if (follow) {
      followList.push(currentNews)
    } else {
      followList = followList.filter(news => {
        return news.uniquekey !== currentNews.uniquekey
      })
    }
    localStorage.setItem('followList', JSON.stringify(followList))
  }

  init()
})(document)

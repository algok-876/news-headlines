import './imports.js'
import {
  getNewsList
} from '../services'
import { NEWS_TYPE } from '../data'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import NewsList from '../components/NewsList'
import PageLoading from '../components/PageLoading'
import { setPageData } from '../libs/utils'

(doc => {
  const oApp = doc.querySelector('#app')
  let newsWrapper = ''
  const config = {
    type: 'top',
    count: 10,
    pageNum: 0
  }
  const newsData = {}

  const init = async () => {
    render()
    await setNewsList()
    bindEvent()
  }

  function render () {
    const header = Header.tpl({
      url: '/',
      title: '新闻头条',
      showRightIcon: true,
      showLeftIcon: false
    })
    const navbar = NavBar.tpl(NEWS_TYPE)
    const newsWrapperTpl = NewsList.wrapperTpl(77 / 37.5)

    oApp.innerHTML += (header + navbar + newsWrapperTpl)
    newsWrapper = oApp.querySelector('.news-list')
  }

  function bindEvent () {
    NavBar.bindEvent(setType)
  }

  // 导航栏的类型改变时的回调函数
  function setType (type, newsList) {
    config.type = type
    config.pageNum = 0
    newsWrapper.innerHTML = ''
    setNewsList()
  }

  // 请求数据之后将新闻列表的html字符串渲染到#app根节点上
  async function setNewsList () {
    const { type, count, pageNum } = config
    if (newsData[type]) {
      renderNewsList(newsData[type][pageNum])
      return
    }
    newsWrapper.innerHTML = PageLoading.tpl('加载新闻中')
    const res = await getNewsList(type)
    if (res.error_code === 0) {
      newsData[type] = setPageData(res.result.data, count)
    }
    setTimeout(() => {
      newsWrapper.innerHTML = ''
      renderNewsList(newsData[type][pageNum])
    }, 1500)
  }

  // 根据数据生成html字符串
  function renderNewsList (data) {
    const { pageNum } = config
    const newsList = NewsList.tpl({
      data,
      pageNum
    })
    newsWrapper.innerHTML += newsList
    doc.querySelectorAll('img').forEach(img => {
      img.onload = function () {
        this.style.opacity = 1
      }
    })
  }

  init()
})(document)

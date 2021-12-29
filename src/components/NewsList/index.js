import tpl0 from './tpl/tpl0.tpl'
import tpl1 from './tpl/tpl1.tpl'
import tpl2 from './tpl/tpl2.tpl'
import tpl3 from './tpl/tpl3.tpl'
import wrapper from './tpl/wrapper.tpl'
import { tplReplace, getItemNode } from '../../libs/utils'
import './index.scss'

export default {
  name: 'NewsList',
  wrapperTpl (top) {
    return tplReplace(wrapper, {
      top
    })
  },
  tpl (options) {
    const { data, pageNum } = options
    let newsList = ''
    let tpl = ''
    data.forEach((item, index) => {
      if (!item.thumbnail_pic_s) {
        tpl = tpl0
      } else if (item.thumbnail_pic_s && !item.thumbnail_pic_s02) {
        tpl = tpl1
      } else if (item.thumbnail_pic_s02 && !item.thumbnail_pic_s03) {
        tpl = tpl2
      } else if (item.thumbnail_pic_s03) {
        tpl = tpl3
      }

      newsList += tplReplace(tpl, {
        uniquekey: item.uniquekey,
        pageNum,
        index,
        title: item.title,
        thumbnail_pic_s: item.thumbnail_pic_s,
        thumbnail_pic_s02: item.thumbnail_pic_s02,
        thumbnail_pic_s03: item.thumbnail_pic_s03,
        author: item.author_name,
        date: item.date
      })
    })
    return newsList
  },
  bindEvent (setCurrentNews) {
    const newsList = document.querySelector('.news-list')

    newsList.addEventListener('click', this._goToDetail.bind(this, setCurrentNews), false)
  },

  _goToDetail (setCurrentNews) {
    const oItem = getItemNode(arguments[1].target)
    const options = {
      pageNum: oItem.dataset.page,
      index: oItem.dataset.index
    }
    setCurrentNews(options)
    window.location.href = '/detail.html?path=' + location.pathname
  }
}

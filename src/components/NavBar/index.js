import navbar from './tpl/index.tpl'
import item from './tpl/item.tpl'
import { tplReplace, scrollToTop } from '../../libs/utils'
import './index.scss'

export default {
  name: 'NabBar',
  _curIdx: 0,
  tpl (data) {
    let itemList = ''
    data.forEach(({ type, title }, index) => {
      itemList += tplReplace(item, {
        current: !index ? 'current' : '',
        title,
        type
      })
    })

    return tplReplace(navbar, {
      width: 1.599148 * data.length,
      itemList: itemList
    })
  },

  bindEvent (setType) {
    const oNavBar = document.querySelector('.nav')
    const items = document.querySelectorAll('.nav .item')

    oNavBar.addEventListener('click', this._setNav.bind(this, items, setType), false)
  },

  _setNav (items, setType) {
    const target = arguments[2].target

    items[this._curIdx].classList.remove('current')
    this._curIdx = [].indexOf.call(items, target)
    items[this._curIdx].classList.add('current')
    setType(target.dataset.type)
    scrollToTop()
  },

  changeTab (index, setType) {
    const items = document.querySelectorAll('.nav .item')
    this._curIdx = index
    this._setNav(items, setType)
  }
}

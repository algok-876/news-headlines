import tpl from './index.tpl'
import './index.scss'
import { tplReplace } from '../../libs/utils'

export default {
  name: 'Follow',
  follow () {
    return tplReplace(tpl, {
      icon: 'icon-star'
    })
  },
  unfollow () {
    return tplReplace(tpl, {
      icon: 'icon-shoucang'
    })
  },
  bindEvent (doFollow) {
    const oFollow = document.querySelector('.follow-wrap i')
    oFollow.addEventListener('click', this._setFllow.bind(this, oFollow, doFollow), false)
  },
  _setFllow (oFollow, doFollow) {
    // console.log(this)
    if (oFollow.classList.contains('icon-shoucang')) {
      oFollow.classList.remove('icon-shoucang')
      oFollow.classList.add('icon-star')
      doFollow(true)
    } else {
      oFollow.classList.remove('icon-star')
      oFollow.classList.add('icon-shoucang')
      doFollow(false)
    }
  }
}

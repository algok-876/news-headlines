import tpl from './index.tpl'
import './index.scss'
import { tplReplace } from '../../libs/utils'

export default {
  name: 'MoreLoading',
  _tpl (text, loading) {
    return tplReplace(tpl, {
      text,
      loading: loading ? 'block' : 'none'
    })
  },

  add (oWrap, loading) {
    const oMoreLoading = document.querySelector('.more-loading')
    if (!oMoreLoading) {
      const tpl = this._tpl(loading ? '正在加载中' : '没有更多新闻了', loading)
      oWrap.innerHTML += tpl
    }
  },

  remove (oWrap) {
    const oMoreLoading = document.querySelector('.more-loading')
    oMoreLoading && oMoreLoading.remove()
  }
}

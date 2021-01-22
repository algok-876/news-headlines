import tpl from './index.tpl'
import './index.scss'
import { tplReplace } from '../../libs/utils'

export default {
  name: 'header',
  tpl (options) {
    const { url, title, showRightIcon, showLeftIcon } = options
    return tplReplace(tpl, {
      url,
      title,
      showRightIcon: showRightIcon ? 'block' : 'none',
      showLeftIcon: showLeftIcon ? 'block' : 'none'
    })
  }
}

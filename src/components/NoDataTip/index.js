import tpl from './index.tpl'
import { tplReplace } from '../../libs/utils'
import './index.scss'

export default {
  name: 'NoDataTip',
  tpl (icon, text) {
    return tplReplace(tpl, {
      icon,
      text
    })
  }
}

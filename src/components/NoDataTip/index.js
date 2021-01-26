import tpl from './index.tpl'
import { tplReplace } from '../../libs/utils'
import './index.scss'

export default {
  name: 'NoDataTip',
  tpl (text) {
    return tplReplace(tpl, {
      text
    })
  }
}

import tpl from './index.tpl'
import './index.scss'
import { tplReplace } from '../../libs/utils'

export default {
  name: 'iframe',
  tpl (src) {
    return tplReplace(tpl, { src })
  }
}

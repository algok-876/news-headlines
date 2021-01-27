import tpl from './index.tpl'
import { tplReplace } from '../../libs/utils'
import './index.scss'

export default {
  name: 'PageLoading',
  tpl (message) {
    return tplReplace(tpl, {
      message
    })
  }
}

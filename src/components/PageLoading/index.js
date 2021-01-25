import tpl from './index.tpl'
import { tplReplace } from '../../libs/utils'
import './index.scss'

export default {
  name: 'PageLoading',
  // add (message) {
  //   const loadingTpl = tplReplace(tpl, {
  //     message
  //   })
  //   const app = document.querySelector('#app')
  //   app.innerHTML += loadingTpl
  // },
  // remove () {
  //   const app = document.querySelector('#app')
  //   const load = document.querySelector('.loading-wrap')
  //   load && app.removeChild(load)
  // }
  tpl (message) {
    return tplReplace(tpl, {
      message
    })
  }
}

import Fastclick from 'fastclick'
import 'normalize.css'
import 'lib-flexible/flexible'
import '../assets/styles/iconfont.css'

window.addEventListener('load', () => {
  Fastclick.attach(document.body)
}, false)

window.addEventListener('touchmove', (e) => {
  if (e.touches.length > 1) {
    e.preventDefault()
  }
})

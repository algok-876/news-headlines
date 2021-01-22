import Fastclick from 'fastclick'
import 'normalize.css'
import 'lib-flexible/flexible'

window.addEventListener('load', () => {
  Fastclick.attach(document.body)
}, false)

window.addEventListener('touchmove', (e) => {
  if (e.touches.length > 1) {
    e.preventDefault()
  }
})

export default class InterObserver {
  constructor (selector) {
    this.items = Array.prototype.slice.call(document.querySelectorAll(selector))
  }

  lazyImage () {
    const observer = new IntersectionObserver(this._observerImgCb)
    this.items.forEach(item => {
      observer.observe(item)
    })
  }

  listAnimationed () {
    const observer = new IntersectionObserver(this._observerListCb)
    console.log(this.items)
    this.items.forEach(item => {
      observer.observe(item)
    })
  }

  _observerImgCb (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.onload = function () {
          img.style.opacity = 1
          img.setAttribute('lazyLoad', 'load')
        }
        img.onerror = function () {
          console.log('图片加载失败')
        }
      }
    })
  }

  _observerListCb (entries, observer) {
    entries.forEach(entry => {
      const oItem = entry.target
      if (entry.isIntersecting) {
        oItem.classList.add('in')
      }
    })
  }
}

import http from '../libs/http'

async function getNewsList (type = 'top') {
  const res = http.post('/Juhe/getNewsList', new FormData().append('field', top))
  return res
}

export {
  getNewsList
}

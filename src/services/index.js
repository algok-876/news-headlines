import http from '../libs/http'

async function getNewsList (type = 'top') {
  const res = await http.post('/Juhe/getNewsList', {
    field: type
  })
  return res
}

export {
  getNewsList
}

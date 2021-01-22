import './imports.js'
import {
  getNewsList
} from '../services'

getNewsList().then(res => {
  console.log(res)
})

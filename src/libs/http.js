import axios from 'axios'
import { BASE_URL } from '../config'

const http = axios.create({
  baseURL: BASE_URL,
  timeout: 1000
})

http.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default http

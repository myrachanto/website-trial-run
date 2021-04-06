import axios from 'axios'

export const appUrl = 'https://api.topresearchpapers.com'

export const appUrl2 = 'https://app.topresearchpapers.com'
export const serverUrl = appUrl

export const http = axios.create({
  baseURL: appUrl2,
  timeout:50000,
  headers: {'X-Custom-Headers': 'foobar'}
})

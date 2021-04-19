import axios from 'axios'

export const appUrl = 'https://api.topresearchpapers.com'//

// export const appUrl2 = 'https://app.topresearchpapers.com'
// export const appUrl2 = 'http://localhost:9400'
// export const appUrl = 'http://localhost:5551'

export const serverUrl = appUrl

export const http = axios.create({
  baseURL: appUrl,
  timeout:50000,
  headers: {'X-Custom-Headers': 'foobar'}
})

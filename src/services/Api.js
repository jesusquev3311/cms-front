import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'http://localhost:5000',
    headers:{'WWW-Authenticate': 'Basic'},
    withCredentials: true
  })
}

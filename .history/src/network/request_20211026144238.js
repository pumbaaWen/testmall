import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000 
  })

  instance.interceptors.request.use(config => {
    return config
  },err => {

  })

  instance.interceptors.response.ues(res => {
    return res.data
  }, err => {
    console.log(err);
  })
}
import { request } from "./request";

// 首页列表
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

// 
export function getHomeGoods() {
  
}
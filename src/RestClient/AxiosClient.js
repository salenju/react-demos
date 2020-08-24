import axios from 'axios'


/**
 * Axios
 *
 * Q1: Axios 和 Ajax有什么区别？
 * A1: Axios是对Ajax的进一步封装，增加了Promise，让调用更为方便。本质其实还是 Ajax。
 *
 * Q2: Axios 和 Fetch有什么区别？
 * A2: Axios只是对 Ajax的进一步封装，而 Fetch则是新的内置请求方法。
 *
 *
 */

export const Request = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
}

export const Endpoint = (method, url, cancelToken = null) => ({
  uri: url,
  method: method,
  cancelToken: cancelToken,
})

// 取消请求
export const RestCancelToken = () => {
  return axios.CancelToken.source()
}

export class RestClient {
  constructor(config) {
    this._config = Object.assign(
      {
        baseURL: '/api',
        timeout: 1000,
        retry: 0,
        headers: {},
      },
      config
    )

    this.headerConfig = this._config.headers
    this.client = axios.create(this._config)
  }

  call = async () => {

  }
}

/**
 * 请求拦截
 * 客户端发送请求 -> [请求拦截器] -> 服务器
 * token校验（JWT）:接受服务器返回的token，存储在本地，每次向服务器发请求都需要带上token
 */

axios.interceptors.request.use(
  (confing) => {
    // 处理请求信息
    let token = localStorage.getItem('token')
    token && (confing.headers.Authorization = token)
    return confing
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截
 * 服务器返回信息 -> [拦截器处理] -> 客户端JS获取信息并处理
 */

axios.interceptors.response.use(
  (response) => {
    // 处理响应数据
    return response
  },
  (error) => {
    let { response } = error
    if (response) {
      switch (response.status) {
        case 401: // 请求需要用户验证（一般是未登录）
          break
        case 403: // 服务器已接收并理解请求但拒绝执行（一般是token过期）
          break
        case 404: // 请求资源在服务上未找到0
          break
      }
      return Promise.reject(response)
    } else {
      // 服务器没有返回结果
      if (!window.navigator.onLine) {
        // 断网处理：跳转到断网页面
        return
      }
      return Promise.reject(response)
    }
  }
)

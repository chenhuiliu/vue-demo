import axios from 'axios'
import {AxiosStatus} from 'axios-status'
const axiosStatus = new AxiosStatus({
  timeout: 20,
  autoRetry: false
})
axiosStatus.register(axios);
async function doRequest(url, opts = {}) {
    if (!opts['headers']) {
        opts['headers'] = {}
    }
    if (!opts['cancelToken']) {
      opts['cancelToken'] = null
    }

    return axiosStatus.request({
        url: url,
        method: opts['method'] || 'get',
        baseURL: opts['baseURL'],
        headers: opts['headers'],
        params: opts['params'],
        data: opts['data'],
        timeout: 30000,
        withCredentials: false,
        cancelToken: opts['cancelToken'],
        success: (res) => {
          try {
            if (res.status != 200) {
              alert('呜~ 请求超时啦, 请刷新重试～～');
              return {
                code: res.status,
                msg: res.statusText
              }
            }
            return res.data
          } catch (error) {
            console.log('in try-catch', error)
          }
        },
        error : (err) => {
          return Promise.reject(err);
        }
    })
}

export {
  doRequest,
}

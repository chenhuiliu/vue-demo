import {doRequest} from './common'
import setting from './setting'

// 获取task详情
const getTaskInfo = (task_id) => {
  let url = setting.API_PREFIX + '/task/info'
  return doRequest(url, {
    baseURL : setting.API_HOST,
    method: 'get',
    params : {
      task_id
    }
  })
}

export default {
  getTaskInfo,
}
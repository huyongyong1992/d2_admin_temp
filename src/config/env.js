/*
 * @Author: young.hu 
 * @Date: 2019-04-28 17:55:52 
 * @Last Modified by: young.hu
 * @Last Modified time: 2019-04-28 18:29:01
 */

 /**
  * 请求BASE_URl, 根据环境变量配置不同的BASE_URL
  * @param { String } BASE_URL
  */

let BASE_URL = ''
let env = process.env.NODE_ENV
if (env === 'development') { // 开发环境
  BASE_URL = 'http://xxxxxx.com'
} else if (env === 'pre') { // 预发布环境
  BASE_URL = 'http://xxxxxx.com'
} else if (env === 'production') { // 生产环境
  BASE_URL = 'https://xxxx.com'
}

export {
  BASE_URL
}

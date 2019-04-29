/*
 * @Author: young.hu
 * @Date: 2019-04-29 10:15:03
 * @Last Modified by: young.hu
 * @Last Modified time: 2019-04-29 11:19:57
 */

/**
* 获取本地存储内容
* @param { String } key
* @param { String } type local 或 session, 默认local
*/
export const getStorage = (key, type = 'local') => {
  if (type === 'local') {
    return window.localStorage.getItem(key)
  } else {
    return window.sessionStorage.getItem(key)
  }
}

/**
 * 设置本地存储内容
 * @param { String } key
 * @param {*} value
 * @param { String } type local 或 session, 默认local
 */
export const setStorage = (key, value, type = 'local') => {
  if (type === 'local') {
    window.localStorage.setItem(key, value)
  } else {
    window.sessionStorage.setItem(key, value)
  }
}

/**
 * 清除本地存储内容
 * @param { String } key
 * @param { String } type local 或 session, 默认local
 */
export const removeStorage = (key, type = 'local') => {
  if (type === 'local') {
    window.localStorage.removeItem(key)
  } else {
    window.sessionStorage.removeItem(key)
  }
}

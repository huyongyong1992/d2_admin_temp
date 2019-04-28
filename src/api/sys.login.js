import { request } from '@/config/request'

export function AccountLogin (data) {
  return request('/login', data, 'post')
}

import { request } from '@/config/request'

export const AccountLogin = (params) => request('/login', params, 'post')

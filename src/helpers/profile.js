import {httpGet} from './network'

export function getProfile(id){
  let res = httpGet(id,'GET')
  return res
}
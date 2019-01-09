import {httpGet} from './network'

export function checkCredentials(params) {
  const {email, password} = params
  let res = httpGet('validate', 'POST',{
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },JSON.stringify({"email" : email,"password" :password}))
    .then(res => res)
 return res
}

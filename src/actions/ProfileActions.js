import {getProfile} from '../helpers/profile'

export const PROFILE_REQUEST = 'PROFILE_REQUEST'
export const PROFILE_OK = 'PROFILE_OK'
export const PROFILE_FAILURE = 'PROFILE_FAILURE'


export function getUserProfile(endpoint) {
    return async dispatch => {
      dispatch({
        type: PROFILE_REQUEST,
      })
      let res = await getProfile("user-info/"+endpoint).then(res => {
        if (res.status === "ok"){
          dispatch({
            type: PROFILE_OK,
            payload : res.data,
          })
        }
        else {
          dispatch({
            type: PROFILE_FAILURE,
            payload : 'error'
          })
        }
      })

    }

}
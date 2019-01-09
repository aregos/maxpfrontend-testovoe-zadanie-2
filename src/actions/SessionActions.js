import { checkCredentials } from '../helpers/session'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export function logIn(params, cb) {
  return async dispatch => {
    let res = await checkCredentials(params)
    if (res.status === "ok") {
      dispatch({
        type: LOG_IN,
        payload: {
          id: res.data.id,
        },
      });
      cb()
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errorMsg: 'Имя пользователя или пароль введены не верно',
        },
        error: true, // https://github.com/redux-utilities/flux-standard-action
      })
    }
  }
}

export function logOut() {
  return {
    type: LOG_OUT,
    id: ''
  }
}

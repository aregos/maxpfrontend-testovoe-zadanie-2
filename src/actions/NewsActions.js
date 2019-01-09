import {httpGet} from '../helpers/network'

export const NEWS_REQUEST = 'NEWS_REQUEST'
export const NEWS_OK = 'NEWS_OK'
export const NEWS_FAILURE = 'NEWS_FAILURE'


export function getNews(endpoint) {
  return async dispatch => {
    dispatch({
      type: NEWS_REQUEST,
      isFetching: true
    })
    let res = await httpGet(endpoint).then(res => {
      if (res) {
        dispatch({
          type: NEWS_OK,
          payload: res.data,
          isFetching: false,
        })
      } else {
        dispatch({
          type: NEWS_FAILURE,
          isFetching: false,
        })
      }
    }
  )
  }
}
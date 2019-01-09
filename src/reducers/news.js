import { NEWS_OK, NEWS_FAILURE, NEWS_REQUEST } from '../actions/NewsActions'

const initialState = {
  data : [],
  errorMsg : '',
  isFetching : true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEWS_REQUEST:
      return {
        ...state,
       isFetching: true
      }
    case NEWS_OK:
      return {
        ...state,
        data :  action.payload,
        isFetching: false
      }
    case NEWS_FAILURE:
      return{
        ...state,
        isFetching: false,
        errorMsg: action.payload
      }
    default:
      return state
  }
}
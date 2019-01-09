import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from '../actions/SessionActions'

const initialState = {
  id: '',
  errorMsg: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        id: action.payload.id,
        errorMsg: '',
      }
    case LOG_OUT:
      return {
        ...state,
        email: null,
        errorMsg: '',
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      }
    default:
      return state
  }
}

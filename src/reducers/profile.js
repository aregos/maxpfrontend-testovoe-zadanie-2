import {PROFILE_REQUEST,PROFILE_OK,PROFILE_FAILURE} from '../actions/ProfileActions'

const initial_state = {
  profile : {},
  isFetching : false,
  error : '',
}

export default (state = initial_state, action) => {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {
        isFetching: true,
      }
    case PROFILE_OK:
      return {
        profile : action.payload,
        isFetching : false,
      }
    case PROFILE_FAILURE:
      return {
        isFetching : false,
        error : action.payload
      }
    default:
      return state
  }
}
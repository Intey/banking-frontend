import { RECEIVE_USERS } from './actions'

export default function users(state=[], action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return action.payload
      // case CREATE_USER_RESPONSE:
      // careturn [...state, action.payload]
    default:
      return state
  }
}

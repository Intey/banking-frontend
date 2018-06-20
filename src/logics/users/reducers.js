import { RECEIVE_USERS } from './actions'

export default function USERS(state=[], action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return action.payload
      // case CREATE_USER_RESPONSE:
      // careturn [...state, action.payload]

    default:
      return state
  }
}

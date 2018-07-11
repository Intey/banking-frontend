import { CREATE_GROUP_RESPONSE, GROUPS_RESPONSE } from './actions.js'
export default function groups(state=[], action) {
  switch(action.type) {
    case GROUPS_RESPONSE:
      return action.payload
    case CREATE_GROUP_RESPONSE:
      return [...state, action.payload]
    default:
      return state
  }

}


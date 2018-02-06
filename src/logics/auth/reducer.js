import { AUTH } from '../actions'

/**
 * Return auth token
 */
export default function(state=null, action) {
  switch(action.type) {
    case AUTH:
      return action.payload
    default:
      return state
  }
}

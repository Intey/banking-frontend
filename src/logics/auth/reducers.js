import { AUTH } from './actions'

/**
 * Return auth token
 */
export function auth(state=null, action) {
  switch(action.type) {
    case AUTH:
      window.sessionStorage['token'] = action.payload
      return action.payload
    default:
      return state
  }
}

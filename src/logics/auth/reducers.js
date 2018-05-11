import { AUTH } from './actions'

/**
 * Return auth token
 */
export function auth(state={}, action) {
  switch(action.type) {
    case AUTH:
      window.sessionStorage['token'] = action.payload.token
      window.sessionStorage['id'] = action.payload.account.id
      window.sessionStorage['rate'] = action.payload.account.rate
      return action.payload
    default:
      return state
  }
}

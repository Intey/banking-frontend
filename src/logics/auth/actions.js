import { authenticate as auth_api } from '../../api/users.js'
import { act } from '../../utils/action.js'

export const AUTH = 'AUTH'
export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_START = 'auth_start'

export function authenticate(username, password) {
  return async function(dispatch) {
    dispatch(act(AUTH_START))
    try {
    let json = await auth_api(username, password)
    if (json.token)
      return dispatch(act(AUTH, json))
    else {
      console.warn(json)
      return dispatch(act(AUTH_ERROR, json))
    }
    }
    // server error
    catch (e) {
      let error = await e
      return dispatch(act(AUTH_ERROR, error))
    }
  }
}

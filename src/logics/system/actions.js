import { act } from '../../utils/action.js'

export const NO_USER_ID = 'NO_USER_ID'
export const ERROR = 'ERROR'

export function noUserId() {
  return act(NO_USER_ID)
}

export function errorAction(error) {
  return act(ERROR, error)
}

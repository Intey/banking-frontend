import * as API from '../../api/users.js'
import { act } from '../../utils/action.js'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const FETCH_FAILS = 'FETCH_FAILS'

export function fetchUsers() {
  return (dispatch) => {
    dispatch(act(REQUEST_USERS))
    API.getUsers()
      .then(json => dispatch(act(RECEIVE_USERS, json)))
      .catch(e => dispatch(act(FETCH_FAILS, e)))
  }
}

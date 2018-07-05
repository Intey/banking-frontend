import * as API from '../../api/users.js'
import { act } from '../../utils/action.js'

export const REQUEST_USERS = 'REQUEST_USERS'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const FETCH_FAILS = 'FETCH_FAILS'
export const USER_CREATED = 'USER_CREATED'
export const USER_CREATE_FAILED = 'USER_CREATE_FAILED'
export const REQUEST_CREATE_USER = 'REQUEST_CREATE_USER'

export function fetchUsers() {
  return (dispatch) => {
    dispatch(act(REQUEST_USERS))
    API.getUsers()
      .then((json) => dispatch(act(RECEIVE_USERS, json)))
      .catch((e) => dispatch(act(FETCH_FAILS, e)))
  }
}

export function createUser(payload) {
  return (dispatch) => {
    dispatch(act(REQUEST_CREATE_USER))
    API.createUser(payload)
      .then((json) => dispatch(act(USER_CREATED, json)))
      .catch((e) => dispatch(act(USER_CREATE_FAILED, e)))
  }
}

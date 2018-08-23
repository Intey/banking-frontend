import { USERS_URL, AUTH_URL, get, post } from './base.js'

export function authenticate(username, password) {
  return post(
    AUTH_URL,
    {'username': username, 'password': password }
  )
}

export function getUsers() {
  return get(USERS_URL)
}

export function createUser(payload) {
  return post(USERS_URL, payload)
  //TODO: reshape user
}

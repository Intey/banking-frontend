import { USERS_URL, AUTH_URL, get, post } from './base.js'

export async function getUsersLike(name) {
  let users = await get(`${USERS_URL}?search=${name}`)
  return users.map( u => {
    return {
      firstName: u.user.first_name,
      lastName: u.user.last_name,
      username: u.user.username,
      id: u.id
    }
  })
}


export function authenticate(username, password) {
  return post(
    AUTH_URL,
    {'username': username, 'password': password }
  )
}

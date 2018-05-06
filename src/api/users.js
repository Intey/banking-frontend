import { USERS_URL, get } from './base.js'

export async function getUsersLike(name) {
  let users = await get(`${USERS_URL}?search=${name}`)
  return users.map( u => {
    return {
      firstName: u.user.first_name,
      lastName: u.user.last_name,
      username: u.user.username
    }
  })
}



import { HOST, PORT } from '../settings'
const BASE = `http://${HOST}:${PORT}/api`

export const EVENTS_URL = `${BASE}/events/`
export const USERS_URL = `${BASE}/users/`
export const AUTH_URL = `${BASE}/auth/`

export async function fetchErrorMiddleware(response) {
  let res = await response
  if (res.ok)
    return res.json()
  else
    return Promise.reject(res.json())
}

export function get(URL) {
  return fetchErrorMiddleware(fetch(URL))
}

export function post(URL, payload) {
  return fetchErrorMiddleware(fetch(URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }))
}


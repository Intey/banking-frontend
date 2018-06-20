import { HOST, PORT } from '../settings'
const BASE = `http://${HOST}:${PORT}/api`

export const EVENTS_URL = `${BASE}/events/`
export const USERS_URL = `${BASE}/users/`
export const AUTH_URL = `${BASE}/auth/`

export function participantsUrl(event_id) {
  return `${EVENTS_URL}${event_id}/participants/`
}

export async function fetchErrorMiddleware(response) {
  let res = await response
  if (res.ok) {
    return res.json()
  }
  else
  {
    console.log("catch a bug...")
    let error = await res.text()
    console.log("bug:", error)
    throw error
  }
}

function request(URL, method='GET', payload) {
  let options = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }
  if (method !== 'GET' && payload )
    options.body = JSON.stringify(payload)

  return fetchErrorMiddleware(fetch(URL, options))
}

export function get(URL) {
  return request(URL)
}

export function post(URL, payload) {
  return request(URL, 'POST', payload)
}

export function patch(URL, payload) {
  return request(URL, 'PATCH', payload)
}

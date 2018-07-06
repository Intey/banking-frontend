import { HOST, PORT } from '../settings'
const BASE = `http://${HOST}:${PORT}/api`

export const EVENTS_URL = `${BASE}/events/`
export const USERS_URL = `${BASE}/users/`
export const AUTH_URL = `${BASE}/auth/`
export const TRANSACTION_URL = `${BASE}/transactions/`

export function participantsUrl(event_id) {
  return `${EVENTS_URL}${event_id}/participants/`
}

export async function fetchErrorMiddleware(response) {
  let res
  // check that server awailable
  try {
    res = await response
  }
  catch(error) {
    throw error
  }

  if (res && res.ok) {
    return res.json()
  } else {
    // await and throw error object/text, not promise
    let error
    if (res.status === 500)
      error = await res.text()
    else
      error = await res.json()
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

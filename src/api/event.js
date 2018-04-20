import { EVENTS_URL } from './base'

function fetchErrorMiddleware(response) {
  return response
    .then ( res => {
      if (res.ok)
        return res.json()
      else
        return Promise.reject(res.json())
    })
}

export function createEvent(payload) {
  // console.log("create new event API", payload)
  return fetchErrorMiddleware(fetch(EVENTS_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }))
}

export function getEvents() {
  return fetchErrorMiddleware(fetch(EVENTS_URL))
}

import { EVENTS_URL, participantsUrl, post, get, patch } from './base'

export function createEvent(payload) {
  // console.log("create new event API", payload)
  return post(EVENTS_URL, payload)
}

export function getEvents() {
  return get(EVENTS_URL)
}

export function participate(event_id, user_id, parts) {
  return post(participantsUrl(event_id), [{
    account: user_id,
    parts: parts
  }])
}

export function getEvent(id) {
  return get(`${EVENTS_URL}${id}/`)
}

export function saveEvent(event) {
  return patch(`${EVENTS_URL}${event.id}/`, event)
}

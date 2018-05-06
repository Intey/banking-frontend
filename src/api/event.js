import { EVENTS_URL, post, get } from './base'

export function createEvent(payload) {
  // console.log("create new event API", payload)
  return post(EVENTS_URL, payload)
}

export function getEvents() {
  return get(EVENTS_URL)
}

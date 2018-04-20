import { createEvent, getEvents } from '../../api/event'
import { EVENTS_URL } from '../../api/base'
import { act } from '../../utils/action.js'

export const REQUEST_EVENTS = 'REQUEST_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const FETCH_FAILS = 'FETCH_FAILS'
export const CREATE_REQUEST = 'CREATE_REQUEST'
export const CREATE_EVENT_FAILS = 'CREATE_EVENT_FAILS'
export const CREATE_EVENT_RESPONSE = 'CREATE_EVENT_RESPONSE'

export function requestEvents() {
  return {
    type: REQUEST_EVENTS
  }
}

export function receiveEvents(json) {
  return act(RECEIVE_EVENTS, json)
}

export function fetchFails(e) {
  return act(FETCH_FAILS, e)
}

export function createEventRequest(payload) {
  return (dispatch) => {
    dispatch(act(CREATE_REQUEST, payload))
    createEvent(payload)
    .then( json => dispatch(act(CREATE_EVENT_RESPONSE, json)) )
    .catch( e => e.then( errors => dispatch(act(CREATE_EVENT_FAILS, errors)) ))
}
}

export function fetchEvents() {
  return (dispatch) => {
    dispatch(requestEvents)
    getEvents()
      .then(json =>
        dispatch(receiveEvents(json))
      )
      .catch(e =>
        dispatch(fetchFails(e))
      )

  }
}


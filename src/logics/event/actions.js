import { createEvent, getEvents } from '../../api/event'
import { EVENTS_URL } from '../../api/base'

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
  console.log('receiveEvents', json)
  return {
    type: RECEIVE_EVENTS,
    payload: json,
  }
}

export function fetchFails(e) {
  return {
    type: FETCH_FAILS,
    error: e
  }
}

export function createEventRequest(payload) {
  return (dispatch) => {
    dispatch({ type: CREATE_REQUEST, payload: payload })
    createEvent(payload)
    .then( json => dispatch({ type: CREATE_EVENT_RESPONSE, payload: json }) )
    .catch( e => e.then( errors => dispatch( { type: CREATE_EVENT_FAILS, error: errors }) ))
}
}

export function fetchEvents() {
  console.log("try get events")
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


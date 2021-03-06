import * as API from '../../api/event'
import { act, createFetchAction } from '../../utils/action.js'

export const REQUEST_EVENTS = 'REQUEST_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const FETCH_FAILS = 'FETCH_FAILS'
export const CREATE_REQUEST = 'CREATE_REQUEST'
export const CREATE_EVENT_FAILS = 'CREATE_EVENT_FAILS'
export const CREATE_EVENT_RESPONSE = 'CREATE_EVENT_RESPONSE'
export const PARTICIPATION_REQUEST = 'PARTICIPATION_REQUEST'
export const PARTICIPATED = 'PARTICIPATED'
export const PARTICIPATION_FAILED = 'PARTICIPATION_FAILED'

export function createEventRequest(payload) {
  return (dispatch) => {
    dispatch(act(CREATE_REQUEST, payload))
    API.createEvent(payload)
    .then( (json) => dispatch(act(CREATE_EVENT_RESPONSE, json)) )
    .catch( (error) => {
      return dispatch(act(CREATE_EVENT_FAILS, error))
    })
}
}

export const fetchEvents = createFetchAction(API.getEvents,
                                             REQUEST_EVENTS,
                                             RECEIVE_EVENTS,
                                             FETCH_FAILS)

export function participate(event_id, user_id, parts) {
  return (dispatch) => {
    dispatch(act(PARTICIPATION_REQUEST))
    API.participate(event_id, user_id, parts)
      .then(json => dispatch(act(PARTICIPATED, json)))
      .catch(e => dispatch(act(PARTICIPATION_FAILED, e)))
  }
}


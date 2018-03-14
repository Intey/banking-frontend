import { HOST, PORT } from '../../settings'

export const REQUEST_EVENTS = 'REQUEST_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const FETCH_FAILS = 'FETCH_FAILS'

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

export function fetchEvents() {
  return (dispatch) => {
    dispatch(requestEvents)
    const url = `http://${HOST}:${PORT}/api/events`
    console.log("url", url)
    return fetch(url)
      .then(res => {
        console.log('res', res)
        return res.json()
      })
      .then(json =>
        dispatch(receiveEvents(json))
      )
      .catch(e =>
        dispatch(fetchFails(e))
      )

  }
}


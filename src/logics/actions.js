export const REQUEST_EVENTS = 'REQUEST_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const FETCH_FAILS = 'FETCH_FAILS'

export function requestEvents() {
  return {
    type: REQUEST_EVENTS
  }
}

export function receiveEvents(json) {
    return {
          type: RECEIVE_EVENTS,
          events: json.data.children.map(child => child.data),
          receivedAt: Date.now()
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
    return fetch('https://google.ru')
      .then(res => res.json())
      .then(json =>
        dispatch(receiveEvents(json))
      )
      .catch(e =>
        dispatch(fetchFails(e))
      )

  }
}


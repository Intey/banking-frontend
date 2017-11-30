export const REQUEST_EVENTS = 'REQUEST_EVENTS'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const FETCH_FAILS = 'FETCH_FAILS'
export const FILTER = 'FILTER'
export const SORT = 'SORT'

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
    const url = `http://localhost:8000/api/events`
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


export function setFilter(filter) {
  return {
    type: FILTER,
    filter
  }
}

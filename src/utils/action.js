/**
 * Create action object with keys 'type' and 'payload'.
 * @param {string} type - action type
 * @param {*} payload - payload data, that will be injected in action under 'payload' key.
 * @return {object} action
 */
export function act(type, payload=undefined) {
  if (payload !== undefined)
  {
    return {
      type: type,
      payload: payload
    }
  }
  else
  {
    return { type: type }
  }
}

/**
 * Create function-action, that try to fetch event, and dispatch results.
 * @param {function} fetchFunc - api function, that fetch data
 * @param {string} REQ_KEY - action type for request event. Dispatched without paylaod
 * @param {string} RES_KEY - action type for response event. Dispatched with payload
 * @param {string} FAIL_KEY - action type for request fails. Dispatched with error
 *
 */
export function createFetchAction(fetchFunc, REQ_KEY, RES_KEY, FAIL_KEY) {
  return function() {
    return (dispatch) => {
      dispatch(act(REQ_KEY))
      fetchFunc()
        .then(json => dispatch(act(RES_KEY, json)))
        .catch(e => dispatch(act(FAIL_KEY, e)))

    }
  }
}

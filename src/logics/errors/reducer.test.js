import reducer from './reducer.js'

test('reduce no server error', () => {
	let state = { snackbar: [] }

  state = reducer(state, {
    type: 'FETCH_FAILS',
    payload: { message: "Failed to fetch" }
  })
  expect(state).toEqual({ snackbar: [
    { message: "Failed to fetch", header: "Server unavailable"}
  ]})

  state = reducer(state, {
    type: 'ERROR',
    payload: 'long text message'
  })

  expect(state).toEqual({ snackbar: [
    { message: "Failed to fetch", header: "Server unavailable"},
    { message: 'long text message', header: "Server error" }
  ]})

  state = reducer(state, {
    type: 'NO_USER_ID'
  })
  expect(state).toEqual({ snackbar: [
    { message: "Failed to fetch", header: "Server unavailable"},
    { message: 'long text message', header: "Server error" },
    { message: "No user found in storage", header: "Integration Error" }
  ]})

})


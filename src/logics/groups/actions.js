import * as API from '../../api/groups.js'
import { act, createFetchAction } from '../../utils/action.js'

export const GROUPS_REQUEST = 'GROUPS_REQUEST'
export const GROUPS_RESPONSE = 'GROUPS_RESPONSE'
export const GROUPS_FETCH_FAILED = 'GROUPS_FETCH_FAILED'
export const CREATE_GROUP_REQUEST = 'CREATE_GROUP_REQUEST'
export const CREATE_GROUP_RESPONSE = 'CREATE_GROUP_RESPONSE'
export const CREATE_GROUP_FAILED = 'CREATE_GROUP_FAILED'


export const fetchGroups = createFetchAction(API.fetchGroups,
                                             GROUPS_REQUEST,
                                             GROUPS_RESPONSE,
                                             GROUPS_FETCH_FAILED)

export function createGroup(payload) {
  return (dispatch) => {
    dispatch(act(CREATE_GROUP_REQUEST, payload))
    API.createGroup(payload)
    .then( (json) => dispatch(act(CREATE_GROUP_RESPONSE, json)) )
    .catch( (error) => {
      return dispatch(act(CREATE_GROUP_FAILED, error))
    })
}
}

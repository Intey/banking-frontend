import * as API from '../../api/groups.js'
import { createFetchAction } from '../../utils/action.js'

export const GROUPS_REQUEST = 'GROUPS_REQUEST'
export const GROUPS_RESPONSE = 'GROUPS_RESPONSE'
export const GROUPS_FETCH_FAILED = 'GROUPS_FETCH_FAILED'
export const CREATE_GROUP_REQUEST = 'CREATE_GROUP_REQUEST'
export const CREATE_GROUP_RESPONSE = 'CREATE_GROUP_RESPONSE'
export const CREATE_GROUP_FETCH_FAILED = 'CREATE_GROUP_FETCH_FAILED'


export const fetchGroups = createFetchAction(API.fetchGroups,
                                             GROUPS_REQUEST,
                                             GROUPS_RESPONSE,
                                             GROUPS_FETCH_FAILED)

export const createGroup = createFetchAction(API.createGroup,
                                             GROUPS_REQUEST,
                                             GROUPS_RESPONSE,
                                             GROUPS_FETCH_FAILED)


import { GROUPS_URL, post, get, patch } from './base'

export function fetchGroups() {
  return get(GROUPS_URL)
}

export function createGroup(payload) {
  return post(GROUPS_URL, payload)
}

export function updateGroup(payload) {
  return patch(GROUPS_URL, payload)
}

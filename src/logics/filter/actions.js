export const FILTER = 'FILTER'

export function setFilter(filter) {
  return {
    type: FILTER,
    filter: filter
  }
}

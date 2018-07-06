import { TRANSACTION_URL, get } from './base'


export function getTransactions() {
  return get(`${TRANSACTION_URL}`)
}

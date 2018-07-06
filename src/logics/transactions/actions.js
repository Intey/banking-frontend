import * as API from '../../api/transactions.js'
import { createFetchAction } from '../../utils/action.js'

export const TRANSACTIONS_REQUEST = 'TRANSACTIONS_REQUEST'
export const TRANSACTIONS_REQUEST_FAILED = 'TRANSACTIONS_REQUEST_FAILED'
export const TRANSACTIONS_RESPONSE = 'TRANSACTIONS_RESPONSE'

export const fetchTransactions = createFetchAction(API.getTransactions,
                                                   TRANSACTIONS_REQUEST,
                                                   TRANSACTIONS_RESPONSE,
                                                   TRANSACTIONS_REQUEST_FAILED)

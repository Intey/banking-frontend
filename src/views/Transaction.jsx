import React from 'react'
import PropTypes from 'prop-types'
import './Transaction.css'

export default function Transaction({type, date, summ, account, parts, parent}) {
  let typeStyle
  switch(type) {
    case 'Перерасчет':
      typeStyle = 'diff'
      break;
    case 'Оплата':
      typeStyle = 'pay'
      break;
    case 'Возврат':
      typeStyle = 'return'
      break;
    default:
      typeStyle = ""
  }
  return (
    <div className={`transaction ${typeStyle}`}>
      <span className="transaction-type">{type}</span>
      <span className="transaction-date">{date}</span>
      <span className="transaction-summ">{summ}</span>
      <span className="transaction-account">{account.name}</span>
      <span className="transaction-parts">{parts}</span>
    </div>
  )
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  summ: PropTypes.number.isRequired,
  account: PropTypes.object.isRequired,
  parts: PropTypes.number.isRequired,
  parent: PropTypes.object,
}

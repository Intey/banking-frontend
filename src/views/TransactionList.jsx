import React from 'react'
import PropTypes from 'prop-types'

import Transaction from './Transaction.jsx'
import Field from './Field.jsx'

import { commonOnChange } from '../utils/helpers.js'

import './TransactionList.css'

export default class TransactionList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: "",
    }
    this.onChange = commonOnChange.bind(this);

  }

  render() {
    let transactions = this.props.transactions.filter((t) => {
      const filter = this.state.filter.toLowerCase()
      const username = t.account.name.toLowerCase()
      const date = t.date.toLowerCase()
      const type = t.type.toLowerCase()
      return username.startsWith(filter)
        || date.startsWith(filter)
        || type.startsWith(filter)
    })

    const transactionsView =
      transactions.map((t) => <Transaction {...t} key={t.id}/>)
    return (
      <div className="transaction-list">
        <div className="list-menu">
          <Field name="filter" onChange={this.onChange} value={this.state.filter}></Field>
        </div>
        {transactionsView}
      </div>
    )
  }
}

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired
}

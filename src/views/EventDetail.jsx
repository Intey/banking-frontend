import React from 'react'
import PropTypes from 'prop-types'
import Field from './Field.jsx'
import TypeHintInput from './TypeHintInput.jsx'
import ParticipantsList from './ParticipantsList.jsx'
import TransactionList from './TransactionList.jsx'

export default class EventDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.event,
      author: this.props.author.id,
      changed: false,
    }
  }

  onChange = (e) => {
    this.setState( { [e.target.name]: e.target.value, changed: true })
  }

  onAuthorChange = (author_id) => {
    this.setState({author: author_id})
  }

  save = () => {
    this.props.saveEvent(this.state)
      .then(() => this.setState({changed: false}))
      .catch((e) => this.props.handleError(e))
  }

  render() {
    let event = this.state
    return (
      <div className="event-detail">
        <Field name="name">
          <input type="text" name="name" value={event.name} onChange={this.onChange} placeholder="name"/>
        </Field>
        <Field name="price">
          <input name="price" type="number" value={event.price} onChange={this.onChange} placeholder="price"/>
        </Field>
        <TypeHintInput name="author" onSelected={this.onAuthorChange} user={this.props.author}
                       placeholder="author" users={this.props.users}/>
        <ParticipantsList participants={this.state.participants}/>
        <button onClick={this.save}>save</button>
        <TransactionList transactions={this.props.transactions}/>
      </div>
    )
  }
}

// TODO: prop types, dispatch
EventDetail.propTypes = {
  handleError: PropTypes.func.isRequired,
  saveEvent: PropTypes.func.isRequired,
  transactions: PropTypes.array,
}

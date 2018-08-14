import React from 'react'
import Field from './Field.jsx'
import PropTypes from 'prop-types'

import TypeHintInput from './TypeHintInput.jsx'

import GroupsSidebar from '../containers/GroupsSidebar.jsx'
import ParticipantsEditor from './ParticipantsEditor.jsx'

import { displayUsername } from '../utils/domain.js'

import './Builder.css'

export default class Builder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      price: 1,
      date: "",
      author: -1, // id
      participants: [],
    }
  }

  nameChange   = (e) => { this.setState({name:   e.target.value}) }
  priceChange  = (e) => { this.setState({price:  e.target.value}) }
  dateChange   = (e) => { this.setState({date:   e.target.value}) }
  authorSelected = (author) => { this.setState({author: author.id}) }

  catchData = (e) => {
    let data = {
      name         : this.state.name,
      price        : this.state.price,
      date         : this.state.date,
      author       : this.state.author,
      participants : this.state.participants.map((p) => { return {account: p.id, parts: p.parts} })
    }
    this.props.onNewEvent(data)
  }

  addParticipant = (p) => {
    const participants = [...this.state.participants, p]
    this.setState({participants: participants})
  }

  onRemoveParticipant = (id) => {
    const participants = this.state.participants.filter((p) => p.account.id !== id)
    this.setState({participants: participants})
  }

  renderParticipant = (p) => {
    const {account, parts} = p
    return (
      <div className={`${this.props.className} new-group-participant`} key={account.id}>
        <span>{displayUsername(account)}</span>: <span>{parts}</span> <span onClick={() => this.onRemoveParticipant(account.id) }>[X]</span>
      </div>
    )
  }

  render() {
    let errors = this.props.errors || []
    const participantsView = this.state.participants.map(this.renderParticipant)
    return (
      <div className="builder-page">
        <div className="builder">
          <Field name="name" value={this.state.name} onChange={this.nameChange} placeholder="event name" error={errors.name}/>
          <Field name="price" value={this.state.price} onChange={this.priceChange} placeholder="price" error={errors.price}/>
          <Field name="date" error={errors.date}>
            <input className="event-date" type="date" name="date" value={this.state.date} onChange={this.dateChange} placeholder="date"/>
          </Field>
          <TypeHintInput name="author" user={this.props.currentUser} users={this.props.users}
            onSelected={this.authorSelected} placeholder="author"/>
          <ParticipantsEditor className="participants"
            users={this.props.users}
            participants={this.state.participants}
            onAddParticipant={this.addParticipant}/>
          <div>
            <span>Participants:</span>
            {participantsView}
          </div>
          <button onClick={this.catchData}>Create</button>
        </div>
        <GroupsSidebar/>
      </div>
    )
  }
}

Builder.propTypes = {
  onNewEvent: PropTypes.func.isRequired,
  errors: PropTypes.array,
  currentUser: PropTypes.object,
  users: PropTypes.array.isRequired,
}

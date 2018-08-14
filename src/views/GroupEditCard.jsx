import React from 'react'
import PropTypes from 'prop-types'

import Field from './Field.jsx'

import './GroupEditCard.css'

import { commonOnChange, makeid } from '../utils/helpers.js'
import { displayUsername } from '../utils/domain.js'

import ParticipantsEditor from './ParticipantsEditor.jsx'

export default class GroupEditCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      participants: [],
    }
    this.onChange = commonOnChange.bind(this);
    this.onChangeParts = commonOnChange.bind(this);
  }

  onRemoveParticipant = (id) => {
    const participants = this.state.participants.filter((p) => p.account.id !== id)
    this.setState({participants: participants})
  }

  onAddParticipant = (p) => {
    const participants = this.state.participants
    this.setState({ participants: [...participants, p], })
  }

  onCreateGroup = () => {
    this.props.onCreateGroup({name: this.state.name, participants: this.state.participants})
    this.setState({
      name: "",
      participants: []
    })
  }

  renderParticipant = (p) => {
    const {account, parts} = p
    return (
      <div className={`${this.props.className} new-group-participant`} key={account.id}>
        <span>
          {displayUsername(account)}: {parts}&nbsp;
          <span onClick={() => this.onRemoveParticipant(account.id) }>[X]</span>
      </span>
      </div>
    )
  }

  render() {
    let participantsView = (<span>No participants selected</span>)
    if (this.state.participants.length > 0)
      participantsView = this.state.participants.map(this.renderParticipant)
    return (
    <div className="group-card new-group-editor">
      <Field name="Name">
        <input className="group-name" name="name" value={this.state.value}
          onChange={this.onChange}/>
      </Field>
      <ParticipantsEditor participants={this.state.participants} onAddParticipant={this.onAddParticipant}
        users={this.props.users} />
      <div>
        <span>Participants:</span>
        <div className="participants-list">
          {participantsView}
        </div>
      </div>
      <div className="editor-input">
        <button onClick={this.onCreateGroup}>Create group</button>
      </div>
    </div>
  )}
}
GroupEditCard.propTypes = {
  name: PropTypes.string,
  errors: PropTypes.object,
  users: PropTypes.array.isRequired,
  onCreateGroup: PropTypes.func.isRequired,
}


import React from 'react'
import PropTypes from 'prop-types'

import Field from './Field.jsx'
import Selector from './Selector.jsx'

import './GroupEditCard.css'

import { commonOnChange, makeid } from '../utils/helpers.js'

function filterUser(user, text) {
  return text.trim() && user.user.username.toLowerCase().startsWith(text.toLowerCase())
}


export default class GroupEditCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      participants: [],
      selectedAccount: { user: {username: "", }, id: -1 },
      parts: 0,
    }
    this.onChange = commonOnChange.bind(this);
    this.onChangeParts = commonOnChange.bind(this);
  }

  onRemoveParticipant = (key) => {
    const participants = this.state.participants.filter((p) => p.key !== key)
    this.setState({participants})
  }

  onAddParticipant = () => {
    const participants = this.state.participants
    this.setState({
      participants: [
        ...participants,
        {key: makeid(), account: this.state.selectedAccount, parts: this.state.parts}
      ]
    })
  }

  displayUsername = (user) => {
    return user.user.username
  }

  onSelected = (user) => {
    this.setState({selectedAccount: user})
  }

  onCreateGroup = () => {
    this.props.onCreateGroup({name: this.state.name, participants: this.state.participants})
  }

  render() {
    const participantsView = this.state.participants.map((p)=> { return (
      <div className="new-group-participant" key={p.key}>
        <span>{this.displayUsername(p.account)}</span>: <span>{p.parts}</span> <span onClick={() => this.onRemoveParticipant(p.key) }>[X]</span>
      </div>
    )})

    return (
    <div className="group-card new-group-editor">
      <input className="group-name" name="name" value={this.state.value}
        onChange={this.onChange}/>
      <div className="new-group-participants">
        <div>
          <span>Participants:</span>
        </div>
        <div className="participant-editor">
          <div className="editor-input username">
            <Selector variants={this.props.users} onSelected={this.onSelected}
              variantToString={this.displayUsername} filter={filterUser}/>
          </div>
          <div className="editor-input parts">
            <input name="parts" type="number" value={this.state.parts} onChange={this.onChangeParts}/>
          </div>
          <div className="editor-input">
            <button onClick={this.onAddParticipant}>add participant</button>
          </div>
          <div className="editro-input">
            <button onClick={this.onCreateGroup}>Create group</button>
          </div>
        </div>
        {participantsView}
      </div>
    </div>
  );}
}
GroupEditCard.propTypes = {
  name: PropTypes.string,
  errors: PropTypes.object,
  users: PropTypes.array.isRequired,
  onCreateGroup: PropTypes.func.isRequired,
}


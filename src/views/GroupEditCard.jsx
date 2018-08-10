import React from 'react'
import PropTypes from 'prop-types'

import Field from './Field.jsx'
// import Selector from './Selector.jsx'

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
      parts: 1,
      participantText: "",
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
      ],
      selectedAccount: { id: -1 },
      participantText: "",
      parts: 1
    })
  }

  displayUsername = (user) => {
    return user.user.username
  }

  onSelected = (user) => {
    this.setState({ participantText: this.displayUsername(user),
                    selectedAccount: user })
  }

  onCreateGroup = () => {
    this.props.onCreateGroup({name: this.state.name, participants: this.state.participants})
  }

  renderDropdown = (variants) => {
    if (variants.length <= 0) return <div className="dropdown"><span>no variants match</span></div>
    const views = variants.map((v) =>
      <li onClick={()=>this.onSelected(v)} key={v.id}>{this.displayUsername(v)}</li>)
    return (
      <div className="dropdown">
        <ul>
          {views}
        </ul>
      </div>
    )
  }
  render() {
    const participantsView = this.state.participants.map((p)=> { return (
      <div className="new-group-participant" key={p.key}>
        <span>{this.displayUsername(p.account)}</span>: <span>{p.parts}</span> <span onClick={() => this.onRemoveParticipant(p.key) }>[X]</span>
      </div>
    )})

    let dropdown = null
    if (this.state.selectedAccount.id < 0 && this.state.participantText !== "") {
      const variants = this.props.users.filter((v) => filterUser(v, this.state.participantText))
      dropdown = this.renderDropdown(variants)
    }

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
            <div className="selector">
              <input type="text" name="participantText" value={this.state.participantText} onChange={this.onChange}/>
              {dropdown}
            </div>
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


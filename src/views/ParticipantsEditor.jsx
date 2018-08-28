import React from 'react'
import PropTypes from 'prop-types'

import { commonOnChange } from '../utils/helpers.js'
import './ParticipantsEditor.css'
import TypeHintInput from './TypeHintInput.jsx'
import userShape from '../logics/users/shape.js'

export default class ParticipantsEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      parts: 1,
      selectedAccount: null,
    }
    this.onChange = commonOnChange.bind(this);
  }


  onSelected = ({id}) => {
    this.setState({ selectedAccount: id })
  }


  onAddParticipant = () => {
    const userId = this.state.selectedAccount
    this.props.onAddParticipant(
        {id: userId, parts: parseInt(this.state.parts)}
    )
    this.setState({
      selectedAccount: null,
      participantText: "",
      parts: 1
    })
  }

  render() {
    return (
      <div className="new-group-participants">
        <div className="participant-editor">
          <div className="editor-input username">
            <div className="selector">
              <TypeHintInput name="new participant" users={this.props.users} onSelected={this.onSelected}
                user={this.state.selectedAccount}/>
            </div>
          </div>
          <div className="editor-input parts">
            <input name="parts" type="number" value={this.state.parts} onChange={this.onChange}/>
          </div>
          <div className="editor-input">
            { this.state.selectedAccount?
                <button onClick={this.onAddParticipant}>add participant</button>
                :
                <button disabled>add participant</button>
            }
          </div>
        </div>
      </div>
  );}
}
ParticipantsEditor.propTypes = {
  onAddParticipant: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
}


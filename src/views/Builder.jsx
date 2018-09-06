import React from 'react'
import Field from './Field.jsx'
import PropTypes from 'prop-types'

import TypeHintInput from './TypeHintInput.jsx'

import GroupsSidebar from '../containers/GroupsSidebar.jsx'
import ParticipantsEditor from './ParticipantsEditor.jsx'

import { displayUsername } from '../utils/domain.js'
import userShape from '../logics/users/shape.js'
import groupShape from '../logics/groups/shape.js'

import './Builder.css'

function mergeParticipants(participants, groups) {
  let result = participants.map((p) => {return {...p}}) // clone
  for (let group of groups)
  {
    for(let participant of group.participants)
    {
      let found = result.find((p) => p.id === participant.id)
      if (found)
      {
        found.parts += participant.parts
      }
      else
      {
        result.push({id: participant.id, parts: participant.parts})
      }
    }
  }
  return result
}


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

  onCreate = (e) => {
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
    if (this.state.participants.length === 0)
    {
      this.setState({participants: [p]})
      return
    }
    let participants = this.state.participants.reduce((acc, pp) => {
      if (pp.id === p.id)
      {
        acc.push({...pp, parts: pp.parts + p.parts})
        return acc
      }
      else {
        acc.push({...p})
        return acc
      }
    }, [])
    this.setState({participants: participants})
  }

  onRemoveParticipant = (id) => {
    const participants = this.state.participants.filter((p) => p.id !== id)
    this.setState({participants: participants})
  }

  renderParticipant = (p) => {
    const {id, parts} = p
    const user = this.props.users.find((u) => u.id === id)
    if (user)
    {
      return (
        <div className={`${this.props.className} new-group-participant`} key={id}>
          <span>{displayUsername(user)}</span>: <span>{parts}</span> <span onClick={() => this.onRemoveParticipant(id) }>[X]</span>
        </div>
      )
    }
    return null
  }

  render() {
    let errors = this.props.errors || []
    const participantsView = mergeParticipants(this.state.participants,
                                               this.props.selectedGroups)
      .map(this.renderParticipant)

    const author = this.props.users.find((u) => u.id === this.state.author)
    return (
      <div className="builder-page">
        <div className="builder">
          <Field name="name" value={this.state.name} onChange={this.nameChange} placeholder="event name" error={errors.name}/>
          <Field name="price" value={this.state.price} onChange={this.priceChange} placeholder="price" error={errors.price}/>
          <Field name="date" error={errors.date}>
            <input className="event-date" type="date" name="date" value={this.state.date} onChange={this.dateChange} placeholder="date"/>
          </Field>
          <TypeHintInput name="author" user={author} users={this.props.users}
            onSelected={this.authorSelected} placeholder="author"/>
          <ul className="groups">
            {this.props.selectedGroups.map((g) => <li onClick={() => this.props.onDeselectGroup(g)} key={g.id}>{g.name}</li>)}
          </ul>
          <ParticipantsEditor className="participants"
            users={this.props.users}
            onAddParticipant={this.addParticipant}/>
          <div>
            <span>Participants:</span>
            {participantsView}
          </div>
          <button onClick={this.onCreate}>Create</button>
        </div>
        <GroupsSidebar/>
      </div>
    )
  }
}

Builder.propTypes = {
  onNewEvent: PropTypes.func.isRequired,
  errors: PropTypes.array,
  currentUser: userShape,
  users: PropTypes.arrayOf(userShape).isRequired,
  selectedGroups: PropTypes.arrayOf(groupShape).isRequired,
  onDeselectGroup: PropTypes.func.isRequired,
}

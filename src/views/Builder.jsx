import React from 'react'
import './Builder.css'
import TagInput from './TagInput'
import Field from './Field.jsx'

import TypeHintInput from './TypeHintInput.jsx'

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
  authorSelected = (id) => { this.setState({author: id}) }

  onParticipantAdd = (payload) => {
    let participants = [...this.state.participants, payload]
    this.setState({participants: participants })
  }

  onParticipantRemove = (payload) => {
    let newParticipants = this.state.participants.filter( e => e !== payload )
    this.setState({participants: newParticipants})
  }

  catchData = (e) => {
    let data = {
      name         : this.state.name,
      price        : this.state.price,
      date         : this.state.date,
      author       : this.state.author,
      participants : this.state.participants,
    }
    this.props.onNewEvent(data)
  }

  render() {
    let errors = this.props.errors || []
    return (
      <div className="builder">
        <Field name="name" value={this.state.name} onChange={this.nameChange} placeholder="event name" error={errors.name}/>
        <Field name="price" value={this.state.price} onChange={this.priceChange} placeholder="price" error={errors.price}/>
        <Field name="date" error={errors.date}>
          <input className="event-date" type="date" name="date" value={this.state.date} onChange={this.dateChange} placeholder="date"/>
        </Field>
        <TypeHintInput name="author" user={this.props.currentUser} onSelected={this.authorSelected} placeholder="author"/>
        <Field name="participants">
          <TagInput className="event-participants" tags={this.state.participants}
            onTagAdd={this.onParticipantAdd}
            onTagRemove={this.onParticipantRemove}
            placeholder="new participant"/>
        </Field>
        <button onClick={this.catchData}>Create</button>
      </div>
    )
  }
}

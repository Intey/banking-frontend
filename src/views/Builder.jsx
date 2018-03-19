import React from 'react'
import './Builder.css'
import TagInput from './TagInput'

function Error({message}) {
  return (
    <p className="error">{message}</p>
  )
}


export default class Builder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      price: 0,
      date: "",
      author: "",
      participants: [],
      groups: [],
    }
  }

  nameChange = (e) => {
    this.setState({name: e.target.value})
  }

  priceChange = (e) => {
    this.setState({price: e.target.value})
  }

  dateChange = (e) => {
    this.setState({date: e.target.value})
  }

  authorChange = (e) => {
    this.setState({author: e.target.value})
  }
  onParticipantsChange = ({mode, payload}) => {
    switch(mode) {
      case 'add':
        let participants = [...this.state.participants, payload]
        this.setState({participants: participants })
        console.log('after add', participants)
        break;
      case 'rm':
        let newParticipants = this.state.participants.filter( e => e !== payload )
        this.setState({participants: newParticipants})
        console.log('after remove', newParticipants)
        break;
      default:
        break;
    }
  }

  catchData = (e) => {
    let data = {
      name         : this.state.name,
      price        : this.state.price,
      date         : this.state.date,
      author       : this.state.author,
      participants : this.state.participants,
      groups       : this.state.groups
    }
    console.log("catching data", data)
    this.props.onNewEvent(data)
  }

  onGroupsChange = ({mode, payload}) => {
    switch(mode) {
      case 'add':
        let groups = [...this.state.groups, payload]
        this.setState({groups: groups })
        console.log('after add', groups)
        break;
      case 'rm':
        let newGroups = this.state.groups.filter( e => e !== payload )
        this.setState({groups: newGroups})
        console.log('after remove', newGroups)
        break;
      default:
        break;
    }

  }

  render() {
    let errorsView = null
    let errors = this.props.errors
    if (errors)
      errorsView = errors.map( e => {
        return <Error message={e}/>
      })

    return (
      <div className="event">
        <input className="event-name"      name="name"       value={this.state.name}      onChange={this.nameChange}      placeholder="event name "/>
        <input className="event-price"        name="price"         value={this.state.price}        onChange={this.priceChange}        placeholder="price"/>
        <input className="event-date"         name="date"          value={this.state.date}         onChange={this.dateChange}         placeholder="date"/>
        <input className="event-author"      name="author"       value={this.state.author}      onChange={this.authorChange}      placeholder="author"/>
        <TagInput className="event-participants" tags={this.state.participants} onTagsChange={this.onParticipantsChange} placeholder="new participant"/>
        <TagInput className="event-groups" id="event-groups" tags={this.state.groups} onTagsChange={this.onGroupsChange} placeholder="new group"/>
        <button onClick={this.catchData}>Create</button>
        {errorsView}
      </div>
    )
  }

}

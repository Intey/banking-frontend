import React from 'react'

class ParticipantItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.account,
    }
  }

  render() { return (
    <li>
      <div className="participant-item">
        <span>{this.state.username}({this.state.rate}): {this.state.parts}</span>
      </div>
    </li>
  );}
}


export default class ParticipantsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      participants: props.participants
    }
  }

  render() {
    let participantsView = this.state.participants.map( (p) =>
      <ParticipantItem account={p} key={p.id}/>
    )
    return (
    <ul>
      {participantsView}
    </ul>
  );}
}


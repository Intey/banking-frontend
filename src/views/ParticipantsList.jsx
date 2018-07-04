import React from 'react'


function ParticipantItem({account}) { return (
    <li>
      <div className="participant-item">
        <span>{account.username}({account.rate}): {account.parts}</span>
      </div>
    </li>
  )
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


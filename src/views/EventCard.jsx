import React from 'react'
import PropTypes from 'prop-types'
import './EventCard.css'


export default class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = { parts: props.parts || 1}
  }

  onChange = (e) => {
    const parts = parseInt(e.target.value)
    if (Number.isInteger(parts) && parts !== 0)
      this.setState({parts: parts})
    else if (this.state.parts !== 1)
      this.setState({parts: 1})
  }

  renderParticipationAction = () => {
    let data = this.props.data
    let onParticipate = this.props.onParticipate
    let participateAction = null
    let alreadyParticipated = false
    let all_parts = data.participants.reduce( (sum, p) => sum += p.parts, 0)
    all_parts += this.state.parts
    let party_pay = (data.price / all_parts) * this.state.parts
    if (data.participants) {
      alreadyParticipated = !!data.participants.find( p => p.id === this.props.currentUser)
    }
    if (!alreadyParticipated) {
      participateAction = (
        <React.Fragment>
          <input type="number" min="1" name="parts" className="parts-input" value={this.state.parts} onChange={this.onChange}/>
          <button onClick={()=>onParticipate(data.id, this.state.parts)}> Join for {party_pay} </button>
        </React.Fragment>
      )
    }
    return participateAction

  }

  render() {
    let {data, onDelete} = this.props

    if (! data.url || data.url === "")
    {
      data.url = "/#"
    }

    let participantsList
    if (!data.participants) {
      participantsList = <div>No participants</div>
    } else {
      participantsList = data.participants.map(p => <a href={p.url} className="participant" key={p.id}>{p.username}</a>)
      participantsList = <div className="participants-list">{participantsList}</div>
    }


    return (
      <div className="event">
        <div className="caption">
          <a className="link" href={data.url}>
            {data.name}
          </a>
          <button className="btn btn-danger" onClick={()=>onDelete(data.id)}>X</button>
          </div>
          <div className="price">{data.price}</div>
          <div className="date">{data.date}</div>
          <div className="authors">{data.author}</div>
          <div className="participants">
            {participantsList}
            {this.renderParticipationAction()}
          </div>
          <div className="groups">{data.groups}</div>
        </div>
        )
        }
}

// Requirements
let dataShape = PropTypes.shape({
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  participants: PropTypes.array,
  groups: PropTypes.array,
})

Event.propTypes = {
  data: dataShape.isRequired,
  onDelete: PropTypes.func,
  onParticipate: PropTypes.func,
}

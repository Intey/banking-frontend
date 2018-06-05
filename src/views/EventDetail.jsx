import React from 'react'
import { getEvent } from '../api/event.js'

export default class EventDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidUpdate = () => {
    console.log("did update")
    let id = this.props.match.params.id
    getEvent(id)
      .then( (result) => this.setState({...result, loading: false}))
      .catch( (e) => console.warn(e))
  }

  renderPlaceholder = () => {
    return <h3>Loading event...</h3>
  }

  render() {
    if (this.state.loading)
      return this.renderPlaceholder()

    return (
      <h3>{this.state.name}</h3>
  );}

}

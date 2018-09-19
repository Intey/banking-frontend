import React from 'react'
import PropTypes from 'prop-types'
import userShape from '../logics/users/shape'

import './Profile.css'


export default function ProfilePage(props) {
  if (props.user.id <= 0) return <span>Loading...</span>
    return (
      <div className="profile-page">
        <div className="profile-info">
          <h1>{props.user.username}</h1>
        </div>
        <div className="profile__group-list">
          <h2>groups</h2>
          <ul>
            {
              props.groups.map((g)=> <li key={g.id}>{g.name}</li>)
            }
          </ul>
        </div>
        <div className="profile__transaction-list">
          <h2>transactions</h2>
          <ul>
            {
              props.transactions.map((t)=> <li key={t.id}>{t.summ}</li>)
            }
          </ul>
        </div>
        <div className="profile__event-list">
          <h2>events</h2>
          <ul>
            {
              props.events.map((e)=> <li key={e.id}>{e.name}</li>)
            }
          </ul>
        </div>
      </div>
    )
}

ProfilePage.propTypes = {
  user: userShape.isRequired,
  transactions: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
}

import React from 'react';
import EventsList from './EventsList'
import AuthContainer from './Auth'

export default function MainHOC(authorized) {
  return () => (authorized ?
    <EventsList/>
    :
    <AuthContainer/>
  )
}

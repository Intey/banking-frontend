import React from 'react';

import { Route } from 'react-router-dom'

export default function MainHOC(authorized) {
  return () => (authorized ?
    <Switch>
      <Route path="/list" component={EventsList}></Route>
      <Route path="/new" component={Builder}></Route>
    </Switch>
    :
    <AuthContainer/>
  )
}

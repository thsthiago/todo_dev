import React from 'react'
import { Switch } from 'react-router-dom'
import Account from '../pages/Account'
import Dashboard from '../pages/Dashboard'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Route from './Route'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp}/>
    <Route path="/dashboard" component={Dashboard} isPrivate/>
    <Route path="/account/:name" component={Account} isPrivate/>
  </Switch>
)

export default Routes

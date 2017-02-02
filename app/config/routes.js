import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import Main from '../containers/Main'
import Home from '../components/Home'
import ForecastContainer from '../containers/ForecastContainer'
import Details from '../components/Details'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/forecast/:city' component={ForecastContainer} />
      <Route path='/details/:city' component={Details} />
    </Route>
  </Router>
)

export default routes
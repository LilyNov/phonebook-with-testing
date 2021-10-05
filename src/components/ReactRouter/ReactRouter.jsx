// app.js
import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Navigation from '../Navigation'
import Breadcrumbs from './Breadcrumbs'
import Home from './pages/Home'
import About from './pages/About'
import NoMatch from './pages/NoMatch'


// export const LocationDisplay = () => {
//   const location = useLocation()

//   return <div data-testid="location-display">{location.pathname}</div>
// }

const ReactRouter = () => (
  <div>
    < Navigation />
        <Breadcrumbs />
        
    <Switch>
      <Route  path="/" exact>
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route>
        <NoMatch />
      </Route>
    </Switch>
  </div>
)

export default ReactRouter
// app.js
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from '../Navigation'
import Breadcrumbs from './Breadcrumbs'
import Home from './pages/Home'
import News from './pages/News'
import Table from './pages/Table'
import NoMatch from './pages/NoMatch'


const ReactRouter = () => (
  <>
    < Navigation />
    <Breadcrumbs />

    <Switch>
      <Route  path="/" exact>
        <Home />
      </Route>

      <Route path="/news">
        <News />
      </Route>

      <Route path="/table">
        <Table />
      </Route>

      <Route>
        <NoMatch />
      </Route>
    </Switch>
  </>
)

export default ReactRouter
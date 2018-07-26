import React from 'react';
import Router from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'


import App from './App'
import Home from './Components/Home'
import Search from './Components/Search'



const Routes = () => (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/search" component={Search} />
      </Switch>
    </App>
  </Router>
)

export default Routes
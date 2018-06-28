import React from 'react'
import Error404 from './Error404';
import Header from './Header'
import LocationsList from './LocationsList'
import MonthsList from './MonthsList'
import { Switch, Route } from 'react-router-dom'

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/monthslist' component={MonthsList} />
        // <Route exact path='/locationslist' component={LocationsList} />
        <Route component={Error404} />
      </Switch>
      <h1>Avery Farms</h1>
      <h3>View Updates</h3>
      <h5>Seasonal Crops</h5>
      <h5>Farmer's Market Locations</h5>
      <p><em>list</em></p>
    </div>
  )
}

export default App

import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { LoginPage, Content1 } from './pages'
import Product from './pages/Product'
import Accounts from './pages/Sale/Accounts'
import Order from './pages/Order'
import AccountsForSearch from './pages/Sale/accountSearch/AccountSearch'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      {/* <PrivateRoute path="/Inbox" component={Content1} /> */}
      <PrivateRoute path="/Sales/Accounts" component={Accounts} />
      <PrivateRoute path="/Product" component={Product} />
      <PrivateRoute path="/Order" component={Order} />
      <PrivateRoute path="/Sales/Sale" component={AccountsForSearch} />
      <Route path="*" component={LoginPage} />
    </Switch>
  )
}

export default App

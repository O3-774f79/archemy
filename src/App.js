import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {LoginPage, Content1} from './pages';
import Product from './pages/Product';
import Accounts from './pages/Sale/Accounts/index';
import PrivateRoute from './components/PrivateRoute';
function App () {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute path="/Inbox" component={Content1} />
      <PrivateRoute path="/Sales/Accounts" component={Accounts} />
      <PrivateRoute path="/Product" component={Product} />
      <Route path="*" component={LoginPage} />
    </Switch>
  );
}

export default App;

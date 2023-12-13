// Import necessary dependencies
import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Signin from './user/Signin';
import Signup from './user/Signup';
import Menu from './core/menu';
import Home from './core/home';

// Create a Routes component
const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

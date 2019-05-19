import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/builder" component={BurgerBuilder}/>
            <Route path="/checkout" component={Checkout}/>
            <Redirect from="/" to="/builder"/>
          </Switch>
        </Layout>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;

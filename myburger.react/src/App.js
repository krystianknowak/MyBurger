import React, { Component } from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

import {Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            <Route path="/" component={BurgerBuilder}/>
            <Redirect from="/" to="/builder"/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;

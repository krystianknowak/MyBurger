import React, { Component } from 'react';
import Checkoutsummary from '../../components/Order/CheckoutSummary/Checkoutsummary';

export class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

  render() {
    return (
      <div>
        <Checkoutsummary ingredients={this.state.ingredients}/>
      </div>
    )
  }
}

export default Checkout;

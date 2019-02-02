import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  } 

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey];
    })
    .reduce((sum, el) => {
      return sum + el;
    }, 0);
    this.setState({purchasable: sum > 0});
  }

  purchaseHanlder = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false})    
  }

  purchaseContinueHandler = () => {
    alert('You continue!');
  }

  addIngredientHandler = (type) => {
    const updatedCount  = this.state.ingredients[type] + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    this.setState({
      ingredients: updatedIngredients, 
      totalPrice: oldPrice + priceAddition
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]; 
    if  (oldCount > 0) {
      const newIngredients = { ...this.state.ingredients };
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      newIngredients[type] = oldCount - 1;
      this.setState({
        ingredients: newIngredients,
        totalPrice: newPrice
      });
      this.updatePurchaseState(newIngredients);
    }
  }
  
  render() {

    const disabledInfo = {
      ...this.state.ingredients
    };

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <=0;
    }

    return (
        <>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
              <OrderSummary 
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}/>
            </Modal>
            <Burger ingredients = {this.state.ingredients}/>
            <BuildControls ingredientAdded={this.addIngredientHandler}
             ingredientRemoved={this.removeIngredientHandler}
             disabled={disabledInfo}
             purchasable={this.state.purchasable}
             ordered={this.purchaseHanlder}
             price={this.state.totalPrice}/>
        </>
    )
  }
}

export default BurgerBuilder;

import React, { Component } from 'react'
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

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
    totalPrice: 4
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
    }
  }
  
  render() {

    const disabledInfo = {
      ...this.state.ingredients
    };

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <=0;
    }
    
    const headerStyle = {
      textAlign: 'center'
    };

    return (
        <>
            <h1 style={headerStyle}>{this.state.totalPrice}</h1>
            <Burger ingredients = {this.state.ingredients}/>
            <BuildControls ingredientAdded={this.addIngredientHandler}
             ingredientRemoved={this.removeIngredientHandler}
             disabled={disabledInfo}/>
        </>
    )
  }
}

export default BurgerBuilder;

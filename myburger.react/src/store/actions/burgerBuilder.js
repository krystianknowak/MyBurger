import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

export const initIngridients = () => {
  console.log("feczuje");
  return dispatch => {
    console.log("feczuje w dispatchu");
    axios
      .get("/ingredients.json")
      .then(res => {
        console.log("res.data");
        dispatch(setIngredients(res.data));
      })
      .catch(error => {
        console.log("ERRROR");
        dispatch(fetchIngredientsFailed());
      });
  };
};

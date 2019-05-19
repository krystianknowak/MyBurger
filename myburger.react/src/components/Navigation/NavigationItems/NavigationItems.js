import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/builder" active>Burger Builder</NavigationItem>
        <NavigationItem link="/checkout">Checkout</NavigationItem>
    </ul>
  )
}

export default NavigationItems;

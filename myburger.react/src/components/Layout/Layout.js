import React from 'react'
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
    <>  
    <Toolbar/>
    <SideDrawer/>
    <main className={classes.Content}>
        {props.children}
    </main>
    </>
);

export default Layout;
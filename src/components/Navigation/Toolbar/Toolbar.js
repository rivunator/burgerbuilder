import React from 'react';
import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburger from '../Hamburger/Hamburger';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <Hamburger heigth="30px" clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header >
);

export default toolbar;
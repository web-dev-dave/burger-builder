import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Toggle from '../SideDrawer/Toggle/Toggle'

import classes from './Toolbar.module.css'

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <Toggle clicked={props.sideDrawerToggle} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  )
}

export default Toolbar

import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

import classes from './SideDrawer.module.css'

const SideDrawer = (props) => {
  // Conditionally add CSS classes to open and close sidedrawer
  let attachedClasses = [classes.SideDrawer, classes.Close]
  if (props.show) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }

  return (
    <>
      <Backdrop show={props.show} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}

export default SideDrawer

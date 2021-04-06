import React from 'react'

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

import classes from './Layout.module.css'

export const Layout = (props) => {
  return (
    <>
      <SideDrawer />
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </>
  )
}

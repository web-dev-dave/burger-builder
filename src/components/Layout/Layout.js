import React from 'react'

import Toolbar from '../Navigation/Toolbar/Toolbar'

import classes from './Layout.module.css'

export const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </>
  )
}

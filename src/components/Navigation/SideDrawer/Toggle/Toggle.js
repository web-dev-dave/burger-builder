import React from 'react'

import classes from './Toggle.module.css'

const Toggle = (props) => {
  return (
    <button className={classes.Toggle} onClick={props.clicked}>
      {props.children}
    </button>
  )
}

export default Toggle

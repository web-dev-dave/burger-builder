import React from 'react'

import classes from './Modal.module.css'

export const Modal = ({ show, children }) => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
      }}
    >
      {children}
    </div>
  )
}

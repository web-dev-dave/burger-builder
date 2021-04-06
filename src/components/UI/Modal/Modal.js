import React from 'react'
import Backdrop from '../Backdrop/Backdrop'

import classes from './Modal.module.css'

export const Modal = ({ show, children, modalClose }) => {
  return (
    <>
      <Backdrop show={show} clicked={modalClose} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </>
  )
}

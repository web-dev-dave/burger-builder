import React from 'react'
import Backdrop from '../Backdrop/Backdrop'

import classes from './Modal.module.css'

class Modal extends React.Component {
  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClose} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </>
    )
  }
}

export default Modal

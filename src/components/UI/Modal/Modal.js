import React from 'react'

import classes from './Modal.module.css'

export const Modal = (props) => {
    return (
        <div className={classes.Modal}>
            {props.children}
        </div>
    )
}

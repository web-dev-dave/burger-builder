import React from 'react'
import { BuildControl } from './BuildControl/BuildControl'

import classes from './BuildControls.module.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

export const BuildControls = (props) => {
  const {
    totalPrice,
    addHandler,
    removeHandler,
    disabled,
    purchase,
    purchasing,
  } = props

  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>${totalPrice.toFixed(2)}</strong>
      </p>
      {controls.map((el) => {
        return (
          <BuildControl
            addHandler={() => addHandler(el.type)}
            removeHandler={() => removeHandler(el.type)}
            key={el.label}
            label={el.label}
            type={el.type}
            disabled={disabled[el.type]}
          />
        )
      })}
      <button
        className={classes.OrderButton}
        disabled={!purchase}
        onClick={purchasing}
      >
        ORDER NOW
      </button>
    </div>
  )
}

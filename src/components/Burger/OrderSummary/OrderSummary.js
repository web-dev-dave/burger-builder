import React from 'react'

import Button from '../../UI/Button/Button'

export const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    )
  })

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Cost: ${props.totalCost.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button clicked={props.modalCancel} btnType='Danger'>
        CANCEL
      </Button>
      <Button clicked={props.modalContinue} btnType='Success'>
        CONTINUE
      </Button>
    </>
  )
}

// props.modalClose

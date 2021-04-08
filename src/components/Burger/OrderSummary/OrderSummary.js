import React from 'react'

import Button from '../../UI/Button/Button'

class OrderSummary extends React.Component {
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
            {this.props.ingredients[igKey]}
          </li>
        )
      },
    )

    return (
      <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Cost: ${this.props.totalCost.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.modalCancel} btnType='Danger'>
          CANCEL
        </Button>
        <Button clicked={this.props.modalContinue} btnType='Success'>
          CONTINUE
        </Button>
      </>
    )
  }
}

export default OrderSummary

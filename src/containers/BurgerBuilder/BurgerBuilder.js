import React, { Component } from 'react'
import { Burger } from '../../components/Burger/Burger'



export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    render() {
        return (
            <>
            <div>
                <Burger ingredients={this.state.ingredients}/>
            </div>
            <div>
                Build Controls
            </div>
            </>
        )
    }
}

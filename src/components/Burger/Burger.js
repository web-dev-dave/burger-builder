import React from 'react'


import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

export const Burger = ({ingredients}) => {
    const transformedIngredients = Object.keys(ingredients).map(ingredient => {
        return [...Array(ingredients[ingredient])].map((_, i) => {
           return <BurgerIngredients key={ingredient + i} type={ingredient} />
        })
    })
    
    console.log(transformedIngredients)

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

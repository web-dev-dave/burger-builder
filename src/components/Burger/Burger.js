import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

export const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients).map((ingredient) => {
    return [...Array(ingredients[ingredient])].map((_, i) => {
      return <BurgerIngredients key={ingredient + i} type={ingredient} />;
    });
  }).reduce((arr, el) => {
      return arr.concat(el)
  }, []);

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

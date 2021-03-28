import React from "react";
import { BuildControl } from "./BuildControl/BuildControl";

import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

export const BuildControls = (props) => {
  console.log(props)
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
      {controls.map((el) => {
        return (
          <BuildControl
            addHandler={() => props.addHandler(el.type)}
            removeHandler={() => props.removeHandler(el.type)}
            key={el.label}
            label={el.label}
            type={el.type}
            disabled={props.disabled[el.type]}
          />
        );
      })}
    </div>
  );
};

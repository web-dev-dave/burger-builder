import React from "react";

import classes from "./BuildControl.module.css";

export const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}:</div>
      <button 
        onClick={props.removeHandler} 
        className={classes.Less} 
        disabled={props.disabled}>Less</button>
      <button 
        onClick={props.addHandler} 
        className={classes.More}>More</button>
    </div>
  );
};

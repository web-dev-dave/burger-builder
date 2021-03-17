import React from "react";

import classes from "./Layout.module.css"

export const Layout = (props) => {
  return (
    <>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </>
  );
};

import React from 'react'

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

import classes from './Layout.module.css'

class Layout extends React.Component {
  state = {
    showSideDrawer: true,
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    })
  }

  render() {
    return (
      <>
        <SideDrawer
          show={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <Toolbar />
        <main className={classes.Content}>{this.props.children}</main>
      </>
    )
  }
}

export default Layout

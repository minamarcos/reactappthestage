import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

class Header extends Component {
  state = {
    drawerOpen: false,
    transperantHeader: true
  };
  componentDidMount() {
    window.addEventListener("scroll", this.checkHeaderBGOnScroll);
  }

  checkHeaderBGOnScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        transperantHeader: false
      });
    } else {
      this.setState({
        transperantHeader: true
      });
    }
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.transperantHeader
            ? "transparent"
            : "#2f2f2f",
          boxShadow: "none",
          padding: "10px 0px"
        }}
      >
        <Toolbar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Stage</div>
            <div className="header_logo_title">Book your Event</div>
          </div>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => this.toggleDrawer(value)}
          />
          <SideDrawer />
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;

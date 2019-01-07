import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <ListItem button onClick={() => console.log("sdfdsstarts in")}>
        Event Starts in
      </ListItem>
      <ListItem button onClick={() => console.log("nfo")}>
        Stage NFO
      </ListItem>
      <ListItem button onClick={() => console.log("Highlights")}>
        Highlights
      </ListItem>
      <ListItem button onClick={() => console.log("Pricing")}>
        Pricing
      </ListItem>
      <ListItem button onClick={() => console.log("Location")}>
        Location
      </ListItem>
    </Drawer>
  );
};

export default SideDrawer;

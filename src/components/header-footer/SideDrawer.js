import React from "react";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

const SideDrawer = props => {
  const scrollToElement = el => {
    scroller.scrollTo(el, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -100
    });
    props.onClose(false);
  };
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <ListItem button onClick={() => scrollToElement("top")}>
        Event Starts in
      </ListItem>
      <ListItem button onClick={() => scrollToElement("nfo")}>
        Stage NFO
      </ListItem>
      <ListItem button onClick={() => scrollToElement("Highlights")}>
        Highlights
      </ListItem>
      <ListItem button onClick={() => scrollToElement("Pricing")}>
        Pricing
      </ListItem>
      <ListItem button onClick={() => scrollToElement("Location")}>
        Location
      </ListItem>
    </Drawer>
  );
};

export default SideDrawer;

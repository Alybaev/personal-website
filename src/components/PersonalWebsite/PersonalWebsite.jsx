import "@fontsource/roboto";
import React, { useState } from "react";
import { AppBar, CssBaseline, makeStyles, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab_root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: 0,
  },
}));

function PersonalWebsite() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Tabs
          classes={{ root: classes.tab_root, scroller: classes.scroller }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
        >
          <Tab label="About" id="scrollable-auto-tab-0" />
          <Tab label="Experience" id="scrollable-auto-tab-1" />
          <Tab label="Education" id="scrollable-auto-tab-2" />
          <Tab label="Projects" id="scrollable-auto-tab-3" />
          <Tab label="Skills" id="scrollable-auto-tab-4" />
          <Tab label="Awards" id="scrollable-auto-tab-5" />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default PersonalWebsite;

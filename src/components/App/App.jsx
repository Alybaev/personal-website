import "@fontsource/roboto";
import theme from "../theme";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import PersonalWebsite from "../PersonalWebsite/PersonalWebsite";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PersonalWebsite />
    </ThemeProvider>
  );
}

export default App;

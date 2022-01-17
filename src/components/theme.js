import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import blueGrey from "@material-ui/core/colors/blueGrey";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#c3fdff",
      main: blue[200],
      dark: "#5d99c6",
      contrastText: grey[900],
    },
    secondary: {
      light: "#ffffff",
      main: grey[200],
      dark: "#bcbcbc",
      contrastText: grey[900],
    },
    background: blueGrey[900],
    secondaryBackground: blueGrey[800],
    hoverBackground: blueGrey[700],
    appBarBackground: blueGrey[900],
    drawerBackground: blueGrey[900],

    behindBackground: blueGrey[600],
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    headingColor: "#ffffff",
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,

    overrides: {
      MuiStepLabel: {
        label: {
          color: blueGrey[50],
          "&$active": {
            color: blueGrey[50],
          },
        },
      },
    },
  },
});

export default theme;

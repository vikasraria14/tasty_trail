import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Lato"
  },
  palette: {
    primary: {
      light: "#287bf7",
      main: "#3983e4",
      dark: "#0b64e9",
      contrastText: "#fff",
    },
  },
});

export default theme;

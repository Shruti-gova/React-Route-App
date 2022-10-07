import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { createTheme } from "@mui/material/styles";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const theme = createTheme({
  palette: {
    primary: {
      main: "#2B9770",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 7,
          height: 128,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        },
      },
    },
  },
});
const toolbartheme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column",
          alignItems: " flex-start",
          justifyContent: "space-evenly",
        },
      },
    },
  },
});
export default function ButtonAppBar() {
  return (
    <Box sx={{ pt: 5 }}>
      <AppBar position="static" theme={theme}>
        <Toolbar theme={toolbartheme}>
          <Typography>Orderdue</Typography>
          <Typography fontSize="x-large">
            <CurrencyRupeeIcon />
            3,648,528.34 INR
          </Typography>
          <Typography>Last updated 10 minutes ago.</Typography>
        </Toolbar>
        <Toolbar theme={toolbartheme}>
          <Typography>Due within next 30 days</Typography>
          <Typography fontSize="x-large">
            <CurrencyRupeeIcon /> 1,115,711.43 INR
          </Typography>
        </Toolbar>
        <Toolbar theme={toolbartheme}>
          <Typography>Average time to get paid</Typography>
          <Typography fontSize="x-large">5 Days</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

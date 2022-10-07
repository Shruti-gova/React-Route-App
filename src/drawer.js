import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "./Sales/assests/logo.png";
import Navbar from "./Sales/Navbar";
import NestedList from "./Sales/list";
import Sales from './SalesInvoice'
import SaleCustomerStatement from "./SalesCustomerStatement";
import PurchasesBill from "./Purchases";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SalesRecurringInvoice from "./SalesRecurringInvoice";
import Dashboard from './Dashboard';
import SalesCustomer from "./SalesCustomer";
import Settings from "./Settings";
const drawerWidth = 240;

export default function PermanentDrawer() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#ffffff",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "#000",
              overflow: "inherit",
            }}
          >
            <Navbar />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box component="img" src={logo} sx={{ width: 1, p: 2, my: 2 }}></Box>

        <NestedList />
      </Drawer>
      <BrowserRouter>

        <Routes>
          <Route exact path="" element={<Dashboard />} />
          <Route exact path="invoice" element={<Sales />} />
          <Route exact path="customerstatement" element={<SaleCustomerStatement />} />
          <Route exact path="bill" element={<PurchasesBill />} />
          <Route exact path="recurringInvoice" element={<SalesRecurringInvoice />}></Route>
          <Route exact path="salesCustomer" element={<SalesCustomer />}></Route>
          <Route exact path="settings/*" element={<Settings />} >
          </Route>
        </Routes>
      </BrowserRouter>

    </Box>
  );
}

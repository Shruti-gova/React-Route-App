import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HexagonOutlinedIcon from "@mui/icons-material/HexagonOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const StyledList = styled(List)({
  '& .MuiListItemButton-root': {
    '&:hover': {
      backgroundColor: "#3AD09A",
      color: '#fff',
      borderRadius: "6px"
    }
  },
  '& .MuiTypography-root ': {
    textDecoration: "none",
    color: "inherit"
  },
  '& .MuiList-root .MuiListItemButton-root ': {
    marginLeft: 40,

    '&:active, &:hover, &:after ': {
      backgroundColor: "white",
      color: "#3AD09A",
      borderLeft: "4px solid #3AD09A",
      borderRadius: "0px",
      marginLeft: 50,

    }
  }

});

export default function NestedList() {
  const [open, setOpen] = React.useState(true);
  const [on, setOn] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);

  };

  const handleClicks = () => {
    setOn(!on);
  };

  return (
    <React.Fragment>

      <StyledList
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton>
          <ListItemIcon>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <Link href="/dashboard">
            <ListItemText primary="Dashboard" />
          </Link>
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <HexagonOutlinedIcon />
            <SignalCellularAltOutlinedIcon
              fontSize="1"
              sx={{ position: "absolute", top: 15, left: 19 }}
            />
          </ListItemIcon>
          <ListItemText primary="Sales" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <ListItemText secondary="Estimates" />
            </ListItemButton>
            <ListItemButton>
              <Link href="/invoice">
                <ListItemText secondary="Invoices" />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link href="/recurringInvoice">
                <ListItemText secondary="Recurring Invoices" />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link href="/customerstatement">
                <ListItemText secondary="Customers Statements" />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link href="/salesCustomer">
                <ListItemText secondary="Customer" />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <ListItemText secondary="Product & Services" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClicks}>
          <ListItemIcon>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Purchases" />
          {on ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={on} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <Link href="/bill">
                <ListItemText secondary="Bills" />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <ListItemText secondary="Vendors" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText secondary="Product & Service" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemIcon>
            <DashboardCustomizeOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Accounting" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Payroll" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SignalCellularAltOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItemButton>
      </StyledList>
      <Divider />
      <StyledList>
        <ListItemButton>
          <ListItemIcon>
            <HexagonOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Integrations" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SettingsOutlinedIcon />
          </ListItemIcon>
          <Link href="/settings/*">
            <ListItemText primary="Settings" />
          </Link>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </StyledList>
    </React.Fragment >
  );
}

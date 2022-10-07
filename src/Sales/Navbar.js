import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import profile from "./assests/profile.png";
export default function Navbar() {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", gap: 54 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <IconButton sx={{ boxShadow: 1 }}>
            <MenuIcon />
          </IconButton>
          <Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label=" General Search"
                variant="standard"
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <IconButton sx={{ boxShadow: 1 }}>
            <LightModeOutlinedIcon />
          </IconButton>
          <IconButton sx={{ boxShadow: 1 }}>
            <NotificationsOutlinedIcon />
          </IconButton>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={profile} />
            </ListItemAvatar>
            <ListItemText primary="Jane Cooper" secondary="UI Designer" />
          </ListItem>
        </Box>
      </Box>
    </React.Fragment>
  );
}

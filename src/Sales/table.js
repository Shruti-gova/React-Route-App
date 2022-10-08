import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Box from "@mui/material/Box";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import img1 from "./assests/img1.png";
import img2 from "./assests/img2.png";
import img3 from "./assests/img3.png";
import img4 from "./assests/img4.png";
import img5 from "./assests/img5.png";
import img6 from "./assests/img6.png";
import img7 from "./assests/img7.png";

function createData(client, image, date, email, amount, serviceType, status) {
  return { client, image, date, email, amount, serviceType, status };
}

const rows = [
  createData(
    "Jhon Doe",
    img1,
    "March 10,2021",
    "felicia.reid@gmail.com",
    450,
    "Service Maintance",
    "Paid"
  ),
  createData(
    "Jerome Bell",
    img2,

    "March 11, 2021",
    "tim.jennings@gmail.com",
    550,
    "Upgrade Plan",
    "Unpaid"
  ),
  createData(
    "Devon Lane",
    img3,

    "March 12, 2021",
    "sara.cruz@gmail.com",
    300,
    "Clear Up",
    "Paid"
  ),
  createData(
    "Jerome Bell",
    img4,

    "March 15, 2021",
    "felicia.reid@gmail.com",
    600,
    "Service Maintance",
    "Unpaid"
  ),
  createData(
    "Theresa Webb",
    img5,

    "March 20,2021",
    "tanya.hill@gmail.com",
    800,
    "web Development",
    "Paid"
  ),
  createData(
    "Cody Fisher",
    img6,

    "March 25, 2021",
    "sara.cruz@gmail.com",
    1200,
    "UI and Ux Designer",
    "Unpaid"
  ),
  createData(
    "Devon Lane",
    img7,

    "March 27,2021",
    "felicia.reid@gmail.com",
    1100,
    "Service Maintance",
    "Unpaid"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ borderBottom: "1px solid #8d89893d" }}>
            <TableCell>Client</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Service Type</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.client}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Box component="img" src={row.image}></Box>
                </ListItemAvatar>
                <ListItemText primary={row.client} secondary="Jan 9, 2014" />
              </ListItem>
              <TableCell sx={{ border: "none" }}>{row.date}</TableCell>
              <TableCell sx={{ border: "none" }}>{row.email}</TableCell>
              <TableCell sx={{ border: "none" }}>{row.amount}</TableCell>
              <TableCell sx={{ border: "none" }}>{row.serviceType}</TableCell>
              <TableCell sx={{ border: "none" }}>{row.status}</TableCell>
              <TableCell sx={{ border: "none" }}>
                <MoreHorizIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

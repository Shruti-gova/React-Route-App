import * as React from "react";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Typography from "@mui/material/Typography";
import BoxSx from "./halfCircle";

function createData(percent, number, type) {
  return { percent, number, type };
}
const values = [
  createData("+25%", 691, "Total Invoice"),
  createData("+10%", 741, "Paid Invoice"),
  createData("-15%", 123, "Unpaid Invoice"),
  createData("-3%", 50, "Draft Invoice"),
];
export default function BasicCard() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", pt: 5 }}>
      {values.map((value) => (
        <CardContent
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            boxShadow: 3,
            width: 230,
            height: 150,
            borderRadius: 1,
          }}
        >
          <CurrencyExchangeIcon />

          <Typography
            sx={{ position: "relative", left: 133, display: "initial" }}
          >
            {value.percent}
          </Typography>

          <Typography variant="h5" sx={{ pt: 3 }}>
            {value.number}
          </Typography>
          <Typography color="text.secondary">{value.type}</Typography>
          <BoxSx />
        </CardContent>
      ))}
    </Box>
  );
}

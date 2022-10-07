import * as React from "react";
import Box from "@mui/material/Box";
import { borderRadius } from "@mui/system";

export default function BoxSx() {
  return (
    <Box>
      <Box
        sx={{
          width: 40,
          height: 80,
          backgroundColor: "#3ad09a61",
          borderRadius: "70px 0px 0px 70px",
          position: "relative",
          top: -58,
          left: 174,
        }}
      />
      <Box
        sx={{
          top: -117,
          left: 153,
          transform: "rotate(90deg)",
          width: 40,
          height: 80,
          backgroundColor: "#3ad09a61",
          borderRadius: "70px 0px 0px 70px",
          position: "relative",
        }}
      />
    </Box>
  );
}

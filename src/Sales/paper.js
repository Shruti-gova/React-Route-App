import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import SelectSmall from "./selectBar";
import BasicTable from "./table"
import Paging from "./pagination";
export default function SimplePaper() {
  return (
    <Paper sx={{ mt: 5 }}>
      <Box
        sx={{
          m: 1,
          p: 3,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6">Latest Invoices</Typography>
        </Box>
        <Box>
          <SelectSmall />
        </Box>
      </Box>
      <BasicTable />
      <Paging />
    </Paper>
  );
}

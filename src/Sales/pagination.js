import { Typography } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";

export default function Paging() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
      <Typography>
        Show
        <FormControl
          size="small"
          sx={{ width: 67, height: 33, top: "-13px", m: 1 }}
        >
          <InputLabel>25</InputLabel>

          <Select>
            <MenuItem>1</MenuItem>
            <MenuItem>1</MenuItem>
            <MenuItem>1</MenuItem>
          </Select>
        </FormControl>
        Per Page
      </Typography>
      <Stack spacing={2}>
        <Pagination count={3} variant="outlined" shape="rounded" />
      </Stack>
    </Box>
  );
}

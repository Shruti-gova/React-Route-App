import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function createData(name) {
  return { name };
}

const values = [
  createData("All Customers"),
  createData("All Statuses"),
  createData("From"),
  createData("To"),
];
export default function SelectSmall() {
  return (
    <Box display="flex">
      {values.map((value) => (
        <FormControl sx={{ m: 1, minWidth: 143 }} size="small">
          <InputLabel id="demo-select-small">{value.name}</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      ))}
      <TextField
        id="outlined-search"
        label="Enter Invoice#"
        type="search"
        size="small"
        sx={{ width: 144, top: 8 }}
      />
    </Box>
  );
}

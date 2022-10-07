import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Button from '@mui/material/Button';

export default function SetteingsDateAndCurrancy() {
    return (
        <Box sx={{
            width: "100%",
            m: 8
        }}>
            <Typography variant="h5">Date and Currancy</Typography>
            <Stack spacing={2} alignItems="center">
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 10
                }}>
                    <Typography color="GrayText">
                        Fiscal Year End
                    </Typography>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Month</InputLabel>
                        <Select
                            label="Month"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>January</MenuItem>
                            <MenuItem value={2}>February</MenuItem>
                            <MenuItem value={3}>March</MenuItem>
                            <MenuItem value={4}>April</MenuItem>
                            <MenuItem value={5}>May</MenuItem>
                            <MenuItem value={6}>June</MenuItem>
                            <MenuItem value={7}>July</MenuItem>
                            <MenuItem value={8}>September</MenuItem>
                            <MenuItem value={9}>October</MenuItem>
                            <MenuItem value={10}>November</MenuItem>

                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
                        <InputLabel id="demo-select-small">Date</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            label="Date"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>

                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Typography color="GrayText">
                        Business Currancy
                    </Typography>

                    <Typography sx={{ backgroundColor: "#F5F6FA", display: "flex", ml: 2 }}>
                        INR(<CurrencyRupeeIcon size="small" />)- Indian Ruppe <HelpOutlineIcon size="small" />
                    </Typography>
                </Box>
                <Button variant='contained' color='success' sx={{ width: "88px", borderRadius: "20px", ml: 28 }} >Save</Button>

            </Stack >

        </Box >)
}
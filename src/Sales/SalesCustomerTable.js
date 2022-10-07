import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function createData(name, gender, lastjoin, join, member, overdue) {
    return { name, gender, lastjoin, join, member, overdue };
}

const rows = [
    createData('Jane Cooper', "Male", "05/10/2020", 34, "Golden", "$2,350.00"),
    createData('Wade Warren', "Female", "05/10/2020", 0, "Golden", "$750.00"),
    createData('Esther Howard', "Male", "05/10/2020", 12, "Silver", "$1,443.50"),
    createData('Williamson', "Female", "05/09/2020", 23, "Golden", "$2,350.00"),
    createData('Leslie Alexander', "Male", "05/09/2020", 45, "Silver", "$750.83"),
    createData('Jenny Wilson', "Female", "05/09/2020", 0, "Golden", "$1,443.50"),
    createData('Robert Fox', "Male", "05/09/2020", 45, "Silver", "$2,350.00"),
    createData('Guy Hawkins', "Male", "05/08/2020", 23, "Golden", "$750.83"),
];

export default function SalesCustomerTable() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: "100%",
                    // height: 128,
                    p: 1
                },
            }}
        >
            <Paper sx={{ backgroundColor: "#E5E5E5" }} >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box display='flex'>
                        <Typography variant='h6'>All Customers</Typography>
                        <Typography sx={{
                            display: "flex",
                            m: 1,
                            border: "1px solid green",
                            color: "green",
                            p: 1,
                            borderRadius: 1,
                            width: 165,
                            height: 42
                        }} >
                            <SearchIcon />
                            Quick Search
                        </Typography>
                        <FormControl sx={{ m: 1, width: 144 }} size="small">
                            <InputLabel id="demo-select-small">All Members</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                label="All Members"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem >Ten</MenuItem>
                                <MenuItem>Twenty</MenuItem>
                                <MenuItem >Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <Button sx={{
                            color: "#fff",
                            backgroundColor: "#3AD09A",
                            m: 1
                        }}><OpenInNewIcon />
                            Export</Button>
                        <Button sx={{
                            color: "#fff",
                            backgroundColor: "#3AD09A",
                            m: 1
                        }}>+ New Customers</Button>
                    </Box>
                </Box>
                <TableContainer component={Paper} sx={{ mt: 2, p: 2 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <FormControlLabel control={<Checkbox />} label="Name" />
                                </TableCell>
                                <TableCell >Gender</TableCell>
                                <TableCell >Last join</TableCell>
                                <TableCell >Join</TableCell>
                                <TableCell >Member</TableCell>
                                <TableCell >Overudue</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <FormControlLabel control={<Checkbox />} label={row.name} />

                                    </TableCell>
                                    <TableCell >{row.gender}</TableCell>
                                    <TableCell >{row.lastjoin}</TableCell>
                                    <TableCell >{row.join}</TableCell>
                                    <TableCell >{row.member}</TableCell>
                                    <TableCell >{row.overdue}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper >
        </Box >
    );
}

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
}))

function createData(Header, company, Invoicedate, Duedate, status, amount) {
    return { Header, company, Invoicedate, Duedate, status, amount };
}

const rows = [
    createData('INV-001', 'Openlane', '05/10/2020', '06/10/2020', 'paid', '$2,350.00'),
    createData('INV-002', 'Gogozoom', '05/10/2020', '06/10/2020', 'paid', '$750.00'),
    createData('INV-003', 'Nam-zim', '05/10/2020', '06/10/2020', 'Overdue', '$1,443.50'),
    createData('INV-004', 'Sunnamplex', '05/9/2020', '06/9/2020', 'paid', '$2,350.00'),
    createData('INV-005', 'Codehow', '05/9/2020', '06/9/2020', 'Overdue', '$750.00'),
    createData('INV-006', 'Konex', '05/9/2020', '06/9/2020', 'paid', '$1,443.50'),
    createData('INV-007', 'Inity', '05/9/2020', '06/9/2020', 'Overdue', '$2,450.00'),
    createData('INV-008', 'Domezoom', '05/8/2020', '06/8/2020', 'paid', '$750.00'),
    createData('INV-009', 'Betasoloin', '05/8/2020', '06/8/2020', 'pending', '$1,443.50'),
    createData('INV-010', 'Kinnamplus', '05/8/2020', '06/8/2020', 'paid', '$2,350.00'),
    createData('INV-011', 'Nam-zim', '05/8/2020', '06/8/2020', 'overdue', '$750.00'),
    createData('INV-012', 'Openlane', '05/8/2020', '06/8/2020', 'paid', '$1,443.50'),
    createData('INV-013', 'Domzoom', '05/8/2020', '06/8/2020', 'overdue', '$2,350.00'),
    createData('INV-011', 'Konex', '05/8/2020', '06/8/2020', 'paid', '$2,350.00'),
];

export default function SalesRucrringInvoiceTable() {
    return (
        <React.Fragment>
            <Box sx={{ display: "flex", justifyContent: 'space-between', pt: 4 }}>
                <Typography variant='h6'>Recurring Invoice</Typography>
                <Box>
                    <Button variant="contained" color="success" sx={{ m: 1 }}>
                        <SearchIcon />
                    </Button>
                    <Button variant="contained" color="success">Action</Button>
                </Box>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <FormControlLabel control={<Checkbox />} label="Header" />
                            </TableCell>
                            <TableCell >Company</TableCell>
                            <TableCell >Invoice Date</TableCell>
                            <TableCell >Due Date</TableCell>
                            <TableCell >Status</TableCell>
                            <TableCell >Amount</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <FormControlLabel control={<Checkbox />} label={row.Header} />

                                </TableCell>
                                <TableCell >{row.company}</TableCell>
                                <TableCell>{row.Invoicedate}</TableCell>
                                <TableCell>{row.Duedate}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="success" sx={{ width: 100 }}>{row.status}</Button></TableCell>
                                <TableCell>{row.amount}</TableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment >
    );
}

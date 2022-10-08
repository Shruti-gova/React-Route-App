import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontWeight: 800
                }
            }
        }
    }
});


export default function SalesCustomerStatementCard() {
    return (
        <Card sx={{ minWidth: 275, mt: 3, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    Techstuff Private Limited
                </Typography>
                <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="body1" color="GrayText" sx={{ width: "185px", }}>
                        LUT:- AD2312210098993
                        370 Nayapura, Rangwasa Rau
                        Indore, Madhya Pradesh 452013
                        India
                    </Typography>
                    <Stack>
                        <Typography variant="h4">Statement of Account</Typography>
                        <Typography variant="h6" color="GrayText">
                            Outstanding Invoices
                        </Typography>
                    </Stack>
                </Box>
                <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
                    <Stack>
                        <Typography color="GrayText">Bill To</Typography>
                        <Typography variant='h5'>Acceleratoe App</Typography>
                    </Stack>
                    <Stack spacing={1.5}>
                        <Typography variant='h5'>United State Dollar (USD)</Typography>
                        <Typography color="GrayText">As of Apr 4, 2022</Typography>
                        <Divider variant="middle" />
                        <Typography variant='caption'>Overdue :  $ 5,900.00</Typography>
                        <Typography variant='caption'>Not yet due :  $ 0.00</Typography>
                        <Typography >Outstanding balance (USD) :  $ 5,900.00</Typography>
                    </Stack>
                </Box>
                <Table aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <ThemeProvider theme={theme}>
                                <TableCell>Invoice#</TableCell>
                                <TableCell>Invoice date</TableCell>
                                <TableCell>Due date</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell>Paid</TableCell>
                                <TableCell>Due</TableCell>
                            </ThemeProvider>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Invoice20</TableCell>
                            <TableCell>Dec 2, 2021</TableCell>
                            <TableCell>Dec 2, 2021</TableCell>
                            <TableCell>$2,950.00</TableCell>
                            <TableCell>$0.00</TableCell>
                            <TableCell>$2,950.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Invoice22</TableCell>
                            <TableCell>Dec 31,2021</TableCell>
                            <TableCell>Dec 31,2021</TableCell>
                            <TableCell>$ 2,950.00</TableCell>
                            <TableCell>$0.00</TableCell>
                            <TableCell>$2,950.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button variant="contained" color="success" sx={{ height: 50, ml: 60, mt: 3, borderRadius: 2 }}>Outstanding balance (USD) :  $ 5,900.00</Button>

            </CardContent>

        </Card>
    );
}

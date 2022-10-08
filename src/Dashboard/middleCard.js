import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
const theme = createTheme({

    palette: {
        primary: {
            main: '#46E1C7',
        },
        secondary: {
            main: "#E323FF",

        },
        yello: {
            main: "#FFD422"
        }

    },
});
const styles = {
    circle1: {
        position: "relative",
        bottom: 111
    },
    circle2: {
        position: "relative",
        bottom: 223,
        transform: "rotate(-206deg)"
    }
}
function createData(dueDays, payment) {
    return { dueDays, payment };
}

const rows = [
    createData('1-30 days overdue', '$0.00'),
    createData('31-60 days overdue', '$1,610,021.42'),
    createData('61-90 days overdue', '$0.00'),
    createData('>90 days overdue', '$2,038,506.92'),
];

export default function MiddleCard() {
    return (
        <Box display="flex" justifyContent='space-around'>
            <Card sx={{ minWidth: 300, p: 1, boxShadow: 3, m: 1 }}>
                <Table aria-label="simple table">

                    <TableHead>Invoices payable to you</TableHead>

                    <TableRow>
                        <TableCell>Coming due</TableCell>
                        <TableCell>$302,917.91</TableCell>
                    </TableRow>


                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.dueDays}</TableCell>
                                <TableCell align="right">{row.payment}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>

            </Card>

            <Card sx={{ minWidth: 300, p: 1, boxShadow: 3, m: 1 }}>
                <Table aria-label="simple table">
                    <TableHead>Bill you owe</TableHead>
                    <TableHead>
                        <TableRow>
                            <TableCell>Coming due</TableCell>
                            <TableCell>$0.00</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.dueDays}</TableCell>
                                <TableCell>$0.00</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>

            </Card>
            <Card sx={{ minWidth: 300, p: 1, boxShadow: 3, m: 1 }}>
                <Typography variant="h6">
                    Pie Chart
                </Typography>
                <Typography>
                    Popular UX tools
                </Typography>
                <Box sx={{
                    position: "relative",
                    width: 150,
                    height: 150,
                    textAlign: "center",
                    left: 67,
                    top: 38,
                }}>
                    <ThemeProvider theme={theme}>
                        <CircularProgress variant="determinate" size={120} value={66} color="primary" />
                        <CircularProgress variant="determinate" size={90} value={90} color="secondary" style={styles.circle1} />
                        <CircularProgress variant="determinate" size={120} value={30} color="yello" style={styles.circle2} />

                    </ThemeProvider>
                </Box>
            </Card>

        </Box>
    );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';


const style = {
    firstBox: {
        backgroundColor: "#A4DCD7"
    },
    secondBox: {
        backgroundColor: "#49837D"
    },
    fontstyle: {
        fontSize: "10px"
    },
    fontColor: {
        color: "#3AD09A"
    }
}

const colorTheme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    width: 10,
                    height: 10,
                    borderRadius: 2,
                    boxShadow: 3,
                },
            },
        },
    },
});

const barTheme = createTheme({
    components: {
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    position: "relative",
                    display: "flex",
                    height: 10,
                    transform: "rotate(270deg)",
                    borderRadius: 5,
                    right: 54,

                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    width: 46

                },
            },
        },
    }
})

const CardBox = styled(Box)({
    display: "flex",
    width: "65%",
    flexWrap: "wrap",

    '& .MuiCard-root': {
        width: 257,
        margin: 10,
        padding: 10,
        display: "flex",
        justifyContent: "space-between"
    }

});


export default function SalesRecurringInvoiceCards() {
    return (
        <Box width="100%" sx={{ display: "flex" }}>
            <CardBox>
                <Card>
                    <Stack>
                        <Typography variant='h6'>All Invoices</Typography>
                        <Typography variant='caption' color='GrayText'>Week Comparison</Typography>
                    </Stack>
                    <Typography>1.345
                        <ArrowUpwardIcon color='success' fontSize='small' />
                    </Typography>
                </Card>
                <Card>
                    <Stack>
                        <Typography variant='h6'>Sechduled</Typography>
                        <Typography variant='caption' color='GrayText'>Month Comparison</Typography>
                    </Stack>
                    <Typography>1.345
                        <ArrowUpwardIcon color='success' fontSize='small' />
                    </Typography>                </Card>  <Card>
                    <Stack>
                        <Typography variant='h6'>Unpaid</Typography>
                        <Typography variant='caption' color='GrayText'>Month Comparison</Typography>
                    </Stack>
                    <Typography>1.345
                        <ArrowUpwardIcon color='success' fontSize='small' />
                    </Typography>                </Card>  <Card>
                    <Stack>
                        <Typography variant='h6'>Paid</Typography>
                        <Typography variant='caption' color='GrayText'>Week Comparison</Typography>
                    </Stack>
                    <Typography>1.345
                        <ArrowUpwardIcon color='success' fontSize='small' />
                    </Typography>                </Card>
            </CardBox>
            <Card sx={{ width: '50%', position: "relative", boxShadow: 3 }}>
                <CardContent sx={{
                    maxHeight: 300
                }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <Typography variant="body2">
                                Comparison History
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                Week to week performance
                            </Typography>

                        </Box>
                        <Box>
                            <Box display="flex" gap="6px">
                                <ThemeProvider theme={colorTheme}>
                                    <Typography style={style.firstBox}></Typography>
                                </ThemeProvider>
                                <Typography style={style.fontstyle} >Inflow</Typography>
                                <ThemeProvider theme={colorTheme}>

                                    <Typography style={style.secondBox}></Typography>
                                </ThemeProvider>

                                <Typography style={style.fontstyle} >Outflow</Typography>
                            </Box>
                            <Box display="flex" gap="6px">

                                <Typography style={style.fontstyle} >Last 2 week</Typography>
                                <Typography style={style.fontstyle} color={style.fontColor}>Last 6 week</Typography>

                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{
                        position: "relative",
                        display: "flex",
                        height: 172,
                        top: 35
                    }}>
                        <ThemeProvider theme={barTheme}>
                            <Typography>
                                <LinearProgress color='secondary' variant="determinate" value={100} sx={{ width: 100, top: 121, right: 29 }} />
                                <LinearProgress variant="determinate" value={100} sx={{ width: 175, top: 75, right: 81 }} />
                            </Typography>
                            <Typography>
                                <LinearProgress variant="determinate" value={100} sx={{ width: 120, top: 111, right: 44 }} />
                                <LinearProgress color='secondary' variant="determinate" value={100} sx={{ width: 111, top: 105, right: 24 }} />
                            </Typography>  <Typography>
                                <LinearProgress variant="determinate" value={100} sx={{ width: 120, top: 111, right: 28 }} />
                                <LinearProgress color='secondary' variant="determinate" value={100} sx={{ width: 111, top: 105, right: 8 }} />
                            </Typography>  <Typography>
                                <LinearProgress variant="determinate" value={100} sx={{ width: 63, top: 140, left: 16 }} />
                                <LinearProgress color='secondary' variant="determinate" value={100} sx={{ width: 59, top: 132, left: 32 }} />
                            </Typography>
                            <Typography>
                                <LinearProgress color='secondary' variant="determinate" value={100} sx={{ width: 202, top: 71, right: 25 }} />
                                <LinearProgress variant="determinate" value={100} sx={{ width: 100, top: 111, left: 12 }} />
                            </Typography>  <Typography>
                                <LinearProgress variant="determinate" value={100} sx={{ width: 63, top: 139, left: 47 }} />
                                <LinearProgress color='secondary' variant="determinate" value={100} sx={{ width: 100, top: 111, left: 45 }} />
                            </Typography>  <Typography>
                                <LinearProgress color='secondary' variant="determinate" value={100} sx={{ width: 100, top: 120, left: 53 }} />
                                <LinearProgress variant="determinate" value={100} sx={{ width: 202, top: 60, right: 13 }} />
                            </Typography>
                        </ThemeProvider>

                    </Box>

                </CardContent>
                <Table sx={{ mt: 3 }}>
                    <TableCell>JAN</TableCell>
                    <TableCell>FAB</TableCell>
                    <TableCell>MAR</TableCell>
                    <TableCell>APR</TableCell>
                    <TableCell>MAY</TableCell>
                    <TableCell>JUN</TableCell>
                    <TableCell>JUL</TableCell>
                    <TableCell>AGU</TableCell>


                </Table>

            </Card>
        </Box>
    );
}



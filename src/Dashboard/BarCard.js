import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
        fontSize: "13px"
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
                    width: 15,
                    height: 15,
                    borderRadius: 2,
                    boxShadow: 3,
                },
            },
        },
    },
});
const chartTheme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    width: 50,
                    margin: 20,
                    // boxShadow: 3,
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



export default function BarCard() {
    return (
        <Card sx={{ minWidth: 275, top: 25, position: "relative", boxShadow: 3 }}>
            <CardContent sx={{
                maxHeight: 300
            }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box>
                        <Typography variant="h5" color="text.secondary">
                            Clash Flow
                        </Typography>

                        <Typography style={style.fontstyle} color="text.secondary">
                            Cash coming in and going out of
                            <br />your business
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

                            <Typography style={style.fontstyle} >Last 12 Month</Typography>
                            <Typography style={style.fontstyle} color={style.fontColor}>Last 24 Month</Typography>

                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <ThemeProvider theme={chartTheme}>
                            <Typography>500K</Typography>
                            <Typography>100K</Typography>
                            <Typography>50K</Typography>
                            <Typography>10K</Typography>
                            <Typography>0</Typography>
                        </ThemeProvider>
                    </Box>
                    <Box sx={{
                        position: "relative",
                        display: "flex",
                        width: 518,
                        height: 172,
                        bottom: 196,
                        left: 69,
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
                            </Typography>  <Typography>
                                <LinearProgress variant="determinate" value={100} sx={{ width: 80, top: 130, left: 65 }} />
                                <LinearProgress color='secondary' variant="determinate" value={100} sx={{ width: 100, top: 110, left: 70 }} />
                            </Typography> <Typography>
                                <LinearProgress variant="determinate" value={100} sx={{ width: 65, top: 137, left: 87 }} />
                                <LinearProgress color='secondary' variant="determinate" value={100} sx={{ width: 79, top: 121, left: 94 }} />
                            </Typography>   <Typography>
                                <LinearProgress color='secondary' variant="determinate" value={100} sx={{ width: 202, top: 71, left: 47 }} />
                                <LinearProgress variant="determinate" value={100} sx={{ width: 100, top: 110, left: 84 }} />
                            </Typography>
                        </ThemeProvider>

                    </Box>

                </Box>
            </CardContent>
            <Table sx={{ ml: 8 }}>
                <TableCell>JAN</TableCell>
                <TableCell>FAB</TableCell>
                <TableCell>MAR</TableCell>
                <TableCell>APR</TableCell>
                <TableCell>MAY</TableCell>
                <TableCell>JUN</TableCell>
                <TableCell>JUL</TableCell>
                <TableCell>AGU</TableCell>
                <TableCell>OCT</TableCell>
                <TableCell>DEC</TableCell>


            </Table>
        </Card >
    );
}

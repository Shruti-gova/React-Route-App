import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import EditIcon from '@mui/icons-material/Edit';
import { CardActions } from '@mui/material';
import JoinLeftIcon from '@mui/icons-material/JoinLeft';
const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
            contrastText: '#000',
        },
        success: {
            main: '#3ad09a',
            contrastText: '#fff',
        },
    },
});

const Cards = (props) => (
    <React.Fragment>
        <Card sx={{
            minWidth: 300, height: "100%", p: 1, boxShadow: 3, m: 1, backgroundColor: "#3ad09a",
            color: "#ffffff"
        }}>
            <CardContent>
                <Typography>
                    {props.plan}
                </Typography>
                <Typography variant='h5'>
                    {props.payment}
                    <Typography variant="caption">{props.value}</Typography>
                </Typography>
                <Typography variant="h6">{props.company}</Typography>

            </CardContent>
            <CardActions>
                <ThemeProvider theme={theme}>
                    <Button size="small" variant="contained" color="primary">{props.button}</Button>
                </ThemeProvider>
            </CardActions>
        </Card>
    </React.Fragment >
)
export default function BillDetails() {

    return (
        <Box width="100%" sx={{ mt: 3 }}>
            <Box display="flex" justifyContent="space-between" sx={{ pb: 2 }}
            >
                <Typography variant='h5'>Bill Details</Typography>
                <ThemeProvider theme={theme}>
                    <Button size="small" variant="contained" color="success">Create your first bill</Button>
                </ThemeProvider>
            </Box>
            <Box display="flex">


                <Box sx={{ display: "flex" }}>

                    <Cards plan="current subsciption plan" payment='$ 25' value="00" company="Company Plus" button="Change Plan" ></Cards>
                    <Cards plan="Next Payment" payment='$ 50' value="00" company="On May 15, 2021" button="Manage Payment" />
                </Box>

                <Card sx={{ minWidth: 330, p: 3, boxShadow: 3, m: 1, }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6">Payment Information</Typography>
                        <EditIcon />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", pt: 1 }}>
                        <Card sx={{ maxWidth: 216, backgroundColor: "#706565d9", color: "#fff", p: 1.5 }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="caption" >Finaci</Typography>
                                <JoinLeftIcon />
                            </Box>
                            <Typography variant="caption">**** **** **** 2345</Typography>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Box>
                                    <Typography variant="caption">Card holdar name</Typography>
                                    <Typography variant="body2">Noman Manzoor</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="caption">Expiry Date</Typography>
                                    <Typography sx={{ pl: 3 }}>02/30</Typography>
                                </Box>
                            </Box>
                        </Card>
                        <Box>
                            <Typography variant="caption" color="text.secondary">Master Card</Typography>
                            <Typography variant="body2" color="text.secondary">Expiry date</Typography>

                        </Box>
                        <Box>
                            <Typography variant="body2">5432</Typography>

                            <Typography variant="body2">02/30</Typography>
                        </Box>

                    </Box>
                </Card>
            </Box >
        </Box >
    );
}
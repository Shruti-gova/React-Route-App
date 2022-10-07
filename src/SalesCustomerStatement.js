import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import SalesCustomerStatementCard from './Sales/SalesCutomerStatementCard'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function SalesCustomerStatement() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box component="div" sx={{ p: 3, m: 4, width: "100%", pl: 7, pr: 7 }}>
            <Toolbar />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant='h5' color='text.secondary'>
                    Customers Statements
                </Typography>
                <Button variant="text" color="success">How does this work?</Button>
            </Box>
            <Card sx={{ display: "flex", justifyContent: "space-between", mt: 2, backgroundColor: "#3AD09A4D" }}>
                <CardContent sx={{ display: "flex" }}>
                    <Box>
                        <Typography variant="h6">Customer</Typography>
                        <FormControl sx={{ m: 1, minWidth: 210 }} size="small">

                            <InputLabel id="demo-select-small" >Accelator App</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Accelator App"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>

                    </Box>
                    <Box>
                        <Typography variant="h6">Type</Typography>
                        <FormControl sx={{ m: 1, width: 210 }} size="small">

                            <InputLabel id="demo-select-small">Outstanding Invoices</InputLabel>

                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={age}
                                label="Outstanding Invoices"
                                onChange={handleChange}
                            >

                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                </CardContent>
                <CardActions>
                    <Button variant="contained" color="success" sx={{ width: 150, borderRadius: 20 }}>Refresh</Button>
                </CardActions>
            </Card>

            <Box sx={{
                mt: 7,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <FormControl sx={{ m: 1, width: 210 }} size="small">

                    <InputLabel id="demo-select-small">More Actions</InputLabel>

                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={age}
                        label="More Actions"
                        onChange={handleChange}
                    >

                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" color="success" sx={{ width: 150, borderRadius: 2 }}>Statements</Button>

            </Box>
            <SalesCustomerStatementCard />
        </Box>
    );
}



export default SalesCustomerStatement;

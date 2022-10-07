import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function createData(amount, status, recipient, date, paymentMethod) {
    return { amount, status, recipient, date, paymentMethod };
}

const values = [
    createData("$65.00", "Pending", "Guy Hawkins", 'May 10, 2020', 'Visa5432'),
    createData("$250.00", "Completed", "Eleanor Pena", 'May 1 2020', 'Visa5432'),
    createData("$65.00", "Completed", "Esther Haward", 'May 10, 2020', 'Visa5432'),
    createData("$65.00", "Pending", "Wadd Warren", 'May 10, 2020', 'Visa5432'),
    createData("$65.00", "Completed", "Dianne Russell", 'May 10, 2020', 'Visa5432'),
    createData("$65.00", "Pending", "Floyd Miles", 'May 10, 2020', 'Visa5432'),

];
export default function SimpleAccordion() {
    return (
        <div>
            {values.map((value) => (
                <Accordion sx={{
                    mb: 3
                }} >
                    <AccordionSummary sx={{ backgroundColor: "#3ad09a" }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Box display='flex' alignItems="center">
                            <Typography sx={{ mr: 4 }}>{value.amount}</Typography>
                            <Button size="small" variant="outlined" sx={{ mr: 4 }}>{value.status}</Button>
                            <Box display="flex" sx={{ mr: 2 }}>
                                <Avatar sx={{ width: 30, height: 30 }}
                                    variant="square">
                                    N
                                </Avatar>
                                <Typography sx={{ mr: 4 }}>{value.recipient}</Typography>
                            </Box>
                            <Typography sx={{ mr: 4 }}>{value.date}</Typography>
                            <Typography sx={{ mr: 4 }}>{value.paymentMethod}</Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <Typography color="text.secondary">Billing Plan</Typography>
                            <Typography variant="h6">Company Start</Typography>
                            <Box sx={{
                                width: 225,
                                backgroundColor: "#3AD09A33",
                                height: 81,
                                padding: 1,
                                display: "flex",
                                borderRadius: 2
                            }}>
                                <HelpOutlineIcon fontSize="small" />
                                <Typography variant="caption">5 team member ($8 month/each) +100 GB extra storage($25.00) +8 extra hours($2 per 1 hour)</Typography>


                            </Box>
                        </Box>
                        <Box>
                            <Typography color="text.secondary">Status</Typography>
                            <Typography variant="body1">{value.status}</Typography>
                            <Typography color="text.secondary">Id Number</Typography>
                            <Typography variant="body1">EKSGSRAW</Typography>
                        </Box>
                        <Box>
                            <Typography color="text.secondary">Invoice date</Typography>
                            <Typography variant="body1">Apr 10, 2020</Typography>
                            <Typography color="text.secondary">Paid date</Typography>
                            <Typography variant="body1">Apr 10, 2020</Typography></Box>
                        <Divider orientation="vertical" variant="middle" flexItem />

                        <Box>
                            <Typography color="text.secondary">Amount due</Typography>
                            <Typography variant="body1">{value.amount}</Typography>
                        </Box>

                    </AccordionDetails>
                </Accordion>
            ))}

        </div>
    );
}

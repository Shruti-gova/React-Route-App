import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import SimpleAccordion from './Accordian';
import image from "./Rectangle.png"
import EditIcon from '@mui/icons-material/Edit';
import LinearProgress from '@mui/material/LinearProgress';
import imge from './image 1.png'
export default function PaymentHistory() {
    return (
        <Box sx={{ flexGrow: 1, pt: 4, m: 2 }}>
            <Typography variant='h5'>Payment History</Typography>

            <Box display="flex" justifyContent="space-between" sx={{ pb: 2, }}>
                <Box sx={{ width: "200%", mr: 3 }}>
                    <AppBar position="static" sx={{ mr: 4, mb: 4, color: "text.secondary", backgroundColor: "#3AD09A26" }}>
                        <Toolbar >
                            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Amount
                            </Typography>
                            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Status
                            </Typography>
                            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Recipient
                            </Typography>
                            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Date
                            </Typography>
                            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Payment Method
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <SimpleAccordion />
                </Box>
                <Box sx={{ width: "76%", height: "100%", }}>
                    <Card sx={{ p: 1, m: 1, boxShadow: 3, }}>
                        <CardMedia
                            component="img"
                            height="140"
                            src={image}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body1" component="div">
                                4517  Washington Ave                        </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Manchester, Kentucky
                                <EditIcon sx={{ ml: 6 }} />
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                39495
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ m: 1, p: 1, boxShadow: 3, color: "#3ad09a82" }}>
                        <Typography gutterBottom variant="h6" component="div" color="text.primary">
                            Storage
                        </Typography>
                        <LinearProgress thickness={4} variant="determinate" value={65} color="inherit" />
                        <LinearProgress thickness={4} variant="determinate" value={65} color="inherit" />
                        <Typography gutterBottom variant="caption" component="div" color="text.secondary">
                            Using 0.75 GB from 1 GB included
                        </Typography>
                        <Box sx={{ width: '85%', m: 4 }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                src={imge}
                                alt="green iguana"
                            />
                            <Typography color="text.primary" variant='h6'>Follow the money</Typography>
                            <Typography variant="body2" color="text.primary">
                                Monitor your cash flow. Create bills from vendors and mark them as paid to track your expenses.
                            </Typography>
                            <Button size="small" variant="contained" color="success">Create your first bill</Button>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </Box >
    );
}

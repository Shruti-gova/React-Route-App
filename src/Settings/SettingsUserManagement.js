import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
export default function SettingsUserManagement() {
    return (
        <Box sx={{
            width: "100%",
            m: 6
        }} >
            <Box display="flex" justifyContent='space-between'>

                <Box>
                    <Typography variant='h5'>Techstuff Private Limited</Typography>
                    <Typography>Users</Typography>
                </Box>
                <Box>
                    <Typography>
                        <CardGiftcardIcon />
                        What's New</Typography>
                    <Button variant="contained">Invite</Button>
                </Box>
            </Box>
            <Typography sx={{ mt: 6, color: "GrayText" }}>You can invite a new user to access youe Wave account. Only give access to people you trust, since users can see your transactions and other bussiness information.
                <Button> Learn more about all user types</Button>
                and what they can do.</Typography>
            <Box sx={{ flexGrow: 1, mt: 6 }}>
                <AppBar position="static" sx={{ boxShadow: 0, borderRadius: 2, backgroundColor: "#F5F6FA", color: "inherit" }}>
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>

                            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                Ajay Patidar. ajaypatidar198@gmail.com
                            </Typography>
                            <Typography variant="caption" color="GrayText">Owner</Typography>
                        </Box>
                        <Button size="small" variant="outlined">Manage your profile</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ flexGrow: 1, mt: 6 }}>
                <AppBar position="static" sx={{ boxShadow: 0, borderRadius: 2, backgroundColor: "#F5F6FA", color: "inherit" }}>
                    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>

                            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
                                madhav.kabra1100@gmail.com
                            </Typography>
                            <Typography variant="caption" color="GrayText">Admin</Typography>
                        </Box>
                        <Button size="small" variant="outlined">Edit</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
    );

}

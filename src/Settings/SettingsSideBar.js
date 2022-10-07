import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Box from '@mui/material/Box';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';

const StyledNestedList = styled(List)({
    '& .MuiTypography-root ': {
        textDecoration: "none",
        color: "inherit"
    },
    '& .MuiListItemButton-root': {
        '&:hover': {
            color: '#3AD09A',

        }
    },
})
export default function SettingsSideBar() {
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 275, bgcolor: 'background.paper' }}>
                <Typography variant='h5'>Settings</Typography>
                <StyledNestedList>
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton>
                            <ListItemText primary="User Management" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonOutlinedIcon />
                            </ListItemIcon>
                            <Link href="/settings/user">

                                <ListItemText secondary="User" />
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Sales" />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <InsertDriveFileOutlinedIcon />
                            </ListItemIcon>
                            <Link href='/settings/invoice'>
                                <ListItemText secondary="Invoice" />
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Accounting" />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <CurrencyExchangeOutlinedIcon />
                            </ListItemIcon>
                            <Link href="/settings/date&currancy">

                                <ListItemText secondary="Date & Currancy" />
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Other" />
                        </ListItemButton>

                        <ListItemButton>
                            <ListItemIcon>
                                <ImportExportIcon />
                            </ListItemIcon>
                            <Link href="/settings/export">

                                <ListItemText secondary="Data export" />
                            </Link>
                        </ListItemButton>

                        <Box sx={{
                            backgroundColor: "#148B60",
                            width: 213,
                            height: 259,
                            borderRadius: 1,
                            p: 2,
                            textAlign: 'center',
                            color: "white"
                        }}>
                            <CircularProgress variant="determinate" size="100px" value={85} color="inherit" />
                            <Typography variant="h6">Profile Information</Typography>
                            <Typography >Lorem ipsum dolor sit amet</Typography>

                        </Box>
                    </List>
                </StyledNestedList>
            </Box>
        </>
    )
}

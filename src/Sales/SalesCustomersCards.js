import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { styled } from '@mui/material/styles';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
const StyledCard = styled(Box)(({ theme }) => ({
    '& .MuiBox-root': {
        marginTop: 100,
        padding: 1,
        display: "flex",
        justifyContent: "space-between"
    },
    '& .MuiCard-root': {
        minWidth: 232,
        margin: 12
    },
    '& .MuiCardContent-root': {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 32

    },
    '& .MuiAvatar-root': {
        width: 26,
        height: 26
    }

}));
const bull = (
    <Typography
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)', }}
    >
        •
    </Typography>
);

export default function SalesCustomerCard() {
    return (
        <React.Fragment>
            <StyledCard>
                <Box>
                    <Card >
                        <CardContent >
                            <Typography>
                                <HowToRegIcon />
                                150</Typography>
                            <MoreVertIcon />
                            <Typography color="GrayText">Total Clients</Typography>
                            <Typography>-4%
                                <TrendingDownIcon />
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card >
                        <CardContent>
                            <Typography>
                                <GroupIcon />
                                100
                            </Typography>
                            <MoreVertIcon />
                            <Typography color="GrayText">Total Members</Typography>
                            <Typography>
                                {bull}12{bull}8{bull}40
                            </Typography>

                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <Typography>
                                <GroupsIcon />
                                3/23
                            </Typography>
                            <MoreVertIcon />
                            <Typography color="GrayText">New/Returning</Typography>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent>
                            <AvatarGroup total={19}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                                <Avatar alt="Trevor Henderson" src="/static/images/avatar/6.jpg" />
                                <Avatar alt="Trevor Henderson" src="/static/images/avatar/7.jpg" />
                                <Avatar alt="Trevor Henderson" src="/static/images/avatar/8.jpg" />

                            </AvatarGroup>
                            <MoreVertIcon />
                            <Typography color="GrayText">Active Members</Typography>

                        </CardContent>
                    </Card>
                </Box>
            </StyledCard>
        </React.Fragment >
    );
}

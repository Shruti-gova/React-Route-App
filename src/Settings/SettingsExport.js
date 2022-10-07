import { Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { styled } from '@mui/material/styles';

const StyleCard = styled(Card)({
    minWidth: 275,
    '& .MuiCardContent-root ': {
        display: "flex",
        justifyContent: 'space-evenly',

    },
    '& .MuiTypography-root': {
        marginBottom: 1.5,
        width: 100
    }
})
export default function SetteingsExport() {
    return (
        <>
            <Box sx={{ width: "100%", m: 7 }}>
                <Typography variant="h5">Export your data</Typography>
                <Typography variant="h6" sx={{ mt: 6, mb: 2 }}>Accounting</Typography>
                <Box display="flex" justifyContent='space-between'>
                    <StyleCard>
                        <CardContent>
                            < InsertDriveFileOutlinedIcon fontSize="large" />
                            <Typography>
                                Export all transactions as XLS
                            </Typography>
                        </CardContent>
                    </StyleCard>
                    <StyleCard>
                        <CardContent>
                            <InsertDriveFileOutlinedIcon fontSize="large" />
                            <Typography>
                                Export all transactions as CSV
                            </Typography>
                        </CardContent>
                    </StyleCard>
                </Box>
                <Typography variant="h6" sx={{
                    mt: 6, mb: 2, width: 100
                }}>Receipts</Typography>
                <Card >
                    <CardContent sx={{ display: 'flex', justifyContent: "space-around" }}>
                        <InsertDriveFileOutlinedIcon fontSize="large" />
                        <Typography width="100px"
                        >
                            Export all receipts as a zip file
                        </Typography>
                        <KeyboardArrowRightIcon />
                    </CardContent>
                </Card>
            </Box>
        </>)
}

import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SettingsInvoice() {
    return (
        <Box sx={{
            width: "100%",
            m: 6
        }} >

            <Typography variant='h6'>Estimate Setting</Typography>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1 },
                    width: "100%",
                    pt: 8,
                    textAlign: "center"

                }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>

                    <Typography width='187px' textAlign='right'>Default Title
                    </Typography>
                    <TextField
                        id="outlined-helperText"
                        size='small'
                        defaultValue="Estimate"
                        helperText="The default title for all estimates. You can change this on any estimate. "
                        sx={{
                            width: "289px"
                        }}
                    />
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>

                    <Typography width='187px' textAlign='right'>Default Subheading
                    </Typography>
                    <TextField
                        id="outlined-helperText"
                        size='small'

                        defaultValue="LLPIN: AAP-6990"
                        helperText="This will be displayed below the title of each estimate. Useful for things like ABN number"
                        sx={{
                            width: "290px"
                        }} />
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>

                    <Typography width='187px' textAlign='right'>Default Footer
                    </Typography>
                    <TextField
                        id="outlined-helperText"
                        size='small'
                        helperText="This will be displayed at the bottom of each estimate."
                        sx={{
                            width: "289px"
                        }}
                    />
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-around"
                }}>

                    <Typography width='187px' textAlign='right'>Standard memo for new estimates
                    </Typography>
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        helperText="Appears on each estimate. Yu can choose to override it when you create a new estimate."
                        sx={{
                            width: "289px"
                        }}
                    />
                </Box>
                <Button variant='contained' color='success' sx={{ borderRadius: "20px" }} >Save all changes</Button>
            </Box>
        </Box>
    );
}
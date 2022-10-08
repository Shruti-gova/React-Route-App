import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { createTheme, ThemeProvider } from '@mui/material/styles';
const backgroundtheme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    padding: 10,
                    margin: 10,
                    backgroundColor: "#F8F7FF",
                    borderRadius: 4
                },
            },
        },
    },
});

export default function BillsCards() {
    return (
        <Card sx={{ display: "flex", flexDirection: "column", width: 290, boxShadow: 3 }}>
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>
                        OverDue Invoices
                    </Typography>
                    <Typography>
                        View
                    </Typography>
                </Box>
                <Box>
                    <ThemeProvider theme={backgroundtheme}>
                        <Typography>
                            DECHEA GmbH, $10,700.00
                        </Typography>
                        <Typography>
                            DECHEA GmbH, $10,700.00
                        </Typography>   <Typography>
                            DECHEA GmbH, $10,700.00
                        </Typography>   <Typography>
                            DECHEA GmbH, $10,700.00
                        </Typography>   <Typography>
                            Accelerator App,  $2,950.00
                        </Typography>
                    </ThemeProvider>
                </Box>
            </CardContent>

        </Card>
    );
}

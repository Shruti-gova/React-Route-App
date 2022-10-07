import * as React from 'react';
import SalesRecurringInvoiceCards from "./Sales/SalesRecurringInvoiceCards";
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import SalesRucrringInvoiceTable from './Sales/SalesRecurringInvoiceTable';
export default function SalesRecurringInvoice() {
    return (
        <React.Fragment>
            <Box component="div" sx={{ p: 3, mt: 9, width: "100%", }}>
                <Typography variant='h5'>
                    Recurring Invice
                </Typography>
                <SalesRecurringInvoiceCards />
                <SalesRucrringInvoiceTable />
            </Box>
        </React.Fragment>
    )
}
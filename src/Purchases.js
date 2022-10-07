import * as React from 'react';
import Box from '@mui/material/Box';
import BillDetails from './Purchases/BillDetails';
import Card from '@mui/material/Card';
import PaymentHistory from './Purchases/paymentHistory';

export default function PurchasesBill() {

    return (
        <Box sx={{ pt: 10, }}>
            <BillDetails />
            <PaymentHistory />
        </Box>

    );
}

import React from "react";
import SalesCustomerCard from "./Sales/SalesCustomersCards";
import SalesCustomerTable from "./Sales/SalesCustomerTable";
import Box from '@mui/material/Box';

export default function SalesCustomer() {
    return (
        <React.Fragment>
            <Box component="div" >
                <SalesCustomerCard />
                <SalesCustomerTable />
            </Box>
        </React.Fragment>
    )
}
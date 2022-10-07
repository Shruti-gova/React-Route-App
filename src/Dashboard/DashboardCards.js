
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import BarCard from "./BarCard";
import BillsCards from "./BillsCard";
import MiddleCard from "./middleCard";
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",

})
export default function DashboardCards() {
    return (
        <StyledBox >
            <Box sx={{ display: "flex", position: "relative", top: 100, gap: "5px", p: 2 }}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Stack direction="row" spacing={50} >
                        <Typography variant="h5">Dashboards</Typography>
                        <Button variant="contained" color="success">
                            Create new
                        </Button>
                    </Stack>
                    <BarCard />

                </Box >
                <Box display="flex" flexDirection="column" justifyContent="space-between">
                    <Typography variant="h5" sx={{ ml: 2 }}>Bills</Typography>
                    <BillsCards />
                </Box>
            </Box>
            {/* <Box sx={{ p: 3, pt: 17 }}> */}
            <Stack direction="row" spacing={70} sx={{ p: 3, pt: 17 }}>

                <Typography variant="h5">Payable & Owning</Typography>
                <Typography variant="h5">Expense Breackdown</Typography>
            </Stack>
            <MiddleCard />
            {/* </Box> */}
        </StyledBox>
    );
}